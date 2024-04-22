(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[45],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/app-collapse/AppCollapse.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/app-collapse/AppCollapse.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");

//
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
  props: {
    accordion: {
      type: Boolean,
      "default": false
    },
    hover: {
      type: Boolean,
      "default": false
    },
    type: {
      type: String,
      "default": 'default'
    }
  },
  data: function data() {
    return {
      collapseID: ''
    };
  },
  computed: {
    collapseClasses: function collapseClasses() {
      var classes = [];

      // Collapse Type
      var collapseVariants = {
        "default": 'collapse-default',
        border: 'collapse-border',
        shadow: 'collapse-shadow',
        margin: 'collapse-margin'
      };
      classes.push(collapseVariants[this.type]);
      return classes;
    }
  },
  created: function created() {
    this.collapseID = Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"])();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/app-collapse/AppCollapseItem.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/app-collapse/AppCollapseItem.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BCardHeader: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardHeader"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardBody"],
    BCollapse: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCollapse"]
  },
  props: {
    isVisible: {
      type: Boolean,
      "default": false
    },
    title: {
      type: String,
      required: true
    }
  },
  data: function data() {
    return {
      visible: false,
      collapseItemID: '',
      openOnHover: this.$parent.hover
    };
  },
  computed: {
    accordion: function accordion() {
      return this.$parent.accordion ? "accordion-".concat(this.$parent.collapseID) : null;
    }
  },
  created: function created() {
    this.collapseItemID = Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"])();
    this.visible = this.isVisible;
  },
  methods: {
    updateVisible: function updateVisible() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.visible = val;
      this.$emit('visible', val);
    },
    collapseOpen: function collapseOpen() {
      if (this.openOnHover) this.updateVisible(true);
    },
    collapseClose: function collapseClose() {
      if (this.openOnHover) this.updateVisible(false);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/faq/Faq.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/faq/Faq.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _FaqQuestionAnswer_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FaqQuestionAnswer.vue */ "./resources/js/src/views/pages/faq/FaqQuestionAnswer.vue");
/* harmony import */ var _providers_Faqs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/providers/Faqs */ "./resources/js/src/providers/Faqs.js");






//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





