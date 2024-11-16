(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[142],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/patients/SearchPatient.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/patients/SearchPatient.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/router */ "./resources/js/src/router/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _core_mixins_ui_transition__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/mixins/ui/transition */ "./resources/js/src/@core/mixins/ui/transition.js");
/* harmony import */ var _providers_Patients__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/providers/Patients */ "./resources/js/src/providers/Patients.js");





//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







var PatientResource = new _providers_Patients__WEBPACK_IMPORTED_MODULE_10__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'SearchPatients',
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_8__["default"],
    'b-modal': bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__["VBModal"],
    'b-toggle': bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__["VBToggle"]
  },
  components: {
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__["BRow"],
    BSidebar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__["BSidebar"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__["BCol"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__["BCard"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__["BCardBody"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__["BCardText"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__["BButton"],
    BAlert: bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__["BAlert"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__["BLink"],
    BOverlay: bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__["BOverlay"],
    BSpinner: bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__["BSpinner"],
    BTable: bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__["BTable"],
    BTableLite: bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__["BTableLite"],
    BFormCheckbox: bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__["BFormCheckbox"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__["BFormGroup"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__["BFormInput"],
    BModal: bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__["BModal"],
    VBModal: bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__["VBModal"],
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__["BForm"],
    BIcon: bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__["BIcon"],
    BInputGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__["BInputGroup"],
    BInputGroupAppend: bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__["BInputGroupAppend"],
    BInputGroupPrepend: bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__["BInputGroupPrepend"],
    BFormTextarea: bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__["BFormTextarea"],
    BFormTags: bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__["BFormTags"],
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_5__["default"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__["BAvatar"]
  },
  mixins: [_core_mixins_ui_transition__WEBPACK_IMPORTED_MODULE_9__["heightTransition"]],
  props: ["active"],
  data: function data() {
    return {
      loading: false,
      columns: [{
        key: "actions",
        label: ' '
      }, {
        key: "name",
        label: this.$t("patients.table.name")
      }, {
        key: "document",
        label: this.$t("patients.table.document_type")
      }, {
        key: "phone",
        label: this.$t("patients.table.phone")
      }],
      patients: [],
      searchQuery: null
    };
  },
  methods: {
    selectRow: function selectRow(item) {
      this.$emit("selected", Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])({}, item[0]));
      this.close();
    },
    choosePatient: function choosePatient(item) {
      this.$emit("selected", Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])({}, item));
      this.close();
    },
    searchPatients: function searchPatients() {
      var _this = this;
      return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee() {
        var _yield$PatientResourc, data;
        return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _this.loading = true;
              _context.next = 3;
              return PatientResource.search(_this.searchQuery);
            case 3:
              _yield$PatientResourc = _context.sent;
              data = _yield$PatientResourc.data;
              _this.patients = data.data;
              _this.loading = false;
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    close: function close() {
      this.$refs['modal-search-patient'].hide();
      this.$emit("close");
    }
  },
  watch: {
    active: function active(value) {
      if (value) {
        this.patients = [];
        this.searchQuery = null;
        this.$refs['modal-search-patient'].toggle();
      } else {
        this.close();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/patients/SearchPatient.vue?vue&type=template&id=301f218c&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/patients/SearchPatient.vue?vue&type=template&id=301f218c& ***!
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
    [
      _c(
        "b-modal",
        {
          ref: "modal-search-patient",
          attrs: {
            id: "modal-search-patient",
            title: _vm.$t("patients.plural"),
            "ok-only": "",
            "ok-title": _vm.$t("accept"),
            size: "lg",
          },
          on: { hidden: _vm.close },
        },
        [
          _c(
            "div",
            { staticClass: "m-2" },
            [
              _c(
                "b-row",
                [
                  _c("b-col", { attrs: { cols: "12", md: "12" } }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "d-flex align-items-center justify-content-end",
                      },
                      [
                        _c(
                          "b-input-group",
                          [
                            _c("b-form-input", {
                              staticClass: "d-inline-block _mr-1",
                              attrs: {
                                size: "sm",
                                autofocus: "",
                                autocomplete: "off",
                                placeholder: _vm.$t("patients.search_options"),
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
                                  return _vm.searchPatients($event)
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
                                    attrs: { size: "sm", variant: "primary" },
                                    on: { click: _vm.searchPatients },
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
                  ]),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-table",
            {
              ref: "refPatientsListTable",
              staticClass:
                "position-relative b-table-small text-small small table-samll",
              attrs: {
                items: _vm.patients,
                responsive: "",
                hover: "",
                fields: _vm.columns,
                "primary-key": "id",
                "show-empty": "",
                "empty-text": _vm.$t("datatables.sZeroRecords"),
                "busy.sync": "loading",
                small: "",
                selectable: "",
                "select-mode": "single",
              },
              on: { "row-selected": _vm.selectRow },
              scopedSlots: _vm._u([
                {
                  key: "cell(name)",
                  fn: function (data) {
                    return [
                      _c("div", { staticClass: "text-wrap" }, [
                        _vm._v(
                          "\n                    " +
                            _vm._s(data.item.full_name) +
                            " "
                        ),
                        _c("br"),
                        _vm._v(" "),
                        _c(
                          "span",
                          { staticClass: "badge badge-light-info float-left" },
                          [_vm._v(_vm._s(data.item.email))]
                        ),
                      ]),
                    ]
                  },
                },
                {
                  key: "cell(document)",
                  fn: function (data) {
                    return [_c("span", [_vm._v(_vm._s(data.item.rut))])]
                  },
                },
                {
                  key: "cell(phone)",
                  fn: function (data) {
                    return [_c("span", [_vm._v(_vm._s(data.item.cellphone))])]
                  },
                },
                {
                  key: "cell(actions)",
                  fn: function (data) {
                    return [
                      _c(
                        "div",
                        { staticClass: "text-nowrap" },
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
                              attrs: { size: "sm", variant: "outline-primary" },
                              on: {
                                click: function ($event) {
                                  return _vm.choosePatient(data.item)
                                },
                              },
                            },
                            [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(_vm.$t("to_choose")) +
                                  "\n                    "
                              ),
                            ]
                          ),
                        ],
                        1
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
                      { staticClass: "d-flex justify-content-center mb-1" },
                      [
                        _c("b-spinner", {
                          staticClass: "mr-1",
                          staticStyle: { width: "3rem", height: "3rem" },
                          attrs: { label: "Loading...", variant: "primary" },
                        }),
                      ],
                      1
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/@core/components/patients/SearchPatient.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/src/@core/components/patients/SearchPatient.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SearchPatient_vue_vue_type_template_id_301f218c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchPatient.vue?vue&type=template&id=301f218c& */ "./resources/js/src/@core/components/patients/SearchPatient.vue?vue&type=template&id=301f218c&");
/* harmony import */ var _SearchPatient_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchPatient.vue?vue&type=script&lang=js& */ "./resources/js/src/@core/components/patients/SearchPatient.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SearchPatient_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SearchPatient_vue_vue_type_template_id_301f218c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SearchPatient_vue_vue_type_template_id_301f218c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/@core/components/patients/SearchPatient.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/@core/components/patients/SearchPatient.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/@core/components/patients/SearchPatient.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchPatient_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchPatient.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/patients/SearchPatient.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchPatient_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/@core/components/patients/SearchPatient.vue?vue&type=template&id=301f218c&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/@core/components/patients/SearchPatient.vue?vue&type=template&id=301f218c& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchPatient_vue_vue_type_template_id_301f218c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchPatient.vue?vue&type=template&id=301f218c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/patients/SearchPatient.vue?vue&type=template&id=301f218c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchPatient_vue_vue_type_template_id_301f218c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchPatient_vue_vue_type_template_id_301f218c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ })

}]);