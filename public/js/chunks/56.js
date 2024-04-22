(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[56],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/app-action-group/SidebarAddNewGroup.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/app-action-group/SidebarAddNewGroup.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BSidebar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BSidebar"],
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BForm"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormGroup"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormInput"],
    BFormTextarea: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormTextarea"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: ['data', 'active', 'loading'],
  setup: function setup(props, context) {
    var saveInfo = function saveInfo() {
      context.emit('store');
    };
    return {
      saveInfo: saveInfo
    };
  },
  watch: {
    active: function active(value) {
      this.$refs['sidebar-add-new-group'].hide();
    },
    loading: function loading(value) {
      console.log(value);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/catalogs/clinicalActions/Add.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/catalogs/clinicalActions/Add.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/router */ "./resources/js/src/router/index.js");
/* harmony import */ var _core_components_app_action_group_SidebarAddNewGroup_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/components/app-action-group/SidebarAddNewGroup.vue */ "./resources/js/src/@core/components/app-action-group/SidebarAddNewGroup.vue");
/* harmony import */ var _providers_Actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/providers/Actions */ "./resources/js/src/providers/Actions.js");
/* harmony import */ var _providers_ActionGroups__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/providers/ActionGroups */ "./resources/js/src/providers/ActionGroups.js");




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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


