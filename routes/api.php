<?php

use App\Http\Controllers\API\DashboardAPIController;
use App\Http\Controllers\API\NotificationAPIController;
use App\Http\Controllers\API\UserAPIController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\Central\TenantController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\TenantImpersonationController;
use App\Http\Controllers\TenantRegisterController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix' => 'auth'], function () {
  Route::post('login', [AuthController::class, 'login']);
  Route::post('register', [AuthController::class, 'register']);

  Route::group(['middleware' => 'auth:api'], function () {
    Route::post('logout', [AuthController::class, 'logout']);
    Route::get('user', [AuthController::class, 'user']);
  });
});


Route::post('/tenants/register', [TenantRegisterController::class, 'store'])->name('tenants.store');
Route::get("settings/general", "App\Http\Controllers\Central\GeneralSettingController@index")->name('settings.general');

Route::group(['middleware' => 'auth:api'], function () {
  Route::post('/logout', [AuthController::class, 'logout']);
  Route::get('/profile', [AuthController::class, 'user']);
  Route::put('change-password', 'App\Http\Controllers\API\UserAPIController@password')->name('users.change-password');
  Route::resource('users', 'App\Http\Controllers\API\UserAPIController');

  Route::get('permissions', 'App\Http\Controllers\API\PermissionAPIController@index')->name('permissions.index');
  Route::post('permissions', 'App\Http\Controllers\API\PermissionAPIController@checkPermission')->name('permissions.store');

  Route::get('tenant/me', 'App\Http\Controllers\Central\TenantController@me');
});

// Tenant Register and Find Domain and Login API
Route::post('/register', [TenantRegisterController::class, 'store']);

Route::group(['middleware' => 'auth:api', 'as' => 'central.'], function () {
  Route::get('/impersonate/{tenant}', [TenantController::class, 'impersonate'])->name('tenant.impersonate');
  Route::resource('settings', 'App\Http\Controllers\Central\GeneralSettingController');
  Route::resource('plans', 'App\Http\Controllers\Central\PlanController');
  Route::post('plans/update/{id}', 'App\Http\Controllers\Central\PlanController@update')->name('plans.update');
  Route::resource('currencies', 'App\Http\Controllers\Central\CurrencyController');

  Route::post('tenants/{tenant}/ban', [TenantController::class, 'ban']);
  Route::resource('tenants', 'App\Http\Controllers\Central\TenantController');

  // dashboard
  Route::get('/dashboard-summary/{summaryType}', [DashboardController::class, 'index']);
  Route::get('/dashboard/top-plans', [DashboardController::class, 'topPlans']);

  // client means tenants here
  Route::get('/dashboard/top-clients', [DashboardController::class, 'topClients']);
});

