import Vue from 'vue';
import Toast from 'vue-toastification';
// import 'vue-toastification/dist/index.css';

Vue.use(Toast, {
  position: 'bottom-right'
});

export const success = (message, icon = 'CheckIcon') => {
	const options = {
		type: 'success',
		icon: icon,
		showCloseButton: true,
		hideProgressBar: false,
		closeButton: "button",
		icon: true,
		rtl: false
	}
	Vue.prototype.$toast.success(message, options);
}

export const danger = (message, icon = 'XIcon') => {
	const options = {
		type: 'error',
		icon: icon,
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
	console.log(errorBag)
	if (errorBag.response.data.errors) {
		let errors = Object.values(errorBag.response.data.errors).flat();
		return errors[0] || null;
	} else {
		return errorBag.response.data.message;
	}
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

	let errorMessage = e.message; // Mensaje de error predeterminado
	console.log(errorMessage)

	if (e.response) {
		const { status } = e.response;
		const validationError = getFirstValidationError(e);
		switch (status) {
			case 401:
			case 403:
			case 404:
			case 405:
			case 422:
			case 500:
				errorMessage = validationError || "Error en la solicitud.";
				break;
		}
	}

	Vue.prototype.$toast.error(errorMessage, options);
}