var ActionResource = new _providers_Actions__WEBPACK_IMPORTED_MODULE_10__["default"]();
var ActionGroupResource = new _providers_ActionGroups__WEBPACK_IMPORTED_MODULE_11__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ActionAdd',
  components: {
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BButton"],
    BMedia: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BMedia"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BAvatar"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BCol"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BFormGroup"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BFormInput"],
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BForm"],
    BTable: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BTable"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BCard"],
    BCardHeader: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BCardHeader"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BCardTitle"],
    BFormCheckbox: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BFormCheckbox"],
    BTab: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BTab"],
    BTabs: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BTabs"],
    BAlert: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BAlert"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BLink"],
    BInputGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BInputGroup"],
    BInputGroupAppend: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BInputGroupAppend"],
    BFormTextarea: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BFormTextarea"],
    BTooltip: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BTooltip"],
    VBTooltip: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["VBTooltip"],
    VBToggle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["VBToggle"],
    BSpinner: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BSpinner"],
    BOverlay: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BOverlay"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_6___default.a,
    SidebarAddNewGroup: _core_components_app_action_group_SidebarAddNewGroup_vue__WEBPACK_IMPORTED_MODULE_9__["default"]
  },
  directives: {
    'b-tooltip': bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["VBTooltip"],
    'b-toggle': bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["VBToggle"],
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  data: function data() {
    return {
      hideSidebar: false,
      action: {},
      actionGroups: [],
      actionGroupSelect: null,
      loading: false
    };
  },
  mounted: function mounted() {
    var _this = this;
    return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee() {
      return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _this.getActionGroupAll();
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  methods: {
    getActionGroupAll: function getActionGroupAll() {
      var _this2 = this;
      return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee2() {
        var _yield$ActionGroupRes, data;
        return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _this2.loading = true;
              _context2.next = 3;
              return ActionGroupResource.getAll();
            case 3:
              _yield$ActionGroupRes = _context2.sent;
              data = _yield$ActionGroupRes.data;
              _this2.loading = false;
              _this2.actionGroups = data.data;
              console.log(_this2.actionGroups);
            case 8:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    store: function store() {
      var _this3 = this;
      return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee3() {
        var _yield$ActionResource, data;
        return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _this3.loading = true;
              _context3.next = 4;
              return ActionResource.save(_this3.action);
            case 4:
              _yield$ActionResource = _context3.sent;
              data = _yield$ActionResource.data;
              _this3.loading = false;
              if (data.success) {
                _this3.success(data.message, "", "CheckIcon");
                _router__WEBPACK_IMPORTED_MODULE_8__["default"].push({
                  name: "actions-list"
                });
              } else {
                _this3.danger(data.message, "Error", "AlertCircleIcon");
              }
              _context3.next = 14;
              break;
            case 10:
              _context3.prev = 10;
              _context3.t0 = _context3["catch"](0);
              _this3.loading = false;
              _this3.handleResponseErrors(_context3.t0);
            case 14:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[0, 10]]);
      }))();
    },
    storeGroup: function storeGroup() {
      var _this4 = this;
      return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee4() {
        var payload, _yield$ActionGroupRes2, data;
        return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              payload = {
                name: _this4.action.group_name
              };
              _context4.prev = 1;
              _this4.loading = true;
              _context4.next = 5;
              return ActionGroupResource.save(payload);
            case 5:
              _yield$ActionGroupRes2 = _context4.sent;
              data = _yield$ActionGroupRes2.data;
              _this4.loading = false;
              if (data.success) {
                _this4.hideSidebar = true;
                _this4.action.action_group_id = data.data.id;
                _this4.action.group = data.data.name;
                _this4.actionGroupSelect = data.data;
              } else {
                _this4.danger(data.message);
              }
              _context4.next = 15;
              break;
            case 11:
              _context4.prev = 11;
              _context4.t0 = _context4["catch"](1);
              _this4.loading = false;
              _this4.handleResponseErrors(_context4.t0);
            case 15:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[1, 11]]);
      }))();
    },
    actionGroupChange: function actionGroupChange(evt) {
      if (evt !== null) {
        this.action.action_group_id = evt.id;
        this.action.group = evt.name;
      } else {
        this.action.action_group_id = null;
        this.action.group = null;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/catalogs/clinicalActions/Add.vue?vue&type=style&index=0&id=74a5142a&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/catalogs/clinicalActions/Add.vue?vue&type=style&index=0&id=74a5142a&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/**\n    Support for SASS is deprecated as of v3.18.\n\n    The files remain here if your build is dependent on them\n    but they will not receive updates in future releases. All\n    SASS variables have been translated into CSS variables, so\n    migration should be quite simple if you'd like to move over.\n\n    In v4, these files will be removed.\n */\n.v-select {\n  position: relative;\n  font-family: inherit;\n}\n.v-select,\n.v-select * {\n  box-sizing: border-box;\n}\n\n/* KeyFrames */\n@-webkit-keyframes vSelectSpinner-ltr {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@-webkit-keyframes vSelectSpinner-rtl {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(-360deg);\n}\n}\n@keyframes vSelectSpinner-ltr {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes vSelectSpinner-rtl {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(-360deg);\n}\n}\n/* Dropdown Default Transition */\n.vs__fade-enter-active,\n.vs__fade-leave-active {\n  pointer-events: none;\n  transition: opacity 0.15s cubic-bezier(1, 0.5, 0.8, 1);\n}\n.vs__fade-enter,\n.vs__fade-leave-to {\n  opacity: 0;\n}\n\n/** Component States */\n/*\n * Disabled\n *\n * When the component is disabled, all interaction\n * should be prevented. Here we modify the bg color,\n * and change the cursor displayed on the interactive\n * components.\n */\n[dir] .vs--disabled .vs__dropdown-toggle, [dir] .vs--disabled .vs__clear, [dir] .vs--disabled .vs__search, [dir] .vs--disabled .vs__selected, [dir] .vs--disabled .vs__open-indicator {\n  cursor: not-allowed;\n  background-color: #f8f8f8;\n}\n\n/*\n *  RTL - Right to Left Support\n *\n *  Because we're using a flexbox layout, the `dir=\"rtl\"`\n *  HTML attribute does most of the work for us by\n *  rearranging the child elements visually.\n */\n.v-select[dir=rtl] .vs__actions {\n  padding: 0 3px 0 6px;\n}\n.v-select[dir=rtl] .vs__clear {\n  margin-left: 6px;\n  margin-right: 0;\n}\n.v-select[dir=rtl] .vs__deselect {\n  margin-left: 0;\n  margin-right: 2px;\n}\n.v-select[dir=rtl] .vs__dropdown-menu {\n  text-align: right;\n}\n\n/**\n    Dropdown Toggle\n\n    The dropdown toggle is the primary wrapper of the component. It\n    has two direct descendants: .vs__selected-options, and .vs__actions.\n\n    .vs__selected-options holds the .vs__selected's as well as the\n    main search input.\n\n    .vs__actions holds the clear button and dropdown toggle.\n */\n.vs__dropdown-toggle {\n  appearance: none;\n  display: flex;\n  white-space: normal;\n}\n[dir] .vs__dropdown-toggle {\n  padding: 0 0 4px 0;\n  background: none;\n  border: 1px solid #d8d6de;\n  border-radius: 0.357rem;\n}\n.vs__selected-options {\n  display: flex;\n  flex-basis: 100%;\n  flex-grow: 1;\n  flex-wrap: wrap;\n  position: relative;\n}\n[dir] .vs__selected-options {\n  padding: 0 2px;\n}\n.vs__actions {\n  display: flex;\n  align-items: center;\n}\n[dir=ltr] .vs__actions {\n  padding: 4px 6px 0 3px;\n}\n[dir=rtl] .vs__actions {\n  padding: 4px 3px 0 6px;\n}\n\n/* Dropdown Toggle States */\n[dir] .vs--searchable .vs__dropdown-toggle {\n  cursor: text;\n}\n[dir] .vs--unsearchable .vs__dropdown-toggle {\n  cursor: pointer;\n}\n[dir] .vs--open .vs__dropdown-toggle {\n  border-bottom-color: transparent;\n}\n[dir=ltr] .vs--open .vs__dropdown-toggle {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n[dir=rtl] .vs--open .vs__dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.vs__open-indicator {\n  fill: rgba(60, 60, 60, 0.5);\n  transition: transform 150ms cubic-bezier(1, -0.115, 0.975, 0.855);\n}\n[dir] .vs__open-indicator {\n  transform: scale(1);\n  transition-timing-function: cubic-bezier(1, -0.115, 0.975, 0.855);\n}\n[dir=ltr] .vs--open .vs__open-indicator {\n  transform: rotate(180deg) scale(1);\n}\n[dir=rtl] .vs--open .vs__open-indicator {\n  transform: rotate(-180deg) scale(1);\n}\n.vs--loading .vs__open-indicator {\n  opacity: 0;\n}\n\n/* Clear Button */\n.vs__clear {\n  fill: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__clear {\n  padding: 0;\n  border: 0;\n  background-color: transparent;\n  cursor: pointer;\n}\n[dir=ltr] .vs__clear {\n  margin-right: 8px;\n}\n[dir=rtl] .vs__clear {\n  margin-left: 8px;\n}\n\n/* Dropdown Menu */\n.vs__dropdown-menu {\n  display: block;\n  box-sizing: border-box;\n  position: absolute;\n  top: calc(100% - 1px);\n  z-index: 1000;\n  width: 100%;\n  max-height: 350px;\n  min-width: 160px;\n  overflow-y: auto;\n  list-style: none;\n}\n[dir] .vs__dropdown-menu {\n  padding: 5px 0;\n  margin: 0;\n  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.1);\n  border: 1px solid #d8d6de;\n  border-top-style: none;\n  border-radius: 0 0 0.357rem 0.357rem;\n  background: #fff;\n}\n[dir=ltr] .vs__dropdown-menu {\n  left: 0;\n  text-align: left;\n}\n[dir=rtl] .vs__dropdown-menu {\n  right: 0;\n  text-align: right;\n}\n[dir] .vs__no-options {\n  text-align: center;\n}\n\n/* List Items */\n.vs__dropdown-option {\n  line-height: 1.42857143;\n  /* Normalize line height */\n  display: block;\n  color: #333;\n  /* Overrides most CSS frameworks */\n  white-space: nowrap;\n}\n[dir] .vs__dropdown-option {\n  padding: 3px 20px;\n  clear: both;\n  cursor: pointer;\n}\n.vs__dropdown-option--highlight {\n  color: #7367f0 !important;\n}\n[dir] .vs__dropdown-option--highlight {\n  background: rgba(115, 103, 240, 0.12);\n}\n.vs__dropdown-option--deselect {\n  color: #fff;\n}\n[dir] .vs__dropdown-option--deselect {\n  background: #fb5858;\n}\n.vs__dropdown-option--disabled {\n  color: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__dropdown-option--disabled {\n  background: inherit;\n  cursor: inherit;\n}\n\n/* Selected Tags */\n.vs__selected {\n  display: flex;\n  align-items: center;\n  color: #333;\n  line-height: 1.8;\n  z-index: 0;\n}\n[dir] .vs__selected {\n  background-color: #7367f0;\n  border: 0 solid rgba(60, 60, 60, 0.26);\n  border-radius: 0.357rem;\n  margin: 4px 2px 0px 2px;\n  padding: 0 0.25em;\n}\n.vs__deselect {\n  display: inline-flex;\n  appearance: none;\n  fill: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__deselect {\n  padding: 0;\n  border: 0;\n  cursor: pointer;\n  background: none;\n  text-shadow: 0 1px 0 #fff;\n}\n[dir=ltr] .vs__deselect {\n  margin-left: 4px;\n}\n[dir=rtl] .vs__deselect {\n  margin-right: 4px;\n}\n\n/* States */\n[dir] .vs--single .vs__selected {\n  background-color: transparent;\n  border-color: transparent;\n}\n.vs--single.vs--open .vs__selected, .vs--single.vs--loading .vs__selected {\n  position: absolute;\n  opacity: 0.4;\n}\n.vs--single.vs--searching .vs__selected {\n  display: none;\n}\n\n/* Search Input */\n/**\n * Super weird bug... If this declaration is grouped\n * below, the cancel button will still appear in chrome.\n * If it's up here on it's own, it'll hide it.\n */\n.vs__search::-webkit-search-cancel-button {\n  display: none;\n}\n.vs__search::-webkit-search-decoration,\n.vs__search::-webkit-search-results-button,\n.vs__search::-webkit-search-results-decoration,\n.vs__search::-ms-clear {\n  display: none;\n}\n.vs__search,\n.vs__search:focus {\n  appearance: none;\n  line-height: 1.8;\n  font-size: 1em;\n  outline: none;\n  width: 0;\n  max-width: 100%;\n  flex-grow: 1;\n  z-index: 1;\n}\n[dir] .vs__search, [dir] .vs__search:focus {\n  border: 1px solid transparent;\n  margin: 4px 0 0 0;\n  padding: 0 7px;\n  background: none;\n  box-shadow: none;\n}\n[dir=ltr] .vs__search, [dir=ltr] .vs__search:focus {\n  border-left: none;\n}\n[dir=rtl] .vs__search, [dir=rtl] .vs__search:focus {\n  border-right: none;\n}\n.vs__search::placeholder {\n  color: #6e6b7b;\n}\n\n/**\n    States\n */\n.vs--unsearchable .vs__search {\n  opacity: 1;\n}\n[dir] .vs--unsearchable:not(.vs--disabled) .vs__search {\n  cursor: pointer;\n}\n.vs--single.vs--searching:not(.vs--open):not(.vs--loading) .vs__search {\n  opacity: 0.2;\n}\n\n/* Loading Spinner */\n.vs__spinner {\n  align-self: center;\n  opacity: 0;\n  font-size: 5px;\n  text-indent: -9999em;\n  overflow: hidden;\n  transition: opacity 0.1s;\n}\n[dir] .vs__spinner {\n  border-top: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-bottom: 0.9em solid rgba(100, 100, 100, 0.1);\n  transform: translateZ(0);\n}\n[dir=ltr] .vs__spinner {\n  border-right: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-left: 0.9em solid rgba(60, 60, 60, 0.45);\n  animation:  vSelectSpinner-ltr 1.1s infinite linear;\n}\n[dir=rtl] .vs__spinner {\n  border-left: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-right: 0.9em solid rgba(60, 60, 60, 0.45);\n  animation:  vSelectSpinner-rtl 1.1s infinite linear;\n}\n.vs__spinner,\n.vs__spinner:after {\n  width: 5em;\n  height: 5em;\n}\n[dir] .vs__spinner, [dir] .vs__spinner:after {\n  border-radius: 50%;\n}\n\n/* Loading Spinner States */\n.vs--loading .vs__spinner {\n  opacity: 1;\n}\n.vs__open-indicator {\n  fill: none;\n}\n[dir] .vs__open-indicator {\n  margin-top: 0.15rem;\n}\n.vs__dropdown-toggle {\n  transition: all 0.25s ease-in-out;\n}\n[dir] .vs__dropdown-toggle {\n  padding: 0.59px 0 4px 0;\n}\n[dir=ltr] .vs--single .vs__dropdown-toggle {\n  padding-left: 6px;\n}\n[dir=rtl] .vs--single .vs__dropdown-toggle {\n  padding-right: 6px;\n}\n.vs__dropdown-option--disabled {\n  opacity: 0.5;\n}\n[dir] .vs__dropdown-option--disabled.vs__dropdown-option--selected {\n  background: #7367f0 !important;\n}\n.vs__dropdown-option {\n  color: #6e6b7b;\n}\n[dir] .vs__dropdown-option, [dir] .vs__no-options {\n  padding: 7px 20px;\n}\n.vs__dropdown-option--selected {\n  background-color: #7367f0;\n  color: #fff;\n  position: relative;\n}\n.vs__dropdown-option--selected::after {\n  content: \"\";\n  height: 1.1rem;\n  width: 1.1rem;\n  display: inline-block;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  right: 20px;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-check'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 1.1rem;\n}\n[dir=rtl] .vs__dropdown-option--selected::after {\n  left: 20px;\n  right: unset;\n}\n.vs__dropdown-option--selected.vs__dropdown-option--highlight {\n  color: #fff !important;\n  background-color: #7367f0 !important;\n}\n.vs__clear svg {\n  color: #6e6b7b;\n}\n.vs__selected {\n  color: #fff;\n}\n.v-select.vs--single .vs__selected {\n  color: #6e6b7b;\n  transition: transform 0.2s ease;\n}\n[dir] .v-select.vs--single .vs__selected {\n  margin-top: 5px;\n}\n[dir=ltr] .v-select.vs--single .vs__selected input {\n  padding-left: 0;\n}\n[dir=rtl] .v-select.vs--single .vs__selected input {\n  padding-right: 0;\n}\n[dir=ltr] .vs--single.vs--open .vs__selected {\n  transform: translateX(5px);\n}\n[dir=rtl] .vs--single.vs--open .vs__selected {\n  transform: translateX(-5px);\n}\n.vs__selected .vs__deselect {\n  color: inherit;\n}\n.v-select:not(.vs--single) .vs__selected {\n  font-size: 0.9rem;\n}\n[dir] .v-select:not(.vs--single) .vs__selected {\n  border-radius: 3px;\n  padding: 0 0.6em;\n}\n[dir=ltr] .v-select:not(.vs--single) .vs__selected {\n  margin: 5px 2px 2px 5px;\n}\n[dir=rtl] .v-select:not(.vs--single) .vs__selected {\n  margin: 5px 5px 2px 2px;\n}\n.v-select:not(.vs--single) .vs__deselect svg {\n  vertical-align: text-top;\n}\n[dir] .v-select:not(.vs--single) .vs__deselect svg {\n  transform: scale(0.8);\n}\n.vs__dropdown-menu {\n  top: calc(100% + 1rem);\n}\n[dir] .vs__dropdown-menu {\n  border: none;\n  border-radius: 6px;\n  padding: 0;\n}\n[dir] .vs--open .vs__dropdown-toggle {\n  border-color: #7367f0;\n  border-bottom-color: #7367f0;\n  box-shadow: 0 3px 10px 0 rgba(34, 41, 47, 0.1);\n}\n[dir=ltr] .vs--open .vs__dropdown-toggle {\n  border-bottom-left-radius: 0.357rem;\n  border-bottom-right-radius: 0.357rem;\n}\n[dir=rtl] .vs--open .vs__dropdown-toggle {\n  border-bottom-right-radius: 0.357rem;\n  border-bottom-left-radius: 0.357rem;\n}\n.select-size-lg .vs__selected {\n  font-size: 1rem !important;\n}\n[dir] .select-size-lg.vs--single.vs--open .vs__selected {\n  margin-top: 6px;\n}\n.select-size-lg .vs__dropdown-toggle,\n.select-size-lg .vs__selected {\n  font-size: 1.25rem;\n}\n[dir] .select-size-lg .vs__dropdown-toggle {\n  padding: 5px;\n}\n[dir] .select-size-lg .vs__dropdown-toggle input {\n  margin-top: 0;\n}\n.select-size-lg .vs__deselect svg {\n  vertical-align: middle !important;\n}\n[dir] .select-size-lg .vs__deselect svg {\n  transform: scale(1) !important;\n}\n[dir] .select-size-sm .vs__dropdown-toggle {\n  padding-bottom: 0;\n  padding: 1px;\n}\n[dir] .select-size-sm.vs--single .vs__dropdown-toggle {\n  padding: 2px;\n}\n.select-size-sm .vs__dropdown-toggle,\n.select-size-sm .vs__selected {\n  font-size: 0.9rem;\n}\n[dir] .select-size-sm .vs__actions {\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n.select-size-sm .vs__deselect svg {\n  vertical-align: middle !important;\n}\n[dir] .select-size-sm .vs__search {\n  margin-top: 0;\n}\n.select-size-sm.v-select .vs__selected {\n  font-size: 0.75rem;\n}\n[dir] .select-size-sm.v-select .vs__selected {\n  padding: 0 0.3rem;\n}\n[dir] .select-size-sm.v-select:not(.vs--single) .vs__selected {\n  margin: 4px 5px;\n}\n[dir] .select-size-sm.v-select.vs--single .vs__selected {\n  margin-top: 1px;\n}\n[dir] .select-size-sm.vs--single.vs--open .vs__selected {\n  margin-top: 4px;\n}\n.dark-layout .vs__dropdown-toggle {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .vs__dropdown-toggle {\n  background: #283046;\n  border-color: #404656;\n}\n.dark-layout .vs__selected-options input {\n  color: #b4b7bd;\n}\n.dark-layout .vs__selected-options input::placeholder {\n  color: #676d7d;\n}\n.dark-layout .vs__actions svg {\n  fill: #404656;\n}\n[dir] .dark-layout .vs__dropdown-menu {\n  background: #283046;\n}\n.dark-layout .vs__dropdown-menu li {\n  color: #b4b7bd;\n}\n.dark-layout .v-select:not(.vs--single) .vs__selected {\n  color: #7367f0;\n}\n[dir] .dark-layout .v-select:not(.vs--single) .vs__selected {\n  background-color: rgba(115, 103, 240, 0.12);\n}\n.dark-layout .v-select.vs--single .vs__selected {\n  color: #b4b7bd !important;\n}\n.dark-layout .vs--disabled .vs__dropdown-toggle,\n.dark-layout .vs--disabled .vs__clear,\n.dark-layout .vs--disabled .vs__search,\n.dark-layout .vs--disabled .vs__selected,\n.dark-layout .vs--disabled .vs__open-indicator {\n  opacity: 0.5;\n}\n[dir] .dark-layout .vs--disabled .vs__dropdown-toggle, [dir] .dark-layout .vs--disabled .vs__clear, [dir] .dark-layout .vs--disabled .vs__search, [dir] .dark-layout .vs--disabled .vs__selected, [dir] .dark-layout .vs--disabled .vs__open-indicator {\n  background-color: #283046;\n}\n.invoice-add-wrapper .add-new-client-header {\n  color: #28c76f;\n}\n[dir] .invoice-add-wrapper .add-new-client-header {\n  padding: 7px 20px;\n}\n[dir] .invoice-add-wrapper .add-new-client-header:hover {\n  background-color: rgba(40, 199, 111, 0.12);\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/catalogs/clinicalActions/Add.vue?vue&type=style&index=1&id=74a5142a&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/catalogs/clinicalActions/Add.vue?vue&type=style&index=1&id=74a5142a&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "[dir=ltr] .invoice-preview .invoice-padding[data-v-74a5142a], [dir=ltr] .invoice-edit .invoice-padding[data-v-74a5142a], [dir=ltr] .invoice-add .invoice-padding[data-v-74a5142a] {\n  padding-left: 2.5rem;\n  padding-right: 2.5rem;\n}[dir=rtl] .invoice-preview .invoice-padding[data-v-74a5142a], [dir=rtl] .invoice-edit .invoice-padding[data-v-74a5142a], [dir=rtl] .invoice-add .invoice-padding[data-v-74a5142a] {\n  padding-right: 2.5rem;\n  padding-left: 2.5rem;\n}\n[dir=ltr] .invoice-preview .table th[data-v-74a5142a]:first-child, [dir=ltr] .invoice-preview .table td[data-v-74a5142a]:first-child, [dir=ltr] .invoice-edit .table th[data-v-74a5142a]:first-child, [dir=ltr] .invoice-edit .table td[data-v-74a5142a]:first-child, [dir=ltr] .invoice-add .table th[data-v-74a5142a]:first-child, [dir=ltr] .invoice-add .table td[data-v-74a5142a]:first-child {\n  padding-left: 2.5rem;\n}\n[dir=rtl] .invoice-preview .table th[data-v-74a5142a]:first-child, [dir=rtl] .invoice-preview .table td[data-v-74a5142a]:first-child, [dir=rtl] .invoice-edit .table th[data-v-74a5142a]:first-child, [dir=rtl] .invoice-edit .table td[data-v-74a5142a]:first-child, [dir=rtl] .invoice-add .table th[data-v-74a5142a]:first-child, [dir=rtl] .invoice-add .table td[data-v-74a5142a]:first-child {\n  padding-right: 2.5rem;\n}\n.invoice-preview .logo-wrapper[data-v-74a5142a],\n.invoice-edit .logo-wrapper[data-v-74a5142a],\n.invoice-add .logo-wrapper[data-v-74a5142a] {\n  display: flex;\n  align-items: center;\n}\n[dir] .invoice-preview .logo-wrapper[data-v-74a5142a], [dir] .invoice-edit .logo-wrapper[data-v-74a5142a], [dir] .invoice-add .logo-wrapper[data-v-74a5142a] {\n  margin-bottom: 1.9rem;\n}\n.invoice-preview .logo-wrapper .invoice-logo[data-v-74a5142a],\n.invoice-edit .logo-wrapper .invoice-logo[data-v-74a5142a],\n.invoice-add .logo-wrapper .invoice-logo[data-v-74a5142a] {\n  font-size: 2.142rem;\n  font-weight: bold;\n  letter-spacing: -0.54px;\n}\n[dir] .invoice-preview .logo-wrapper .invoice-logo[data-v-74a5142a], [dir] .invoice-edit .logo-wrapper .invoice-logo[data-v-74a5142a], [dir] .invoice-add .logo-wrapper .invoice-logo[data-v-74a5142a] {\n  margin-bottom: 0;\n}\n[dir=ltr] .invoice-preview .logo-wrapper .invoice-logo[data-v-74a5142a], [dir=ltr] .invoice-edit .logo-wrapper .invoice-logo[data-v-74a5142a], [dir=ltr] .invoice-add .logo-wrapper .invoice-logo[data-v-74a5142a] {\n  margin-left: 1rem;\n}\n[dir=rtl] .invoice-preview .logo-wrapper .invoice-logo[data-v-74a5142a], [dir=rtl] .invoice-edit .logo-wrapper .invoice-logo[data-v-74a5142a], [dir=rtl] .invoice-add .logo-wrapper .invoice-logo[data-v-74a5142a] {\n  margin-right: 1rem;\n}\n.invoice-preview .invoice-title[data-v-74a5142a],\n.invoice-edit .invoice-title[data-v-74a5142a],\n.invoice-add .invoice-title[data-v-74a5142a] {\n  font-size: 1.285rem;\n}\n[dir] .invoice-preview .invoice-title[data-v-74a5142a], [dir] .invoice-edit .invoice-title[data-v-74a5142a], [dir] .invoice-add .invoice-title[data-v-74a5142a] {\n  margin-bottom: 1rem;\n}\n.invoice-preview .invoice-title .invoice-number[data-v-74a5142a],\n.invoice-edit .invoice-title .invoice-number[data-v-74a5142a],\n.invoice-add .invoice-title .invoice-number[data-v-74a5142a] {\n  font-weight: 600;\n}\n.invoice-preview .invoice-date-wrapper[data-v-74a5142a],\n.invoice-edit .invoice-date-wrapper[data-v-74a5142a],\n.invoice-add .invoice-date-wrapper[data-v-74a5142a] {\n  display: flex;\n  align-items: center;\n}\n[dir] .invoice-preview .invoice-date-wrapper[data-v-74a5142a]:not(:last-of-type), [dir] .invoice-edit .invoice-date-wrapper[data-v-74a5142a]:not(:last-of-type), [dir] .invoice-add .invoice-date-wrapper[data-v-74a5142a]:not(:last-of-type) {\n  margin-bottom: 0.5rem;\n}\n.invoice-preview .invoice-date-wrapper .invoice-date-title[data-v-74a5142a],\n.invoice-edit .invoice-date-wrapper .invoice-date-title[data-v-74a5142a],\n.invoice-add .invoice-date-wrapper .invoice-date-title[data-v-74a5142a] {\n  width: 7rem;\n}\n[dir] .invoice-preview .invoice-date-wrapper .invoice-date-title[data-v-74a5142a], [dir] .invoice-edit .invoice-date-wrapper .invoice-date-title[data-v-74a5142a], [dir] .invoice-add .invoice-date-wrapper .invoice-date-title[data-v-74a5142a] {\n  margin-bottom: 0;\n}\n.invoice-preview .invoice-date-wrapper .invoice-date[data-v-74a5142a],\n.invoice-edit .invoice-date-wrapper .invoice-date[data-v-74a5142a],\n.invoice-add .invoice-date-wrapper .invoice-date[data-v-74a5142a] {\n  font-weight: 600;\n}\n[dir] .invoice-preview .invoice-date-wrapper .invoice-date[data-v-74a5142a], [dir] .invoice-edit .invoice-date-wrapper .invoice-date[data-v-74a5142a], [dir] .invoice-add .invoice-date-wrapper .invoice-date[data-v-74a5142a] {\n  margin-bottom: 0;\n}\n[dir=ltr] .invoice-preview .invoice-date-wrapper .invoice-date[data-v-74a5142a], [dir=ltr] .invoice-edit .invoice-date-wrapper .invoice-date[data-v-74a5142a], [dir=ltr] .invoice-add .invoice-date-wrapper .invoice-date[data-v-74a5142a] {\n  margin-left: 0.5rem;\n}\n[dir=rtl] .invoice-preview .invoice-date-wrapper .invoice-date[data-v-74a5142a], [dir=rtl] .invoice-edit .invoice-date-wrapper .invoice-date[data-v-74a5142a], [dir=rtl] .invoice-add .invoice-date-wrapper .invoice-date[data-v-74a5142a] {\n  margin-right: 0.5rem;\n}\n[dir] .invoice-preview .invoice-spacing[data-v-74a5142a], [dir] .invoice-edit .invoice-spacing[data-v-74a5142a], [dir] .invoice-add .invoice-spacing[data-v-74a5142a] {\n  margin: 1.45rem 0;\n}\n.invoice-preview .invoice-number-date .title[data-v-74a5142a],\n.invoice-edit .invoice-number-date .title[data-v-74a5142a],\n.invoice-add .invoice-number-date .title[data-v-74a5142a] {\n  width: 115px;\n}\n.invoice-preview .invoice-total-wrapper[data-v-74a5142a],\n.invoice-edit .invoice-total-wrapper[data-v-74a5142a],\n.invoice-add .invoice-total-wrapper[data-v-74a5142a] {\n  width: 100%;\n  max-width: 12rem;\n}\n.invoice-preview .invoice-total-wrapper .invoice-total-item[data-v-74a5142a],\n.invoice-edit .invoice-total-wrapper .invoice-total-item[data-v-74a5142a],\n.invoice-add .invoice-total-wrapper .invoice-total-item[data-v-74a5142a] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n[dir] .invoice-preview .invoice-total-wrapper .invoice-total-item .invoice-total-title[data-v-74a5142a], [dir] .invoice-edit .invoice-total-wrapper .invoice-total-item .invoice-total-title[data-v-74a5142a], [dir] .invoice-add .invoice-total-wrapper .invoice-total-item .invoice-total-title[data-v-74a5142a] {\n  margin-bottom: 0.35rem;\n}\n.invoice-preview .invoice-total-wrapper .invoice-total-item .invoice-total-amount[data-v-74a5142a],\n.invoice-edit .invoice-total-wrapper .invoice-total-item .invoice-total-amount[data-v-74a5142a],\n.invoice-add .invoice-total-wrapper .invoice-total-item .invoice-total-amount[data-v-74a5142a] {\n  font-weight: 600;\n}\n[dir] .invoice-preview .invoice-total-wrapper .invoice-total-item .invoice-total-amount[data-v-74a5142a], [dir] .invoice-edit .invoice-total-wrapper .invoice-total-item .invoice-total-amount[data-v-74a5142a], [dir] .invoice-add .invoice-total-wrapper .invoice-total-item .invoice-total-amount[data-v-74a5142a] {\n  margin-bottom: 0.35rem;\n}\n@media (min-width: 768px) {\n[dir] .invoice-preview .invoice-title[data-v-74a5142a], [dir] .invoice-edit .invoice-title[data-v-74a5142a], [dir] .invoice-add .invoice-title[data-v-74a5142a] {\n    margin-bottom: 3rem;\n}\n[dir=ltr] .invoice-preview .invoice-title[data-v-74a5142a], [dir=ltr] .invoice-edit .invoice-title[data-v-74a5142a], [dir=ltr] .invoice-add .invoice-title[data-v-74a5142a] {\n    text-align: right;\n}\n[dir=rtl] .invoice-preview .invoice-title[data-v-74a5142a], [dir=rtl] .invoice-edit .invoice-title[data-v-74a5142a], [dir=rtl] .invoice-add .invoice-title[data-v-74a5142a] {\n    text-align: left;\n}\n}\n[dir] .invoice-edit .invoice-preview-card .invoice-title[data-v-74a5142a], [dir] .invoice-add .invoice-preview-card .invoice-title[data-v-74a5142a] {\n  margin-bottom: 0;\n}\n[dir=ltr] .invoice-edit .invoice-preview-card .invoice-title[data-v-74a5142a], [dir=ltr] .invoice-add .invoice-preview-card .invoice-title[data-v-74a5142a] {\n  text-align: left;\n  margin-right: 3.5rem;\n}\n[dir=rtl] .invoice-edit .invoice-preview-card .invoice-title[data-v-74a5142a], [dir=rtl] .invoice-add .invoice-preview-card .invoice-title[data-v-74a5142a] {\n  text-align: right;\n  margin-left: 3.5rem;\n}\n.invoice-edit .invoice-preview-card .invoice-edit-input[data-v-74a5142a],\n.invoice-edit .invoice-preview-card .invoice-edit-input-group[data-v-74a5142a],\n.invoice-add .invoice-preview-card .invoice-edit-input[data-v-74a5142a],\n.invoice-add .invoice-preview-card .invoice-edit-input-group[data-v-74a5142a] {\n  max-width: 11.21rem;\n}\n[dir] .invoice-edit .invoice-preview-card .invoice-product-details[data-v-74a5142a], [dir] .invoice-add .invoice-preview-card .invoice-product-details[data-v-74a5142a] {\n  background-color: #fcfcfc;\n  padding: 3.75rem 3.45rem 2.3rem 3.45rem;\n}\n[dir] .invoice-edit .invoice-preview-card .invoice-product-details .product-details-border[data-v-74a5142a], [dir] .invoice-add .invoice-preview-card .invoice-product-details .product-details-border[data-v-74a5142a] {\n  border: 1px solid #ebe9f1;\n  border-radius: 0.357rem;\n}\n[dir] .invoice-edit .invoice-preview-card .invoice-to-title[data-v-74a5142a], [dir] .invoice-add .invoice-preview-card .invoice-to-title[data-v-74a5142a] {\n  margin-bottom: 1.9rem;\n}\n.invoice-edit .invoice-preview-card .col-title[data-v-74a5142a],\n.invoice-add .invoice-preview-card .col-title[data-v-74a5142a] {\n  position: absolute;\n  top: -3.2rem;\n}\n.invoice-edit .invoice-preview-card .item-options-menu[data-v-74a5142a],\n.invoice-add .invoice-preview-card .item-options-menu[data-v-74a5142a] {\n  min-width: 20rem;\n}\n[dir] .invoice-edit .invoice-preview-card .repeater-wrapper[data-v-74a5142a]:not(:last-child), [dir] .invoice-add .invoice-preview-card .repeater-wrapper[data-v-74a5142a]:not(:last-child) {\n  margin-bottom: 3rem;\n}\n.invoice-edit .invoice-preview-card .invoice-calculations .total-amt-title[data-v-74a5142a],\n.invoice-add .invoice-preview-card .invoice-calculations .total-amt-title[data-v-74a5142a] {\n  width: 100px;\n}\n@media (max-width: 769px) {\n.invoice-edit .invoice-preview-card .invoice-title[data-v-74a5142a],\n.invoice-add .invoice-preview-card .invoice-title[data-v-74a5142a] {\n    width: 115px;\n}\n[dir=ltr] .invoice-edit .invoice-preview-card .invoice-title[data-v-74a5142a], [dir=ltr] .invoice-add .invoice-preview-card .invoice-title[data-v-74a5142a] {\n    margin-right: 0;\n}\n[dir=rtl] .invoice-edit .invoice-preview-card .invoice-title[data-v-74a5142a], [dir=rtl] .invoice-add .invoice-preview-card .invoice-title[data-v-74a5142a] {\n    margin-left: 0;\n}\n.invoice-edit .invoice-preview-card .invoice-edit-input[data-v-74a5142a],\n.invoice-add .invoice-preview-card .invoice-edit-input[data-v-74a5142a] {\n    max-width: 100%;\n}\n}\n@media (max-width: 992px) {\n.invoice-edit .col-title[data-v-74a5142a],\n.invoice-add .col-title[data-v-74a5142a] {\n    top: -1.5rem !important;\n}\n}\n@media print {\n[dir] .invoice-edit hr[data-v-74a5142a], [dir] .invoice-add hr[data-v-74a5142a] {\n    margin-top: 1rem !important;\n    margin-bottom: 1rem !important;\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/catalogs/clinicalActions/Add.vue?vue&type=style&index=0&id=74a5142a&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/catalogs/clinicalActions/Add.vue?vue&type=style&index=0&id=74a5142a&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=style&index=0&id=74a5142a&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/catalogs/clinicalActions/Add.vue?vue&type=style&index=0&id=74a5142a&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/catalogs/clinicalActions/Add.vue?vue&type=style&index=1&id=74a5142a&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/catalogs/clinicalActions/Add.vue?vue&type=style&index=1&id=74a5142a&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=style&index=1&id=74a5142a&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/catalogs/clinicalActions/Add.vue?vue&type=style&index=1&id=74a5142a&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/app-action-group/SidebarAddNewGroup.vue?vue&type=template&id=2a388782&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/app-action-group/SidebarAddNewGroup.vue?vue&type=template&id=2a388782& ***!
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
  return _c("b-sidebar", {
    ref: "sidebar-add-new-group",
    attrs: {
      id: "sidebar-add-new-group",
      "sidebar-class": "sidebar-lg",
      "bg-variant": "white",
      shadow: "",
      backdrop: "",
      "no-header": "",
      right: "",
    },
    scopedSlots: _vm._u([
      {
        key: "default",
        fn: function (ref) {
          var hide = ref.hide
          return [
            _c(
              "div",
              {
                staticClass:
                  "d-flex justify-content-between align-items-center content-sidebar-header px-2 py-1",
              },
              [
                _c("h5", { staticClass: "mb-0" }, [
                  _vm._v(_vm._s(_vm.$t("action_groups.title"))),
                ]),
                _vm._v(" "),
                _c("feather-icon", {
                  staticClass: "ml-1 cursor-pointer",
                  attrs: { disabled: _vm.laoding, icon: "XIcon", size: "16" },
                  on: { click: hide },
                }),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-form",
              { staticClass: "p-2" },
              [
                _c(
                  "b-form-group",
                  {
                    attrs: {
                      label: _vm.$t("action_groups.name"),
                      "label-for": "patient-name",
                    },
                  },
                  [
                    _c("b-form-input", {
                      attrs: {
                        trim: "",
                        placeholder: _vm.$t("action_groups.name_placeholder"),
                      },
                      model: {
                        value: _vm.data.group_name,
                        callback: function ($$v) {
                          _vm.$set(_vm.data, "group_name", $$v)
                        },
                        expression: "data.group_name",
                      },
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "d-flex mt-2" },
                  [
                    _vm.data
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
                            staticClass: "mr-2",
                            attrs: {
                              disabled: _vm.loading,
                              variant: "primary",
                            },
                            on: { click: _vm.saveInfo },
                          },
                          [
                            _vm._v(
                              "\n                    " +
                                _vm._s(_vm.$t("save")) +
                                "\n                "
                            ),
                          ]
                        )
                      : _vm._e(),
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
                        attrs: {
                          disabled: _vm.loading,
                          variant: "outline-secondary",
                        },
                        on: { click: hide },
                      },
                      [
                        _vm._v(
                          "\n                    " +
                            _vm._s(_vm.$t("cancel")) +
                            "\n                "
                        ),
                      ]
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
    ]),
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/catalogs/clinicalActions/Add.vue?vue&type=template&id=74a5142a&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/catalogs/clinicalActions/Add.vue?vue&type=template&id=74a5142a&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
      _c("sidebar-add-new-group", {
        attrs: {
          active: _vm.hideSidebar,
          data: _vm.action,
          loading: _vm.loading,
        },
        on: { store: _vm.storeGroup },
      }),
      _vm._v(" "),
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
                      { attrs: { cols: "12", md: "4" } },
                      [
                        _c(
                          "b-form-group",
                          {
                            attrs: {
                              "label-for": "actionGroupList",
                              label: _vm.$t("clinical_actions.group"),
                            },
                          },
                          [
                            _c("v-select", {
                              attrs: {
                                id: "actionGroupList",
                                label: "name",
                                options: _vm.actionGroups,
                                clearable: false,
                                searchable: false,
                                placeholder: _vm.$t(
                                  "clinical_actions.group_placeholder"
                                ),
                              },
                              on: { input: _vm.actionGroupChange },
                              scopedSlots: _vm._u([
                                {
                                  key: "list-header",
                                  fn: function () {
                                    return [
                                      _c(
                                        "li",
                                        {
                                          directives: [
                                            {
                                              name: "b-toggle",
                                              rawName:
                                                "v-b-toggle.sidebar-add-new-group",
                                              modifiers: {
                                                "sidebar-add-new-group": true,
                                              },
                                            },
                                          ],
                                          staticClass:
                                            "add-new-client-header text-success d-flex align-items-end my-50",
                                          staticStyle: { cursor: "pointer" },
                                        },
                                        [
                                          _c("feather-icon", {
                                            attrs: {
                                              icon: "PlusIcon",
                                              size: "16",
                                            },
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            {
                                              staticClass: "align-middle ml-25",
                                            },
                                            [
                                              _c("strong", [
                                                _vm._v(
                                                  _vm._s(_vm.$t("add_group"))
                                                ),
                                              ]),
                                            ]
                                          ),
                                        ],
                                        1
                                      ),
                                    ]
                                  },
                                  proxy: true,
                                },
                              ]),
                              model: {
                                value: _vm.actionGroupSelect,
                                callback: function ($$v) {
                                  _vm.actionGroupSelect = $$v
                                },
                                expression: "actionGroupSelect",
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
                      { attrs: { cols: "12", md: "4" } },
                      [
                        _c(
                          "b-form-group",
                          {
                            attrs: {
                              label: _vm.$t("clinical_actions.name"),
                              "label-for": "name",
                            },
                          },
                          [
                            _c("b-form-input", {
                              attrs: {
                                id: "name",
                                placeholder: _vm.$t(
                                  "clinical_actions.name_placeholder"
                                ),
                              },
                              model: {
                                value: _vm.action.name,
                                callback: function ($$v) {
                                  _vm.$set(_vm.action, "name", $$v)
                                },
                                expression: "action.name",
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
                      { attrs: { cols: "12", md: "4" } },
                      [
                        _c(
                          "b-form-group",
                          {
                            attrs: {
                              label: _vm.$t("clinical_actions.area"),
                              "label-for": "area",
                            },
                          },
                          [
                            _c("b-form-input", {
                              attrs: {
                                id: "area",
                                placeholder: _vm.$t(
                                  "clinical_actions.area_placeholder"
                                ),
                              },
                              model: {
                                value: _vm.action.area,
                                callback: function ($$v) {
                                  _vm.$set(_vm.action, "area", $$v)
                                },
                                expression: "action.area",
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
                      { attrs: { cols: "12", md: "4" } },
                      [
                        _c(
                          "b-form-group",
                          {
                            attrs: {
                              label: _vm.$t("clinical_actions.cost"),
                              "label-for": "cost",
                            },
                          },
                          [
                            _c("b-form-input", {
                              attrs: {
                                id: "cost",
                                placeholder: _vm.$t(
                                  "clinical_actions.cost_placeholder"
                                ),
                                type: "number",
                              },
                              model: {
                                value: _vm.action.cost,
                                callback: function ($$v) {
                                  _vm.$set(_vm.action, "cost", $$v)
                                },
                                expression: "action.cost",
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
                _vm._v(" "),
                _vm.canAccess("actions.store")
                  ? _c(
                      "b-button",
                      {
                        staticClass: "mb-1 mb-sm-0 mr-0 mr-sm-1",
                        attrs: { disabled: _vm.loading, variant: "primary" },
                        on: { click: _vm.store },
                      },
                      [
                        _vm._v(
                          "\n                    " +
                            _vm._s(_vm.$t("save")) +
                            "\n                "
                        ),
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "b-button",
                  {
                    staticClass: "mb-1 mb-sm-0 mr-0 mr-sm-1",
                    attrs: { variant: "outline-secondary" },
                    on: {
                      click: function ($event) {
                        return _vm.$router.push({ name: "apps-actions" })
                      },
                    },
                  },
                  [
                    _vm._v(
                      "\n                    " +
                        _vm._s(_vm.$t("back")) +
                        "\n                "
                    ),
                  ]
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/@core/components/app-action-group/SidebarAddNewGroup.vue":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/@core/components/app-action-group/SidebarAddNewGroup.vue ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SidebarAddNewGroup_vue_vue_type_template_id_2a388782___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SidebarAddNewGroup.vue?vue&type=template&id=2a388782& */ "./resources/js/src/@core/components/app-action-group/SidebarAddNewGroup.vue?vue&type=template&id=2a388782&");
/* harmony import */ var _SidebarAddNewGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SidebarAddNewGroup.vue?vue&type=script&lang=js& */ "./resources/js/src/@core/components/app-action-group/SidebarAddNewGroup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SidebarAddNewGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SidebarAddNewGroup_vue_vue_type_template_id_2a388782___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SidebarAddNewGroup_vue_vue_type_template_id_2a388782___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/@core/components/app-action-group/SidebarAddNewGroup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/@core/components/app-action-group/SidebarAddNewGroup.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/@core/components/app-action-group/SidebarAddNewGroup.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarAddNewGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SidebarAddNewGroup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/app-action-group/SidebarAddNewGroup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarAddNewGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/@core/components/app-action-group/SidebarAddNewGroup.vue?vue&type=template&id=2a388782&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/src/@core/components/app-action-group/SidebarAddNewGroup.vue?vue&type=template&id=2a388782& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarAddNewGroup_vue_vue_type_template_id_2a388782___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SidebarAddNewGroup.vue?vue&type=template&id=2a388782& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/app-action-group/SidebarAddNewGroup.vue?vue&type=template&id=2a388782&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarAddNewGroup_vue_vue_type_template_id_2a388782___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarAddNewGroup_vue_vue_type_template_id_2a388782___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/providers/ActionGroups.js":
/*!****************************************************!*\
  !*** ./resources/js/src/providers/ActionGroups.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ActionGroups; });
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);



var ActionGroups = /*#__PURE__*/function () {
  function ActionGroups() {
    Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ActionGroups);
  }
  Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ActionGroups, [{
    key: "save",
    value:
    /**
     * Function to update a branch
     * @param {Object} formdata
     * @return AxiosPromise
     */
    function save(formdata) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/api/action-groups", formdata);
    }

    /**
     * Function to update a branch
     * @param {Object} formdata
     * @return AxiosPromise
     */
  }, {
    key: "update",
    value: function update(id, formdata) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.put("/api/action-groups/".concat(id), formdata);
    }

    /**
     * Function to get information by branch
     * @param {Number} id
     * @return AxiosPromise
     */
  }, {
    key: "getActionGroupDetail",
    value: function getActionGroupDetail(id) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/action-groups/".concat(id));
    }

    /**
     * Funtion to delete action groups
     * @param {Array} users
     * @return AxiosPromise
     */
  }, {
    key: "deleteActionGroup",
    value: function deleteActionGroup(id) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a["delete"]("/api/action-groups/".concat(id));
    }

    /**
     * Function to get all action groups without pagination
     */
  }, {
    key: "getList",
    value: function getList(query) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/action-groups", {
        params: query
      });
    }

    /**
     * Function to get all action groups without pagination
     */
  }, {
    key: "getAll",
    value: function getAll() {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/action-groups/all");
    }
  }]);
  return ActionGroups;
}();


/***/ }),

/***/ "./resources/js/src/providers/Actions.js":
/*!***********************************************!*\
  !*** ./resources/js/src/providers/Actions.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Actions; });
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);



var Actions = /*#__PURE__*/function () {
  function Actions() {
    Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Actions);
  }
  Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Actions, [{
    key: "index",
    value:
    /**
     * Function to get all actions without pagination
     */
    function index(query) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/actions", {
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
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/api/actions", formdata);
    }

    /**
     * Function to update a branch
     * @param {Object} formdata
     * @return AxiosPromise
     */
  }, {
    key: "update",
    value: function update(id, formdata) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.put("/api/actions/".concat(id), formdata);
    }

    /**
     * Function to get information by branch
     * @param {Number} id
     * @return AxiosPromise
     */
  }, {
    key: "getActionDetail",
    value: function getActionDetail(id) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/actions/".concat(id));
    }

    /**
     * Funtion to delete actions
     * @param {Array} users
     * @return AxiosPromise
     */
  }, {
    key: "deleteAction",
    value: function deleteAction(id) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a["delete"]("/api/actions/".concat(id));
    }

    /**
     * [getAll description]
     *
     * @return  {[type]}  [return description]
     */
  }, {
    key: "getAll",
    value: function getAll() {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/actions/all");
    }

    /**
     * [getByGroupId description]
     * @param {*} group_id
     * @returns
     */
  }, {
    key: "getAllByGroupId",
    value: function getAllByGroupId(group_id) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/actions/".concat(group_id, "/group"));
    }
  }]);
  return Actions;
}();


/***/ }),

/***/ "./resources/js/src/views/apps/catalogs/clinicalActions/Add.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/src/views/apps/catalogs/clinicalActions/Add.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Add_vue_vue_type_template_id_74a5142a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Add.vue?vue&type=template&id=74a5142a&scoped=true& */ "./resources/js/src/views/apps/catalogs/clinicalActions/Add.vue?vue&type=template&id=74a5142a&scoped=true&");
/* harmony import */ var _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Add.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/catalogs/clinicalActions/Add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Add_vue_vue_type_style_index_0_id_74a5142a_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Add.vue?vue&type=style&index=0&id=74a5142a&lang=scss& */ "./resources/js/src/views/apps/catalogs/clinicalActions/Add.vue?vue&type=style&index=0&id=74a5142a&lang=scss&");
/* harmony import */ var _Add_vue_vue_type_style_index_1_id_74a5142a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Add.vue?vue&type=style&index=1&id=74a5142a&lang=scss&scoped=true& */ "./resources/js/src/views/apps/catalogs/clinicalActions/Add.vue?vue&type=style&index=1&id=74a5142a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Add_vue_vue_type_template_id_74a5142a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Add_vue_vue_type_template_id_74a5142a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "74a5142a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/catalogs/clinicalActions/Add.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/catalogs/clinicalActions/Add.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/apps/catalogs/clinicalActions/Add.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/catalogs/clinicalActions/Add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/catalogs/clinicalActions/Add.vue?vue&type=style&index=0&id=74a5142a&lang=scss&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/catalogs/clinicalActions/Add.vue?vue&type=style&index=0&id=74a5142a&lang=scss& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_74a5142a_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=style&index=0&id=74a5142a&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/catalogs/clinicalActions/Add.vue?vue&type=style&index=0&id=74a5142a&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_74a5142a_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_74a5142a_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_74a5142a_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_74a5142a_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/apps/catalogs/clinicalActions/Add.vue?vue&type=style&index=1&id=74a5142a&lang=scss&scoped=true&":
/*!********************************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/catalogs/clinicalActions/Add.vue?vue&type=style&index=1&id=74a5142a&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_1_id_74a5142a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=style&index=1&id=74a5142a&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/catalogs/clinicalActions/Add.vue?vue&type=style&index=1&id=74a5142a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_1_id_74a5142a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_1_id_74a5142a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_1_id_74a5142a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_1_id_74a5142a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/apps/catalogs/clinicalActions/Add.vue?vue&type=template&id=74a5142a&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/catalogs/clinicalActions/Add.vue?vue&type=template&id=74a5142a&scoped=true& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_74a5142a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=template&id=74a5142a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/catalogs/clinicalActions/Add.vue?vue&type=template&id=74a5142a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_74a5142a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_74a5142a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);