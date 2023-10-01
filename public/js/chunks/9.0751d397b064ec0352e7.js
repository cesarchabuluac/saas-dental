(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/settings/profile/AccountSetting.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/settings/profile/AccountSetting.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _AccountSettingGeneral_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AccountSettingGeneral.vue */ "./resources/js/src/views/settings/profile/AccountSettingGeneral.vue");
/* harmony import */ var _AccountSettingPassword_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AccountSettingPassword.vue */ "./resources/js/src/views/settings/profile/AccountSettingPassword.vue");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BTabs: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BTabs"],
    BTab: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BTab"],
    AccountSettingGeneral: _AccountSettingGeneral_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    AccountSettingPassword: _AccountSettingPassword_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      options: {
        profile: {
          avatar: __webpack_require__(/*! @/assets/images/avatar_default.png */ "./resources/js/src/assets/images/avatar_default.png"),
          name: null,
          email: null,
          id: null
        }
      }
    };
  },
  computed: {
    user: function user() {
      var data = _store__WEBPACK_IMPORTED_MODULE_4__["default"].getters['auth/getUser'];
      return this.options.profile = {
        has_media: data.has_media,
        avatar: data.has_media ? data.avatar : __webpack_require__(/*! @/assets/images/avatar_default.png */ "./resources/js/src/assets/images/avatar_default.png"),
        name: data.name,
        email: data.email,
        role: data.roles[0].name,
        role_id: data.roles[0].id,
        id: data.id,
        verified: data.email_verified_at ? true : false
      };
    },
    roles: function roles() {
      return _store__WEBPACK_IMPORTED_MODULE_4__["default"].state.auth.roles;
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/settings/profile/AccountSettingGeneral.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/settings/profile/AccountSettingGeneral.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_projects_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var D_projects_dental_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var D_projects_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _core_comp_functions_forms_form_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/comp-functions/forms/form-utils */ "./resources/js/src/@core/comp-functions/forms/form-utils.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");
/* harmony import */ var _providers_Users__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/providers/Users */ "./resources/js/src/providers/Users.js");





//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









var UserResource = new _providers_Users__WEBPACK_IMPORTED_MODULE_12__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BButton"],
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BForm"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BImg"],
    BFormFile: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BFormFile"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BFormGroup"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BFormInput"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BCol"],
    BAlert: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BAlert"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BCard"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BCardText"],
    BMedia: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BMedia"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BAvatar"],
    BMediaAside: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BMediaAside"],
    BMediaBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BMediaBody"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BLink"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_6___default.a,
    BOverlay: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BOverlay"],
    BSpinner: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BSpinner"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  props: {
    profile: {
      type: Object,
      "default": function _default() {}
    }
  },
  data: function data() {
    return {
      user: {},
      roles: lodash__WEBPACK_IMPORTED_MODULE_10___default.a.filter(_store__WEBPACK_IMPORTED_MODULE_11__["default"].state.auth.roles),
      loading: false,
      isChangeAvatar: false
    };
  },
  mounted: function mounted() {
    this.user = this.profile;
  },
  methods: {
    update: function update() {
      var _this = this;
      return Object(D_projects_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/Object(D_projects_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee() {
        var _yield$UserResource$u, data;
        return Object(D_projects_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _this.loading = true;
              _context.next = 4;
              return UserResource.update(_this.profile.id, _this.profile);
            case 4:
              _yield$UserResource$u = _context.sent;
              data = _yield$UserResource$u.data;
              _this.loading = false;
              if (data.success) {
                _store__WEBPACK_IMPORTED_MODULE_11__["default"].commit("auth/SET_CURRENT_USER", Object(D_projects_dental_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__["default"])({}, data.data));
                _this.success(data.message);
              } else {
                _this.danger(data.message);
              }
              _context.next = 14;
              break;
            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              _this.loading = false;
              _this.handleResponseErrors(_context.t0);
            case 14:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 10]]);
      }))();
    },
    resetForm: function resetForm() {
      this.isChangeAvatar = false;
      this.profile.avatar = null;
      this.user = this.profile;
    },
    imgRenderer: function imgRenderer(evt) {
      var _this2 = this;
      var file = evt.target.files[0];
      /// Lee el archivo local y lo genera en codificación gbk
      var reader = new FileReader();
      reader.onload = function (data) {
        // Después de una lectura exitosa
        var res = data.target || data.srcElement;
        // Resultados de salida después de leer
        _this2.profile.change_avatar = true;
        _this2.profile.avatar = res.result;
      };
      reader.readAsDataURL(file);
    }
  },
  setup: function setup(props) {
    var refInputEl = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_9__["ref"])(null);
    var previewEl = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_9__["ref"])(null);
    var _useInputImageRendere = Object(_core_comp_functions_forms_form_utils__WEBPACK_IMPORTED_MODULE_8__["useInputImageRenderer"])(refInputEl, function (base64) {
        props.profile.avatar = base64;
      }),
      inputImageRenderer = _useInputImageRendere.inputImageRenderer;
    var resolveUserRoleVariant = function resolveUserRoleVariant(id) {
      if (id === 1) return "danger"; // Administrator
      if (id === 2) return "warning"; // Customer
      return 'primary';
    };
    return {
      refInputEl: refInputEl,
      previewEl: previewEl,
      inputImageRenderer: inputImageRenderer,
      resolveUserRoleVariant: resolveUserRoleVariant
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/settings/profile/AccountSettingPassword.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/settings/profile/AccountSettingPassword.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_projects_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var D_projects_dental_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var D_projects_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _providers_Users__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/providers/Users */ "./resources/js/src/providers/Users.js");



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




