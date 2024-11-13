import { checkIsCentral } from '@/libs/domains';
import router from '@/router';
import TenantsProviders from '@/providers/Tenants'
import store from '@/store';
const TenantsResource = new TenantsProviders()

// En el archivo guards.js
export const SetupGuard = (to, from, next) => {

    console.log(`Check is central: ${checkIsCentral()}`)

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
    console.table(`¿ es central ? ${checkIsCentral()}`);

    // if (!checkIsCentral()) {
    //     const isSubscriptionActive = store.getters['auth/getCurrentAccount'].is_subscribed;
    //     const isInitialSetUpActive = store.getters['auth/getCurrentAccount'].initial_setup;
       
    //     if (!isInitialSetUpActive) {
    //         next({ name: "initial-setup" }); // Redirige al usuario a la página de configuración inicial
    //     } else {
    //         if (isSubscriptionActive) {
    //             next(); // Permite el acceso
    //         } else {
    //             next({ name: "subscription" }); // Redirige a la página de suscripción
    //         }
    //     }
    // } else {
    //     console.log('Es central');
    //     console.log('To:', to);
    //     console.log('From:', from);
        
    //     next(); // Si es central, permite el acceso
    // }

    next();
};
