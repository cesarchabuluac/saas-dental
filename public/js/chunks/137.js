(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[137],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/miscellaneous/NotAuthorized.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/miscellaneous/NotAuthorized.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _core_layouts_components_Logo_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/layouts/components/Logo.vue */ "./resources/js/src/@core/layouts/components/Logo.vue");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/index */ "./resources/js/src/store/index.js");
/* harmony import */ var _auth_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/auth/utils */ "./resources/js/src/auth/utils.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* eslint-disable global-require */




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BLink"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BImg"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"],
    VuexyLogo: _core_layouts_components_Logo_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      downImg: __webpack_require__(/*! @/assets/images/pages/not-authorized.svg */ "./resources/js/src/assets/images/pages/not-authorized.svg")
    };
  },
  computed: {
    imgUrl: function imgUrl() {
      if (_store_index__WEBPACK_IMPORTED_MODULE_2__["default"].state.appConfig.layout.skin === "dark") {
        this.downImg = __webpack_require__(/*! @/assets/images/pages/not-authorized-dark.svg */ "./resources/js/src/assets/images/pages/not-authorized-dark.svg");
        return this.downImg;
      }
      return this.downImg;
    }
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/miscellaneous/NotAuthorized.vue?vue&type=style&index=0&id=158135e8&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/miscellaneous/NotAuthorized.vue?vue&type=style&index=0&id=158135e8&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".misc-wrapper {\n  display: flex;\n  flex-basis: 100%;\n  min-height: 100vh;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n}\n.misc-wrapper .misc-inner {\n  position: relative;\n  max-width: 750px;\n}\n.misc-wrapper .brand-logo {\n  display: flex;\n  justify-content: center;\n  position: absolute;\n  top: 2rem;\n}\n[dir] .misc-wrapper .brand-logo {\n  margin: 0;\n}\n[dir=ltr] .misc-wrapper .brand-logo {\n  left: 2rem;\n}\n[dir=rtl] .misc-wrapper .brand-logo {\n  right: 2rem;\n}\n.misc-wrapper .brand-logo .brand-text {\n  font-weight: 600;\n}\n@media (max-height: 625px) {\n[dir] .misc-wrapper .misc-inner {\n    margin-top: 4rem;\n}\n}\n.brand-logo svg {\n  height: 28px;\n  width: 40.95px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/miscellaneous/NotAuthorized.vue?vue&type=style&index=0&id=158135e8&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/miscellaneous/NotAuthorized.vue?vue&type=style&index=0&id=158135e8&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--12-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NotAuthorized.vue?vue&type=style&index=0&id=158135e8&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/miscellaneous/NotAuthorized.vue?vue&type=style&index=0&id=158135e8&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/Logo.vue?vue&type=template&id=46f77075&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/components/Logo.vue?vue&type=template&id=46f77075& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
    "svg",
    {
      attrs: {
        viewBox: "0 0 139 95",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        height: "24",
      },
    },
    [
      _c(
        "defs",
        [
          _c(
            "linearGradient",
            {
              attrs: {
                id: "linearGradient-1",
                x1: "100%",
                y1: "10.5120544%",
                x2: "50%",
                y2: "89.4879456%",
              },
            },
            [
              _c("stop", { attrs: { "stop-color": "#000000", offset: "0%" } }),
              _vm._v(" "),
              _c("stop", {
                attrs: { "stop-color": "#FFFFFF", offset: "100%" },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "linearGradient",
            {
              attrs: {
                id: "linearGradient-2",
                x1: "64.0437835%",
                y1: "46.3276743%",
                x2: "37.373316%",
                y2: "100%",
              },
            },
            [
              _c("stop", {
                attrs: {
                  "stop-color": "#EEEEEE",
                  "stop-opacity": "0",
                  offset: "0%",
                },
              }),
              _vm._v(" "),
              _c("stop", {
                attrs: { "stop-color": "#FFFFFF", offset: "100%" },
              }),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "g",
        {
          attrs: {
            id: "Page-1",
            stroke: "none",
            "stroke-width": "1",
            fill: "none",
            "fill-rule": "evenodd",
          },
        },
        [
          _c(
            "g",
            {
              attrs: {
                id: "Artboard",
                transform: "translate(-400.000000, -178.000000)",
              },
            },
            [
              _c(
                "g",
                {
                  attrs: {
                    id: "Group",
                    transform: "translate(400.000000, 178.000000)",
                  },
                },
                [
                  _c("path", {
                    staticClass: "text-primary",
                    staticStyle: { fill: "currentColor" },
                    attrs: {
                      id: "Path",
                      d: "M-5.68434189e-14,2.84217094e-14 L39.1816085,2.84217094e-14 L69.3453773,32.2519224 L101.428699,2.84217094e-14 L138.784583,2.84217094e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L6.71554594,44.4188507 C2.46876683,39.9813776 0.345377275,35.1089553 0.345377275,29.8015838 C0.345377275,24.4942122 0.230251516,14.560351 -5.68434189e-14,2.84217094e-14 Z",
                    },
                  }),
                  _vm._v(" "),
                  _c("path", {
                    attrs: {
                      id: "Path1",
                      d: "M69.3453773,32.2519224 L101.428699,1.42108547e-14 L138.784583,1.42108547e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L32.8435758,70.5039241 L69.3453773,32.2519224 Z",
                      fill: "url(#linearGradient-1)",
                      opacity: "0.2",
                    },
                  }),
                  _vm._v(" "),
                  _c("polygon", {
                    attrs: {
                      id: "Path-2",
                      fill: "#000000",
                      opacity: "0.049999997",
                      points:
                        "69.3922914 32.4202615 32.8435758 70.5039241 54.0490008 16.1851325",
                    },
                  }),
                  _vm._v(" "),
                  _c("polygon", {
                    attrs: {
                      id: "Path-21",
                      fill: "#000000",
                      opacity: "0.099999994",
                      points:
                        "69.3922914 32.4202615 32.8435758 70.5039241 58.3683556 20.7402338",
                    },
                  }),
                  _vm._v(" "),
                  _c("polygon", {
                    attrs: {
                      id: "Path-3",
                      fill: "url(#linearGradient-2)",
                      opacity: "0.099999994",
                      points:
                        "101.428699 0 83.0667527 94.1480575 130.378721 47.0740288",
                    },
                  }),
                ]
              ),
            ]
          ),
        ]
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/miscellaneous/NotAuthorized.vue?vue&type=template&id=158135e8&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/miscellaneous/NotAuthorized.vue?vue&type=template&id=158135e8& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
    "div",
    { staticClass: "misc-wrapper" },
    [
      _c("b-link", { staticClass: "brand-logo" }, [
        _c("h2", { staticClass: "brand-text text-primary ml-1" }, [
          _vm._v(_vm._s(_vm.findSetting("app_name"))),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "misc-inner p-2 p-sm-3" }, [
        _c(
          "div",
          { staticClass: "w-100 text-center" },
          [
            _c("h2", { staticClass: "mb-1" }, [
              _vm._v("You are not authorized! 🔐"),
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "mb-2" }, [
              _vm._v(
                "\n                You don’t have permission to access this page. Go Home!!\n            "
              ),
            ]),
            _vm._v(" "),
            _c(
              "b-button",
              {
                staticClass: "mb-1 btn-sm-block",
                attrs: {
                  variant: "primary",
                  to: _vm.$router.push({ name: "home" }),
                },
              },
              [_vm._v("Back to Home")]
            ),
            _vm._v(" "),
            _c("b-img", {
              attrs: { fluid: "", src: _vm.imgUrl, alt: "Not authorized page" },
            }),
          ],
          1
        ),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/@core/auth/jwt/jwtDefaultConfig.js":
/*!*************************************************************!*\
  !*** ./resources/js/src/@core/auth/jwt/jwtDefaultConfig.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  // Endpoints
  loginEndpoint: '/jwt/login',
  registerEndpoint: '/jwt/register',
  refreshEndpoint: '/jwt/refresh-token',
  logoutEndpoint: '/jwt/logout',
  // This will be prefixed in authorization header with token
  // e.g. Authorization: Bearer <token>
  tokenType: 'Bearer',
  // Value of this property will be used as key to store JWT token in storage
  storageTokenKeyName: 'accessToken',
  storageRefreshTokenKeyName: 'refreshToken'
});

/***/ }),

/***/ "./resources/js/src/@core/auth/jwt/jwtService.js":
/*!*******************************************************!*\
  !*** ./resources/js/src/@core/auth/jwt/jwtService.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return JwtService; });
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _jwtDefaultConfig__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./jwtDefaultConfig */ "./resources/js/src/@core/auth/jwt/jwtDefaultConfig.js");









var JwtService = /*#__PURE__*/function () {
  function JwtService(axiosIns, jwtOverrideConfig) {
    var _this = this;
    Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, JwtService);
    // Will be used by this service for making API calls
    Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "axiosIns", null);
    // jwtConfig <= Will be used by this service
    Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "jwtConfig", Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _jwtDefaultConfig__WEBPACK_IMPORTED_MODULE_8__["default"]));
    // For Refreshing Token
    Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "isAlreadyFetchingAccessToken", false);
    // For Refreshing Token
    Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "subscribers", []);
    this.axiosIns = axiosIns;
    this.jwtConfig = Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.jwtConfig), jwtOverrideConfig);

    // Request Interceptor
    this.axiosIns.interceptors.request.use(function (config) {
      // Get token from localStorage
      var accessToken = _this.getToken();

      // If token is present add it to request's Authorization Header
      if (accessToken) {
        // eslint-disable-next-line no-param-reassign
        config.headers.Authorization = "".concat(_this.jwtConfig.tokenType, " ").concat(accessToken);
      }
      return config;
    }, function (error) {
      return Promise.reject(error);
    });

    // Add request/response interceptor
    this.axiosIns.interceptors.response.use(function (response) {
      return response;
    }, function (error) {
      // const { config, response: { status } } = error
      var config = error.config,
        response = error.response;
      var originalRequest = config;

      // if (status === 401) {
      if (response && response.status === 401) {
        if (!_this.isAlreadyFetchingAccessToken) {
          _this.isAlreadyFetchingAccessToken = true;
          _this.refreshToken().then(function (r) {
            _this.isAlreadyFetchingAccessToken = false;

            // Update accessToken in localStorage
            _this.setToken(r.data.accessToken);
            _this.setRefreshToken(r.data.refreshToken);
            _this.onAccessTokenFetched(r.data.accessToken);
          });
        }
        var retryOriginalRequest = new Promise(function (resolve) {
          _this.addSubscriber(function (accessToken) {
            // Make sure to assign accessToken according to your response.
            // Check: https://pixinvent.ticksy.com/ticket/2413870
            // Change Authorization header
            originalRequest.headers.Authorization = "".concat(_this.jwtConfig.tokenType, " ").concat(accessToken);
            resolve(_this.axiosIns(originalRequest));
          });
        });
        return retryOriginalRequest;
      }
      return Promise.reject(error);
    });
  }
  Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(JwtService, [{
    key: "onAccessTokenFetched",
    value: function onAccessTokenFetched(accessToken) {
      this.subscribers = this.subscribers.filter(function (callback) {
        return callback(accessToken);
      });
    }
  }, {
    key: "addSubscriber",
    value: function addSubscriber(callback) {
      this.subscribers.push(callback);
    }
  }, {
    key: "getToken",
    value: function getToken() {
      return localStorage.getItem(this.jwtConfig.storageTokenKeyName);
    }
  }, {
    key: "getRefreshToken",
    value: function getRefreshToken() {
      return localStorage.getItem(this.jwtConfig.storageRefreshTokenKeyName);
    }
  }, {
    key: "setToken",
    value: function setToken(value) {
      localStorage.setItem(this.jwtConfig.storageTokenKeyName, value);
    }
  }, {
    key: "setRefreshToken",
    value: function setRefreshToken(value) {
      localStorage.setItem(this.jwtConfig.storageRefreshTokenKeyName, value);
    }
  }, {
    key: "login",
    value: function login() {
      var _this$axiosIns;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return (_this$axiosIns = this.axiosIns).post.apply(_this$axiosIns, [this.jwtConfig.loginEndpoint].concat(args));
    }
  }, {
    key: "register",
    value: function register() {
      var _this$axiosIns2;
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      return (_this$axiosIns2 = this.axiosIns).post.apply(_this$axiosIns2, [this.jwtConfig.registerEndpoint].concat(args));
    }
  }, {
    key: "refreshToken",
    value: function refreshToken() {
      return this.axiosIns.post(this.jwtConfig.refreshEndpoint, {
        refreshToken: this.getRefreshToken()
      });
    }
  }]);
  return JwtService;
}();


/***/ }),

/***/ "./resources/js/src/@core/auth/jwt/useJwt.js":
/*!***************************************************!*\
  !*** ./resources/js/src/@core/auth/jwt/useJwt.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useJwt; });
/* harmony import */ var _jwtService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jwtService */ "./resources/js/src/@core/auth/jwt/jwtService.js");

