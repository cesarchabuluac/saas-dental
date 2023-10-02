import _ from "lodash";
import momentTimezone from 'moment-timezone'
import moment from 'moment'
import store from "@/store";

import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";

export default {
    methods: {
        isWithinOfficeHours(dateStr, startTime, endTime) {
            const selectedDateTime = new Date(dateStr);
            const selectedHour = selectedDateTime.getHours();
            const officeStartHour = parseInt(startTime.split(':')[0]);
            const officeEndHour = parseInt(endTime.split(':')[0]);
            return selectedHour >= officeStartHour && selectedHour <= officeEndHour
        },
        isValidDate(dateStr, format) {
            const selectedDateTime = moment(dateStr, format, true);
            return selectedDateTime.isValid();
        },
        formatDate(value, formatting = { month: 'short', day: 'numeric', year: 'numeric' }) {
            const date = moment(value).tz(this.findSetting('timezone'));
            if (date.isValid()) {
                if (date.format('HH:mm:ss') === '00:00:00') {
                    // Si la fecha no tiene hora (es solo una fecha), aplicamos el formato "MMM D, YYYY"
                    return date.format('MMM D, YYYY');
                } else {
                    // Si la fecha tiene hora, aplicamos el formato "MMM D, YYYY HH:mm"
                    return date.format('MMM D, YYYY HH:mm');
                }
            }

            if (!value)
                return value

            // const fechaUTC = new Date(value);
            // const fechaLocal = new Date(fechaUTC.toLocaleString('en-US', { timeZone: this.findSetting('timezone') }));

            switch (store.getters['auth/getLocale']) {
                case 'es':
                    return new Intl.DateTimeFormat('es-ES', formatting).format(new Date(value))
                    break;
                case 'en':
                    return new Intl.DateTimeFormat('en-US', formatting).format(new Date(value))
                    break;
                case 'fr':
                    return new Intl.DateTimeFormat('fr-FR', formatting).format(new Date(value))
                    break;
                case 'de':
                    return new Intl.DateTimeFormat('de-DE', formatting).format(new Date(value))
                    break;
                case 'pt':
                    return new Intl.DateTimeFormat('pt-PT', formatting).format(new Date(value))
                default:
                    return new Intl.DateTimeFormat('en-US', formatting).format(new Date(value))
                    break;
            }
        },
        dateTimeFormat(date, format = 'MMM D, YYYY HH:mm') {
            moment.locale(this.findSetting('language'))
            moment.tz.setDefault(this.findSetting('timezone'))
            if (moment(date).isValid()) {
                const dateWithTimeZone = momentTimezone(date)
                return dateWithTimeZone.format(format)
            }
        },
        formatTimestamp(timestamp) {
            // Utiliza Moment.js para formatear el timestamp en el formato deseado
            const date = moment.unix(timestamp).format('YYYY-MM-DD HH:mm:ss'); // Cambia el formato según tus necesidades
            return this.dateTimeFormat(date)
        },
        translatePaymentMethod(value) {
            switch (value) {
                case 'cash':
                    return this.$t('payments.method_cash')
                case 'debit_card':
                    return this.$t('payments.method_debit_card')
                case 'credit_card':
                    return this.$t('payments.method_credit_card')
                case 'check':
                    return this.$t('payments.method_check')
                case 'transfer':
                    return this.$t('payments.method_transfer')
            }
        },
        checkIsTenant() {
            const hostname = window.location.hostname;
            const parts = hostname.split('.');

            console.log(`parts ${parts}`)
            console.log(`Domain: ${process.env.MIX_CENTRAL_DOMAIN}`)

            // Si la URL es localhost o una dirección IP, no hay subdominio.
            if (parts.length === 1 || parts[0] === 'localhost' || parts[0] === process.env.MIX_CENTRAL_DOMAIN) {
                return false;
            }

            // Si hay al menos dos partes en el nombre de host, el subdominio es la primera parte.
            if (parts.length >= 2) {
                return true;
            }

            return false
        },
        daysRemaining(value) {
            const endDate = moment(value, 'YYYY-MM-DD H:m');
            const currentDate = moment();
            return endDate.diff(currentDate, 'days');            
        },
        formatDateTime(value, formatting = { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false }) {
            if (!value)
                return value

            switch (store.getters['auth/getLocale']) {
                case 'es':
                    return new Intl.DateTimeFormat('es-ES', formatting).format(new Date(value))
                    break;
                case 'en':
                    return new Intl.DateTimeFormat('en-US', formatting).format(new Date(value))
                    break;
                case 'fr':
                    return new Intl.DateTimeFormat('fr-FR', formatting).format(new Date(value))
                    break;
                case 'de':
                    return new Intl.DateTimeFormat('de-DE', formatting).format(new Date(value))
                    break;
                case 'pt':
                    return new Intl.DateTimeFormat('pt-PT', formatting).format(new Date(value))
                default:
                    return new Intl.DateTimeFormat('en-US', formatting).format(new Date(value))
                    break;
            }
        },
        padString(value, long = 10) {
            return value.toString().padStart(long, '0');
        },
        dateFormat(date, format = 'DD/MM/YYYY') {
            moment.locale(this.findSetting('language'))
            moment.tz.setDefault(this.findSetting('timezone'))
            if (moment(date).isValid()) {
                const dateWithTimeZone = momentTimezone(date)
                return dateWithTimeZone.format(format)
            }
        },
        dateHuman(date) {
            moment.locale(this.findSetting('language'))
            moment.tz.setDefault(this.findSetting('timezone'))
            const before = moment(date, 'YYYY-MM-DD H:i:s')
            const now = moment(new Date(), 'YYYY-MM-DD H:i:s')
            return moment(before).fromNow()
        },
        momentFromNow(_date) {
            moment.locale(this.findSetting('language'))
            moment.tz.setDefault(this.findSetting('timezone'))
            const before = moment(_date, 'YYYY-MM-DD')
            const now = moment(new Date(), 'YYYY-MM-DD')
            return moment(before).fromNow()
        },
        momentFormat(date = null, format = 'MMMM Do YYYY, h:mm:ss a') {
            moment.tz.setDefault(this.findSetting('timezone'))
            moment.locale(this.findSetting('language'))
            if (date) {
                return moment(date).format(this.findSetting('date_format'))
            }
            return moment().format(format)
        },
        currentDate(format = 'MMMM Do YYYY, h:mm:ss a') {
            moment.locale(this.findSetting('language'))
            moment.tz.setDefault(this.findSetting('timezone'))
            return moment().format(format)
        },
        isDarkMode() {
            return store.state.appConfig.layout.skin === 'dark' || false
        },
        formatMoney(value) {
            if (!value) return '0.0'
            const val = (value / 1).toFixed(2)
            if (isNaN(val)) {
                return '0.0'
            }
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        },
        formatPrice(value) {
            if (isNaN(value)) return 0
            const currencyRight = this.findSetting('enable_currency_right')
            const currencyDecimalDigits = parseInt(this.findSetting('default_currency_decimal_digits'))
            const currencyRounding = this.findSetting('default_currency_rounding')
            const currency = this.findSetting('default_currency')
            const val = (currencyDecimalDigits > 0) ? (value / 1).toFixed(currencyDecimalDigits).replace(',', '.') : (value / 1)
            if (currencyRight == 1) {
                const resultRight = (currencyDecimalDigits > 0) ? `${val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} ${currency}` : val
                return `${resultRight}${currency}`
            }
            const resultLeft = (currencyDecimalDigits > 0) ? val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : val
            return `${currency}${resultLeft}`
        },
        findSetting(key) {
            const setting = store.getters['auth/getSettings']
            return setting[key]
        },
        canAccess(name) {
            const permission = store.getters['auth/getPermissions']
            return _.find(permission, (p) => p.name === name) ? true : false
        },
        translate(key) {
            return this.$t(key)
        },
        resolveStatusActive(active) {
            return active ? 'success' : 'secondary'
        },
        formatActive(value) {
            return value ? this.$t('yes') : this.$t('no')
        },
        resolveStateAppointment(state) {
            if (state === 'pending') return this.$t('appointments.status.pending')
            if (state === 'canceled') return this.$t('appointments.status.cancelled')
            if (state === 'confirmed') return this.$t('appointments.status.confirmed')
            if (state === 'assisted') return this.$t('appointments.status.assisted')
            if (state === 'unassisted') return this.$t('appointments.status.unassisted')
        },
        resolveStateAppointmentColor(state) {
            if (state === 'pending') return 'warning'
            if (state === 'canceled') return 'danger'
            if (state === 'confirmed') return 'success'
            if (state === 'assisted') return 'primary'
            if (state === 'unassisted') return 'dark'
        },
        resolveTranlateStatusActive(active) {
            return active ? this.$t("active") : this.$t("inactive");
        },
        resolveStatusBadge(active) {
            return active ? 'success' : 'secondary'
        },
        resolveStatusVariant(status) {
            if (_.isEmpty(status)) {
                return "success";
            }
            return "secondary";
        },
        resolveStatusTranslate(status) {
            if (_.isEmpty(status)) {
                return this.$t("active");
            }
            return this.$t("inactive");
        },
        resolveRoleVariant(roles) {
            if (!_.isEmpty(roles)) {
                if (roles[0].id == 1) return "danger"; // Administrator
                if (roles[0].id == 2) return "warning"; // Director
                if (roles[0].id == 3) return "primary"; // Recepcionista
                if (roles[0].id == 4) return "secondary"; // Profesional
                if (roles[0].id == 5) return "success"; // Paciente
                if (roles[0].id == 6) return "info"; // Asistente Dental
            }
            return "primary";
        },
        resolveRoleIcon(roles) {
            if (!_.isEmpty(roles)) {
                if (roles[0].id === 1) return "CpuIcon"; // Administrator
                if (roles[0].id === 2) return "SettingsIcon"; // Director
                if (roles[0].id === 3) return "ServerIcon"; // Recepcionista
                if (roles[0].id === 4) return "UserCheckIcon"; // Profesional
                if (roles[0].id === 5) return "SmileIcon"; // Paciente
                if (roles[0].id === 6) return "Edit2Icon"; // Asistente Dental
            }
            return "UserIcon";
        },
        resolveTypeDocumentTranslate(type) {
            switch (type) {
                case 'RUT':
                    return `${this.$t('patients.document_type')} (${this.$t('patients.document_type_rut')})`
                    break
                case 'Pasaporte':
                    return `${this.$t('patients.document_type')} (${this.$t('patients.document_type_passport')})`
                    break
                case 'Otro':
                    return `${this.$t('patients.document_type')} (${this.$t('patients.document_type_other')})`
                    break
            }
        },
        resolveTypeDocument(type) {
            switch (type) {
                case 'RUT':
                    return this.$t('patients.document_type_rut')
                    break
                case 'Pasaporte':
                    return this.$t('patients.document_type_passport')
                    break
                case 'Otro':
                    return this.$t('patients.document_type_other')
                    break
            }
        },
        getFirstValidationError(errorBag) {
            if (errorBag.response.data.errors) {
                let errors = Object.values(errorBag.response.data.errors);
                errors = errors.flat();
                return errors[0];
            } else {
                return errorBag.response.data.message;
            }
        },
        handleResponseErrors(e) {
            switch (e.response.status) {
                case 401:
                case 403:
                case 404:
                case 405:
                case 422:
                case 500:
                    this.danger(this.getFirstValidationError(e));
                    break;
                default:
                    this.danger(e.message);
                    break;
            }
        },
        success(text, title = "", icon = "CheckIcon") {
            this.$toast({
                component: ToastificationContent,
                props: {
                    position: "top-right",
                    variant: "success",
                    icon,
                    title,
                    text,
                },
            });
        },
        danger(text, title = "", icon = "XIcon") {
            this.$toast({
                component: ToastificationContent,
                props: {
                    position: "top-right",
                    variant: "danger",
                    icon,
                    title,
                    text,
                },
            });
        },
        avatarText(value) {
            if (!value) return "";
            const nameArray = value.split(" ");
            return nameArray
                .map((word) => word.charAt(0).toUpperCase())
                .join("");
        },
        numberFormat(number, fixed = 2) {
            return number
                ? number === "N/A"
                    ? number
                    : `${parseFloat(number).toFixed(fixed)}`
                : number
                    ? number === "N/A"
                        ? number
                        : parseFloat(number).toFixed(fixed)
                    : "—";
        },
        nFormatter(num, digits = 2) {
            var si = [
                { value: 1, symbol: "" },
                { value: 1e3, symbol: "k" },
                { value: 1e6, symbol: "M" },
                { value: 1e9, symbol: "G" },
                { value: 1e12, symbol: "T" },
                { value: 1e15, symbol: "P" },
                { value: 1e18, symbol: "E" },
            ];
            var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
            var i;
            for (i = si.length - 1; i > 0; i--) {
                if (num >= si[i].value) {
                    break;
                }
            }
            return (
                (num / si[i].value).toFixed(digits).replace(rx, "$1") +
                si[i].symbol
            );
        },
        /**
         * Helper for add a unit type to number
         * @param {String|Number} number
         * @param {String} unitFormat
         * @param {Number} fixed
         * @return String|Number
         */
        numberUnitFormat(number, unitFormat, fixed = 2) {
            return unitFormat
                ? number
                    ? number === "N/A"
                        ? number
                        : `${parseFloat(number).toFixed(fixed)} ${unitFormat}`
                    : "—"
                : number
                    ? number === "N/A"
                        ? number
                        : parseFloat(number).toFixed(fixed)
                    : "—";
        },
        isEmpty(value) {
            return _.isEmpty(value) ? true : false;
        },
        isSize(value) {
            return _.size(value);
        },
        genUniqueKey(obj) {
            const UNIQUE_KEY_PROP = "__unique_key_prop__";
            const KEY_PREFIX = "__key_prefix__" + Date.now() + "_";
            let uid = 0;

            const isObject = (val) => val !== null && typeof val === "object";
            if (isObject(obj)) {
                if (UNIQUE_KEY_PROP in obj) {
                    return obj[UNIQUE_KEY_PROP];
                }
                const value = KEY_PREFIX + uid++;
                Object.defineProperty(obj, UNIQUE_KEY_PROP, { value });
                return value;
            }
            return obj;
        },
        resolvePaginationTranslate(dataMeta) {
            let _string = this.$t('datatables.sInfo')
            _string = _string.replace('_START_', dataMeta.from)
            _string = _string.replace('_END_', dataMeta.to)
            _string = _string.replace('_TOTAL_', dataMeta.of)
            return _string
        },
        generateSKU() {
            const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
            let result = ''
            for (let i = 0; i < 10; i++) {
                result += chars.charAt(Math.floor(Math.random() * chars.length))
            }
            return (result).toUpperCase()
        },
        generateReference(prefix = 'REF-') {
            const randNumber = Math.random().toString(36).substring(2, 8)
            return prefix + moment().format('DMYYHHmmss') // randNumber.toUpperCase();
        },
        extractNumbers(value) {
            const regex = /\d+/g; // Expresión regular para buscar números
            const numbersArray = value.match(regex); // Buscar todos los números en la cadena
            this.extractedNumbers = numbersArray ? numbersArray.join("") : ""; // Unir los números encontrados en una cadena
        }
    },
};
