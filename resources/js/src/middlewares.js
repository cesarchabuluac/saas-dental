import _ from 'lodash'
import router from "./router";
import store from "./store";

router.beforeEach((to, from, next) => {
    console.log(to.name)
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
    } else if (to.name === 'subscription') {
        const roleId = store.getters['auth/getRoleId']
        if (roleId == 1 || roleId == 2) {
            next()
        } else {
            console.log('aqui....')
            next({name: 'home'})
            
        }
    } else {
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