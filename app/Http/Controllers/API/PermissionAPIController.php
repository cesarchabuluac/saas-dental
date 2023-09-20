<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Repositories\PermissionRepository;
use Illuminate\Http\Request;

class PermissionAPIController extends Controller
{
    /** @var  PermissionRepository */
    private $permissionRepository;

    public function __construct(PermissionRepository $permissionRepository)
    {
        $this->permissionRepository = $permissionRepository;
    }

    public function index(Request $request)
    {
        $permissions = $this->permissionRepository->with('roles')
            ->where('name', 'LIKE', '%' . request('search') . '%')
            ->orWhere('description', 'LIKE', '%' . request('search') . '%');

        if ($request->boolean('is_all')) {
            $permissions = $permissions->get();
        } else {
            $permissions = $permissions->paginate(request('perPage'));
        }
        return $this->sendResponse($permissions, 'Permissions retrieved successfully');
    }

    public function checkPermission(Request $request)
    {
        $input = $request->all();

        foreach ($input as $key => $item) {
            $check = $this->permissionRepository->roleHasPermission($item);
            if ($check) {
                $this->permissionRepository->revokePermissionToRole($item);
            } else {
                $this->permissionRepository->givePermissionToRole($item);
            }
        }

        $permissions = $this->permissionRepository->with('roles')->get();
        return $this->sendResponse($permissions, __('lang.updated_successfully', ['operator' => __('lang.permission')]));
    }

    public function getAllPermissions()
    {
        return $this->permissionRepository->orderBy('name', 'ASC')->get();
    }
}