function useJwt(axiosIns, jwtOverrideConfig) {
  var jwt = new _jwtService__WEBPACK_IMPORTED_MODULE_0__["default"](axiosIns, jwtOverrideConfig);
  return {
    jwt: jwt
  };
}

/***/ }),

/***/ "./resources/js/src/@core/layouts/components/Logo.vue":
/*!************************************************************!*\
  !*** ./resources/js/src/@core/layouts/components/Logo.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Logo_vue_vue_type_template_id_46f77075___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logo.vue?vue&type=template&id=46f77075& */ "./resources/js/src/@core/layouts/components/Logo.vue?vue&type=template&id=46f77075&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Logo_vue_vue_type_template_id_46f77075___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Logo_vue_vue_type_template_id_46f77075___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/@core/layouts/components/Logo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/@core/layouts/components/Logo.vue?vue&type=template&id=46f77075&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/components/Logo.vue?vue&type=template&id=46f77075& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_template_id_46f77075___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Logo.vue?vue&type=template&id=46f77075& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/Logo.vue?vue&type=template&id=46f77075&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_template_id_46f77075___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_template_id_46f77075___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/assets/images/pages/not-authorized-dark.svg":
/*!**********************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/not-authorized-dark.svg ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/saas-dental/resources/js/src/assets/images/pages/not-authorized-dark.svg";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/not-authorized.svg":
/*!*****************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/not-authorized.svg ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/saas-dental/resources/js/src/assets/images/pages/not-authorized.svg";

/***/ }),