var FaqResource = new _providers_Faqs__WEBPACK_IMPORTED_MODULE_9__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_7__["BForm"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_7__["BCard"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_7__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_7__["BCol"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_7__["BAvatar"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_7__["BCardBody"],
    BInputGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_7__["BInputGroup"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_7__["BFormInput"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_7__["BCardText"],
    BInputGroupPrepend: bootstrap_vue__WEBPACK_IMPORTED_MODULE_7__["BInputGroupPrepend"],
    BTabs: bootstrap_vue__WEBPACK_IMPORTED_MODULE_7__["BTabs"],
    BTab: bootstrap_vue__WEBPACK_IMPORTED_MODULE_7__["BTab"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_7__["BImg"],
    FaqQuestionAnswer: _FaqQuestionAnswer_vue__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  data: function data() {
    return {
      loading: false,
      faqs: [],
      faqSearchQuery: '',
      searchResults: []
    };
  },
  computed: {
    filteredFaqs: function filteredFaqs() {
      return this.searchResults.length > 0 ? this.searchResults : this.faqs;
    }
  },
  watch: {
    faqSearchQuery: {
      immediate: true,
      handler: function handler() {
        this.searchResults = this.performSearch();
      }
    }
  },
  mounted: function mounted() {
    var _this = this;
    return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee() {
      return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _this.getFaqs();
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  methods: {
    getFaqs: function getFaqs() {
      var _this2 = this;
      return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee2() {
        var _yield$FaqResource$in, data;
        return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _this2.loading = true;
              _context2.next = 3;
              return FaqResource.index({
                all: true
              });
            case 3:
              _yield$FaqResource$in = _context2.sent;
              data = _yield$FaqResource$in.data;
              _this2.loading = false;
              _this2.faqs = data.data;
            case 7:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    performSearch: function performSearch() {
      var query = this.faqSearchQuery.toLowerCase(); // Convertir la cadena de búsqueda a minúsculas
      return this.faqs.filter(function (faq) {
        // Verificar si la cadena de búsqueda está presente en cualquier propiedad del FAQ
        return faq.title.toLowerCase().includes(query) || faq.subtitle.toLowerCase().includes(query) || faq.qandA.some(function (qanda) {
          return qanda.question.toLowerCase().includes(query) || qanda.ans.toLowerCase().includes(query);
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/faq/FaqQuestionAnswer.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/faq/FaqQuestionAnswer.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _core_components_app_collapse_AppCollapse_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/components/app-collapse/AppCollapse.vue */ "./resources/js/src/@core/components/app-collapse/AppCollapse.vue");
/* harmony import */ var _core_components_app_collapse_AppCollapseItem_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/app-collapse/AppCollapseItem.vue */ "./resources/js/src/@core/components/app-collapse/AppCollapseItem.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAvatar"],
    AppCollapseItem: _core_components_app_collapse_AppCollapseItem_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    AppCollapse: _core_components_app_collapse_AppCollapse_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    options: {
      type: Object,
      "default": function _default() {}
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/faq/Faq.vue?vue&type=style&index=0&id=2f3ae4d0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/faq/Faq.vue?vue&type=style&index=0&id=2f3ae4d0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "[dir] .faq-search {\n  background-size: cover;\n  background-color: rgba(115, 103, 240, 0.12) !important;\n}\n[dir] .faq-search .faq-search-input .input-group:focus-within {\n  box-shadow: none;\n}\n[dir] .faq-contact .faq-contact-card {\n  background-color: rgba(186, 191, 199, 0.12);\n}\n@media (min-width: 992px) {\n[dir] .faq-search .card-body {\n    padding: 8rem !important;\n}\n}\n@media (min-width: 768px) and (max-width: 991.98px) {\n[dir] .faq-search .card-body {\n    padding: 6rem !important;\n}\n}\n@media (min-width: 768px) {\n.faq-search .faq-search-input .input-group {\n    width: 576px;\n}\n[dir] .faq-search .faq-search-input .input-group {\n    margin: 0 auto;\n}\n.faq-navigation {\n    height: 550px;\n}\n}\n.faq-navigation .nav.nav-pills {\n  height: 100%;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/faq/Faq.vue?vue&type=style&index=0&id=2f3ae4d0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/faq/Faq.vue?vue&type=style&index=0&id=2f3ae4d0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Faq.vue?vue&type=style&index=0&id=2f3ae4d0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/faq/Faq.vue?vue&type=style&index=0&id=2f3ae4d0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/app-collapse/AppCollapse.vue?vue&type=template&id=ddcc2570&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/app-collapse/AppCollapse.vue?vue&type=template&id=ddcc2570& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "collapse-icon",
      class: _vm.collapseClasses,
      attrs: { role: "tablist" },
    },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/app-collapse/AppCollapseItem.vue?vue&type=template&id=47019a0a&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/app-collapse/AppCollapseItem.vue?vue&type=template&id=47019a0a& ***!
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
    "b-card",
    {
      class: { open: _vm.visible },
      attrs: { "no-body": "" },
      on: { mouseenter: _vm.collapseOpen, mouseleave: _vm.collapseClose },
    },
    [
      _c(
        "b-card-header",
        {
          class: { collapsed: !_vm.visible },
          attrs: {
            "aria-expanded": _vm.visible ? "true" : "false",
            "aria-controls": _vm.collapseItemID,
            role: "tab",
            "data-toggle": "collapse",
          },
          on: {
            click: function ($event) {
              return _vm.updateVisible(!_vm.visible)
            },
          },
        },
        [
          _vm._t("header", [
            _c("span", { staticClass: "lead collapse-title" }, [
              _vm._v(_vm._s(_vm.title)),
            ]),
          ]),
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "b-collapse",
        {
          attrs: {
            id: _vm.collapseItemID,
            accordion: _vm.accordion,
            role: "tabpanel",
          },
          model: {
            value: _vm.visible,
            callback: function ($$v) {
              _vm.visible = $$v
            },
            expression: "visible",
          },
        },
        [_c("b-card-body", [_vm._t("default")], 2)],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/faq/Faq.vue?vue&type=template&id=2f3ae4d0&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/faq/Faq.vue?vue&type=template&id=2f3ae4d0& ***!
  \***************************************************************************************************************************************************************************************************************/
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
    _c(
      "section",
      { attrs: { id: "faq-search-filter" } },
      [
        _c(
          "b-card",
          {
            staticClass: "faq-search",
            style: {
              backgroundImage:
                "url(" + __webpack_require__(/*! @/assets/images/banner/banner.png */ "./resources/js/src/assets/images/banner/banner.png") + ")",
            },
            attrs: { "no-body": "" },
          },
          [
            _c(
              "b-card-body",
              { staticClass: "text-center" },
              [
                _c("h2", { staticClass: "text-primary" }, [
                  _vm._v("\n         Respondamos algunas preguntas\n        "),
                ]),
                _vm._v(" "),
                _c("b-card-text", { staticClass: "mb-2" }, [
                  _vm._v(
                    "\n          o elija una categoría para encontrar rápidamente la ayuda que necesita\n        "
                  ),
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "faq-search-input" },
                  [
                    _c(
                      "b-input-group",
                      { staticClass: "input-group-merge" },
                      [
                        _c(
                          "b-input-group-prepend",
                          { attrs: { "is-text": "" } },
                          [
                            _c("feather-icon", {
                              attrs: { icon: "SearchIcon" },
                            }),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("b-form-input", {
                          attrs: {
                            id: "searchbar",
                            placeholder: "Buscar preguntas frecuentes...",
                          },
                          model: {
                            value: _vm.faqSearchQuery,
                            callback: function ($$v) {
                              _vm.faqSearchQuery = $$v
                            },
                            expression: "faqSearchQuery",
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
        ),
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "section",
      { attrs: { id: "faq-tabs" } },
      [
        _c(
          "b-tabs",
          {
            attrs: {
              vertical: "",
              "content-class": "col-12 col-md-8 col-lg-9",
              pills: "",
              "nav-wrapper-class": "faq-navigation col-md-4 col-lg-3 col-12",
              "nav-class": "nav-left",
            },
            scopedSlots: _vm._u([
              {
                key: "tabs-end",
                fn: function () {
                  return [
                    _c("b-img", {
                      staticClass: "d-none d-md-block mt-auto",
                      attrs: {
                        fluid: "",
                        src: __webpack_require__(/*! @/assets/images/illustration/faq-illustrations.svg */ "./resources/js/src/assets/images/illustration/faq-illustrations.svg"),
                      },
                    }),
                  ]
                },
                proxy: true,
              },
            ]),
          },
          _vm._l(_vm.filteredFaqs, function (categoryObj, categoryName, index) {
            return _c(
              "b-tab",
              {
                key: categoryName,
                attrs: { active: index === 0 },
                scopedSlots: _vm._u(
                  [
                    {
                      key: "title",
                      fn: function () {
                        return [
                          _c("feather-icon", {
                            staticClass: "mr-1",
                            attrs: { icon: categoryObj.icon, size: "18" },
                          }),
                          _vm._v(" "),
                          _c("span", { staticClass: "font-weight-bold" }, [
                            _vm._v(_vm._s(categoryObj.title)),
                          ]),
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
                _c("faq-question-answer", { attrs: { options: categoryObj } }),
              ],
              1
            )
          }),
          1
        ),
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "section",
      { staticClass: "faq-contact" },
      [
        _c(
          "b-row",
          { staticClass: "mt-5 pt-75 text-center" },
          [
            _c(
              "b-col",
              { attrs: { cols: "12" } },
              [
                _c("h2", [_vm._v("¿Aún tienes alguna pregunta?")]),
                _vm._v(" "),
                _c("b-card-text", { staticClass: "mb-3" }, [
                  _vm._v(
                    "\n         Si no puede encontrar una pregunta en nuestras preguntas frecuentes, siempre puede contactarnos. ¡Te responderemos en breve!\n        "
                  ),
                ]),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-col",
              { attrs: { sm: "6" } },
              [
                _c(
                  "b-card",
                  { staticClass: "shadow-none py-1 faq-contact-card" },
                  [
                    _c(
                      "b-avatar",
                      {
                        staticClass: "mb-2",
                        attrs: {
                          size: "42",
                          rounded: "",
                          variant: "light-primary",
                        },
                      },
                      [
                        _c("feather-icon", {
                          attrs: { icon: "PhoneCallIcon", size: "18" },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("h4", [_vm._v("+ (52) 999 504 8783")]),
                    _vm._v(" "),
                    _c("span", { staticClass: "text-body" }, [
                      _vm._v("¡Siempre estaremos felices de ayudar!"),
                    ]),
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
                  "b-card",
                  { staticClass: "shadow-none py-1 faq-contact-card" },
                  [
                    _c(
                      "b-avatar",
                      {
                        staticClass: "mb-2",
                        attrs: {
                          size: "42",
                          rounded: "",
                          variant: "light-primary",
                        },
                      },
                      [
                        _c("feather-icon", {
                          attrs: { icon: "MailIcon", size: "18" },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("h4", [_vm._v("soporte@soft-dental.com")]),
                    _vm._v(" "),
                    _c("span", { staticClass: "text-body" }, [
                      _vm._v(
                        "¡La mejor manera de obtener una respuesta más rápido!"
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
        ),
      ],
      1
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/faq/FaqQuestionAnswer.vue?vue&type=template&id=55522afc&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/faq/FaqQuestionAnswer.vue?vue&type=template&id=55522afc& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
  return _vm.options
    ? _c(
        "div",
        [
          _c(
            "div",
            { staticClass: "d-flex align-items-center" },
            [
              _c(
                "b-avatar",
                {
                  staticClass: "mr-1",
                  attrs: { rounded: "", size: "42", variant: "light-primary" },
                },
                [
                  _c("feather-icon", {
                    attrs: { icon: _vm.options.icon, size: "20" },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c("div", [
                _c("h4", { staticClass: "mb-0" }, [
                  _vm._v("\n        " + _vm._s(_vm.options.title) + "\n      "),
                ]),
                _vm._v(" "),
                _c("span", [_vm._v(_vm._s(_vm.options.subtitle))]),
              ]),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "app-collapse",
            {
              staticClass: "mt-2",
              attrs: { id: "faq-payment-qna", accordion: "", type: "margin" },
            },
            _vm._l(_vm.options.qandA, function (data, index) {
              return _c(
                "app-collapse-item",
                { key: index, attrs: { title: data.question } },
                [_vm._v("\n      " + _vm._s(data.ans) + "\n    ")]
              )
            }),
            1
          ),
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/@core/components/app-collapse/AppCollapse.vue":
/*!************************************************************************!*\
  !*** ./resources/js/src/@core/components/app-collapse/AppCollapse.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppCollapse_vue_vue_type_template_id_ddcc2570___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppCollapse.vue?vue&type=template&id=ddcc2570& */ "./resources/js/src/@core/components/app-collapse/AppCollapse.vue?vue&type=template&id=ddcc2570&");
/* harmony import */ var _AppCollapse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppCollapse.vue?vue&type=script&lang=js& */ "./resources/js/src/@core/components/app-collapse/AppCollapse.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AppCollapse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppCollapse_vue_vue_type_template_id_ddcc2570___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppCollapse_vue_vue_type_template_id_ddcc2570___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/@core/components/app-collapse/AppCollapse.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/@core/components/app-collapse/AppCollapse.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/@core/components/app-collapse/AppCollapse.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppCollapse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppCollapse.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/app-collapse/AppCollapse.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppCollapse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/@core/components/app-collapse/AppCollapse.vue?vue&type=template&id=ddcc2570&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/@core/components/app-collapse/AppCollapse.vue?vue&type=template&id=ddcc2570& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppCollapse_vue_vue_type_template_id_ddcc2570___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppCollapse.vue?vue&type=template&id=ddcc2570& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/app-collapse/AppCollapse.vue?vue&type=template&id=ddcc2570&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppCollapse_vue_vue_type_template_id_ddcc2570___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppCollapse_vue_vue_type_template_id_ddcc2570___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/@core/components/app-collapse/AppCollapseItem.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/src/@core/components/app-collapse/AppCollapseItem.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppCollapseItem_vue_vue_type_template_id_47019a0a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppCollapseItem.vue?vue&type=template&id=47019a0a& */ "./resources/js/src/@core/components/app-collapse/AppCollapseItem.vue?vue&type=template&id=47019a0a&");
/* harmony import */ var _AppCollapseItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppCollapseItem.vue?vue&type=script&lang=js& */ "./resources/js/src/@core/components/app-collapse/AppCollapseItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AppCollapseItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppCollapseItem_vue_vue_type_template_id_47019a0a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppCollapseItem_vue_vue_type_template_id_47019a0a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/@core/components/app-collapse/AppCollapseItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/@core/components/app-collapse/AppCollapseItem.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/@core/components/app-collapse/AppCollapseItem.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppCollapseItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppCollapseItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/app-collapse/AppCollapseItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppCollapseItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/@core/components/app-collapse/AppCollapseItem.vue?vue&type=template&id=47019a0a&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/src/@core/components/app-collapse/AppCollapseItem.vue?vue&type=template&id=47019a0a& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppCollapseItem_vue_vue_type_template_id_47019a0a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppCollapseItem.vue?vue&type=template&id=47019a0a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/app-collapse/AppCollapseItem.vue?vue&type=template&id=47019a0a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppCollapseItem_vue_vue_type_template_id_47019a0a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppCollapseItem_vue_vue_type_template_id_47019a0a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/assets/images/banner/banner.png":
/*!**********************************************************!*\
  !*** ./resources/js/src/assets/images/banner/banner.png ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/saas-dental/resources/js/src/assets/images/banner/banner.png";

/***/ }),

/***/ "./resources/js/src/assets/images/illustration/faq-illustrations.svg":
/*!***************************************************************************!*\
  !*** ./resources/js/src/assets/images/illustration/faq-illustrations.svg ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/saas-dental/resources/js/src/assets/images/illustration/faq-illustrations.svg";

/***/ }),

/***/ "./resources/js/src/providers/Faqs.js":
/*!********************************************!*\
  !*** ./resources/js/src/providers/Faqs.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Faqs; });
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);



var Faqs = /*#__PURE__*/function () {
  function Faqs() {
    Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Faqs);
  }
  Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Faqs, [{
    key: "index",
    value: function index(query) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/faqs", {
        params: query
      });
    }
  }, {
    key: "store",
    value: function store(formData) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/api/faqs", formData);
    }
  }, {
    key: "update",
    value: function update(id, formData) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.put("/api/faqs/".concat(id), formData);
    }
  }, {
    key: "destroy",
    value: function destroy(id) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a["delete"]("/api/faqs/".concat(id));
    }
  }]);
  return Faqs;
}();


/***/ }),

/***/ "./resources/js/src/views/pages/faq/Faq.vue":
/*!**************************************************!*\
  !*** ./resources/js/src/views/pages/faq/Faq.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Faq_vue_vue_type_template_id_2f3ae4d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Faq.vue?vue&type=template&id=2f3ae4d0& */ "./resources/js/src/views/pages/faq/Faq.vue?vue&type=template&id=2f3ae4d0&");
/* harmony import */ var _Faq_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Faq.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/faq/Faq.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Faq_vue_vue_type_style_index_0_id_2f3ae4d0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Faq.vue?vue&type=style&index=0&id=2f3ae4d0&lang=scss& */ "./resources/js/src/views/pages/faq/Faq.vue?vue&type=style&index=0&id=2f3ae4d0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Faq_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Faq_vue_vue_type_template_id_2f3ae4d0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Faq_vue_vue_type_template_id_2f3ae4d0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/faq/Faq.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/faq/Faq.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/src/views/pages/faq/Faq.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Faq.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/faq/Faq.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/faq/Faq.vue?vue&type=style&index=0&id=2f3ae4d0&lang=scss&":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/faq/Faq.vue?vue&type=style&index=0&id=2f3ae4d0&lang=scss& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_style_index_0_id_2f3ae4d0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Faq.vue?vue&type=style&index=0&id=2f3ae4d0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/faq/Faq.vue?vue&type=style&index=0&id=2f3ae4d0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_style_index_0_id_2f3ae4d0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_style_index_0_id_2f3ae4d0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_style_index_0_id_2f3ae4d0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_style_index_0_id_2f3ae4d0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/faq/Faq.vue?vue&type=template&id=2f3ae4d0&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/pages/faq/Faq.vue?vue&type=template&id=2f3ae4d0& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_template_id_2f3ae4d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Faq.vue?vue&type=template&id=2f3ae4d0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/faq/Faq.vue?vue&type=template&id=2f3ae4d0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_template_id_2f3ae4d0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_template_id_2f3ae4d0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/faq/FaqQuestionAnswer.vue":
/*!****************************************************************!*\
  !*** ./resources/js/src/views/pages/faq/FaqQuestionAnswer.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FaqQuestionAnswer_vue_vue_type_template_id_55522afc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FaqQuestionAnswer.vue?vue&type=template&id=55522afc& */ "./resources/js/src/views/pages/faq/FaqQuestionAnswer.vue?vue&type=template&id=55522afc&");
/* harmony import */ var _FaqQuestionAnswer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FaqQuestionAnswer.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/faq/FaqQuestionAnswer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FaqQuestionAnswer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FaqQuestionAnswer_vue_vue_type_template_id_55522afc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FaqQuestionAnswer_vue_vue_type_template_id_55522afc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/faq/FaqQuestionAnswer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/faq/FaqQuestionAnswer.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/pages/faq/FaqQuestionAnswer.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FaqQuestionAnswer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FaqQuestionAnswer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/faq/FaqQuestionAnswer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FaqQuestionAnswer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/faq/FaqQuestionAnswer.vue?vue&type=template&id=55522afc&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/faq/FaqQuestionAnswer.vue?vue&type=template&id=55522afc& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FaqQuestionAnswer_vue_vue_type_template_id_55522afc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FaqQuestionAnswer.vue?vue&type=template&id=55522afc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/faq/FaqQuestionAnswer.vue?vue&type=template&id=55522afc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FaqQuestionAnswer_vue_vue_type_template_id_55522afc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FaqQuestionAnswer_vue_vue_type_template_id_55522afc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);