var UserResource = new _providers_Users__WEBPACK_IMPORTED_MODULE_5__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BButton"],
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BForm"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BFormGroup"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BFormInput"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BCol"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BCard"],
    BInputGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BInputGroup"],
    BInputGroupAppend: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BInputGroupAppend"],
    BOverlay: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BOverlay"],
    BSpinner: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BSpinner"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      loading: false,
      password: {},
      passwordValueOld: null,
      newPasswordValue: null,
      RetypePassword: null,
      passwordFieldTypeOld: 'password',
      passwordFieldTypeNew: 'password',
      passwordFieldTypeRetype: 'password',
      errors: {}
    };
  },
  computed: {
    passwordToggleIconOld: function passwordToggleIconOld() {
      return this.passwordFieldTypeOld === 'password' ? 'EyeIcon' : 'EyeOffIcon';
    },
    passwordToggleIconNew: function passwordToggleIconNew() {
      return this.passwordFieldTypeNew === 'password' ? 'EyeIcon' : 'EyeOffIcon';
    },
    passwordToggleIconRetype: function passwordToggleIconRetype() {
      return this.passwordFieldTypeRetype === 'password' ? 'EyeIcon' : 'EyeOffIcon';
    }
  },
  methods: {
    togglePasswordOld: function togglePasswordOld() {
      this.passwordFieldTypeOld = this.passwordFieldTypeOld === 'password' ? 'text' : 'password';
    },
    togglePasswordNew: function togglePasswordNew() {
      this.passwordFieldTypeNew = this.passwordFieldTypeNew === 'password' ? 'text' : 'password';
    },
    togglePasswordRetype: function togglePasswordRetype() {
      this.passwordFieldTypeRetype = this.passwordFieldTypeRetype === 'password' ? 'text' : 'password';
    },
    changePassword: function changePassword() {
      var _this = this;
      return Object(D_projects_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/Object(D_projects_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee() {
        var _yield$UserResource$p, data;
        return Object(D_projects_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (_this.password) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return", false);
            case 2:
              _context.prev = 2;
              _this.loading = true;
              _context.next = 6;
              return UserResource.passwordChange(Object(D_projects_dental_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _this.password));
            case 6:
              _yield$UserResource$p = _context.sent;
              data = _yield$UserResource$p.data;
              _this.loading = false;
              if (data.success) {
                _this.password = {};
                _this.success(data.message);
              } else {
                _this.danger(data.message);
              }
              _context.next = 16;
              break;
            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](2);
              _this.loading = false;
              _this.handleResponseErrors(_context.t0);
            case 16:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[2, 12]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.filter.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.filter.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $filter = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/settings/profile/AccountSetting.vue?vue&type=template&id=741da10a&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/settings/profile/AccountSetting.vue?vue&type=template&id=741da10a& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
    "b-tabs",
    {
      attrs: {
        vertical: "",
        "content-class": "col-12 col-md-9 mt-1 mt-md-0",
        pills: "",
        "nav-wrapper-class": "col-md-3 col-12",
        "nav-class": "nav-left",
      },
    },
    [
      _c(
        "b-tab",
        {
          attrs: { active: "" },
          scopedSlots: _vm._u([
            {
              key: "title",
              fn: function () {
                return [
                  _c("feather-icon", {
                    staticClass: "mr-50",
                    attrs: { icon: "UserIcon", size: "18" },
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "font-weight-bold" }, [
                    _vm._v(_vm._s(_vm.$t("general"))),
                  ]),
                ]
              },
              proxy: true,
            },
          ]),
        },
        [
          _vm._v(" "),
          _vm.user
            ? _c("account-setting-general", { attrs: { profile: _vm.user } })
            : _vm._e(),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-tab",
        {
          scopedSlots: _vm._u([
            {
              key: "title",
              fn: function () {
                return [
                  _c("feather-icon", {
                    staticClass: "mr-50",
                    attrs: { icon: "LockIcon", size: "18" },
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "font-weight-bold" }, [
                    _vm._v(_vm._s(_vm.$t("change_password"))),
                  ]),
                ]
              },
              proxy: true,
            },
          ]),
        },
        [_vm._v(" "), _c("account-setting-password")],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/settings/profile/AccountSettingGeneral.vue?vue&type=template&id=d1f105c6&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/settings/profile/AccountSettingGeneral.vue?vue&type=template&id=d1f105c6& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
    },
    [
      _c(
        "b-card",
        [
          _c(
            "b-media",
            {
              staticClass: "mb-2",
              scopedSlots: _vm._u([
                {
                  key: "aside",
                  fn: function () {
                    return [
                      _c("b-avatar", {
                        ref: "previewEl",
                        attrs: {
                          src: _vm.user.has_media ? _vm.user.avatar : null,
                          text: _vm.avatarText(_vm.user.name),
                          variant:
                            "light-" +
                            _vm.resolveUserRoleVariant(_vm.user.role_id),
                          size: "90px",
                          rounded: "",
                        },
                      }),
                    ]
                  },
                  proxy: true,
                },
              ]),
            },
            [
              _vm._v(" "),
              _c("h4", { staticClass: "mb-1" }, [
                _vm._v("\n\t\t\t\t" + _vm._s(_vm.user.name) + "\n\t\t\t"),
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "d-flex flex-wrap" },
                [
                  _c(
                    "b-button",
                    {
                      attrs: { variant: "primary" },
                      on: {
                        click: function ($event) {
                          return _vm.$refs.refInputEl.click()
                        },
                      },
                    },
                    [
                      _c("input", {
                        ref: "refInputEl",
                        staticClass: "d-none",
                        attrs: { type: "file" },
                        on: { input: _vm.imgRenderer },
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "d-none d-sm-inline" }, [
                        _vm._v(_vm._s(_vm.$t("uploads"))),
                      ]),
                      _vm._v(" "),
                      _c("feather-icon", {
                        staticClass: "d-inline d-sm-none",
                        attrs: { icon: "EditIcon" },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      staticClass: "ml-1",
                      attrs: { variant: "outline-secondary" },
                      on: { click: _vm.resetForm },
                    },
                    [
                      _c("span", { staticClass: "d-none d-sm-inline" }, [
                        _vm._v(" " + _vm._s(_vm.$t("cancel"))),
                      ]),
                      _vm._v(" "),
                      _c("feather-icon", {
                        staticClass: "d-inline d-sm-none",
                        attrs: { icon: "TrashIcon" },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
            ]
          ),
          _vm._v(" "),
          _c(
            "b-form",
            { staticClass: "mt-2" },
            [
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    { attrs: { sm: "6" } },
                    [
                      _c(
                        "b-form-group",
                        {
                          attrs: {
                            label: _vm.$t("user_name"),
                            "label-for": "account-username",
                          },
                        },
                        [
                          _c("b-form-input", {
                            attrs: {
                              placeholder: _vm.$t("user_name_placeholder"),
                              name: "username",
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
                    { attrs: { sm: "6" } },
                    [
                      _c(
                        "b-form-group",
                        {
                          attrs: {
                            label: _vm.$t("email"),
                            "label-for": "account-e-mail",
                          },
                        },
                        [
                          _c("b-form-input", {
                            attrs: {
                              name: "email",
                              placeholder: _vm.$t("user_email_placeholder"),
                              disabled: true,
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
                    { attrs: { cols: "12" } },
                    [
                      _c(
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
                          staticClass: "mt-2 mr-1",
                          attrs: { variant: "primary" },
                          on: { click: _vm.update },
                        },
                        [
                          _vm._v(
                            "\n\t\t\t\t\t\t" +
                              _vm._s(_vm.$t("update")) +
                              "\n\t\t\t\t\t"
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/settings/profile/AccountSettingPassword.vue?vue&type=template&id=15d3e5b6&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/settings/profile/AccountSettingPassword.vue?vue&type=template&id=15d3e5b6& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
    },
    [
      _c(
        "b-card",
        [
          _c(
            "b-form",
            [
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    { attrs: { md: "6" } },
                    [
                      _c(
                        "b-form-group",
                        {
                          attrs: {
                            label: _vm.$t("old_password"),
                            "label-for": "account-old-password",
                            description: _vm.$t("old_password_help"),
                          },
                        },
                        [
                          _c(
                            "b-input-group",
                            { staticClass: "input-group-merge" },
                            [
                              _c("b-form-input", {
                                attrs: {
                                  id: "account-old-password",
                                  name: "old-password",
                                  type: _vm.passwordFieldTypeOld,
                                  placeholder: _vm.$t(
                                    "old_password_placeholder"
                                  ),
                                },
                                model: {
                                  value: _vm.password.old_password,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.password, "old_password", $$v)
                                  },
                                  expression: "password.old_password",
                                },
                              }),
                              _vm._v(" "),
                              _c(
                                "b-input-group-append",
                                { attrs: { "is-text": "" } },
                                [
                                  _c("feather-icon", {
                                    staticClass: "cursor-pointer",
                                    attrs: { icon: _vm.passwordToggleIconOld },
                                    on: { click: _vm.togglePasswordOld },
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
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    { attrs: { md: "6" } },
                    [
                      _c(
                        "b-form-group",
                        {
                          attrs: {
                            "label-for": "account-new-password",
                            label: _vm.$t("new_password"),
                            description: _vm.$t("new_password_help"),
                          },
                        },
                        [
                          _c(
                            "b-input-group",
                            { staticClass: "input-group-merge" },
                            [
                              _c("b-form-input", {
                                attrs: {
                                  id: "account-new-password",
                                  type: _vm.passwordFieldTypeNew,
                                  name: "new-password",
                                  placeholder: _vm.$t(
                                    "new_password_placeholder"
                                  ),
                                },
                                model: {
                                  value: _vm.password.password,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.password, "password", $$v)
                                  },
                                  expression: "password.password",
                                },
                              }),
                              _vm._v(" "),
                              _c(
                                "b-input-group-append",
                                { attrs: { "is-text": "" } },
                                [
                                  _c("feather-icon", {
                                    staticClass: "cursor-pointer",
                                    attrs: { icon: _vm.passwordToggleIconNew },
                                    on: { click: _vm.togglePasswordNew },
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
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { md: "6" } },
                    [
                      _c(
                        "b-form-group",
                        {
                          attrs: {
                            "label-for": "account-retype-new-password",
                            label: _vm.$t("retype_password"),
                            description: _vm.$t("retype_password_help"),
                          },
                        },
                        [
                          _c(
                            "b-input-group",
                            { staticClass: "input-group-merge" },
                            [
                              _c("b-form-input", {
                                attrs: {
                                  id: "account-retype-new-password",
                                  type: _vm.passwordFieldTypeRetype,
                                  name: "retype-password",
                                  placeholder: _vm.$t(
                                    "retype_password_placeholder"
                                  ),
                                },
                                model: {
                                  value: _vm.password.password_confirmation,
                                  callback: function ($$v) {
                                    _vm.$set(
                                      _vm.password,
                                      "password_confirmation",
                                      $$v
                                    )
                                  },
                                  expression: "password.password_confirmation",
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
                                      icon: _vm.passwordToggleIconRetype,
                                    },
                                    on: { click: _vm.togglePasswordRetype },
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
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { cols: "12" } },
                    [
                      _c(
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
                          staticClass: "mt-1 mr-1",
                          attrs: { variant: "primary" },
                          on: { click: _vm.changePassword },
                        },
                        [
                          _vm._v(
                            "\n\t\t\t\t\t\t" +
                              _vm._s(_vm.$t("update")) +
                              "\n\t\t\t\t\t"
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "ripple",
                              rawName: "v-ripple.400",
                              value: "rgba(186, 191, 199, 0.15)",
                              expression: "'rgba(186, 191, 199, 0.15)'",
                              modifiers: { 400: true },
                            },
                          ],
                          staticClass: "mt-1",
                          attrs: {
                            type: "reset",
                            variant: "outline-secondary",
                          },
                        },
                        [
                          _vm._v(
                            "\n\t\t\t\t\t\t" +
                              _vm._s(_vm.$t("cancel")) +
                              "\n\t\t\t\t\t"
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/@core/comp-functions/forms/form-utils.js":
/*!*******************************************************************!*\
  !*** ./resources/js/src/@core/comp-functions/forms/form-utils.js ***!
  \*******************************************************************/
/*! exports provided: useInputImageRenderer, _ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useInputImageRenderer", function() { return useInputImageRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_", function() { return _; });
var useInputImageRenderer = function useInputImageRenderer(inputEl, callback) {
  var inputImageRenderer = function inputImageRenderer() {
    var file = inputEl.value.files[0];
    var reader = new FileReader();
    reader.addEventListener('load', function () {
      callback(reader.result);
    }, false);
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  return {
    inputImageRenderer: inputImageRenderer
  };
};
var _ = null;

/***/ }),

/***/ "./resources/js/src/assets/images/avatar_default.png":
/*!***********************************************************!*\
  !*** ./resources/js/src/assets/images/avatar_default.png ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/dental/resources/js/src/assets/images/avatar_default.png";

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
/* harmony import */ var D_projects_dental_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_projects_dental_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);



/* eslint-disable class-methods-use-this */

var Users = /*#__PURE__*/function () {
  function Users() {
    Object(D_projects_dental_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Users);
  }
  Object(D_projects_dental_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Users, [{
    key: "permissions",
    value:
    /**
     * Function to permissions
     * @return Promise
     */
    function permissions() {
      return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("api/permissions");
    }

    /**
     * Function to create new user
     * @param {Object} formdata
     * @return AxiosPromise
     */
  }, {
    key: "setUser",
    value: function setUser(formdata) {
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
    value: function getUserDetail(id) {
      return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("/api/users/".concat(id));
    }

    /**
     * Funtion to delete multi users
     * @param {Array} users
     * @return AxiosPromise
     */
  }, {
    key: "deleteUser",
    value: function deleteUser(id) {
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

/***/ "./resources/js/src/views/settings/profile/AccountSetting.vue":
/*!********************************************************************!*\
  !*** ./resources/js/src/views/settings/profile/AccountSetting.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AccountSetting_vue_vue_type_template_id_741da10a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccountSetting.vue?vue&type=template&id=741da10a& */ "./resources/js/src/views/settings/profile/AccountSetting.vue?vue&type=template&id=741da10a&");
/* harmony import */ var _AccountSetting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AccountSetting.vue?vue&type=script&lang=js& */ "./resources/js/src/views/settings/profile/AccountSetting.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AccountSetting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AccountSetting_vue_vue_type_template_id_741da10a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AccountSetting_vue_vue_type_template_id_741da10a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/settings/profile/AccountSetting.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/settings/profile/AccountSetting.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/settings/profile/AccountSetting.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSetting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountSetting.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/settings/profile/AccountSetting.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSetting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/settings/profile/AccountSetting.vue?vue&type=template&id=741da10a&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/settings/profile/AccountSetting.vue?vue&type=template&id=741da10a& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSetting_vue_vue_type_template_id_741da10a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountSetting.vue?vue&type=template&id=741da10a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/settings/profile/AccountSetting.vue?vue&type=template&id=741da10a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSetting_vue_vue_type_template_id_741da10a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSetting_vue_vue_type_template_id_741da10a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/settings/profile/AccountSettingGeneral.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/src/views/settings/profile/AccountSettingGeneral.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AccountSettingGeneral_vue_vue_type_template_id_d1f105c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccountSettingGeneral.vue?vue&type=template&id=d1f105c6& */ "./resources/js/src/views/settings/profile/AccountSettingGeneral.vue?vue&type=template&id=d1f105c6&");
/* harmony import */ var _AccountSettingGeneral_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AccountSettingGeneral.vue?vue&type=script&lang=js& */ "./resources/js/src/views/settings/profile/AccountSettingGeneral.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AccountSettingGeneral_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AccountSettingGeneral_vue_vue_type_template_id_d1f105c6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AccountSettingGeneral_vue_vue_type_template_id_d1f105c6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/settings/profile/AccountSettingGeneral.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/settings/profile/AccountSettingGeneral.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/settings/profile/AccountSettingGeneral.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingGeneral_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountSettingGeneral.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/settings/profile/AccountSettingGeneral.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingGeneral_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/settings/profile/AccountSettingGeneral.vue?vue&type=template&id=d1f105c6&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/views/settings/profile/AccountSettingGeneral.vue?vue&type=template&id=d1f105c6& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingGeneral_vue_vue_type_template_id_d1f105c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountSettingGeneral.vue?vue&type=template&id=d1f105c6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/settings/profile/AccountSettingGeneral.vue?vue&type=template&id=d1f105c6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingGeneral_vue_vue_type_template_id_d1f105c6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingGeneral_vue_vue_type_template_id_d1f105c6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/settings/profile/AccountSettingPassword.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/src/views/settings/profile/AccountSettingPassword.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AccountSettingPassword_vue_vue_type_template_id_15d3e5b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccountSettingPassword.vue?vue&type=template&id=15d3e5b6& */ "./resources/js/src/views/settings/profile/AccountSettingPassword.vue?vue&type=template&id=15d3e5b6&");
/* harmony import */ var _AccountSettingPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AccountSettingPassword.vue?vue&type=script&lang=js& */ "./resources/js/src/views/settings/profile/AccountSettingPassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AccountSettingPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AccountSettingPassword_vue_vue_type_template_id_15d3e5b6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AccountSettingPassword_vue_vue_type_template_id_15d3e5b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/settings/profile/AccountSettingPassword.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/settings/profile/AccountSettingPassword.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/views/settings/profile/AccountSettingPassword.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountSettingPassword.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/settings/profile/AccountSettingPassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/settings/profile/AccountSettingPassword.vue?vue&type=template&id=15d3e5b6&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/src/views/settings/profile/AccountSettingPassword.vue?vue&type=template&id=15d3e5b6& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingPassword_vue_vue_type_template_id_15d3e5b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountSettingPassword.vue?vue&type=template&id=15d3e5b6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/settings/profile/AccountSettingPassword.vue?vue&type=template&id=15d3e5b6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingPassword_vue_vue_type_template_id_15d3e5b6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingPassword_vue_vue_type_template_id_15d3e5b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);