/***/ "./resources/js/src/auth/jwt/useJwt.js":
/*!*********************************************!*\
  !*** ./resources/js/src/auth/jwt/useJwt.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_auth_jwt_useJwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/auth/jwt/useJwt */ "./resources/js/src/@core/auth/jwt/useJwt.js");
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @axios */ "./resources/js/src/libs/axios.js");


var _useJwt = Object(_core_auth_jwt_useJwt__WEBPACK_IMPORTED_MODULE_0__["default"])(_axios__WEBPACK_IMPORTED_MODULE_1__["default"], {}),
  jwt = _useJwt.jwt;
/* harmony default export */ __webpack_exports__["default"] = (jwt);

/***/ }),

/***/ "./resources/js/src/auth/utils.js":
/*!****************************************!*\
  !*** ./resources/js/src/auth/utils.js ***!
  \****************************************/
/*! exports provided: isUserLoggedIn, getUserData, getHomeRouteForLoggedInUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUserLoggedIn", function() { return isUserLoggedIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserData", function() { return getUserData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHomeRouteForLoggedInUser", function() { return getHomeRouteForLoggedInUser; });
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth_jwt_useJwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/auth/jwt/useJwt */ "./resources/js/src/auth/jwt/useJwt.js");



/**
 * Return if user is logged in
 * This is completely up to you and how you want to store the token in your frontend application
 * e.g. If you are using cookies to store the application please update this function
 */
