import Vue from 'vue'
import VueRouter from 'vue-router'
import { SubscriptionGuard } from '../guards'
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Dashboard.vue'),
      beforeEnter: SubscriptionGuard,
      meta: {
        pageTitle: 'Home',
        permission: 'dashboards.index',
        breadcrumb: [
          {
            text: 'Home',
            active: true,
          },
        ],
      },
    },

    {
      path: "/appointments",
      name: "appointments",
      component: () => import('@/views/apps/calendar/Calendar.vue'),
      beforeEnter: SubscriptionGuard,
      meta: {
        permission: "appointments.index",
        pageTitle: "appointments.desc",
        breadcrumb: [
          {
            text: 'Dashboard',
            to: "/",
          },
          {
            text: "appointments.slug",
            active: true,
          },
        ],
      },
    },    
    {
      path: "/appointments/add",
      name: "appointments-add",
      component: () => import("@/views/apps/appointments/calendar-add/AppointmentAdd.vue"),
      beforeEnter: SubscriptionGuard,
      meta: {
        permission: "appointments.create",
        pageTitle: "appointments.add.desc",
        breadcrumb: [
          {
            text: 'dashboard',
            to: "/",
          },
          {
            text: "appointments.add.slug",
            active: true,
          },
        ],
      },
    },
    {
      path: "/appointment/edit/:id",
      name: "appointment-edit",
      component: () => import("@/views/apps/appointments/calendar-edit/AppointmentEdit.vue"),
      beforeEnter: SubscriptionGuard,
      meta: {
        permission: "appointments.update",
        pageTitle: "appointments.edit.desc",
        breadcrumb: [
          {
            text: 'dashboard',
            to: "/",
          },
          {
            text: "appointments.edit.slug",
            active: true,
          },
        ],
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/authentication/Login.vue'),
      meta: {
        layout: "full",
        resource: "Auth",
        redirectIfLoggedIn: true,
      },
    },
    {
      path: '/register',
      name: 'auth-register',
      component: () => import('@/views/authentication/Register-v1.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '/impersonate/:token',
      name: 'impersonate',
      component: () => import('@/views/Impersonate.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '/error-404',
      name: 'error-404',
      component: () => import('@/views/error/Error404.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '*',
      redirect: 'error-404',
    },

    //Subscriptions
    {
      path: '/subscription',
      name: 'subscription',
      component: () => import('@/views/tenant/subscriptions/Subscription.vue'),
      // beforeEnter: SubscriptionGuard,
      meta: {
        // layout: 'full',
        pageTitle: 'subscriptions.desc',
        breadcrumb: [
          {
            text: 'subscriptions.slug',
            active: true,
          },
        ],
      },
    },
    {
      path: '/initial-setup',
      name: 'initial-setup',
      component: () => import('@/views/tenant/InitialSetUp.vue'),
      // beforeEnter: SubscriptionGuard,        
      meta: {
        layout: 'full',
        // pageTitle: 'subscriptions.desc',
        // breadcrumb: [
        //   {
        //     text: 'subscriptions.slug',
        //     active: true,
        //   },
        // ],
      },
    },

    // *===============================================---*
    // *--------- SETTINGS -------------------------------*
    // *===============================================---*
    {
      path: '/profile',
      name: 'profile',
      component: () => import('@/views/settings/profile/AccountSetting.vue'),
      // beforeEnter: SubscriptionGuard,
      meta: {
        pageTitle: 'user_profiles.desc',
        requiresAuth: true,
        breadcrumb: [
          {
            text: 'Dashboard',
          },
          {
            text: 'user_profiles.slug',
            active: true,
          },
        ],
      },
    },
    {
      path: "/settings",
      name: "settings",
      component: () => import("@/views/settings/general/Settings.vue"),
      beforeEnter: SubscriptionGuard,
      meta: {
        permission: "settings.index",
        pageTitle: "app_setting",
        breadcrumb: [
          {
            text: "dashboard",
            to: "/"
          },
          {
            text: "app_setting",
            active: true,
          },
        ],
      },
    },
    {
      path: "/permissions",
      name: "permissions",
      component: () => import("@/views/settings/permissions/Index.vue"),
      beforeEnter: SubscriptionGuard,
      meta: {
        permission: "permissions.index",
        pageTitle: "permissions.desc",
        breadcrumb: [
          {
            text: "dashboard",
            to: "/",
          },
          {
            text: "permissions.slug",
            active: true,
          },
        ],
      },
    },
    {
      path: '/setting/faqs',
      name: 'setting-faqs',
      component: () => import('@/views/central/faqs/Index.vue'),
      meta: {
        permission: 'dashboards.index',
        pageTitle: 'FAQ',
        breadcrumb: [
          {
            text: 'Pages',
            to: "/",
          },
          {
            text: 'FAQ',
            active: true,
          },
        ],
      },
    },
    {
      path: '/pages/faq',
      name: 'pages-faq',
      component: () => import('@/views/pages/faq/Faq.vue'),
      meta: {
        permission: 'dashboards.index',
        pageTitle: 'FAQ',
        breadcrumb: [
          {
            text: 'Pages',
            to: "/",
          },
          {
            text: 'FAQ',
            active: true,
          },
        ],
      },
    },

    //USERS
    {
      path: "/settings/users",
      name: "settings-users",
      component: () => import("@/views/settings/users/Index.vue"),
      beforeEnter: SubscriptionGuard,
      meta: {
        permission: "users.index",
        pageTitle: "user_desc",
        breadcrumb: [
          {
            text: "dashboard",
            to: "/"
          },
          {
            text: "user_plural",
            active: true,
          },
        ],
      },
    },
    {
      path: "/settings/users/add",
      name: "settings-user-add",
      component: () => import("@/views/settings/users/Add.vue"),
      beforeEnter: SubscriptionGuard,
      meta: {
        permission: "users.add",
        pageTitle: "user_add",
        breadcrumb: [
          {
            text: "dashboard",
            to: "/"
          },
          {
            text: "user",
            active: true,
          },
        ],
      },
    },
    {
      path: "/settings/users/:id/edit",
      name: "settings-user-edit",
      component: () => import("@/views/settings/users/Edit.vue"),
      beforeEnter: SubscriptionGuard,
      meta: {
        permission: "users.edit",
        pageTitle: "user_edit",
        breadcrumb: [
          {
            text: "dashboard",
            to: "/"
          },
          {
            text: "user",
            active: true,
          },
        ],
      },
    },
    {
      path: "/users/:id/profile",
      name: "user-profile",
      component: () => import("@/views/settings/profile/Profile.vue"),
      beforeEnter: SubscriptionGuard,
      meta: {
        permission: "users.profile",
      },
    },

    //IMPORTS
    {
      path: "/settings/imports",
      name: "settings-imports",
      component: () => import("@/views/settings/Imports/Index.vue"),
      meta: {
        permission: "import.index",
        pageTitle: "imports.desc",
        requiresAuth: true,
        breadcrumb: [
          {
            text: "dashboard",
            to: "/"
          },
          {
            text: "imports.slug",
            active: true,
          },
        ],
      },
    },

    //Plans
    {
      path: "/plans",
      name: "plans",
      component: () => import("@/views/central/plans/Index.vue"),
      meta: {
        permission: "plans.index",
        pageTitle: "plans.title",
        breadcrumb: [
          {
            text: "dashboard",
            to: "/"
          },
          {
            text: "plans.slug",
            active: true,
          },
        ],
      },
    },
    {
      path: "/plans/add",
      name: "plans-add",
      component: () => import("@/views/central/plans/Add.vue"),
      meta: {
        permission: "plans.create",
        pageTitle: "plans.title",
        breadcrumb: [
          {
            text: "dashboard",
            to: "/"
          },
          {
            text: "add",
            active: true,
          },
        ],
      },
    },
    {
      path: "/plans/edit/:id",
      name: "plans-edit",
      component: () => import("@/views/central/plans/Edit.vue"),
      meta: {
        permission: "plans.edit",
        pageTitle: "plans.title",
        breadcrumb: [
          {
            text: "dashboard",
            to: "/"
          },
          {
            text: "edit",
            active: true,
          },
        ],
      },
    },

    //Tenants
    {
      path: "/tenants",
      name: "tenants",
      component: () => import("@/views/central/tenants/Index.vue"),
      meta: {
        permission: "tenants.index",
        pageTitle: "tenants.title",
        breadcrumb: [
          {
            text: "dashboard",
          },
          {
            text: "tenants.slug",
            active: true,
          },
        ],
      },
    },
    {
      path: "/tenants/:id/details",
      name: "tenants-detail",
      component: () => import("@/views/central/tenants/Show.vue"),
      meta: {
        permission: "tenants.show",
        pageTitle: "tenants.detail",
        breadcrumb: [
          {
            text: "dashboard",
          },
          {
            text: "tenants.slug",
            active: true,
          },
        ],
      },
    },
    //Billings
    {
      path: "/billing/history",
      name: "billing-history",
      component: () => import("@/views/central/billings/Index.vue"),
      meta: {
        permission: "tenants.index",
        pageTitle: "billings.histories.desc",
        breadcrumb: [
          {
            text: "dashboard",
          },
          {
            text: "billings.histories.slug",
            active: true,
          },
        ],
      },
    },

    //APPS

    // *===============================================---*
    // *--------- CATALOGS --------------------------------*
    // *===============================================---*

    //BRANCH OFFICES
    {
      path: "/settings/branch-offices",
      name: "settings-branch-offices",
      component: () =>
        import("@/views/settings/branchOffices/Index.vue"),
      beforeEnter: SubscriptionGuard,
      meta: {
        permission: "branch-offices.index",
        pageTitle: "branch_offices.desc",
        breadcrumb: [
          {
            text: "dashboard",
            to: "/",
          },
          {
            text: "branch_offices.slug",
            active: true,
          },
        ],
      },
    },
    {
      path: "/settings/branch-offices/add",
      name: "settings-branch-offices-add",
      component: () =>
        import("@/views/settings/branchOffices/Add.vue"),
      beforeEnter: SubscriptionGuard,
      meta: {
        permission: "branch-offices.create",
        pageTitle: "branch_offices.title_add",
        breadcrumb: [
          {
            text: "dashboard",
            to: "/",
          },
          {
            text: "branch_offices.slug",
            active: true,
          },
        ],
      },
    },
    {
      path: "/settings/branch-offices/:id/edit",
      name: "settings-branch-offices-edit",
      component: () =>
        import("@/views/settings/branchOffices/Edit.vue"),
      beforeEnter: SubscriptionGuard,
      meta: {
        permission: "branch-offices.edit",
        pageTitle: "branch_offices.title_edit",
        breadcrumb: [
          {
            text: "dashboard",
            to: "/",
          },
          {
            text: "branch_offices.slug",
            active: true,
          },
        ],
      },
    },

    //CLINIC ACTIONS
    {
      path: "/apps/actions",
      name: "actions-list",
      component: () =>
        import("@/views/apps/catalogs/clinicalActions/Index.vue"),
      beforeEnter: SubscriptionGuard,
      meta: {
        permission: "actions.index",
        pageTitle: "clinical_actions.title_plural",
        breadcrumb: [
          {
            text: "dashboard",
            to: "/",
          },
          {
            text: "clinical_actions.title",
            active: true,
          },
        ],
      },
    },
    {
      path: "/apps/actions/add",
      name: "actions-add",
      component: () =>
        import("@/views/apps/catalogs/clinicalActions/Add.vue"),
      beforeEnter: SubscriptionGuard,
      meta: {
        permission: "actions.create",
        pageTitle: "clinical_actions.title_add",
        breadcrumb: [
          {
            text: "dashboard",
            to: "/",
          },
          {
            text: "clinical_actions.title",
            active: true,
          },
        ],
      },
    },
    {
      path: "/apps/actions/:id/edit",
      name: "actions-edit",
      component: () =>
        import("@/views/apps/catalogs/clinicalActions/Edit.vue"),
      beforeEnter: SubscriptionGuard,
      meta: {
        permission: "actions.edit",
        pageTitle: "clinical_actions.title_edit",
        breadcrumb: [
          {
            text: "dashboard",
            to: "/",
          },
          {
            text: "clinical_actions.title",
            active: true,
          },
        ],
      },
    },

    //LABORATORY ACTIONS
    {
      path: "/apps/laboratory-actions",
      name: "laboratory-actions",
      component: () =>
        import("@/views/apps/catalogs/laboratoryActions/Index.vue"),
      beforeEnter: SubscriptionGuard,
      meta: {
        permission: "laboratory_actions.index",
        pageTitle: "laboratory_actions.desc",
        breadcrumb: [
          {
            text: "dashboard",
            to: "/",
          },
          {
            text: "laboratory_actions.slug",
            active: true,
          },
        ],
      },
    },
    {
      path: "/apps/laboratory-actions/add",
      name: "apps-laboratory-actions-add",
      component: () =>
        import("@/views/apps/catalogs/laboratoryActions/Add.vue"),
      beforeEnter: SubscriptionGuard,
      meta: {
        permission: "laboratory_actions.create",
        pageTitle: "laboratory_actions.title_add",
        breadcrumb: [
          {
            text: "dashboard",
            to: "/",
          },
          {
            text: "laboratory_actions.slug",
            active: true,
          },
        ],
      },
    },
    {
      path: "/apps/laboratory-actions/:id/edit",
      name: "apps-laboratory-actions-edit",
      component: () =>
        import("@/views/apps/catalogs/laboratoryActions/Edit.vue"),
      beforeEnter: SubscriptionGuard,
      meta: {
        permission: "laboratory_actions.edit",
        pageTitle: "laboratory_actions.title_edit",
        breadcrumb: [
          {
            text: "dashboard",
            to: "/",
          },
          {
            text: "laboratory_actions.slug",
            active: true,
          },
        ],
      },
    },

    //CATALOG LABORATORY
    {
      path: "/apps/laboratory/list",
      name: "apps-laboratory-list",
      component: () => import("@/views/apps/catalogs/laboratories/laboratory-list/LaboratoryList.vue"),
      beforeEnter: SubscriptionGuard,
      meta: {
        permission: "laboratories.index",
        pageTitle: "laboratories.desc",
        breadcrumb: [
          {
            text: "dashboard",
            to: "/",
          },
          {
            text: "laboratories.slug",
            active: true,
          },
        ],
      },
    },
    {
      path: "/apps/laboratory/add",
      name: "apps-laboratory-add",
      component: () => import("@/views/apps/catalogs/laboratories/laboratory-add/LaboratoryAdd.vue"),
      beforeEnter: SubscriptionGuard,
      meta: {
        permission: "laboratories.create",
        pageTitle: "laboratories.add.desc",
        breadcrumb: [
          {
            text: "dashboard",
            to: "/",
          },
          {
            text: "laboratories.add.slug",
            active: true,
          },
        ],
      },
    },
    {
      path: "/apps/laboratory/edit/:id",
      name: "apps-laboratory-edit",
      component: () => import("@/views/apps/catalogs/laboratories/laboratory-edit/LaboratoryEdit.vue"),
      beforeEnter: SubscriptionGuard,
      meta: {
        permission: "laboratories.edit",
        pageTitle: "laboratories.edit.desc",
        breadcrumb: [
          {
            text: "dashboard",
            to: "/",
          },
          {
            text: "laboratories.edit.slug",
            active: true,
          },
        ],
      },
    },

    // WORK ORDERS
    {
      path: "/apps/work-orders/list",
      name: "apps-work-orders-list",
      component: () => import("@/views/apps/work-orders/work-order-list/WorkOrderList.vue"),
      beforeEnter: SubscriptionGuard,
      meta: {
        permission: "orders.index",
        pageTitle: "work_orders.desc",
        breadcrumb: [
          {
            text: "dashboard",
            to: "/",
          },
          {
            text: "work_orders.slug",
            active: true,
          },
        ],
      },
    },
    {
      path: '/apps/work-orders/list/:filter',
      name: 'apps-work-orders-list-filter',
      component: () => import("@/views/apps/work-orders/work-order-list/WorkOrderList.vue"),
      beforeEnter: SubscriptionGuard,
      meta: {
        permission: "orders.index",
      },
    },
    {
      path: "/apps/work-orders/add",
      name: "apps-work-orders-add",
      component: () => import("@/views/apps/work-orders/work-order-add/WorkOrderAdd.vue"),
      beforeEnter: SubscriptionGuard,
      meta: {
        permission: "orders.create",
        pageTitle: "work_orders.add.desc",
        breadcrumb: [
          {
            text: "dashboard",
            to: "/",
          },
          {
            text: "work_orders.add.slug",
            active: true,
          },
        ],
      },
    },
    {
      path: "/apps/work-orders/edit/:id",
      name: "apps-work-orders-edit",
      component: () => import("@/views/apps/work-orders/work-order-edit/WorkOrderEdit.vue"),
      beforeEnter: SubscriptionGuard,
      meta: {
        permission: "orders.edit",
        pageTitle: "work_orders.edit.desc",
        breadcrumb: [
          {
            text: "dashboard",
            to: "/"
          },
          {
            text: "work_orders.edit.slug",
            active: true,
          },
        ],
      },
    },
    {
      path: "/apps/work-orders/show/:id",
      name: "apps-work-orders-show",
      component: () => import("@/views/apps/work-orders/work-order-show/WorkOrderShow.vue"),
      beforeEnter: SubscriptionGuard,
      meta: {
        permission: "orders.show",
        pageTitle: "work_orders.show.desc",
        breadcrumb: [
          {
            text: "dashboard",
            to: "/",
          },
          {
            text: "work_orders.show.slug",
            active: true,
          },
        ],
      },
    },

    // *===============================================---*
    // *--------- INVENTORIES CATEGORIES --------------------------------*
    // *===============================================---*
    {
      path: "/apps/inventories/categories",
      name: "apps-inventories-categories",
      component: () => import("@/views/apps/inventories/Categories.vue"),
      beforeEnter: SubscriptionGuard,
      meta: {
        permission: "inventories.categories.index",
        pageTitle: "inventories.categories.title",
        breadcrumb: [
          {
            text: "dashboard",
            to: "/",
          },
          {
            text: "inventories.categories.title_singular",
            active: true,
          },
        ]
      }
    },
    {
      path: "/apps/inventories/subcategories",
      name: "apps-inventories-subcategories",
      component: () => import("@/views/apps/inventories/SubCategories.vue"),
      beforeEnter: SubscriptionGuard,
      meta: {
        permission: "inventories.subcategories.index",
        pageTitle: "inventories.subcategories.title",
        breadcrumb: [
          {
            text: "dashboard",
            to: "/",
          },
          {
            text: "inventories.subcategories.title_singular",
            active: true,
          },
        ]
      }
    },
    {
      path: "/apps/inventories/units",
      name: "apps-inventories-units",
      component: () => import("@/views/apps/inventories/Units.vue"),
      beforeEnter: SubscriptionGuard,
      meta: {
        permission: "inventories.units.index",
        pageTitle: "inventories.units.title",
        breadcrumb: [
          {
            text: "dashboard",
            to: "/",
          },
          {
            text: "inventories.units.title_singular",
            active: true,
          },
        ]
      }
    },
    {
      path: "/apps/inventories/brands",
      name: "apps-inventories-brands",
      component: () => import("@/views/apps/inventories/Brands.vue"),
      beforeEnter: SubscriptionGuard,
      meta: {
        permission: "inventories.brands.index",
        pageTitle: "inventories.brands.title",
        breadcrumb: [
          {
            text: "dashboard",
            to: "/",
          },
          {
            text: "inventories.brands.title_singular",
            active: true,
          },
        ]
      }
    },
    {
      path: "/apps/inventories/warehouses",
      name: "apps-inventories-warehouses",
      component: () => import("@/views/apps/inventories/Warehouses.vue"),
      beforeEnter: SubscriptionGuard,
      meta: {
        permission: "inventories.warehouses.index",
        pageTitle: "inventories.warehouses.title",
        breadcrumb: [
          {
            text: "dashboard",
            to: "/",
          },
          {
            text: "inventories.warehouses.title_singular",
            active: true,
          },
        ]
      }
    },
    {
      path: "/apps/inventories/suppliers",
      name: "apps-inventories-suppliers",
      component: () => import("@/views/apps/inventories/Suppliers.vue"),
      beforeEnter: SubscriptionGuard,
      meta: {
        permission: "inventories.suppliers.index",
        pageTitle: "inventories.suppliers.title",
        breadcrumb: [
          {
            text: "dashboard",
            to: "/",
          },
          {
            text: "inventories.suppliers.title_singular",
            active: true,
          },
        ]
      }
    },
    {
      path: "/apps/inventories/medicines",
      name: "apps-inventories-medicines",
      component: () => import("@/views/apps/inventories/Medicines.vue"),
      beforeEnter: SubscriptionGuard,
      meta: {
        permission: "inventories.medicines.index",
        pageTitle: "inventories.medicines.title",
        breadcrumb: [
          {
            text: "dashboard",
            to: "/",
          },
          {
            text: "inventories.medicines.title_singular",
            active: true,
          },
        ]
      }
    },
    {
      path: "/apps/inventories/purchases",
      name: "apps-inventories-purchases",
      component: () => import("@/views/apps/inventories/Purchases/Index.vue"),
      beforeEnter: SubscriptionGuard,
      meta: {
        permission: "inventories.purchases.index",
        pageTitle: "inventories.purchases.title",
        breadcrumb: [
          {
            text: "dashboard",
            to: "/",
          },
          {
            text: "inventories.purchases.title_singular",
            active: true,
          },
        ]
      }
    },
    {
      path: "/apps/inventories/purchases/add",
      name: "apps-inventories-purchases-add",
      component: () => import("@/views/apps/inventories/Purchases/Create.vue"),
      beforeEnter: SubscriptionGuard,
      meta: {
        permission: "inventories.purchases.create",
        pageTitle: "inventories.purchases.add.title",
        breadcrumb: [
          {
            text: "dashboard",
            to: "/",
          },
          {
            text: "inventories.purchases.add.title_singular",
            active: true,
          },
        ]
      }
    },
    {
      path: "/apps/inventories/purchases/:id/edit",
      name: "apps-inventories-purchases-edit",
      component: () => import("@/views/apps/inventories/Purchases/Update.vue"),
      beforeEnter: SubscriptionGuard,
      meta: {
        permission: "inventories.purchases.edit",
        pageTitle: "inventories.purchases.edit.title",
        breadcrumb: [
          {
            text: "dashboard",
            to: "/",
          },
          {
            text: "inventories.purchases.edit.title_singular",
            active: true,
          },
        ]
      }
    },
    {
      path: "/apps/inventories/adjustments",
      name: "apps-inventories-adjustments",
      component: () => import("@/views/apps/inventories/Adjustments/Index.vue"),
      beforeEnter: SubscriptionGuard,
      meta: {
        permission: "inventories.adjustments.index",
        pageTitle: "inventories.adjustments.title",
        breadcrumb: [
          {
            text: "dashboard",
            to: "/",
          },
          {
            text: "inventories.adjustments.title_singular",
            active: true,
          },
        ]
      }
    },
    {
      path: "/apps/inventories/adjustments/add",
      name: "apps-inventories-adjustments-add",
      component: () => import("@/views/apps/inventories/Adjustments/Create.vue"),
      beforeEnter: SubscriptionGuard,
      meta: {
        permission: "inventories.adjustments.create",
        pageTitle: "inventories.adjustments.add.title",
        breadcrumb: [
          {
            text: "dashboard",
            to: "/",
          },
          {
            text: "inventories.adjustments.add.title_singular",
            active: true,
          },
        ]
      }
    },
    {
      path: "/apps/inventories/adjustments/:id/edit",
      name: "apps-inventories-adjustments-edit",
      component: () => import("@/views/apps/inventories/Adjustments/Update.vue"),
      beforeEnter: SubscriptionGuard,
      meta: {
        permission: "inventories.adjustments.edit",
        pageTitle: "inventories.adjustments.edit.title",
        breadcrumb: [
          {
            text: "dashboard",
            to: "/",
          },
          {
            text: "inventories.adjustments.edit.title_singular",
            active: true,
          },
        ]
      }
    },
    {
      path: "/apps/inventories/adjustments/:id/show",
      name: "apps-inventories-adjustments-show",
      component: () => import("@/views/apps/inventories/Adjustments/Show.vue"),
      beforeEnter: SubscriptionGuard,
      meta: {
        permission: "inventories.adjustments.show",
        pageTitle: "inventories.adjustments.show.title",
        breadcrumb: [
          {
            text: "dashboard",
            to: "/",
          },
          {
            text: "inventories.adjustments.show.title_singular",
            active: true,
          },
        ]
      }
    },
    {
      path: "/apps/inventories/transfers",
      name: "apps-inventories-transfers",
      component: () => import("@/views/apps/inventories/Transfers/Index.vue"),
      beforeEnter: SubscriptionGuard,
      meta: {
        permission: "inventories.transfers.index",
        pageTitle: "inventories.transfers.title",
        breadcrumb: [
          {
            text: "dashboard",
            to: "/",
          },
          {
            text: "inventories.transfers.title_singular",
            active: true,
          },
        ]
      }
    },
    {
      path: "/apps/inventories/transfers/add",
      name: "apps-inventories-transfers-add",
      component: () => import("@/views/apps/inventories/Transfers/Create.vue"),
      beforeEnter: SubscriptionGuard,
      meta: {
        permission: "inventories.transfers.create",
        pageTitle: "inventories.transfers.add.title",
        breadcrumb: [
          {
            text: "dashboard",
            to: "/",
          },
          {
            text: "inventories.transfers.add.title_singular",
            active: true,
          },
        ]
      }
    },
    {
      path: "/apps/inventories/transfers/:id/show",
      name: "apps-inventories-transfers-show",
      component: () => import("@/views/apps/inventories/Transfers/Show.vue"),
      beforeEnter: SubscriptionGuard,
      meta: {
        permission: "inventories.transfers.show",
        pageTitle: "inventories.transfers.show.title",
        breadcrumb: [
          {
            text: "dashboard",
            to: "/",
          },
          {
            text: "inventories.transfers.show.title_singular",
            active: true,
          },
        ]
      }
    },

    //PATIENTS
    {
      path: "/apps/patients/list",
      name: "apps-patients-list",
      component: () => import("@/views/apps/patients/patient-list/PatientList.vue"),
      beforeEnter: SubscriptionGuard,
      meta: {
        permission: "patients.index",
        pageTitle: "patients.desc",
        breadcrumb: [
          {
            text: "dashboard",
          },
          {
            text: "patients.slug",
            active: true,
          },
        ],
      },
    },
    {
      path: "/apps/patients/add",
      name: "apps-patients-add",
      component: () => import("@/views/apps/patients/patient-add/PatientAdd.vue"),
      beforeEnter: SubscriptionGuard,
      meta: {
        permission: "patients.create",
        pageTitle: "patients.add.desc",
        breadcrumb: [
          {
            text: "dashboard",
            to: "/",
          },
          {
            text: "patients.add.slug",
            active: true,
          },
        ],
      },
    },
    {
      path: "/apps/patients/view/:id",
      name: "apps-patients-view",
      component: () => import("@/views/apps/patients/patient-view/PatientView.vue"),
      beforeEnter: SubscriptionGuard,
      meta: {
        permission: "patients.show",
        pageTitle: "patients.show.desc",
        breadcrumb: [
          {
            text: "dashboard",
            to: "/",
          },
          {
            text: "patients.show.slug",
            active: true,
          },
        ],
      },
    },
    {
      path: "/apps/patients/view/:id/statement-detail",
      name: "apps-patients-view-statement-detail",
      component: () => import("@/views/apps/patients/StatementDetail.vue"),
      beforeEnter: SubscriptionGuard,
      meta: {
        permission: "patients.show",
        pageTitle: "patients.statements.desc",
        breadcrumb: [
          {
            text: "dashboard",
            to: "/",
          },
          {
            text: "patients.statements.slug",
            active: true,
          },
        ],
      },
    },
    {
      path: "/apps/patients/edit/:id",
      name: "apps-patients-edit",
      component: () => import("@/views/apps/patients/patient-edit/PatientEdit.vue"),
      beforeEnter: SubscriptionGuard,
      meta: {
        permission: "patients.edit",
        pageTitle: "patients.edit.desc",
        breadcrumb: [
          {
            text: "dashboard",
            to: "/",
          },
          {
            text: "patients.edit.slug",
            active: true,
          },
        ],
      },
    },
    {
      path: "/apps/patients/view/:id/evolution/:budget_id",
      name: "apps-patients-evolution",
      component: () => import("@/views/apps/patients/patient-evolution/PatientEvolution.vue"),
      beforeEnter: SubscriptionGuard,
      meta: {
        permission: "patients.evolution",
        pageTitle: "patients.evolutions.desc",
        breadcrumb: [
          {
            text: "dashboard",
            to: "/",
          },
          {
            text: "patients.evolutions.slug",
            active: true,
          },
        ],
      },
    },

    //PATIENT TRACKER DETAIL
    {
      path: "/patient-statistics",
      name: "patient-statistics",
      component: () => import("@/views/apps/patients/PatientStatistics.vue"),
      beforeEnter: SubscriptionGuard,
      meta: {
        permission: "home",
        requiresAuth: true,
        pageTitle: "patients.statistics.desc",
        breadcrumb: [
          {
            text: "dashboard",
            to: "/",
          },
          {
            text: "patients.statistics.slug",
            active: true,
          }
        ],
      },
    },

    //BUDGETS
    {
      path: "/apps/budgets/list",
      name: "apps-budgets-list",
      component: () =>
        import("@/views/apps/budgets/budget-list/BudgetList.vue"),
      beforeEnter: SubscriptionGuard,
      meta: {
        permission: "budgets.index",
        pageTitle: "budgets.desc",
        breadcrumb: [
          {
            text: "dashboard",
            to: "/"
          },
          {
            text: "budgets.slug",
            active: true,
          },
        ],
      },
    },
    {
      path: "/apps/budgets/add",
      name: "apps-budgets-add",
      component: () =>
        import("@/views/apps/budgets/budget-add/BudgetAdd.vue"),
      beforeEnter: SubscriptionGuard,
      meta: {
        permission: "budgets.create",
        pageTitle: "budgets.add.desc",
        breadcrumb: [
          {
            text: "dashboard",
            to: "/",
          },
          {
            text: "budgets.add.slug",
            active: true,
          },
        ],
      },
    },
    {
      path: "/apps/budgets/edit/:id",
      name: "apps-budgets-edit",
      component: () =>
        import("@/views/apps/budgets/budget-edit/BudgetEdit.vue"),
      beforeEnter: SubscriptionGuard,
      meta: {
        permission: "budgets.edit",
        pageTitle: "budgets.edit.desc",
        breadcrumb: [
          {
            text: "dashboard",
            to: "/",
          },
          {
            text: "budgets.edit.slug",
            active: true,
          },
        ],
      },
    },
    {
      path: "/apps/budgets/show/:id",
      name: "apps-budgets-show",
      component: () =>
        import("@/views/apps/budgets/budget-show/BudgetShow.vue"),
      beforeEnter: SubscriptionGuard,
      meta: {
        permission: "budgets.show",
        pageTitle: "budgets.show.desc",
        breadcrumb: [
          {
            text: "dashboard",
            to: "/"
          },
          {
            text: "budgets.show.slug",
            active: true,
          },
        ],
      },
    },

    //PAYMENTS
    {
      path: "/apps/payments/list",
      name: "apps-payments-list",
      component: () =>
        import("@/views/apps/payments/payment-list/PaymentList.vue"),
      beforeEnter: SubscriptionGuard,
      meta: {
        permission: "payments.index",
        pageTitle: "payments.desc",
        breadcrumb: [
          {
            text: "dashboard",
            to: "/",
          },
          {
            text: "payments.slug",
            active: true,
          },
        ],
      },
    },
    {
      path: "/apps/payments/view",
      name: "apps-payments-view",
      component: () => import("@/views/apps/payments/payment-view/PaymentView.vue"),
      beforeEnter: SubscriptionGuard,
      meta: {
        permission: "payments.view",
        pageTitle: "payments.views",
        breadcrumb: [
          {
            text: "dashboard",
            to: "/",
          },
          {
            text: "payments.slug",
            active: true,
          },
        ],
      },
    },
    {
      path: "/apps/payment/budget/:id/charge",
      name: "payments.budgets.charge",
      component: () => import("@/views/apps/payments/payment-charge/Charge.vue"),
      beforeEnter: SubscriptionGuard,
      meta: {
        permission: "payments.charge",
        pageTitle: "charges.add",
        breadcrumb: [
          {
            text: "dashboard",
            to: "/",
          },
          {
            text: "charges.payment",
            active: true,
          },
        ],
      },
    },
    {
      path: "/apps/payment/budget/:id/preview/:payment_id",
      name: "payments-budgets-preview",
      component: () => import("@/views/apps/payments/payment-preview/PaymentPreview.vue"),
      beforeEnter: SubscriptionGuard,
      meta: {
        permission: "payments.preview",
        pageTitle: "payments.preview.desc",
        breadcrumb: [
          {
            text: "dashboard",
            to: "/",
          },
          {
            text: "payments.preview.slug",
            active: true,
          },
        ],
      },
    },
    {
      path: "/apps/expense-categories/list",
      name: "apps-expense-categories",
      component: () => import("@/views/apps/expenses/Categories.vue"),
      beforeEnter: SubscriptionGuard,
      meta: {
        permission: "expenses.index",
        pageTitle: "expenses.desc",
        breadcrumb: [
          {
            text: "dashboard",
            to: "/",
          },
          {
            text: "expenses.slug",
            active: true,
          },
        ],
      },
    },
    {
      path: "/apps/expenses/list",
      name: "apps-expenses-list",
      component: () => import("@/views/apps/expenses/expense-list/ExpenseList.vue"),
      beforeEnter: SubscriptionGuard,
      meta: {
        permission: "expenses.index",
        pageTitle: "expenses.desc",
        breadcrumb: [
          {
            text: "dashboard",
            to: "/",
          },
          {
            text: "expenses.slug",
            active: true,
          },
        ],
      },
    },
    {
      path: "/apps/checks/list",
      name: "apps-checks-list",
      component: () => import("@/views/apps/checks/check-list/CheckList.vue"),
      beforeEnter: SubscriptionGuard,
      meta: {
        permission: "checks.index",
        pageTitle: "checks.desc",
        breadcrumb: [
          {
            text: "dashboard",
            to: "/",
          },
          {
            text: "checks.slug",
            active: true,
          },
        ],
      },
    },

    //CASH REGISTERS
    {
      path: '/apps/cash-register/list',
      name: 'apps-cash-register-list',
      component: () => import('@/views/apps/cash-registers/cash-register-list/CashRegisterList.vue'),
      beforeEnter: SubscriptionGuard,
      meta: {
        permission: 'cash_registers.index',
        pageTitle: 'cash_registers.desc',
        breadcrumb: [
          {
            text: "dashboard",
            to: "/",
          },
          {
            text: 'cash_registers.slug',
            active: true,
          },
        ],
      },
    },
    {
      path: '/apps/cash-register/add',
      name: 'apps-cash-register-add',
      component: () => import('@/views/apps/cash-registers/cash-register-add/CashRegisterAdd.vue'),
      beforeEnter: SubscriptionGuard,
      meta: {
        permission: 'cash_registers.create',
        pageTitle: 'cash_registers.add.desc',
        breadcrumb: [
          {
            text: "dashboard",
            to: "/",
          },
          {
            text: 'cash_registers.add.slug',
            active: true,
          },
        ],
      },
    },
    {
      path: "/apps/cash-register/show/:id",
      name: "apps-cash-register-show",
      component: () => import("@/views/apps/cash-registers/cash-register-show/CashRegisterShow.vue"),
      beforeEnter: SubscriptionGuard,
      meta: {
        permission: "cash_registers.show",
        pageTitle: "cash_registers.show.desc",
        breadcrumb: [
          {
            text: "dashboard",
            to: "/",
          },
          {
            text: "cash_registers.show.slug",
            active: true,
          },
        ],
      },
    },

    // *===============================================---*
    // *--------- TODO & IT'S FILTERS N TAGS ---------------------------------------*
    // *===============================================---*
    {
      path: '/apps/todo',
      name: 'apps-todo',
      component: () => import('@/views/apps/todo/Todo.vue'),
      meta: {
        permission: "todos.index",
        contentRenderer: 'sidebar-left',
        contentClass: 'todo-application',
        navActiveLink: 'apps-todo',
      },
    },
    {
      path: '/apps/todo/:filter',
      name: 'apps-todo-filter',
      component: () => import('@/views/apps/todo/Todo.vue'),
      meta: {
        permission: "todos.index",
        contentRenderer: 'sidebar-left',
        contentClass: 'todo-application',
        navActiveLink: 'apps-todo',
      },
      beforeEnter(to, _, next) {
        if (['important', 'completed', 'deleted'].includes(to.params.filter))
          next()
        else
          next({ name: 'error-404' })
      },
    },
    {
      path: '/apps/todo/tag/:tag',
      name: 'apps-todo-tag',
      component: () => import('@/views/apps/todo/Todo.vue'),
      meta: {
        permission: "todos.index",
        contentRenderer: 'sidebar-left',
        contentClass: 'todo-application',
        navActiveLink: 'apps-todo',
      },
      beforeEnter(to, _, next) {
        if (['team', 'low', 'medium', 'high', 'update'].includes(to.params.tag))
          next()
        else
          next({ name: 'error-404' })
      },
    },

    // *===============================================---*
    // *--------- REPORTS --------------------------------*
    // *===============================================---*        
    {
      path: '/reports',
      name: 'reports',
      component: () => import("@/views/reports/Index.vue"),
      beforeEnter: SubscriptionGuard,
      meta: {
        permission: "reports.index",
        pageTitle: "reports.desc",
        breadcrumb: [
          {
            text: "dashboard",
            to: "/"
          },
          {
            text: "reports.slug",
            active: true,
          },
        ],
      },
    },
    {
      path: "/reports/appointments",
      name: "reports-appointments",
      component: () =>
        import("@/views/reports/appointments/ReportAppointment.vue"),
      beforeEnter: SubscriptionGuard,
      meta: {
        permission: "reports.index",
        pageTitle: "reports.appointments.desc",
        breadcrumb: [
          {
            text: "dashboard",
            to: "/",
          },
          {
            text: "reports.appointments.slug",
            active: true,
          },
        ],
      },
    },
    {
      path: "/reports/patients",
      name: "reports-patients",
      component: () =>
        import("@/views/reports/ReportPatients.vue"),
      beforeEnter: SubscriptionGuard,
      meta: {
        permission: "reports.index",
        pageTitle: "reports.patients.desc",
        breadcrumb: [
          {
            text: "dashboard",
            to: "/",
          },
          {
            text: "reports.patients.slug",
            active: true,
          },
        ],
      },
    },
    {
      path: "/reports/expenses",
      name: "reports-expenses",
      component: () =>
        import("@/views/reports/ReportExpenses.vue"),
      beforeEnter: SubscriptionGuard,
      meta: {
        permission: "reports.index",
        pageTitle: "reports.expenses.desc",
        breadcrumb: [
          {
            text: "dashboard",
            to: "/",
          },
          {
            text: "reports.expenses.slug",
            active: true,
          },
        ],
      },
    },
    {
      path: "/reports/payments",
      name: "reports-payments",
      component: () =>
        import("@/views/reports/ReportPayments.vue"),
      beforeEnter: SubscriptionGuard,
      meta: {
        permission: "reports.index",
        pageTitle: "reports.payments.desc",
        breadcrumb: [
          {
            text: "dashboard",
            to: "/",
          },
          {
            text: "reports.payments.slug",
            active: true,
          },
        ],
      },
    },
    {
      path: "/reports/medicines",
      name: "reports-medicines",
      component: () =>
        import("@/views/reports/ReportMedicines.vue"),
      beforeEnter: SubscriptionGuard,
      meta: {
        permission: "reports.index",
        pageTitle: "reports.medicines.desc",
        breadcrumb: [
          {
            text: "dashboard",
            to: "/",
          },
          {
            text: "reports.medicines.slug",
            active: true,
          },
        ],
      },
    },

  ],
})

export default router
