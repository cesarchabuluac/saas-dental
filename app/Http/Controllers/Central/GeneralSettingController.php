<?php

namespace App\Http\Controllers\Central;

use App\Http\Controllers\Controller;
use App\Models\GeneralSetting;
use App\Repositories\CurrencyRepository;
use App\Repositories\GeneralSettingRepository;
use App\Repositories\PermissionRepository;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use App\Services\StorageService;

class GeneralSettingController extends Controller
{
    protected $generalSettingRepository;
    protected $storageService;
    protected $currencyRepository;     
    private $permissionRepository;

    public function __construct(GeneralSettingRepository $generalSettingRepository, StorageService $storageService, CurrencyRepository $currencyRepository,
    PermissionRepository $permissionRepository)
    {
        $this->generalSettingRepository = $generalSettingRepository;
        $this->storageService = $storageService;
        $this->currencyRepository = $currencyRepository;
        $this->permissionRepository = $permissionRepository;
    }

    public function index(Request $request)
    {
        $settings = $this->generalSettingRepository
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('key'), function ($query) use ($request) {
                    return $query->where('key', $request->key);
                });
            })
            ->whereNotIn('key', ['mail_password'])
            ->get();
        return $this->sendResponse($settings, 'Successfully settings!');
    }

    public function store(Request $request)
    {
        $input = $request->except(['_method', '_token', 'change_logo', 'logo']);

        $input = array_map(function ($value) {
            return !is_null($value) ? $value : '';
        }, $input);



        // get settings data
        $allSettings = GeneralSetting::get();

        try {

            DB::beginTransaction();

            if ($request->boolean('change_logo') && isset($request->logo)) {
                $this->storageService->setTenant(tenant());
                $path = $this->storageService->saveImageFromBase64($request->logo, "logo", 1);
                $input["app_logo"] = global_asset("/storage/" . $path);
                $allSettings->where('key', 'app_logo')->first()->update(['value' => $input['app_logo']]);
            }

            $settings = $input;

            if (!empty($settings['default_currency_id'])) {
                $currency = $this->currencyRepository->find($settings['default_currency_id']);
                if ($currency) {
                    
                    $settings['default_currency'] = $currency->symbol;
                    $settings['default_currency_code'] = $currency->code;
                    $settings['default_currency_decimal_digits'] = $currency->decimal_digits;
                    $settings['default_currency_rounding'] = $currency->rounding;
                    
                    $currency->update([
                        'is_default' => true,
                    ]);
                }
            }
            
            $updateClauses = '';
            $bindings = [];

            foreach ($settings as $key => $value) {
                $updateClauses .= "WHEN '$key' THEN ? ";
                $bindings[] = $value;
            }

            $updateClauses = trim($updateClauses);

            $sql = "UPDATE settings 
                    SET `value` = CASE `key` 
                        $updateClauses 
                        ELSE `value` END";

            DB::statement($sql, $bindings);

            DB::commit();

            Artisan::call("config:clear");

            $settings = GeneralSetting::whereNotIn('key', ['mail_password'])->get();
            return $this->sendResponse($settings, __('lang.updated_successfully', ['operator' => __('lang.app_setting')]));
        } catch (Exception $e) {
            DB::rollBack();
            return $this->sendError($e->getMessage());
        }
    }
}