Route::group(['middleware' => 'auth:api', 'as' => 'tenant.'], function () {


  // Dashboard stats
  Route::get('/dashboards/{summeryType}', [DashboardAPIController::class, 'dashboardSummery'])->name('dashboards.index');

  Route::get('users/criteria', 'App\Http\Controllers\API\UserAPIController@getByCriteria');
  Route::resource('users', 'App\Http\Controllers\API\UserAPIController');

  Route::get('actions/all', 'App\Http\Controllers\API\ActionAPIController@getAllActions')->name('actions.all');
  Route::get('actions/{group_id}/group', 'App\Http\Controllers\API\ActionAPIController@getActionsByGroup')->name('actions.group');
  Route::resource('actions', 'App\Http\Controllers\API\ActionAPIController');

  Route::get('action-groups/all', 'App\Http\Controllers\API\ActionGroupAPIController@getAll');
  Route::resource('action-groups', 'App\Http\Controllers\API\ActionGroupAPIController');

  Route::get('laboratory-actions/all', 'App\Http\Controllers\API\LaboratoryActionAPIController@getAllActionLaboratory');
  Route::resource('laboratory-actions', 'App\Http\Controllers\API\LaboratoryActionAPIController');

  Route::get('branch-offices/all', 'App\Http\Controllers\API\BranchOfficeAPIController@getAll');
  Route::post('branch-offices/{id}', 'App\Http\Controllers\API\BranchOfficeAPIController@update')->name('branch-offices.update');
  Route::resource('branch-offices', 'App\Http\Controllers\API\BranchOfficeAPIController');

  Route::prefix('inventories')->name('inventories.')->group(function () {
    Route::resource('categories', 'App\Http\Controllers\API\Inventories\CategoryAPIController');
    Route::resource('subcategories', 'App\Http\Controllers\API\Inventories\SubCategoryAPIController');
    Route::resource('units', 'App\Http\Controllers\API\Inventories\UnitAPIController');
    Route::resource('brands', 'App\Http\Controllers\API\Inventories\BrandAPIController');
    Route::resource('warehouses', 'App\Http\Controllers\API\Inventories\WarehouseAPIController');
    Route::resource('suppliers', 'App\Http\Controllers\API\Inventories\SupplierAPIController');
    Route::resource('medicines', 'App\Http\Controllers\API\Inventories\MedicineAPIController');
    Route::resource('purchases', 'App\Http\Controllers\API\Inventories\PurchaseAPIController');
    Route::post('purchases/{id}/marked', 'App\Http\Controllers\API\Inventories\PurchaseAPIController@markAsReceived')->name('purchases.update');
    Route::resource('adjustments', 'App\Http\Controllers\API\Inventories\AdjustmentAPIController');
    Route::resource('transfers', 'App\Http\Controllers\API\Inventories\TransferAPIController');
  });

  Route::get('actions/all', 'App\Http\Controllers\API\ActionAPIController@getAllActions')->name('actions.all');
  Route::get('actions/{group_id}/group', 'App\Http\Controllers\API\ActionAPIController@getActionsByGroup')->name('actions.group');
  Route::resource('actions', 'App\Http\Controllers\API\ActionAPIController');

  Route::get('action-groups/all', 'App\Http\Controllers\API\ActionGroupAPIController@getAll');
  Route::resource('action-groups', 'App\Http\Controllers\API\ActionGroupAPIController');

  Route::get('laboratory-actions/all', 'App\Http\Controllers\API\LaboratoryActionAPIController@getAllActionLaboratory');
  Route::resource('laboratory-actions', 'App\Http\Controllers\API\LaboratoryActionAPIController');

  Route::get('patients/filter', 'App\Http\Controllers\API\PatientAPIController@filter')->name('patients.filter');
  Route::get('patients/search', 'App\Http\Controllers\API\PatientAPIController@searchPatients')->name('patients.search');
  Route::get('patients/next-appointment', 'App\Http\Controllers\API\PatientAPIController@nextAppointment')->name('patients.next.appointment');
  Route::resource('patients', 'App\Http\Controllers\API\PatientAPIController');
  Route::resource('anamnesis', 'App\Http\Controllers\API\AnamnesiAPIController');

  //Appointments
  Route::get('appointments/report', 'App\Http\Controllers\API\AppointmentAPIController@filterReport')->name('appointments.report');
  Route::get('appointments/print', 'App\Http\Controllers\API\AppointmentAPIController@print')->name('appointments.print');
  Route::get('appointments/monthly', 'App\Http\Controllers\API\AppointmentAPIController@appointmentsMonthly')->name('appointments.monthly');
  Route::get('appointments/events', 'App\Http\Controllers\API\AppointmentAPIController@getEvents');
  Route::post('appointments/{id}/send', 'App\Http\Controllers\API\AppointmentAPIController@sendNotification')->name('appointments.send');
  Route::get('appointments/available', 'App\Http\Controllers\API\AppointmentAPIController@availableEvent');
  Route::resource('appointments', 'App\Http\Controllers\API\AppointmentAPIController');
  Route::put('appointments/{id}/status', 'App\Http\Controllers\API\AppointmentAPIController@changeStatus')->name('appointments.change.status');


  //Branch Offices
  Route::get('branch-offices/all', 'App\Http\Controllers\API\BranchOfficeAPIController@getAll');
  Route::resource('branch-offices', 'App\Http\Controllers\API\BranchOfficeAPIController');

  //Budgets
  Route::post('budgets/pdf', 'App\Http\Controllers\API\BudgetAPIController@donwloadPDF')->name('budgets.pdf');
  Route::put('budgets/{id}/approve', 'App\Http\Controllers\API\BudgetAPIController@approve')->name('budgets.approve');
  Route::post('budgets/{id}/send', 'App\Http\Controllers\API\BudgetAPIController@sendEmail')->name('budgets.send');
  Route::resource('budgets', 'App\Http\Controllers\API\BudgetAPIController');

  //Payments
  Route::get('payments/dashboard', 'App\Http\Controllers\API\PaymentAPIController@dashboard')->name('payments.dashboard');
  Route::get('payments/{id}/preview', 'App\Http\Controllers\API\PaymentAPIController@preview')->name('payments.preview');
  Route::post('payments/send', 'App\Http\Controllers\API\PaymentAPIController@send')->name('payments.send');
  Route::post('payments/collection', 'App\Http\Controllers\API\PaymentAPIController@storeCollection')->name('payments.collection');
  Route::post('payments/partial', 'App\Http\Controllers\API\PaymentAPIController@storePartial')->name('payments.partial');
  Route::post('payments/pdf', 'App\Http\Controllers\API\PaymentAPIController@donwloadPDF')->name('payments.pdf');
  Route::resource('payments', 'App\Http\Controllers\API\PaymentAPIController')->except('show');
  Route::resource('expenses', 'App\Http\Controllers\API\ExpenseAPIController');
  Route::resource('checks', 'App\Http\Controllers\API\CheckAPIController');

  #Dashboards
  Route::resource('dashboards', 'App\Http\Controllers\API\DashboardAPIController')->only('index');
  Route::get('dashboards/professionals', 'App\Http\Controllers\API\DashboardAPIController@getProfessionals');

  //Cash Register
  Route::get('cash-registers/generate', 'App\Http\Controllers\API\CashRegisterAPIController@generate');
  Route::get('cash-registers/export/{id}', 'App\Http\Controllers\API\CashRegisterAPIController@donwload');
  Route::resource('cash-registers', 'App\Http\Controllers\API\CashRegisterAPIController');

  //Medical Histories
  // Route::post('medical-histories/patient/{id}/upload', 'App\Http\Controllers\API\MedicalHistoryAPIController@upload');
  Route::resource('medical-histories', 'App\Http\Controllers\API\MedicalHistoryAPIController');

  // Laboratory
  Route::get('laboratories/all', 'App\Http\Controllers\API\LaboratoryAPIController@getAllLaboratory');
  Route::resource('laboratories', 'App\Http\Controllers\API\LaboratoryAPIController');

  // Tariff
  // Route::resource('tariffs', 'App\Http\Controllers\API\TariffAPIController');

  // Work Order
  Route::post('work-orders/pdf', 'App\Http\Controllers\API\WorkOrderAPIController@donwloadPDF');
  Route::resource('work-orders', 'App\Http\Controllers\API\WorkOrderAPIController');

  //TODO
  Route::resource('todos', 'App\Http\Controllers\API\TaskAPIController');


  Route::prefix('v2')->group(function () {
    Route::get('budgets', 'App\Http\Controllers\API\V2\BudgetAPIController@index')->name('budgets.index');
  });

  //NOTIFICATIONS
  Route::resource('notifications', NotificationAPIController::class);
});
