import _ from 'lodash'
import router from "./router";
import store from "./store";

router.beforeEach((to, from, next) => {
    if (to.name === "login" || to.name === "forgot-password" || to.name === "reset-password" || to.name === "auth-register" || to.name === 'impersonate') {
        if (store.state.auth.user === null) {
            next();
        } else {
            router.push({ name: "home" });
        }
    } else if (to.name === "home") {
        if (store.state.auth.user === null || store.state.auth.user === undefined) {
            router.push({
                name: "login",
                params: {
                    info: "Necesita iniciar sesión.",
                },
            });
        } else {
            next();
        }
    } 
    else if (to.name === 'subscription') {
        
        const userRoles = store.getters['auth/getUser'].roles || []; // Array de roles del usuario

        // Define los roles que tienen acceso
        const allowedRoles = [1, 2]; // Roles que permiten acceder a la ruta

        // Verifica si alguno de los roles del usuario está en la lista de roles permitidos
        const hasAccess = userRoles.some(role => allowedRoles.includes(role.id));

        if (hasAccess) {
            next();
        } else {
            console.log('Acceso denegado');
            next({ name: 'home' }); // Redirige a la página de inicio u otra ruta
        }
       
    } 
    else {
        if (store.state.auth.user) {
            next();
        } else {
            next({ name: 'login' })
        }
    }    
})

// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
    // Remove initial loading    
    const appLoading = document.getElementById("loading-bg");
    if (appLoading) {
        appLoading.style.display = "none";
    }
});