// eslint-disable-next-line arrow-body-style
var isUserLoggedIn = function isUserLoggedIn() {
  return localStorage.getItem('userData') && localStorage.getItem(_auth_jwt_useJwt__WEBPACK_IMPORTED_MODULE_1__["default"].jwtConfig.storageTokenKeyName);
};
var getUserData = function getUserData() {
  return JSON.parse(localStorage.getItem('userData'));
};

/**
 * This function is used for demo purpose route navigation
 * In real app you won't need this function because your app will navigate to same route for each users regardless of ability
 * Please note role field is just for showing purpose it's not used by anything in frontend
 * We are checking role just for ease
 * NOTE: If you have different pages to navigate based on user ability then this function can be useful. However, you need to update it.
 * @param {String} userRole Role of user
 */
var getHomeRouteForLoggedInUser = function getHomeRouteForLoggedInUser(userRole) {
  if (userRole === 'admin') return '/';
  if (userRole === 'client') return {
    name: 'access-control'
  };
  return {
    name: 'auth-login'
  };
};

/***/ }),

/***/ "./resources/js/src/views/pages/miscellaneous/NotAuthorized.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/src/views/pages/miscellaneous/NotAuthorized.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NotAuthorized_vue_vue_type_template_id_158135e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotAuthorized.vue?vue&type=template&id=158135e8& */ "./resources/js/src/views/pages/miscellaneous/NotAuthorized.vue?vue&type=template&id=158135e8&");
/* harmony import */ var _NotAuthorized_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotAuthorized.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/miscellaneous/NotAuthorized.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _NotAuthorized_vue_vue_type_style_index_0_id_158135e8_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NotAuthorized.vue?vue&type=style&index=0&id=158135e8&lang=scss& */ "./resources/js/src/views/pages/miscellaneous/NotAuthorized.vue?vue&type=style&index=0&id=158135e8&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _NotAuthorized_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NotAuthorized_vue_vue_type_template_id_158135e8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NotAuthorized_vue_vue_type_template_id_158135e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/miscellaneous/NotAuthorized.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/miscellaneous/NotAuthorized.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/miscellaneous/NotAuthorized.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotAuthorized_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NotAuthorized.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/miscellaneous/NotAuthorized.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotAuthorized_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/miscellaneous/NotAuthorized.vue?vue&type=style&index=0&id=158135e8&lang=scss&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/miscellaneous/NotAuthorized.vue?vue&type=style&index=0&id=158135e8&lang=scss& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotAuthorized_vue_vue_type_style_index_0_id_158135e8_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--12-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NotAuthorized.vue?vue&type=style&index=0&id=158135e8&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/miscellaneous/NotAuthorized.vue?vue&type=style&index=0&id=158135e8&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotAuthorized_vue_vue_type_style_index_0_id_158135e8_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotAuthorized_vue_vue_type_style_index_0_id_158135e8_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotAuthorized_vue_vue_type_style_index_0_id_158135e8_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotAuthorized_vue_vue_type_style_index_0_id_158135e8_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/miscellaneous/NotAuthorized.vue?vue&type=template&id=158135e8&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/miscellaneous/NotAuthorized.vue?vue&type=template&id=158135e8& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotAuthorized_vue_vue_type_template_id_158135e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NotAuthorized.vue?vue&type=template&id=158135e8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/miscellaneous/NotAuthorized.vue?vue&type=template&id=158135e8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotAuthorized_vue_vue_type_template_id_158135e8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotAuthorized_vue_vue_type_template_id_158135e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);