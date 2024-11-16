(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[82],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/budgets/budget-edit/BudgetEdit.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/budgets/budget-edit/BudgetEdit.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/router */ "./resources/js/src/router/index.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _core_mixins_ui_transition__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @core/mixins/ui/transition */ "./resources/js/src/@core/mixins/ui/transition.js");
/* harmony import */ var _providers_Users__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @/providers/Users */ "./resources/js/src/providers/Users.js");
/* harmony import */ var _providers_Patients__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @/providers/Patients */ "./resources/js/src/providers/Patients.js");
/* harmony import */ var _providers_Actions__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @/providers/Actions */ "./resources/js/src/providers/Actions.js");
/* harmony import */ var _providers_ActionGroups__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @/providers/ActionGroups */ "./resources/js/src/providers/ActionGroups.js");
/* harmony import */ var _providers_LaboratoryActions__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @/providers/LaboratoryActions */ "./resources/js/src/providers/LaboratoryActions.js");
/* harmony import */ var _providers_Budgets__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @/providers/Budgets */ "./resources/js/src/providers/Budgets.js");
/* harmony import */ var _providers_BranchOffices__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @/providers/BranchOffices */ "./resources/js/src/providers/BranchOffices.js");












//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//















var UserResource = new _providers_Users__WEBPACK_IMPORTED_MODULE_19__["default"]();
var PatientResource = new _providers_Patients__WEBPACK_IMPORTED_MODULE_20__["default"]();
var ActionResource = new _providers_Actions__WEBPACK_IMPORTED_MODULE_21__["default"]();
var ActionGroupResource = new _providers_ActionGroups__WEBPACK_IMPORTED_MODULE_22__["default"]();
var LaboratoryActionResource = new _providers_LaboratoryActions__WEBPACK_IMPORTED_MODULE_23__["default"]();
var BudgetResource = new _providers_Budgets__WEBPACK_IMPORTED_MODULE_24__["default"]();
var BranchOfficeResource = new _providers_BranchOffices__WEBPACK_IMPORTED_MODULE_25__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_17__["default"],
    "b-modal": bootstrap_vue__WEBPACK_IMPORTED_MODULE_13__["VBModal"],
    "b-toggle": bootstrap_vue__WEBPACK_IMPORTED_MODULE_13__["VBToggle"]
  },
  components: {
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_13__["BRow"],
    BSidebar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_13__["BSidebar"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_13__["BCol"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_13__["BCard"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_13__["BCardBody"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_13__["BCardText"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_13__["BButton"],
    BAlert: bootstrap_vue__WEBPACK_IMPORTED_MODULE_13__["BAlert"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_13__["BLink"],
    BOverlay: bootstrap_vue__WEBPACK_IMPORTED_MODULE_13__["BOverlay"],
    BSpinner: bootstrap_vue__WEBPACK_IMPORTED_MODULE_13__["BSpinner"],
    BTable: bootstrap_vue__WEBPACK_IMPORTED_MODULE_13__["BTable"],
    BTableLite: bootstrap_vue__WEBPACK_IMPORTED_MODULE_13__["BTableLite"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_15___default.a,
    BFormCheckbox: bootstrap_vue__WEBPACK_IMPORTED_MODULE_13__["BFormCheckbox"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_13__["BFormGroup"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_13__["BFormInput"],
    BModal: bootstrap_vue__WEBPACK_IMPORTED_MODULE_13__["BModal"],
    VBModal: bootstrap_vue__WEBPACK_IMPORTED_MODULE_13__["VBModal"],
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_13__["BForm"],
    BIcon: bootstrap_vue__WEBPACK_IMPORTED_MODULE_13__["BIcon"],
    BInputGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_13__["BInputGroup"],
    BInputGroupAppend: bootstrap_vue__WEBPACK_IMPORTED_MODULE_13__["BInputGroupAppend"],
    BInputGroupPrepend: bootstrap_vue__WEBPACK_IMPORTED_MODULE_13__["BInputGroupPrepend"],
    BFormTextarea: bootstrap_vue__WEBPACK_IMPORTED_MODULE_13__["BFormTextarea"],
    BFormTags: bootstrap_vue__WEBPACK_IMPORTED_MODULE_13__["BFormTags"],
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_12__["default"],
    BFormRadioGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_13__["BFormRadioGroup"],
    BFormInvalidFeedback: bootstrap_vue__WEBPACK_IMPORTED_MODULE_13__["BFormInvalidFeedback"],
    BFormValidFeedback: bootstrap_vue__WEBPACK_IMPORTED_MODULE_13__["BFormValidFeedback"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_13__["BImg"]
  },
  mixins: [_core_mixins_ui_transition__WEBPACK_IMPORTED_MODULE_18__["heightTransition"]],
  data: function data() {
    return {
      patient_id: _router__WEBPACK_IMPORTED_MODULE_14__["default"].currentRoute.params.patient_id,
      loading: false,
      teeths: [],
      teeths_fdi: [{
        "class": '',
        tr: [{
          value: '1.8',
          label: '1.8',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d18.png */ "./resources/js/src/assets/images/dientes/d18.png")
        }, {
          value: '1.7',
          label: '1.7',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d17.png */ "./resources/js/src/assets/images/dientes/d17.png")
        }, {
          value: '1.6',
          label: '1.6',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d16.png */ "./resources/js/src/assets/images/dientes/d16.png")
        }, {
          value: '1.5',
          label: '1.5',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d15.png */ "./resources/js/src/assets/images/dientes/d15.png")
        }, {
          value: '1.4',
          label: '1.4',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d14.png */ "./resources/js/src/assets/images/dientes/d14.png")
        }, {
          value: '1.3',
          label: '1.3',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d13.png */ "./resources/js/src/assets/images/dientes/d13.png")
        }, {
          value: '1.2',
          label: '1.2',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d12.png */ "./resources/js/src/assets/images/dientes/d12.png")
        }, {
          value: '1.1',
          label: '1.1',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell half-col',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d11.png */ "./resources/js/src/assets/images/dientes/d11.png")
        }, {
          value: '2.1',
          label: '2.1',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d21.png */ "./resources/js/src/assets/images/dientes/d21.png")
        }, {
          value: '2.2',
          label: '2.2',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d22.png */ "./resources/js/src/assets/images/dientes/d22.png")
        }, {
          value: '2.3',
          label: '2.3',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d23.png */ "./resources/js/src/assets/images/dientes/d23.png")
        }, {
          value: '2.4',
          label: '2.4',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d24.png */ "./resources/js/src/assets/images/dientes/d24.png")
        }, {
          value: '2.5',
          label: '2.5',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d25.png */ "./resources/js/src/assets/images/dientes/d25.png")
        }, {
          value: '2.6',
          label: '2.6',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d26.png */ "./resources/js/src/assets/images/dientes/d26.png")
        }, {
          value: '2.7',
          label: '2.7',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d27.png */ "./resources/js/src/assets/images/dientes/d27.png")
        }, {
          value: '2.8',
          label: '2.8',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d28.png */ "./resources/js/src/assets/images/dientes/d28.png")
        }]
      }, {
        "class": '',
        tr: [{
          value: 'Boca',
          label: 'Boca',
          colspan: '3',
          rowspan: '2',
          "class": 'tooth-cell',
          height: '60%',
          width: '60%',
          style_label: 'display:block;',
          style: 'margin-left:20%',
          div_style: '',
          image_class: '',
          image: __webpack_require__(/*! @/assets/images/dientes/boca.png */ "./resources/js/src/assets/images/dientes/boca.png")
        }, {
          value: '5.5',
          label: '5.5',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d55.png */ "./resources/js/src/assets/images/dientes/d55.png")
        }, {
          value: '5.4',
          label: '5.4',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d54.png */ "./resources/js/src/assets/images/dientes/d54.png")
        }, {
          value: '5.3',
          label: '5.3',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d53.png */ "./resources/js/src/assets/images/dientes/d53.png")
        }, {
          value: '5.2',
          label: '5.2',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d52.png */ "./resources/js/src/assets/images/dientes/d52.png")
        }, {
          value: '5.1',
          label: '5.1',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell half-col',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d51.png */ "./resources/js/src/assets/images/dientes/d51.png")
        }, {
          value: '6.1',
          label: '6.1',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d61.png */ "./resources/js/src/assets/images/dientes/d61.png")
        }, {
          value: '6.2',
          label: '6.2',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d62.png */ "./resources/js/src/assets/images/dientes/d62.png")
        }, {
          value: '6.3',
          label: '6.3',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d63.png */ "./resources/js/src/assets/images/dientes/d63.png")
        }, {
          value: '6.4',
          label: '6.4',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d64.png */ "./resources/js/src/assets/images/dientes/d64.png")
        }, {
          value: '6.5',
          label: '6.5',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d65.png */ "./resources/js/src/assets/images/dientes/d65.png")
        }, {
          value: 'Maxilar',
          label: 'Maxilar',
          colspan: '3',
          rowspan: '',
          "class": 'tooth-cell',
          height: '60%',
          width: '60%',
          style_label: 'display:block;',
          style: 'margin-left:20%',
          div_style: '',
          image_class: '',
          image: __webpack_require__(/*! @/assets/images/dientes/boca_sup.png */ "./resources/js/src/assets/images/dientes/boca_sup.png")
        }]
      }, {
        "class": 'half-row',
        tr: [{
          value: '8.5',
          label: '8.5',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d85.png */ "./resources/js/src/assets/images/dientes/d85.png")
        }, {
          value: '8.4',
          label: '8.4',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d84.png */ "./resources/js/src/assets/images/dientes/d84.png")
        }, {
          value: '8.3',
          label: '8.3',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d83.png */ "./resources/js/src/assets/images/dientes/d83.png")
        }, {
          value: '8.2',
          label: '8.2',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d82.png */ "./resources/js/src/assets/images/dientes/d82.png")
        }, {
          value: '8.1',
          label: '8.1',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell half-col',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d81.png */ "./resources/js/src/assets/images/dientes/d81.png")
        }, {
          value: '7.1',
          label: '7.1',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d71.png */ "./resources/js/src/assets/images/dientes/d71.png")
        }, {
          value: '7.2',
          label: '7.2',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d72.png */ "./resources/js/src/assets/images/dientes/d72.png")
        }, {
          value: '7.3',
          label: '7.3',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d73.png */ "./resources/js/src/assets/images/dientes/d73.png")
        }, {
          value: '7.4',
          label: '7.4',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d74.png */ "./resources/js/src/assets/images/dientes/d74.png")
        }, {
          value: '7.5',
          label: '7.5',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d75.png */ "./resources/js/src/assets/images/dientes/d75.png")
        }, {
          value: 'Mandíbula',
          label: 'Mandíbula',
          colspan: '3',
          rowspan: '',
          "class": 'tooth-cell mandibula',
          height: '',
          width: '',
          style_label: 'margin-left:20%',
          style: '',
          div_style: 'margin-top:0%;width:100%;padding-top:11%;padding-bottom:11%',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/boca_inf.png */ "./resources/js/src/assets/images/dientes/boca_inf.png")
        }]
      }, {
        "class": '',
        tr: [{
          value: '4.8',
          label: '4.8',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d48.png */ "./resources/js/src/assets/images/dientes/d48.png")
        }, {
          value: '4.7',
          label: '4.7',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d47.png */ "./resources/js/src/assets/images/dientes/d47.png")
        }, {
          value: '4.6',
          label: '4.6',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d46.png */ "./resources/js/src/assets/images/dientes/d46.png")
        }, {
          value: '4.5',
          label: '4.5',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d45.png */ "./resources/js/src/assets/images/dientes/d45.png")
        }, {
          value: '4.4',
          label: '4.4',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d44.png */ "./resources/js/src/assets/images/dientes/d44.png")
        }, {
          value: '4.3',
          label: '4.3',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d43.png */ "./resources/js/src/assets/images/dientes/d43.png")
        }, {
          value: '4.2',
          label: '4.2',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d42.png */ "./resources/js/src/assets/images/dientes/d42.png")
        }, {
          value: '4.1',
          label: '4.1',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell half-col',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d41.png */ "./resources/js/src/assets/images/dientes/d41.png")
        }, {
          value: '3.1',
          label: '3.1',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d31.png */ "./resources/js/src/assets/images/dientes/d31.png")
        }, {
          value: '3.2',
          label: '3.2',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d32.png */ "./resources/js/src/assets/images/dientes/d32.png")
        }, {
          value: '3.3',
          label: '3.3',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d33.png */ "./resources/js/src/assets/images/dientes/d33.png")
        }, {
          value: '3.4',
          label: '3.4',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d34.png */ "./resources/js/src/assets/images/dientes/d34.png")
        }, {
          value: '3.5',
          label: '3.5',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d35.png */ "./resources/js/src/assets/images/dientes/d35.png")
        }, {
          value: '3.6',
          label: '3.6',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d36.png */ "./resources/js/src/assets/images/dientes/d36.png")
        }, {
          value: '3.7',
          label: '3.7',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d37.png */ "./resources/js/src/assets/images/dientes/d37.png")
        }, {
          value: '3.8',
          label: '3.8',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d38.png */ "./resources/js/src/assets/images/dientes/d38.png")
        }]
      }],
      teeths_ada: [{
        "class": '',
        tr: [{
          value: '1',
          label: '1',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d18.png */ "./resources/js/src/assets/images/dientes/d18.png")
        }, {
          value: '2',
          label: '2',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d17.png */ "./resources/js/src/assets/images/dientes/d17.png")
        }, {
          value: '3',
          label: '3',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d16.png */ "./resources/js/src/assets/images/dientes/d16.png")
        }, {
          value: '4',
          label: '4',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d15.png */ "./resources/js/src/assets/images/dientes/d15.png")
        }, {
          value: '5',
          label: '5',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d14.png */ "./resources/js/src/assets/images/dientes/d14.png")
        }, {
          value: '6',
          label: '6',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d13.png */ "./resources/js/src/assets/images/dientes/d13.png")
        }, {
          value: '7',
          label: '7',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d12.png */ "./resources/js/src/assets/images/dientes/d12.png")
        }, {
          value: '8',
          label: '8',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell half-col',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d11.png */ "./resources/js/src/assets/images/dientes/d11.png")
        }, {
          value: '9',
          label: '9',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d21.png */ "./resources/js/src/assets/images/dientes/d21.png")
        }, {
          value: '10',
          label: '10',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d22.png */ "./resources/js/src/assets/images/dientes/d22.png")
        }, {
          value: '11',
          label: '11',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d23.png */ "./resources/js/src/assets/images/dientes/d23.png")
        }, {
          value: '12',
          label: '12',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d24.png */ "./resources/js/src/assets/images/dientes/d24.png")
        }, {
          value: '13',
          label: '13',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d25.png */ "./resources/js/src/assets/images/dientes/d25.png")
        }, {
          value: '14',
          label: '14',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d26.png */ "./resources/js/src/assets/images/dientes/d26.png")
        }, {
          value: '15',
          label: '15',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d27.png */ "./resources/js/src/assets/images/dientes/d27.png")
        }, {
          value: '16',
          label: '16',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d28.png */ "./resources/js/src/assets/images/dientes/d28.png")
        }]
      }, {
        "class": '',
        tr: [{
          value: 'Boca',
          label: 'Boca',
          colspan: '3',
          rowspan: '2',
          "class": 'tooth-cell',
          height: '60%',
          width: '60%',
          style_label: 'display:block;',
          style: 'margin-left:20%',
          div_style: '',
          image_class: '',
          image: __webpack_require__(/*! @/assets/images/dientes/boca.png */ "./resources/js/src/assets/images/dientes/boca.png")
        }, {
          value: 'A',
          label: 'A',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d55.png */ "./resources/js/src/assets/images/dientes/d55.png")
        }, {
          value: 'B',
          label: 'B',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d54.png */ "./resources/js/src/assets/images/dientes/d54.png")
        }, {
          value: 'C',
          label: 'C',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d53.png */ "./resources/js/src/assets/images/dientes/d53.png")
        }, {
          value: 'D',
          label: 'D',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d52.png */ "./resources/js/src/assets/images/dientes/d52.png")
        }, {
          value: 'E',
          label: 'E',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell half-col',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d51.png */ "./resources/js/src/assets/images/dientes/d51.png")
        }, {
          value: 'F',
          label: 'F',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d61.png */ "./resources/js/src/assets/images/dientes/d61.png")
        }, {
          value: 'G',
          label: 'G',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d62.png */ "./resources/js/src/assets/images/dientes/d62.png")
        }, {
          value: 'H',
          label: 'H',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d63.png */ "./resources/js/src/assets/images/dientes/d63.png")
        }, {
          value: 'I',
          label: 'I',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d64.png */ "./resources/js/src/assets/images/dientes/d64.png")
        }, {
          value: 'J',
          label: 'J',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d65.png */ "./resources/js/src/assets/images/dientes/d65.png")
        }, {
          value: 'Maxilar',
          label: 'Maxilar',
          colspan: '3',
          rowspan: '',
          "class": 'tooth-cell',
          height: '60%',
          width: '60%',
          style_label: 'display:block;',
          style: 'margin-left:20%',
          div_style: '',
          image_class: '',
          image: __webpack_require__(/*! @/assets/images/dientes/boca_sup.png */ "./resources/js/src/assets/images/dientes/boca_sup.png")
        }]
      }, {
        "class": 'half-row',
        tr: [{
          value: 'T',
          label: 'T',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d85.png */ "./resources/js/src/assets/images/dientes/d85.png")
        }, {
          value: 'S',
          label: 'S',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d84.png */ "./resources/js/src/assets/images/dientes/d84.png")
        }, {
          value: 'R',
          label: 'R',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d83.png */ "./resources/js/src/assets/images/dientes/d83.png")
        }, {
          value: 'Q',
          label: 'Q',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d82.png */ "./resources/js/src/assets/images/dientes/d82.png")
        }, {
          value: 'P',
          label: 'P',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell half-col',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d81.png */ "./resources/js/src/assets/images/dientes/d81.png")
        }, {
          value: 'O',
          label: 'O',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d71.png */ "./resources/js/src/assets/images/dientes/d71.png")
        }, {
          value: 'N',
          label: 'N',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d72.png */ "./resources/js/src/assets/images/dientes/d72.png")
        }, {
          value: 'M',
          label: 'M',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d73.png */ "./resources/js/src/assets/images/dientes/d73.png")
        }, {
          value: 'L',
          label: 'L',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d74.png */ "./resources/js/src/assets/images/dientes/d74.png")
        }, {
          value: 'K',
          label: 'K',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d75.png */ "./resources/js/src/assets/images/dientes/d75.png")
        }, {
          value: 'Mandíbula',
          label: 'Mandíbula',
          colspan: '3',
          rowspan: '',
          "class": 'tooth-cell mandibula',
          height: '',
          width: '',
          style_label: 'margin-left:20%',
          style: '',
          div_style: 'margin-top:0%;width:100%;padding-top:11%;padding-bottom:11%',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/boca_inf.png */ "./resources/js/src/assets/images/dientes/boca_inf.png")
        }]
      }, {
        "class": '',
        tr: [{
          value: '32',
          label: '32',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d48.png */ "./resources/js/src/assets/images/dientes/d48.png")
        }, {
          value: '31',
          label: '31',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d47.png */ "./resources/js/src/assets/images/dientes/d47.png")
        }, {
          value: '30',
          label: '30',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d46.png */ "./resources/js/src/assets/images/dientes/d46.png")
        }, {
          value: '29',
          label: '29',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d45.png */ "./resources/js/src/assets/images/dientes/d45.png")
        }, {
          value: '28',
          label: '28',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d44.png */ "./resources/js/src/assets/images/dientes/d44.png")
        }, {
          value: '27',
          label: '27',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d43.png */ "./resources/js/src/assets/images/dientes/d43.png")
        }, {
          value: '26',
          label: '26',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d42.png */ "./resources/js/src/assets/images/dientes/d42.png")
        }, {
          value: '25',
          label: '25',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell half-col',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d41.png */ "./resources/js/src/assets/images/dientes/d41.png")
        }, {
          value: '24',
          label: '24',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d31.png */ "./resources/js/src/assets/images/dientes/d31.png")
        }, {
          value: '23',
          label: '23',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d32.png */ "./resources/js/src/assets/images/dientes/d32.png")
        }, {
          value: '22',
          label: '22',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d33.png */ "./resources/js/src/assets/images/dientes/d33.png")
        }, {
          value: '21',
          label: '21',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d34.png */ "./resources/js/src/assets/images/dientes/d34.png")
        }, {
          value: '20',
          label: '20',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d35.png */ "./resources/js/src/assets/images/dientes/d35.png")
        }, {
          value: '19',
          label: '19',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d36.png */ "./resources/js/src/assets/images/dientes/d36.png")
        }, {
          value: '18',
          label: '18',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d37.png */ "./resources/js/src/assets/images/dientes/d37.png")
        }, {
          value: '17',
          label: '17',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d38.png */ "./resources/js/src/assets/images/dientes/d38.png")
        }]
      }],
      teeths_adam: [{
        "class": '',
        tr: [{
          value: '1',
          label: '1',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d18.png */ "./resources/js/src/assets/images/dientes/d18.png")
        }, {
          value: '2',
          label: '2',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d17.png */ "./resources/js/src/assets/images/dientes/d17.png")
        }, {
          value: '3',
          label: '3',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d16.png */ "./resources/js/src/assets/images/dientes/d16.png")
        }, {
          value: '4',
          label: '4',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d15.png */ "./resources/js/src/assets/images/dientes/d15.png")
        }, {
          value: '5',
          label: '5',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d14.png */ "./resources/js/src/assets/images/dientes/d14.png")
        }, {
          value: '6',
          label: '6',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d13.png */ "./resources/js/src/assets/images/dientes/d13.png")
        }, {
          value: '7',
          label: '7',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d12.png */ "./resources/js/src/assets/images/dientes/d12.png")
        }, {
          value: '8',
          label: '8',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell half-col',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d11.png */ "./resources/js/src/assets/images/dientes/d11.png")
        }, {
          value: '9',
          label: '9',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d21.png */ "./resources/js/src/assets/images/dientes/d21.png")
        }, {
          value: '10',
          label: '10',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d22.png */ "./resources/js/src/assets/images/dientes/d22.png")
        }, {
          value: '11',
          label: '11',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d23.png */ "./resources/js/src/assets/images/dientes/d23.png")
        }, {
          value: '12',
          label: '12',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d24.png */ "./resources/js/src/assets/images/dientes/d24.png")
        }, {
          value: '13',
          label: '13',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d25.png */ "./resources/js/src/assets/images/dientes/d25.png")
        }, {
          value: '14',
          label: '14',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d26.png */ "./resources/js/src/assets/images/dientes/d26.png")
        }, {
          value: '15',
          label: '15',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d27.png */ "./resources/js/src/assets/images/dientes/d27.png")
        }, {
          value: '16',
          label: '16',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d28.png */ "./resources/js/src/assets/images/dientes/d28.png")
        }]
      }, {
        "class": '',
        tr: [{
          value: 'Boca',
          label: 'Boca',
          colspan: '3',
          rowspan: '2',
          "class": 'tooth-cell',
          height: '60%',
          width: '60%',
          style_label: 'display:block;',
          style: 'margin-left:20%',
          div_style: '',
          image_class: '',
          image: __webpack_require__(/*! @/assets/images/dientes/boca.png */ "./resources/js/src/assets/images/dientes/boca.png")
        }, {
          value: 'A',
          label: 'A',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d55.png */ "./resources/js/src/assets/images/dientes/d55.png")
        }, {
          value: 'B',
          label: 'B',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d54.png */ "./resources/js/src/assets/images/dientes/d54.png")
        }, {
          value: 'C',
          label: 'C',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d53.png */ "./resources/js/src/assets/images/dientes/d53.png")
        }, {
          value: 'D',
          label: 'D',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d52.png */ "./resources/js/src/assets/images/dientes/d52.png")
        }, {
          value: 'E',
          label: 'E',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell half-col',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d51.png */ "./resources/js/src/assets/images/dientes/d51.png")
        }, {
          value: 'F',
          label: 'F',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d61.png */ "./resources/js/src/assets/images/dientes/d61.png")
        }, {
          value: 'G',
          label: 'G',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d62.png */ "./resources/js/src/assets/images/dientes/d62.png")
        }, {
          value: 'H',
          label: 'H',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d63.png */ "./resources/js/src/assets/images/dientes/d63.png")
        }, {
          value: 'I',
          label: 'I',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d64.png */ "./resources/js/src/assets/images/dientes/d64.png")
        }, {
          value: 'J',
          label: 'J',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d65.png */ "./resources/js/src/assets/images/dientes/d65.png")
        }, {
          value: 'Maxilar',
          label: 'Maxilar',
          colspan: '3',
          rowspan: '',
          "class": 'tooth-cell',
          height: '60%',
          width: '60%',
          style_label: 'display:block;',
          style: 'margin-left:20%',
          div_style: '',
          image_class: '',
          image: __webpack_require__(/*! @/assets/images/dientes/boca_sup.png */ "./resources/js/src/assets/images/dientes/boca_sup.png")
        }]
      }, {
        "class": 'half-row',
        tr: [{
          value: 'K',
          label: 'K',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d85.png */ "./resources/js/src/assets/images/dientes/d85.png")
        }, {
          value: 'L',
          label: 'L',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d84.png */ "./resources/js/src/assets/images/dientes/d84.png")
        }, {
          value: 'M',
          label: 'M',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d83.png */ "./resources/js/src/assets/images/dientes/d83.png")
        }, {
          value: 'N',
          label: 'N',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d82.png */ "./resources/js/src/assets/images/dientes/d82.png")
        }, {
          value: 'O',
          label: 'O',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell half-col',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d81.png */ "./resources/js/src/assets/images/dientes/d81.png")
        }, {
          value: 'P',
          label: 'P',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d71.png */ "./resources/js/src/assets/images/dientes/d71.png")
        }, {
          value: 'Q',
          label: 'Q',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d72.png */ "./resources/js/src/assets/images/dientes/d72.png")
        }, {
          value: 'R',
          label: 'R',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d73.png */ "./resources/js/src/assets/images/dientes/d73.png")
        }, {
          value: 'S',
          label: 'S',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d74.png */ "./resources/js/src/assets/images/dientes/d74.png")
        }, {
          value: 'T',
          label: 'T',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d75.png */ "./resources/js/src/assets/images/dientes/d75.png")
        }, {
          value: 'Mandíbula',
          label: 'Mandíbula',
          colspan: '3',
          rowspan: '',
          "class": 'tooth-cell mandibula',
          height: '',
          width: '',
          style_label: 'margin-left:20%',
          style: '',
          div_style: 'margin-top:0%;width:100%;padding-top:11%;padding-bottom:11%',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/boca_inf.png */ "./resources/js/src/assets/images/dientes/boca_inf.png")
        }]
      }, {
        "class": '',
        tr: [{
          value: '17',
          label: '17',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d48.png */ "./resources/js/src/assets/images/dientes/d48.png")
        }, {
          value: '18',
          label: '18',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d47.png */ "./resources/js/src/assets/images/dientes/d47.png")
        }, {
          value: '19',
          label: '19',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d46.png */ "./resources/js/src/assets/images/dientes/d46.png")
        }, {
          value: '20',
          label: '20',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d45.png */ "./resources/js/src/assets/images/dientes/d45.png")
        }, {
          value: '21',
          label: '21',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d44.png */ "./resources/js/src/assets/images/dientes/d44.png")
        }, {
          value: '22',
          label: '22',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d43.png */ "./resources/js/src/assets/images/dientes/d43.png")
        }, {
          value: '23',
          label: '23',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d42.png */ "./resources/js/src/assets/images/dientes/d42.png")
        }, {
          value: '24',
          label: '24',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell half-col',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d41.png */ "./resources/js/src/assets/images/dientes/d41.png")
        }, {
          value: '25',
          label: '25',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d31.png */ "./resources/js/src/assets/images/dientes/d31.png")
        }, {
          value: '26',
          label: '26',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d32.png */ "./resources/js/src/assets/images/dientes/d32.png")
        }, {
          value: '27',
          label: '27',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d33.png */ "./resources/js/src/assets/images/dientes/d33.png")
        }, {
          value: '28',
          label: '28',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d34.png */ "./resources/js/src/assets/images/dientes/d34.png")
        }, {
          value: '29',
          label: '29',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d35.png */ "./resources/js/src/assets/images/dientes/d35.png")
        }, {
          value: '30',
          label: '30',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d36.png */ "./resources/js/src/assets/images/dientes/d36.png")
        }, {
          value: '31',
          label: '31',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d37.png */ "./resources/js/src/assets/images/dientes/d37.png")
        }, {
          value: '32',
          label: '32',
          colspan: '',
          rowspan: '',
          "class": 'tooth-cell',
          height: '',
          width: '',
          style_label: '',
          style: '',
          div_style: '',
          image_class: 'image dental-img',
          image: __webpack_require__(/*! @/assets/images/dientes/d38.png */ "./resources/js/src/assets/images/dientes/d38.png")
        }]
      }],
      nomenclature: null,
      nomenclatures: [{
        text: 'FDI',
        value: 'fdi'
      }, {
        text: 'ADA',
        value: 'ada'
      }, {
        text: 'ADAm',
        value: 'adam'
      }],
      columns: [{
        key: "description",
        label: this.$t("budgets.table_action_description")
      }, {
        key: "price",
        label: this.$t("budgets.table_action_price")
      }, {
        key: "discount",
        label: this.$t("budgets.table_action_discount")
      }, {
        key: "total",
        label: this.$t("budgets.table_action_total")
      }, {
        key: "actions",
        label: ""
      }],
      patient: {},
      patients: [],
      areasSelected: [],
      selectedPatient: null,
      selectedAction: null,
      showButtonAction: false,
      budget: {},
      budgets: [],
      customer: {},
      totalDebt: 0,
      actionTypes: [{
        value: 'clinical',
        label: this.$t('clinical_actions')
      }, {
        value: 'laboratory',
        label: this.$t('laboratory_actions')
      }],
      actionGroups: [],
      actions: [],
      budget_actions: [],
      morePieces: false,
      total: 0,
      discount: 0,
      subtotal: 0,
      tax: 0,
      items: [],
      action: {},
      nextTodoId: 1,
      currentAction: {},
      branchs: [],
      selectedBranch: null
    };
  },
  computed: {
    state: function state() {
      return Boolean(this.nomenclature);
    },
    defaultNomenclature: function defaultNomenclature() {
      return this.findSetting('app_budget_default_nomenclature');
    },
    budget_cost: function budget_cost() {
      if (this.items.length <= 0) return 0;
      var result = this.items.reduce(function (carry, action) {
        return carry + parseFloat(action.price);
      }, 0);
      return _.isNaN(result) ? 0 : result;
    },
    budget_discount: function budget_discount() {
      if (this.items.length <= 0) return 0;
      var result = this.items.reduce(function (carry, action) {
        return carry + parseFloat(action.discount);
      }, 0);
      return _.isNaN(result) ? 0 : result;
    },
    budget_total: function budget_total() {
      if (this.items.length <= 0) return 0;
      var result = this.items.reduce(function (carry, action) {
        return carry + (parseFloat(action.price) - parseFloat(action.discount));
      }, 0);
      return _.isNaN(result) ? 0 : result;
    },
    budget_subtotal: function budget_subtotal() {
      if (this.items.length <= 0) return 0;
      var result = this.items.reduce(function (carry, action) {
        return carry + parseFloat(action.subtotal);
      }, 0);
      return _.isNaN(result) ? 0 : result;
    },
    budget_tax: function budget_tax() {
      var enableTax = this.findSetting("enable_tax");
      if (enableTax) {
        var tax = parseFloat(this.findSetting("default_tax"));
        if (this.items.length <= 0) return 0;
        var result = this.items.reduce(function (carry, action) {
          return carry + parseFloat(action.total);
        }, 0) * (tax / 100);
        console.log("Result ".concat(result));
        return _.isNaN(result) ? 0 : result;
      }
      return 0;
    },
    user_id: function user_id() {
      return _store__WEBPACK_IMPORTED_MODULE_16__["default"].state.auth.user.id;
    },
    isDisabledPatiend: function isDisabledPatiend() {
      return this.patient_id ? true : false;
    },
    isEnabledTax: function isEnabledTax() {
      return this.findSetting("enable_tax");
    },
    logo: function logo() {
      return _store__WEBPACK_IMPORTED_MODULE_16__["default"].state.auth.logo || window._setting.app_logo;
    }
  },
  mounted: function mounted() {
    var _this = this;
    return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().mark(function _callee() {
      return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _this.nomenclature = _this.findSetting('app_budget_default_nomenclature');
            _this.initTrHeight();
            _context.next = 4;
            return _this.getBudget();
          case 4:
            _context.next = 6;
            return _this.getActionGroups();
          case 6:
            _context.next = 8;
            return _this.getLaboratoryActions();
          case 8:
            _context.next = 10;
            return _this.getBranch();
          case 10:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  created: function created() {
    window.addEventListener("resize", this.initTrHeight);
  },
  destroyed: function destroyed() {
    window.removeEventListener("resize", this.initTrHeight);
  },
  methods: {
    getBranch: function getBranch() {
      var _this2 = this;
      return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().mark(function _callee2() {
        var _yield$BranchOfficeRe, data;
        return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _this2.loading = true;
              _context2.next = 3;
              return BranchOfficeResource.getAll();
            case 3:
              _yield$BranchOfficeRe = _context2.sent;
              data = _yield$BranchOfficeRe.data;
              _this2.loading = false;
              _this2.branchs = data;
              _this2.selectedBranch = _this2.branchs.filter(function (b) {
                return b.id === _this2.budget.branch_office_id;
              })[0];
            case 8:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    getBudget: function getBudget() {
      var _this3 = this;
      return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().mark(function _callee3() {
        var _yield$BudgetResource, data;
        return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _this3.loading = true;
              _context3.next = 3;
              return BudgetResource.getBudgetDetail(_router__WEBPACK_IMPORTED_MODULE_14__["default"].currentRoute.params.id);
            case 3:
              _yield$BudgetResource = _context3.sent;
              data = _yield$BudgetResource.data;
              _this3.loading = false;
              _this3.budget = data.data;
              _this3.items = _.orderBy(_this3.budget.budget_actions, 'action_type', 'asc');
              _this3.nextTodoId = _.size(_this3.items);
            case 9:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    onSearch: function onSearch(search, loading) {
      if (search.length) {
        loading(true);
        this.searchPatients(loading, search, this);
      }
    },
    addActions: function addActions() {
      var _this4 = this;
      if (_.isEmpty(this.areasSelected)) {
        this.danger(this.$t('budgets.area_required'), '', 'AlertCircleIcon');
        return;
      }
      var counter = _.size(this.items);
      _.each(this.items, function (item, idx) {
        if (item.id === _this4.currentAction.id) {
          _this4.items.splice(idx, 1);
          return false;
        }
      });
      _.each(this.areasSelected, function (area) {
        _this4.items.push(Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _this4.currentAction), {}, {
          new_area: area,
          area: area,
          id: counter
        }));
        counter++;
      });
      this.items = _.orderBy(this.items, 'type', 'asc');
      this.currentAction = {};
      this.areasSelected = [];
      this.selectedAction = null;
      this.morePieces = false;
      this.$refs['modal-areas'].hide();
    },
    removeAction: function removeAction(value) {
      var _this5 = this;
      _.each(this.budget_actions, function (item, index) {
        if (item.id === value.id) {
          _this5.budget_actions.splice(index, 1);
          return false;
        }
      });
    },
    update: function update() {
      var _this6 = this;
      return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().mark(function _callee4() {
        var _yield$BudgetResource2, data;
        return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _this6.budget.user_id = _this6.user_id;
              _this6.budget.branch_office_id = 1;
              _this6.budget.subtotal = _this6.budget_cost;
              _this6.budget.discount = _this6.budget_discount;
              _this6.budget.tax = _this6.budget_tax;
              _this6.budget.total = _this6.budget_total + _this6.budget_tax;
              _this6.budget.items = _this6.items;
              _context4.prev = 7;
              _this6.loading = true;
              _context4.next = 11;
              return BudgetResource.update(_this6.budget.id, _this6.budget);
            case 11:
              _yield$BudgetResource2 = _context4.sent;
              data = _yield$BudgetResource2.data;
              _this6.loading = false;
              if (data.success) {
                _this6.success(data.message);
                if (_this6.isDisabledPatiend) {
                  _this6.$router.back();
                } else {
                  _this6.$router.push({
                    name: "apps-budgets-list"
                  });
                }
              } else {
                _this6.danger(data.message);
              }
              _context4.next = 21;
              break;
            case 17:
              _context4.prev = 17;
              _context4.t0 = _context4["catch"](7);
              _this6.loading = false;
              _this6.handleResponseErrors(_context4.t0);
            case 21:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[7, 17]]);
      }))();
    },
    searchPatients: function searchPatients(loading, search, vm) {
      var _this7 = this;
      return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().mark(function _callee5() {
        var _yield$PatientResourc, data;
        return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _this7.loading = true;
              _context5.next = 3;
              return PatientResource.search(search);
            case 3:
              _yield$PatientResourc = _context5.sent;
              data = _yield$PatientResourc.data;
              vm.patients = data.data;
              _this7.loading = false;
              loading(false);
            case 8:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }))();
    },
    getActionGroups: function getActionGroups() {
      var _this8 = this;
      return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().mark(function _callee6() {
        var _yield$ActionGroupRes, data;
        return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _this8.actionGroups = [];
              _this8.selectedAction = null;
              _this8.loading = true;
              _context6.next = 5;
              return ActionGroupResource.getAll();
            case 5:
              _yield$ActionGroupRes = _context6.sent;
              data = _yield$ActionGroupRes.data;
              _this8.loading = false;
              _this8.actionGroups = data.data;
            case 9:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }))();
    },
    getActions: function getActions(group_id) {
      var _this9 = this;
      return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().mark(function _callee7() {
        var _yield$ActionResource, data;
        return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              // this.loading = true;
              _this9.actions = [];
              _context7.next = 3;
              return ActionResource.getAllByGroupId(group_id);
            case 3:
              _yield$ActionResource = _context7.sent;
              data = _yield$ActionResource.data;
              // this.loading = false;
              _this9.actions = data.data;
            case 6:
            case "end":
              return _context7.stop();
          }
        }, _callee7);
      }))();
    },
    getLaboratoryActions: function getLaboratoryActions() {
      var _this10 = this;
      return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().mark(function _callee8() {
        var _yield$LaboratoryActi, data;
        return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _this10.loading = true;
              _this10.actions = [];
              _context8.next = 4;
              return LaboratoryActionResource.getAll();
            case 4:
              _yield$LaboratoryActi = _context8.sent;
              data = _yield$LaboratoryActi.data;
              _this10.loading = false;
              _this10.actions = data.data;
            case 8:
            case "end":
              return _context8.stop();
          }
        }, _callee8);
      }))();
    },
    calculateTotal: function calculateTotal(evt) {
      evt.discount = parseFloat(evt.discount);
      if (isNaN(evt.discount)) {
        evt.discount = 0;
      }
      if (evt.discount > parseFloat(evt.cost)) {
        evt.discount = evt.cost;
      }
      evt.subtotal = evt.cost;
      evt.total = evt.subtotal - evt.discount;
    },
    selectPatient: function selectPatient(evt) {},
    selectActionType: function selectActionType(evt) {
      this.budget.action = null;
      this.budget.cost = null;
      this.actionGroups = [];
      this.actions = [];
      this.selectedAction = null;
      if (evt.value === "clinical") {
        this.getActionGroups();
      } else {
        this.getLaboratoryActions();
      }
    },
    selectActionGroup: function selectActionGroup(evt) {
      var _this11 = this;
      return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().mark(function _callee9() {
        return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              delete evt.selectedAction;
              _this11.getActions(evt.action_group.id);
            case 2:
            case "end":
              return _context9.stop();
          }
        }, _callee9);
      }))();
    },
    selectAction: function selectAction(evt) {
      console.log(evt);
      evt.price = evt.selectedAction.cost;
      evt.discount = 0;
      evt.subtotal = evt.price;
      evt.total = evt.subtotal - evt.discount;
    },
    findPatient: function findPatient() {
      var _this12 = this;
      return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().mark(function _callee10() {
        var _yield$PatientResourc2, data;
        return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              _context10.next = 2;
              return PatientResource.find(_this12.patient_id);
            case 2:
              _yield$PatientResourc2 = _context10.sent;
              data = _yield$PatientResourc2.data;
              _this12.selectedPatient = data.data;
            case 5:
            case "end":
              return _context10.stop();
          }
        }, _callee10);
      }))();
    },
    openModalAreas: function openModalAreas(item) {
      this.action = {};
      this.action = item;
      this.currentAction = Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, item);
      this.areasSelected = [];
      this.$refs["modal-areas"].show();
    },
    repeateAgain: function repeateAgain() {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "clinical";
      var counter = _.size(this.items);
      this.items.push({
        id: counter + 1,
        action_type: type,
        area: null,
        price: 0,
        discount: 0,
        subtotal: 0,
        tax: 0,
        total: 0,
        isNew: true
      });
      this.items = _.orderBy(this.items, "action_type", "asc");

      // this.$nextTick(() => {
      //     this.trAddHeight(this.$refs.row[0].offsetHeight);
      // });

      // if (type === "clinical") {
      //     this.getActionGroups();
      // } else {
      //     this.getLaboratoryActions();
      // }
    },
    removeItem: function removeItem(index) {
      this.items.splice(index, 1);
      // this.trTrimHeight(this.$refs.row[0].offsetHeight);
    },
    initTrHeight: function initTrHeight() {
      // console.log(this.$refs.form.scrollHeight)
      // this.trSetHeight(null)
      // this.$nextTick(() => {
      //     this.trSetHeight(this.$refs.form.scrollHeight)
      // })
    }
  },
  watch: {
    nomenclature: function nomenclature(value) {
      if (value === 'fdi') {
        this.teeths = this.teeths_fdi;
      } else if (value === 'ada') {
        this.teeths = this.teeths_ada;
      } else if (value === 'adam') {
        this.teeths = this.teeths_adam;
      } else {
        this.teeths = this.teeths_fdi;
      }
    },
    selectedPatient: function selectedPatient(value) {
      this.totalDebt = value.budget.reduce(function (carry, debt) {
        return carry + parseFloat(debt.total_debt);
      }, 0);
    },
    areasSelected: function areasSelected(value) {
      var _this13 = this;
      if (!this.morePieces) {
        _.map(this.items, function (item) {
          if (item.id === _this13.currentAction.id) {
            item.area = value[0];
            return false;
          }
        });
        this.$refs['modal-areas'].hide();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/budgets/budget-edit/BudgetEdit.vue?vue&type=style&index=0&id=a7db8fa0&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/budgets/budget-edit/BudgetEdit.vue?vue&type=style&index=0&id=a7db8fa0&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".repeater-form[data-v-a7db8fa0] {\n  overflow: hidden;\n  transition: 0.35s height;\n}\n.bucal-table[data-v-a7db8fa0] {\n  display: block;\n  overflow-x: auto;\n  white-space: nowrap;\n}\n[dir] .bucal-table[data-v-a7db8fa0] {\n  cursor: pointer !important;\n}\n.dental-img[data-v-a7db8fa0] {\n  width: 100%;\n  height: auto;\n}\n[dir] .dental-img[data-v-a7db8fa0] {\n  cursor: pointer;\n}\n[dir] .tooth-cell[data-v-a7db8fa0] {\n  cursor: pointer;\n  padding: 0px;\n  margin: 0px;\n  cursor: pointer;\n}\n[dir] .tooth-cell[data-v-a7db8fa0]:hover {\n  background-color: #aadfb1;\n  cursor: pointer;\n}\n[dir] .tooth-cell p[data-v-a7db8fa0] {\n  text-align: center;\n  cursor: pointer;\n}\n.tooth-cell:hover p[data-v-a7db8fa0] {\n  color: black !important;\n  font-weight: 600;\n}\n[dir] .tooth-cell label[data-v-a7db8fa0] {\n  padding: 0px;\n  margin: 0px;\n  cursor: pointer;\n}\ninput[type=checkbox][data-v-a7db8fa0] {\n  display: none;\n}\n[dir] input[type=checkbox] ~ div[data-v-a7db8fa0] {\n  padding: 1px;\n}\ninput[type=checkbox]:checked ~ div[data-v-a7db8fa0] {\n  width: 100%;\n}\n[dir] input[type=checkbox]:checked ~ div[data-v-a7db8fa0] {\n  background-color: #aadfb1;\n}\n[dir] .group-cell[data-v-a7db8fa0] {\n  text-align: center;\n  cursor: pointer;\n}\n[dir] .bucal-group[data-v-a7db8fa0] {\n  text-align: center;\n  cursor: pointer;\n}\n[dir] .group-cell[data-v-a7db8fa0]:hover {\n  background-color: #aadfb1;\n  cursor: pointer;\n}\n[dir] .half-row .mandibula[data-v-a7db8fa0] {\n  border-top: white !important;\n}\n[dir] .half-row[data-v-a7db8fa0] {\n  border-top: solid 2px #ada797;\n}\n[dir=ltr] .half-col[data-v-a7db8fa0] {\n  border-right: solid 2px #ada797 !important;\n}\n[dir=rtl] .half-col[data-v-a7db8fa0] {\n  border-left: solid 2px #ada797 !important;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/budgets/budget-edit/BudgetEdit.vue?vue&type=style&index=1&id=a7db8fa0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/budgets/budget-edit/BudgetEdit.vue?vue&type=style&index=1&id=a7db8fa0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/**\n    Support for SASS is deprecated as of v3.18.\n\n    The files remain here if your build is dependent on them\n    but they will not receive updates in future releases. All\n    SASS variables have been translated into CSS variables, so\n    migration should be quite simple if you'd like to move over.\n\n    In v4, these files will be removed.\n */\n.v-select {\n  position: relative;\n  font-family: inherit;\n}\n.v-select,\n.v-select * {\n  box-sizing: border-box;\n}\n\n/* KeyFrames */\n@-webkit-keyframes vSelectSpinner-ltr {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@-webkit-keyframes vSelectSpinner-rtl {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(-360deg);\n}\n}\n@keyframes vSelectSpinner-ltr {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes vSelectSpinner-rtl {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(-360deg);\n}\n}\n/* Dropdown Default Transition */\n.vs__fade-enter-active,\n.vs__fade-leave-active {\n  pointer-events: none;\n  transition: opacity 0.15s cubic-bezier(1, 0.5, 0.8, 1);\n}\n.vs__fade-enter,\n.vs__fade-leave-to {\n  opacity: 0;\n}\n\n/** Component States */\n/*\n * Disabled\n *\n * When the component is disabled, all interaction\n * should be prevented. Here we modify the bg color,\n * and change the cursor displayed on the interactive\n * components.\n */\n[dir] .vs--disabled .vs__dropdown-toggle, [dir] .vs--disabled .vs__clear, [dir] .vs--disabled .vs__search, [dir] .vs--disabled .vs__selected, [dir] .vs--disabled .vs__open-indicator {\n  cursor: not-allowed;\n  background-color: #f8f8f8;\n}\n\n/*\n *  RTL - Right to Left Support\n *\n *  Because we're using a flexbox layout, the `dir=\"rtl\"`\n *  HTML attribute does most of the work for us by\n *  rearranging the child elements visually.\n */\n.v-select[dir=rtl] .vs__actions {\n  padding: 0 3px 0 6px;\n}\n.v-select[dir=rtl] .vs__clear {\n  margin-left: 6px;\n  margin-right: 0;\n}\n.v-select[dir=rtl] .vs__deselect {\n  margin-left: 0;\n  margin-right: 2px;\n}\n.v-select[dir=rtl] .vs__dropdown-menu {\n  text-align: right;\n}\n\n/**\n    Dropdown Toggle\n\n    The dropdown toggle is the primary wrapper of the component. It\n    has two direct descendants: .vs__selected-options, and .vs__actions.\n\n    .vs__selected-options holds the .vs__selected's as well as the\n    main search input.\n\n    .vs__actions holds the clear button and dropdown toggle.\n */\n.vs__dropdown-toggle {\n  appearance: none;\n  display: flex;\n  white-space: normal;\n}\n[dir] .vs__dropdown-toggle {\n  padding: 0 0 4px 0;\n  background: none;\n  border: 1px solid #d8d6de;\n  border-radius: 0.357rem;\n}\n.vs__selected-options {\n  display: flex;\n  flex-basis: 100%;\n  flex-grow: 1;\n  flex-wrap: wrap;\n  position: relative;\n}\n[dir] .vs__selected-options {\n  padding: 0 2px;\n}\n.vs__actions {\n  display: flex;\n  align-items: center;\n}\n[dir=ltr] .vs__actions {\n  padding: 4px 6px 0 3px;\n}\n[dir=rtl] .vs__actions {\n  padding: 4px 3px 0 6px;\n}\n\n/* Dropdown Toggle States */\n[dir] .vs--searchable .vs__dropdown-toggle {\n  cursor: text;\n}\n[dir] .vs--unsearchable .vs__dropdown-toggle {\n  cursor: pointer;\n}\n[dir] .vs--open .vs__dropdown-toggle {\n  border-bottom-color: transparent;\n}\n[dir=ltr] .vs--open .vs__dropdown-toggle {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n[dir=rtl] .vs--open .vs__dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.vs__open-indicator {\n  fill: rgba(60, 60, 60, 0.5);\n  transition: transform 150ms cubic-bezier(1, -0.115, 0.975, 0.855);\n}\n[dir] .vs__open-indicator {\n  transform: scale(1);\n  transition-timing-function: cubic-bezier(1, -0.115, 0.975, 0.855);\n}\n[dir=ltr] .vs--open .vs__open-indicator {\n  transform: rotate(180deg) scale(1);\n}\n[dir=rtl] .vs--open .vs__open-indicator {\n  transform: rotate(-180deg) scale(1);\n}\n.vs--loading .vs__open-indicator {\n  opacity: 0;\n}\n\n/* Clear Button */\n.vs__clear {\n  fill: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__clear {\n  padding: 0;\n  border: 0;\n  background-color: transparent;\n  cursor: pointer;\n}\n[dir=ltr] .vs__clear {\n  margin-right: 8px;\n}\n[dir=rtl] .vs__clear {\n  margin-left: 8px;\n}\n\n/* Dropdown Menu */\n.vs__dropdown-menu {\n  display: block;\n  box-sizing: border-box;\n  position: absolute;\n  top: calc(100% - 1px);\n  z-index: 1000;\n  width: 100%;\n  max-height: 350px;\n  min-width: 160px;\n  overflow-y: auto;\n  list-style: none;\n}\n[dir] .vs__dropdown-menu {\n  padding: 5px 0;\n  margin: 0;\n  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.1);\n  border: 1px solid #d8d6de;\n  border-top-style: none;\n  border-radius: 0 0 0.357rem 0.357rem;\n  background: #fff;\n}\n[dir=ltr] .vs__dropdown-menu {\n  left: 0;\n  text-align: left;\n}\n[dir=rtl] .vs__dropdown-menu {\n  right: 0;\n  text-align: right;\n}\n[dir] .vs__no-options {\n  text-align: center;\n}\n\n/* List Items */\n.vs__dropdown-option {\n  line-height: 1.42857143;\n  /* Normalize line height */\n  display: block;\n  color: #333;\n  /* Overrides most CSS frameworks */\n  white-space: nowrap;\n}\n[dir] .vs__dropdown-option {\n  padding: 3px 20px;\n  clear: both;\n  cursor: pointer;\n}\n.vs__dropdown-option--highlight {\n  color: #7367f0 !important;\n}\n[dir] .vs__dropdown-option--highlight {\n  background: rgba(115, 103, 240, 0.12);\n}\n.vs__dropdown-option--deselect {\n  color: #fff;\n}\n[dir] .vs__dropdown-option--deselect {\n  background: #fb5858;\n}\n.vs__dropdown-option--disabled {\n  color: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__dropdown-option--disabled {\n  background: inherit;\n  cursor: inherit;\n}\n\n/* Selected Tags */\n.vs__selected {\n  display: flex;\n  align-items: center;\n  color: #333;\n  line-height: 1.8;\n  z-index: 0;\n}\n[dir] .vs__selected {\n  background-color: #7367f0;\n  border: 0 solid rgba(60, 60, 60, 0.26);\n  border-radius: 0.357rem;\n  margin: 4px 2px 0px 2px;\n  padding: 0 0.25em;\n}\n.vs__deselect {\n  display: inline-flex;\n  appearance: none;\n  fill: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__deselect {\n  padding: 0;\n  border: 0;\n  cursor: pointer;\n  background: none;\n  text-shadow: 0 1px 0 #fff;\n}\n[dir=ltr] .vs__deselect {\n  margin-left: 4px;\n}\n[dir=rtl] .vs__deselect {\n  margin-right: 4px;\n}\n\n/* States */\n[dir] .vs--single .vs__selected {\n  background-color: transparent;\n  border-color: transparent;\n}\n.vs--single.vs--open .vs__selected, .vs--single.vs--loading .vs__selected {\n  position: absolute;\n  opacity: 0.4;\n}\n.vs--single.vs--searching .vs__selected {\n  display: none;\n}\n\n/* Search Input */\n/**\n * Super weird bug... If this declaration is grouped\n * below, the cancel button will still appear in chrome.\n * If it's up here on it's own, it'll hide it.\n */\n.vs__search::-webkit-search-cancel-button {\n  display: none;\n}\n.vs__search::-webkit-search-decoration,\n.vs__search::-webkit-search-results-button,\n.vs__search::-webkit-search-results-decoration,\n.vs__search::-ms-clear {\n  display: none;\n}\n.vs__search,\n.vs__search:focus {\n  appearance: none;\n  line-height: 1.8;\n  font-size: 1em;\n  outline: none;\n  width: 0;\n  max-width: 100%;\n  flex-grow: 1;\n  z-index: 1;\n}\n[dir] .vs__search, [dir] .vs__search:focus {\n  border: 1px solid transparent;\n  margin: 4px 0 0 0;\n  padding: 0 7px;\n  background: none;\n  box-shadow: none;\n}\n[dir=ltr] .vs__search, [dir=ltr] .vs__search:focus {\n  border-left: none;\n}\n[dir=rtl] .vs__search, [dir=rtl] .vs__search:focus {\n  border-right: none;\n}\n.vs__search::placeholder {\n  color: #6e6b7b;\n}\n\n/**\n    States\n */\n.vs--unsearchable .vs__search {\n  opacity: 1;\n}\n[dir] .vs--unsearchable:not(.vs--disabled) .vs__search {\n  cursor: pointer;\n}\n.vs--single.vs--searching:not(.vs--open):not(.vs--loading) .vs__search {\n  opacity: 0.2;\n}\n\n/* Loading Spinner */\n.vs__spinner {\n  align-self: center;\n  opacity: 0;\n  font-size: 5px;\n  text-indent: -9999em;\n  overflow: hidden;\n  transition: opacity 0.1s;\n}\n[dir] .vs__spinner {\n  border-top: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-bottom: 0.9em solid rgba(100, 100, 100, 0.1);\n  transform: translateZ(0);\n}\n[dir=ltr] .vs__spinner {\n  border-right: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-left: 0.9em solid rgba(60, 60, 60, 0.45);\n  animation:  vSelectSpinner-ltr 1.1s infinite linear;\n}\n[dir=rtl] .vs__spinner {\n  border-left: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-right: 0.9em solid rgba(60, 60, 60, 0.45);\n  animation:  vSelectSpinner-rtl 1.1s infinite linear;\n}\n.vs__spinner,\n.vs__spinner:after {\n  width: 5em;\n  height: 5em;\n}\n[dir] .vs__spinner, [dir] .vs__spinner:after {\n  border-radius: 50%;\n}\n\n/* Loading Spinner States */\n.vs--loading .vs__spinner {\n  opacity: 1;\n}\n.vs__open-indicator {\n  fill: none;\n}\n[dir] .vs__open-indicator {\n  margin-top: 0.15rem;\n}\n.vs__dropdown-toggle {\n  transition: all 0.25s ease-in-out;\n}\n[dir] .vs__dropdown-toggle {\n  padding: 0.59px 0 4px 0;\n}\n[dir=ltr] .vs--single .vs__dropdown-toggle {\n  padding-left: 6px;\n}\n[dir=rtl] .vs--single .vs__dropdown-toggle {\n  padding-right: 6px;\n}\n.vs__dropdown-option--disabled {\n  opacity: 0.5;\n}\n[dir] .vs__dropdown-option--disabled.vs__dropdown-option--selected {\n  background: #7367f0 !important;\n}\n.vs__dropdown-option {\n  color: #6e6b7b;\n}\n[dir] .vs__dropdown-option, [dir] .vs__no-options {\n  padding: 7px 20px;\n}\n.vs__dropdown-option--selected {\n  background-color: #7367f0;\n  color: #fff;\n  position: relative;\n}\n.vs__dropdown-option--selected::after {\n  content: \"\";\n  height: 1.1rem;\n  width: 1.1rem;\n  display: inline-block;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  right: 20px;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-check'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 1.1rem;\n}\n[dir=rtl] .vs__dropdown-option--selected::after {\n  left: 20px;\n  right: unset;\n}\n.vs__dropdown-option--selected.vs__dropdown-option--highlight {\n  color: #fff !important;\n  background-color: #7367f0 !important;\n}\n.vs__clear svg {\n  color: #6e6b7b;\n}\n.vs__selected {\n  color: #fff;\n}\n.v-select.vs--single .vs__selected {\n  color: #6e6b7b;\n  transition: transform 0.2s ease;\n}\n[dir] .v-select.vs--single .vs__selected {\n  margin-top: 5px;\n}\n[dir=ltr] .v-select.vs--single .vs__selected input {\n  padding-left: 0;\n}\n[dir=rtl] .v-select.vs--single .vs__selected input {\n  padding-right: 0;\n}\n[dir=ltr] .vs--single.vs--open .vs__selected {\n  transform: translateX(5px);\n}\n[dir=rtl] .vs--single.vs--open .vs__selected {\n  transform: translateX(-5px);\n}\n.vs__selected .vs__deselect {\n  color: inherit;\n}\n.v-select:not(.vs--single) .vs__selected {\n  font-size: 0.9rem;\n}\n[dir] .v-select:not(.vs--single) .vs__selected {\n  border-radius: 3px;\n  padding: 0 0.6em;\n}\n[dir=ltr] .v-select:not(.vs--single) .vs__selected {\n  margin: 5px 2px 2px 5px;\n}\n[dir=rtl] .v-select:not(.vs--single) .vs__selected {\n  margin: 5px 5px 2px 2px;\n}\n.v-select:not(.vs--single) .vs__deselect svg {\n  vertical-align: text-top;\n}\n[dir] .v-select:not(.vs--single) .vs__deselect svg {\n  transform: scale(0.8);\n}\n.vs__dropdown-menu {\n  top: calc(100% + 1rem);\n}\n[dir] .vs__dropdown-menu {\n  border: none;\n  border-radius: 6px;\n  padding: 0;\n}\n[dir] .vs--open .vs__dropdown-toggle {\n  border-color: #7367f0;\n  border-bottom-color: #7367f0;\n  box-shadow: 0 3px 10px 0 rgba(34, 41, 47, 0.1);\n}\n[dir=ltr] .vs--open .vs__dropdown-toggle {\n  border-bottom-left-radius: 0.357rem;\n  border-bottom-right-radius: 0.357rem;\n}\n[dir=rtl] .vs--open .vs__dropdown-toggle {\n  border-bottom-right-radius: 0.357rem;\n  border-bottom-left-radius: 0.357rem;\n}\n.select-size-lg .vs__selected {\n  font-size: 1rem !important;\n}\n[dir] .select-size-lg.vs--single.vs--open .vs__selected {\n  margin-top: 6px;\n}\n.select-size-lg .vs__dropdown-toggle,\n.select-size-lg .vs__selected {\n  font-size: 1.25rem;\n}\n[dir] .select-size-lg .vs__dropdown-toggle {\n  padding: 5px;\n}\n[dir] .select-size-lg .vs__dropdown-toggle input {\n  margin-top: 0;\n}\n.select-size-lg .vs__deselect svg {\n  vertical-align: middle !important;\n}\n[dir] .select-size-lg .vs__deselect svg {\n  transform: scale(1) !important;\n}\n[dir] .select-size-sm .vs__dropdown-toggle {\n  padding-bottom: 0;\n  padding: 1px;\n}\n[dir] .select-size-sm.vs--single .vs__dropdown-toggle {\n  padding: 2px;\n}\n.select-size-sm .vs__dropdown-toggle,\n.select-size-sm .vs__selected {\n  font-size: 0.9rem;\n}\n[dir] .select-size-sm .vs__actions {\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n.select-size-sm .vs__deselect svg {\n  vertical-align: middle !important;\n}\n[dir] .select-size-sm .vs__search {\n  margin-top: 0;\n}\n.select-size-sm.v-select .vs__selected {\n  font-size: 0.75rem;\n}\n[dir] .select-size-sm.v-select .vs__selected {\n  padding: 0 0.3rem;\n}\n[dir] .select-size-sm.v-select:not(.vs--single) .vs__selected {\n  margin: 4px 5px;\n}\n[dir] .select-size-sm.v-select.vs--single .vs__selected {\n  margin-top: 1px;\n}\n[dir] .select-size-sm.vs--single.vs--open .vs__selected {\n  margin-top: 4px;\n}\n.dark-layout .vs__dropdown-toggle {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .vs__dropdown-toggle {\n  background: #283046;\n  border-color: #404656;\n}\n.dark-layout .vs__selected-options input {\n  color: #b4b7bd;\n}\n.dark-layout .vs__selected-options input::placeholder {\n  color: #676d7d;\n}\n.dark-layout .vs__actions svg {\n  fill: #404656;\n}\n[dir] .dark-layout .vs__dropdown-menu {\n  background: #283046;\n}\n.dark-layout .vs__dropdown-menu li {\n  color: #b4b7bd;\n}\n.dark-layout .v-select:not(.vs--single) .vs__selected {\n  color: #7367f0;\n}\n[dir] .dark-layout .v-select:not(.vs--single) .vs__selected {\n  background-color: rgba(115, 103, 240, 0.12);\n}\n.dark-layout .v-select.vs--single .vs__selected {\n  color: #b4b7bd !important;\n}\n.dark-layout .vs--disabled .vs__dropdown-toggle,\n.dark-layout .vs--disabled .vs__clear,\n.dark-layout .vs--disabled .vs__search,\n.dark-layout .vs--disabled .vs__selected,\n.dark-layout .vs--disabled .vs__open-indicator {\n  opacity: 0.5;\n}\n[dir] .dark-layout .vs--disabled .vs__dropdown-toggle, [dir] .dark-layout .vs--disabled .vs__clear, [dir] .dark-layout .vs--disabled .vs__search, [dir] .dark-layout .vs--disabled .vs__selected, [dir] .dark-layout .vs--disabled .vs__open-indicator {\n  background-color: #283046;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/budgets/budget-edit/BudgetEdit.vue?vue&type=style&index=0&id=a7db8fa0&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/budgets/budget-edit/BudgetEdit.vue?vue&type=style&index=0&id=a7db8fa0&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--12-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BudgetEdit.vue?vue&type=style&index=0&id=a7db8fa0&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/budgets/budget-edit/BudgetEdit.vue?vue&type=style&index=0&id=a7db8fa0&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/budgets/budget-edit/BudgetEdit.vue?vue&type=style&index=1&id=a7db8fa0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/budgets/budget-edit/BudgetEdit.vue?vue&type=style&index=1&id=a7db8fa0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--12-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BudgetEdit.vue?vue&type=style&index=1&id=a7db8fa0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/budgets/budget-edit/BudgetEdit.vue?vue&type=style&index=1&id=a7db8fa0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/budgets/budget-edit/BudgetEdit.vue?vue&type=template&id=a7db8fa0&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/budgets/budget-edit/BudgetEdit.vue?vue&type=template&id=a7db8fa0&scoped=true& ***!
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
        "b-alert",
        {
          attrs: {
            variant: "danger",
            show: _vm.budget.length <= 0 && !_vm.loading,
          },
        },
        [
          _c("h4", { staticClass: "alert-heading" }, [
            _vm._v("Error fetching budget data"),
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "alert-body" },
            [
              _vm._v(
                "\n            No budget found with this budget id. Check\n            "
              ),
              _c(
                "b-link",
                {
                  staticClass: "alert-link",
                  attrs: { to: { name: "apps-budgets-list" } },
                },
                [_vm._v("\n                Budget List\n            ")]
              ),
              _vm._v("\n            for other budget.\n        "),
            ],
            1
          ),
        ]
      ),
      _vm._v(" "),
      !_vm.isEmpty(_vm.budget) && !_vm.loading
        ? _c(
            "section",
            { staticClass: "invoice-preview-wrapper" },
            [
              _c(
                "b-row",
                { staticClass: "invoice-preview" },
                [
                  _c(
                    "b-col",
                    { attrs: { cols: "12", xl: "12", md: "12" } },
                    [
                      _c(
                        "b-card",
                        {
                          staticClass: "invoice-preview-card",
                          attrs: { "no-body": "" },
                        },
                        [
                          _c(
                            "b-card-body",
                            { staticClass: "invoice-padding pb-0" },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "d-flex justify-content-between flex-md-row flex-column invoice-spacing mt-0",
                                },
                                [
                                  _c("div", [
                                    _c("div", { staticClass: "logo-wrapper" }, [
                                      _c(
                                        "h3",
                                        {
                                          staticClass:
                                            "text-primary invoice-logo",
                                        },
                                        [
                                          _vm._v(
                                            "\n                                        " +
                                              _vm._s(
                                                _vm.findSetting("app_name")
                                              ) +
                                              "\n                                    "
                                          ),
                                        ]
                                      ),
                                    ]),
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "mt-md-0 mt-2" },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "mt-md-0 mt-2" },
                                        [
                                          _c("h5", [
                                            _vm._v(
                                              _vm._s(_vm.$t("budgets.folio")) +
                                                ": " +
                                                _vm._s(_vm.budget.label)
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("small", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.$t("budgets.date_issued")
                                              ) +
                                                "\n                                        " +
                                                _vm._s(
                                                  _vm.formatDate(
                                                    _vm.budget.created_at
                                                  )
                                                )
                                            ),
                                          ]),
                                          _c("br"),
                                          _vm._v(" "),
                                          _c("small", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.$t("budgets.table_approved")
                                              ) + ": "
                                            ),
                                            _c(
                                              "span",
                                              {
                                                class:
                                                  "badge badge-light-" +
                                                  _vm.resolveStatusVariant(
                                                    _vm.budget.approved
                                                  ),
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.formatActive(
                                                      _vm.budget.approved
                                                    )
                                                  )
                                                ),
                                              ]
                                            ),
                                          ]),
                                          _c("br"),
                                          _vm._v(" "),
                                          _vm.budget
                                            ? _c("small", [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.$t(
                                                      "budgets.transmitter"
                                                    )
                                                  ) +
                                                    " " +
                                                    _vm._s(_vm.budget.user.name)
                                                ),
                                              ])
                                            : _vm._e(),
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
                                              value:
                                                "rgba(255, 255, 255, 0.15)",
                                              expression:
                                                "'rgba(255, 255, 255, 0.15)'",
                                              modifiers: { 400: true },
                                            },
                                          ],
                                          staticClass: "mb-75",
                                          attrs: {
                                            size: "sm",
                                            variant: "outline-primary",
                                            block: "",
                                          },
                                          on: {
                                            click: function ($event) {
                                              return _vm.$router.back()
                                            },
                                          },
                                        },
                                        [
                                          _vm._v(
                                            "\n                                    " +
                                              _vm._s(_vm.$t("back")) +
                                              "\n                                "
                                          ),
                                        ]
                                      ),
                                    ],
                                    1
                                  ),
                                ]
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _c("hr", { staticClass: "invoice-spacing" }),
                          _vm._v(" "),
                          _c(
                            "b-card-body",
                            { staticClass: "invoice-padding pt-0" },
                            [
                              _c(
                                "b-row",
                                { staticClass: "invoice-spacing" },
                                [
                                  _c(
                                    "b-col",
                                    {
                                      staticClass: "p-1",
                                      attrs: { cols: "12", xl: "6" },
                                    },
                                    [
                                      _c(
                                        "b-form-group",
                                        {
                                          attrs: {
                                            label: _vm.$t("branch_office"),
                                            "label-for": "branch_office_id",
                                          },
                                        },
                                        [
                                          _c("v-select", {
                                            staticClass: "select-size-sm",
                                            attrs: {
                                              disabled: true,
                                              options: _vm.branchs,
                                              label: "name",
                                              "input-id": "branch_office_id",
                                            },
                                            model: {
                                              value: _vm.selectedBranch,
                                              callback: function ($$v) {
                                                _vm.selectedBranch = $$v
                                              },
                                              expression: "selectedBranch",
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-form-group",
                                        {
                                          attrs: {
                                            label: _vm.$t("budgets.patient"),
                                            "label-for": "patient",
                                          },
                                        },
                                        [
                                          _c("b-form-input", {
                                            attrs: {
                                              size: "sm",
                                              id: "patient",
                                              readonly: "",
                                            },
                                            model: {
                                              value:
                                                _vm.budget.patient.full_name,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.budget.patient,
                                                  "full_name",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "budget.patient.full_name",
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-card-body",
                                        { staticClass: "invoice-padding pt-0" },
                                        [
                                          _c(
                                            "b-row",
                                            { staticClass: "invoice-spacing" },
                                            [
                                              _c(
                                                "b-col",
                                                {
                                                  staticClass: "p-1",
                                                  attrs: {
                                                    cols: "12",
                                                    xl: "12",
                                                  },
                                                },
                                                [
                                                  _c(
                                                    "p",
                                                    {
                                                      staticClass:
                                                        "card-text mb-25",
                                                    },
                                                    [
                                                      _c("strong", [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.$t(
                                                              "patients.document_type"
                                                            )
                                                          ) +
                                                            "(" +
                                                            _vm._s(
                                                              _vm.budget.patient
                                                                .document_type
                                                            ) +
                                                            "):"
                                                        ),
                                                      ]),
                                                      _vm._v(
                                                        "\n                                                " +
                                                          _vm._s(
                                                            _vm.budget.patient
                                                              .rut
                                                          ) +
                                                          "\n                                            "
                                                      ),
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "p",
                                                    {
                                                      staticClass:
                                                        "card-text mb-25",
                                                    },
                                                    [
                                                      _c("strong", [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.$t(
                                                              "patients.address"
                                                            )
                                                          ) + ":"
                                                        ),
                                                      ]),
                                                      _vm._v(
                                                        "\n                                                " +
                                                          _vm._s(
                                                            _vm.budget.patient
                                                              .address
                                                          ) +
                                                          "\n                                            "
                                                      ),
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "p",
                                                    {
                                                      staticClass:
                                                        "card-text mb-25",
                                                    },
                                                    [
                                                      _c("strong", [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.$t(
                                                              "patients.phone"
                                                            )
                                                          ) + ":"
                                                        ),
                                                      ]),
                                                      _vm._v(
                                                        "\n                                                " +
                                                          _vm._s(
                                                            _vm.budget.patient
                                                              .phone
                                                          ) +
                                                          "," +
                                                          _vm._s(
                                                            _vm.budget.patient
                                                              .cellphone
                                                          ) +
                                                          "\n                                            "
                                                      ),
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "p",
                                                    {
                                                      staticClass:
                                                        "card-text mb-25",
                                                    },
                                                    [
                                                      _c("strong", [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.$t(
                                                              "patients.email"
                                                            )
                                                          ) + ":"
                                                        ),
                                                      ]),
                                                      _vm._v(
                                                        "\n                                                " +
                                                          _vm._s(
                                                            _vm.budget.patient
                                                              .email
                                                          ) +
                                                          "\n                                            "
                                                      ),
                                                    ]
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
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    {
                                      staticClass:
                                        "pt-2 mt-xl-0 mt-2 d-flex justify-content-xl-end",
                                      attrs: { xl: "6", cols: "12" },
                                    },
                                    [
                                      _c("div", [
                                        _c("h6", { staticClass: "mb-2" }, [
                                          _vm._v(
                                            "\n                                        " +
                                              _vm._s(
                                                _vm.$t(
                                                  "payments.balance_general"
                                                )
                                              ) +
                                              ":\n                                    "
                                          ),
                                        ]),
                                        _vm._v(" "),
                                        _c("table", [
                                          _c("tbody", [
                                            _c("tr", [
                                              _c(
                                                "td",
                                                { staticClass: "pe-1" },
                                                [
                                                  _vm._v(
                                                    "\n                                                    " +
                                                      _vm._s(
                                                        _vm.$t(
                                                          "patients.total_debt"
                                                        )
                                                      ) +
                                                      ":\n                                                "
                                                  ),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "td",
                                                {
                                                  attrs: {
                                                    "aria-colindex": "1",
                                                    role: "cell",
                                                  },
                                                },
                                                [
                                                  _c("strong", [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.formatPrice(
                                                          _vm.budget.patient
                                                            .total_debt
                                                        )
                                                      )
                                                    ),
                                                  ]),
                                                ]
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c("tr", [
                                              _c(
                                                "td",
                                                { staticClass: "pe-1" },
                                                [
                                                  _vm._v(
                                                    "\n                                                    " +
                                                      _vm._s(
                                                        _vm.$t(
                                                          "patients.positive_balance"
                                                        )
                                                      ) +
                                                      ":\n                                                "
                                                  ),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c("td", [
                                                _c("strong", [
                                                  _vm._v(
                                                    _vm._s(_vm.formatPrice(0))
                                                  ),
                                                ]),
                                              ]),
                                            ]),
                                          ]),
                                        ]),
                                      ]),
                                    ]
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-row",
                                { staticClass: "invoice-spacing" },
                                [
                                  _c(
                                    "b-col",
                                    {
                                      staticClass: "p-1",
                                      attrs: { cols: "12" },
                                    },
                                    [
                                      _c("h6", [
                                        _vm._v(
                                          "\n                                    " +
                                            _vm._s(_vm.$t("budgets.name")) +
                                            "\n                                "
                                        ),
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "b-form",
                                        {
                                          ref: "form",
                                          staticClass: "_repeater-form",
                                        },
                                        [
                                          _c(
                                            "b-row",
                                            [
                                              _c(
                                                "b-col",
                                                { attrs: { cols: "6" } },
                                                [
                                                  _c("b-form-input", {
                                                    attrs: {
                                                      size: "sm",
                                                      placeholder: _vm.$t(
                                                        "budgets.name_placeholder"
                                                      ),
                                                    },
                                                    model: {
                                                      value: _vm.budget.name,
                                                      callback: function ($$v) {
                                                        _vm.$set(
                                                          _vm.budget,
                                                          "name",
                                                          $$v
                                                        )
                                                      },
                                                      expression: "budget.name",
                                                    },
                                                  }),
                                                ],
                                                1
                                              ),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _vm._l(
                                            _vm.items,
                                            function (item, index) {
                                              return _c(
                                                "b-row",
                                                {
                                                  key: item.id,
                                                  ref: "row",
                                                  refInFor: true,
                                                  staticClass: "mt-1",
                                                  attrs: { id: item.id },
                                                },
                                                [
                                                  item.action_type ===
                                                  "clinical"
                                                    ? _c(
                                                        "b-col",
                                                        { attrs: { md: "3" } },
                                                        [
                                                          !item.isNew
                                                            ? _c(
                                                                "b-form-group",
                                                                {
                                                                  staticClass:
                                                                    "sm",
                                                                  attrs: {
                                                                    label:
                                                                      _vm.$t(
                                                                        "budgets.action_group"
                                                                      ),
                                                                    "label-for":
                                                                      "action_group",
                                                                  },
                                                                },
                                                                [
                                                                  _c(
                                                                    "b-form-input",
                                                                    {
                                                                      attrs: {
                                                                        size: "sm",
                                                                        readonly:
                                                                          "",
                                                                      },
                                                                      model: {
                                                                        value:
                                                                          item.action_group_name,
                                                                        callback:
                                                                          function (
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              item,
                                                                              "action_group_name",
                                                                              $$v
                                                                            )
                                                                          },
                                                                        expression:
                                                                          "item.action_group_name",
                                                                      },
                                                                    }
                                                                  ),
                                                                ],
                                                                1
                                                              )
                                                            : _c(
                                                                "b-form-group",
                                                                {
                                                                  staticClass:
                                                                    "sm",
                                                                  attrs: {
                                                                    label:
                                                                      _vm.$t(
                                                                        "budgets.action_group"
                                                                      ),
                                                                    "label-for":
                                                                      "action_group",
                                                                  },
                                                                },
                                                                [
                                                                  _c(
                                                                    "v-select",
                                                                    {
                                                                      staticClass:
                                                                        "select-size-sm",
                                                                      attrs: {
                                                                        options:
                                                                          _vm.actionGroups,
                                                                        label:
                                                                          "name",
                                                                        "input-id":
                                                                          "action_group",
                                                                      },
                                                                      on: {
                                                                        input:
                                                                          function (
                                                                            $event
                                                                          ) {
                                                                            return _vm.selectActionGroup(
                                                                              item
                                                                            )
                                                                          },
                                                                      },
                                                                      model: {
                                                                        value:
                                                                          item.action_group,
                                                                        callback:
                                                                          function (
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              item,
                                                                              "action_group",
                                                                              $$v
                                                                            )
                                                                          },
                                                                        expression:
                                                                          "item.action_group",
                                                                      },
                                                                    }
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
                                                    "b-col",
                                                    {
                                                      attrs: {
                                                        md:
                                                          item.action_type ===
                                                          "clinical"
                                                            ? 3
                                                            : 6,
                                                      },
                                                    },
                                                    [
                                                      !item.isNew
                                                        ? _c(
                                                            "b-form-group",
                                                            {
                                                              attrs: {
                                                                label:
                                                                  item.action_type ===
                                                                  "clinical"
                                                                    ? _vm.$t(
                                                                        "budgets.clinical_actions"
                                                                      )
                                                                    : _vm.$t(
                                                                        "budgets.laboratory_actions"
                                                                      ),
                                                                "label-for":
                                                                  "action",
                                                              },
                                                            },
                                                            [
                                                              _c(
                                                                "b-form-input",
                                                                {
                                                                  attrs: {
                                                                    size: "sm",
                                                                    readonly:
                                                                      "",
                                                                  },
                                                                  model: {
                                                                    value:
                                                                      item.action_name,
                                                                    callback:
                                                                      function (
                                                                        $$v
                                                                      ) {
                                                                        _vm.$set(
                                                                          item,
                                                                          "action_name",
                                                                          $$v
                                                                        )
                                                                      },
                                                                    expression:
                                                                      "item.action_name",
                                                                  },
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          )
                                                        : _c(
                                                            "b-form-group",
                                                            {
                                                              attrs: {
                                                                label:
                                                                  item.type ===
                                                                  "clinical"
                                                                    ? _vm.$t(
                                                                        "budgets.clinical_actions"
                                                                      )
                                                                    : _vm.$t(
                                                                        "budgets.laboratory_actions"
                                                                      ),
                                                                "label-for":
                                                                  "action",
                                                              },
                                                            },
                                                            [
                                                              _c("v-select", {
                                                                staticClass:
                                                                  "select-size-sm",
                                                                attrs: {
                                                                  options:
                                                                    _vm.actions,
                                                                  label: "name",
                                                                  "input-id":
                                                                    "action",
                                                                },
                                                                on: {
                                                                  input:
                                                                    function (
                                                                      $event
                                                                    ) {
                                                                      return _vm.selectAction(
                                                                        item
                                                                      )
                                                                    },
                                                                },
                                                                model: {
                                                                  value:
                                                                    item.selectedAction,
                                                                  callback:
                                                                    function (
                                                                      $$v
                                                                    ) {
                                                                      _vm.$set(
                                                                        item,
                                                                        "selectedAction",
                                                                        $$v
                                                                      )
                                                                    },
                                                                  expression:
                                                                    "item.selectedAction",
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
                                                              _vm.$t(
                                                                "budgets.cost"
                                                              ),
                                                            "label-for":
                                                              "price",
                                                          },
                                                        },
                                                        [
                                                          _c("b-form-input", {
                                                            attrs: {
                                                              size: "sm",
                                                              id: "price",
                                                              type: "number",
                                                              placeholder:
                                                                _vm.$t(
                                                                  "budgets.cost_placeholder"
                                                                ),
                                                            },
                                                            nativeOn: {
                                                              input: function (
                                                                $event
                                                              ) {
                                                                return _vm.calculateTotal(
                                                                  item
                                                                )
                                                              },
                                                            },
                                                            model: {
                                                              value: item.price,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    item,
                                                                    "price",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "item.price",
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
                                                              _vm.$t(
                                                                "budgets.discount"
                                                              ),
                                                            "label-for":
                                                              "discount",
                                                          },
                                                        },
                                                        [
                                                          _c("b-form-input", {
                                                            attrs: {
                                                              size: "sm",
                                                              id: "discount",
                                                              placeholder:
                                                                _vm.$t(
                                                                  "budgets.discount_placeholder"
                                                                ),
                                                            },
                                                            nativeOn: {
                                                              input: function (
                                                                $event
                                                              ) {
                                                                return _vm.calculateTotal(
                                                                  item
                                                                )
                                                              },
                                                            },
                                                            model: {
                                                              value:
                                                                item.discount,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    item,
                                                                    "discount",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "item.discount",
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
                                                    { attrs: { md: "1" } },
                                                    [
                                                      _c(
                                                        "b-form-group",
                                                        {
                                                          attrs: {
                                                            label:
                                                              _vm.$t(
                                                                "budgets.area"
                                                              ),
                                                            "label-for": "area",
                                                          },
                                                        },
                                                        [
                                                          _c(
                                                            "b-input-group",
                                                            {
                                                              on: {
                                                                click:
                                                                  function (
                                                                    $event
                                                                  ) {
                                                                    return _vm.openModalAreas(
                                                                      item
                                                                    )
                                                                  },
                                                              },
                                                            },
                                                            [
                                                              _c(
                                                                "b-form-input",
                                                                {
                                                                  attrs: {
                                                                    size: "sm",
                                                                    type: "text",
                                                                    placeholder:
                                                                      _vm.$t(
                                                                        "budgets.area_placeholder"
                                                                      ),
                                                                  },
                                                                  model: {
                                                                    value:
                                                                      item.area,
                                                                    callback:
                                                                      function (
                                                                        $$v
                                                                      ) {
                                                                        _vm.$set(
                                                                          item,
                                                                          "area",
                                                                          $$v
                                                                        )
                                                                      },
                                                                    expression:
                                                                      "item.area",
                                                                  },
                                                                }
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
                                                    {
                                                      staticClass: "mb-50",
                                                      attrs: { md: "1" },
                                                    },
                                                    [
                                                      _c(
                                                        "b-button",
                                                        {
                                                          directives: [
                                                            {
                                                              name: "ripple",
                                                              rawName:
                                                                "v-ripple.400",
                                                              value:
                                                                "rgba(234, 84, 85, 0.15)",
                                                              expression:
                                                                "'rgba(234, 84, 85, 0.15)'",
                                                              modifiers: {
                                                                400: true,
                                                              },
                                                            },
                                                          ],
                                                          staticClass:
                                                            "mt-0 mt-md-2",
                                                          attrs: {
                                                            size: "sm",
                                                            variant: "danger",
                                                          },
                                                          on: {
                                                            click: function (
                                                              $event
                                                            ) {
                                                              return _vm.removeItem(
                                                                index
                                                              )
                                                            },
                                                          },
                                                        },
                                                        [
                                                          _c("feather-icon", {
                                                            attrs: {
                                                              icon: "XIcon",
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
                                            }
                                          ),
                                        ],
                                        2
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "demo-inline-spacing" },
                                        [
                                          _c(
                                            "b-button",
                                            {
                                              directives: [
                                                {
                                                  name: "ripple",
                                                  rawName: "v-ripple.400",
                                                  value:
                                                    "rgba(255, 255, 255, 0.15)",
                                                  expression:
                                                    "'rgba(255, 255, 255, 0.15)'",
                                                  modifiers: { 400: true },
                                                },
                                              ],
                                              staticClass: "mt-2",
                                              attrs: {
                                                size: "sm",
                                                variant: "outline-primary",
                                              },
                                              on: {
                                                click: function ($event) {
                                                  return _vm.repeateAgain(
                                                    "clinical"
                                                  )
                                                },
                                              },
                                            },
                                            [
                                              _c("feather-icon", {
                                                staticClass: "mr-25",
                                                attrs: { icon: "PlusIcon" },
                                              }),
                                              _vm._v(" "),
                                              _c("span", [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.$t(
                                                      "budgets.clinical_action"
                                                    )
                                                  )
                                                ),
                                              ]),
                                            ],
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
                                                  value:
                                                    "rgba(255, 255, 255, 0.15)",
                                                  expression:
                                                    "'rgba(255, 255, 255, 0.15)'",
                                                  modifiers: { 400: true },
                                                },
                                              ],
                                              staticClass: "mt-2",
                                              attrs: {
                                                size: "sm",
                                                variant: "outline-primary",
                                              },
                                              on: {
                                                click: function ($event) {
                                                  return _vm.repeateAgain(
                                                    "laboratory"
                                                  )
                                                },
                                              },
                                            },
                                            [
                                              _c("feather-icon", {
                                                staticClass: "mr-25",
                                                attrs: { icon: "PlusIcon" },
                                              }),
                                              _vm._v(" "),
                                              _c("span", [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.$t(
                                                      "budgets.laboratory_action"
                                                    )
                                                  )
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
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm.items.length > 0
                            ? _c(
                                "b-card-body",
                                { staticClass: "invoice-padding pb-0_" },
                                [
                                  _c(
                                    "b-row",
                                    [
                                      _c(
                                        "b-col",
                                        {
                                          staticClass: "mt-md-0 mt-3",
                                          attrs: { cols: "12", md: "6" },
                                        },
                                        [
                                          _c(
                                            "b-card-text",
                                            { staticClass: "mb-0" },
                                            [
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "font-weight-bold",
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.$t("budgets.comments")
                                                    ) + ":"
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("b-form-textarea", {
                                            attrs: {
                                              id: "comments",
                                              placeholder: _vm.$t(
                                                "budgets.comments_placeholder"
                                              ),
                                              rows: "3",
                                            },
                                            model: {
                                              value: _vm.budget.comments,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.budget,
                                                  "comments",
                                                  $$v
                                                )
                                              },
                                              expression: "budget.comments",
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-col",
                                        {
                                          staticClass:
                                            "mt-md-0 mt-3 d-flex justify-content-end",
                                          attrs: { cols: "12", md: "6" },
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "invoice-total-wrapper",
                                            },
                                            [
                                              _c("table", [
                                                _c("tbody", [
                                                  _c("tr", [
                                                    _c(
                                                      "td",
                                                      { staticClass: "pe-1" },
                                                      [
                                                        _c(
                                                          "p",
                                                          {
                                                            staticClass:
                                                              "invoice-total-title",
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                                        " +
                                                                _vm._s(
                                                                  _vm.$t(
                                                                    "budgets.subtotal"
                                                                  )
                                                                ) +
                                                                ":\n                                                    "
                                                            ),
                                                          ]
                                                        ),
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "td",
                                                      {
                                                        attrs: {
                                                          "aria-colindex": "1",
                                                          role: "cell",
                                                        },
                                                      },
                                                      [
                                                        _c(
                                                          "p",
                                                          {
                                                            staticClass:
                                                              "invoice-total-amount",
                                                          },
                                                          [
                                                            _c("strong", [
                                                              _vm._v(
                                                                "\n                                                            " +
                                                                  _vm._s(
                                                                    _vm.formatPrice(
                                                                      _vm.items.reduce(
                                                                        function (
                                                                          carry,
                                                                          action
                                                                        ) {
                                                                          return (
                                                                            carry +
                                                                            parseFloat(
                                                                              action.price
                                                                            )
                                                                          )
                                                                        },
                                                                        0
                                                                      )
                                                                    )
                                                                  ) +
                                                                  "\n                                                        "
                                                              ),
                                                            ]),
                                                          ]
                                                        ),
                                                      ]
                                                    ),
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("tr", [
                                                    _c(
                                                      "td",
                                                      { staticClass: "pe-1" },
                                                      [
                                                        _c(
                                                          "p",
                                                          {
                                                            staticClass:
                                                              "invoice-total-title",
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                                        " +
                                                                _vm._s(
                                                                  _vm.$t(
                                                                    "budgets.discount"
                                                                  )
                                                                ) +
                                                                ":\n                                                    "
                                                            ),
                                                          ]
                                                        ),
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c("td", [
                                                      _c(
                                                        "p",
                                                        {
                                                          staticClass:
                                                            "invoice-total-amount",
                                                        },
                                                        [
                                                          _c("strong", [
                                                            _vm._v(
                                                              _vm._s(
                                                                _vm.items.reduce(
                                                                  function (
                                                                    carry,
                                                                    action
                                                                  ) {
                                                                    return (
                                                                      carry +
                                                                      parseFloat(
                                                                        action.discount
                                                                      )
                                                                    )
                                                                  },
                                                                  0
                                                                )
                                                              )
                                                            ),
                                                          ]),
                                                        ]
                                                      ),
                                                    ]),
                                                  ]),
                                                  _vm._v(" "),
                                                  _vm.isEnabledTax
                                                    ? _c("tr", [
                                                        _c(
                                                          "td",
                                                          {
                                                            staticClass: "pe-1",
                                                          },
                                                          [
                                                            _c(
                                                              "p",
                                                              {
                                                                staticClass:
                                                                  "invoice-total-title",
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "\n                                                        " +
                                                                    _vm._s(
                                                                      _vm.$t(
                                                                        "budgets.tax"
                                                                      )
                                                                    ) +
                                                                    "\n                                                        (" +
                                                                    _vm._s(
                                                                      _vm.findSetting(
                                                                        "default_tax"
                                                                      )
                                                                    ) +
                                                                    "%):\n                                                    "
                                                                ),
                                                              ]
                                                            ),
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c("td", [
                                                          _c(
                                                            "p",
                                                            {
                                                              staticClass:
                                                                "invoice-total-amount",
                                                            },
                                                            [
                                                              _c("strong", [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    _vm.formatPrice(
                                                                      (_vm.items.reduce(
                                                                        function (
                                                                          carry,
                                                                          action
                                                                        ) {
                                                                          return (
                                                                            carry +
                                                                            parseFloat(
                                                                              action.price
                                                                            ) -
                                                                            parseFloat(
                                                                              action.discount
                                                                            )
                                                                          )
                                                                        },
                                                                        0
                                                                      ) *
                                                                        _vm.findSetting(
                                                                          "default_tax"
                                                                        )) /
                                                                        100
                                                                    )
                                                                  )
                                                                ),
                                                              ]),
                                                            ]
                                                          ),
                                                        ]),
                                                      ])
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  _c("tr", [
                                                    _c(
                                                      "td",
                                                      { staticClass: "pe-1" },
                                                      [
                                                        _c(
                                                          "p",
                                                          {
                                                            staticClass:
                                                              "invoice-total-title",
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                                        " +
                                                                _vm._s(
                                                                  _vm.$t(
                                                                    "budgets.total"
                                                                  )
                                                                ) +
                                                                ":\n                                                    "
                                                            ),
                                                          ]
                                                        ),
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c("td", [
                                                      _c(
                                                        "p",
                                                        {
                                                          staticClass:
                                                            "invoice-total-amount",
                                                        },
                                                        [
                                                          _c("strong", [
                                                            _vm._v(
                                                              "\n                                                            " +
                                                                _vm._s(
                                                                  _vm.formatPrice(
                                                                    _vm.items.reduce(
                                                                      function (
                                                                        carry,
                                                                        action
                                                                      ) {
                                                                        return (
                                                                          carry +
                                                                          parseFloat(
                                                                            action.price
                                                                          ) -
                                                                          parseFloat(
                                                                            action.discount
                                                                          )
                                                                        )
                                                                      },
                                                                      0
                                                                    ) +
                                                                      (_vm.items.reduce(
                                                                        function (
                                                                          carry,
                                                                          action
                                                                        ) {
                                                                          return (
                                                                            carry +
                                                                            parseFloat(
                                                                              action.price
                                                                            ) -
                                                                            parseFloat(
                                                                              action.discount
                                                                            )
                                                                          )
                                                                        },
                                                                        0
                                                                      ) *
                                                                        _vm.findSetting(
                                                                          "default_tax"
                                                                        )) /
                                                                        100
                                                                  )
                                                                ) +
                                                                "\n                                                        "
                                                            ),
                                                          ]),
                                                        ]
                                                      ),
                                                    ]),
                                                  ]),
                                                ]),
                                              ]),
                                              _vm._v(" "),
                                              _c("hr", {
                                                staticClass: "invoice-spacing",
                                              }),
                                              _vm._v(" "),
                                              _vm.canAccess("budgets.update") &&
                                              _vm.budget_total > 0
                                                ? _c(
                                                    "b-button",
                                                    {
                                                      directives: [
                                                        {
                                                          name: "ripple",
                                                          rawName:
                                                            "v-ripple.400",
                                                          value:
                                                            "rgba(255, 255, 255, 0.15)",
                                                          expression:
                                                            "'rgba(255, 255, 255, 0.15)'",
                                                          modifiers: {
                                                            400: true,
                                                          },
                                                        },
                                                      ],
                                                      attrs: {
                                                        variant: "primary",
                                                        block: "",
                                                      },
                                                      on: { click: _vm.update },
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                                        " +
                                                          _vm._s(
                                                            _vm.$t("save")
                                                          ) +
                                                          "\n                                    "
                                                      ),
                                                    ]
                                                  )
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _c("hr", {
                                                staticClass: "invoice-spacing",
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
        "b-modal",
        {
          ref: "modal-areas",
          attrs: {
            id: "modal-areas",
            "ok-only": "",
            "ok-title": _vm.$t("add"),
            centered: "",
            size: "lg",
            title: _vm.$t("budgets.area_selected"),
          },
          on: { ok: _vm.addActions },
        },
        [
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { cols: "6", md: "6", xl: "6" } },
                [
                  _c(
                    "b-card-text",
                    { staticClass: "mb-0" },
                    [
                      _c("p", [
                        _vm._v(_vm._s(_vm.$t("budgets.more_area_selected"))),
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-form-checkbox",
                        {
                          staticClass: "custom-control-primary",
                          attrs: {
                            name: "check-button",
                            switch: "",
                            inline: "",
                          },
                          model: {
                            value: _vm.morePieces,
                            callback: function ($$v) {
                              _vm.morePieces = $$v
                            },
                            expression: "morePieces",
                          },
                        },
                        [
                          _c(
                            "span",
                            { staticClass: "switch-icon-left" },
                            [
                              _c("feather-icon", {
                                attrs: { icon: "CheckIcon" },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "span",
                            { staticClass: "switch-icon-right" },
                            [_c("feather-icon", { attrs: { icon: "XIcon" } })],
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
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { cols: "6", md: "6", xl: "6" } },
                [
                  _c("p", [
                    _vm._v(
                      _vm._s(_vm.$t("budgets.nomenclature_area_selected"))
                    ),
                  ]),
                  _vm._v(" "),
                  _c("b-form-radio-group", {
                    staticClass: "demo-inline-spacing",
                    attrs: {
                      options: _vm.nomenclatures,
                      name: "radio-validation",
                    },
                    model: {
                      value: _vm.nomenclature,
                      callback: function ($$v) {
                        _vm.nomenclature = $$v
                      },
                      expression: "nomenclature",
                    },
                  }),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c("b-col", { attrs: { cols: "12", md: "12", xl: "12" } }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-4 group-cell bucal-group" }, [
                _c(
                  "label",
                  [
                    _c(
                      "b-form-checkbox",
                      {
                        attrs: { value: "Grupo 1" },
                        model: {
                          value: _vm.areasSelected,
                          callback: function ($$v) {
                            _vm.areasSelected = $$v
                          },
                          expression: "areasSelected",
                        },
                      },
                      [
                        _vm._v(
                          "\n                            " +
                            _vm._s(_vm.$t("budgets.group_1")) +
                            "\n                        "
                        ),
                      ]
                    ),
                  ],
                  1
                ),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-4 group-cell bucal-group" }, [
                _c(
                  "label",
                  [
                    _c(
                      "b-form-checkbox",
                      {
                        attrs: { value: "Grupo 2" },
                        model: {
                          value: _vm.areasSelected,
                          callback: function ($$v) {
                            _vm.areasSelected = $$v
                          },
                          expression: "areasSelected",
                        },
                      },
                      [
                        _vm._v(
                          "\n                            " +
                            _vm._s(_vm.$t("budgets.group_2")) +
                            "\n                        "
                        ),
                      ]
                    ),
                  ],
                  1
                ),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-4 group-cell bucal-group" }, [
                _c(
                  "label",
                  [
                    _c(
                      "b-form-checkbox",
                      {
                        attrs: { value: "Grupo 3" },
                        model: {
                          value: _vm.areasSelected,
                          callback: function ($$v) {
                            _vm.areasSelected = $$v
                          },
                          expression: "areasSelected",
                        },
                      },
                      [
                        _vm._v(
                          "\n                            " +
                            _vm._s(_vm.$t("budgets.group_3")) +
                            "\n                        "
                        ),
                      ]
                    ),
                  ],
                  1
                ),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c(
                "table",
                { staticClass: "table table-responsive bucal-table" },
                _vm._l(_vm.teeths, function (item, index) {
                  return _c(
                    "tr",
                    { key: index },
                    _vm._l(item.tr, function (td, idx) {
                      return _c(
                        "td",
                        {
                          key: idx,
                          class: td.class,
                          attrs: { colspan: td.colspan, rowspan: td.rowspan },
                        },
                        [
                          _c("label", { class: td.style_label }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.areasSelected,
                                  expression: "areasSelected",
                                },
                              ],
                              attrs: { type: "checkbox" },
                              domProps: {
                                value: td.value,
                                checked: Array.isArray(_vm.areasSelected)
                                  ? _vm._i(_vm.areasSelected, td.value) > -1
                                  : _vm.areasSelected,
                              },
                              on: {
                                change: function ($event) {
                                  var $$a = _vm.areasSelected,
                                    $$el = $event.target,
                                    $$c = $$el.checked ? true : false
                                  if (Array.isArray($$a)) {
                                    var $$v = td.value,
                                      $$i = _vm._i($$a, $$v)
                                    if ($$el.checked) {
                                      $$i < 0 &&
                                        (_vm.areasSelected = $$a.concat([$$v]))
                                    } else {
                                      $$i > -1 &&
                                        (_vm.areasSelected = $$a
                                          .slice(0, $$i)
                                          .concat($$a.slice($$i + 1)))
                                    }
                                  } else {
                                    _vm.areasSelected = $$c
                                  }
                                },
                              },
                            }),
                            _vm._v(" "),
                            _c("div", { class: td.div_style }, [
                              _c("img", {
                                class: td.image_class,
                                style: td.style,
                                attrs: {
                                  height: td.height,
                                  width: td.width,
                                  src: td.image,
                                },
                              }),
                              _vm._v(" "),
                              _c("p", [_vm._v(_vm._s(td.value))]),
                            ]),
                          ]),
                        ]
                      )
                    }),
                    0
                  )
                }),
                0
              ),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-4 group-cell bucal-group" }, [
                _c(
                  "label",
                  [
                    _c(
                      "b-form-checkbox",
                      {
                        attrs: { value: "Grupo 4" },
                        model: {
                          value: _vm.areasSelected,
                          callback: function ($$v) {
                            _vm.areasSelected = $$v
                          },
                          expression: "areasSelected",
                        },
                      },
                      [
                        _vm._v(
                          "\n                            " +
                            _vm._s(_vm.$t("budgets.group_4")) +
                            "\n                        "
                        ),
                      ]
                    ),
                  ],
                  1
                ),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-4 group-cell bucal-group" }, [
                _c(
                  "label",
                  [
                    _c(
                      "b-form-checkbox",
                      {
                        attrs: { value: "Grupo 5" },
                        model: {
                          value: _vm.areasSelected,
                          callback: function ($$v) {
                            _vm.areasSelected = $$v
                          },
                          expression: "areasSelected",
                        },
                      },
                      [
                        _vm._v(
                          "\n                            " +
                            _vm._s(_vm.$t("budgets.group_5")) +
                            "\n                        "
                        ),
                      ]
                    ),
                  ],
                  1
                ),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-4 group-cell bucal-group" }, [
                _c(
                  "label",
                  [
                    _c(
                      "b-form-checkbox",
                      {
                        attrs: { value: "Grupo 6" },
                        model: {
                          value: _vm.areasSelected,
                          callback: function ($$v) {
                            _vm.areasSelected = $$v
                          },
                          expression: "areasSelected",
                        },
                      },
                      [
                        _vm._v(
                          "\n                            " +
                            _vm._s(_vm.$t("budgets.group_6")) +
                            "\n                        "
                        ),
                      ]
                    ),
                  ],
                  1
                ),
              ]),
            ]),
          ]),
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

/***/ "./resources/js/src/providers/Patients.js":
/*!************************************************!*\
  !*** ./resources/js/src/providers/Patients.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Patients; });
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);



var Patients = /*#__PURE__*/function () {
  function Patients() {
    Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Patients);
  }
  Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Patients, [{
    key: "index",
    value:
    /**
    * Function to get all patients without pagination
    */
    function index(query) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/patients", {
        params: query
      });
    }

    /**
     * Function to update a branch
     * @param {Object} formdata
     * @return AxiosPromise
     */
  }, {
    key: "save",
    value: function save(formdata) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/api/patients", formdata);
    }

    /**
     * Function to update a branch
     * @param {Object} formdata
     * @return AxiosPromise
     */
  }, {
    key: "update",
    value: function update(id, formdata) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.put("/api/patients/".concat(id), formdata);
    }

    /**
     * Function to get information by branch
     * @param {Number} id
     * @return AxiosPromise
     */
  }, {
    key: "getPatientDetail",
    value: function getPatientDetail(id, query) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/patients/".concat(id), {
        params: query
      });
    }
  }, {
    key: "show",
    value: function show(id, query) {
      if (query.isPdf || query.isPrint) {
        return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/patients/".concat(id), {
          params: query,
          responseType: "arraybuffer"
        });
      }
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/patients/".concat(id), {
        params: query
      });
    }

    /**
     * Funtion to delete patients
     * @param {Array} users
     * @return AxiosPromise
     */
  }, {
    key: "deletePatient",
    value: function deletePatient(id) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a["delete"]("/api/patients/".concat(id));
    }

    /**
     * Function to get all patients without pagination
     */
  }, {
    key: "getList",
    value: function getList(query) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/patients", {
        params: query
      });
    }
  }, {
    key: "find",
    value: function find(id) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/patients/".concat(id));
    }
  }, {
    key: "filterList",
    value: function filterList() {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/patients/filter");
    }

    /**
     * [search description]
     *
     * @param   {[type]}  q  [q description]
     *
     * @return  {[type]}     [return description]
     */
  }, {
    key: "search",
    value: function search(query) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/patients/search", {
        params: query
      });
    }
  }, {
    key: "nextAppointment",
    value: function nextAppointment(query) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/patients/next-appointment", {
        params: query
      });
    }
  }]);
  return Patients;
}();


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

/***/ "./resources/js/src/views/apps/budgets/budget-edit/BudgetEdit.vue":
/*!************************************************************************!*\
  !*** ./resources/js/src/views/apps/budgets/budget-edit/BudgetEdit.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BudgetEdit_vue_vue_type_template_id_a7db8fa0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BudgetEdit.vue?vue&type=template&id=a7db8fa0&scoped=true& */ "./resources/js/src/views/apps/budgets/budget-edit/BudgetEdit.vue?vue&type=template&id=a7db8fa0&scoped=true&");
/* harmony import */ var _BudgetEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BudgetEdit.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/budgets/budget-edit/BudgetEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _BudgetEdit_vue_vue_type_style_index_0_id_a7db8fa0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BudgetEdit.vue?vue&type=style&index=0&id=a7db8fa0&lang=scss&scoped=true& */ "./resources/js/src/views/apps/budgets/budget-edit/BudgetEdit.vue?vue&type=style&index=0&id=a7db8fa0&lang=scss&scoped=true&");
/* harmony import */ var _BudgetEdit_vue_vue_type_style_index_1_id_a7db8fa0_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BudgetEdit.vue?vue&type=style&index=1&id=a7db8fa0&lang=scss& */ "./resources/js/src/views/apps/budgets/budget-edit/BudgetEdit.vue?vue&type=style&index=1&id=a7db8fa0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _BudgetEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BudgetEdit_vue_vue_type_template_id_a7db8fa0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BudgetEdit_vue_vue_type_template_id_a7db8fa0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "a7db8fa0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/budgets/budget-edit/BudgetEdit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/budgets/budget-edit/BudgetEdit.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/budgets/budget-edit/BudgetEdit.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BudgetEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BudgetEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/budgets/budget-edit/BudgetEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BudgetEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/budgets/budget-edit/BudgetEdit.vue?vue&type=style&index=0&id=a7db8fa0&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/budgets/budget-edit/BudgetEdit.vue?vue&type=style&index=0&id=a7db8fa0&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BudgetEdit_vue_vue_type_style_index_0_id_a7db8fa0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--12-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BudgetEdit.vue?vue&type=style&index=0&id=a7db8fa0&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/budgets/budget-edit/BudgetEdit.vue?vue&type=style&index=0&id=a7db8fa0&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BudgetEdit_vue_vue_type_style_index_0_id_a7db8fa0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BudgetEdit_vue_vue_type_style_index_0_id_a7db8fa0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BudgetEdit_vue_vue_type_style_index_0_id_a7db8fa0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BudgetEdit_vue_vue_type_style_index_0_id_a7db8fa0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/apps/budgets/budget-edit/BudgetEdit.vue?vue&type=style&index=1&id=a7db8fa0&lang=scss&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/budgets/budget-edit/BudgetEdit.vue?vue&type=style&index=1&id=a7db8fa0&lang=scss& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BudgetEdit_vue_vue_type_style_index_1_id_a7db8fa0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--12-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BudgetEdit.vue?vue&type=style&index=1&id=a7db8fa0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/budgets/budget-edit/BudgetEdit.vue?vue&type=style&index=1&id=a7db8fa0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BudgetEdit_vue_vue_type_style_index_1_id_a7db8fa0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BudgetEdit_vue_vue_type_style_index_1_id_a7db8fa0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BudgetEdit_vue_vue_type_style_index_1_id_a7db8fa0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BudgetEdit_vue_vue_type_style_index_1_id_a7db8fa0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/apps/budgets/budget-edit/BudgetEdit.vue?vue&type=template&id=a7db8fa0&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/budgets/budget-edit/BudgetEdit.vue?vue&type=template&id=a7db8fa0&scoped=true& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BudgetEdit_vue_vue_type_template_id_a7db8fa0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BudgetEdit.vue?vue&type=template&id=a7db8fa0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/budgets/budget-edit/BudgetEdit.vue?vue&type=template&id=a7db8fa0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BudgetEdit_vue_vue_type_template_id_a7db8fa0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BudgetEdit_vue_vue_type_template_id_a7db8fa0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);