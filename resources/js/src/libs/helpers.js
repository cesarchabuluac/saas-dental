import Vue from 'vue';
import Toast from 'vue-toastification';
// import 'vue-toastification/dist/index.css';

Vue.use(Toast, {
  position: 'bottom-right'
});

export const success = (message) => {
	const options = {
		type: 'success',
		icon: 'check',
		showCloseButton: true,
		hideProgressBar: false,
		closeButton: "button",
		icon: true,
		rtl: false
	}
	Vue.prototype.$toast.success(message, options);
}

export const danger = (message) => {
	const options = {
		type: 'error',
		icon: 'error',
		showCloseButton: true,
		hideProgressBar: false,
		closeButton: "button",
		icon: true,
		rtl: false
	}
  Vue.prototype.$toast.error(message, options);
}

export const showMessage = (message, type = 'success', icon = 'check') => {
    let options = {};
    switch (type) {
		case 'success':
			options.type = 'success';
			break;
		case 'error':
			options.type = 'error';
			break;
		case 'warning':
			options.type = 'warning';
			break;
		case 'info':
			options.type = 'info';
			break;
		default:
			options.type = 'default';
			break;
    }
    options.icon = icon;
    options.showCloseButton = true;
    options.hideProgressBar = false,
    options.closeButton = "button",
    options.icon = true,
    options.rtl = false
    Vue.prototype.$toast(message, options);
}

export const getFirstValidationError = (errorBag) => {
    let errors = Object.values(errorBag)
    errors = errors.flat()
    return errors[0]
}

export const handleResponseErrors = (e) => {

	const options = {
		type: 'error',
		icon: 'error',
		showCloseButton: true,
		hideProgressBar: false,
		closeButton: "button",
		icon: true,
		rtl: false
	}

	switch (e.response.status) {
		case 401:
		case 403:
		case 404:
		case 405:
		case 422:
		case 500:
			Vue.prototype.$toast.error(getFirstValidationError(e), options);
			break;
		default:
			Vue.prototype.$toast.error(e.message, options);
			break;
	}
    // if (e.response.status === 422) {
	// 	let errors = Object.values(e.response.data.errors)
    // 	errors = errors.flat() 
	// 	Vue.prototype.$toast.error(errors[0], options);
    // } else {
	// 	Vue.prototype.$toast.error(e.message, options);
    // }
}

