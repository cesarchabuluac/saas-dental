(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/dashboards/CalendarDays.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/dashboards/CalendarDays.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var flatpickr_dist_l10n_es_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! flatpickr/dist/l10n/es.js */ "./node_modules/flatpickr/dist/l10n/es.js");
/* harmony import */ var flatpickr_dist_l10n_es_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_l10n_es_js__WEBPACK_IMPORTED_MODULE_10__);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//










/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_8__["BCard"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_8__["BImg"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_8__["BCardBody"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_8__["BCardText"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_8__["BCardTitle"],
    BMedia: bootstrap_vue__WEBPACK_IMPORTED_MODULE_8__["BMedia"],
    BMediaAside: bootstrap_vue__WEBPACK_IMPORTED_MODULE_8__["BMediaAside"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_8__["BAvatar"],
    BAvatarGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_8__["BAvatarGroup"],
    BMediaBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_8__["BMediaBody"],
    BButtonToolbar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_8__["BButtonToolbar"],
    BButtonGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_8__["BButtonGroup"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_8__["BButton"],
    BTable: bootstrap_vue__WEBPACK_IMPORTED_MODULE_8__["BTable"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_8__["BLink"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_8__["BBadge"],
    BPagination: bootstrap_vue__WEBPACK_IMPORTED_MODULE_8__["BPagination"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_8__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_8__["BCol"],
    BInputGroupPrepend: bootstrap_vue__WEBPACK_IMPORTED_MODULE_8__["BInputGroupPrepend"],
    BInputGroupAppend: bootstrap_vue__WEBPACK_IMPORTED_MODULE_8__["BInputGroupAppend"],
    BInputGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_8__["BInputGroup"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_8__["BFormInput"],
    //
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_9___default.a,
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_7___default.a
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_6__["default"],
    'b-tooltip': bootstrap_vue__WEBPACK_IMPORTED_MODULE_8__["VBTooltip"]
  },
  props: {
    value: Date
  },
  data: function data() {
    return {
      loading: false
    };
  },
  created: function created() {
    if (_store__WEBPACK_IMPORTED_MODULE_2__["default"].state.auth.setting['language'] === "es") {
      flatpickr.localize(flatpickr_dist_l10n_es_js__WEBPACK_IMPORTED_MODULE_10__["Spanish"]);
    }
  },
  computed: {
    formattedDate: function formattedDate() {
      return moment__WEBPACK_IMPORTED_MODULE_4___default()(this.value).format('DD');
    },
    formattedDateName: function formattedDateName() {
      return moment__WEBPACK_IMPORTED_MODULE_4___default()(this.value).format('ddd');
    },
    formattedDateMonthName: function formattedDateMonthName() {
      return moment__WEBPACK_IMPORTED_MODULE_4___default()(this.value).format('MMM, YYYY');
    }
  },
  mounted: function mounted() {
    return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee() {
      return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  methods: {
    incrementDay: function incrementDay() {
      var newDate = moment__WEBPACK_IMPORTED_MODULE_4___default()(this.value, 'DD').add(1, 'day');
      this.$emit('input', newDate.toDate());
    },
    decrementDay: function decrementDay() {
      var newDate = moment__WEBPACK_IMPORTED_MODULE_4___default()(this.value, 'DD').subtract(1, 'day');
      this.$emit('input', newDate.toDate());
    }
  },
  watch: {
    value: function value(_value) {}
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/dashboards/DashboardAppointments.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/dashboards/DashboardAppointments.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! animate.css */ "./node_modules/animate.css/animate.css");
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(animate_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _core_components_dashboards_CalendarDays_vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @core/components/dashboards/CalendarDays.vue */ "./resources/js/src/@core/components/dashboards/CalendarDays.vue");
/* harmony import */ var _providers_Appointments__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/providers/Appointments */ "./resources/js/src/providers/Appointments.js");







//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









var AppointmentResource = new _providers_Appointments__WEBPACK_IMPORTED_MODULE_14__["default"]();

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "DashboardAppointments",
  components: {
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_10__["BCard"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_10__["BCardBody"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_10__["BCardText"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_10__["BCardTitle"],
    BMediaAside: bootstrap_vue__WEBPACK_IMPORTED_MODULE_10__["BMediaAside"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_10__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_10__["BCol"],
    BInputGroupPrepend: bootstrap_vue__WEBPACK_IMPORTED_MODULE_10__["BInputGroupPrepend"],
    BInputGroupAppend: bootstrap_vue__WEBPACK_IMPORTED_MODULE_10__["BInputGroupAppend"],
    BInputGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_10__["BInputGroup"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_10__["BFormInput"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_10__["BButton"],
    BTable: bootstrap_vue__WEBPACK_IMPORTED_MODULE_10__["BTable"],
    BMedia: bootstrap_vue__WEBPACK_IMPORTED_MODULE_10__["BMedia"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_10__["BAvatar"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_10__["BLink"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_10__["BBadge"],
    BDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_10__["BDropdown"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_10__["BDropdownItem"],
    BPagination: bootstrap_vue__WEBPACK_IMPORTED_MODULE_10__["BPagination"],
    BTooltip: bootstrap_vue__WEBPACK_IMPORTED_MODULE_10__["BTooltip"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_11___default.a,
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_10__["BImg"],
    VBTooltip: bootstrap_vue__WEBPACK_IMPORTED_MODULE_10__["VBTooltip"],
    BOverlay: bootstrap_vue__WEBPACK_IMPORTED_MODULE_10__["BOverlay"],
    BSpinner: bootstrap_vue__WEBPACK_IMPORTED_MODULE_10__["BSpinner"],
    //
    CalendarDays: _core_components_dashboards_CalendarDays_vue__WEBPACK_IMPORTED_MODULE_13__["default"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_9__["default"]
  },
  props: {
    isDashboard: {
      type: Boolean,
      "default": function _default() {
        return false;
      }
    }
  },
  data: function data() {
    return {
      loading: false,
      columns: [{
        key: 'hour',
        label: this.$t("appointments.table_hour")
      }, {
        key: 'patient_id',
        label: this.$t("appointments.table_patient_id")
      }, {
        key: 'user_id',
        label: this.$t("appointments.table_user_id")
      }, {
        key: "state",
        label: this.$t("appointments.table_state")
      }, {
        key: "actions",
        label: this.$t("actions")
      }],
      calendarOptions: [{
        color: 'default',
        label: 'all'
      }, {
        color: "warning",
        label: "pending"
      }, {
        color: "success",
        label: "confirmed"
      }, {
        color: "danger",
        label: "canceled"
      }, {
        color: "primary",
        label: "assisted"
      }, {
        color: "dark",
        label: "unassisted"
      }],
      appointments: [],
      perPageOptions: [10, 25, 50, 100],
      perPage: 10,
      currentPage: 1,
      totalAppointments: 0,
      sortBy: "date",
      sortDesc: false,
      searchQuery: null,
      from: 0,
      to: 0,
      pagination: {},
      offset: 3,
      critery: "reference",
      search: "",
      currentDay: new Date(),
      state: "all"
    };
  },
  computed: {
    dataMeta: function dataMeta() {
      var localItemsCount = lodash__WEBPACK_IMPORTED_MODULE_7___default.a.size(this.appointments);
      return {
        from: this.perPage * (this.currentPage - 1) + (localItemsCount ? 1 : 0),
        to: this.perPage * (this.currentPage - 1) + localItemsCount,
        of: this.totalAppointments
      };
    },
    isCurrentDate: function isCurrentDate() {
      var date = moment__WEBPACK_IMPORTED_MODULE_8___default()(this.currentDay).format('YYYY-MM-DD');
      return moment__WEBPACK_IMPORTED_MODULE_8___default()().isSame(date, 'day');
    }
  },
  mounted: function mounted() {
    var _this = this;
    return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee() {
      return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _this.getAppointments();
          case 1:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  methods: {
    getAppointments: function getAppointments() {
      var _this2 = this;
      return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee2() {
        var query, _yield$AppointmentRes, data;
        return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _this2.loading = true;
              query = {
                search: _this2.searchQuery,
                sortBy: _this2.sortBy,
                sortDesc: _this2.sortDesc,
                perPage: _this2.perPage,
                page: _this2.currentPage,
                approved: true,
                isDashboard: _this2.isDashboard,
                date: moment__WEBPACK_IMPORTED_MODULE_8___default()(_this2.currentDay).format('YYYY-MM-DD HH:mm'),
                isSameDay: _this2.isCurrentDate,
                state: _this2.state
              };
              _context2.next = 4;
              return AppointmentResource.getList(query);
            case 4:
              _yield$AppointmentRes = _context2.sent;
              data = _yield$AppointmentRes.data;
              _this2.loading = false;
              _this2.appointments = data.data;
              _this2.totalAppointments = data.total;
            case 9:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    messageWhatsapp: function messageWhatsapp(item) {
      var _hi = this.$t('hi');
      var status = "";
      switch (item.state) {
        case 'canceled':
          status = "".concat(this.$t('appointments.status.cancel'), " *").concat(this.findSetting('app_name'), "!* %0A%0A");
          break;
        case 'pending':
          status = "".concat(this.$t('appointments.status.pending'), " *").concat(this.findSetting('app_name'), "!* %0A%0A");
          break;
        case 'confirmed':
          status = "".concat(this.$t('appointments.status.confirmed'), " *").concat(this.findSetting('app_name'), "!* %0A%0A");
          break;
        case 'assisted':
          status = "".concat(this.$t('appointments.status.assisted'), " *").concat(this.findSetting('app_name'), "!* %0A%0A");
          break;
        case 'unassisted':
          status = "".concat(this.$t('appointments.status.unassisted'), " *").concat(this.findSetting('app_name'), "!* %0A%0A");
          break;
      }
      var message = "*".concat(_hi, " ").concat(item.patient.name, "!*%0A%0A").concat(status, "\n            *").concat(this.$t('appointments.mail_detail'), "* %0A%0A\n            *").concat(this.$t('appointments.mail_number'), ":* ").concat(item.id, "%0A\n            *").concat(this.$t('appointments.mail_date_detail'), "* ").concat(item.custom_date, "%0A\n            *").concat(this.$t('appointments.mail_document_detail'), "* ").concat(item.patient.rut, "%0A\n            *").concat(this.$t('appointments.mail_name_detail'), "* ").concat(item.patient.full_name, "%0A%0A\n            *").concat(this.$t('appointments.mail_email_detail'), "* ").concat(item.patient.email, "%0A\n            *").concat(this.$t('appointments.mail_phone_detail'), "* ").concat(item.patient.cellphone, ", ").concat(item.patient.phone, "%0A\n            *").concat(this.$t('appointments.mail_duration_detail'), "* ").concat(item.duration, "%0A%0A\n            *").concat(this.$t('appointments.mail_great'), "* %0A%0A");
      return message;
    },
    deleteAppointment: function deleteAppointment(item) {
      var _this3 = this;
      this.$swal({
        title: this.$t("are_you_sure"),
        text: this.$t("you_wont_be_able_to_revert_this"),
        icon: "question",
        showCancelButton: true,
        confirmButtonText: this.$t("yes_continue"),
        cancelButtonText: this.$t("cancel"),
        customClass: {
          confirmButton: "btn btn-primary",
          cancelButton: "btn btn-outline-danger ml-1"
        },
        showClass: {
          popup: "animate__animated animate__flipInX"
        },
        buttonsStyling: false,
        showLoaderOnConfirm: true,
        preConfirm: function () {
          var _preConfirm = Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee3() {
            var _yield$AppointmentRes2, data;
            return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.prev = 0;
                  _this3.loading = true;
                  _context3.next = 4;
                  return AppointmentResource.destroy(item.id);
                case 4:
                  _yield$AppointmentRes2 = _context3.sent;
                  data = _yield$AppointmentRes2.data;
                  _this3.loading = false;
                  if (data.success) {
                    _this3.success(data.message, '', 'CheckIcon');
                    _this3.appointments = _this3.appointments.filter(function (appointment) {
                      return appointment.id !== item.id;
                    });
                  } else {
                    _this3.loading = false;
                    _this3.danger(data.message, "Error", "AlertCircleIcon");
                  }
                  _context3.next = 15;
                  break;
                case 10:
                  _context3.prev = 10;
                  _context3.t0 = _context3["catch"](0);
                  _this3.loading = false;
                  _this3.$swal.showValidationMessage("Request failed: ".concat(_context3.t0));
                  _this3.handleResponseErrors(_context3.t0);
                case 15:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, null, [[0, 10]]);
          }));
          function preConfirm() {
            return _preConfirm.apply(this, arguments);
          }
          return preConfirm;
        }(),
        allowOutsideClick: function allowOutsideClick() {
          return !Swal.isLoading();
        }
      });
    },
    editAppointment: function editAppointment(item) {
      var _this4 = this;
      this.$swal({
        title: this.$t("appointments.confirm_assisted_title"),
        text: this.$t("appointments.confirm_assisted_message"),
        input: 'select',
        inputOptions: {
          confirmed: this.$t('appointments.status.confirmed'),
          assisted: this.$t('appointments.status.assisted'),
          unassisted: this.$t('appointments.status.unassisted')
        },
        icon: "question",
        showCancelButton: true,
        confirmButtonText: this.$t("yes_continue"),
        cancelButtonText: this.$t("cancel"),
        customClass: {
          confirmButton: "btn btn-primary",
          cancelButton: "btn btn-outline-danger ml-1"
        },
        showClass: {
          popup: "animate__animated animate__flipInX"
        },
        buttonsStyling: false,
        showLoaderOnConfirm: true,
        preConfirm: function () {
          var _preConfirm2 = Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee4(option) {
            var _yield$AppointmentRes3, data;
            return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.prev = 0;
                  _this4.loading = true;
                  _context4.next = 4;
                  return AppointmentResource.changeStatus(item.id, {
                    state: option
                  });
                case 4:
                  _yield$AppointmentRes3 = _context4.sent;
                  data = _yield$AppointmentRes3.data;
                  _this4.loading = false;
                  if (data.success) {
                    _this4.success(data.message);
                    _this4.appointments = _this4.appointments.map(function (appointment) {
                      if (appointment.id === item.id) {
                        return data.data;
                      }
                      return appointment;
                    });
                  } else {
                    _this4.danger(data.message, "Error");
                  }
                  _context4.next = 15;
                  break;
                case 10:
                  _context4.prev = 10;
                  _context4.t0 = _context4["catch"](0);
                  _this4.loading = false;
                  _this4.$swal.showValidationMessage("Request failed: ".concat(_context4.t0));
                  _this4.handleResponseErrors(_context4.t0);
                case 15:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, null, [[0, 10]]);
          }));
          function preConfirm(_x) {
            return _preConfirm2.apply(this, arguments);
          }
          return preConfirm;
        }(),
        allowOutsideClick: function allowOutsideClick() {
          return !Swal.isLoading();
        }
      });
    },
    sendEmail: function sendEmail(item) {
      var _this5 = this;
      this.$swal({
        title: this.$t('send_email_title'),
        text: this.$t('send_email_title_help'),
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: this.$t('button_accept'),
        cancelButtonText: this.$t('cancel'),
        customClass: {
          confirmButton: "btn btn-primary",
          cancelButton: "btn btn-outline-danger ml-1"
        },
        showClass: {
          popup: "animate__animated animate__flipInX"
        },
        buttonsStyling: false,
        showLoaderOnConfirm: true,
        input: 'email',
        inputValue: item.patient.email,
        inputAttributes: {
          autocapitalize: 'off'
        },
        preConfirm: function () {
          var _preConfirm3 = Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee5(value) {
            var _yield$AppointmentRes4, data;
            return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.prev = 0;
                  _context5.next = 3;
                  return AppointmentResource.send(item.id, {
                    email: value
                  });
                case 3:
                  _yield$AppointmentRes4 = _context5.sent;
                  data = _yield$AppointmentRes4.data;
                  if (data.success) {
                    _this5.success(data.message);
                  } else {
                    _this5.danger(data.message);
                  }
                  _context5.next = 13;
                  break;
                case 8:
                  _context5.prev = 8;
                  _context5.t0 = _context5["catch"](0);
                  _this5.loading = false;
                  _this5.$swal.showValidationMessage("Request failed: ".concat(_context5.t0));
                  _this5.handleResponseErrors(_context5.t0);
                case 13:
                case "end":
                  return _context5.stop();
              }
            }, _callee5, null, [[0, 8]]);
          }));
          function preConfirm(_x2) {
            return _preConfirm3.apply(this, arguments);
          }
          return preConfirm;
        }(),
        allowOutsideClick: function allowOutsideClick() {
          return !Swal.isLoading();
        }
      });
    },
    loadAppointments: function loadAppointments() {
      return this.appointments;
    }
  },
  watch: {
    currentPage: function currentPage(value) {
      this.getAppointments();
    },
    perPage: function perPage(value) {
      this.getAppointments();
    },
    currentDay: function currentDay(value) {
      console.log("is current day ".concat(moment__WEBPACK_IMPORTED_MODULE_8___default()(value).format('YYYY-MM-DD HH:mm')));
      this.getAppointments();
    },
    state: function state(value) {
      this.getAppointments();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/dashboards/DashboardCardAppointments.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/dashboards/DashboardCardAppointments.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _themeConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @themeConfig */ "./resources/js/themeConfig.js");
/* harmony import */ var _core_utils_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/utils/filter */ "./resources/js/src/@core/utils/filter.js");

//
//
//
//
//
//
//
//
//
//
//





var $trackBgColor = '#EBEBEB';
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCard"],
    VueApexCharts: vue_apexcharts__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  props: {
    total: {
      type: Number,
      "default": function _default() {
        return 0;
      }
    }
  },
  data: function data() {
    return {
      statisticsProfit: {
        chartOptions: {
          chart: {
            type: 'line',
            toolbar: {
              show: false
            },
            zoom: {
              enabled: false
            }
          },
          grid: {
            borderColor: $trackBgColor,
            strokeDashArray: 5,
            xaxis: {
              lines: {
                show: false
              }
            },
            yaxis: {
              lines: {
                show: false
              }
            },
            padding: {
              top: -30,
              bottom: -10
            }
          },
          stroke: {
            width: 3
          },
          colors: [_themeConfig__WEBPACK_IMPORTED_MODULE_3__["$themeColors"].info],
          markers: {
            size: 2,
            colors: _themeConfig__WEBPACK_IMPORTED_MODULE_3__["$themeColors"].info,
            strokeColors: _themeConfig__WEBPACK_IMPORTED_MODULE_3__["$themeColors"].info,
            strokeWidth: 2,
            strokeOpacity: 1,
            strokeDashArray: 0,
            fillOpacity: 1,
            discrete: [{
              seriesIndex: 0,
              dataPointIndex: 5,
              fillColor: '#ffffff',
              strokeColor: _themeConfig__WEBPACK_IMPORTED_MODULE_3__["$themeColors"].info,
              size: 5
            }],
            shape: 'circle',
            radius: 2,
            hover: {
              size: 3
            }
          },
          xaxis: {
            labels: {
              show: false,
              style: {
                fontSize: '0px'
              }
            },
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false
            }
          },
          yaxis: {
            show: false
          },
          tooltip: {
            x: {
              show: false
            }
          }
        }
      },
      series: [{
        data: [0, 20, 5, 30, 15, 45]
      }]
    };
  },
  mounted: function mounted() {},
  methods: {
    kFormatter: _core_utils_filter__WEBPACK_IMPORTED_MODULE_4__["kFormatter"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/dashboards/DashboardCardBudget.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/dashboards/DashboardCardBudget.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _themeConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @themeConfig */ "./resources/js/themeConfig.js");
/* harmony import */ var _core_utils_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/utils/filter */ "./resources/js/src/@core/utils/filter.js");

//
//
//
//
//
//
//
//
//
//
//





var $barColor = '#f3f3f3';
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCard"],
    VueApexCharts: vue_apexcharts__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  props: {
    total: {
      type: Number,
      "default": function _default() {
        return 0;
      }
    },
    loading: {
      type: Boolean,
      required: true,
      "default": function _default() {
        return false;
      }
    }
  },
  data: function data() {
    return {
      statisticsOrder: {
        chartOptions: {
          chart: {
            type: 'bar',
            stacked: true,
            toolbar: {
              show: false
            }
          },
          grid: {
            show: false,
            padding: {
              left: 0,
              right: 0,
              top: -15,
              bottom: -15
            }
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: '20%',
              startingShape: 'rounded',
              colors: {
                backgroundBarColors: [$barColor, $barColor, $barColor, $barColor, $barColor],
                backgroundBarRadius: 5
              }
            }
          },
          legend: {
            show: false
          },
          dataLabels: {
            enabled: false
          },
          colors: [_themeConfig__WEBPACK_IMPORTED_MODULE_3__["$themeColors"].warning],
          xaxis: {
            labels: {
              show: false
            },
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false
            }
          },
          yaxis: {
            show: false
          },
          tooltip: {
            x: {
              show: false
            }
          }
        }
      },
      series: [{
        name: '2020',
        data: [45, 85, 65, 45, 65]
      }]
    };
  },
  mounted: function mounted() {},
  methods: {
    kFormatter: _core_utils_filter__WEBPACK_IMPORTED_MODULE_4__["kFormatter"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/dashboards/DashboardCardDoctors.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/dashboards/DashboardCardDoctors.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var core_js_modules_es_array_flat_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.flat.js */ "./node_modules/core-js/modules/es.array.flat.js");
/* harmony import */ var core_js_modules_es_array_flat_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_flat_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_unscopables_flat_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.unscopables.flat.js */ "./node_modules/core-js/modules/es.array.unscopables.flat.js");
/* harmony import */ var core_js_modules_es_array_unscopables_flat_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_unscopables_flat_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _themeConfig__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @themeConfig */ "./resources/js/themeConfig.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var flatpickr_dist_l10n_es_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! flatpickr/dist/l10n/es.js */ "./node_modules/flatpickr/dist/l10n/es.js");
/* harmony import */ var flatpickr_dist_l10n_es_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_l10n_es_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _core_utils_filter__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @core/utils/filter */ "./resources/js/src/@core/utils/filter.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _providers_DashBoards__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @/providers/DashBoards */ "./resources/js/src/providers/DashBoards.js");










//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//










// import { formatPrice } from "@/libs/utils";


var DashboardResource = new _providers_DashBoards__WEBPACK_IMPORTED_MODULE_20__["default"]();
var perfectScrollbarSettings = {
  maxScrollbarLength: 60
};
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VueApexCharts: vue_apexcharts__WEBPACK_IMPORTED_MODULE_13___default.a,
    BDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BDropdown"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BDropdownItem"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BCard"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BButton"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BCol"],
    BOverlay: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BOverlay"],
    BSpinner: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BSpinner"],
    BInputGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BInputGroup"],
    BInputGroupPrepend: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BInputGroupPrepend"],
    BInputGroupAppend: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BInputGroupAppend"],
    BTable: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BTable"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BLink"],
    //
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_16___default.a,
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19___default.a
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_15__["default"]
  },
  props: {
    doctors: {
      type: Object,
      "default": function _default() {}
    },
    loading: {
      type: Boolean,
      required: true,
      "default": function _default() {
        return false;
      }
    }
  },
  data: function data() {
    return {
      chartKey: 0,
      isLoading: false,
      rangePicker: [moment__WEBPACK_IMPORTED_MODULE_10___default()().startOf('month').format('YYYY-MM-DD'), moment__WEBPACK_IMPORTED_MODULE_10___default()().endOf('month').format('YYYY-MM-DD')],
      revenue_report: {},
      dashboard: [],
      chartOptions: {
        chart: {
          stacked: true,
          type: 'bar',
          toolbar: {
            show: false
          }
        },
        grid: {
          padding: {
            top: -20,
            bottom: -10
          },
          yaxis: {
            lines: {
              show: true
            }
          }
        },
        xaxis: {
          categories: [],
          labels: {
            style: {
              colors: '#6E6B7B',
              fontSize: '0.86rem',
              fontFamily: 'Montserrat'
            }
          },
          axisTicks: {
            show: false
          },
          axisBorder: {
            show: false
          }
        },
        tooltip: {
          x: {
            show: true
          },
          y: {
            formatter: function formatter(val) {
              return Object(_core_utils_filter__WEBPACK_IMPORTED_MODULE_18__["cFormatter"])(val);
            }
          }
        },
        legend: {
          show: false
        },
        dataLabels: {
          enabled: false
        },
        colors: [_themeConfig__WEBPACK_IMPORTED_MODULE_14__["$themeColors"].primary, _themeConfig__WEBPACK_IMPORTED_MODULE_14__["$themeColors"].warning],
        plotOptions: {
          bar: {
            columnWidth: '17%',
            endingShape: 'rounded'
          },
          distributed: true
        },
        yaxis: {
          labels: {
            style: {
              colors: '#6E6B7B',
              fontSize: '0.86rem',
              fontFamily: 'Montserrat'
            }
          }
        }
      },
      series: [{
        name: this.$t('earnings.title'),
        data: []
      }],
      totalBudget: 0,
      totalBudgetPaid: 0,
      totalCommission: 0,
      professionals: [],
      columTableProfessional: [{
        key: "name",
        label: this.$t('doctor'),
        tdStyle: 'font-size: 9px!important;',
        thStyle: 'font-size: 9px!important;'
      }, {
        key: "total",
        label: this.$t('earnings.title'),
        tdStyle: 'font-size: 9px!important;',
        thStyle: 'font-size: 9px!important;'
      }, {
        key: "confirmed",
        label: this.$t('appointments.table_state_confirmed'),
        tdStyle: 'font-size: 9px!important;',
        thStyle: 'font-size: 9px!important;'
      }, {
        key: "pending",
        label: this.$t('appointments.table_state_pending'),
        tdStyle: 'font-size: 9px!important;',
        thStyle: 'font-size: 9px!important;'
      }, {
        key: "assisted",
        label: this.$t('appointments.table_state_assisted'),
        tdStyle: 'font-size: 9px!important;',
        thStyle: 'font-size: 9px!important;'
      }, {
        key: "unassisted",
        label: this.$t('appointments.table_state_unassisted'),
        tdStyle: 'font-size: 9px!important;',
        thStyle: 'font-size: 9px!important;'
      }, {
        key: "canceled",
        label: this.$t('appointments.table_state_canceled'),
        tdStyle: 'font-size: 9px!important;',
        thStyle: 'font-size: 9px!important;'
      }]
    };
  },
  computed: {},
  created: function created() {
    if (_store__WEBPACK_IMPORTED_MODULE_12__["default"].state.auth.setting['language'] === "es") {
      flatpickr.localize(flatpickr_dist_l10n_es_js__WEBPACK_IMPORTED_MODULE_17__["Spanish"]);
      // localize(process.env.MIX_FALLBACK_LOCALE);
    }
  },

  methods: {
    kFormatter: _core_utils_filter__WEBPACK_IMPORTED_MODULE_18__["kFormatter"],
    cFormatter: _core_utils_filter__WEBPACK_IMPORTED_MODULE_18__["cFormatter"],
    handleChange: function handleChange(selectedDates, dateStr, instance) {
      return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().mark(function _callee() {
        var dateStart, startAt, dateEnd, endAt, query;
        return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              // const [startAt, endAt] = dateStr.split(' to ');
              dateStart = selectedDates[0];
              startAt = dateStart.toISOString().split('T')[0];
              dateEnd = selectedDates[selectedDates.length - 1];
              endAt = dateEnd.toISOString().split('T')[0];
              if (startAt && endAt) {
                query = {
                  start_at: startAt,
                  end_at: endAt,
                  onlyRevenue: true
                }; // this.updateProp(query)
                // await this.getDashboard(query)
              }
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    getDashboard: function getDashboard() {
      var _arguments = arguments,
        _this = this;
      return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().mark(function _callee2() {
        var query, dates, _yield$DashboardResou, data;
        return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              query = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : null;
              console.log(query);
              if (query == null) {
                dates = _this.rangePicker.split(' a ');
                query = {
                  start_at: dates[0],
                  end_at: dates[1],
                  onlyRevenue: true
                };
              }
              _this.isLoading = true;
              _context2.next = 6;
              return DashboardResource.index(query);
            case 6:
              _yield$DashboardResou = _context2.sent;
              data = _yield$DashboardResou.data;
              _this.isLoading = false;
              _this.totalCommission = 0;
              _this.totalBudget = 0;
              _this.totalBudgetPaid = 0;
              _this.chartOptions.xaxis.categories = data.revenueDoctors.map(function (item) {
                return item.name;
              }).flat();
              _this.series[0].data = data.revenueDoctors.map(function (item) {
                return item.total;
              }).flat();
              _this.professionals = data.revenueDoctors.filter(function (item) {
                return parseFloat(item.total) > 0;
              }).flat();
              _this.totalCommission = data.revenueDoctors.length > 0 ? data.revenueDoctors.map(function (item) {
                return parseFloat(item.total);
              }).reduce(function (a, b) {
                return a + b;
              }) : 0;
              _this.totalBudget = data.totalBuddgetApproved;
              _this.totalBudgetPaid = data.totalBudgetPaid;
              _this.chartKey++;
            case 19:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    updateProp: function updateProp(query) {
      // Emit an event to notify the parent component that we want to update the value
      this.$emit('call-revenue', Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, query));
    },
    handleDataPointClick: function handleDataPointClick(e, chartContext, config) {
      console.log(chartContext, config);
    }
  },
  watch: {
    doctors: function doctors(value) {
      if (value.revenueDoctors.length === 0) {
        if (this.rangePicker) {
          var query = {
            start_at: this.rangePicker[0],
            end_at: this.rangePicker[1],
            onlyRevenue: true
          };
          this.getDashboard(query);
        }
      }
    },
    rangePicker: function rangePicker(value) {
      var dates = value.split(' a ');
      if (dates.length === 2) {
        this.getDashboard({
          start_at: dates[0],
          end_at: dates[1],
          onlyRevenue: true
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/dashboards/DashboardCardNewPatients.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/dashboards/DashboardCardNewPatients.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _themeConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @themeConfig */ "./resources/js/themeConfig.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




var $earningsStrokeColor2 = '#28c76f66';
var $earningsStrokeColor3 = '#28c76f33';
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCard"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCol"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardTitle"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BButton"],
    VueApexCharts: vue_apexcharts__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  props: {
    data: {
      type: Object,
      "default": function _default() {}
    }
  },
  data: function data() {
    return {
      earningsChart: {
        chartOptions: {
          chart: {
            type: 'donut',
            toolbar: {
              show: false
            }
          },
          dataLabels: {
            enabled: false
          },
          legend: {
            show: false
          },
          comparedResult: [2, -3, 8],
          labels: [this.$t('new_patients'), this.$t('existing_patients')],
          stroke: {
            width: 0
          },
          colors: [_themeConfig__WEBPACK_IMPORTED_MODULE_3__["$themeColors"].success, _themeConfig__WEBPACK_IMPORTED_MODULE_3__["$themeColors"].primary],
          grid: {
            padding: {
              right: -20,
              bottom: -8,
              left: -20
            }
          },
          plotOptions: {
            pie: {
              startAngle: -10,
              donut: {
                labels: {
                  show: true,
                  name: {
                    offsetY: 15
                  },
                  value: {
                    offsetY: -15,
                    formatter: function formatter(val) {
                      // eslint-disable-next-line radix
                      return "".concat(parseInt(val), "%");
                    }
                  },
                  total: {
                    show: true,
                    offsetY: 15,
                    label: this.$t('patients.patients'),
                    formatter: function formatter(w) {
                      var newPatients = w.globals.series[0];
                      var existentPatients = w.globals.series[1];
                      var total = newPatients + existentPatients;
                      var percentage = (w.globals.seriesPercent[0] * 100 / total).toFixed(1);
                      return "".concat(percentage, "%");
                    }
                  }
                }
              }
            }
          },
          responsive: [{
            breakpoint: 1325,
            options: {
              chart: {
                height: 100
              }
            }
          }, {
            breakpoint: 1200,
            options: {
              chart: {
                height: 120
              }
            }
          }, {
            breakpoint: 1045,
            options: {
              chart: {
                height: 100
              }
            }
          }, {
            breakpoint: 992,
            options: {
              chart: {
                height: 120
              }
            }
          }]
        }
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/dashboards/DashboardDoctor.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/dashboards/DashboardDoctor.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCard"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BAvatar"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BImg"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"]
  },
  props: {
    data: {
      type: Object,
      "default": function _default() {}
    }
  },
  computed: {
    userName: function userName() {
      return _store__WEBPACK_IMPORTED_MODULE_0__["default"].getters['auth/getUserName'];
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/statistics-cards/StatisticCardHorizontal.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/statistics-cards/StatisticCardHorizontal.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCard"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardBody"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BAvatar"]
  },
  props: {
    icon: {
      type: String,
      required: true
    },
    statistic: {
      type: [Number, String],
      required: true
    },
    statisticTitle: {
      type: String,
      "default": ''
    },
    statisticText: {
      type: String,
      "default": ''
    },
    statisticDescription: {
      type: String,
      "default": ''
    },
    color: {
      type: String,
      "default": 'primary'
    },
    size: {
      type: String,
      "default": function _default() {
        return 'h2';
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/statistics-cards/StatisticCardVertical.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/statistics-cards/StatisticCardVertical.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCard"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BAvatar"]
  },
  props: {
    icon: {
      type: String,
      required: true
    },
    statistic: {
      type: [Number, String],
      required: true
    },
    statisticTitle: {
      type: String,
      "default": ''
    },
    color: {
      type: String,
      "default": 'primary'
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Dashboard.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Dashboard.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _themeConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @themeConfig */ "./resources/js/themeConfig.js");
/* harmony import */ var _core_components_dashboards_DashboardEarning_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/components/dashboards/DashboardEarning.vue */ "./resources/js/src/@core/components/dashboards/DashboardEarning.vue");
/* harmony import */ var _core_components_dashboards_DashboardStatistics_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/components/dashboards/DashboardStatistics.vue */ "./resources/js/src/@core/components/dashboards/DashboardStatistics.vue");
/* harmony import */ var _core_components_dashboards_DashboardCardBudget_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/components/dashboards/DashboardCardBudget.vue */ "./resources/js/src/@core/components/dashboards/DashboardCardBudget.vue");
/* harmony import */ var _core_components_dashboards_DashboardCardAppointments_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/components/dashboards/DashboardCardAppointments.vue */ "./resources/js/src/@core/components/dashboards/DashboardCardAppointments.vue");
/* harmony import */ var _core_components_dashboards_DashboardCardDoctors_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/components/dashboards/DashboardCardDoctors.vue */ "./resources/js/src/@core/components/dashboards/DashboardCardDoctors.vue");
/* harmony import */ var _core_components_dashboards_DashboardCardNewPatients_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @core/components/dashboards/DashboardCardNewPatients.vue */ "./resources/js/src/@core/components/dashboards/DashboardCardNewPatients.vue");
/* harmony import */ var _core_components_dashboards_DashboardCardTransactions_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @core/components/dashboards/DashboardCardTransactions.vue */ "./resources/js/src/@core/components/dashboards/DashboardCardTransactions.vue");
/* harmony import */ var _core_components_dashboards_CalendarDays_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @core/components/dashboards/CalendarDays.vue */ "./resources/js/src/@core/components/dashboards/CalendarDays.vue");
/* harmony import */ var _DashboardCentral_vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./DashboardCentral.vue */ "./resources/js/src/views/DashboardCentral.vue");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");
/* harmony import */ var _providers_Payments__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/providers/Payments */ "./resources/js/src/providers/Payments.js");
/* harmony import */ var _providers_DashBoards__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/providers/DashBoards */ "./resources/js/src/providers/DashBoards.js");
/* harmony import */ var _providers_Appointments__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/providers/Appointments */ "./resources/js/src/providers/Appointments.js");
/* harmony import */ var _core_components_dashboards_DashboardAppointments_vue__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../@core/components/dashboards/DashboardAppointments.vue */ "./resources/js/src/@core/components/dashboards/DashboardAppointments.vue");
/* harmony import */ var _core_components_dashboards_DashboardDoctor_vue__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../@core/components/dashboards/DashboardDoctor.vue */ "./resources/js/src/@core/components/dashboards/DashboardDoctor.vue");



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


















var DashboardResource = new _providers_DashBoards__WEBPACK_IMPORTED_MODULE_16__["default"]();
var PaymentResource = new _providers_Payments__WEBPACK_IMPORTED_MODULE_15__["default"]();
var AppointmentResource = new _providers_Appointments__WEBPACK_IMPORTED_MODULE_17__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BCol"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BCard"],
    BTable: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BTable"],
    BSpinner: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BSpinner"],
    DashboardEarning: _core_components_dashboards_DashboardEarning_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    DashboardStatistics: _core_components_dashboards_DashboardStatistics_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    DashboardCardBudget: _core_components_dashboards_DashboardCardBudget_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    DashboardCardAppointments: _core_components_dashboards_DashboardCardAppointments_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    DashboardCardDoctors: _core_components_dashboards_DashboardCardDoctors_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    DashboardCardNewPatients: _core_components_dashboards_DashboardCardNewPatients_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
    DashboardCardTransactions: _core_components_dashboards_DashboardCardTransactions_vue__WEBPACK_IMPORTED_MODULE_11__["default"],
    DashboardCentral: _DashboardCentral_vue__WEBPACK_IMPORTED_MODULE_13__["default"],
    //
    CalendarDays: _core_components_dashboards_CalendarDays_vue__WEBPACK_IMPORTED_MODULE_12__["default"],
    DashboardAppointments: _core_components_dashboards_DashboardAppointments_vue__WEBPACK_IMPORTED_MODULE_18__["default"],
    DashboardDoctor: _core_components_dashboards_DashboardDoctor_vue__WEBPACK_IMPORTED_MODULE_19__["default"]
  },
  data: function data() {
    return {
      loading: false,
      dashboard: {},
      currentDay: new Date(),
      columnPayments: [{
        key: "payment_id",
        label: this.$t("payments.table_payment_id")
      }, {
        key: "created_at",
        label: this.$t("payments.table_created_at")
      }, {
        key: "budget",
        label: this.$t("payments.table_budget")
      }, {
        key: "method",
        label: this.$t("payments.table_method")
      }, {
        key: "amount",
        label: this.$t("payments.table_amount")
      }],
      userRoles: _store__WEBPACK_IMPORTED_MODULE_14__["default"].getters['auth/getUser'].roles.map(function (role) {
        return role.id;
      })
    };
  },
  created: function created() {},
  computed: {
    isAdmin: function isAdmin() {
      return _store__WEBPACK_IMPORTED_MODULE_14__["default"].getters['auth/getRoleId'] === 1; //this.userRoles.includes(1);
    },
    isDirector: function isDirector() {
      return _store__WEBPACK_IMPORTED_MODULE_14__["default"].getters['auth/getRoleId'] === 2; // this.userRoles.includes(2);
    },
    isDoctor: function isDoctor() {
      return _store__WEBPACK_IMPORTED_MODULE_14__["default"].getters['auth/getRoleId'] === 4; // this.userRoles.includes(4);
    },
    isPatient: function isPatient() {
      return _store__WEBPACK_IMPORTED_MODULE_14__["default"].getters['auth/getRoleId'] === 5; // this.userRoles.includes(5);
    },
    isTenant: function isTenant() {
      return this.checkIsTenant();
    }
  },
  mounted: function mounted() {
    var _this = this;
    return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee() {
      return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!_this.isTenant) {
              _context.next = 6;
              break;
            }
            _context.next = 3;
            return _this.getIDashboardService();
          case 3:
            if (!_this.isDoctor) {
              _context.next = 6;
              break;
            }
            _context.next = 6;
            return _this.onCallPayments();
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  methods: {
    getIDashboardService: function getIDashboardService() {
      var _this2 = this;
      return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee2() {
        var _yield$DashboardResou, data;
        return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _this2.loading = true;
              _context2.next = 3;
              return DashboardResource.index({});
            case 3:
              _yield$DashboardResou = _context2.sent;
              data = _yield$DashboardResou.data;
              _this2.loading = false;
              _this2.dashboard = data;
            case 7:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    onCallRevenue: function onCallRevenue(query) {
      return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee3() {
        return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    } // this.loading = true
    // const { data } = await DashboardResource.index(query)
    // this.loading = false
    // this.dashboard.revenueDoctors = data.revenueDoctors
    ,
    onCallPayments: function onCallPayments() {
      var _this3 = this;
      return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee4() {
        var query, _yield$DashboardResou2, data;
        return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              query = {
                onlyPayments: true
              };
              _this3.loading = true;
              _context4.next = 4;
              return DashboardResource.index(query);
            case 4:
              _yield$DashboardResou2 = _context4.sent;
              data = _yield$DashboardResou2.data;
              _this3.loading = false;
              _this3.dashboard.payments = data;
            case 8:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/DashboardCentral.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/DashboardCentral.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/router */ "./resources/js/src/router/index.js");
/* harmony import */ var _core_components_statistics_cards_StatisticCardVertical_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/components/statistics-cards/StatisticCardVertical.vue */ "./resources/js/src/@core/components/statistics-cards/StatisticCardVertical.vue");
/* harmony import */ var _core_components_statistics_cards_StatisticCardHorizontal_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/components/statistics-cards/StatisticCardHorizontal.vue */ "./resources/js/src/@core/components/statistics-cards/StatisticCardHorizontal.vue");
/* harmony import */ var _core_components_app_timeline_AppTimeline_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/components/app-timeline/AppTimeline.vue */ "./resources/js/src/@core/components/app-timeline/AppTimeline.vue");
/* harmony import */ var _core_components_app_timeline_AppTimelineItem_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @core/components/app-timeline/AppTimelineItem.vue */ "./resources/js/src/@core/components/app-timeline/AppTimelineItem.vue");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _themeConfig__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @themeConfig */ "./resources/js/themeConfig.js");
/* harmony import */ var _providers_Centrals__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/providers/Centrals */ "./resources/js/src/providers/Centrals.js");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//













var CentralsResource = new _providers_Centrals__WEBPACK_IMPORTED_MODULE_13__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "DashboardCentral",
  components: {
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BCol"],
    BModal: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BModal"],
    BAlert: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BAlert"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BLink"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BCard"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BButton"],
    BMedia: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BMedia"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BAvatar"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BImg"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BBadge"],
    BCardHeader: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BCardHeader"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BCardBody"],
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BForm"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BFormGroup"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BFormInput"],
    BTable: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BTable"],
    BTableSimple: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BTableSimple"],
    BTbody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BTbody"],
    BTd: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BTd"],
    BTfoot: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BTfoot"],
    BTr: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BTr"],
    BTh: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BTh"],
    BThead: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BThead"],
    BPagination: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BPagination"],
    BTab: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BTab"],
    BTabs: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BTabs"],
    BFormTextarea: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BFormTextarea"],
    BFormCheckbox: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BFormCheckbox"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BCardText"],
    BSpinner: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BSpinner"],
    BOverlay: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BOverlay"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BCardTitle"],
    BCardSubTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BCardSubTitle"],
    BTooltip: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BTooltip"],
    VBTooltip: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["VBTooltip"],
    BDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BDropdown"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BDropdownItem"],
    //
    VueApexCharts: vue_apexcharts__WEBPACK_IMPORTED_MODULE_11___default.a,
    StatisticCardVertical: _core_components_statistics_cards_StatisticCardVertical_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    StatisticCardHorizontal: _core_components_statistics_cards_StatisticCardHorizontal_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    AppTimeline: _core_components_app_timeline_AppTimeline_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    AppTimelineItem: _core_components_app_timeline_AppTimelineItem_vue__WEBPACK_IMPORTED_MODULE_10__["default"]
  },
  directives: {
    "b-tooltip": bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["VBTooltip"],
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      loading: false,
      dashboard: {},
      currentDay: new Date(),
      tablePlans: [{
        key: "image",
        label: this.$t("subscriptions.plans.name")
      }, {
        key: "value",
        label: this.$t("subscriptions.plans.subscriptions")
      }],
      tableClients: [{
        key: 'name',
        label: this.$t("subscriptions.clients.name")
      }, {
        key: 'subscriptions',
        label: this.$t("subscriptions.clients.subscriptions")
      }]
    };
  },
  mounted: function mounted() {
    var _this = this;
    return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee() {
      return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _this.getDashboard();
          case 2:
            _context.next = 4;
            return _this.getTopPlans();
          case 4:
            _context.next = 6;
            return _this.getTopClients();
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  methods: {
    getDashboard: function getDashboard() {
      var _this2 = this;
      return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee2() {
        var _yield$CentralsResour, data;
        return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _this2.loading = true;
              _context2.next = 3;
              return CentralsResource.index("this_year");
            case 3:
              _yield$CentralsResour = _context2.sent;
              data = _yield$CentralsResour.data;
              _this2.loading = false;
              _this2.dashboard = data.data;
              console.log(_this2.dashboard);
            case 8:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    getTopPlans: function getTopPlans() {
      var _this3 = this;
      return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee3() {
        var _yield$CentralsResour2, data;
        return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _this3.loading = true;
              _context3.next = 3;
              return CentralsResource.topPlans();
            case 3:
              _yield$CentralsResour2 = _context3.sent;
              data = _yield$CentralsResour2.data;
              _this3.loading = false;
              _this3.dashboard.topPlans = data.data.items;
            case 7:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    getTopClients: function getTopClients() {
      var _this4 = this;
      return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee4() {
        var _yield$CentralsResour3, data;
        return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _this4.loading = true;
              _context4.next = 3;
              return CentralsResource.topClients();
            case 3:
              _yield$CentralsResour3 = _context4.sent;
              data = _yield$CentralsResour3.data;
              _this4.loading = false;
              _this4.dashboard.topClients = data.data;
            case 7:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/core-js/internals/a-constructor.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/a-constructor.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isConstructor = __webpack_require__(/*! ../internals/is-constructor */ "./node_modules/core-js/internals/is-constructor.js");
var tryToString = __webpack_require__(/*! ../internals/try-to-string */ "./node_modules/core-js/internals/try-to-string.js");

var $TypeError = TypeError;

// `Assert: IsConstructor(argument) is true`
module.exports = function (argument) {
  if (isConstructor(argument)) return argument;
  throw $TypeError(tryToString(argument) + ' is not a constructor');
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-slice-simple.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/array-slice-simple.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");

var $Array = Array;
var max = Math.max;

module.exports = function (O, start, end) {
  var length = lengthOfArrayLike(O);
  var k = toAbsoluteIndex(start, length);
  var fin = toAbsoluteIndex(end === undefined ? length : end, length);
  var result = $Array(max(fin - k, 0));
  for (var n = 0; k < fin; k++, n++) createProperty(result, n, O[k]);
  result.length = n;
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/species-constructor.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/species-constructor.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var aConstructor = __webpack_require__(/*! ../internals/a-constructor */ "./node_modules/core-js/internals/a-constructor.js");
var isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ "./node_modules/core-js/internals/is-null-or-undefined.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || isNullOrUndefined(S = anObject(C)[SPECIES]) ? defaultConstructor : aConstructor(S);
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.split.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.split.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var apply = __webpack_require__(/*! ../internals/function-apply */ "./node_modules/core-js/internals/function-apply.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ "./node_modules/core-js/internals/is-null-or-undefined.js");
var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ "./node_modules/core-js/internals/is-regexp.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "./node_modules/core-js/internals/species-constructor.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "./node_modules/core-js/internals/advance-string-index.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "./node_modules/core-js/internals/get-method.js");
var arraySlice = __webpack_require__(/*! ../internals/array-slice-simple */ "./node_modules/core-js/internals/array-slice-simple.js");
var callRegExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");
var regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");
var stickyHelpers = __webpack_require__(/*! ../internals/regexp-sticky-helpers */ "./node_modules/core-js/internals/regexp-sticky-helpers.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
var MAX_UINT32 = 0xFFFFFFFF;
var min = Math.min;
var $push = [].push;
var exec = uncurryThis(/./.exec);
var push = uncurryThis($push);
var stringSlice = uncurryThis(''.slice);

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

// @@split logic
fixRegExpWellKnownSymbolLogic('split', function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    // eslint-disable-next-line regexp/no-empty-group -- required for testing
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = toString(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return call(nativeSplit, string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = call(regexpExec, separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          push(output, stringSlice(string, lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) apply($push, output, arraySlice(match, 1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !exec(separatorCopy, '')) push(output, '');
      } else push(output, stringSlice(string, lastLastIndex));
      return output.length > lim ? arraySlice(output, 0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : call(nativeSplit, this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.es/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = isNullOrUndefined(separator) ? undefined : getMethod(separator, SPLIT);
      return splitter
        ? call(splitter, separator, O, limit)
        : call(internalSplit, toString(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (string, limit) {
      var rx = anObject(this);
      var S = toString(string);
      var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);

      if (res.done) return res.value;

      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (UNSUPPORTED_Y ? 'g' : 'y');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(UNSUPPORTED_Y ? '^(?:' + rx.source + ')' : rx, flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
        var z = callRegExpExec(splitter, UNSUPPORTED_Y ? stringSlice(S, q) : S);
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          push(A, stringSlice(S, p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            push(A, z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      push(A, stringSlice(S, p));
      return A;
    }
  ];
}, !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/dashboards/CalendarDays.vue?vue&type=style&index=0&id=08f1f885&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/dashboards/CalendarDays.vue?vue&type=style&index=0&id=08f1f885&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "[dir] .card-developer-meetup .meetup-header[data-v-08f1f885] {\n  margin-bottom: 0rem;\n}\n[dir=ltr] .card-developer-meetup .meetup-header .meetup-day[data-v-08f1f885] {\n  border-right: 1px solid #d8d6de;\n  padding-right: 3.3rem;\n  margin-right: 1.3rem;\n}\n[dir=rtl] .card-developer-meetup .meetup-header .meetup-day[data-v-08f1f885] {\n  border-left: 1px solid #d8d6de;\n  padding-left: 3.3rem;\n  margin-left: 1.3rem;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/dashboards/DashboardAppointments.vue?vue&type=style&index=0&id=2412ef48&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/dashboards/DashboardAppointments.vue?vue&type=style&index=0&id=2412ef48&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../../../../../../node_modules/css-loader/dist/cjs.js!sweetalert2/dist/sweetalert2.min.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sweetalert2/dist/sweetalert2.min.css");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);
// Module
exports.push([module.i, "[dir] .swal2-container .swal2-popup {\n  border-radius: 0.428rem;\n  padding-bottom: 1.5rem;\n}\n.swal2-container .swal2-popup .swal2-close:focus {\n  outline: none;\n}\n[dir] .swal2-container .swal2-popup .swal2-close:focus {\n  box-shadow: none;\n}\n.swal2-container .swal2-popup .swal2-content {\n  color: #6e6b7b;\n}\n.swal2-container .swal2-popup .swal2-title {\n  font-size: 1.5rem;\n  font-weight: inherit;\n  color: #5e5873;\n}\n[dir] .swal2-container .swal2-popup button.swal2-confirm:focus {\n  box-shadow: none;\n}\n.swal2-container .swal2-popup input.swal2-input {\n  height: 2.714rem;\n  font-size: 1rem;\n  color: #6e6b7b;\n  line-height: 1.45;\n}\n[dir] .swal2-container .swal2-popup input.swal2-input {\n  padding: 0.438rem 1rem;\n  border-color: #d8d6de;\n  border-radius: 0.357rem;\n}\n[dir] .swal2-container .swal2-popup input.swal2-input:focus {\n  border-color: #7367f0 !important;\n  box-shadow: 0 3px 10px 0 rgba(34, 41, 47, 0.1);\n}\n[dir] .swal2-container .swal2-popup .swal2-progress-steps .swal2-progress-step {\n  background-color: #7367f0;\n}\n[dir] .swal2-container .swal2-popup .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step ~ .swal2-progress-step-line, [dir] .swal2-container .swal2-popup .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step ~ .swal2-progress-step {\n  background-color: #b3adf7;\n}\n[dir] .swal2-container .swal2-popup .swal2-progress-steps .swal2-progress-step-line {\n  background-color: #7367f0;\n}\n.swal2-container .swal2-popup pre {\n  min-height: 1.35rem;\n}\n[dir] .swal2-container .swal2-popup pre {\n  margin-top: 0.5rem;\n}\n.swal2-container .swal2-popup .swal2-footer {\n  color: #6e6b7b;\n}\n[dir] .swal2-container .swal2-popup .swal2-footer {\n  border-color: #ebe9f1;\n}\n.dark-layout .swal2-container .swal2-popup .swal2-title {\n  color: #d0d2d6;\n}\n[dir] .dark-layout .swal2-container .swal2-modal {\n  background-color: #283046;\n}\n.dark-layout .swal2-container .swal2-modal .swal2-header .swal2-title {\n  color: #d0d2d6;\n}\n.dark-layout .swal2-container .swal2-modal .swal2-header .swal2-icon-text {\n  color: inherit;\n}\n[dir] .dark-layout .swal2-container .swal2-modal .swal2-header .swal2-success-circular-line-left, [dir] .dark-layout .swal2-container .swal2-modal .swal2-header .swal2-success-circular-line-right, [dir] .dark-layout .swal2-container .swal2-modal .swal2-header .swal2-success-fix, [dir] .dark-layout .swal2-container .swal2-modal .swal2-header .swal2-animate-success-icon {\n  background-color: #283046 !important;\n}\n.dark-layout .swal2-container .swal2-modal input.swal2-input {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .swal2-container .swal2-modal input.swal2-input {\n  border-color: #3b4253;\n}\n.dark-layout .swal2-container .swal2-modal .swal2-content,\n.dark-layout .swal2-container .swal2-modal .swal2-html-container {\n  color: #b4b7bd;\n}\n.dark-layout .swal2-container .swal2-modal pre,\n.dark-layout .swal2-container .swal2-modal code {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .swal2-container .swal2-modal .swal2-input {\n  background-color: #283046;\n}\n.dark-layout .swal2-container .swal2-modal .swal2-footer {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .swal2-container .swal2-modal .swal2-footer {\n  border-color: #3b4253;\n}\n.dark-layout .swal2-container .swal2-validation-message {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .swal2-container .swal2-validation-message {\n  background-color: #161d31;\n}\nhtml[dir=rtl] .swal2-rtl .swal2-close {\n  left: 0;\n  right: auto;\n}\n\n/**\n    Support for SASS is deprecated as of v3.18.\n\n    The files remain here if your build is dependent on them\n    but they will not receive updates in future releases. All\n    SASS variables have been translated into CSS variables, so\n    migration should be quite simple if you'd like to move over.\n\n    In v4, these files will be removed.\n */\n.v-select {\n  position: relative;\n  font-family: inherit;\n}\n.v-select,\n.v-select * {\n  box-sizing: border-box;\n}\n\n/* KeyFrames */\n@-webkit-keyframes vSelectSpinner-ltr {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@-webkit-keyframes vSelectSpinner-rtl {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(-360deg);\n}\n}\n@keyframes vSelectSpinner-ltr {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes vSelectSpinner-rtl {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(-360deg);\n}\n}\n/* Dropdown Default Transition */\n.vs__fade-enter-active,\n.vs__fade-leave-active {\n  pointer-events: none;\n  transition: opacity 0.15s cubic-bezier(1, 0.5, 0.8, 1);\n}\n.vs__fade-enter,\n.vs__fade-leave-to {\n  opacity: 0;\n}\n\n/** Component States */\n/*\n * Disabled\n *\n * When the component is disabled, all interaction\n * should be prevented. Here we modify the bg color,\n * and change the cursor displayed on the interactive\n * components.\n */\n[dir] .vs--disabled .vs__dropdown-toggle, [dir] .vs--disabled .vs__clear, [dir] .vs--disabled .vs__search, [dir] .vs--disabled .vs__selected, [dir] .vs--disabled .vs__open-indicator {\n  cursor: not-allowed;\n  background-color: #f8f8f8;\n}\n\n/*\n *  RTL - Right to Left Support\n *\n *  Because we're using a flexbox layout, the `dir=\"rtl\"`\n *  HTML attribute does most of the work for us by\n *  rearranging the child elements visually.\n */\n.v-select[dir=rtl] .vs__actions {\n  padding: 0 3px 0 6px;\n}\n.v-select[dir=rtl] .vs__clear {\n  margin-left: 6px;\n  margin-right: 0;\n}\n.v-select[dir=rtl] .vs__deselect {\n  margin-left: 0;\n  margin-right: 2px;\n}\n.v-select[dir=rtl] .vs__dropdown-menu {\n  text-align: right;\n}\n\n/**\n    Dropdown Toggle\n\n    The dropdown toggle is the primary wrapper of the component. It\n    has two direct descendants: .vs__selected-options, and .vs__actions.\n\n    .vs__selected-options holds the .vs__selected's as well as the\n    main search input.\n\n    .vs__actions holds the clear button and dropdown toggle.\n */\n.vs__dropdown-toggle {\n  appearance: none;\n  display: flex;\n  white-space: normal;\n}\n[dir] .vs__dropdown-toggle {\n  padding: 0 0 4px 0;\n  background: none;\n  border: 1px solid #d8d6de;\n  border-radius: 0.357rem;\n}\n.vs__selected-options {\n  display: flex;\n  flex-basis: 100%;\n  flex-grow: 1;\n  flex-wrap: wrap;\n  position: relative;\n}\n[dir] .vs__selected-options {\n  padding: 0 2px;\n}\n.vs__actions {\n  display: flex;\n  align-items: center;\n}\n[dir=ltr] .vs__actions {\n  padding: 4px 6px 0 3px;\n}\n[dir=rtl] .vs__actions {\n  padding: 4px 3px 0 6px;\n}\n\n/* Dropdown Toggle States */\n[dir] .vs--searchable .vs__dropdown-toggle {\n  cursor: text;\n}\n[dir] .vs--unsearchable .vs__dropdown-toggle {\n  cursor: pointer;\n}\n[dir] .vs--open .vs__dropdown-toggle {\n  border-bottom-color: transparent;\n}\n[dir=ltr] .vs--open .vs__dropdown-toggle {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n[dir=rtl] .vs--open .vs__dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.vs__open-indicator {\n  fill: rgba(60, 60, 60, 0.5);\n  transition: transform 150ms cubic-bezier(1, -0.115, 0.975, 0.855);\n}\n[dir] .vs__open-indicator {\n  transform: scale(1);\n  transition-timing-function: cubic-bezier(1, -0.115, 0.975, 0.855);\n}\n[dir=ltr] .vs--open .vs__open-indicator {\n  transform: rotate(180deg) scale(1);\n}\n[dir=rtl] .vs--open .vs__open-indicator {\n  transform: rotate(-180deg) scale(1);\n}\n.vs--loading .vs__open-indicator {\n  opacity: 0;\n}\n\n/* Clear Button */\n.vs__clear {\n  fill: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__clear {\n  padding: 0;\n  border: 0;\n  background-color: transparent;\n  cursor: pointer;\n}\n[dir=ltr] .vs__clear {\n  margin-right: 8px;\n}\n[dir=rtl] .vs__clear {\n  margin-left: 8px;\n}\n\n/* Dropdown Menu */\n.vs__dropdown-menu {\n  display: block;\n  box-sizing: border-box;\n  position: absolute;\n  top: calc(100% - 1px);\n  z-index: 1000;\n  width: 100%;\n  max-height: 350px;\n  min-width: 160px;\n  overflow-y: auto;\n  list-style: none;\n}\n[dir] .vs__dropdown-menu {\n  padding: 5px 0;\n  margin: 0;\n  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.1);\n  border: 1px solid #d8d6de;\n  border-top-style: none;\n  border-radius: 0 0 0.357rem 0.357rem;\n  background: #fff;\n}\n[dir=ltr] .vs__dropdown-menu {\n  left: 0;\n  text-align: left;\n}\n[dir=rtl] .vs__dropdown-menu {\n  right: 0;\n  text-align: right;\n}\n[dir] .vs__no-options {\n  text-align: center;\n}\n\n/* List Items */\n.vs__dropdown-option {\n  line-height: 1.42857143;\n  /* Normalize line height */\n  display: block;\n  color: #333;\n  /* Overrides most CSS frameworks */\n  white-space: nowrap;\n}\n[dir] .vs__dropdown-option {\n  padding: 3px 20px;\n  clear: both;\n  cursor: pointer;\n}\n.vs__dropdown-option--highlight {\n  color: #7367f0 !important;\n}\n[dir] .vs__dropdown-option--highlight {\n  background: rgba(115, 103, 240, 0.12);\n}\n.vs__dropdown-option--deselect {\n  color: #fff;\n}\n[dir] .vs__dropdown-option--deselect {\n  background: #fb5858;\n}\n.vs__dropdown-option--disabled {\n  color: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__dropdown-option--disabled {\n  background: inherit;\n  cursor: inherit;\n}\n\n/* Selected Tags */\n.vs__selected {\n  display: flex;\n  align-items: center;\n  color: #333;\n  line-height: 1.8;\n  z-index: 0;\n}\n[dir] .vs__selected {\n  background-color: #7367f0;\n  border: 0 solid rgba(60, 60, 60, 0.26);\n  border-radius: 0.357rem;\n  margin: 4px 2px 0px 2px;\n  padding: 0 0.25em;\n}\n.vs__deselect {\n  display: inline-flex;\n  appearance: none;\n  fill: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__deselect {\n  padding: 0;\n  border: 0;\n  cursor: pointer;\n  background: none;\n  text-shadow: 0 1px 0 #fff;\n}\n[dir=ltr] .vs__deselect {\n  margin-left: 4px;\n}\n[dir=rtl] .vs__deselect {\n  margin-right: 4px;\n}\n\n/* States */\n[dir] .vs--single .vs__selected {\n  background-color: transparent;\n  border-color: transparent;\n}\n.vs--single.vs--open .vs__selected, .vs--single.vs--loading .vs__selected {\n  position: absolute;\n  opacity: 0.4;\n}\n.vs--single.vs--searching .vs__selected {\n  display: none;\n}\n\n/* Search Input */\n/**\n * Super weird bug... If this declaration is grouped\n * below, the cancel button will still appear in chrome.\n * If it's up here on it's own, it'll hide it.\n */\n.vs__search::-webkit-search-cancel-button {\n  display: none;\n}\n.vs__search::-webkit-search-decoration,\n.vs__search::-webkit-search-results-button,\n.vs__search::-webkit-search-results-decoration,\n.vs__search::-ms-clear {\n  display: none;\n}\n.vs__search,\n.vs__search:focus {\n  appearance: none;\n  line-height: 1.8;\n  font-size: 1em;\n  outline: none;\n  width: 0;\n  max-width: 100%;\n  flex-grow: 1;\n  z-index: 1;\n}\n[dir] .vs__search, [dir] .vs__search:focus {\n  border: 1px solid transparent;\n  margin: 4px 0 0 0;\n  padding: 0 7px;\n  background: none;\n  box-shadow: none;\n}\n[dir=ltr] .vs__search, [dir=ltr] .vs__search:focus {\n  border-left: none;\n}\n[dir=rtl] .vs__search, [dir=rtl] .vs__search:focus {\n  border-right: none;\n}\n.vs__search::placeholder {\n  color: #6e6b7b;\n}\n\n/**\n    States\n */\n.vs--unsearchable .vs__search {\n  opacity: 1;\n}\n[dir] .vs--unsearchable:not(.vs--disabled) .vs__search {\n  cursor: pointer;\n}\n.vs--single.vs--searching:not(.vs--open):not(.vs--loading) .vs__search {\n  opacity: 0.2;\n}\n\n/* Loading Spinner */\n.vs__spinner {\n  align-self: center;\n  opacity: 0;\n  font-size: 5px;\n  text-indent: -9999em;\n  overflow: hidden;\n  transition: opacity 0.1s;\n}\n[dir] .vs__spinner {\n  border-top: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-bottom: 0.9em solid rgba(100, 100, 100, 0.1);\n  transform: translateZ(0);\n}\n[dir=ltr] .vs__spinner {\n  border-right: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-left: 0.9em solid rgba(60, 60, 60, 0.45);\n  animation:  vSelectSpinner-ltr 1.1s infinite linear;\n}\n[dir=rtl] .vs__spinner {\n  border-left: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-right: 0.9em solid rgba(60, 60, 60, 0.45);\n  animation:  vSelectSpinner-rtl 1.1s infinite linear;\n}\n.vs__spinner,\n.vs__spinner:after {\n  width: 5em;\n  height: 5em;\n}\n[dir] .vs__spinner, [dir] .vs__spinner:after {\n  border-radius: 50%;\n}\n\n/* Loading Spinner States */\n.vs--loading .vs__spinner {\n  opacity: 1;\n}\n.vs__open-indicator {\n  fill: none;\n}\n[dir] .vs__open-indicator {\n  margin-top: 0.15rem;\n}\n.vs__dropdown-toggle {\n  transition: all 0.25s ease-in-out;\n}\n[dir] .vs__dropdown-toggle {\n  padding: 0.59px 0 4px 0;\n}\n[dir=ltr] .vs--single .vs__dropdown-toggle {\n  padding-left: 6px;\n}\n[dir=rtl] .vs--single .vs__dropdown-toggle {\n  padding-right: 6px;\n}\n.vs__dropdown-option--disabled {\n  opacity: 0.5;\n}\n[dir] .vs__dropdown-option--disabled.vs__dropdown-option--selected {\n  background: #7367f0 !important;\n}\n.vs__dropdown-option {\n  color: #6e6b7b;\n}\n[dir] .vs__dropdown-option, [dir] .vs__no-options {\n  padding: 7px 20px;\n}\n.vs__dropdown-option--selected {\n  background-color: #7367f0;\n  color: #fff;\n  position: relative;\n}\n.vs__dropdown-option--selected::after {\n  content: \"\";\n  height: 1.1rem;\n  width: 1.1rem;\n  display: inline-block;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  right: 20px;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-check'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 1.1rem;\n}\n[dir=rtl] .vs__dropdown-option--selected::after {\n  left: 20px;\n  right: unset;\n}\n.vs__dropdown-option--selected.vs__dropdown-option--highlight {\n  color: #fff !important;\n  background-color: #7367f0 !important;\n}\n.vs__clear svg {\n  color: #6e6b7b;\n}\n.vs__selected {\n  color: #fff;\n}\n.v-select.vs--single .vs__selected {\n  color: #6e6b7b;\n  transition: transform 0.2s ease;\n}\n[dir] .v-select.vs--single .vs__selected {\n  margin-top: 5px;\n}\n[dir=ltr] .v-select.vs--single .vs__selected input {\n  padding-left: 0;\n}\n[dir=rtl] .v-select.vs--single .vs__selected input {\n  padding-right: 0;\n}\n[dir=ltr] .vs--single.vs--open .vs__selected {\n  transform: translateX(5px);\n}\n[dir=rtl] .vs--single.vs--open .vs__selected {\n  transform: translateX(-5px);\n}\n.vs__selected .vs__deselect {\n  color: inherit;\n}\n.v-select:not(.vs--single) .vs__selected {\n  font-size: 0.9rem;\n}\n[dir] .v-select:not(.vs--single) .vs__selected {\n  border-radius: 3px;\n  padding: 0 0.6em;\n}\n[dir=ltr] .v-select:not(.vs--single) .vs__selected {\n  margin: 5px 2px 2px 5px;\n}\n[dir=rtl] .v-select:not(.vs--single) .vs__selected {\n  margin: 5px 5px 2px 2px;\n}\n.v-select:not(.vs--single) .vs__deselect svg {\n  vertical-align: text-top;\n}\n[dir] .v-select:not(.vs--single) .vs__deselect svg {\n  transform: scale(0.8);\n}\n.vs__dropdown-menu {\n  top: calc(100% + 1rem);\n}\n[dir] .vs__dropdown-menu {\n  border: none;\n  border-radius: 6px;\n  padding: 0;\n}\n[dir] .vs--open .vs__dropdown-toggle {\n  border-color: #7367f0;\n  border-bottom-color: #7367f0;\n  box-shadow: 0 3px 10px 0 rgba(34, 41, 47, 0.1);\n}\n[dir=ltr] .vs--open .vs__dropdown-toggle {\n  border-bottom-left-radius: 0.357rem;\n  border-bottom-right-radius: 0.357rem;\n}\n[dir=rtl] .vs--open .vs__dropdown-toggle {\n  border-bottom-right-radius: 0.357rem;\n  border-bottom-left-radius: 0.357rem;\n}\n.select-size-lg .vs__selected {\n  font-size: 1rem !important;\n}\n[dir] .select-size-lg.vs--single.vs--open .vs__selected {\n  margin-top: 6px;\n}\n.select-size-lg .vs__dropdown-toggle,\n.select-size-lg .vs__selected {\n  font-size: 1.25rem;\n}\n[dir] .select-size-lg .vs__dropdown-toggle {\n  padding: 5px;\n}\n[dir] .select-size-lg .vs__dropdown-toggle input {\n  margin-top: 0;\n}\n.select-size-lg .vs__deselect svg {\n  vertical-align: middle !important;\n}\n[dir] .select-size-lg .vs__deselect svg {\n  transform: scale(1) !important;\n}\n[dir] .select-size-sm .vs__dropdown-toggle {\n  padding-bottom: 0;\n  padding: 1px;\n}\n[dir] .select-size-sm.vs--single .vs__dropdown-toggle {\n  padding: 2px;\n}\n.select-size-sm .vs__dropdown-toggle,\n.select-size-sm .vs__selected {\n  font-size: 0.9rem;\n}\n[dir] .select-size-sm .vs__actions {\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n.select-size-sm .vs__deselect svg {\n  vertical-align: middle !important;\n}\n[dir] .select-size-sm .vs__search {\n  margin-top: 0;\n}\n.select-size-sm.v-select .vs__selected {\n  font-size: 0.75rem;\n}\n[dir] .select-size-sm.v-select .vs__selected {\n  padding: 0 0.3rem;\n}\n[dir] .select-size-sm.v-select:not(.vs--single) .vs__selected {\n  margin: 4px 5px;\n}\n[dir] .select-size-sm.v-select.vs--single .vs__selected {\n  margin-top: 1px;\n}\n[dir] .select-size-sm.vs--single.vs--open .vs__selected {\n  margin-top: 4px;\n}\n.dark-layout .vs__dropdown-toggle {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .vs__dropdown-toggle {\n  background: #283046;\n  border-color: #404656;\n}\n.dark-layout .vs__selected-options input {\n  color: #b4b7bd;\n}\n.dark-layout .vs__selected-options input::placeholder {\n  color: #676d7d;\n}\n.dark-layout .vs__actions svg {\n  fill: #404656;\n}\n[dir] .dark-layout .vs__dropdown-menu {\n  background: #283046;\n}\n.dark-layout .vs__dropdown-menu li {\n  color: #b4b7bd;\n}\n.dark-layout .v-select:not(.vs--single) .vs__selected {\n  color: #7367f0;\n}\n[dir] .dark-layout .v-select:not(.vs--single) .vs__selected {\n  background-color: rgba(115, 103, 240, 0.12);\n}\n.dark-layout .v-select.vs--single .vs__selected {\n  color: #b4b7bd !important;\n}\n.dark-layout .vs--disabled .vs__dropdown-toggle,\n.dark-layout .vs--disabled .vs__clear,\n.dark-layout .vs--disabled .vs__search,\n.dark-layout .vs--disabled .vs__selected,\n.dark-layout .vs--disabled .vs__open-indicator {\n  opacity: 0.5;\n}\n[dir] .dark-layout .vs--disabled .vs__dropdown-toggle, [dir] .dark-layout .vs--disabled .vs__clear, [dir] .dark-layout .vs--disabled .vs__search, [dir] .dark-layout .vs--disabled .vs__selected, [dir] .dark-layout .vs--disabled .vs__open-indicator {\n  background-color: #283046;\n}\n.swal2-select {\n  min-width: 100% !important;\n  max-width: 100% !important;\n  color: inherit;\n  font-size: 1.125em;\n}\n[dir] .swal2-select {\n  padding: 0.375em 0.625em;\n  background: inherit;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/dashboards/DashboardCardDoctors.vue?vue&type=style&index=0&id=b0683dc0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/dashboards/DashboardCardDoctors.vue?vue&type=style&index=0&id=b0683dc0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../../../../../../node_modules/css-loader/dist/cjs.js!flatpickr/dist/flatpickr.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/flatpickr/dist/flatpickr.css");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);
// Module
exports.push([module.i, "@charset \"UTF-8\";\n/**\n    Support for SASS is deprecated as of v3.18.\n\n    The files remain here if your build is dependent on them\n    but they will not receive updates in future releases. All\n    SASS variables have been translated into CSS variables, so\n    migration should be quite simple if you'd like to move over.\n\n    In v4, these files will be removed.\n */\n.v-select {\n  position: relative;\n  font-family: inherit;\n}\n.v-select,\n.v-select * {\n  box-sizing: border-box;\n}\n\n/* KeyFrames */\n@-webkit-keyframes vSelectSpinner-ltr {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@-webkit-keyframes vSelectSpinner-rtl {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(-360deg);\n}\n}\n@keyframes vSelectSpinner-ltr {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes vSelectSpinner-rtl {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(-360deg);\n}\n}\n/* Dropdown Default Transition */\n.vs__fade-enter-active,\n.vs__fade-leave-active {\n  pointer-events: none;\n  transition: opacity 0.15s cubic-bezier(1, 0.5, 0.8, 1);\n}\n.vs__fade-enter,\n.vs__fade-leave-to {\n  opacity: 0;\n}\n\n/** Component States */\n/*\n * Disabled\n *\n * When the component is disabled, all interaction\n * should be prevented. Here we modify the bg color,\n * and change the cursor displayed on the interactive\n * components.\n */\n[dir] .vs--disabled .vs__dropdown-toggle, [dir] .vs--disabled .vs__clear, [dir] .vs--disabled .vs__search, [dir] .vs--disabled .vs__selected, [dir] .vs--disabled .vs__open-indicator {\n  cursor: not-allowed;\n  background-color: #f8f8f8;\n}\n\n/*\n *  RTL - Right to Left Support\n *\n *  Because we're using a flexbox layout, the `dir=\"rtl\"`\n *  HTML attribute does most of the work for us by\n *  rearranging the child elements visually.\n */\n.v-select[dir=rtl] .vs__actions {\n  padding: 0 3px 0 6px;\n}\n.v-select[dir=rtl] .vs__clear {\n  margin-left: 6px;\n  margin-right: 0;\n}\n.v-select[dir=rtl] .vs__deselect {\n  margin-left: 0;\n  margin-right: 2px;\n}\n.v-select[dir=rtl] .vs__dropdown-menu {\n  text-align: right;\n}\n\n/**\n    Dropdown Toggle\n\n    The dropdown toggle is the primary wrapper of the component. It\n    has two direct descendants: .vs__selected-options, and .vs__actions.\n\n    .vs__selected-options holds the .vs__selected's as well as the\n    main search input.\n\n    .vs__actions holds the clear button and dropdown toggle.\n */\n.vs__dropdown-toggle {\n  appearance: none;\n  display: flex;\n  white-space: normal;\n}\n[dir] .vs__dropdown-toggle {\n  padding: 0 0 4px 0;\n  background: none;\n  border: 1px solid #d8d6de;\n  border-radius: 0.357rem;\n}\n.vs__selected-options {\n  display: flex;\n  flex-basis: 100%;\n  flex-grow: 1;\n  flex-wrap: wrap;\n  position: relative;\n}\n[dir] .vs__selected-options {\n  padding: 0 2px;\n}\n.vs__actions {\n  display: flex;\n  align-items: center;\n}\n[dir=ltr] .vs__actions {\n  padding: 4px 6px 0 3px;\n}\n[dir=rtl] .vs__actions {\n  padding: 4px 3px 0 6px;\n}\n\n/* Dropdown Toggle States */\n[dir] .vs--searchable .vs__dropdown-toggle {\n  cursor: text;\n}\n[dir] .vs--unsearchable .vs__dropdown-toggle {\n  cursor: pointer;\n}\n[dir] .vs--open .vs__dropdown-toggle {\n  border-bottom-color: transparent;\n}\n[dir=ltr] .vs--open .vs__dropdown-toggle {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n[dir=rtl] .vs--open .vs__dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.vs__open-indicator {\n  fill: rgba(60, 60, 60, 0.5);\n  transition: transform 150ms cubic-bezier(1, -0.115, 0.975, 0.855);\n}\n[dir] .vs__open-indicator {\n  transform: scale(1);\n  transition-timing-function: cubic-bezier(1, -0.115, 0.975, 0.855);\n}\n[dir=ltr] .vs--open .vs__open-indicator {\n  transform: rotate(180deg) scale(1);\n}\n[dir=rtl] .vs--open .vs__open-indicator {\n  transform: rotate(-180deg) scale(1);\n}\n.vs--loading .vs__open-indicator {\n  opacity: 0;\n}\n\n/* Clear Button */\n.vs__clear {\n  fill: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__clear {\n  padding: 0;\n  border: 0;\n  background-color: transparent;\n  cursor: pointer;\n}\n[dir=ltr] .vs__clear {\n  margin-right: 8px;\n}\n[dir=rtl] .vs__clear {\n  margin-left: 8px;\n}\n\n/* Dropdown Menu */\n.vs__dropdown-menu {\n  display: block;\n  box-sizing: border-box;\n  position: absolute;\n  top: calc(100% - 1px);\n  z-index: 1000;\n  width: 100%;\n  max-height: 350px;\n  min-width: 160px;\n  overflow-y: auto;\n  list-style: none;\n}\n[dir] .vs__dropdown-menu {\n  padding: 5px 0;\n  margin: 0;\n  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.1);\n  border: 1px solid #d8d6de;\n  border-top-style: none;\n  border-radius: 0 0 0.357rem 0.357rem;\n  background: #fff;\n}\n[dir=ltr] .vs__dropdown-menu {\n  left: 0;\n  text-align: left;\n}\n[dir=rtl] .vs__dropdown-menu {\n  right: 0;\n  text-align: right;\n}\n[dir] .vs__no-options {\n  text-align: center;\n}\n\n/* List Items */\n.vs__dropdown-option {\n  line-height: 1.42857143;\n  /* Normalize line height */\n  display: block;\n  color: #333;\n  /* Overrides most CSS frameworks */\n  white-space: nowrap;\n}\n[dir] .vs__dropdown-option {\n  padding: 3px 20px;\n  clear: both;\n  cursor: pointer;\n}\n.vs__dropdown-option--highlight {\n  color: #7367f0 !important;\n}\n[dir] .vs__dropdown-option--highlight {\n  background: rgba(115, 103, 240, 0.12);\n}\n.vs__dropdown-option--deselect {\n  color: #fff;\n}\n[dir] .vs__dropdown-option--deselect {\n  background: #fb5858;\n}\n.vs__dropdown-option--disabled {\n  color: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__dropdown-option--disabled {\n  background: inherit;\n  cursor: inherit;\n}\n\n/* Selected Tags */\n.vs__selected {\n  display: flex;\n  align-items: center;\n  color: #333;\n  line-height: 1.8;\n  z-index: 0;\n}\n[dir] .vs__selected {\n  background-color: #7367f0;\n  border: 0 solid rgba(60, 60, 60, 0.26);\n  border-radius: 0.357rem;\n  margin: 4px 2px 0px 2px;\n  padding: 0 0.25em;\n}\n.vs__deselect {\n  display: inline-flex;\n  appearance: none;\n  fill: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__deselect {\n  padding: 0;\n  border: 0;\n  cursor: pointer;\n  background: none;\n  text-shadow: 0 1px 0 #fff;\n}\n[dir=ltr] .vs__deselect {\n  margin-left: 4px;\n}\n[dir=rtl] .vs__deselect {\n  margin-right: 4px;\n}\n\n/* States */\n[dir] .vs--single .vs__selected {\n  background-color: transparent;\n  border-color: transparent;\n}\n.vs--single.vs--open .vs__selected, .vs--single.vs--loading .vs__selected {\n  position: absolute;\n  opacity: 0.4;\n}\n.vs--single.vs--searching .vs__selected {\n  display: none;\n}\n\n/* Search Input */\n/**\n * Super weird bug... If this declaration is grouped\n * below, the cancel button will still appear in chrome.\n * If it's up here on it's own, it'll hide it.\n */\n.vs__search::-webkit-search-cancel-button {\n  display: none;\n}\n.vs__search::-webkit-search-decoration,\n.vs__search::-webkit-search-results-button,\n.vs__search::-webkit-search-results-decoration,\n.vs__search::-ms-clear {\n  display: none;\n}\n.vs__search,\n.vs__search:focus {\n  appearance: none;\n  line-height: 1.8;\n  font-size: 1em;\n  outline: none;\n  width: 0;\n  max-width: 100%;\n  flex-grow: 1;\n  z-index: 1;\n}\n[dir] .vs__search, [dir] .vs__search:focus {\n  border: 1px solid transparent;\n  margin: 4px 0 0 0;\n  padding: 0 7px;\n  background: none;\n  box-shadow: none;\n}\n[dir=ltr] .vs__search, [dir=ltr] .vs__search:focus {\n  border-left: none;\n}\n[dir=rtl] .vs__search, [dir=rtl] .vs__search:focus {\n  border-right: none;\n}\n.vs__search::placeholder {\n  color: #6e6b7b;\n}\n\n/**\n    States\n */\n.vs--unsearchable .vs__search {\n  opacity: 1;\n}\n[dir] .vs--unsearchable:not(.vs--disabled) .vs__search {\n  cursor: pointer;\n}\n.vs--single.vs--searching:not(.vs--open):not(.vs--loading) .vs__search {\n  opacity: 0.2;\n}\n\n/* Loading Spinner */\n.vs__spinner {\n  align-self: center;\n  opacity: 0;\n  font-size: 5px;\n  text-indent: -9999em;\n  overflow: hidden;\n  transition: opacity 0.1s;\n}\n[dir] .vs__spinner {\n  border-top: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-bottom: 0.9em solid rgba(100, 100, 100, 0.1);\n  transform: translateZ(0);\n}\n[dir=ltr] .vs__spinner {\n  border-right: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-left: 0.9em solid rgba(60, 60, 60, 0.45);\n  animation:  vSelectSpinner-ltr 1.1s infinite linear;\n}\n[dir=rtl] .vs__spinner {\n  border-left: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-right: 0.9em solid rgba(60, 60, 60, 0.45);\n  animation:  vSelectSpinner-rtl 1.1s infinite linear;\n}\n.vs__spinner,\n.vs__spinner:after {\n  width: 5em;\n  height: 5em;\n}\n[dir] .vs__spinner, [dir] .vs__spinner:after {\n  border-radius: 50%;\n}\n\n/* Loading Spinner States */\n.vs--loading .vs__spinner {\n  opacity: 1;\n}\n.vs__open-indicator {\n  fill: none;\n}\n[dir] .vs__open-indicator {\n  margin-top: 0.15rem;\n}\n.vs__dropdown-toggle {\n  transition: all 0.25s ease-in-out;\n}\n[dir] .vs__dropdown-toggle {\n  padding: 0.59px 0 4px 0;\n}\n[dir=ltr] .vs--single .vs__dropdown-toggle {\n  padding-left: 6px;\n}\n[dir=rtl] .vs--single .vs__dropdown-toggle {\n  padding-right: 6px;\n}\n.vs__dropdown-option--disabled {\n  opacity: 0.5;\n}\n[dir] .vs__dropdown-option--disabled.vs__dropdown-option--selected {\n  background: #7367f0 !important;\n}\n.vs__dropdown-option {\n  color: #6e6b7b;\n}\n[dir] .vs__dropdown-option, [dir] .vs__no-options {\n  padding: 7px 20px;\n}\n.vs__dropdown-option--selected {\n  background-color: #7367f0;\n  color: #fff;\n  position: relative;\n}\n.vs__dropdown-option--selected::after {\n  content: \"\";\n  height: 1.1rem;\n  width: 1.1rem;\n  display: inline-block;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  right: 20px;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-check'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 1.1rem;\n}\n[dir=rtl] .vs__dropdown-option--selected::after {\n  left: 20px;\n  right: unset;\n}\n.vs__dropdown-option--selected.vs__dropdown-option--highlight {\n  color: #fff !important;\n  background-color: #7367f0 !important;\n}\n.vs__clear svg {\n  color: #6e6b7b;\n}\n.vs__selected {\n  color: #fff;\n}\n.v-select.vs--single .vs__selected {\n  color: #6e6b7b;\n  transition: transform 0.2s ease;\n}\n[dir] .v-select.vs--single .vs__selected {\n  margin-top: 5px;\n}\n[dir=ltr] .v-select.vs--single .vs__selected input {\n  padding-left: 0;\n}\n[dir=rtl] .v-select.vs--single .vs__selected input {\n  padding-right: 0;\n}\n[dir=ltr] .vs--single.vs--open .vs__selected {\n  transform: translateX(5px);\n}\n[dir=rtl] .vs--single.vs--open .vs__selected {\n  transform: translateX(-5px);\n}\n.vs__selected .vs__deselect {\n  color: inherit;\n}\n.v-select:not(.vs--single) .vs__selected {\n  font-size: 0.9rem;\n}\n[dir] .v-select:not(.vs--single) .vs__selected {\n  border-radius: 3px;\n  padding: 0 0.6em;\n}\n[dir=ltr] .v-select:not(.vs--single) .vs__selected {\n  margin: 5px 2px 2px 5px;\n}\n[dir=rtl] .v-select:not(.vs--single) .vs__selected {\n  margin: 5px 5px 2px 2px;\n}\n.v-select:not(.vs--single) .vs__deselect svg {\n  vertical-align: text-top;\n}\n[dir] .v-select:not(.vs--single) .vs__deselect svg {\n  transform: scale(0.8);\n}\n.vs__dropdown-menu {\n  top: calc(100% + 1rem);\n}\n[dir] .vs__dropdown-menu {\n  border: none;\n  border-radius: 6px;\n  padding: 0;\n}\n[dir] .vs--open .vs__dropdown-toggle {\n  border-color: #7367f0;\n  border-bottom-color: #7367f0;\n  box-shadow: 0 3px 10px 0 rgba(34, 41, 47, 0.1);\n}\n[dir=ltr] .vs--open .vs__dropdown-toggle {\n  border-bottom-left-radius: 0.357rem;\n  border-bottom-right-radius: 0.357rem;\n}\n[dir=rtl] .vs--open .vs__dropdown-toggle {\n  border-bottom-right-radius: 0.357rem;\n  border-bottom-left-radius: 0.357rem;\n}\n.select-size-lg .vs__selected {\n  font-size: 1rem !important;\n}\n[dir] .select-size-lg.vs--single.vs--open .vs__selected {\n  margin-top: 6px;\n}\n.select-size-lg .vs__dropdown-toggle,\n.select-size-lg .vs__selected {\n  font-size: 1.25rem;\n}\n[dir] .select-size-lg .vs__dropdown-toggle {\n  padding: 5px;\n}\n[dir] .select-size-lg .vs__dropdown-toggle input {\n  margin-top: 0;\n}\n.select-size-lg .vs__deselect svg {\n  vertical-align: middle !important;\n}\n[dir] .select-size-lg .vs__deselect svg {\n  transform: scale(1) !important;\n}\n[dir] .select-size-sm .vs__dropdown-toggle {\n  padding-bottom: 0;\n  padding: 1px;\n}\n[dir] .select-size-sm.vs--single .vs__dropdown-toggle {\n  padding: 2px;\n}\n.select-size-sm .vs__dropdown-toggle,\n.select-size-sm .vs__selected {\n  font-size: 0.9rem;\n}\n[dir] .select-size-sm .vs__actions {\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n.select-size-sm .vs__deselect svg {\n  vertical-align: middle !important;\n}\n[dir] .select-size-sm .vs__search {\n  margin-top: 0;\n}\n.select-size-sm.v-select .vs__selected {\n  font-size: 0.75rem;\n}\n[dir] .select-size-sm.v-select .vs__selected {\n  padding: 0 0.3rem;\n}\n[dir] .select-size-sm.v-select:not(.vs--single) .vs__selected {\n  margin: 4px 5px;\n}\n[dir] .select-size-sm.v-select.vs--single .vs__selected {\n  margin-top: 1px;\n}\n[dir] .select-size-sm.vs--single.vs--open .vs__selected {\n  margin-top: 4px;\n}\n.dark-layout .vs__dropdown-toggle {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .vs__dropdown-toggle {\n  background: #283046;\n  border-color: #404656;\n}\n.dark-layout .vs__selected-options input {\n  color: #b4b7bd;\n}\n.dark-layout .vs__selected-options input::placeholder {\n  color: #676d7d;\n}\n.dark-layout .vs__actions svg {\n  fill: #404656;\n}\n[dir] .dark-layout .vs__dropdown-menu {\n  background: #283046;\n}\n.dark-layout .vs__dropdown-menu li {\n  color: #b4b7bd;\n}\n.dark-layout .v-select:not(.vs--single) .vs__selected {\n  color: #7367f0;\n}\n[dir] .dark-layout .v-select:not(.vs--single) .vs__selected {\n  background-color: rgba(115, 103, 240, 0.12);\n}\n.dark-layout .v-select.vs--single .vs__selected {\n  color: #b4b7bd !important;\n}\n.dark-layout .vs--disabled .vs__dropdown-toggle,\n.dark-layout .vs--disabled .vs__clear,\n.dark-layout .vs--disabled .vs__search,\n.dark-layout .vs--disabled .vs__selected,\n.dark-layout .vs--disabled .vs__open-indicator {\n  opacity: 0.5;\n}\n[dir] .dark-layout .vs--disabled .vs__dropdown-toggle, [dir] .dark-layout .vs--disabled .vs__clear, [dir] .dark-layout .vs--disabled .vs__search, [dir] .dark-layout .vs--disabled .vs__selected, [dir] .dark-layout .vs--disabled .vs__open-indicator {\n  background-color: #283046;\n}\n.flatpickr-calendar .flatpickr-day {\n  color: #6e6b7b;\n}\n[dir] .flatpickr-calendar .flatpickr-day.today {\n  border-color: #7367f0;\n}\n.flatpickr-calendar .flatpickr-day.today:hover {\n  color: #6e6b7b;\n}\n[dir] .flatpickr-calendar .flatpickr-day.today:hover {\n  background: transparent;\n}\n.flatpickr-calendar .flatpickr-day.selected, .flatpickr-calendar .flatpickr-day.selected:hover {\n  color: #fff;\n}\n[dir] .flatpickr-calendar .flatpickr-day.selected, [dir] .flatpickr-calendar .flatpickr-day.selected:hover {\n  background: #7367f0;\n  border-color: #7367f0;\n}\n[dir] .flatpickr-calendar .flatpickr-day.inRange, [dir] .flatpickr-calendar .flatpickr-day.inRange:hover {\n  background: #f3f2fe;\n  border-color: #f3f2fe;\n}\n[dir=ltr] .flatpickr-calendar .flatpickr-day.inRange, [dir=ltr] .flatpickr-calendar .flatpickr-day.inRange:hover {\n  box-shadow: -5px 0 0 #f3f2fe, 5px 0 0 #f3f2fe;\n}\n[dir=rtl] .flatpickr-calendar .flatpickr-day.inRange, [dir=rtl] .flatpickr-calendar .flatpickr-day.inRange:hover {\n  box-shadow: 5px 0 0 #f3f2fe, -5px 0 0 #f3f2fe;\n}\n.flatpickr-calendar .flatpickr-day.startRange, .flatpickr-calendar .flatpickr-day.endRange, .flatpickr-calendar .flatpickr-day.startRange:hover, .flatpickr-calendar .flatpickr-day.endRange:hover {\n  color: #fff;\n}\n[dir] .flatpickr-calendar .flatpickr-day.startRange, [dir] .flatpickr-calendar .flatpickr-day.endRange, [dir] .flatpickr-calendar .flatpickr-day.startRange:hover, [dir] .flatpickr-calendar .flatpickr-day.endRange:hover {\n  background: #7367f0;\n  border-color: #7367f0;\n}\n[dir=ltr] .flatpickr-calendar .flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n+1)), [dir=ltr] .flatpickr-calendar .flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n+1)), [dir=ltr] .flatpickr-calendar .flatpickr-day.endRange.startRange + .endRange:not(:nth-child(7n+1)) {\n  box-shadow: -10px 0 0 #7367f0;\n}\n[dir=rtl] .flatpickr-calendar .flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n+1)), [dir=rtl] .flatpickr-calendar .flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n+1)), [dir=rtl] .flatpickr-calendar .flatpickr-day.endRange.startRange + .endRange:not(:nth-child(7n+1)) {\n  box-shadow: 10px 0 0 #7367f0;\n}\n.flatpickr-calendar .flatpickr-day.flatpickr-disabled, .flatpickr-calendar .flatpickr-day.prevMonthDay, .flatpickr-calendar .flatpickr-day.nextMonthDay {\n  color: #dae1e7;\n}\n[dir] .flatpickr-calendar .flatpickr-day:hover {\n  background: #f6f6f6;\n}\n.flatpickr-calendar:after, .flatpickr-calendar:before {\n  display: none;\n}\n.flatpickr-calendar .flatpickr-months .flatpickr-prev-month,\n.flatpickr-calendar .flatpickr-months .flatpickr-next-month {\n  top: -5px;\n}\n.flatpickr-calendar .flatpickr-months .flatpickr-prev-month:hover i, .flatpickr-calendar .flatpickr-months .flatpickr-prev-month:hover svg,\n.flatpickr-calendar .flatpickr-months .flatpickr-next-month:hover i,\n.flatpickr-calendar .flatpickr-months .flatpickr-next-month:hover svg {\n  fill: #7367f0;\n}\n.flatpickr-calendar .flatpickr-current-month span.cur-month {\n  font-weight: 300;\n}\n.flatpickr-calendar.open {\n  z-index: 1051;\n}\n.flatpickr-calendar.hasTime.open .flatpickr-time {\n  height: auto;\n}\n[dir] .flatpickr-time input:hover, [dir] .flatpickr-time .flatpickr-am-pm:hover, [dir] .flatpickr-time input:focus, [dir] .flatpickr-time .flatpickr-am-pm:focus {\n  background: #fff;\n}\n[dir] .dark-layout .flatpickr-calendar {\n  background: #161d31;\n  border-color: #161d31;\n  box-shadow: none;\n}\n.dark-layout .flatpickr-calendar .flatpickr-months i,\n.dark-layout .flatpickr-calendar .flatpickr-months svg {\n  fill: #b4b7bd;\n}\n.dark-layout .flatpickr-calendar .flatpickr-month {\n  color: #b4b7bd;\n}\n[dir=ltr] .dark-layout .flatpickr-calendar .flatpickr-weekwrapper .flatpickr-weeks {\n  box-shadow: 1px 0 0 #3b4253;\n}\n[dir=rtl] .dark-layout .flatpickr-calendar .flatpickr-weekwrapper .flatpickr-weeks {\n  box-shadow: -1px 0 0 #3b4253;\n}\n.dark-layout .flatpickr-calendar .flatpickr-weekday {\n  color: #b4b7bd;\n}\n.dark-layout .flatpickr-calendar .flatpickr-day, .dark-layout .flatpickr-calendar .flatpickr-day.today:hover {\n  color: #b4b7bd;\n}\n.dark-layout .flatpickr-calendar .flatpickr-day.selected {\n  color: #fff;\n}\n.dark-layout .flatpickr-calendar .flatpickr-day.prevMonthDay, .dark-layout .flatpickr-calendar .flatpickr-day.nextMonthDay, .dark-layout .flatpickr-calendar .flatpickr-day.flatpickr-disabled {\n  color: #4e5154 !important;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-day.inRange, [dir] .dark-layout .flatpickr-calendar .flatpickr-day.inRange:hover {\n  background: #283046;\n  border-color: #283046;\n}\n[dir=ltr] .dark-layout .flatpickr-calendar .flatpickr-day.inRange, [dir=ltr] .dark-layout .flatpickr-calendar .flatpickr-day.inRange:hover {\n  box-shadow: -5px 0 0 #283046, 5px 0 0 #283046;\n}\n[dir=rtl] .dark-layout .flatpickr-calendar .flatpickr-day.inRange, [dir=rtl] .dark-layout .flatpickr-calendar .flatpickr-day.inRange:hover {\n  box-shadow: 5px 0 0 #283046, -5px 0 0 #283046;\n}\n.dark-layout .flatpickr-calendar .flatpickr-day:hover:not(.selected):not(.today):not(.startRange):not(.endRange) {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-day:hover:not(.selected):not(.today):not(.startRange):not(.endRange) {\n  border-color: #283046;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-days .flatpickr-day:hover:not(.selected):not(.today):not(.startRange):not(.endRange), [dir] .dark-layout .flatpickr-calendar .flatpickr-days .flatpickr-day:focus:not(.selected):not(.today):not(.startRange):not(.endRange) {\n  background: #283046;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-time {\n  border-color: #161d31 !important;\n}\n.dark-layout .flatpickr-calendar .flatpickr-time .numInput,\n.dark-layout .flatpickr-calendar .flatpickr-time .flatpickr-am-pm {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-time .numInput:hover, [dir] .dark-layout .flatpickr-calendar .flatpickr-time .flatpickr-am-pm:hover {\n  background: #161d31;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-time .arrowUp:after {\n  border-bottom-color: #b4b7bd;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-time .arrowDown:after {\n  border-top-color: #b4b7bd;\n}\n[dir] .dark-layout .flatpickr-time input:hover, [dir] .dark-layout .flatpickr-time .flatpickr-am-pm:hover, [dir] .dark-layout .flatpickr-time input:focus, [dir] .dark-layout .flatpickr-time .flatpickr-am-pm:focus {\n  background: #161d31;\n}\n.flatpickr-input[readonly],\n.flatpickr-input ~ .form-control[readonly],\n.flatpickr-human-friendly[readonly] {\n  opacity: 1 !important;\n}\n[dir] .flatpickr-input[readonly], [dir] .flatpickr-input ~ .form-control[readonly], [dir] .flatpickr-human-friendly[readonly] {\n  background-color: inherit;\n}\n[dir] .flatpickr-weekdays {\n  margin-top: 8px;\n}\n.flatpickr-current-month .flatpickr-monthDropdown-months {\n  -webkit-appearance: none;\n}\n.flatpickr-current-month .flatpickr-monthDropdown-months,\n.flatpickr-current-month .numInputWrapper {\n  font-size: 1.1rem;\n  transition: all 0.15s ease-out;\n}\n[dir] .flatpickr-current-month .flatpickr-monthDropdown-months, [dir] .flatpickr-current-month .numInputWrapper {\n  border-radius: 4px;\n  padding: 2px;\n}\n.flatpickr-current-month .flatpickr-monthDropdown-months span,\n.flatpickr-current-month .numInputWrapper span {\n  display: none;\n}\nhtml[dir=rtl] .flatpickr-calendar .flatpickr-prev-month svg,\nhtml[dir=rtl] .flatpickr-calendar .flatpickr-next-month svg {\n  transform: rotate(180deg);\n}\n.b-table-responsive::-webkit-scrollbar {\n  width: 8px;\n}\n[dir] .b-table-responsive::-webkit-scrollbar-track {\n  background-color: #f1f1f1;\n}\n[dir] .b-table-responsive::-webkit-scrollbar-thumb {\n  background-color: #888;\n  border-radius: 2px;\n}\n[dir] .b-table-responsive::-webkit-scrollbar-thumb:hover {\n  background-color: #555;\n}\n.flatpickr-small .flatpickr-input {\n  /*font-size: 8px!important; /* Ajusta el tamaño del texto del input */\n  /* Ajusta el padding del input */\n  /*width: 120px; /* Ajusta el ancho del input */\n}\n[dir] .flatpickr-small .flatpickr-input {\n  padding: 5px;\n}\n.flatpickr-input {\n  /*width: 150px!important; /* Ajusta el ancho del input */\n  height: 30px !important;\n  /* Ajusta la altura del input */\n  /*font-size: 7px!important; /* Ajusta el tamaño del texto del input */\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Dashboard.vue?vue&type=style&index=0&id=d9e5d64c&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Dashboard.vue?vue&type=style&index=0&id=d9e5d64c&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "[dir] .card-statistics .statistics-body {\n  padding: 2rem 2.4rem !important;\n}\n@media (max-width: 991.98px) {\n[dir] .card-statistics .card-header, [dir] .card-statistics .statistics-body {\n    padding: 1.5rem !important;\n}\n}\n[dir] .card-company-table thead th {\n  border: 0;\n}\n[dir] .card-company-table td {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n[dir] .card-company-table td .avatar {\n  background-color: #f8f8f8;\n}\n[dir=ltr] .card-company-table td .avatar {\n  margin-right: 2rem;\n}\n[dir=rtl] .card-company-table td .avatar {\n  margin-left: 2rem;\n}\n[dir] .card-company-table td .avatar img {\n  border-radius: 0;\n}\n[dir] .card-browser-states .browser-states:first-child {\n  margin-top: 0;\n}\n[dir] .card-browser-states .browser-states:not(:first-child) {\n  margin-top: 1.7rem;\n}\n[dir] .card-transaction .transaction-item:not(:last-child) {\n  margin-bottom: 1.5rem;\n}\n[dir] .card-company-table td .b-avatar.badge-light-company {\n  background-color: #f8f8f8;\n}\n[dir=ltr] .card-company-table td .b-avatar.badge-light-company {\n  margin-right: 2rem;\n}\n[dir=rtl] .card-company-table td .b-avatar.badge-light-company {\n  margin-left: 2rem;\n}\n.apexcharts-canvas line[stroke=transparent] {\n  display: none;\n}\n[dir] .apexcharts-canvas .apexcharts-tooltip {\n  background: #fff;\n  border-color: #ebe9f1;\n}\n.apexcharts-canvas .apexcharts-tooltip .apexcharts-tooltip-title {\n  font-weight: 600;\n}\n[dir] .apexcharts-canvas .apexcharts-tooltip .apexcharts-tooltip-title {\n  background: #fff !important;\n  border-color: #ebe9f1 !important;\n}\n.apexcharts-canvas .apexcharts-tooltip.apexcharts-theme-dark .apexcharts-tooltip-text-label,\n.apexcharts-canvas .apexcharts-tooltip.apexcharts-theme-dark .apexcharts-tooltip-text-value {\n  color: #fff;\n}\n[dir] .apexcharts-canvas .apexcharts-xaxistooltip, [dir] .apexcharts-canvas .apexcharts-yaxistooltip {\n  background: #f8f8f8;\n  border-color: #ebe9f1;\n}\n[dir] .apexcharts-canvas .apexcharts-xaxistooltip-bottom:before {\n  border-bottom-color: #ebe9f1;\n}\n[dir] .apexcharts-canvas .apexcharts-xaxistooltip-bottom::after {\n  border-bottom-color: #f8f8f8;\n}\n[dir] .apexcharts-canvas .apexcharts-xaxistooltip-top:before {\n  border-top-color: #ebe9f1;\n}\n[dir] .apexcharts-canvas .apexcharts-xaxistooltip-top::after {\n  border-top-color: #f8f8f8;\n}\n[dir=ltr] .apexcharts-canvas .apexcharts-yaxistooltip-left:before {\n  border-left-color: #ebe9f1;\n}\n[dir=rtl] .apexcharts-canvas .apexcharts-yaxistooltip-left:before {\n  border-right-color: #ebe9f1;\n}\n[dir=ltr] .apexcharts-canvas .apexcharts-yaxistooltip-left:after {\n  border-left-color: #f8f8f8;\n}\n[dir=rtl] .apexcharts-canvas .apexcharts-yaxistooltip-left:after {\n  border-right-color: #f8f8f8;\n}\n[dir=ltr] .apexcharts-canvas .apexcharts-yaxistooltip-right:before {\n  border-right-color: #ebe9f1;\n}\n[dir=rtl] .apexcharts-canvas .apexcharts-yaxistooltip-right:before {\n  border-left-color: #ebe9f1;\n}\n[dir=ltr] .apexcharts-canvas .apexcharts-yaxistooltip-right:after {\n  border-right-color: #f8f8f8;\n}\n[dir=rtl] .apexcharts-canvas .apexcharts-yaxistooltip-right:after {\n  border-left-color: #f8f8f8;\n}\n.apexcharts-canvas .apexcharts-text,\n.apexcharts-canvas .apexcharts-tooltip-text,\n.apexcharts-canvas .apexcharts-datalabel-label,\n.apexcharts-canvas .apexcharts-datalabel {\n  font-family: \"Montserrat\", Helvetica, Arial, serif !important;\n  fill: #6e6b7b;\n  font-weight: 400;\n  filter: none;\n}\n.apexcharts-canvas .apexcharts-pie-label {\n  fill: white;\n  filter: none;\n}\n.apexcharts-canvas .apexcharts-pie .apexcharts-pie-series .apexcharts-pie-area {\n  stroke-width: 0;\n}\n.apexcharts-canvas .apexcharts-pie .apexcharts-datalabel-label,\n.apexcharts-canvas .apexcharts-pie .apexcharts-datalabel-value {\n  font-size: 1.5rem;\n}\n[dir] .apexcharts-canvas .apexcharts-marker {\n  box-shadow: none;\n}\n[dir] .apexcharts-canvas .apexcharts-legend-series + .apexcharts-legend-series {\n  margin-top: 0.625rem;\n}\n.apexcharts-canvas .apexcharts-legend-series .apexcharts-legend-text {\n  color: #6e6b7b !important;\n  font-size: 1rem !important;\n}\n[dir=ltr] .apexcharts-canvas .apexcharts-legend-series .apexcharts-legend-text {\n  margin-left: 0.5rem;\n}\n[dir=rtl] .apexcharts-canvas .apexcharts-legend-series .apexcharts-legend-text {\n  margin-right: 0.5rem;\n}\n.apexcharts-canvas .apexcharts-xcrosshairs,\n.apexcharts-canvas .apexcharts-ycrosshairs,\n.apexcharts-canvas .apexcharts-gridline {\n  stroke: #ebe9f1;\n}\n.apexcharts-legend.position-bottom {\n  bottom: 3rem;\n}\n.dark-layout .apexcharts-canvas .apexcharts-xaxis-tick,\n.dark-layout .apexcharts-canvas line {\n  stroke: #3b4253;\n}\n.dark-layout .apexcharts-canvas .apexcharts-heatmap .apexcharts-heatmap-rect {\n  stroke: #3b4253;\n}\n.dark-layout .apexcharts-canvas .apexcharts-radialbar .apexcharts-radialbar-track .apexcharts-radialbar-area {\n  stroke: #161d31;\n}\n.dark-layout .apexcharts-canvas .apexcharts-radar-series polygon {\n  fill: #161d31;\n  stroke: #3b4253;\n}\n.dark-layout .apexcharts-canvas .apexcharts-datalabels-group .apexcharts-datalabel-value {\n  fill: #fff;\n}\n[dir] .dark-layout .apexcharts-canvas .apexcharts-tooltip {\n  background: #283046;\n  border-color: #3b4253;\n}\n.dark-layout .apexcharts-canvas .apexcharts-tooltip .apexcharts-tooltip-title {\n  color: #fff;\n}\n[dir] .dark-layout .apexcharts-canvas .apexcharts-tooltip .apexcharts-tooltip-title {\n  background: #283046 !important;\n  border-color: #3b4253 !important;\n}\n.dark-layout .apexcharts-canvas .apexcharts-tooltip .apexcharts-tooltip-text-label,\n.dark-layout .apexcharts-canvas .apexcharts-tooltip .apexcharts-tooltip-text-value {\n  color: #fff;\n}\n[dir] .dark-layout .apexcharts-canvas .apexcharts-xaxistooltip-bottom:before {\n  border-bottom-color: #3b4253;\n}\n[dir] .dark-layout .apexcharts-canvas .apexcharts-xaxistooltip-bottom::after {\n  border-bottom-color: #161d31;\n}\n[dir] .dark-layout .apexcharts-canvas .apexcharts-xaxistooltip-top:before {\n  border-top-color: #3b4253;\n}\n[dir] .dark-layout .apexcharts-canvas .apexcharts-xaxistooltip-top::after {\n  border-top-color: #161d31;\n}\n[dir=ltr] .dark-layout .apexcharts-canvas .apexcharts-yaxistooltip-left:before {\n  border-left-color: #3b4253;\n}\n[dir=rtl] .dark-layout .apexcharts-canvas .apexcharts-yaxistooltip-left:before {\n  border-right-color: #3b4253;\n}\n[dir=ltr] .dark-layout .apexcharts-canvas .apexcharts-yaxistooltip-left:after {\n  border-left-color: #161d31;\n}\n[dir=rtl] .dark-layout .apexcharts-canvas .apexcharts-yaxistooltip-left:after {\n  border-right-color: #161d31;\n}\n[dir=ltr] .dark-layout .apexcharts-canvas .apexcharts-yaxistooltip-right:before {\n  border-right-color: #3b4253;\n}\n[dir=rtl] .dark-layout .apexcharts-canvas .apexcharts-yaxistooltip-right:before {\n  border-left-color: #3b4253;\n}\n[dir=ltr] .dark-layout .apexcharts-canvas .apexcharts-yaxistooltip-right:after {\n  border-right-color: #161d31;\n}\n[dir=rtl] .dark-layout .apexcharts-canvas .apexcharts-yaxistooltip-right:after {\n  border-left-color: #161d31;\n}\n[dir] .dark-layout .apexcharts-canvas .apexcharts-xaxistooltip, [dir] .dark-layout .apexcharts-canvas .apexcharts-yaxistooltip {\n  background: #161d31;\n  border-color: #3b4253;\n}\n.dark-layout .apexcharts-canvas .apexcharts-xaxistooltip .apexcharts-xaxistooltip-text,\n.dark-layout .apexcharts-canvas .apexcharts-xaxistooltip .apexcharts-yaxistooltip-text,\n.dark-layout .apexcharts-canvas .apexcharts-yaxistooltip .apexcharts-xaxistooltip-text,\n.dark-layout .apexcharts-canvas .apexcharts-yaxistooltip .apexcharts-yaxistooltip-text {\n  color: #fff;\n}\n.dark-layout .apexcharts-canvas .apexcharts-xaxistooltip .apexcharts-xaxistooltip-text {\n  color: #fff;\n}\n.dark-layout .apexcharts-canvas .apexcharts-yaxis-label,\n.dark-layout .apexcharts-canvas .apexcharts-xaxis-label,\n.dark-layout .apexcharts-canvas .apexcharts-tooltip-text,\n.dark-layout .apexcharts-canvas .apexcharts-datalabel-label {\n  fill: #b4b7bd;\n}\n.dark-layout .apexcharts-canvas .apexcharts-marker {\n  stroke: #3b4253;\n}\n.dark-layout .apexcharts-canvas .apexcharts-legend-series .apexcharts-legend-text {\n  color: #b4b7bd !important;\n}\n.dark-layout .apexcharts-canvas .apexcharts-xcrosshairs,\n.dark-layout .apexcharts-canvas .apexcharts-ycrosshairs,\n.dark-layout .apexcharts-canvas .apexcharts-gridline {\n  stroke: #3b4253;\n}\n.b-table-sticky-header {\n  overflow-y: auto;\n  min-height: 335px;\n  max-height: 335px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/DashboardCentral.vue?vue&type=style&index=0&id=bc43162a&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/DashboardCentral.vue?vue&type=style&index=0&id=bc43162a&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".table-responsive[data-v-bc43162a] {\n  display: block;\n  width: 100%;\n  overflow-x: revert !important;\n  -webkit-overflow-scrolling: touch;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/dashboards/CalendarDays.vue?vue&type=style&index=0&id=08f1f885&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/dashboards/CalendarDays.vue?vue&type=style&index=0&id=08f1f885&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--12-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CalendarDays.vue?vue&type=style&index=0&id=08f1f885&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/dashboards/CalendarDays.vue?vue&type=style&index=0&id=08f1f885&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/dashboards/DashboardAppointments.vue?vue&type=style&index=0&id=2412ef48&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/dashboards/DashboardAppointments.vue?vue&type=style&index=0&id=2412ef48&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--12-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardAppointments.vue?vue&type=style&index=0&id=2412ef48&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/dashboards/DashboardAppointments.vue?vue&type=style&index=0&id=2412ef48&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/dashboards/DashboardCardDoctors.vue?vue&type=style&index=0&id=b0683dc0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/dashboards/DashboardCardDoctors.vue?vue&type=style&index=0&id=b0683dc0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--12-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardCardDoctors.vue?vue&type=style&index=0&id=b0683dc0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/dashboards/DashboardCardDoctors.vue?vue&type=style&index=0&id=b0683dc0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Dashboard.vue?vue&type=style&index=0&id=d9e5d64c&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Dashboard.vue?vue&type=style&index=0&id=d9e5d64c&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/sass-loader/dist/cjs.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=style&index=0&id=d9e5d64c&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Dashboard.vue?vue&type=style&index=0&id=d9e5d64c&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/DashboardCentral.vue?vue&type=style&index=0&id=bc43162a&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/DashboardCentral.vue?vue&type=style&index=0&id=bc43162a&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/sass-loader/dist/cjs.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardCentral.vue?vue&type=style&index=0&id=bc43162a&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/DashboardCentral.vue?vue&type=style&index=0&id=bc43162a&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/dashboards/CalendarDays.vue?vue&type=template&id=08f1f885&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/dashboards/CalendarDays.vue?vue&type=template&id=08f1f885&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card-developer-meetup" }, [
    _c("div", { staticClass: "meetup-header d-flex align-items-center" }, [
      _c(
        "div",
        { staticClass: "meetup-day" },
        [
          _c(
            "b-button-group",
            { attrs: { size: "sm" } },
            [
              _c(
                "b-button",
                {
                  directives: [
                    {
                      name: "ripple",
                      rawName: "v-ripple.400",
                      value: "rgba(113, 102, 240, 0.15)",
                      expression: "'rgba(113, 102, 240, 0.15)'",
                      modifiers: { 400: true },
                    },
                  ],
                  staticClass: "btn-icon",
                  attrs: { size: "sm", variant: "outline-primary" },
                  on: { click: _vm.decrementDay },
                },
                [_c("feather-icon", { attrs: { icon: "ChevronLeftIcon" } })],
                1
              ),
              _vm._v(" "),
              _c(
                "b-button",
                {
                  directives: [
                    {
                      name: "ripple",
                      rawName: "v-ripple.400",
                      value: "rgba(113, 102, 240, 0.15)",
                      expression: "'rgba(113, 102, 240, 0.15)'",
                      modifiers: { 400: true },
                    },
                  ],
                  staticClass: "btn-icon",
                  attrs: { size: "sm", variant: "outline-primary" },
                  on: { click: _vm.incrementDay },
                },
                [_c("feather-icon", { attrs: { icon: "ChevronRightIcon" } })],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("h6", { staticClass: "mb-0 text-uppercase mt-2" }, [
            _vm._v(
              "\n                " +
                _vm._s(_vm.formattedDateName) +
                "\n            "
            ),
          ]),
          _vm._v(" "),
          _c("h3", { staticClass: "mb-0" }, [
            _vm._v(
              "\n                " +
                _vm._s(_vm.formattedDate) +
                "\n            "
            ),
          ]),
          _vm._v(" "),
          _c("h6", { staticClass: "mb-0 text-uppercase" }, [
            _vm._v(
              "\n                " +
                _vm._s(_vm.formattedDateMonthName) +
                "\n            "
            ),
          ]),
        ],
        1
      ),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/dashboards/DashboardAppointments.vue?vue&type=template&id=2412ef48&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/dashboards/DashboardAppointments.vue?vue&type=template&id=2412ef48& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-overlay",
    {
      attrs: {
        show: _vm.loading,
        blur: "2px",
        variant: "transparent",
        rounded: "lg",
        opacity: "0.85",
      },
      scopedSlots: _vm._u([
        {
          key: "overlay",
          fn: function () {
            return [
              _c(
                "div",
                { staticClass: "d-flex align-items-center" },
                [
                  _c("b-spinner", {
                    attrs: { small: "", type: "grow", variant: "secondary" },
                  }),
                  _vm._v(" "),
                  _c("b-spinner", { attrs: { type: "grow", variant: "dark" } }),
                  _vm._v(" "),
                  _c("b-spinner", {
                    attrs: { small: "", type: "grow", variant: "secondary" },
                  }),
                ],
                1
              ),
            ]
          },
          proxy: true,
        },
      ]),
    },
    [
      _vm._v(" "),
      _c(
        "b-card",
        { attrs: { "no-body": "" } },
        [
          _c(
            "div",
            { staticClass: "m-2" },
            [
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    { attrs: { cols: "12", md: "2" } },
                    [
                      _c("calendar-days", {
                        model: {
                          value: _vm.currentDay,
                          callback: function ($$v) {
                            _vm.currentDay = $$v
                          },
                          expression: "currentDay",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "mt-2", attrs: { cols: "12", md: "10" } },
                    [
                      _c("h4", [
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm.$t("appointments.management")) +
                            "\n                        "
                        ),
                        _c("small", [
                          _c("br"),
                          _vm._v(
                            _vm._s(_vm.$t("appointments.management_help"))
                          ),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-row",
                        [
                          _c(
                            "b-col",
                            {
                              staticClass: "mt-2",
                              attrs: { cols: "12", md: "3" },
                            },
                            [
                              _c("v-select", {
                                staticClass: "select-size-sm",
                                attrs: {
                                  options: _vm.calendarOptions,
                                  label: "label",
                                  reduce: function (calendar) {
                                    return calendar.label
                                  },
                                  "input-id": "calendar",
                                  clearable: false,
                                  searchable: false,
                                  placeholder: _vm.$t(
                                    "appointments.state_placeholder"
                                  ),
                                },
                                scopedSlots: _vm._u([
                                  {
                                    key: "option",
                                    fn: function (ref) {
                                      var color = ref.color
                                      var label = ref.label
                                      return [
                                        _c("div", {
                                          staticClass:
                                            "rounded-circle d-inline-block mr-50",
                                          class: "bg-" + color,
                                          staticStyle: {
                                            height: "10px",
                                            width: "10px",
                                          },
                                        }),
                                        _vm._v(" "),
                                        _c("span", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.$t(
                                                "appointments.status." + label
                                              )
                                            )
                                          ),
                                        ]),
                                      ]
                                    },
                                  },
                                  {
                                    key: "selected-option",
                                    fn: function (ref) {
                                      var color = ref.color
                                      var label = ref.label
                                      return [
                                        _c("div", {
                                          staticClass:
                                            "rounded-circle d-inline-block mr-50",
                                          class: "bg-" + color,
                                          staticStyle: {
                                            height: "10px",
                                            width: "10px",
                                          },
                                        }),
                                        _vm._v(" "),
                                        _c("span", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.$t(
                                                "appointments.status." + label
                                              )
                                            )
                                          ),
                                        ]),
                                      ]
                                    },
                                  },
                                ]),
                                model: {
                                  value: _vm.state,
                                  callback: function ($$v) {
                                    _vm.state = $$v
                                  },
                                  expression: "state",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            {
                              staticClass: "mt-2",
                              attrs: { cols: "12", md: "9" },
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "_d-flex align-items-center justify-content-end",
                                },
                                [
                                  _c(
                                    "b-input-group",
                                    [
                                      _c("b-form-input", {
                                        staticClass: "d-inline-block _mr-1",
                                        attrs: {
                                          size: "sm",
                                          placeholder: _vm.$t(
                                            "appointments.input_search"
                                          ),
                                        },
                                        on: {
                                          keyup: function ($event) {
                                            if (
                                              !$event.type.indexOf("key") &&
                                              _vm._k(
                                                $event.keyCode,
                                                "enter",
                                                13,
                                                $event.key,
                                                "Enter"
                                              )
                                            ) {
                                              return null
                                            }
                                            return _vm.getAppointments($event)
                                          },
                                        },
                                        model: {
                                          value: _vm.searchQuery,
                                          callback: function ($$v) {
                                            _vm.searchQuery = $$v
                                          },
                                          expression: "searchQuery",
                                        },
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "b-input-group-prepend",
                                        [
                                          _c(
                                            "b-button",
                                            {
                                              attrs: {
                                                size: "sm",
                                                variant: "primary",
                                              },
                                              on: {
                                                click: _vm.getAppointments,
                                              },
                                            },
                                            [
                                              _c("feather-icon", {
                                                attrs: { icon: "SearchIcon" },
                                              }),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("b-table", {
            ref: "refAppointmentsListTable",
            staticClass: "position-relative table-small text-small small",
            attrs: {
              striped: "",
              hover: "",
              items: _vm.appointments,
              fields: _vm.columns,
              responsive: "",
              "primary-key": "id",
              "show-empty": "",
              "empty-text": _vm.$t("datatables.sZeroRecords"),
              "current-page": _vm.currentPage,
              busy: _vm.loading,
              small: "",
              stacked: "md",
            },
            on: {
              "update:busy": function ($event) {
                _vm.loading = $event
              },
            },
            scopedSlots: _vm._u([
              {
                key: "cell(hour)",
                fn: function (data) {
                  return [
                    _vm._v(
                      "\n                " +
                        _vm._s(_vm.dateTimeFormat(data.item.date, "H:mm")) +
                        "\n            "
                    ),
                  ]
                },
              },
              {
                key: "cell(patient_id)",
                fn: function (data) {
                  return [
                    _c(
                      "b-media",
                      { attrs: { "vertical-align": "center" } },
                      [
                        _c(
                          "b-link",
                          {
                            staticClass: "text-wrap",
                            attrs: {
                              to: {
                                name: "apps-patients-view",
                                params: { id: data.item.patient.id },
                              },
                            },
                          },
                          [
                            _c(
                              "span",
                              {
                                staticClass:
                                  "font-weight-bold d-block text-wrap",
                              },
                              [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(data.item.patient.full_name) +
                                    "\n                        "
                                ),
                              ]
                            ),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "small",
                          { staticClass: "text-muted" },
                          [
                            _vm._v(
                              "\n                        " +
                                _vm._s(data.item.patient.document_type) +
                                ": " +
                                _vm._s(data.item.patient.rut)
                            ),
                            _c("br"),
                            _vm._v(" "),
                            _c(
                              "b-link",
                              {
                                attrs: {
                                  href: "tel:" + data.item.patient.phone,
                                },
                              },
                              [
                                _c("feather-icon", {
                                  staticClass: "cursor-pointer",
                                  attrs: { icon: "PhoneCallIcon" },
                                }),
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(data.item.patient.phone) +
                                    "\n                        "
                                ),
                              ],
                              1
                            ),
                            _vm._v(",\n                        "),
                            _c(
                              "b-link",
                              {
                                staticClass: "text-wrap",
                                attrs: {
                                  target: "_blank",
                                  href:
                                    "https://wa.me/" +
                                    data.item.patient.cellphone +
                                    "?text=" +
                                    _vm.messageWhatsapp(data.item),
                                },
                              },
                              [
                                _c("feather-icon", {
                                  staticClass: "cursor-pointer",
                                  attrs: { icon: "MessageSquareIcon" },
                                }),
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(data.item.patient.cellphone) +
                                    "\n                        "
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ]
                },
              },
              {
                key: "cell(user_id)",
                fn: function (data) {
                  return [
                    _c(
                      "span",
                      { staticClass: "font-weight-bold d-block text-wrap" },
                      [
                        _vm._v(
                          "\n                    " +
                            _vm._s(data.item.user.name) +
                            "\n                "
                        ),
                      ]
                    ),
                  ]
                },
              },
              {
                key: "cell(state)",
                fn: function (data) {
                  return [
                    _c(
                      "b-badge",
                      {
                        attrs: {
                          variant:
                            "" +
                            _vm.resolveStateAppointmentColor(data.item.state),
                        },
                      },
                      [
                        _vm._v(
                          _vm._s(_vm.resolveStateAppointment(data.item.state))
                        ),
                      ]
                    ),
                  ]
                },
              },
              {
                key: "cell(actions)",
                fn: function (data) {
                  return [
                    _c(
                      "div",
                      { staticClass: "demo-inline-spacing" },
                      [
                        _vm.findSetting("enable_email_notification") &&
                        _vm.canAccess("appointments.send") &&
                        data.item.state !== "canceled"
                          ? _c(
                              "b-button",
                              {
                                directives: [
                                  {
                                    name: "ripple",
                                    rawName: "v-ripple.400",
                                    value: "rgba(255, 255, 255, 0.15)",
                                    expression: "'rgba(255, 255, 255, 0.15)'",
                                    modifiers: { 400: true },
                                  },
                                ],
                                staticClass: "btn-icon",
                                attrs: { variant: "secondary", size: "sm" },
                                on: {
                                  click: function ($event) {
                                    return _vm.sendEmail(data.item)
                                  },
                                },
                              },
                              [
                                _c("feather-icon", {
                                  attrs: { icon: "SendIcon" },
                                }),
                              ],
                              1
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.canAccess("appointments.edit")
                          ? _c(
                              "b-button",
                              {
                                directives: [
                                  {
                                    name: "ripple",
                                    rawName: "v-ripple.400",
                                    value: "rgba(255, 255, 255, 0.15)",
                                    expression: "'rgba(255, 255, 255, 0.15)'",
                                    modifiers: { 400: true },
                                  },
                                ],
                                staticClass: "btn-icon",
                                attrs: { variant: "primary", size: "sm" },
                                on: {
                                  click: function ($event) {
                                    return _vm.editAppointment(data.item)
                                  },
                                },
                              },
                              [
                                _c("feather-icon", {
                                  attrs: { icon: "EditIcon" },
                                }),
                              ],
                              1
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.canAccess("appointments.destroy") &&
                        data.item.state == "pending"
                          ? _c(
                              "b-button",
                              {
                                directives: [
                                  {
                                    name: "ripple",
                                    rawName: "v-ripple.400",
                                    value: "rgba(255, 255, 255, 0.15)",
                                    expression: "'rgba(255, 255, 255, 0.15)'",
                                    modifiers: { 400: true },
                                  },
                                ],
                                staticClass: "btn-icon",
                                attrs: { variant: "danger", size: "sm" },
                                on: {
                                  click: function ($event) {
                                    return _vm.deleteAppointment(data.item)
                                  },
                                },
                              },
                              [
                                _c("feather-icon", {
                                  attrs: { icon: "Trash2Icon" },
                                }),
                              ],
                              1
                            )
                          : _vm._e(),
                      ],
                      1
                    ),
                  ]
                },
              },
            ]),
          }),
          _vm._v(" "),
          _vm.appointments
            ? _c(
                "div",
                { staticClass: "mx-2 mb-2" },
                [
                  _c(
                    "b-row",
                    [
                      _c(
                        "b-col",
                        {
                          staticClass:
                            "d-flex align-items-center justify-content-center justify-content-sm-start",
                          attrs: { cols: "12", sm: "6" },
                        },
                        [
                          _c("span", { staticClass: "text-muted" }, [
                            _vm._v(
                              _vm._s(
                                _vm.resolvePaginationTranslate(_vm.dataMeta)
                              )
                            ),
                          ]),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        {
                          staticClass:
                            "d-flex align-items-center justify-content-center justify-content-sm-end",
                          attrs: { cols: "12", sm: "6" },
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "mt-2 demo-spacing-0" },
                            [
                              _c("b-pagination", {
                                attrs: {
                                  "total-rows": _vm.totalAppointments,
                                  "per-page": _vm.perPage,
                                  size: "lg",
                                },
                                model: {
                                  value: _vm.currentPage,
                                  callback: function ($$v) {
                                    _vm.currentPage = $$v
                                  },
                                  expression: "currentPage",
                                },
                              }),
                            ],
                            1
                          ),
                        ]
                      ),
                    ],
                    1
                  ),
                ],
                1
              )
            : _vm._e(),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/dashboards/DashboardCardAppointments.vue?vue&type=template&id=37d39f10&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/dashboards/DashboardCardAppointments.vue?vue&type=template&id=37d39f10& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-card",
    { staticClass: "card-tiny-line-stats", attrs: { "body-class": "pb-50" } },
    [
      _c("h6", [
        _vm._v(
          _vm._s(_vm.$t("appointments.card.title")) +
            " " +
            _vm._s(_vm.$t("appointments.status.assisted"))
        ),
      ]),
      _vm._v(" "),
      _c("h2", { staticClass: "font-weight-bolder mb-1" }, [
        _vm._v("\n        " + _vm._s(_vm.kFormatter(_vm.total)) + "\n    "),
      ]),
      _vm._v(" "),
      _c("vue-apex-charts", {
        attrs: {
          height: "70",
          options: _vm.statisticsProfit.chartOptions,
          series: _vm.series,
        },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/dashboards/DashboardCardBudget.vue?vue&type=template&id=354ce789&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/dashboards/DashboardCardBudget.vue?vue&type=template&id=354ce789& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-card",
    { attrs: { "body-class": "pb-50" } },
    [
      _c("h6", [
        _vm._v(
          _vm._s(_vm.$t("budgets.plural")) +
            " " +
            _vm._s(_vm.$t("budgets.status.approved"))
        ),
      ]),
      _vm._v(" "),
      _c("h2", { staticClass: "font-weight-bolder mb-1" }, [
        _vm._v("\n       " + _vm._s(_vm.kFormatter(_vm.total)) + "\n    "),
      ]),
      _vm._v(" "),
      _c("vue-apex-charts", {
        attrs: {
          height: "70",
          options: _vm.statisticsOrder.chartOptions,
          series: _vm.series,
        },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/dashboards/DashboardCardDoctors.vue?vue&type=template&id=b0683dc0&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/dashboards/DashboardCardDoctors.vue?vue&type=template&id=b0683dc0& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-overlay",
    {
      attrs: {
        show: _vm.loading || _vm.isLoading,
        blur: "2px",
        variant: "transparent",
        rounded: "lg",
        opacity: "0.85",
      },
      scopedSlots: _vm._u([
        {
          key: "overlay",
          fn: function () {
            return [
              _c(
                "div",
                { staticClass: "d-flex align-items-center" },
                [
                  _c("b-spinner", {
                    attrs: { small: "", type: "grow", variant: "secondary" },
                  }),
                  _vm._v(" "),
                  _c("b-spinner", { attrs: { type: "grow", variant: "dark" } }),
                  _vm._v(" "),
                  _c("b-spinner", {
                    attrs: { small: "", type: "grow", variant: "secondary" },
                  }),
                ],
                1
              ),
            ]
          },
          proxy: true,
        },
      ]),
    },
    [
      _vm._v(" "),
      _c(
        "b-card",
        { staticClass: "card-revenue-budget", attrs: { "no-body": "" } },
        [
          _c(
            "b-row",
            { staticClass: "mx-0" },
            [
              _c(
                "b-col",
                { staticClass: "revenue-report-wrapper", attrs: { md: "12" } },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "d-sm-flex justify-content-between align-items-center mb-3",
                    },
                    [
                      _c("h5", { staticClass: "card-title mb-50 mb-sm-0" }, [
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm.$t("users_revenue.title")) +
                            "\n                    "
                        ),
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "d-flex justify-content-center" },
                        [
                          _c("h6", { staticClass: "mb-25 mt-1" }, [
                            _vm._v(_vm._s(_vm.$t("total_commissions")) + " "),
                            _c("br"),
                            _vm._v(
                              _vm._s(_vm.formatPrice(_vm.totalCommission))
                            ),
                          ]),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "d-flex align-items-center" },
                        [
                          _c(
                            "b-input-group",
                            [
                              _c("flat-pickr", {
                                staticClass:
                                  "form-control _flat-picker _bg-transparent border-1 _shadow-none flatpickr-small",
                                attrs: {
                                  config: {
                                    mode: "range",
                                    dateFormat: "Y-m-d",
                                  },
                                  placeholder: "YYYY-MM-DD",
                                },
                                on: {
                                  "on-change": _vm.handleChange,
                                  "on-ValueUpdate": _vm.handleChange,
                                },
                                model: {
                                  value: _vm.rangePicker,
                                  callback: function ($$v) {
                                    _vm.rangePicker = $$v
                                  },
                                  expression: "rangePicker",
                                },
                              }),
                              _vm._v(" "),
                              _c(
                                "b-input-group-prepend",
                                [
                                  _c(
                                    "b-button",
                                    {
                                      attrs: {
                                        size: "sm",
                                        sm: "",
                                        round: "",
                                        variant: "primary",
                                      },
                                      on: {
                                        click: function ($event) {
                                          return _vm.getDashboard(null)
                                        },
                                      },
                                    },
                                    [
                                      _c("feather-icon", {
                                        attrs: { icon: "SearchIcon" },
                                      }),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _c("b-table", {
                    ref: "refProfessionalListTable",
                    staticClass:
                      "position-relative b-table-responsive table-small small text-small",
                    attrs: {
                      items: _vm.professionals,
                      responsive: "",
                      "sticky-header": true,
                      "no-border-collapse": true,
                      fields: _vm.columTableProfessional,
                      "primary-key": "id",
                      small: "",
                      "show-empty": "",
                      "empty-text": _vm.$t("datatables.sZeroRecords"),
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "cell(name)",
                        fn: function (data) {
                          return [
                            _c(
                              "b-link",
                              {
                                staticClass:
                                  "font-weight-bold d-block text-nowrap",
                                attrs: {
                                  to: {
                                    name: "user-profile",
                                    params: { id: data.item.user_id },
                                  },
                                },
                              },
                              [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(data.item.name) +
                                    "\n                        "
                                ),
                              ]
                            ),
                          ]
                        },
                      },
                      {
                        key: "cell(total)",
                        fn: function (data) {
                          return [
                            _c("strong", [
                              _vm._v(_vm._s(_vm.formatPrice(data.item.total))),
                            ]),
                          ]
                        },
                      },
                    ]),
                  }),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/dashboards/DashboardCardNewPatients.vue?vue&type=template&id=0e9a8aba&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/dashboards/DashboardCardNewPatients.vue?vue&type=template&id=0e9a8aba& ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-card",
    { staticClass: "earnings-card" },
    [
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { cols: "6" } },
            [
              _c("b-card-title", { staticClass: "mb-1" }, [
                _vm._v(
                  "\n                " +
                    _vm._s(_vm.$t("patients.statistics.title")) +
                    "\n            "
                ),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "font-small-2" }, [
                _vm._v(
                  "\n                " +
                    _vm._s(_vm.$t("this_month")) +
                    "\n            "
                ),
              ]),
              _vm._v(" "),
              _c("h5", { staticClass: "mb-1" }, [
                _vm._v(
                  "\n                " +
                    _vm._s(_vm.data.totalPatientCountCurrentMonth) +
                    "\n            "
                ),
              ]),
              _vm._v(" "),
              _c("b-card-text", { staticClass: "text-muted font-small-2" }, [
                _c("span", { staticClass: "font-weight-bolder" }, [
                  _vm._v(_vm._s(_vm.data.totalPatientCountLastMonth)),
                ]),
                _vm._v(" "),
                _c("span", [
                  _vm._v(
                    " " +
                      _vm._s(
                        _vm
                          .$t("last_month_help")
                          .replace(":operator", _vm.$t("patients.patients"))
                      ) +
                      "."
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c(
                "b-button",
                {
                  staticClass: "mt-2",
                  attrs: {
                    disabled: _vm.data.length,
                    variant: "outline-primary",
                  },
                  on: {
                    click: function ($event) {
                      return _vm.$router.push({ name: "patient-statistics" })
                    },
                  },
                },
                [
                  _c("feather-icon", { attrs: { icon: "EyeIcon" } }),
                  _vm._v(
                    " " + _vm._s(_vm.$t("see_details")) + "\n            "
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { cols: "6" } },
            [
              _vm.data.totalPatientCountCurrentMonth > 0 &&
              _vm.data.totalPatientCountLastMonth > 0
                ? _c("vue-apex-charts", {
                    attrs: {
                      height: "120",
                      options: _vm.earningsChart.chartOptions,
                      series: [
                        _vm.data.totalPatientCountCurrentMonth,
                        _vm.data.totalPatientCountLastMonth,
                      ],
                    },
                  })
                : _vm._e(),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/dashboards/DashboardDoctor.vue?vue&type=template&id=2df16733&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/dashboards/DashboardDoctor.vue?vue&type=template&id=2df16733& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.data
    ? _c(
        "b-card",
        {
          staticClass: "card card-congratulations",
          attrs: { "text-variant": "center" },
        },
        [
          _c("b-img", {
            staticClass: "congratulations-img-left",
            attrs: { src: __webpack_require__(/*! @/assets/images/elements/decore-left.png */ "./resources/js/src/assets/images/elements/decore-left.png") },
          }),
          _vm._v(" "),
          _c("b-img", {
            staticClass: "congratulations-img-right",
            attrs: {
              src: __webpack_require__(/*! @/assets/images/elements/decore-right.png */ "./resources/js/src/assets/images/elements/decore-right.png"),
            },
          }),
          _vm._v(" "),
          _c("h1", { staticClass: "mb-1 mt-50 text-white" }, [
            _vm._v(
              "\n        " +
                _vm._s(
                  _vm.data.totalEarningCurrentDay > 0
                    ? _vm.$t("dashboard_doctor_congrulations")
                    : _vm.$t("dashboard_doctor_no_congrulations")
                ) +
                "\n        " +
                _vm._s(_vm.userName) +
                ",\n    "
            ),
          ]),
          _vm._v(" "),
          _c("b-card-text", { staticClass: "m-auto w-75" }, [
            _vm._v(
              "\n        " +
                _vm._s(
                  _vm.data.totalEarningCurrentDay > 0
                    ? _vm
                        .$t("dashboard_doctor_accumulated_payment_today")
                        .replace(
                          ":payments",
                          _vm.formatPrice(_vm.data.totalEarningCurrentDay)
                        )
                    : _vm.$t("dashboard_doctor_no_accumulated_payment_today")
                ) +
                "\n    "
            ),
          ]),
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/statistics-cards/StatisticCardHorizontal.vue?vue&type=template&id=afa7c104&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/statistics-cards/StatisticCardHorizontal.vue?vue&type=template&id=afa7c104& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-card",
    { attrs: { "no-body": "" } },
    [
      _c(
        "b-card-body",
        { staticClass: "d-flex justify-content-between align-items-center" },
        [
          _c("div", { staticClass: "truncate" }, [
            _c(
              "h2",
              { staticClass: "mb-25 font-weight-bolder", class: _vm.size },
              [_vm._v("\n        " + _vm._s(_vm.statistic) + "\n      ")]
            ),
            _vm._v(" "),
            _c("span", [_vm._v(_vm._s(_vm.statisticTitle))]),
            _c("br"),
            _vm._v(" "),
            _vm.statisticText
              ? _c("span", [_vm._v(_vm._s(_vm.statisticText)), _c("br")])
              : _vm._e(),
            _vm._v(" "),
            _vm.statisticDescription
              ? _c("span", [_vm._v(_vm._s(_vm.statisticDescription))])
              : _vm._e(),
          ]),
          _vm._v(" "),
          _vm.icon
            ? _c(
                "b-avatar",
                { attrs: { variant: "light-" + _vm.color, size: "45" } },
                [_c("feather-icon", { attrs: { size: "21", icon: _vm.icon } })],
                1
              )
            : _vm._e(),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/statistics-cards/StatisticCardVertical.vue?vue&type=template&id=5a7aca50&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/statistics-cards/StatisticCardVertical.vue?vue&type=template&id=5a7aca50& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-card",
    { staticClass: "text-center" },
    [
      _c(
        "b-avatar",
        {
          staticClass: "mb-1",
          attrs: { variant: "light-" + _vm.color, size: "45" },
        },
        [_c("feather-icon", { attrs: { size: "21", icon: _vm.icon } })],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "truncate" }, [
        _c("h2", { staticClass: "mb-25 font-weight-bolder" }, [
          _vm._v("\n      " + _vm._s(_vm.statistic) + "\n    "),
        ]),
        _vm._v(" "),
        _c("span", [_vm._v(_vm._s(_vm.statisticTitle))]),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Dashboard.vue?vue&type=template&id=d9e5d64c&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Dashboard.vue?vue&type=template&id=d9e5d64c& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.isTenant
      ? _c(
          "section",
          { attrs: { id: "dashboard-ecommerce" } },
          [
            _vm.isAdmin || _vm.isDirector
              ? _c(
                  "b-row",
                  { staticClass: "match-height" },
                  [
                    _c(
                      "b-col",
                      { attrs: { xl: "4", md: "6" } },
                      [
                        _c("dashboard-earning", {
                          attrs: { loading: _vm.loading, data: _vm.dashboard },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-col",
                      { attrs: { xl: "8", md: "6" } },
                      [
                        _c("dashboard-statistics", {
                          attrs: { loading: _vm.loading, data: _vm.dashboard },
                        }),
                      ],
                      1
                    ),
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.isAdmin || _vm.isDirector
              ? _c(
                  "b-row",
                  { staticClass: "match-height" },
                  [
                    _c(
                      "b-col",
                      { attrs: { lg: "4" } },
                      [
                        _c(
                          "b-row",
                          { staticClass: "match-height" },
                          [
                            _c(
                              "b-col",
                              { attrs: { lg: "6", md: "3", cols: "6" } },
                              [
                                _c("dashboard-card-budget", {
                                  attrs: {
                                    loading: _vm.loading,
                                    total:
                                      _vm.dashboard
                                        .countBudgetApprovedCurrentMonth,
                                  },
                                }),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-col",
                              { attrs: { lg: "6", md: "3", cols: "6" } },
                              [
                                _c("dashboard-card-appointments", {
                                  attrs: {
                                    loading: _vm.loading,
                                    total:
                                      _vm.dashboard
                                        .countAppointmentAssistedCurrentMonth,
                                  },
                                }),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-col",
                              { attrs: { lg: "12", md: "6" } },
                              [
                                _c("dashboard-card-new-patients", {
                                  attrs: { data: _vm.dashboard },
                                }),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-col",
                      { attrs: { lg: "8" } },
                      [
                        _c("dashboard-card-doctors", {
                          attrs: {
                            loading: _vm.loading,
                            doctors: _vm.dashboard,
                          },
                          on: { "call-revenue": _vm.onCallRevenue },
                        }),
                      ],
                      1
                    ),
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.isDoctor
              ? _c(
                  "b-row",
                  { staticClass: "match-height" },
                  [
                    _c(
                      "b-col",
                      { attrs: { lg: "8" } },
                      [
                        _c("dashboard-doctor", {
                          attrs: { loading: _vm.loading, data: _vm.dashboard },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-col",
                      { attrs: { lg: "4" } },
                      [
                        _c(
                          "b-row",
                          { staticClass: "match-height" },
                          [
                            _c(
                              "b-col",
                              { attrs: { lg: "6", md: "3", cols: "6" } },
                              [
                                _c("dashboard-card-budget", {
                                  attrs: {
                                    loading: _vm.loading,
                                    total:
                                      _vm.dashboard
                                        .countBudgetApprovedCurrentMonth,
                                  },
                                }),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-col",
                              { attrs: { lg: "6", md: "3", cols: "6" } },
                              [
                                _c("dashboard-card-appointments", {
                                  attrs: {
                                    loading: _vm.loading,
                                    total:
                                      _vm.dashboard
                                        .countAppointmentAssistedCurrentMonth,
                                  },
                                }),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _c(
              "b-row",
              { staticClass: "match-height" },
              [
                _c(
                  "b-col",
                  { attrs: { lg: "8", md: "6" } },
                  [
                    _c("dashboard-appointments", {
                      attrs: { isDashboard: true },
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-col",
                  { attrs: { lg: "4", md: "6" } },
                  [
                    _c("dashboard-card-transactions", {
                      attrs: {
                        data: _vm.dashboard.transactionsData,
                        loading: false,
                      },
                    }),
                  ],
                  1
                ),
              ],
              1
            ),
            _vm._v(" "),
            _vm.isDoctor
              ? _c(
                  "b-row",
                  { staticClass: "match-height" },
                  [
                    _c(
                      "b-col",
                      { attrs: { lg: "8", md: "8", cols: "12" } },
                      [
                        _c(
                          "b-card",
                          { staticClass: "mb-0", attrs: { "no-body": "" } },
                          [
                            _c(
                              "div",
                              { staticClass: "m-2" },
                              [
                                _c("h3", { staticClass: "text-capitalize" }, [
                                  _vm._v(
                                    _vm._s(_vm.$t("payments.dashboard_title"))
                                  ),
                                ]),
                                _vm._v(" "),
                                _c(
                                  "b-table",
                                  {
                                    ref: "refPaymentListTable",
                                    staticClass:
                                      "position-relative table-small text-small small",
                                    attrs: {
                                      "sticky-header": true,
                                      "no-border-collapse": true,
                                      items: _vm.dashboard.payments,
                                      responsive: "",
                                      fields: _vm.columnPayments,
                                      "primary-key": "id",
                                      "show-empty": "",
                                      "empty-text": _vm.$t(
                                        "datatables.sZeroRecords"
                                      ),
                                      busy: _vm.loading,
                                      small: "",
                                    },
                                    on: {
                                      "update:busy": function ($event) {
                                        _vm.loading = $event
                                      },
                                    },
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "cell(payment_id)",
                                          fn: function (data) {
                                            return [
                                              _vm._v(
                                                "\n                                #" +
                                                  _vm._s(data.item.id) +
                                                  "\n                            "
                                              ),
                                            ]
                                          },
                                        },
                                        {
                                          key: "cell(created_at)",
                                          fn: function (data) {
                                            return [
                                              _vm._v(
                                                "\n                                " +
                                                  _vm._s(
                                                    _vm.dateTimeFormat(
                                                      data.item.payment_date
                                                    )
                                                  ) +
                                                  "\n                            "
                                              ),
                                            ]
                                          },
                                        },
                                        {
                                          key: "cell(budget)",
                                          fn: function (data) {
                                            return [
                                              _vm._v(
                                                "\n                                " +
                                                  _vm._s(data.item.label) +
                                                  "\n                            "
                                              ),
                                            ]
                                          },
                                        },
                                        {
                                          key: "cell(method)",
                                          fn: function (data) {
                                            return [
                                              _c("span", [
                                                _vm._v(
                                                  _vm._s(data.item.method_label)
                                                ),
                                              ]),
                                              _vm._v(" "),
                                              data.item.check
                                                ? _c(
                                                    "p",
                                                    {
                                                      staticClass:
                                                        "card-text mb-25",
                                                    },
                                                    [
                                                      _c("label", [
                                                        _c("strong", [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.$t(
                                                                "checks.table_bank"
                                                              )
                                                            ) + ":"
                                                          ),
                                                        ]),
                                                        _vm._v(
                                                          "\n                                        " +
                                                            _vm._s(
                                                              data.item.check
                                                                .reference
                                                            )
                                                        ),
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("label", [
                                                        _c("strong", [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.$t(
                                                                "checks.table_bank"
                                                              )
                                                            ) + ":"
                                                          ),
                                                        ]),
                                                        _vm._v(
                                                          "\n                                        " +
                                                            _vm._s(
                                                              data.item.check
                                                                .bank
                                                            )
                                                        ),
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("label", [
                                                        _c("strong", [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.$t(
                                                                "checks.table_serie"
                                                              )
                                                            ) + ":"
                                                          ),
                                                        ]),
                                                        _vm._v(
                                                          "\n                                        " +
                                                            _vm._s(
                                                              data.item.check
                                                                .serie
                                                            )
                                                        ),
                                                      ]),
                                                    ]
                                                  )
                                                : _vm._e(),
                                            ]
                                          },
                                        },
                                      ],
                                      null,
                                      false,
                                      4185093785
                                    ),
                                  },
                                  [
                                    _c("template", { slot: "empty" }, [
                                      _vm.loading
                                        ? _c(
                                            "div",
                                            {
                                              staticClass:
                                                "d-flex justify-content-center mb-1",
                                            },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "d-flex align-items-center",
                                                },
                                                [
                                                  _c("b-spinner", {
                                                    attrs: {
                                                      small: "",
                                                      type: "grow",
                                                      variant: "secondary",
                                                    },
                                                  }),
                                                  _vm._v(" "),
                                                  _c("b-spinner", {
                                                    attrs: {
                                                      type: "grow",
                                                      variant: "dark",
                                                    },
                                                  }),
                                                  _vm._v(" "),
                                                  _c("b-spinner", {
                                                    attrs: {
                                                      small: "",
                                                      type: "grow",
                                                      variant: "secondary",
                                                    },
                                                  }),
                                                ],
                                                1
                                              ),
                                            ]
                                          )
                                        : _vm._e(),
                                    ]),
                                  ],
                                  2
                                ),
                              ],
                              1
                            ),
                          ]
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                )
              : _vm._e(),
          ],
          1
        )
      : _c("section", [_c("dashboard-central")], 1),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/DashboardCentral.vue?vue&type=template&id=bc43162a&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/DashboardCentral.vue?vue&type=template&id=bc43162a&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-overlay",
    {
      attrs: {
        show: _vm.loading,
        blur: "2px",
        variant: "transparent",
        rounded: "lg",
        opacity: "0.85",
      },
      scopedSlots: _vm._u([
        {
          key: "overlay",
          fn: function () {
            return [
              _c(
                "div",
                { staticClass: "d-flex align-items-center" },
                [
                  _c("b-spinner", {
                    attrs: { small: "", type: "grow", variant: "secondary" },
                  }),
                  _vm._v(" "),
                  _c("b-spinner", { attrs: { type: "grow", variant: "dark" } }),
                  _vm._v(" "),
                  _c("b-spinner", {
                    attrs: { small: "", type: "grow", variant: "secondary" },
                  }),
                ],
                1
              ),
            ]
          },
          proxy: true,
        },
      ]),
    },
    [
      _vm._v(" "),
      _c(
        "b-row",
        { staticClass: "match-height" },
        _vm._l(_vm.dashboard.items, function (item, index) {
          return _c(
            "b-col",
            { key: index, attrs: { lg: "3", sm: "6" } },
            [
              _c("statistic-card-horizontal", {
                attrs: {
                  icon: item.icon,
                  statistic: item.value,
                  color: item.bgColor,
                  "statistic-title": _vm.$t(item.name),
                },
              }),
            ],
            1
          )
        }),
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        { staticClass: "match-height" },
        [
          _c(
            "b-col",
            { attrs: { lg: "6", md: "6", cols: "12" } },
            [
              _c(
                "b-card",
                { staticClass: "mb-0", attrs: { "no-body": "" } },
                [
                  _c("div", { staticClass: "m-2" }, [
                    _c("h3", { staticClass: "text-capitalize" }, [
                      _vm._v(
                        _vm._s(_vm.$t("tenants.plan_table_title")) +
                          " (" +
                          _vm._s(_vm.dateTimeFormat(_vm.currentDay, "Y")) +
                          ")"
                      ),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-table",
                    {
                      ref: "refTopPlansTable",
                      staticClass: "position-relative",
                      attrs: {
                        items: _vm.dashboard.topPlans,
                        responsive: "",
                        fields: _vm.tablePlans,
                        "primary-key": "id",
                        "show-empty": "",
                        "empty-text": _vm.$t("datatables.sZeroRecords"),
                        busy: _vm.loading,
                      },
                      on: {
                        "update:busy": function ($event) {
                          _vm.loading = $event
                        },
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "cell(image)",
                          fn: function (data) {
                            return [
                              _c(
                                "b-media",
                                {
                                  attrs: { "vertical-align": "center" },
                                  scopedSlots: _vm._u(
                                    [
                                      {
                                        key: "aside",
                                        fn: function () {
                                          return [
                                            _c("b-avatar", {
                                              attrs: {
                                                size: "32",
                                                src: data.item.image,
                                                variant:
                                                  "" +
                                                  _vm.resolveRoleVariant(
                                                    data.item.name
                                                  ),
                                              },
                                            }),
                                          ]
                                        },
                                        proxy: true,
                                      },
                                    ],
                                    null,
                                    true
                                  ),
                                },
                                [
                                  _vm._v(" "),
                                  _c(
                                    "b-link",
                                    {
                                      staticClass:
                                        "font-weight-bold d-block text-wrap",
                                    },
                                    [
                                      _vm._v(
                                        "\n                          " +
                                          _vm._s(data.item.name) +
                                          "\n                      "
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              ),
                            ]
                          },
                        },
                        {
                          key: "cell(value)",
                          fn: function (data) {
                            return [
                              _c(
                                "b-badge",
                                {
                                  attrs: {
                                    variant:
                                      data.item.vaue > 0
                                        ? "success"
                                        : "primary",
                                  },
                                },
                                [
                                  _vm._v(
                                    "\n                    " +
                                      _vm._s(data.item.value) +
                                      "\n                "
                                  ),
                                ]
                              ),
                            ]
                          },
                        },
                      ]),
                    },
                    [
                      _c("template", { slot: "empty" }, [
                        _vm.loading
                          ? _c(
                              "div",
                              {
                                staticClass:
                                  "d-flex justify-content-center mb-1",
                              },
                              [
                                _c(
                                  "div",
                                  { staticClass: "d-flex align-items-center" },
                                  [
                                    _c("b-spinner", {
                                      attrs: {
                                        small: "",
                                        type: "grow",
                                        variant: "secondary",
                                      },
                                    }),
                                    _vm._v(" "),
                                    _c("b-spinner", {
                                      attrs: { type: "grow", variant: "dark" },
                                    }),
                                    _vm._v(" "),
                                    _c("b-spinner", {
                                      attrs: {
                                        small: "",
                                        type: "grow",
                                        variant: "secondary",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ]
                            )
                          : _vm._e(),
                      ]),
                    ],
                    2
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { lg: "6", md: "6", cols: "12" } },
            [
              _c(
                "b-card",
                { staticClass: "mb-0", attrs: { "no-body": "" } },
                [
                  _c("div", { staticClass: "m-2" }, [
                    _c("h3", { staticClass: "text-capitalize" }, [
                      _vm._v(_vm._s(_vm.$t("tenants.clients_table_title"))),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-table",
                    {
                      ref: "refTopClientsTable",
                      staticClass: "position-relative",
                      attrs: {
                        items: _vm.dashboard.topClients,
                        responsive: "",
                        fields: _vm.tableClients,
                        "primary-key": "id",
                        "show-empty": "",
                        "empty-text": _vm.$t("datatables.sZeroRecords"),
                        busy: _vm.loading,
                      },
                      on: {
                        "update:busy": function ($event) {
                          _vm.loading = $event
                        },
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "cell(name)",
                          fn: function (data) {
                            return [
                              _c(
                                "b-media",
                                {
                                  attrs: { "vertical-align": "center" },
                                  scopedSlots: _vm._u(
                                    [
                                      {
                                        key: "aside",
                                        fn: function () {
                                          return [
                                            _c("b-avatar", {
                                              attrs: {
                                                size: "32",
                                                src: null,
                                                variant: "success",
                                                text: _vm.avatarText(
                                                  data.item.name
                                                ),
                                              },
                                            }),
                                          ]
                                        },
                                        proxy: true,
                                      },
                                    ],
                                    null,
                                    true
                                  ),
                                },
                                [
                                  _vm._v(" "),
                                  _c(
                                    "b-link",
                                    {
                                      staticClass:
                                        "font-weight-bold d-block text-wrap",
                                    },
                                    [
                                      _vm._v(
                                        "\n                            " +
                                          _vm._s(data.item.name) +
                                          "\n                        "
                                      ),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("small", [
                                    _vm._v(_vm._s(data.item.company)),
                                  ]),
                                ],
                                1
                              ),
                            ]
                          },
                        },
                        {
                          key: "cell(subscriptions)",
                          fn: function (data) {
                            return [
                              _c(
                                "b-badge",
                                {
                                  attrs: {
                                    variant:
                                      data.item.vaue > 0
                                        ? "success"
                                        : "primary",
                                  },
                                },
                                [
                                  _vm._v(
                                    "\n                      " +
                                      _vm._s(data.item.subscriptions_count) +
                                      "\n                  "
                                  ),
                                ]
                              ),
                            ]
                          },
                        },
                      ]),
                    },
                    [
                      _c("template", { slot: "empty" }, [
                        _vm.loading
                          ? _c(
                              "div",
                              {
                                staticClass:
                                  "d-flex justify-content-center mb-1",
                              },
                              [
                                _c(
                                  "div",
                                  { staticClass: "d-flex align-items-center" },
                                  [
                                    _c("b-spinner", {
                                      attrs: {
                                        small: "",
                                        type: "grow",
                                        variant: "secondary",
                                      },
                                    }),
                                    _vm._v(" "),
                                    _c("b-spinner", {
                                      attrs: { type: "grow", variant: "dark" },
                                    }),
                                    _vm._v(" "),
                                    _c("b-spinner", {
                                      attrs: {
                                        small: "",
                                        type: "grow",
                                        variant: "secondary",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ]
                            )
                          : _vm._e(),
                      ]),
                    ],
                    2
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/@core/components/dashboards/CalendarDays.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/src/@core/components/dashboards/CalendarDays.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CalendarDays_vue_vue_type_template_id_08f1f885_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CalendarDays.vue?vue&type=template&id=08f1f885&scoped=true& */ "./resources/js/src/@core/components/dashboards/CalendarDays.vue?vue&type=template&id=08f1f885&scoped=true&");
/* harmony import */ var _CalendarDays_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CalendarDays.vue?vue&type=script&lang=js& */ "./resources/js/src/@core/components/dashboards/CalendarDays.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CalendarDays_vue_vue_type_style_index_0_id_08f1f885_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CalendarDays.vue?vue&type=style&index=0&id=08f1f885&lang=scss&scoped=true& */ "./resources/js/src/@core/components/dashboards/CalendarDays.vue?vue&type=style&index=0&id=08f1f885&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CalendarDays_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CalendarDays_vue_vue_type_template_id_08f1f885_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CalendarDays_vue_vue_type_template_id_08f1f885_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "08f1f885",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/@core/components/dashboards/CalendarDays.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/@core/components/dashboards/CalendarDays.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/@core/components/dashboards/CalendarDays.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarDays_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CalendarDays.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/dashboards/CalendarDays.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarDays_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/@core/components/dashboards/CalendarDays.vue?vue&type=style&index=0&id=08f1f885&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/components/dashboards/CalendarDays.vue?vue&type=style&index=0&id=08f1f885&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarDays_vue_vue_type_style_index_0_id_08f1f885_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--12-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CalendarDays.vue?vue&type=style&index=0&id=08f1f885&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/dashboards/CalendarDays.vue?vue&type=style&index=0&id=08f1f885&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarDays_vue_vue_type_style_index_0_id_08f1f885_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarDays_vue_vue_type_style_index_0_id_08f1f885_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarDays_vue_vue_type_style_index_0_id_08f1f885_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarDays_vue_vue_type_style_index_0_id_08f1f885_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/@core/components/dashboards/CalendarDays.vue?vue&type=template&id=08f1f885&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/src/@core/components/dashboards/CalendarDays.vue?vue&type=template&id=08f1f885&scoped=true& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarDays_vue_vue_type_template_id_08f1f885_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CalendarDays.vue?vue&type=template&id=08f1f885&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/dashboards/CalendarDays.vue?vue&type=template&id=08f1f885&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarDays_vue_vue_type_template_id_08f1f885_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarDays_vue_vue_type_template_id_08f1f885_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/@core/components/dashboards/DashboardAppointments.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/src/@core/components/dashboards/DashboardAppointments.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DashboardAppointments_vue_vue_type_template_id_2412ef48___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashboardAppointments.vue?vue&type=template&id=2412ef48& */ "./resources/js/src/@core/components/dashboards/DashboardAppointments.vue?vue&type=template&id=2412ef48&");
/* harmony import */ var _DashboardAppointments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashboardAppointments.vue?vue&type=script&lang=js& */ "./resources/js/src/@core/components/dashboards/DashboardAppointments.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DashboardAppointments_vue_vue_type_style_index_0_id_2412ef48_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DashboardAppointments.vue?vue&type=style&index=0&id=2412ef48&lang=scss& */ "./resources/js/src/@core/components/dashboards/DashboardAppointments.vue?vue&type=style&index=0&id=2412ef48&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DashboardAppointments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DashboardAppointments_vue_vue_type_template_id_2412ef48___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DashboardAppointments_vue_vue_type_template_id_2412ef48___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/@core/components/dashboards/DashboardAppointments.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/@core/components/dashboards/DashboardAppointments.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/@core/components/dashboards/DashboardAppointments.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardAppointments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardAppointments.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/dashboards/DashboardAppointments.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardAppointments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/@core/components/dashboards/DashboardAppointments.vue?vue&type=style&index=0&id=2412ef48&lang=scss&":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/components/dashboards/DashboardAppointments.vue?vue&type=style&index=0&id=2412ef48&lang=scss& ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardAppointments_vue_vue_type_style_index_0_id_2412ef48_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--12-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardAppointments.vue?vue&type=style&index=0&id=2412ef48&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/dashboards/DashboardAppointments.vue?vue&type=style&index=0&id=2412ef48&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardAppointments_vue_vue_type_style_index_0_id_2412ef48_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardAppointments_vue_vue_type_style_index_0_id_2412ef48_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardAppointments_vue_vue_type_style_index_0_id_2412ef48_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardAppointments_vue_vue_type_style_index_0_id_2412ef48_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/@core/components/dashboards/DashboardAppointments.vue?vue&type=template&id=2412ef48&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/@core/components/dashboards/DashboardAppointments.vue?vue&type=template&id=2412ef48& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardAppointments_vue_vue_type_template_id_2412ef48___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardAppointments.vue?vue&type=template&id=2412ef48& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/dashboards/DashboardAppointments.vue?vue&type=template&id=2412ef48&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardAppointments_vue_vue_type_template_id_2412ef48___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardAppointments_vue_vue_type_template_id_2412ef48___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/@core/components/dashboards/DashboardCardAppointments.vue":
/*!************************************************************************************!*\
  !*** ./resources/js/src/@core/components/dashboards/DashboardCardAppointments.vue ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DashboardCardAppointments_vue_vue_type_template_id_37d39f10___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashboardCardAppointments.vue?vue&type=template&id=37d39f10& */ "./resources/js/src/@core/components/dashboards/DashboardCardAppointments.vue?vue&type=template&id=37d39f10&");
/* harmony import */ var _DashboardCardAppointments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashboardCardAppointments.vue?vue&type=script&lang=js& */ "./resources/js/src/@core/components/dashboards/DashboardCardAppointments.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DashboardCardAppointments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DashboardCardAppointments_vue_vue_type_template_id_37d39f10___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DashboardCardAppointments_vue_vue_type_template_id_37d39f10___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/@core/components/dashboards/DashboardCardAppointments.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/@core/components/dashboards/DashboardCardAppointments.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/@core/components/dashboards/DashboardCardAppointments.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardCardAppointments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardCardAppointments.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/dashboards/DashboardCardAppointments.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardCardAppointments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/@core/components/dashboards/DashboardCardAppointments.vue?vue&type=template&id=37d39f10&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/src/@core/components/dashboards/DashboardCardAppointments.vue?vue&type=template&id=37d39f10& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardCardAppointments_vue_vue_type_template_id_37d39f10___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardCardAppointments.vue?vue&type=template&id=37d39f10& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/dashboards/DashboardCardAppointments.vue?vue&type=template&id=37d39f10&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardCardAppointments_vue_vue_type_template_id_37d39f10___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardCardAppointments_vue_vue_type_template_id_37d39f10___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/@core/components/dashboards/DashboardCardBudget.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/src/@core/components/dashboards/DashboardCardBudget.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DashboardCardBudget_vue_vue_type_template_id_354ce789___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashboardCardBudget.vue?vue&type=template&id=354ce789& */ "./resources/js/src/@core/components/dashboards/DashboardCardBudget.vue?vue&type=template&id=354ce789&");
/* harmony import */ var _DashboardCardBudget_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashboardCardBudget.vue?vue&type=script&lang=js& */ "./resources/js/src/@core/components/dashboards/DashboardCardBudget.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DashboardCardBudget_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DashboardCardBudget_vue_vue_type_template_id_354ce789___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DashboardCardBudget_vue_vue_type_template_id_354ce789___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/@core/components/dashboards/DashboardCardBudget.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/@core/components/dashboards/DashboardCardBudget.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/@core/components/dashboards/DashboardCardBudget.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardCardBudget_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardCardBudget.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/dashboards/DashboardCardBudget.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardCardBudget_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/@core/components/dashboards/DashboardCardBudget.vue?vue&type=template&id=354ce789&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/@core/components/dashboards/DashboardCardBudget.vue?vue&type=template&id=354ce789& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardCardBudget_vue_vue_type_template_id_354ce789___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardCardBudget.vue?vue&type=template&id=354ce789& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/dashboards/DashboardCardBudget.vue?vue&type=template&id=354ce789&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardCardBudget_vue_vue_type_template_id_354ce789___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardCardBudget_vue_vue_type_template_id_354ce789___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/@core/components/dashboards/DashboardCardDoctors.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/@core/components/dashboards/DashboardCardDoctors.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DashboardCardDoctors_vue_vue_type_template_id_b0683dc0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashboardCardDoctors.vue?vue&type=template&id=b0683dc0& */ "./resources/js/src/@core/components/dashboards/DashboardCardDoctors.vue?vue&type=template&id=b0683dc0&");
/* harmony import */ var _DashboardCardDoctors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashboardCardDoctors.vue?vue&type=script&lang=js& */ "./resources/js/src/@core/components/dashboards/DashboardCardDoctors.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DashboardCardDoctors_vue_vue_type_style_index_0_id_b0683dc0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DashboardCardDoctors.vue?vue&type=style&index=0&id=b0683dc0&lang=scss& */ "./resources/js/src/@core/components/dashboards/DashboardCardDoctors.vue?vue&type=style&index=0&id=b0683dc0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DashboardCardDoctors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DashboardCardDoctors_vue_vue_type_template_id_b0683dc0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DashboardCardDoctors_vue_vue_type_template_id_b0683dc0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/@core/components/dashboards/DashboardCardDoctors.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/@core/components/dashboards/DashboardCardDoctors.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/@core/components/dashboards/DashboardCardDoctors.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardCardDoctors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardCardDoctors.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/dashboards/DashboardCardDoctors.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardCardDoctors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/@core/components/dashboards/DashboardCardDoctors.vue?vue&type=style&index=0&id=b0683dc0&lang=scss&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/components/dashboards/DashboardCardDoctors.vue?vue&type=style&index=0&id=b0683dc0&lang=scss& ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardCardDoctors_vue_vue_type_style_index_0_id_b0683dc0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--12-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardCardDoctors.vue?vue&type=style&index=0&id=b0683dc0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/dashboards/DashboardCardDoctors.vue?vue&type=style&index=0&id=b0683dc0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardCardDoctors_vue_vue_type_style_index_0_id_b0683dc0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardCardDoctors_vue_vue_type_style_index_0_id_b0683dc0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardCardDoctors_vue_vue_type_style_index_0_id_b0683dc0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardCardDoctors_vue_vue_type_style_index_0_id_b0683dc0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/@core/components/dashboards/DashboardCardDoctors.vue?vue&type=template&id=b0683dc0&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/src/@core/components/dashboards/DashboardCardDoctors.vue?vue&type=template&id=b0683dc0& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardCardDoctors_vue_vue_type_template_id_b0683dc0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardCardDoctors.vue?vue&type=template&id=b0683dc0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/dashboards/DashboardCardDoctors.vue?vue&type=template&id=b0683dc0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardCardDoctors_vue_vue_type_template_id_b0683dc0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardCardDoctors_vue_vue_type_template_id_b0683dc0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/@core/components/dashboards/DashboardCardNewPatients.vue":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/@core/components/dashboards/DashboardCardNewPatients.vue ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DashboardCardNewPatients_vue_vue_type_template_id_0e9a8aba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashboardCardNewPatients.vue?vue&type=template&id=0e9a8aba& */ "./resources/js/src/@core/components/dashboards/DashboardCardNewPatients.vue?vue&type=template&id=0e9a8aba&");
/* harmony import */ var _DashboardCardNewPatients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashboardCardNewPatients.vue?vue&type=script&lang=js& */ "./resources/js/src/@core/components/dashboards/DashboardCardNewPatients.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DashboardCardNewPatients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DashboardCardNewPatients_vue_vue_type_template_id_0e9a8aba___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DashboardCardNewPatients_vue_vue_type_template_id_0e9a8aba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/@core/components/dashboards/DashboardCardNewPatients.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/@core/components/dashboards/DashboardCardNewPatients.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/@core/components/dashboards/DashboardCardNewPatients.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardCardNewPatients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardCardNewPatients.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/dashboards/DashboardCardNewPatients.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardCardNewPatients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/@core/components/dashboards/DashboardCardNewPatients.vue?vue&type=template&id=0e9a8aba&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/src/@core/components/dashboards/DashboardCardNewPatients.vue?vue&type=template&id=0e9a8aba& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardCardNewPatients_vue_vue_type_template_id_0e9a8aba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardCardNewPatients.vue?vue&type=template&id=0e9a8aba& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/dashboards/DashboardCardNewPatients.vue?vue&type=template&id=0e9a8aba&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardCardNewPatients_vue_vue_type_template_id_0e9a8aba___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardCardNewPatients_vue_vue_type_template_id_0e9a8aba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/@core/components/dashboards/DashboardDoctor.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/src/@core/components/dashboards/DashboardDoctor.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DashboardDoctor_vue_vue_type_template_id_2df16733___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashboardDoctor.vue?vue&type=template&id=2df16733& */ "./resources/js/src/@core/components/dashboards/DashboardDoctor.vue?vue&type=template&id=2df16733&");
/* harmony import */ var _DashboardDoctor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashboardDoctor.vue?vue&type=script&lang=js& */ "./resources/js/src/@core/components/dashboards/DashboardDoctor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DashboardDoctor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DashboardDoctor_vue_vue_type_template_id_2df16733___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DashboardDoctor_vue_vue_type_template_id_2df16733___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/@core/components/dashboards/DashboardDoctor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/@core/components/dashboards/DashboardDoctor.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/@core/components/dashboards/DashboardDoctor.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardDoctor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardDoctor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/dashboards/DashboardDoctor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardDoctor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/@core/components/dashboards/DashboardDoctor.vue?vue&type=template&id=2df16733&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/@core/components/dashboards/DashboardDoctor.vue?vue&type=template&id=2df16733& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardDoctor_vue_vue_type_template_id_2df16733___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardDoctor.vue?vue&type=template&id=2df16733& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/dashboards/DashboardDoctor.vue?vue&type=template&id=2df16733&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardDoctor_vue_vue_type_template_id_2df16733___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardDoctor_vue_vue_type_template_id_2df16733___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/@core/components/statistics-cards/StatisticCardHorizontal.vue":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/@core/components/statistics-cards/StatisticCardHorizontal.vue ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StatisticCardHorizontal_vue_vue_type_template_id_afa7c104___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StatisticCardHorizontal.vue?vue&type=template&id=afa7c104& */ "./resources/js/src/@core/components/statistics-cards/StatisticCardHorizontal.vue?vue&type=template&id=afa7c104&");
/* harmony import */ var _StatisticCardHorizontal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StatisticCardHorizontal.vue?vue&type=script&lang=js& */ "./resources/js/src/@core/components/statistics-cards/StatisticCardHorizontal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _StatisticCardHorizontal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StatisticCardHorizontal_vue_vue_type_template_id_afa7c104___WEBPACK_IMPORTED_MODULE_0__["render"],
  _StatisticCardHorizontal_vue_vue_type_template_id_afa7c104___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/@core/components/statistics-cards/StatisticCardHorizontal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/@core/components/statistics-cards/StatisticCardHorizontal.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/src/@core/components/statistics-cards/StatisticCardHorizontal.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatisticCardHorizontal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./StatisticCardHorizontal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/statistics-cards/StatisticCardHorizontal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatisticCardHorizontal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/@core/components/statistics-cards/StatisticCardHorizontal.vue?vue&type=template&id=afa7c104&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/src/@core/components/statistics-cards/StatisticCardHorizontal.vue?vue&type=template&id=afa7c104& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StatisticCardHorizontal_vue_vue_type_template_id_afa7c104___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./StatisticCardHorizontal.vue?vue&type=template&id=afa7c104& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/statistics-cards/StatisticCardHorizontal.vue?vue&type=template&id=afa7c104&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StatisticCardHorizontal_vue_vue_type_template_id_afa7c104___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StatisticCardHorizontal_vue_vue_type_template_id_afa7c104___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/@core/components/statistics-cards/StatisticCardVertical.vue":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/@core/components/statistics-cards/StatisticCardVertical.vue ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StatisticCardVertical_vue_vue_type_template_id_5a7aca50___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StatisticCardVertical.vue?vue&type=template&id=5a7aca50& */ "./resources/js/src/@core/components/statistics-cards/StatisticCardVertical.vue?vue&type=template&id=5a7aca50&");
/* harmony import */ var _StatisticCardVertical_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StatisticCardVertical.vue?vue&type=script&lang=js& */ "./resources/js/src/@core/components/statistics-cards/StatisticCardVertical.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _StatisticCardVertical_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StatisticCardVertical_vue_vue_type_template_id_5a7aca50___WEBPACK_IMPORTED_MODULE_0__["render"],
  _StatisticCardVertical_vue_vue_type_template_id_5a7aca50___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/@core/components/statistics-cards/StatisticCardVertical.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/@core/components/statistics-cards/StatisticCardVertical.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/@core/components/statistics-cards/StatisticCardVertical.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatisticCardVertical_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./StatisticCardVertical.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/statistics-cards/StatisticCardVertical.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatisticCardVertical_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/@core/components/statistics-cards/StatisticCardVertical.vue?vue&type=template&id=5a7aca50&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/src/@core/components/statistics-cards/StatisticCardVertical.vue?vue&type=template&id=5a7aca50& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StatisticCardVertical_vue_vue_type_template_id_5a7aca50___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./StatisticCardVertical.vue?vue&type=template&id=5a7aca50& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/statistics-cards/StatisticCardVertical.vue?vue&type=template&id=5a7aca50&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StatisticCardVertical_vue_vue_type_template_id_5a7aca50___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StatisticCardVertical_vue_vue_type_template_id_5a7aca50___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/assets/images/elements/decore-left.png":
/*!*****************************************************************!*\
  !*** ./resources/js/src/assets/images/elements/decore-left.png ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/saas-dental/resources/js/src/assets/images/elements/decore-left.png";

/***/ }),

/***/ "./resources/js/src/assets/images/elements/decore-right.png":
/*!******************************************************************!*\
  !*** ./resources/js/src/assets/images/elements/decore-right.png ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/saas-dental/resources/js/src/assets/images/elements/decore-right.png";

/***/ }),

/***/ "./resources/js/src/providers/Appointments.js":
/*!****************************************************!*\
  !*** ./resources/js/src/providers/Appointments.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return appointments; });
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);


/* eslint-disable class-methods-use-this */

var appointments = /*#__PURE__*/function () {
  function appointments() {
    Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, appointments);
  }
  Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(appointments, [{
    key: "getList",
    value: function getList(query) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/appointments", {
        params: query
      });
    }

    /**
     * Function to get all appointments without pagination
     */
  }, {
    key: "getEvents",
    value: function getEvents(query) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/appointments/events", {
        params: query
      });
    }

    /**
     * Function to store a appointment
     * @param {Object} formdata
     * @return AxiosPromise
     */
  }, {
    key: "save",
    value: function save(formdata) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/api/appointments", formdata);
    }
  }, {
    key: "update",
    value: function update(id, formdata) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.put("/api/appointments/".concat(id), formdata);
    }
  }, {
    key: "destroy",
    value: function destroy(id) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a["delete"]("/api/appointments/".concat(id));
    }
  }, {
    key: "send",
    value: function send(id, formData) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/api/appointments/".concat(id, "/send"), formData);
    }
  }, {
    key: "getByMonthly",
    value: function getByMonthly() {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/appointments/monthly");
    }
  }, {
    key: "available",
    value: function available(query) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/appointments/available", {
        params: query
      });
    }
  }, {
    key: "show",
    value: function show(id) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/appointments/".concat(id));
    }
  }, {
    key: "printMe",
    value: function printMe() {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/appointments/print");
    }
  }, {
    key: "reports",
    value: function reports(query) {
      if (query.isDownload) {
        return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/appointments/report", {
          responseType: "blob",
          params: query
        });
      }
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/appointments/report", {
        params: query
      });
    }
  }, {
    key: "changeStatus",
    value: function changeStatus(id, payload) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.put("/api/appointments/".concat(id, "/status"), payload);
    }
  }]);
  return appointments;
}();


/***/ }),

/***/ "./resources/js/src/providers/Centrals.js":
/*!************************************************!*\
  !*** ./resources/js/src/providers/Centrals.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Centrals; });
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);



var BASE_PTH = window.location.origin;
console.log(BASE_PTH);
var Centrals = /*#__PURE__*/function () {
  function Centrals() {
    Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Centrals);
  }
  Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Centrals, [{
    key: "index",
    value: function index(summaryType) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/dashboard-summary/".concat(summaryType));
    }
  }, {
    key: "topPlans",
    value: function topPlans() {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/dashboard/top-plans");
    }
  }, {
    key: "topClients",
    value: function topClients() {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/dashboard/top-clients");
    }
  }]);
  return Centrals;
}();


/***/ }),

/***/ "./resources/js/src/views/Dashboard.vue":
/*!**********************************************!*\
  !*** ./resources/js/src/views/Dashboard.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_d9e5d64c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=d9e5d64c& */ "./resources/js/src/views/Dashboard.vue?vue&type=template&id=d9e5d64c&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Dashboard_vue_vue_type_style_index_0_id_d9e5d64c_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=style&index=0&id=d9e5d64c&lang=scss& */ "./resources/js/src/views/Dashboard.vue?vue&type=style&index=0&id=d9e5d64c&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_d9e5d64c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_d9e5d64c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Dashboard.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/src/views/Dashboard.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Dashboard.vue?vue&type=style&index=0&id=d9e5d64c&lang=scss&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/views/Dashboard.vue?vue&type=style&index=0&id=d9e5d64c&lang=scss& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_d9e5d64c_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/sass-loader/dist/cjs.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=style&index=0&id=d9e5d64c&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Dashboard.vue?vue&type=style&index=0&id=d9e5d64c&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_d9e5d64c_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_d9e5d64c_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_d9e5d64c_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_d9e5d64c_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/Dashboard.vue?vue&type=template&id=d9e5d64c&":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/views/Dashboard.vue?vue&type=template&id=d9e5d64c& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_d9e5d64c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=d9e5d64c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Dashboard.vue?vue&type=template&id=d9e5d64c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_d9e5d64c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_d9e5d64c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/DashboardCentral.vue":
/*!*****************************************************!*\
  !*** ./resources/js/src/views/DashboardCentral.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DashboardCentral_vue_vue_type_template_id_bc43162a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashboardCentral.vue?vue&type=template&id=bc43162a&scoped=true& */ "./resources/js/src/views/DashboardCentral.vue?vue&type=template&id=bc43162a&scoped=true&");
/* harmony import */ var _DashboardCentral_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashboardCentral.vue?vue&type=script&lang=js& */ "./resources/js/src/views/DashboardCentral.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DashboardCentral_vue_vue_type_style_index_0_id_bc43162a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DashboardCentral.vue?vue&type=style&index=0&id=bc43162a&lang=scss&scoped=true& */ "./resources/js/src/views/DashboardCentral.vue?vue&type=style&index=0&id=bc43162a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DashboardCentral_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DashboardCentral_vue_vue_type_template_id_bc43162a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DashboardCentral_vue_vue_type_template_id_bc43162a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "bc43162a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/DashboardCentral.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/DashboardCentral.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/DashboardCentral.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardCentral_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardCentral.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/DashboardCentral.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardCentral_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/DashboardCentral.vue?vue&type=style&index=0&id=bc43162a&lang=scss&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/views/DashboardCentral.vue?vue&type=style&index=0&id=bc43162a&lang=scss&scoped=true& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardCentral_vue_vue_type_style_index_0_id_bc43162a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/sass-loader/dist/cjs.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardCentral.vue?vue&type=style&index=0&id=bc43162a&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/DashboardCentral.vue?vue&type=style&index=0&id=bc43162a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardCentral_vue_vue_type_style_index_0_id_bc43162a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardCentral_vue_vue_type_style_index_0_id_bc43162a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardCentral_vue_vue_type_style_index_0_id_bc43162a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardCentral_vue_vue_type_style_index_0_id_bc43162a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/DashboardCentral.vue?vue&type=template&id=bc43162a&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/views/DashboardCentral.vue?vue&type=template&id=bc43162a&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardCentral_vue_vue_type_template_id_bc43162a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardCentral.vue?vue&type=template&id=bc43162a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/DashboardCentral.vue?vue&type=template&id=bc43162a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardCentral_vue_vue_type_template_id_bc43162a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardCentral_vue_vue_type_template_id_bc43162a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);