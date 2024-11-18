(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[76],{

/***/ "./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createForOfIteratorHelper; });
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = Object(_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      var F = function F() {};
      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true,
    didErr = false,
    err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/settings/users/Add.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/settings/users/Add.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js */ "./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js");
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var flatpickr_dist_l10n_es_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! flatpickr/dist/l10n/es.js */ "./node_modules/flatpickr/dist/l10n/es.js");
/* harmony import */ var flatpickr_dist_l10n_es_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_l10n_es_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! vue-cleave-component */ "./node_modules/vue-cleave-component/dist/vue-cleave.min.js");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(vue_cleave_component__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _core_mixins_ui_transition__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @core/mixins/ui/transition */ "./resources/js/src/@core/mixins/ui/transition.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @/router */ "./resources/js/src/router/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");
/* harmony import */ var cleave_js_dist_addons_cleave_phone_us__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! cleave.js/dist/addons/cleave-phone.us */ "./node_modules/cleave.js/dist/addons/cleave-phone.us.js");
/* harmony import */ var cleave_js_dist_addons_cleave_phone_us__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(cleave_js_dist_addons_cleave_phone_us__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _providers_Users__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @/providers/Users */ "./resources/js/src/providers/Users.js");











//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//












// Providers

var UserResource = new _providers_Users__WEBPACK_IMPORTED_MODULE_21__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BButton"],
    BMedia: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BMedia"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BAvatar"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BCol"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BFormGroup"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BFormInput"],
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BForm"],
    BTable: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BTable"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BCard"],
    BCardHeader: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BCardHeader"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BCardTitle"],
    BFormCheckbox: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BFormCheckbox"],
    BFormCheckboxGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BFormCheckboxGroup"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_14___default.a,
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_12___default.a,
    Cleave: vue_cleave_component__WEBPACK_IMPORTED_MODULE_16___default.a,
    BTab: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BTab"],
    BTabs: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BTabs"],
    BAlert: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BAlert"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BLink"],
    BInputGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BInputGroup"],
    BInputGroupAppend: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BInputGroupAppend"],
    BFormTextarea: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BFormTextarea"],
    BFormTimepicker: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BFormTimepicker"],
    BOverlay: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BOverlay"],
    BSpinner: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BSpinner"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_15__["default"]
  },
  mixins: [_core_mixins_ui_transition__WEBPACK_IMPORTED_MODULE_17__["heightTransition"]],
  data: function data() {
    var _ref;
    return _ref = {
      loading: false,
      limitSize: 5242880,
      user_id: null,
      role_id: null,
      user: {
        roles: [],
        schedules: []
      },
      avatarDefault: __webpack_require__(/*! @/assets/images/avatar_default.png */ "./resources/js/src/assets/images/avatar_default.png"),
      avatar: null,
      roleSelect: {
        name: null,
        id: null
      },
      clevePhone: {
        phone: true,
        phoneRegionCode: "US"
      },
      passwordFieldType: "password"
    }, Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_ref, "loading", false), Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_ref, "isChangeAvatar", false), Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_ref, "roles", []), Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_ref, "days", [{
      text: this.$t('days.sunday'),
      value: {
        day: this.$t('days.sunday'),
        day_of_week: 0,
        start_time: null,
        end_time: null,
        lunch_start_time: null,
        lunch_end_time: null
      }
    }, {
      text: this.$t('days.monday'),
      value: {
        day: this.$t('days.monday'),
        day_of_week: 1,
        start_time: null,
        end_time: null,
        lunch_start_time: null,
        lunch_end_time: null
      }
    }, {
      text: this.$t('days.tuesday'),
      value: {
        day: this.$t('days.tuesday'),
        day_of_week: 2,
        start_time: null,
        end_time: null,
        lunch_start_time: null,
        lunch_end_time: null
      }
    }, {
      text: this.$t('days.Wednesday'),
      value: {
        day: this.$t('days.Wednesday'),
        day_of_week: 3,
        start_time: null,
        end_time: null,
        lunch_start_time: null,
        lunch_end_time: null
      }
    }, {
      text: this.$t('days.thursday'),
      value: {
        day: this.$t('days.thursday'),
        day_of_week: 4,
        start_time: null,
        end_time: null,
        lunch_start_time: null,
        lunch_end_time: null
      }
    }, {
      text: this.$t('days.fiday'),
      value: {
        day: this.$t('days.fiday'),
        day_of_week: 5,
        start_time: null,
        end_time: null,
        lunch_start_time: null,
        lunch_end_time: null
      }
    }, {
      text: this.$t('days.saturday'),
      value: {
        day: this.$t('days.saturday'),
        day_of_week: 6,
        start_time: null,
        end_time: null,
        lunch_start_time: null,
        lunch_end_time: null
      }
    }]), Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_ref, "schedules", []), Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_ref, "userRoles", _store__WEBPACK_IMPORTED_MODULE_19__["default"].getters['auth/getUser'].roles.map(function (role) {
      return role.id;
    })), _ref;
  },
  computed: {
    passwordToggleIcon: function passwordToggleIcon() {
      return this.passwordFieldType === "password" ? "EyeIcon" : "EyeOffIcon";
    },
    isAdmin: function isAdmin() {
      return _store__WEBPACK_IMPORTED_MODULE_19__["default"].getters['auth/getRoleId'] === 1; //this.userRoles.includes(1)
    },
    startJobTime: function startJobTime() {
      return _store__WEBPACK_IMPORTED_MODULE_19__["default"].getters['auth/getSettings'].schedule_start_time;
    },
    endJobTime: function endJobTime() {
      return _store__WEBPACK_IMPORTED_MODULE_19__["default"].getters['auth/getSettings'].schedule_end_time;
    },
    isRoleDoctor: function isRoleDoctor() {
      return _store__WEBPACK_IMPORTED_MODULE_19__["default"].getters['auth/getRoleId'] === 4; //this.user.roles.some(item => item === 4)
    }
  },
  created: function created() {
    window.addEventListener('resize', this.initTrHeight);
    if (_store__WEBPACK_IMPORTED_MODULE_19__["default"].state.auth.setting['language'] === "es") {
      flatpickr.localize(flatpickr_dist_l10n_es_js__WEBPACK_IMPORTED_MODULE_13__["Spanish"]);
    }
    this.days = this.days.map(function (item) {
      return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__["default"])({}, item), {}, {
        value: Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__["default"])({}, item.value), {}, {
          start_time: _store__WEBPACK_IMPORTED_MODULE_19__["default"].getters['auth/getSettings'].schedule_start_time,
          lunch_start_time: null,
          //store.getters['auth/getSettings'].schedule_start_time,
          lunch_end_time: _store__WEBPACK_IMPORTED_MODULE_19__["default"].getters['auth/getSettings'].schedule_end_time,
          end_time: null,
          //store.getters['auth/getSettings'].schedule_end_time,
          active: true
        })
      });
    });
  },
  destroyed: function destroyed() {
    window.removeEventListener('resize', this.initTrHeight);
  },
  mounted: function mounted() {
    var _this = this;
    return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().mark(function _callee() {
      return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            // this.initTrHeight()  
            _this.mapRoles();
          case 1:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  methods: {
    validateWorkingHours: function validateWorkingHours(days) {
      var _iterator = Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__["default"])(days),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var day = _step.value;
          var _day$value = day.value,
            start_time = _day$value.start_time,
            end_time = _day$value.end_time,
            lunch_start_time = _day$value.lunch_start_time,
            lunch_end_time = _day$value.lunch_end_time;
          if (start_time && end_time) {
            if (start_time >= end_time) {
              return "End time must be greater than start time for ".concat(day.day);
            }
          }
          if (lunch_start_time && lunch_end_time) {
            if (lunch_start_time >= lunch_end_time) {
              return "Lunch end time must be greater than lunch start time for ".concat(day.day);
            }
          }
          if (start_time && lunch_start_time) {
            if (start_time >= lunch_start_time) {
              return "Lunch start time must be greater than work start time for ".concat(day.day);
            }
          }
          if (lunch_end_time && end_time) {
            if (lunch_end_time >= end_time) {
              return "Lunch end time must be less than work end time for ".concat(day.day);
            }
          }
          if (lunch_start_time && end_time && start_time && lunch_end_time) {
            if (lunch_start_time < start_time || lunch_end_time > end_time) {
              return "Lunch times must be within work start and end times for ".concat(day.day);
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return null; // Validation passed
    },
    repeateAgain: function repeateAgain() {
      var _this2 = this;
      this.items.push({
        id: this.nextTodoId += this.nextTodoId
      });
      this.$nextTick(function () {
        _this2.trAddHeight(_this2.$refs.row[0].offsetHeight);
      });
    },
    removeItem: function removeItem(index) {
      this.items.splice(index, 1);
      this.trTrimHeight(this.$refs.row[0].offsetHeight);
    },
    initTrHeight: function initTrHeight() {
      var _this3 = this;
      this.trSetHeight(null);
      this.$nextTick(function () {
        _this3.trSetHeight(_this3.$refs.form.scrollHeight);
      });
    },
    onRoleChange: function onRoleChange(value) {
      this.role_id = value;
    },
    store: function store() {
      var _this4 = this;
      return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().mark(function _callee2() {
        var existRoleDoctor, isOkTimeDetail, validationError, _yield$UserResource$s, data;
        return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              //Dentro de user.roles detectar si existe el rol de doctor
              existRoleDoctor = _this4.user.roles.some(function (item) {
                return item.id === 4;
              });
              if (!existRoleDoctor) {
                _context2.next = 11;
                break;
              }
              isOkTimeDetail = _this4.schedules.some(function (item) {
                var isValid = item.start_time === null || item.start_time == "" || item.end_time === null || item.end_time == "" || item.lunch_start_time === null || item.lunch_start_time == "" || item.lunch_end_time === null || item.lunch_end_time == "";
                return isValid;
              });
              if (!isOkTimeDetail) {
                _context2.next = 6;
                break;
              }
              _this4.danger(_this4.$t('days.error_days'));
              return _context2.abrupt("return", false);
            case 6:
              validationError = _this4.validateWorkingHours(_this4.days);
              if (!validationError) {
                _context2.next = 10;
                break;
              }
              _this4.danger(validationError);
              return _context2.abrupt("return", false);
            case 10:
              _this4.user.schedules = _this4.schedules;
            case 11:
              console.log(_this4.user);
              _context2.prev = 12;
              _this4.loading = true;
              _context2.next = 16;
              return UserResource.store(_this4.user);
            case 16:
              _yield$UserResource$s = _context2.sent;
              data = _yield$UserResource$s.data;
              _this4.loading = false;
              if (data.success) {
                _this4.success(data.message);
                _router__WEBPACK_IMPORTED_MODULE_18__["default"].push({
                  name: "settings-users"
                });
              } else {
                _this4.danger(data.message);
              }
              _context2.next = 26;
              break;
            case 22:
              _context2.prev = 22;
              _context2.t0 = _context2["catch"](12);
              _this4.loading = false;
              _this4.handleResponseErrors(_context2.t0);
            case 26:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[12, 22]]);
      }))();
    },
    togglePassword: function togglePassword() {
      this.passwordFieldType = this.passwordFieldType === "password" ? "text" : "password";
    },
    mapRoles: function mapRoles() {
      var _this5 = this;
      this.roles = [];
      var data = _store__WEBPACK_IMPORTED_MODULE_19__["default"].getters['auth/getRoles'];
      if (this.isAdmin) {
        this.roles = _.map(data, function (element) {
          return {
            id: element.id,
            name: _this5.$t("role_".concat(element.name))
          };
        });
      } else {
        this.roles = data.filter(function (d) {
          return d.id != 1;
        }).map(function (element) {
          return {
            id: element.id,
            name: _this5.$t("role_".concat(element.name))
          };
        });
      }
    },
    inputImageRenderer: function inputImageRenderer(evt) {
      var _this6 = this;
      var file = evt.target.files[0];

      //file size valid
      if (file.size > this.limitSize) {
        this.danger(this.$t('image_format_limit_help'), "Error", "AlertCircleIcon");
        return;
      }

      /// Lee el archivo local y lo genera en codificación gbk
      var reader = new FileReader();
      reader.onload = function (data) {
        // Después de una lectura exitosa
        var res = data.target || data.srcElement;
        // Resultados de salida después de leer
        _this6.user.change_avatar = true;
        _this6.user.avatar = res.result;
        _this6.avatar = res.result;
      };
      reader.readAsDataURL(file);
    },
    resetAvatar: function resetAvatar() {
      this.getUser();
    }
  },
  watch: {
    schedules: function schedules(value) {
      console.log(value);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/settings/users/Add.vue?vue&type=style&index=0&id=b8aaead0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/settings/users/Add.vue?vue&type=style&index=0&id=b8aaead0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../../../../../../node_modules/css-loader/dist/cjs.js!flatpickr/dist/flatpickr.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/flatpickr/dist/flatpickr.css");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);
// Module
exports.push([module.i, "/**\n    Support for SASS is deprecated as of v3.18.\n\n    The files remain here if your build is dependent on them\n    but they will not receive updates in future releases. All\n    SASS variables have been translated into CSS variables, so\n    migration should be quite simple if you'd like to move over.\n\n    In v4, these files will be removed.\n */\n.v-select {\n  position: relative;\n  font-family: inherit;\n}\n.v-select,\n.v-select * {\n  box-sizing: border-box;\n}\n\n/* KeyFrames */\n@-webkit-keyframes vSelectSpinner-ltr {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@-webkit-keyframes vSelectSpinner-rtl {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(-360deg);\n}\n}\n@keyframes vSelectSpinner-ltr {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes vSelectSpinner-rtl {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(-360deg);\n}\n}\n/* Dropdown Default Transition */\n.vs__fade-enter-active,\n.vs__fade-leave-active {\n  pointer-events: none;\n  transition: opacity 0.15s cubic-bezier(1, 0.5, 0.8, 1);\n}\n.vs__fade-enter,\n.vs__fade-leave-to {\n  opacity: 0;\n}\n\n/** Component States */\n/*\n * Disabled\n *\n * When the component is disabled, all interaction\n * should be prevented. Here we modify the bg color,\n * and change the cursor displayed on the interactive\n * components.\n */\n[dir] .vs--disabled .vs__dropdown-toggle, [dir] .vs--disabled .vs__clear, [dir] .vs--disabled .vs__search, [dir] .vs--disabled .vs__selected, [dir] .vs--disabled .vs__open-indicator {\n  cursor: not-allowed;\n  background-color: #f8f8f8;\n}\n\n/*\n *  RTL - Right to Left Support\n *\n *  Because we're using a flexbox layout, the `dir=\"rtl\"`\n *  HTML attribute does most of the work for us by\n *  rearranging the child elements visually.\n */\n.v-select[dir=rtl] .vs__actions {\n  padding: 0 3px 0 6px;\n}\n.v-select[dir=rtl] .vs__clear {\n  margin-left: 6px;\n  margin-right: 0;\n}\n.v-select[dir=rtl] .vs__deselect {\n  margin-left: 0;\n  margin-right: 2px;\n}\n.v-select[dir=rtl] .vs__dropdown-menu {\n  text-align: right;\n}\n\n/**\n    Dropdown Toggle\n\n    The dropdown toggle is the primary wrapper of the component. It\n    has two direct descendants: .vs__selected-options, and .vs__actions.\n\n    .vs__selected-options holds the .vs__selected's as well as the\n    main search input.\n\n    .vs__actions holds the clear button and dropdown toggle.\n */\n.vs__dropdown-toggle {\n  appearance: none;\n  display: flex;\n  white-space: normal;\n}\n[dir] .vs__dropdown-toggle {\n  padding: 0 0 4px 0;\n  background: none;\n  border: 1px solid #d8d6de;\n  border-radius: 0.357rem;\n}\n.vs__selected-options {\n  display: flex;\n  flex-basis: 100%;\n  flex-grow: 1;\n  flex-wrap: wrap;\n  position: relative;\n}\n[dir] .vs__selected-options {\n  padding: 0 2px;\n}\n.vs__actions {\n  display: flex;\n  align-items: center;\n}\n[dir=ltr] .vs__actions {\n  padding: 4px 6px 0 3px;\n}\n[dir=rtl] .vs__actions {\n  padding: 4px 3px 0 6px;\n}\n\n/* Dropdown Toggle States */\n[dir] .vs--searchable .vs__dropdown-toggle {\n  cursor: text;\n}\n[dir] .vs--unsearchable .vs__dropdown-toggle {\n  cursor: pointer;\n}\n[dir] .vs--open .vs__dropdown-toggle {\n  border-bottom-color: transparent;\n}\n[dir=ltr] .vs--open .vs__dropdown-toggle {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n[dir=rtl] .vs--open .vs__dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.vs__open-indicator {\n  fill: rgba(60, 60, 60, 0.5);\n  transition: transform 150ms cubic-bezier(1, -0.115, 0.975, 0.855);\n}\n[dir] .vs__open-indicator {\n  transform: scale(1);\n  transition-timing-function: cubic-bezier(1, -0.115, 0.975, 0.855);\n}\n[dir=ltr] .vs--open .vs__open-indicator {\n  transform: rotate(180deg) scale(1);\n}\n[dir=rtl] .vs--open .vs__open-indicator {\n  transform: rotate(-180deg) scale(1);\n}\n.vs--loading .vs__open-indicator {\n  opacity: 0;\n}\n\n/* Clear Button */\n.vs__clear {\n  fill: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__clear {\n  padding: 0;\n  border: 0;\n  background-color: transparent;\n  cursor: pointer;\n}\n[dir=ltr] .vs__clear {\n  margin-right: 8px;\n}\n[dir=rtl] .vs__clear {\n  margin-left: 8px;\n}\n\n/* Dropdown Menu */\n.vs__dropdown-menu {\n  display: block;\n  box-sizing: border-box;\n  position: absolute;\n  top: calc(100% - 1px);\n  z-index: 1000;\n  width: 100%;\n  max-height: 350px;\n  min-width: 160px;\n  overflow-y: auto;\n  list-style: none;\n}\n[dir] .vs__dropdown-menu {\n  padding: 5px 0;\n  margin: 0;\n  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.1);\n  border: 1px solid #d8d6de;\n  border-top-style: none;\n  border-radius: 0 0 0.357rem 0.357rem;\n  background: #fff;\n}\n[dir=ltr] .vs__dropdown-menu {\n  left: 0;\n  text-align: left;\n}\n[dir=rtl] .vs__dropdown-menu {\n  right: 0;\n  text-align: right;\n}\n[dir] .vs__no-options {\n  text-align: center;\n}\n\n/* List Items */\n.vs__dropdown-option {\n  line-height: 1.42857143;\n  /* Normalize line height */\n  display: block;\n  color: #333;\n  /* Overrides most CSS frameworks */\n  white-space: nowrap;\n}\n[dir] .vs__dropdown-option {\n  padding: 3px 20px;\n  clear: both;\n  cursor: pointer;\n}\n.vs__dropdown-option--highlight {\n  color: #7367f0 !important;\n}\n[dir] .vs__dropdown-option--highlight {\n  background: rgba(115, 103, 240, 0.12);\n}\n.vs__dropdown-option--deselect {\n  color: #fff;\n}\n[dir] .vs__dropdown-option--deselect {\n  background: #fb5858;\n}\n.vs__dropdown-option--disabled {\n  color: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__dropdown-option--disabled {\n  background: inherit;\n  cursor: inherit;\n}\n\n/* Selected Tags */\n.vs__selected {\n  display: flex;\n  align-items: center;\n  color: #333;\n  line-height: 1.8;\n  z-index: 0;\n}\n[dir] .vs__selected {\n  background-color: #7367f0;\n  border: 0 solid rgba(60, 60, 60, 0.26);\n  border-radius: 0.357rem;\n  margin: 4px 2px 0px 2px;\n  padding: 0 0.25em;\n}\n.vs__deselect {\n  display: inline-flex;\n  appearance: none;\n  fill: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__deselect {\n  padding: 0;\n  border: 0;\n  cursor: pointer;\n  background: none;\n  text-shadow: 0 1px 0 #fff;\n}\n[dir=ltr] .vs__deselect {\n  margin-left: 4px;\n}\n[dir=rtl] .vs__deselect {\n  margin-right: 4px;\n}\n\n/* States */\n[dir] .vs--single .vs__selected {\n  background-color: transparent;\n  border-color: transparent;\n}\n.vs--single.vs--open .vs__selected, .vs--single.vs--loading .vs__selected {\n  position: absolute;\n  opacity: 0.4;\n}\n.vs--single.vs--searching .vs__selected {\n  display: none;\n}\n\n/* Search Input */\n/**\n * Super weird bug... If this declaration is grouped\n * below, the cancel button will still appear in chrome.\n * If it's up here on it's own, it'll hide it.\n */\n.vs__search::-webkit-search-cancel-button {\n  display: none;\n}\n.vs__search::-webkit-search-decoration,\n.vs__search::-webkit-search-results-button,\n.vs__search::-webkit-search-results-decoration,\n.vs__search::-ms-clear {\n  display: none;\n}\n.vs__search,\n.vs__search:focus {\n  appearance: none;\n  line-height: 1.8;\n  font-size: 1em;\n  outline: none;\n  width: 0;\n  max-width: 100%;\n  flex-grow: 1;\n  z-index: 1;\n}\n[dir] .vs__search, [dir] .vs__search:focus {\n  border: 1px solid transparent;\n  margin: 4px 0 0 0;\n  padding: 0 7px;\n  background: none;\n  box-shadow: none;\n}\n[dir=ltr] .vs__search, [dir=ltr] .vs__search:focus {\n  border-left: none;\n}\n[dir=rtl] .vs__search, [dir=rtl] .vs__search:focus {\n  border-right: none;\n}\n.vs__search::placeholder {\n  color: #6e6b7b;\n}\n\n/**\n    States\n */\n.vs--unsearchable .vs__search {\n  opacity: 1;\n}\n[dir] .vs--unsearchable:not(.vs--disabled) .vs__search {\n  cursor: pointer;\n}\n.vs--single.vs--searching:not(.vs--open):not(.vs--loading) .vs__search {\n  opacity: 0.2;\n}\n\n/* Loading Spinner */\n.vs__spinner {\n  align-self: center;\n  opacity: 0;\n  font-size: 5px;\n  text-indent: -9999em;\n  overflow: hidden;\n  transition: opacity 0.1s;\n}\n[dir] .vs__spinner {\n  border-top: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-bottom: 0.9em solid rgba(100, 100, 100, 0.1);\n  transform: translateZ(0);\n}\n[dir=ltr] .vs__spinner {\n  border-right: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-left: 0.9em solid rgba(60, 60, 60, 0.45);\n  animation:  vSelectSpinner-ltr 1.1s infinite linear;\n}\n[dir=rtl] .vs__spinner {\n  border-left: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-right: 0.9em solid rgba(60, 60, 60, 0.45);\n  animation:  vSelectSpinner-rtl 1.1s infinite linear;\n}\n.vs__spinner,\n.vs__spinner:after {\n  width: 5em;\n  height: 5em;\n}\n[dir] .vs__spinner, [dir] .vs__spinner:after {\n  border-radius: 50%;\n}\n\n/* Loading Spinner States */\n.vs--loading .vs__spinner {\n  opacity: 1;\n}\n.vs__open-indicator {\n  fill: none;\n}\n[dir] .vs__open-indicator {\n  margin-top: 0.15rem;\n}\n.vs__dropdown-toggle {\n  transition: all 0.25s ease-in-out;\n}\n[dir] .vs__dropdown-toggle {\n  padding: 0.59px 0 4px 0;\n}\n[dir=ltr] .vs--single .vs__dropdown-toggle {\n  padding-left: 6px;\n}\n[dir=rtl] .vs--single .vs__dropdown-toggle {\n  padding-right: 6px;\n}\n.vs__dropdown-option--disabled {\n  opacity: 0.5;\n}\n[dir] .vs__dropdown-option--disabled.vs__dropdown-option--selected {\n  background: #7367f0 !important;\n}\n.vs__dropdown-option {\n  color: #6e6b7b;\n}\n[dir] .vs__dropdown-option, [dir] .vs__no-options {\n  padding: 7px 20px;\n}\n.vs__dropdown-option--selected {\n  background-color: #7367f0;\n  color: #fff;\n  position: relative;\n}\n.vs__dropdown-option--selected::after {\n  content: \"\";\n  height: 1.1rem;\n  width: 1.1rem;\n  display: inline-block;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  right: 20px;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-check'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 1.1rem;\n}\n[dir=rtl] .vs__dropdown-option--selected::after {\n  left: 20px;\n  right: unset;\n}\n.vs__dropdown-option--selected.vs__dropdown-option--highlight {\n  color: #fff !important;\n  background-color: #7367f0 !important;\n}\n.vs__clear svg {\n  color: #6e6b7b;\n}\n.vs__selected {\n  color: #fff;\n}\n.v-select.vs--single .vs__selected {\n  color: #6e6b7b;\n  transition: transform 0.2s ease;\n}\n[dir] .v-select.vs--single .vs__selected {\n  margin-top: 5px;\n}\n[dir=ltr] .v-select.vs--single .vs__selected input {\n  padding-left: 0;\n}\n[dir=rtl] .v-select.vs--single .vs__selected input {\n  padding-right: 0;\n}\n[dir=ltr] .vs--single.vs--open .vs__selected {\n  transform: translateX(5px);\n}\n[dir=rtl] .vs--single.vs--open .vs__selected {\n  transform: translateX(-5px);\n}\n.vs__selected .vs__deselect {\n  color: inherit;\n}\n.v-select:not(.vs--single) .vs__selected {\n  font-size: 0.9rem;\n}\n[dir] .v-select:not(.vs--single) .vs__selected {\n  border-radius: 3px;\n  padding: 0 0.6em;\n}\n[dir=ltr] .v-select:not(.vs--single) .vs__selected {\n  margin: 5px 2px 2px 5px;\n}\n[dir=rtl] .v-select:not(.vs--single) .vs__selected {\n  margin: 5px 5px 2px 2px;\n}\n.v-select:not(.vs--single) .vs__deselect svg {\n  vertical-align: text-top;\n}\n[dir] .v-select:not(.vs--single) .vs__deselect svg {\n  transform: scale(0.8);\n}\n.vs__dropdown-menu {\n  top: calc(100% + 1rem);\n}\n[dir] .vs__dropdown-menu {\n  border: none;\n  border-radius: 6px;\n  padding: 0;\n}\n[dir] .vs--open .vs__dropdown-toggle {\n  border-color: #7367f0;\n  border-bottom-color: #7367f0;\n  box-shadow: 0 3px 10px 0 rgba(34, 41, 47, 0.1);\n}\n[dir=ltr] .vs--open .vs__dropdown-toggle {\n  border-bottom-left-radius: 0.357rem;\n  border-bottom-right-radius: 0.357rem;\n}\n[dir=rtl] .vs--open .vs__dropdown-toggle {\n  border-bottom-right-radius: 0.357rem;\n  border-bottom-left-radius: 0.357rem;\n}\n.select-size-lg .vs__selected {\n  font-size: 1rem !important;\n}\n[dir] .select-size-lg.vs--single.vs--open .vs__selected {\n  margin-top: 6px;\n}\n.select-size-lg .vs__dropdown-toggle,\n.select-size-lg .vs__selected {\n  font-size: 1.25rem;\n}\n[dir] .select-size-lg .vs__dropdown-toggle {\n  padding: 5px;\n}\n[dir] .select-size-lg .vs__dropdown-toggle input {\n  margin-top: 0;\n}\n.select-size-lg .vs__deselect svg {\n  vertical-align: middle !important;\n}\n[dir] .select-size-lg .vs__deselect svg {\n  transform: scale(1) !important;\n}\n[dir] .select-size-sm .vs__dropdown-toggle {\n  padding-bottom: 0;\n  padding: 1px;\n}\n[dir] .select-size-sm.vs--single .vs__dropdown-toggle {\n  padding: 2px;\n}\n.select-size-sm .vs__dropdown-toggle,\n.select-size-sm .vs__selected {\n  font-size: 0.9rem;\n}\n[dir] .select-size-sm .vs__actions {\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n.select-size-sm .vs__deselect svg {\n  vertical-align: middle !important;\n}\n[dir] .select-size-sm .vs__search {\n  margin-top: 0;\n}\n.select-size-sm.v-select .vs__selected {\n  font-size: 0.75rem;\n}\n[dir] .select-size-sm.v-select .vs__selected {\n  padding: 0 0.3rem;\n}\n[dir] .select-size-sm.v-select:not(.vs--single) .vs__selected {\n  margin: 4px 5px;\n}\n[dir] .select-size-sm.v-select.vs--single .vs__selected {\n  margin-top: 1px;\n}\n[dir] .select-size-sm.vs--single.vs--open .vs__selected {\n  margin-top: 4px;\n}\n.dark-layout .vs__dropdown-toggle {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .vs__dropdown-toggle {\n  background: #283046;\n  border-color: #404656;\n}\n.dark-layout .vs__selected-options input {\n  color: #b4b7bd;\n}\n.dark-layout .vs__selected-options input::placeholder {\n  color: #676d7d;\n}\n.dark-layout .vs__actions svg {\n  fill: #404656;\n}\n[dir] .dark-layout .vs__dropdown-menu {\n  background: #283046;\n}\n.dark-layout .vs__dropdown-menu li {\n  color: #b4b7bd;\n}\n.dark-layout .v-select:not(.vs--single) .vs__selected {\n  color: #7367f0;\n}\n[dir] .dark-layout .v-select:not(.vs--single) .vs__selected {\n  background-color: rgba(115, 103, 240, 0.12);\n}\n.dark-layout .v-select.vs--single .vs__selected {\n  color: #b4b7bd !important;\n}\n.dark-layout .vs--disabled .vs__dropdown-toggle,\n.dark-layout .vs--disabled .vs__clear,\n.dark-layout .vs--disabled .vs__search,\n.dark-layout .vs--disabled .vs__selected,\n.dark-layout .vs--disabled .vs__open-indicator {\n  opacity: 0.5;\n}\n[dir] .dark-layout .vs--disabled .vs__dropdown-toggle, [dir] .dark-layout .vs--disabled .vs__clear, [dir] .dark-layout .vs--disabled .vs__search, [dir] .dark-layout .vs--disabled .vs__selected, [dir] .dark-layout .vs--disabled .vs__open-indicator {\n  background-color: #283046;\n}\n.flatpickr-calendar .flatpickr-day {\n  color: #6e6b7b;\n}\n[dir] .flatpickr-calendar .flatpickr-day.today {\n  border-color: #7367f0;\n}\n.flatpickr-calendar .flatpickr-day.today:hover {\n  color: #6e6b7b;\n}\n[dir] .flatpickr-calendar .flatpickr-day.today:hover {\n  background: transparent;\n}\n.flatpickr-calendar .flatpickr-day.selected, .flatpickr-calendar .flatpickr-day.selected:hover {\n  color: #fff;\n}\n[dir] .flatpickr-calendar .flatpickr-day.selected, [dir] .flatpickr-calendar .flatpickr-day.selected:hover {\n  background: #7367f0;\n  border-color: #7367f0;\n}\n[dir] .flatpickr-calendar .flatpickr-day.inRange, [dir] .flatpickr-calendar .flatpickr-day.inRange:hover {\n  background: #f3f2fe;\n  border-color: #f3f2fe;\n}\n[dir=ltr] .flatpickr-calendar .flatpickr-day.inRange, [dir=ltr] .flatpickr-calendar .flatpickr-day.inRange:hover {\n  box-shadow: -5px 0 0 #f3f2fe, 5px 0 0 #f3f2fe;\n}\n[dir=rtl] .flatpickr-calendar .flatpickr-day.inRange, [dir=rtl] .flatpickr-calendar .flatpickr-day.inRange:hover {\n  box-shadow: 5px 0 0 #f3f2fe, -5px 0 0 #f3f2fe;\n}\n.flatpickr-calendar .flatpickr-day.startRange, .flatpickr-calendar .flatpickr-day.endRange, .flatpickr-calendar .flatpickr-day.startRange:hover, .flatpickr-calendar .flatpickr-day.endRange:hover {\n  color: #fff;\n}\n[dir] .flatpickr-calendar .flatpickr-day.startRange, [dir] .flatpickr-calendar .flatpickr-day.endRange, [dir] .flatpickr-calendar .flatpickr-day.startRange:hover, [dir] .flatpickr-calendar .flatpickr-day.endRange:hover {\n  background: #7367f0;\n  border-color: #7367f0;\n}\n[dir=ltr] .flatpickr-calendar .flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n+1)), [dir=ltr] .flatpickr-calendar .flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n+1)), [dir=ltr] .flatpickr-calendar .flatpickr-day.endRange.startRange + .endRange:not(:nth-child(7n+1)) {\n  box-shadow: -10px 0 0 #7367f0;\n}\n[dir=rtl] .flatpickr-calendar .flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n+1)), [dir=rtl] .flatpickr-calendar .flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n+1)), [dir=rtl] .flatpickr-calendar .flatpickr-day.endRange.startRange + .endRange:not(:nth-child(7n+1)) {\n  box-shadow: 10px 0 0 #7367f0;\n}\n.flatpickr-calendar .flatpickr-day.flatpickr-disabled, .flatpickr-calendar .flatpickr-day.prevMonthDay, .flatpickr-calendar .flatpickr-day.nextMonthDay {\n  color: #dae1e7;\n}\n[dir] .flatpickr-calendar .flatpickr-day:hover {\n  background: #f6f6f6;\n}\n.flatpickr-calendar:after, .flatpickr-calendar:before {\n  display: none;\n}\n.flatpickr-calendar .flatpickr-months .flatpickr-prev-month,\n.flatpickr-calendar .flatpickr-months .flatpickr-next-month {\n  top: -5px;\n}\n.flatpickr-calendar .flatpickr-months .flatpickr-prev-month:hover i, .flatpickr-calendar .flatpickr-months .flatpickr-prev-month:hover svg,\n.flatpickr-calendar .flatpickr-months .flatpickr-next-month:hover i,\n.flatpickr-calendar .flatpickr-months .flatpickr-next-month:hover svg {\n  fill: #7367f0;\n}\n.flatpickr-calendar .flatpickr-current-month span.cur-month {\n  font-weight: 300;\n}\n.flatpickr-calendar.open {\n  z-index: 1051;\n}\n.flatpickr-calendar.hasTime.open .flatpickr-time {\n  height: auto;\n}\n[dir] .flatpickr-time input:hover, [dir] .flatpickr-time .flatpickr-am-pm:hover, [dir] .flatpickr-time input:focus, [dir] .flatpickr-time .flatpickr-am-pm:focus {\n  background: #fff;\n}\n[dir] .dark-layout .flatpickr-calendar {\n  background: #161d31;\n  border-color: #161d31;\n  box-shadow: none;\n}\n.dark-layout .flatpickr-calendar .flatpickr-months i,\n.dark-layout .flatpickr-calendar .flatpickr-months svg {\n  fill: #b4b7bd;\n}\n.dark-layout .flatpickr-calendar .flatpickr-month {\n  color: #b4b7bd;\n}\n[dir=ltr] .dark-layout .flatpickr-calendar .flatpickr-weekwrapper .flatpickr-weeks {\n  box-shadow: 1px 0 0 #3b4253;\n}\n[dir=rtl] .dark-layout .flatpickr-calendar .flatpickr-weekwrapper .flatpickr-weeks {\n  box-shadow: -1px 0 0 #3b4253;\n}\n.dark-layout .flatpickr-calendar .flatpickr-weekday {\n  color: #b4b7bd;\n}\n.dark-layout .flatpickr-calendar .flatpickr-day, .dark-layout .flatpickr-calendar .flatpickr-day.today:hover {\n  color: #b4b7bd;\n}\n.dark-layout .flatpickr-calendar .flatpickr-day.selected {\n  color: #fff;\n}\n.dark-layout .flatpickr-calendar .flatpickr-day.prevMonthDay, .dark-layout .flatpickr-calendar .flatpickr-day.nextMonthDay, .dark-layout .flatpickr-calendar .flatpickr-day.flatpickr-disabled {\n  color: #4e5154 !important;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-day.inRange, [dir] .dark-layout .flatpickr-calendar .flatpickr-day.inRange:hover {\n  background: #283046;\n  border-color: #283046;\n}\n[dir=ltr] .dark-layout .flatpickr-calendar .flatpickr-day.inRange, [dir=ltr] .dark-layout .flatpickr-calendar .flatpickr-day.inRange:hover {\n  box-shadow: -5px 0 0 #283046, 5px 0 0 #283046;\n}\n[dir=rtl] .dark-layout .flatpickr-calendar .flatpickr-day.inRange, [dir=rtl] .dark-layout .flatpickr-calendar .flatpickr-day.inRange:hover {\n  box-shadow: 5px 0 0 #283046, -5px 0 0 #283046;\n}\n.dark-layout .flatpickr-calendar .flatpickr-day:hover:not(.selected):not(.today):not(.startRange):not(.endRange) {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-day:hover:not(.selected):not(.today):not(.startRange):not(.endRange) {\n  border-color: #283046;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-days .flatpickr-day:hover:not(.selected):not(.today):not(.startRange):not(.endRange), [dir] .dark-layout .flatpickr-calendar .flatpickr-days .flatpickr-day:focus:not(.selected):not(.today):not(.startRange):not(.endRange) {\n  background: #283046;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-time {\n  border-color: #161d31 !important;\n}\n.dark-layout .flatpickr-calendar .flatpickr-time .numInput,\n.dark-layout .flatpickr-calendar .flatpickr-time .flatpickr-am-pm {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-time .numInput:hover, [dir] .dark-layout .flatpickr-calendar .flatpickr-time .flatpickr-am-pm:hover {\n  background: #161d31;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-time .arrowUp:after {\n  border-bottom-color: #b4b7bd;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-time .arrowDown:after {\n  border-top-color: #b4b7bd;\n}\n[dir] .dark-layout .flatpickr-time input:hover, [dir] .dark-layout .flatpickr-time .flatpickr-am-pm:hover, [dir] .dark-layout .flatpickr-time input:focus, [dir] .dark-layout .flatpickr-time .flatpickr-am-pm:focus {\n  background: #161d31;\n}\n.flatpickr-input[readonly],\n.flatpickr-input ~ .form-control[readonly],\n.flatpickr-human-friendly[readonly] {\n  opacity: 1 !important;\n}\n[dir] .flatpickr-input[readonly], [dir] .flatpickr-input ~ .form-control[readonly], [dir] .flatpickr-human-friendly[readonly] {\n  background-color: inherit;\n}\n[dir] .flatpickr-weekdays {\n  margin-top: 8px;\n}\n.flatpickr-current-month .flatpickr-monthDropdown-months {\n  -webkit-appearance: none;\n}\n.flatpickr-current-month .flatpickr-monthDropdown-months,\n.flatpickr-current-month .numInputWrapper {\n  font-size: 1.1rem;\n  transition: all 0.15s ease-out;\n}\n[dir] .flatpickr-current-month .flatpickr-monthDropdown-months, [dir] .flatpickr-current-month .numInputWrapper {\n  border-radius: 4px;\n  padding: 2px;\n}\n.flatpickr-current-month .flatpickr-monthDropdown-months span,\n.flatpickr-current-month .numInputWrapper span {\n  display: none;\n}\nhtml[dir=rtl] .flatpickr-calendar .flatpickr-prev-month svg,\nhtml[dir=rtl] .flatpickr-calendar .flatpickr-next-month svg {\n  transform: rotate(180deg);\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/settings/users/Add.vue?vue&type=style&index=1&id=b8aaead0&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/settings/users/Add.vue?vue&type=style&index=1&id=b8aaead0&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".repeater-form[data-v-b8aaead0] {\n  overflow: hidden;\n  transition: 0.35s height;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/settings/users/Add.vue?vue&type=style&index=0&id=b8aaead0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/settings/users/Add.vue?vue&type=style&index=0&id=b8aaead0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--12-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=style&index=0&id=b8aaead0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/settings/users/Add.vue?vue&type=style&index=0&id=b8aaead0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/settings/users/Add.vue?vue&type=style&index=1&id=b8aaead0&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/settings/users/Add.vue?vue&type=style&index=1&id=b8aaead0&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--12-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=style&index=1&id=b8aaead0&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/settings/users/Add.vue?vue&type=style&index=1&id=b8aaead0&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/settings/users/Add.vue?vue&type=template&id=b8aaead0&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/settings/users/Add.vue?vue&type=template&id=b8aaead0&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
        [
          _c(
            "b-col",
            { attrs: { cols: "12", md: "12" } },
            [
              _c("b-card", { staticClass: "mb-0", attrs: { "no-body": "" } }, [
                _c(
                  "div",
                  { staticClass: "m-2" },
                  [
                    _c(
                      "b-form",
                      [
                        _c(
                          "b-row",
                          [
                            _c(
                              "b-col",
                              { attrs: { cols: "12", md: "6" } },
                              [
                                _c(
                                  "b-form-group",
                                  {
                                    attrs: {
                                      label: _vm.$t("user_name"),
                                      description: _vm.$t("user_name_help"),
                                      "label-for": "username",
                                    },
                                  },
                                  [
                                    _c("b-form-input", {
                                      attrs: {
                                        autocomplete: "off",
                                        id: "username",
                                        placeholder: _vm.$t(
                                          "user_name_placeholder"
                                        ),
                                      },
                                      model: {
                                        value: _vm.user.name,
                                        callback: function ($$v) {
                                          _vm.$set(_vm.user, "name", $$v)
                                        },
                                        expression: "user.name",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-col",
                              { attrs: { cols: "12", md: "6" } },
                              [
                                _c(
                                  "b-form-group",
                                  {
                                    attrs: {
                                      label: _vm.$t("user_email"),
                                      description: _vm.$t("user_email_help"),
                                      "label-for": "email",
                                    },
                                  },
                                  [
                                    _c("b-form-input", {
                                      attrs: {
                                        autocomplete: "off",
                                        id: "email",
                                        type: "email",
                                        placeholder: _vm.$t(
                                          "user_email_placeholder"
                                        ),
                                      },
                                      model: {
                                        value: _vm.user.email,
                                        callback: function ($$v) {
                                          _vm.$set(_vm.user, "email", $$v)
                                        },
                                        expression: "user.email",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-col",
                              { attrs: { cols: "12", md: "6" } },
                              [
                                _c(
                                  "b-form-group",
                                  {
                                    attrs: {
                                      "label-for": "profileList",
                                      label: _vm.$t("user_profile"),
                                      description: _vm.$t("user_profile_help"),
                                    },
                                  },
                                  [
                                    _c("v-select", {
                                      attrs: {
                                        id: "profileList",
                                        multiple: "",
                                        label: "name",
                                        options: _vm.roles,
                                        clearable: false,
                                        searchable: false,
                                        reduce: function (role) {
                                          return role.id
                                        },
                                        placeholder: _vm.$t("select_an_option"),
                                      },
                                      on: { input: _vm.onRoleChange },
                                      model: {
                                        value: _vm.user.roles,
                                        callback: function ($$v) {
                                          _vm.$set(_vm.user, "roles", $$v)
                                        },
                                        expression: "user.roles",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-col",
                              { attrs: { cols: "12", md: "6" } },
                              [
                                _c(
                                  "b-form-group",
                                  {
                                    attrs: {
                                      label: _vm.$t("user_password"),
                                      "label-for": "account-old-password",
                                    },
                                  },
                                  [
                                    _c(
                                      "b-input-group",
                                      { staticClass: "input-group-merge" },
                                      [
                                        _c("b-form-input", {
                                          attrs: {
                                            autocomplete: "off",
                                            id: "account-old-password",
                                            name: "password",
                                            type: _vm.passwordFieldType,
                                            placeholder: _vm.$t(
                                              "user_password_placeholder"
                                            ),
                                          },
                                          model: {
                                            value: _vm.user.password,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.user,
                                                "password",
                                                $$v
                                              )
                                            },
                                            expression: "user.password",
                                          },
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "b-input-group-append",
                                          { attrs: { "is-text": "" } },
                                          [
                                            _c("feather-icon", {
                                              staticClass: "cursor-pointer",
                                              attrs: {
                                                icon: _vm.passwordToggleIcon,
                                              },
                                              on: { click: _vm.togglePassword },
                                            }),
                                          ],
                                          1
                                        ),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c("small", [
                                      _vm._v(
                                        _vm._s(_vm.$t("user_password_help"))
                                      ),
                                    ]),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _vm.isRoleDoctor
                              ? _c(
                                  "b-col",
                                  { attrs: { cols: "12" } },
                                  [
                                    _c(
                                      "label",
                                      { attrs: { for: "checkbox-group-1" } },
                                      [
                                        _vm._v(
                                          "\n                                        " +
                                            _vm._s(_vm.$t("work_days")) +
                                            " (" +
                                            _vm._s(_vm.startJobTime) +
                                            " " +
                                            _vm._s(_vm.$t("to")) +
                                            " " +
                                            _vm._s(_vm.endJobTime) +
                                            " Hrs)\n                                    "
                                        ),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("b-form-checkbox-group", {
                                      staticClass: "demo-inline-spacing",
                                      attrs: {
                                        id: "checkbox-group-1",
                                        options: _vm.days,
                                        name: "flavour-1",
                                      },
                                      model: {
                                        value: _vm.schedules,
                                        callback: function ($$v) {
                                          _vm.schedules = $$v
                                        },
                                        expression: "schedules",
                                      },
                                    }),
                                  ],
                                  1
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.isRoleDoctor
                              ? _c(
                                  "b-col",
                                  { attrs: { cols: "12" } },
                                  _vm._l(_vm.schedules, function (item, index) {
                                    return _c(
                                      "b-row",
                                      {
                                        key: index,
                                        ref: "row",
                                        refInFor: true,
                                        attrs: { id: item.id },
                                      },
                                      [
                                        _c(
                                          "b-col",
                                          { attrs: { md: "2" } },
                                          [
                                            _c(
                                              "b-form-group",
                                              {
                                                attrs: {
                                                  label: _vm.$t("days.day"),
                                                  "label-for": "item-" + index,
                                                },
                                              },
                                              [
                                                _c("b-form-input", {
                                                  attrs: {
                                                    readonly: "",
                                                    value: item.day,
                                                    id: "item-" + index,
                                                    type: "text",
                                                  },
                                                }),
                                              ],
                                              1
                                            ),
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-col",
                                          { attrs: { md: "2" } },
                                          [
                                            _c(
                                              "b-form-group",
                                              {
                                                attrs: {
                                                  label:
                                                    _vm.$t("days.start_time"),
                                                  "label-for": "item-" + index,
                                                },
                                              },
                                              [
                                                _c("cleave", {
                                                  staticClass: "form-control",
                                                  attrs: {
                                                    id: "start-time-" + index,
                                                    raw: false,
                                                    options: {
                                                      time: true,
                                                      timePattern: ["h", "m"],
                                                    },
                                                    placeholder: "hh:mm",
                                                  },
                                                  model: {
                                                    value: item.start_time,
                                                    callback: function ($$v) {
                                                      _vm.$set(
                                                        item,
                                                        "start_time",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "item.start_time",
                                                  },
                                                }),
                                              ],
                                              1
                                            ),
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-col",
                                          { attrs: { md: "2" } },
                                          [
                                            _c(
                                              "b-form-group",
                                              {
                                                attrs: {
                                                  label:
                                                    _vm.$t("days.end_time"),
                                                  "label-for": "item-" + index,
                                                },
                                              },
                                              [
                                                _c("cleave", {
                                                  staticClass: "form-control",
                                                  attrs: {
                                                    id: "end-time-" + index,
                                                    raw: false,
                                                    options: {
                                                      time: true,
                                                      timePattern: ["h", "m"],
                                                    },
                                                    placeholder: "hh:mm",
                                                  },
                                                  model: {
                                                    value: item.end_time,
                                                    callback: function ($$v) {
                                                      _vm.$set(
                                                        item,
                                                        "end_time",
                                                        $$v
                                                      )
                                                    },
                                                    expression: "item.end_time",
                                                  },
                                                }),
                                              ],
                                              1
                                            ),
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-col",
                                          { attrs: { md: "2" } },
                                          [
                                            _c(
                                              "b-form-group",
                                              {
                                                attrs: {
                                                  label:
                                                    _vm.$t("days.start_time"),
                                                  "label-for": "item-" + index,
                                                },
                                              },
                                              [
                                                _c("cleave", {
                                                  staticClass: "form-control",
                                                  attrs: {
                                                    id: "start-time-" + index,
                                                    raw: false,
                                                    options: {
                                                      time: true,
                                                      timePattern: ["h", "m"],
                                                    },
                                                    placeholder: "hh:mm",
                                                  },
                                                  model: {
                                                    value:
                                                      item.lunch_start_time,
                                                    callback: function ($$v) {
                                                      _vm.$set(
                                                        item,
                                                        "lunch_start_time",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "item.lunch_start_time",
                                                  },
                                                }),
                                              ],
                                              1
                                            ),
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-col",
                                          { attrs: { md: "2" } },
                                          [
                                            _c(
                                              "b-form-group",
                                              {
                                                attrs: {
                                                  label:
                                                    _vm.$t("days.end_time"),
                                                  "label-for": "item-" + index,
                                                },
                                              },
                                              [
                                                _c("cleave", {
                                                  staticClass: "form-control",
                                                  attrs: {
                                                    id: "start-time-" + index,
                                                    raw: false,
                                                    options: {
                                                      time: true,
                                                      timePattern: ["h", "m"],
                                                    },
                                                    placeholder: "hh:mm",
                                                  },
                                                  model: {
                                                    value: item.lunch_end_time,
                                                    callback: function ($$v) {
                                                      _vm.$set(
                                                        item,
                                                        "lunch_end_time",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "item.lunch_end_time",
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
                                    )
                                  }),
                                  1
                                )
                              : _vm._e(),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "mb-1 mb-sm-0 mr-0 mr-sm-1 mt-3",
                        attrs: { variant: "primary" },
                        on: { click: _vm.store },
                      },
                      [
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm.$t("save")) +
                            "\n                    "
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "mb-1 mb-sm-0 mr-0 mr-sm-1 mt-3",
                        attrs: { variant: "outline-secondary" },
                        on: {
                          click: function ($event) {
                            return _vm.$router.push({ name: "settings-users" })
                          },
                        },
                      },
                      [
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm.$t("back")) +
                            "\n                    "
                        ),
                      ]
                    ),
                  ],
                  1
                ),
              ]),
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

/***/ "./resources/js/src/@core/mixins/ui/transition.js":
/*!********************************************************!*\
  !*** ./resources/js/src/@core/mixins/ui/transition.js ***!
  \********************************************************/
/*! exports provided: heightTransition, _ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "heightTransition", function() { return heightTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_", function() { return _; });
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__);

var heightTransition = {
  /*
      HowTo:
      1. Add dynamic style to element and set style as `trHeight`
      2. Set transition speed using `transition: 0.35s height;` <= you can use appropriate value;
      3. Optionally you can set `overflow: hidden;` to hide element overflow while height is animated.
      4. Set initial height using `trSetHeight` before any operation. [mounted hook is recommended - You can use `ref` for dynamic contents]
      5. Toggle height using height operations 🍻
      6. Toggle usage of $nextTick for height operations is any issue occur [experimental] 🔬
    */
  data: function data() {
    return {
      trHeight: null
    };
  },
  methods: {
    trAddHeight: function trAddHeight(val) {
      // Add height to existing height
      // Usage: Where new element is append or more height is added (e.g. list append)

      /* Assumes:
       - Height is assigned and is `String`
       - Incoming value is valid number in `Number` or `String`
      */
      var heightValue = Number(this.trHeight.substring(0, this.trHeight.length - 2));
      this.trHeight = "".concat(heightValue + Number(val), "px");
    },
    trTrimHeight: function trTrimHeight(val) {
      // Remove height from existing height
      // Usage: Where new element is removed or height is remove (e.g. list pop/ele remove)

      /* Assumes:
       - Height is assigned and is `String`
       - Incoming value is valid number in `Number` or `String`
      */
      var heightValue = Number(this.trHeight.substring(0, this.trHeight.length - 2));
      this.trHeight = "".concat(heightValue - Number(val), "px");
    },
    trSetHeight: function trSetHeight(val) {
      // Set height
      // Usage: Mostly for assigning initial value from mounted hook

      /* Assumes:
       - Height is not assigned and what to assign for add/remove operation
       - What to set height at something for odd usage
       - Incoming value is valid number in `Number` or `String`
      */
      if (val === null) this.trHeight = 'auto';else this.trHeight = "".concat(Number(val), "px");
    }
  }
};

// Ignore below for now. We will remove it when we add more transition in future.
var _ = null;

/***/ }),

/***/ "./resources/js/src/assets/images/avatar_default.png":
/*!***********************************************************!*\
  !*** ./resources/js/src/assets/images/avatar_default.png ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/saas-dental/resources/js/src/assets/images/avatar_default.png";

/***/ }),

/***/ "./resources/js/src/providers/Users.js":
/*!*********************************************!*\
  !*** ./resources/js/src/providers/Users.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Users; });
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);



/* eslint-disable class-methods-use-this */

var Users = /*#__PURE__*/function () {
  function Users() {
    Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Users);
  }
  Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Users, [{
    key: "index",
    value:
    /**
    * Function to get all users without pagination
    */
    function index(query) {
      return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("/api/users", {
        params: query
      });
    }

    /**
     * Function to permissions
     * @return Promise
     */
  }, {
    key: "permissions",
    value: function permissions() {
      return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("api/permissions");
    }

    /**
     * Function to create new user
     * @param {Object} formdata
     * @return AxiosPromise
     */
  }, {
    key: "store",
    value: function store(formdata) {
      return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("/api/users", formdata);
    }

    /**
     * Function to update a user
     * @param {Object} formdata
     * @return AxiosPromise
     */
  }, {
    key: "update",
    value: function update(id, formdata) {
      return axios__WEBPACK_IMPORTED_MODULE_3___default.a.put("/api/users/".concat(id), formdata, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
    }

    /**
     * Function to get information by user
     * @param {Number} id
     * @return AxiosPromise
     */
  }, {
    key: "getUserDetail",
    value: function getUserDetail(id, query) {
      return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("/api/users/".concat(id), {
        params: query
      });
    }

    /**
     * Funtion to delete multi users
     * @param {Array} users
     * @return AxiosPromise
     */
  }, {
    key: "destroy",
    value: function destroy(id) {
      return axios__WEBPACK_IMPORTED_MODULE_3___default.a["delete"]("/api/users/".concat(id));
    }

    /**
     * Function to get all users without pagination
     */
  }, {
    key: "getList",
    value: function getList(query) {
      return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("/api/users", {
        params: query
      });
    }

    /**
     * Function to active an user
     * @param {Object} formdata
     * @return AxiosPromise
     */
  }, {
    key: "activeUser",
    value: function activeUser(contactId, userId, formdata) {
      return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("".concat(process.env.API_URL, "/contacts/").concat(contactId, "/user/").concat(userId), formdata);
    }

    /**
     * Function to request password change
     * @return Promise
     */
  }, {
    key: "passwordChange",
    value: function passwordChange(formdata) {
      return axios__WEBPACK_IMPORTED_MODULE_3___default.a.put("api/change-password", formdata);
    }
  }, {
    key: "getUserByCriteria",
    value: function getUserByCriteria(criteria) {
      return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("/api/users/criteria", {
        params: {
          criteria: criteria
        }
      });
    }
  }]);
  return Users;
}();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./resources/js/src/views/settings/users/Add.vue":
/*!*******************************************************!*\
  !*** ./resources/js/src/views/settings/users/Add.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Add_vue_vue_type_template_id_b8aaead0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Add.vue?vue&type=template&id=b8aaead0&scoped=true& */ "./resources/js/src/views/settings/users/Add.vue?vue&type=template&id=b8aaead0&scoped=true&");
/* harmony import */ var _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Add.vue?vue&type=script&lang=js& */ "./resources/js/src/views/settings/users/Add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Add_vue_vue_type_style_index_0_id_b8aaead0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Add.vue?vue&type=style&index=0&id=b8aaead0&lang=scss& */ "./resources/js/src/views/settings/users/Add.vue?vue&type=style&index=0&id=b8aaead0&lang=scss&");
/* harmony import */ var _Add_vue_vue_type_style_index_1_id_b8aaead0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Add.vue?vue&type=style&index=1&id=b8aaead0&lang=scss&scoped=true& */ "./resources/js/src/views/settings/users/Add.vue?vue&type=style&index=1&id=b8aaead0&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Add_vue_vue_type_template_id_b8aaead0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Add_vue_vue_type_template_id_b8aaead0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b8aaead0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/settings/users/Add.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/settings/users/Add.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/settings/users/Add.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/settings/users/Add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/settings/users/Add.vue?vue&type=style&index=0&id=b8aaead0&lang=scss&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/views/settings/users/Add.vue?vue&type=style&index=0&id=b8aaead0&lang=scss& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_b8aaead0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--12-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=style&index=0&id=b8aaead0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/settings/users/Add.vue?vue&type=style&index=0&id=b8aaead0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_b8aaead0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_b8aaead0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_b8aaead0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_b8aaead0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/settings/users/Add.vue?vue&type=style&index=1&id=b8aaead0&lang=scss&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/src/views/settings/users/Add.vue?vue&type=style&index=1&id=b8aaead0&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_1_id_b8aaead0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--12-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=style&index=1&id=b8aaead0&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/settings/users/Add.vue?vue&type=style&index=1&id=b8aaead0&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_1_id_b8aaead0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_1_id_b8aaead0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_1_id_b8aaead0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_1_id_b8aaead0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/settings/users/Add.vue?vue&type=template&id=b8aaead0&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/settings/users/Add.vue?vue&type=template&id=b8aaead0&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_b8aaead0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=template&id=b8aaead0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/settings/users/Add.vue?vue&type=template&id=b8aaead0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_b8aaead0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_b8aaead0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);