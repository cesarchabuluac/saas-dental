import { SubscriptionGuard } from '../guards'

export default [
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

    {
        path: "/reports/warehouse-stocks",
        name: "reports-warehouse-stocks",
        component: () =>
            import("@/views/reports/ReportWareHouses.vue"),
        beforeEnter: SubscriptionGuard,
        meta: {
            permission: "reports.index",
            pageTitle: "reports.waehouse_stocks.desc",
            breadcrumb: [
                {
                    text: "dashboard",
                    to: "/",
                },
                {
                    text: "reports.waehouse_stocks.slug",
                    active: true,
                },
            ],
        },
    },

    {
        path: "/reports/budgets",
        name: "reports-budgets",
        component: () =>
            import("@/views/reports/ReportBudgets.vue"),
        beforeEnter: SubscriptionGuard,
        meta: {
            permission: "reports.index",
            pageTitle: "reports.budgets.desc",
            breadcrumb: [
                {
                    text: "dashboard",
                    to: "/",
                },
                {
                    text: "reports.budgets.slug",
                    active: true,
                },
            ],
        },
    },

    {
        path: "/reports/clinic-actions",
        name: "reports-clinic-actions",
        component: () => import("@/views/reports/ReportClinicActions.vue"),
        beforeEnter: SubscriptionGuard,
        meta: {
            permission: "reports.index",
            pageTitle: "reports.clinic_actions.desc",
            breadcrumb: [
                {
                    text: "dashboard",
                    to: "/",
                },
                {
                    text: "reports.clinic_actions.slug",
                    active: true,
                },
            ],
        },
    },
]

