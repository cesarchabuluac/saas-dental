import { checkIsCentral } from '@/libs/domains';
import router from '@/router';
import TenantsProviders from '@/providers/Tenants'
import store from '@/store';
const TenantsResource = new TenantsProviders()

// En el archivo guards.js
export const SetupGuard = (to, from, next) => {
    if (!checkIsCentral()) {
        const isInitialSetUpActive = store.getters['auth/getCurrentAccount'].initial_setup;
        if (isInitialSetUpActive) {
            next(); // Permite que el usuario acceda a la ruta protegida
        } else {
            next({ name: "initial-setup" }); // Redirige al usuario a la página de configuracion inicial o a otra página bloqueada
        }
    } else {
        next(); // Si checkIsCentral() devuelve true, permite el acceso a la ruta
    }
};

export const SubscriptionGuard = (to, from, next) => {

    console.table(checkIsCentral())

    if (!checkIsCentral()) {
        const isSubscriptionActive = store.getters['auth/getCurrentAccount'].is_subscribed;
        const isInitialSetUpActive = store.getters['auth/getCurrentAccount'].initial_setup;
        const roleId = store.getters['auth/getRoleId']        

        console.table(isInitialSetUpActive)
       
        if (!isInitialSetUpActive) {
            next({ name: "initial-setup" }); // Redirige al usuario a la página de configuracion inicial o a otra página bloqueada
        } else {
            if (isSubscriptionActive) {
                next(); // Permite que el usuario acceda a la ruta protegida
            } else {
                next({ name: "subscription" }); // Redirige al usuario a la página de suscripción o a otra página bloqueada
            }
        }
    } else {
        next(); // Si checkIsCentral() devuelve true, permite el acceso a la ruta
    }
};