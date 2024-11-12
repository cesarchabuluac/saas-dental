export default [
  {
    title: "Dashboard",
    route: "home",
    icon: "HomeIcon",
    permission: 'dashboards.index',
  },
  // {
  //   title: 'appointments.menu',
  //   route: 'appointments',
  //   icon: 'CalendarIcon',
  //   permission: 'appointments.index',
  // },
  // {
  //   header: "settings",
  //   permission: "settings.index",
  // },
  {
    header: "setting",
    icon: "SettingsIcon",
    permission: 'settings.index',
    children: [
      {
        title: "general",
        icon: 'SettingsIcon',
        route: "settings",
        permission: 'settings.index',
      },
      {
        title: "faqs.menu",
        icon: 'HelpCircleIcon',
        route: "setting-faqs",
        permission: 'faqs.index',
      },
      {
        title: "importer",
        icon: 'UploadCloudIcon',
        route: "settings-imports",
        permission: 'imports.index',
      },
      {
        title: "users",
        icon: 'UsersIcon',
        route: "settings-users",
        permission: 'users.index',
      },
      {
        title: "permissions.menu",
        icon: 'UnlockIcon',
        route: "permissions",
        permission: 'permissions.index',
      },
      {
        title: 'branch_offices.menu',
        icon: 'GitBranchIcon',
        route: 'settings-branch-offices',
        permission: 'branch-offices.index',
      },
    ]
  },
  {
    header: 'catalogs',
    icon: 'BookOpenIcon',
    permission: "dashboards.index",
    children: [
      {
        title: 'patients.menu',
        route: 'apps-patients-list',
        icon: 'HeartIcon',
        permission: 'patients.index',
      },
      {
        title: 'clinical_actions.title',
        route: 'actions-list',
        permission: 'actions.index',
      },
      {
        title: 'laboratory_actions.menu',
        route: 'laboratory-actions',
        permission: 'laboratory_actions.index',
      },
      {
        title: 'laboratories.laboratories',
        route: 'apps-laboratory-list',
        permission: 'laboratories.index',
      },
      {
        title: 'inventories.menu',
        icon: 'ArchiveIcon',
        permission: 'inventories.active',
        children: [
          {
            title: 'inventories.brands.title_menu',
            route: 'apps-inventories-brands',
            permission: 'inventories.brands.index',
          },
          {
            title: 'inventories.units.title_menu',
            route: 'apps-inventories-units',
            permission: 'inventories.units.index',
          },
          {
            title: 'inventories.categories.title_menu',
            route: 'apps-inventories-categories',
            permission: 'inventories.categories.index',
          },
          {
            title: 'inventories.subcategories.title_menu',
            route: 'apps-inventories-subcategories',
            permission: 'inventories.subcategories.index',
          },
          {
            title: 'inventories.warehouses.title_menu',
            route: 'apps-inventories-warehouses',
            permission: 'inventories.warehouses.index',
          },
          {
            title: 'inventories.suppliers.title_menu',
            route: 'apps-inventories-suppliers',
            permission: 'inventories.suppliers.index',
          },
          {
            title: 'inventories.medicines.title_menu',
            route: 'apps-inventories-medicines',
            permission: 'inventories.medicines.index',
          },
          {
            title: 'inventories.purchases.title_menu',
            route: 'apps-inventories-purchases',
            permission: 'inventories.purchases.index',
          },
          {
            title: 'inventories.adjustments.title_menu',
            route: 'apps-inventories-adjustments',
            permission: 'inventories.adjustments.index',
          },
          {
            title: 'inventories.transfers.title_menu',
            route: 'apps-inventories-transfers',
            permission: 'inventories.transfers.index',
          },
        ],
      },
    ]
  },
  {
    title: "plans.title",
    icon: 'ServerIcon',
    route: "plans",
    permission: 'plans.index',
  },
  {
    title: "tenants.title",
    icon: 'DatabaseIcon',
    route: "tenants",
    permission: 'tenants.index',
  },
  // {
  //   title: "billings.histories.menu",
  //   icon: 'DollarSignIcon',
  //   route: "billing-history",
  //   permission: 'tenants.index',
  // },
  {
    header: 'laboratories.plural',
    icon: 'TriangleIcon',
    permission: 'laboratories.index',
    children: [    
      // {
      //   title: 'tariff',
      //   route: 'apps-tariff-list',
      //   permission: 'tariffs.index',
      // },
      {
        title: 'work_orders.menu',
        route: 'apps-work-orders-list',
        permission: 'orders.index',
      },
    ],
  },
 
  
  {
    title: 'budgets.menu',
    route: 'apps-budgets-list',
    icon: 'ClipboardIcon',
    permission: 'budgets.index',
  },

  {
    header: 'incomes.menu',
    icon: 'TrendingUpIcon',
    permission: 'payments.index',
    children: [
      {
        title: 'payments.menu',
        route: 'apps-payments-list',
        icon: 'DollarSignIcon',
        permission: 'payments.index',
      },
      {
        title: 'checks.menu',
        route: 'apps-checks-list',
        icon: 'CheckCircleIcon',
        permission: 'checks.index',
      },
      {
        title: 'cash_registers.menu',
        route: 'apps-cash-register-list',
        icon: 'BoxIcon',
        permission: 'cash_registers.index',
      },
    ],
  },
   
  
  {
    header: "expenses.menu",
    icon: "TrendingDownIcon",
    permission: "expenses.index",
    children: [
      {
        title: 'inventories.categories.title_menu',
        route: 'apps-expense-categories',
        icon: 'GitBranchIcon',
        permission: 'expenses.index',
      },
      {
        title: 'expenses.menu',
        route: 'apps-expenses-list',
        icon: 'TrendingDownIcon',
        permission: 'expenses.index',
      },
    ],
  }, 
  {
    title: 'reports.menu',
    route: 'reports',
    icon: 'BarChartIcon',
    permission: 'reports.index',
  },
]
