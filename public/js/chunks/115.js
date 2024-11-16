(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[115],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/reports/ReportBudgets.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/reports/ReportBudgets.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var flatpickr_dist_l10n_es_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! flatpickr/dist/l10n/es.js */ "./node_modules/flatpickr/dist/l10n/es.js");
/* harmony import */ var flatpickr_dist_l10n_es_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_l10n_es_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! animate.css */ "./node_modules/animate.css/animate.css");
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(animate_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _providers_Budgets__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @/providers/Budgets */ "./resources/js/src/providers/Budgets.js");
/* harmony import */ var _providers_BranchOffices__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @/providers/BranchOffices */ "./resources/js/src/providers/BranchOffices.js");




var _components;





//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//











var BudgetResource = new _providers_Budgets__WEBPACK_IMPORTED_MODULE_18__["default"]();

var BranchResource = new _providers_BranchOffices__WEBPACK_IMPORTED_MODULE_19__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ReportBudgets',
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_15__["default"],
    'b-modal': bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__["VBModal"],
    'b-toggle': bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__["VBToggle"]
  },
  components: (_components = {
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__["BCol"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__["BCard"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__["BCardBody"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__["BCardText"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__["BButton"],
    BAlert: bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__["BAlert"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__["BLink"],
    BOverlay: bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__["BOverlay"],
    BSpinner: bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__["BSpinner"],
    BTable: bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__["BTable"],
    BTableLite: bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__["BTableLite"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_14___default.a,
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_12___default.a,
    BFormCheckbox: bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__["BFormCheckbox"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__["BFormGroup"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__["BFormInput"],
    BModal: bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__["BModal"],
    BMediaAside: bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__["BMediaAside"],
    BMedia: bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__["BMedia"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__["BAvatar"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__["BImg"],
    BCardHeader: bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__["BCardHeader"],
    BMediaBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__["BMediaBody"],
    BFormTextarea: bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__["BFormTextarea"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__["BCardTitle"],
    VBModal: bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__["VBModal"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__["BBadge"],
    BPagination: bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__["BPagination"],
    BTooltip: bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__["BTooltip"],
    VBTooltip: bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__["VBTooltip"]
  }, Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_components, "BFormCheckbox", bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__["BFormCheckbox"]), Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_components, "BFormRadioGroup", bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__["BFormRadioGroup"]), Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_components, "BFormRadio", bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__["BFormRadio"]), _components),
  data: function data() {
    return {
      loading: false,
      budgets: [],
      columns: [{
        key: "label",
        label: this.$t("budgets.table_number")
      }, {
        key: 'name',
        label: this.$t('budgets.table_budget_name')
      }, {
        key: "patient",
        label: this.$t("budgets.table_patient_name")
      }, {
        key: "branch",
        label: this.$t("budgets.table_branch_office")
      }, {
        key: "total",
        label: this.$t("budgets.table_action_total")
      }, {
        key: "total_paid",
        label: this.$t("budgets.table_action_paid")
      }, {
        key: "total_debt",
        label: this.$t("budgets.table_action_debt")
      }, {
        key: "created_at",
        label: this.$t("budgets.table_created_at")
      }, {
        key: "approved",
        label: this.$t("budgets.table_approved")
      }],
      optionsFilters: [{
        value: 'approved',
        text: this.$t('budgets.status.approved')
      }, {
        value: 'not_approved',
        text: this.$t('budgets.status.not_approved')
      }, {
        value: 'all',
        text: this.$t('budgets.status.all')
      }],
      branchs: [],
      filter_by: 'all',
      perPageOptions: [10, 25, 50, 100],
      perPage: 100,
      currentPage: 1,
      totalBudgets: 0,
      sortBy: "date",
      sortDesc: false,
      searchQuery: null,
      from: 0,
      to: 0,
      pagination: {},
      offset: 3,
      critery: "name",
      search: "",
      donwload: false,
      opacity: .75,
      filter: {
        start: null,
        end: null,
        name: null
      },
      isMobile: false,
      isFilterApplied: false,
      userRoles: _store__WEBPACK_IMPORTED_MODULE_11__["default"].getters['auth/getUser'].roles.map(function (role) {
        return role.id;
      })
    };
  },
  computed: {
    dataMeta: function dataMeta() {
      var localItemsCount = _.size(this.budgets);
      return {
        from: this.perPage * (this.currentPage - 1) + (localItemsCount ? 1 : 0),
        to: this.perPage * (this.currentPage - 1) + localItemsCount,
        of: this.totalBudgets
      };
    },
    isProfessional: function isProfessional() {
      return this.userRoles.contains(4);
    }
  },
  created: function created() {
    if (_store__WEBPACK_IMPORTED_MODULE_11__["default"].getters['auth/getLocale'] === "es") {
      flatpickr.localize(flatpickr_dist_l10n_es_js__WEBPACK_IMPORTED_MODULE_13__["Spanish"]);
    }
  },
  mounted: function mounted() {
    var _this = this;
    return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().mark(function _callee() {
      return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            window.addEventListener('resize', _this.handleResize);
            _this.handleResize();
            _context.next = 4;
            return _this.getBranchs();
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    getBranchs: function getBranchs() {
      var _this2 = this;
      return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().mark(function _callee2() {
        var _yield$BranchResource, data;
        return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _this2.loading = true;
              _context2.next = 4;
              return BranchResource.index({
                isAll: true
              });
            case 4:
              _yield$BranchResource = _context2.sent;
              data = _yield$BranchResource.data;
              if (data.success) {
                _this2.branchs = data.data;
              }
              _context2.next = 13;
              break;
            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](0);
              _this2.loading = false;
              _this2.handleResponseErrors(_context2.t0);
            case 13:
              _context2.prev = 13;
              _this2.loading = false;
              return _context2.finish(13);
            case 16:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 9, 13, 16]]);
      }))();
    },
    handleResize: function handleResize() {
      this.isMobile = window.innerWidth < 576;
    },
    donwloadBudget: function donwloadBudget() {
      var _this3 = this;
      return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().mark(function _callee3() {
        var query;
        return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              query = Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _this3.filter), {}, {
                isDownload: true
              });
              try {
                _this3.loading = true;
                axios__WEBPACK_IMPORTED_MODULE_10___default.a.get("/api/budgets", {
                  responseType: 'blob',
                  params: Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, query)
                }).then(function (response) {
                  _this3.loading = false;
                  var blob = new Blob([response.data], {
                    type: 'application/vnd.ms-excel'
                  });
                  Object(file_saver__WEBPACK_IMPORTED_MODULE_17__["saveAs"])(blob, "".concat(_this3.$t('reports.budgets.excel_name'), "-").concat(_this3.filter.start, "-").concat(_this3.filter.end, ".xlsx"));
                })["catch"](function (e) {
                  _this3.loading = false;
                  _this3.handleResponseErrors(e);
                });
              } catch (e) {
                _this3.loading = false;
                _this3.handleResponseErrors(e);
              }
            case 2:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    filterData: function filterData() {
      var _this4 = this;
      return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().mark(function _callee4() {
        var query, _yield$BudgetResource, data;
        return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              if (!(!_this4.filter.start && !_this4.filter.end && !_this4.filter.name)) {
                _context4.next = 3;
                break;
              }
              _this4.danger(_this4.$t('filters.required_description'), 'Error');
              return _context4.abrupt("return", false);
            case 3:
              _context4.prev = 3;
              query = Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _this4.filter), {}, {
                search: _this4.filter.name,
                filter_by: _this4.filter_by,
                perPage: _this4.perPage,
                page: _this4.currentPage
              });
              _this4.isFilterApplied = true;
              _this4.loading = true;
              _context4.next = 9;
              return BudgetResource.getList(query);
            case 9:
              _yield$BudgetResource = _context4.sent;
              data = _yield$BudgetResource.data;
              _this4.loading = false;
              _this4.budgets = data.data;
              _this4.totalBudgets = data.total;
              _context4.next = 20;
              break;
            case 16:
              _context4.prev = 16;
              _context4.t0 = _context4["catch"](3);
              _this4.loading = false;
              _this4.handleResponseErrors(_context4.t0);
            case 20:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[3, 16]]);
      }))();
    },
    clearFilter: function clearFilter() {
      this.filter = {};
      this.isFilterApplied = false;
      this.budgets = [];
    }
  },
  watch: {
    currentPage: function currentPage(value) {
      if (_.isEmpty(this.filter.start) && _.isEmpty(this.filter.end) && _.isEmpty(this.filter.name)) return false;
      // this.filterData();
    },
    perPage: function perPage(value) {
      if (_.isEmpty(this.filter.start) && _.isEmpty(this.filter.end) && _.isEmpty(this.filter.name)) return false;
      // this.filterData();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/reports/ReportBudgets.vue?vue&type=style&index=0&id=0b9d6020&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/reports/ReportBudgets.vue?vue&type=style&index=0&id=0b9d6020&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../../../../../node_modules/css-loader/dist/cjs.js!flatpickr/dist/flatpickr.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/flatpickr/dist/flatpickr.css");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);
// Module
exports.push([module.i, "@charset \"UTF-8\";\n/**\n    Support for SASS is deprecated as of v3.18.\n\n    The files remain here if your build is dependent on them\n    but they will not receive updates in future releases. All\n    SASS variables have been translated into CSS variables, so\n    migration should be quite simple if you'd like to move over.\n\n    In v4, these files will be removed.\n */\n.v-select {\n  position: relative;\n  font-family: inherit;\n}\n.v-select,\n.v-select * {\n  box-sizing: border-box;\n}\n\n/* KeyFrames */\n@-webkit-keyframes vSelectSpinner-ltr {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@-webkit-keyframes vSelectSpinner-rtl {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(-360deg);\n}\n}\n@keyframes vSelectSpinner-ltr {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes vSelectSpinner-rtl {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(-360deg);\n}\n}\n/* Dropdown Default Transition */\n.vs__fade-enter-active,\n.vs__fade-leave-active {\n  pointer-events: none;\n  transition: opacity 0.15s cubic-bezier(1, 0.5, 0.8, 1);\n}\n.vs__fade-enter,\n.vs__fade-leave-to {\n  opacity: 0;\n}\n\n/** Component States */\n/*\n * Disabled\n *\n * When the component is disabled, all interaction\n * should be prevented. Here we modify the bg color,\n * and change the cursor displayed on the interactive\n * components.\n */\n[dir] .vs--disabled .vs__dropdown-toggle, [dir] .vs--disabled .vs__clear, [dir] .vs--disabled .vs__search, [dir] .vs--disabled .vs__selected, [dir] .vs--disabled .vs__open-indicator {\n  cursor: not-allowed;\n  background-color: #f8f8f8;\n}\n\n/*\n *  RTL - Right to Left Support\n *\n *  Because we're using a flexbox layout, the `dir=\"rtl\"`\n *  HTML attribute does most of the work for us by\n *  rearranging the child elements visually.\n */\n.v-select[dir=rtl] .vs__actions {\n  padding: 0 3px 0 6px;\n}\n.v-select[dir=rtl] .vs__clear {\n  margin-left: 6px;\n  margin-right: 0;\n}\n.v-select[dir=rtl] .vs__deselect {\n  margin-left: 0;\n  margin-right: 2px;\n}\n.v-select[dir=rtl] .vs__dropdown-menu {\n  text-align: right;\n}\n\n/**\n    Dropdown Toggle\n\n    The dropdown toggle is the primary wrapper of the component. It\n    has two direct descendants: .vs__selected-options, and .vs__actions.\n\n    .vs__selected-options holds the .vs__selected's as well as the\n    main search input.\n\n    .vs__actions holds the clear button and dropdown toggle.\n */\n.vs__dropdown-toggle {\n  appearance: none;\n  display: flex;\n  white-space: normal;\n}\n[dir] .vs__dropdown-toggle {\n  padding: 0 0 4px 0;\n  background: none;\n  border: 1px solid #d8d6de;\n  border-radius: 0.357rem;\n}\n.vs__selected-options {\n  display: flex;\n  flex-basis: 100%;\n  flex-grow: 1;\n  flex-wrap: wrap;\n  position: relative;\n}\n[dir] .vs__selected-options {\n  padding: 0 2px;\n}\n.vs__actions {\n  display: flex;\n  align-items: center;\n}\n[dir=ltr] .vs__actions {\n  padding: 4px 6px 0 3px;\n}\n[dir=rtl] .vs__actions {\n  padding: 4px 3px 0 6px;\n}\n\n/* Dropdown Toggle States */\n[dir] .vs--searchable .vs__dropdown-toggle {\n  cursor: text;\n}\n[dir] .vs--unsearchable .vs__dropdown-toggle {\n  cursor: pointer;\n}\n[dir] .vs--open .vs__dropdown-toggle {\n  border-bottom-color: transparent;\n}\n[dir=ltr] .vs--open .vs__dropdown-toggle {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n[dir=rtl] .vs--open .vs__dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.vs__open-indicator {\n  fill: rgba(60, 60, 60, 0.5);\n  transition: transform 150ms cubic-bezier(1, -0.115, 0.975, 0.855);\n}\n[dir] .vs__open-indicator {\n  transform: scale(1);\n  transition-timing-function: cubic-bezier(1, -0.115, 0.975, 0.855);\n}\n[dir=ltr] .vs--open .vs__open-indicator {\n  transform: rotate(180deg) scale(1);\n}\n[dir=rtl] .vs--open .vs__open-indicator {\n  transform: rotate(-180deg) scale(1);\n}\n.vs--loading .vs__open-indicator {\n  opacity: 0;\n}\n\n/* Clear Button */\n.vs__clear {\n  fill: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__clear {\n  padding: 0;\n  border: 0;\n  background-color: transparent;\n  cursor: pointer;\n}\n[dir=ltr] .vs__clear {\n  margin-right: 8px;\n}\n[dir=rtl] .vs__clear {\n  margin-left: 8px;\n}\n\n/* Dropdown Menu */\n.vs__dropdown-menu {\n  display: block;\n  box-sizing: border-box;\n  position: absolute;\n  top: calc(100% - 1px);\n  z-index: 1000;\n  width: 100%;\n  max-height: 350px;\n  min-width: 160px;\n  overflow-y: auto;\n  list-style: none;\n}\n[dir] .vs__dropdown-menu {\n  padding: 5px 0;\n  margin: 0;\n  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.1);\n  border: 1px solid #d8d6de;\n  border-top-style: none;\n  border-radius: 0 0 0.357rem 0.357rem;\n  background: #fff;\n}\n[dir=ltr] .vs__dropdown-menu {\n  left: 0;\n  text-align: left;\n}\n[dir=rtl] .vs__dropdown-menu {\n  right: 0;\n  text-align: right;\n}\n[dir] .vs__no-options {\n  text-align: center;\n}\n\n/* List Items */\n.vs__dropdown-option {\n  line-height: 1.42857143;\n  /* Normalize line height */\n  display: block;\n  color: #333;\n  /* Overrides most CSS frameworks */\n  white-space: nowrap;\n}\n[dir] .vs__dropdown-option {\n  padding: 3px 20px;\n  clear: both;\n  cursor: pointer;\n}\n.vs__dropdown-option--highlight {\n  color: #7367f0 !important;\n}\n[dir] .vs__dropdown-option--highlight {\n  background: rgba(115, 103, 240, 0.12);\n}\n.vs__dropdown-option--deselect {\n  color: #fff;\n}\n[dir] .vs__dropdown-option--deselect {\n  background: #fb5858;\n}\n.vs__dropdown-option--disabled {\n  color: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__dropdown-option--disabled {\n  background: inherit;\n  cursor: inherit;\n}\n\n/* Selected Tags */\n.vs__selected {\n  display: flex;\n  align-items: center;\n  color: #333;\n  line-height: 1.8;\n  z-index: 0;\n}\n[dir] .vs__selected {\n  background-color: #7367f0;\n  border: 0 solid rgba(60, 60, 60, 0.26);\n  border-radius: 0.357rem;\n  margin: 4px 2px 0px 2px;\n  padding: 0 0.25em;\n}\n.vs__deselect {\n  display: inline-flex;\n  appearance: none;\n  fill: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__deselect {\n  padding: 0;\n  border: 0;\n  cursor: pointer;\n  background: none;\n  text-shadow: 0 1px 0 #fff;\n}\n[dir=ltr] .vs__deselect {\n  margin-left: 4px;\n}\n[dir=rtl] .vs__deselect {\n  margin-right: 4px;\n}\n\n/* States */\n[dir] .vs--single .vs__selected {\n  background-color: transparent;\n  border-color: transparent;\n}\n.vs--single.vs--open .vs__selected, .vs--single.vs--loading .vs__selected {\n  position: absolute;\n  opacity: 0.4;\n}\n.vs--single.vs--searching .vs__selected {\n  display: none;\n}\n\n/* Search Input */\n/**\n * Super weird bug... If this declaration is grouped\n * below, the cancel button will still appear in chrome.\n * If it's up here on it's own, it'll hide it.\n */\n.vs__search::-webkit-search-cancel-button {\n  display: none;\n}\n.vs__search::-webkit-search-decoration,\n.vs__search::-webkit-search-results-button,\n.vs__search::-webkit-search-results-decoration,\n.vs__search::-ms-clear {\n  display: none;\n}\n.vs__search,\n.vs__search:focus {\n  appearance: none;\n  line-height: 1.8;\n  font-size: 1em;\n  outline: none;\n  width: 0;\n  max-width: 100%;\n  flex-grow: 1;\n  z-index: 1;\n}\n[dir] .vs__search, [dir] .vs__search:focus {\n  border: 1px solid transparent;\n  margin: 4px 0 0 0;\n  padding: 0 7px;\n  background: none;\n  box-shadow: none;\n}\n[dir=ltr] .vs__search, [dir=ltr] .vs__search:focus {\n  border-left: none;\n}\n[dir=rtl] .vs__search, [dir=rtl] .vs__search:focus {\n  border-right: none;\n}\n.vs__search::placeholder {\n  color: #6e6b7b;\n}\n\n/**\n    States\n */\n.vs--unsearchable .vs__search {\n  opacity: 1;\n}\n[dir] .vs--unsearchable:not(.vs--disabled) .vs__search {\n  cursor: pointer;\n}\n.vs--single.vs--searching:not(.vs--open):not(.vs--loading) .vs__search {\n  opacity: 0.2;\n}\n\n/* Loading Spinner */\n.vs__spinner {\n  align-self: center;\n  opacity: 0;\n  font-size: 5px;\n  text-indent: -9999em;\n  overflow: hidden;\n  transition: opacity 0.1s;\n}\n[dir] .vs__spinner {\n  border-top: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-bottom: 0.9em solid rgba(100, 100, 100, 0.1);\n  transform: translateZ(0);\n}\n[dir=ltr] .vs__spinner {\n  border-right: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-left: 0.9em solid rgba(60, 60, 60, 0.45);\n  animation:  vSelectSpinner-ltr 1.1s infinite linear;\n}\n[dir=rtl] .vs__spinner {\n  border-left: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-right: 0.9em solid rgba(60, 60, 60, 0.45);\n  animation:  vSelectSpinner-rtl 1.1s infinite linear;\n}\n.vs__spinner,\n.vs__spinner:after {\n  width: 5em;\n  height: 5em;\n}\n[dir] .vs__spinner, [dir] .vs__spinner:after {\n  border-radius: 50%;\n}\n\n/* Loading Spinner States */\n.vs--loading .vs__spinner {\n  opacity: 1;\n}\n.vs__open-indicator {\n  fill: none;\n}\n[dir] .vs__open-indicator {\n  margin-top: 0.15rem;\n}\n.vs__dropdown-toggle {\n  transition: all 0.25s ease-in-out;\n}\n[dir] .vs__dropdown-toggle {\n  padding: 0.59px 0 4px 0;\n}\n[dir=ltr] .vs--single .vs__dropdown-toggle {\n  padding-left: 6px;\n}\n[dir=rtl] .vs--single .vs__dropdown-toggle {\n  padding-right: 6px;\n}\n.vs__dropdown-option--disabled {\n  opacity: 0.5;\n}\n[dir] .vs__dropdown-option--disabled.vs__dropdown-option--selected {\n  background: #7367f0 !important;\n}\n.vs__dropdown-option {\n  color: #6e6b7b;\n}\n[dir] .vs__dropdown-option, [dir] .vs__no-options {\n  padding: 7px 20px;\n}\n.vs__dropdown-option--selected {\n  background-color: #7367f0;\n  color: #fff;\n  position: relative;\n}\n.vs__dropdown-option--selected::after {\n  content: \"\";\n  height: 1.1rem;\n  width: 1.1rem;\n  display: inline-block;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  right: 20px;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-check'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 1.1rem;\n}\n[dir=rtl] .vs__dropdown-option--selected::after {\n  left: 20px;\n  right: unset;\n}\n.vs__dropdown-option--selected.vs__dropdown-option--highlight {\n  color: #fff !important;\n  background-color: #7367f0 !important;\n}\n.vs__clear svg {\n  color: #6e6b7b;\n}\n.vs__selected {\n  color: #fff;\n}\n.v-select.vs--single .vs__selected {\n  color: #6e6b7b;\n  transition: transform 0.2s ease;\n}\n[dir] .v-select.vs--single .vs__selected {\n  margin-top: 5px;\n}\n[dir=ltr] .v-select.vs--single .vs__selected input {\n  padding-left: 0;\n}\n[dir=rtl] .v-select.vs--single .vs__selected input {\n  padding-right: 0;\n}\n[dir=ltr] .vs--single.vs--open .vs__selected {\n  transform: translateX(5px);\n}\n[dir=rtl] .vs--single.vs--open .vs__selected {\n  transform: translateX(-5px);\n}\n.vs__selected .vs__deselect {\n  color: inherit;\n}\n.v-select:not(.vs--single) .vs__selected {\n  font-size: 0.9rem;\n}\n[dir] .v-select:not(.vs--single) .vs__selected {\n  border-radius: 3px;\n  padding: 0 0.6em;\n}\n[dir=ltr] .v-select:not(.vs--single) .vs__selected {\n  margin: 5px 2px 2px 5px;\n}\n[dir=rtl] .v-select:not(.vs--single) .vs__selected {\n  margin: 5px 5px 2px 2px;\n}\n.v-select:not(.vs--single) .vs__deselect svg {\n  vertical-align: text-top;\n}\n[dir] .v-select:not(.vs--single) .vs__deselect svg {\n  transform: scale(0.8);\n}\n.vs__dropdown-menu {\n  top: calc(100% + 1rem);\n}\n[dir] .vs__dropdown-menu {\n  border: none;\n  border-radius: 6px;\n  padding: 0;\n}\n[dir] .vs--open .vs__dropdown-toggle {\n  border-color: #7367f0;\n  border-bottom-color: #7367f0;\n  box-shadow: 0 3px 10px 0 rgba(34, 41, 47, 0.1);\n}\n[dir=ltr] .vs--open .vs__dropdown-toggle {\n  border-bottom-left-radius: 0.357rem;\n  border-bottom-right-radius: 0.357rem;\n}\n[dir=rtl] .vs--open .vs__dropdown-toggle {\n  border-bottom-right-radius: 0.357rem;\n  border-bottom-left-radius: 0.357rem;\n}\n.select-size-lg .vs__selected {\n  font-size: 1rem !important;\n}\n[dir] .select-size-lg.vs--single.vs--open .vs__selected {\n  margin-top: 6px;\n}\n.select-size-lg .vs__dropdown-toggle,\n.select-size-lg .vs__selected {\n  font-size: 1.25rem;\n}\n[dir] .select-size-lg .vs__dropdown-toggle {\n  padding: 5px;\n}\n[dir] .select-size-lg .vs__dropdown-toggle input {\n  margin-top: 0;\n}\n.select-size-lg .vs__deselect svg {\n  vertical-align: middle !important;\n}\n[dir] .select-size-lg .vs__deselect svg {\n  transform: scale(1) !important;\n}\n[dir] .select-size-sm .vs__dropdown-toggle {\n  padding-bottom: 0;\n  padding: 1px;\n}\n[dir] .select-size-sm.vs--single .vs__dropdown-toggle {\n  padding: 2px;\n}\n.select-size-sm .vs__dropdown-toggle,\n.select-size-sm .vs__selected {\n  font-size: 0.9rem;\n}\n[dir] .select-size-sm .vs__actions {\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n.select-size-sm .vs__deselect svg {\n  vertical-align: middle !important;\n}\n[dir] .select-size-sm .vs__search {\n  margin-top: 0;\n}\n.select-size-sm.v-select .vs__selected {\n  font-size: 0.75rem;\n}\n[dir] .select-size-sm.v-select .vs__selected {\n  padding: 0 0.3rem;\n}\n[dir] .select-size-sm.v-select:not(.vs--single) .vs__selected {\n  margin: 4px 5px;\n}\n[dir] .select-size-sm.v-select.vs--single .vs__selected {\n  margin-top: 1px;\n}\n[dir] .select-size-sm.vs--single.vs--open .vs__selected {\n  margin-top: 4px;\n}\n.dark-layout .vs__dropdown-toggle {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .vs__dropdown-toggle {\n  background: #283046;\n  border-color: #404656;\n}\n.dark-layout .vs__selected-options input {\n  color: #b4b7bd;\n}\n.dark-layout .vs__selected-options input::placeholder {\n  color: #676d7d;\n}\n.dark-layout .vs__actions svg {\n  fill: #404656;\n}\n[dir] .dark-layout .vs__dropdown-menu {\n  background: #283046;\n}\n.dark-layout .vs__dropdown-menu li {\n  color: #b4b7bd;\n}\n.dark-layout .v-select:not(.vs--single) .vs__selected {\n  color: #7367f0;\n}\n[dir] .dark-layout .v-select:not(.vs--single) .vs__selected {\n  background-color: rgba(115, 103, 240, 0.12);\n}\n.dark-layout .v-select.vs--single .vs__selected {\n  color: #b4b7bd !important;\n}\n.dark-layout .vs--disabled .vs__dropdown-toggle,\n.dark-layout .vs--disabled .vs__clear,\n.dark-layout .vs--disabled .vs__search,\n.dark-layout .vs--disabled .vs__selected,\n.dark-layout .vs--disabled .vs__open-indicator {\n  opacity: 0.5;\n}\n[dir] .dark-layout .vs--disabled .vs__dropdown-toggle, [dir] .dark-layout .vs--disabled .vs__clear, [dir] .dark-layout .vs--disabled .vs__search, [dir] .dark-layout .vs--disabled .vs__selected, [dir] .dark-layout .vs--disabled .vs__open-indicator {\n  background-color: #283046;\n}\n.flatpickr-calendar .flatpickr-day {\n  color: #6e6b7b;\n}\n[dir] .flatpickr-calendar .flatpickr-day.today {\n  border-color: #7367f0;\n}\n.flatpickr-calendar .flatpickr-day.today:hover {\n  color: #6e6b7b;\n}\n[dir] .flatpickr-calendar .flatpickr-day.today:hover {\n  background: transparent;\n}\n.flatpickr-calendar .flatpickr-day.selected, .flatpickr-calendar .flatpickr-day.selected:hover {\n  color: #fff;\n}\n[dir] .flatpickr-calendar .flatpickr-day.selected, [dir] .flatpickr-calendar .flatpickr-day.selected:hover {\n  background: #7367f0;\n  border-color: #7367f0;\n}\n[dir] .flatpickr-calendar .flatpickr-day.inRange, [dir] .flatpickr-calendar .flatpickr-day.inRange:hover {\n  background: #f3f2fe;\n  border-color: #f3f2fe;\n}\n[dir=ltr] .flatpickr-calendar .flatpickr-day.inRange, [dir=ltr] .flatpickr-calendar .flatpickr-day.inRange:hover {\n  box-shadow: -5px 0 0 #f3f2fe, 5px 0 0 #f3f2fe;\n}\n[dir=rtl] .flatpickr-calendar .flatpickr-day.inRange, [dir=rtl] .flatpickr-calendar .flatpickr-day.inRange:hover {\n  box-shadow: 5px 0 0 #f3f2fe, -5px 0 0 #f3f2fe;\n}\n.flatpickr-calendar .flatpickr-day.startRange, .flatpickr-calendar .flatpickr-day.endRange, .flatpickr-calendar .flatpickr-day.startRange:hover, .flatpickr-calendar .flatpickr-day.endRange:hover {\n  color: #fff;\n}\n[dir] .flatpickr-calendar .flatpickr-day.startRange, [dir] .flatpickr-calendar .flatpickr-day.endRange, [dir] .flatpickr-calendar .flatpickr-day.startRange:hover, [dir] .flatpickr-calendar .flatpickr-day.endRange:hover {\n  background: #7367f0;\n  border-color: #7367f0;\n}\n[dir=ltr] .flatpickr-calendar .flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n+1)), [dir=ltr] .flatpickr-calendar .flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n+1)), [dir=ltr] .flatpickr-calendar .flatpickr-day.endRange.startRange + .endRange:not(:nth-child(7n+1)) {\n  box-shadow: -10px 0 0 #7367f0;\n}\n[dir=rtl] .flatpickr-calendar .flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n+1)), [dir=rtl] .flatpickr-calendar .flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n+1)), [dir=rtl] .flatpickr-calendar .flatpickr-day.endRange.startRange + .endRange:not(:nth-child(7n+1)) {\n  box-shadow: 10px 0 0 #7367f0;\n}\n.flatpickr-calendar .flatpickr-day.flatpickr-disabled, .flatpickr-calendar .flatpickr-day.prevMonthDay, .flatpickr-calendar .flatpickr-day.nextMonthDay {\n  color: #dae1e7;\n}\n[dir] .flatpickr-calendar .flatpickr-day:hover {\n  background: #f6f6f6;\n}\n.flatpickr-calendar:after, .flatpickr-calendar:before {\n  display: none;\n}\n.flatpickr-calendar .flatpickr-months .flatpickr-prev-month,\n.flatpickr-calendar .flatpickr-months .flatpickr-next-month {\n  top: -5px;\n}\n.flatpickr-calendar .flatpickr-months .flatpickr-prev-month:hover i, .flatpickr-calendar .flatpickr-months .flatpickr-prev-month:hover svg,\n.flatpickr-calendar .flatpickr-months .flatpickr-next-month:hover i,\n.flatpickr-calendar .flatpickr-months .flatpickr-next-month:hover svg {\n  fill: #7367f0;\n}\n.flatpickr-calendar .flatpickr-current-month span.cur-month {\n  font-weight: 300;\n}\n.flatpickr-calendar.open {\n  z-index: 1051;\n}\n.flatpickr-calendar.hasTime.open .flatpickr-time {\n  height: auto;\n}\n[dir] .flatpickr-time input:hover, [dir] .flatpickr-time .flatpickr-am-pm:hover, [dir] .flatpickr-time input:focus, [dir] .flatpickr-time .flatpickr-am-pm:focus {\n  background: #fff;\n}\n[dir] .dark-layout .flatpickr-calendar {\n  background: #161d31;\n  border-color: #161d31;\n  box-shadow: none;\n}\n.dark-layout .flatpickr-calendar .flatpickr-months i,\n.dark-layout .flatpickr-calendar .flatpickr-months svg {\n  fill: #b4b7bd;\n}\n.dark-layout .flatpickr-calendar .flatpickr-month {\n  color: #b4b7bd;\n}\n[dir=ltr] .dark-layout .flatpickr-calendar .flatpickr-weekwrapper .flatpickr-weeks {\n  box-shadow: 1px 0 0 #3b4253;\n}\n[dir=rtl] .dark-layout .flatpickr-calendar .flatpickr-weekwrapper .flatpickr-weeks {\n  box-shadow: -1px 0 0 #3b4253;\n}\n.dark-layout .flatpickr-calendar .flatpickr-weekday {\n  color: #b4b7bd;\n}\n.dark-layout .flatpickr-calendar .flatpickr-day, .dark-layout .flatpickr-calendar .flatpickr-day.today:hover {\n  color: #b4b7bd;\n}\n.dark-layout .flatpickr-calendar .flatpickr-day.selected {\n  color: #fff;\n}\n.dark-layout .flatpickr-calendar .flatpickr-day.prevMonthDay, .dark-layout .flatpickr-calendar .flatpickr-day.nextMonthDay, .dark-layout .flatpickr-calendar .flatpickr-day.flatpickr-disabled {\n  color: #4e5154 !important;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-day.inRange, [dir] .dark-layout .flatpickr-calendar .flatpickr-day.inRange:hover {\n  background: #283046;\n  border-color: #283046;\n}\n[dir=ltr] .dark-layout .flatpickr-calendar .flatpickr-day.inRange, [dir=ltr] .dark-layout .flatpickr-calendar .flatpickr-day.inRange:hover {\n  box-shadow: -5px 0 0 #283046, 5px 0 0 #283046;\n}\n[dir=rtl] .dark-layout .flatpickr-calendar .flatpickr-day.inRange, [dir=rtl] .dark-layout .flatpickr-calendar .flatpickr-day.inRange:hover {\n  box-shadow: 5px 0 0 #283046, -5px 0 0 #283046;\n}\n.dark-layout .flatpickr-calendar .flatpickr-day:hover:not(.selected):not(.today):not(.startRange):not(.endRange) {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-day:hover:not(.selected):not(.today):not(.startRange):not(.endRange) {\n  border-color: #283046;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-days .flatpickr-day:hover:not(.selected):not(.today):not(.startRange):not(.endRange), [dir] .dark-layout .flatpickr-calendar .flatpickr-days .flatpickr-day:focus:not(.selected):not(.today):not(.startRange):not(.endRange) {\n  background: #283046;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-time {\n  border-color: #161d31 !important;\n}\n.dark-layout .flatpickr-calendar .flatpickr-time .numInput,\n.dark-layout .flatpickr-calendar .flatpickr-time .flatpickr-am-pm {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-time .numInput:hover, [dir] .dark-layout .flatpickr-calendar .flatpickr-time .flatpickr-am-pm:hover {\n  background: #161d31;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-time .arrowUp:after {\n  border-bottom-color: #b4b7bd;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-time .arrowDown:after {\n  border-top-color: #b4b7bd;\n}\n[dir] .dark-layout .flatpickr-time input:hover, [dir] .dark-layout .flatpickr-time .flatpickr-am-pm:hover, [dir] .dark-layout .flatpickr-time input:focus, [dir] .dark-layout .flatpickr-time .flatpickr-am-pm:focus {\n  background: #161d31;\n}\n.flatpickr-input[readonly],\n.flatpickr-input ~ .form-control[readonly],\n.flatpickr-human-friendly[readonly] {\n  opacity: 1 !important;\n}\n[dir] .flatpickr-input[readonly], [dir] .flatpickr-input ~ .form-control[readonly], [dir] .flatpickr-human-friendly[readonly] {\n  background-color: inherit;\n}\n[dir] .flatpickr-weekdays {\n  margin-top: 8px;\n}\n.flatpickr-current-month .flatpickr-monthDropdown-months {\n  -webkit-appearance: none;\n}\n.flatpickr-current-month .flatpickr-monthDropdown-months,\n.flatpickr-current-month .numInputWrapper {\n  font-size: 1.1rem;\n  transition: all 0.15s ease-out;\n}\n[dir] .flatpickr-current-month .flatpickr-monthDropdown-months, [dir] .flatpickr-current-month .numInputWrapper {\n  border-radius: 4px;\n  padding: 2px;\n}\n.flatpickr-current-month .flatpickr-monthDropdown-months span,\n.flatpickr-current-month .numInputWrapper span {\n  display: none;\n}\nhtml[dir=rtl] .flatpickr-calendar .flatpickr-prev-month svg,\nhtml[dir=rtl] .flatpickr-calendar .flatpickr-next-month svg {\n  transform: rotate(180deg);\n}\n[dir] .dark-layout .card-company-table ::v-deep td .b-avatar.badge-light-company {\n  background: #161d31 !important;\n}\n.flatpickr-small .flatpickr-input {\n  /*font-size: 8px!important; /* Ajusta el tamaño del texto del input */\n  /* Ajusta el padding del input */\n  /*width: 120px; /* Ajusta el ancho del input */\n}\n[dir] .flatpickr-small .flatpickr-input {\n  padding: 5px;\n}\n.flatpickr-input {\n  /*width: 150px!important; /* Ajusta el ancho del input */\n  height: 30px !important;\n  /* Ajusta la altura del input */\n  /*font-size: 7px!important; /* Ajusta el tamaño del texto del input */\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/file-saver/dist/FileSaver.min.js":
/*!*******************************************************!*\
  !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(a,b,c){var d=new XMLHttpRequest;d.open("GET",a),d.responseType="blob",d.onload=function(){g(d.response,b,c)},d.onerror=function(){console.error("could not download file")},d.send()}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=f.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(b,d,e,g){if(g=g||open("","_blank"),g&&(g.document.title=g.document.body.innerText="downloading..."),"string"==typeof b)return c(b,d,e);var h="application/octet-stream"===b.type,i=/constructor/i.test(f.HTMLElement)||f.safari,j=/CriOS\/[\d]+/.test(navigator.userAgent);if((j||h&&i||a)&&"undefined"!=typeof FileReader){var k=new FileReader;k.onloadend=function(){var a=k.result;a=j?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=a:location=a,g=null},k.readAsDataURL(b)}else{var l=f.URL||f.webkitURL,m=l.createObjectURL(b);g?g.location=m:location.href=m,g=null,setTimeout(function(){l.revokeObjectURL(m)},4E4)}});f.saveAs=g.saveAs=g, true&&(module.exports=g)});

//# sourceMappingURL=FileSaver.min.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/flatpickr/dist/l10n/es.js":
/*!************************************************!*\
  !*** ./node_modules/flatpickr/dist/l10n/es.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? factory(exports) :
  undefined;
}(this, (function (exports) { 'use strict';

  var fp = typeof window !== "undefined" && window.flatpickr !== undefined
      ? window.flatpickr
      : {
          l10ns: {},
      };
  var Spanish = {
      weekdays: {
          shorthand: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
          longhand: [
              "Domingo",
              "Lunes",
              "Martes",
              "Miércoles",
              "Jueves",
              "Viernes",
              "Sábado",
          ],
      },
      months: {
          shorthand: [
              "Ene",
              "Feb",
              "Mar",
              "Abr",
              "May",
              "Jun",
              "Jul",
              "Ago",
              "Sep",
              "Oct",
              "Nov",
              "Dic",
          ],
          longhand: [
              "Enero",
              "Febrero",
              "Marzo",
              "Abril",
              "Mayo",
              "Junio",
              "Julio",
              "Agosto",
              "Septiembre",
              "Octubre",
              "Noviembre",
              "Diciembre",
          ],
      },
      ordinal: function () {
          return "º";
      },
      firstDayOfWeek: 1,
      rangeSeparator: " a ",
      time_24hr: true,
  };
  fp.l10ns.es = Spanish;
  var es = fp.l10ns;

  exports.Spanish = Spanish;
  exports.default = es;

  Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/reports/ReportBudgets.vue?vue&type=style&index=0&id=0b9d6020&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/reports/ReportBudgets.vue?vue&type=style&index=0&id=0b9d6020&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--12-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ReportBudgets.vue?vue&type=style&index=0&id=0b9d6020&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/reports/ReportBudgets.vue?vue&type=style&index=0&id=0b9d6020&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/reports/ReportBudgets.vue?vue&type=template&id=0b9d6020&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/reports/ReportBudgets.vue?vue&type=template&id=0b9d6020& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
        "b-overlay",
        {
          attrs: {
            show: _vm.loading,
            blur: "2px",
            variant: "transparent",
            rounded: "lg",
            opacity: _vm.opacity,
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
                "b-card-body",
                [
                  _c(
                    "b-row",
                    [
                      _c(
                        "b-col",
                        { staticClass: "p-1", attrs: { cols: "12", md: "12" } },
                        [
                          _c(
                            "b-form-group",
                            {
                              attrs: {
                                label: _vm.$t("filters.title"),
                                "label-cols": "12",
                                "label-class": "font-weight-bolder",
                                "label-align": "left",
                              },
                            },
                            [
                              _c("b-form-radio-group", {
                                staticClass: "groupselect",
                                attrs: {
                                  id: "radio-group-1",
                                  options: _vm.optionsFilters,
                                  reduce: function (option) {
                                    return option.value
                                  },
                                  name: "radio-options",
                                },
                                model: {
                                  value: _vm.filter_by,
                                  callback: function ($$v) {
                                    _vm.filter_by = $$v
                                  },
                                  expression: "filter_by",
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
                        { attrs: { cols: "12", md: "2" } },
                        [
                          _c("label", [_vm._v(_vm._s(_vm.$t("start_at")))]),
                          _vm._v(" "),
                          _c("flat-pickr", {
                            staticClass: "form-control flatpickr-small",
                            attrs: {
                              config: { dateFormat: "Y-m-d" },
                              placeholder: "DD/MM/YYYY",
                            },
                            model: {
                              value: _vm.filter.start,
                              callback: function ($$v) {
                                _vm.$set(_vm.filter, "start", $$v)
                              },
                              expression: "filter.start",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { cols: "12", md: "2" } },
                        [
                          _c("label", [_vm._v(_vm._s(_vm.$t("end_at")))]),
                          _vm._v(" "),
                          _c("flat-pickr", {
                            staticClass: "form-control flatpickr-small",
                            attrs: {
                              config: {
                                minDate: _vm.filter.start,
                                dateFormat: "Y-m-d",
                              },
                              placeholder: "DD/MM/YYYY",
                            },
                            model: {
                              value: _vm.filter.end,
                              callback: function ($$v) {
                                _vm.$set(_vm.filter, "end", $$v)
                              },
                              expression: "filter.end",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { cols: "12", md: "3" } },
                        [
                          _c("label", [
                            _vm._v(_vm._s(_vm.$t("branch_office")) + " "),
                          ]),
                          _vm._v(" "),
                          _c("v-select", {
                            staticClass: "select-size-sm",
                            attrs: {
                              options: _vm.branchs,
                              label: "name",
                              reduce: function (option) {
                                return option.id
                              },
                              clearable: true,
                              searchable: true,
                              placeholder: _vm.$t("branch_office_placeholder"),
                            },
                            model: {
                              value: _vm.filter.brach_id,
                              callback: function ($$v) {
                                _vm.$set(_vm.filter, "brach_id", $$v)
                              },
                              expression: "filter.brach_id",
                            },
                          }),
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
                                label: _vm.$t("search_by"),
                                "label-for": "add-guests",
                              },
                            },
                            [
                              _c("b-form-input", {
                                attrs: {
                                  size: "sm",
                                  id: "add-guests",
                                  placeholder: _vm.$t(
                                    "budgets.filter_placeholder"
                                  ),
                                },
                                model: {
                                  value: _vm.filter.name,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.filter, "name", $$v)
                                  },
                                  expression: "filter.name",
                                },
                              }),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("b-col", { attrs: { cols: "12", md: "12" } }, [
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
                                    value: "rgba(255, 255, 255, 0.15)",
                                    expression: "'rgba(255, 255, 255, 0.15)'",
                                    modifiers: { 400: true },
                                  },
                                ],
                                class: { "btn-block": _vm.isMobile },
                                attrs: {
                                  size: "sm",
                                  variant: "outline-primary",
                                },
                                on: { click: _vm.filterData },
                              },
                              [
                                _c("feather-icon", {
                                  attrs: { icon: "SearchIcon" },
                                }),
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(_vm.$t("button_filter")) +
                                    "\n                            "
                                ),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _vm.budgets.length
                              ? _c(
                                  "b-button",
                                  {
                                    directives: [
                                      {
                                        name: "ripple",
                                        rawName: "v-ripple.400",
                                        value: "rgba(255, 255, 255, 0.15)",
                                        expression:
                                          "'rgba(255, 255, 255, 0.15)'",
                                        modifiers: { 400: true },
                                      },
                                    ],
                                    class: { "btn-block": _vm.isMobile },
                                    attrs: {
                                      size: "sm",
                                      variant: "outline-success",
                                    },
                                    on: { click: _vm.donwloadBudget },
                                  },
                                  [
                                    _c("feather-icon", {
                                      attrs: { icon: "DownloadIcon" },
                                    }),
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(_vm.$t("button_download")) +
                                        "\n                            "
                                    ),
                                  ],
                                  1
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.filter.start
                              ? _c(
                                  "b-button",
                                  {
                                    directives: [
                                      {
                                        name: "ripple",
                                        rawName: "v-ripple.400",
                                        value: "rgba(255, 255, 255, 0.15)",
                                        expression:
                                          "'rgba(255, 255, 255, 0.15)'",
                                        modifiers: { 400: true },
                                      },
                                    ],
                                    class: { "btn-block": _vm.isMobile },
                                    attrs: {
                                      size: "sm",
                                      variant: "outline-danger",
                                    },
                                    on: { click: _vm.clearFilter },
                                  },
                                  [
                                    _c("feather-icon", {
                                      attrs: { icon: "XIcon" },
                                    }),
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(_vm.$t("button_clear_filter")) +
                                        "\n                            "
                                    ),
                                  ],
                                  1
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
                                    value: "rgba(255, 255, 255, 0.15)",
                                    expression: "'rgba(255, 255, 255, 0.15)'",
                                    modifiers: { 400: true },
                                  },
                                ],
                                class: { "btn-block": _vm.isMobile },
                                attrs: {
                                  size: "sm",
                                  variant: "outline-secondary",
                                },
                                on: {
                                  click: function ($event) {
                                    return _vm.$router.back()
                                  },
                                },
                              },
                              [
                                _c("feather-icon", {
                                  attrs: { icon: "ChevronLeftIcon" },
                                }),
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(_vm.$t("back")) +
                                    "\n                            "
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
            ],
            1
          ),
          _vm._v(" "),
          _c("b-card", { staticClass: "mb-0", attrs: { "no-body": "" } }, [
            _c(
              "div",
              { staticClass: "table-responsive" },
              [
                _c("b-table", {
                  ref: "refPaymentListTable",
                  staticClass: "position-relative table-small text-small small",
                  attrs: {
                    striped: "",
                    hover: "",
                    items: _vm.budgets,
                    fields: _vm.columns,
                    responsive: "",
                    "primary-key": "id",
                    "show-empty": "",
                    "empty-text": _vm.$t("datatables.sZeroRecords"),
                    "current-page": _vm.currentPage,
                    "busy.sync": "loading",
                    stacked: "md",
                    small: "",
                  },
                  scopedSlots: _vm._u([
                    {
                      key: "cell(label)",
                      fn: function (data) {
                        return [
                          _c(
                            "b-link",
                            {
                              directives: [
                                {
                                  name: "b-tooltip",
                                  rawName: "v-b-tooltip.hover",
                                  modifiers: { hover: true },
                                },
                              ],
                              staticClass: "text-wrap",
                              attrs: {
                                id:
                                  "invoice-row-" +
                                  data.item.id +
                                  "-detail-icon",
                                title: _vm.$t(
                                  "budgets.options_show_detail_tooltip"
                                ),
                              },
                              on: { click: data.toggleDetails },
                            },
                            [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(data.item.label) +
                                  "\n                        "
                              ),
                            ]
                          ),
                        ]
                      },
                    },
                    {
                      key: "cell(name)",
                      fn: function (data) {
                        return [
                          _vm._v(
                            "\n                        " +
                              _vm._s(data.item.name || data.item.label) +
                              "\n                    "
                          ),
                        ]
                      },
                    },
                    {
                      key: "cell(branch)",
                      fn: function (data) {
                        return [
                          !data.item.branch.is_active
                            ? _c(
                                "span",
                                {
                                  staticClass:
                                    "text-danger text-decoration-line-through",
                                },
                                [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(data.item.branch.name) +
                                      "\n                        "
                                  ),
                                ]
                              )
                            : _c("span", [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(data.item.branch.name) +
                                    "\n                        "
                                ),
                              ]),
                        ]
                      },
                    },
                    {
                      key: "cell(patient)",
                      fn: function (data) {
                        return [
                          _vm.canAccess("patients.budget")
                            ? [
                                _vm.canAccess("patients.show")
                                  ? _c(
                                      "div",
                                      [
                                        _c(
                                          "b-link",
                                          {
                                            staticClass:
                                              "font-weight-bold d-block text-wrap",
                                            attrs: {
                                              to: {
                                                name: "apps-patients-view",
                                                params: {
                                                  id: data.item.patient.id,
                                                },
                                              },
                                            },
                                          },
                                          [
                                            _vm._v(
                                              "\n                                    " +
                                                _vm._s(
                                                  data.item.patient.full_name
                                                ) +
                                                "\n                                "
                                            ),
                                          ]
                                        ),
                                      ],
                                      1
                                    )
                                  : _c("div", [
                                      _vm._v(
                                        "\n                                " +
                                          _vm._s(data.item.patient.full_name) +
                                          "\n                            "
                                      ),
                                    ]),
                                _vm._v(" "),
                                _c("small", { staticClass: "text-muted" }, [
                                  _vm._v(_vm._s(data.item.patient.email)),
                                  _c("br"),
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(_vm.$t("patients.document_type")) +
                                      " (" +
                                      _vm._s(data.item.patient.document_type) +
                                      "): " +
                                      _vm._s(data.item.patient.rut) +
                                      "\n                            "
                                  ),
                                ]),
                              ]
                            : [
                                _c(
                                  "span",
                                  { staticClass: "text-wrap" },
                                  [
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
                                                      src: data.item.patient
                                                        .has_media
                                                        ? data.item.patient
                                                            .avatar
                                                        : null,
                                                      text: _vm.avatarText(
                                                        data.item.patient.name
                                                      ),
                                                      variant: "light-primary",
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
                                          "span",
                                          {
                                            staticClass:
                                              "font-weight-bold d-block text-wrap",
                                          },
                                          [
                                            _vm._v(
                                              "\n                                        " +
                                                _vm._s(
                                                  data.item.patient.full_name
                                                ) +
                                                "\n                                    "
                                            ),
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "small",
                                          { staticClass: "text-muted" },
                                          [
                                            _vm._v(
                                              _vm._s(data.item.patient.email)
                                            ),
                                            _c("br"),
                                            _vm._v(
                                              _vm._s(
                                                data.item.patient.document_type
                                              ) +
                                                ": " +
                                                _vm._s(data.item.patient.rut)
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ],
                                  1
                                ),
                              ],
                        ]
                      },
                    },
                    {
                      key: "cell(created_at)",
                      fn: function (data) {
                        return [
                          _c("span", { staticClass: "text-capitalize" }, [
                            _vm._v(
                              _vm._s(_vm.formatDateTime(data.item.created_at))
                            ),
                          ]),
                        ]
                      },
                    },
                    {
                      key: "cell(approved)",
                      fn: function (data) {
                        return [
                          _c(
                            "b-badge",
                            {
                              staticClass: "text-capitalize",
                              attrs: {
                                pill: "",
                                variant: _vm.resolveStatusBadge(
                                  data.item.approved
                                ),
                              },
                            },
                            [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(_vm.formatActive(data.item.approved)) +
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
                          _vm._v(
                            "\n                        " +
                              _vm._s(_vm.formatPrice(data.item.total)) +
                              "\n                    "
                          ),
                        ]
                      },
                    },
                    {
                      key: "cell(total_paid)",
                      fn: function (data) {
                        return [
                          _vm._v(
                            "\n                        " +
                              _vm._s(_vm.formatPrice(data.item.total_paid)) +
                              "\n                    "
                          ),
                        ]
                      },
                    },
                    {
                      key: "cell(total_debt)",
                      fn: function (data) {
                        return [
                          _vm._v(
                            "\n                        " +
                              _vm._s(_vm.formatPrice(data.item.total_debt)) +
                              "\n                    "
                          ),
                        ]
                      },
                    },
                  ]),
                }),
              ],
              1
            ),
            _vm._v(" "),
            _vm.budgets.length > 0
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
                                    "total-rows": _vm.totalBudgets,
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

/***/ "./resources/js/src/providers/BranchOffices.js":
/*!*****************************************************!*\
  !*** ./resources/js/src/providers/BranchOffices.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BranchOffices; });
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);



var BranchOffices = /*#__PURE__*/function () {
  function BranchOffices() {
    Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BranchOffices);
  }
  Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(BranchOffices, [{
    key: "index",
    value: function index(query) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/branch-offices", {
        params: query
      });
    }

    /**
     * Function to update a branch
     * @param {Object} formdata
     * @return AxiosPromise
     */
  }, {
    key: "store",
    value: function store(formdata) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/api/branch-offices", formdata, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
    }

    /**
     * Function to update a branch
     * @param {Object} formdata
     * @return AxiosPromise
     */
  }, {
    key: "update",
    value: function update(id, formdata) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/api/branch-offices/".concat(id), formdata, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
    }

    /**
     * Function to get information by branch
     * @param {Number} id
     * @return AxiosPromise
     */
  }, {
    key: "getBranchDetail",
    value: function getBranchDetail(id) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/branch-offices/".concat(id));
    }

    /**
     * Funtion to delete branchs-offices
     * @param {Array} users
     * @return AxiosPromise
     */
  }, {
    key: "deleteBranch",
    value: function deleteBranch(id) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a["delete"]("/api/branch-offices/".concat(id));
    }

    /**
     * Function to get all branchs-offices without pagination
     */
  }, {
    key: "getList",
    value: function getList(query) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/branch-offices", {
        params: query
      });
    }
  }, {
    key: "getAll",
    value: function getAll() {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/branch-offices/all");
    }
  }]);
  return BranchOffices;
}();


/***/ }),

/***/ "./resources/js/src/providers/Budgets.js":
/*!***********************************************!*\
  !*** ./resources/js/src/providers/Budgets.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Budgets; });
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);



var Budgets = /*#__PURE__*/function () {
  function Budgets() {
    Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Budgets);
  }
  Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Budgets, [{
    key: "save",
    value:
    /**
    * Function to update a branch
    * @param {Object} formdata
    * @return AxiosPromise
    */
    function save(formdata) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/budgets', formdata);
    }

    /**
    * Function to update a branch
    * @param {Object} formdata
    * @return AxiosPromise
    */
  }, {
    key: "update",
    value: function update(id, formdata) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.put("/api/budgets/".concat(id), formdata);
    }
  }, {
    key: "approve",
    value: function approve(id) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.put("/api/budgets/".concat(id, "/approve"));
    }
  }, {
    key: "sendEmail",
    value: function sendEmail(id, formData) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/api/budgets/".concat(id, "/send"), formData);
    }

    /**
    * Function to get information by budget
    * @param {Number} id
    * @return AxiosPromise
    */
  }, {
    key: "getBudgetDetail",
    value: function getBudgetDetail(id) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/budgets/".concat(id));
    }

    /**
    * Funtion to delete actions
    * @param {Array} users
    * @return AxiosPromise
    */
  }, {
    key: "deleteBudget",
    value: function deleteBudget(id) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a["delete"]("/api/budgets/".concat(id));
    }

    /**
    * Function to get all budgets without pagination
    */
  }, {
    key: "getList",
    value: function getList(query) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/api/budgets', {
        params: query
      });
    }
  }, {
    key: "donwloadPDF",
    value: function donwloadPDF(id, query) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/budgets/pdf', {
        id: id
      }, {
        responseType: 'arraybuffer'
      }, {
        params: query
      });
    }
  }]);
  return Budgets;
}();


/***/ }),

/***/ "./resources/js/src/views/reports/ReportBudgets.vue":
/*!**********************************************************!*\
  !*** ./resources/js/src/views/reports/ReportBudgets.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ReportBudgets_vue_vue_type_template_id_0b9d6020___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReportBudgets.vue?vue&type=template&id=0b9d6020& */ "./resources/js/src/views/reports/ReportBudgets.vue?vue&type=template&id=0b9d6020&");
/* harmony import */ var _ReportBudgets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReportBudgets.vue?vue&type=script&lang=js& */ "./resources/js/src/views/reports/ReportBudgets.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ReportBudgets_vue_vue_type_style_index_0_id_0b9d6020_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ReportBudgets.vue?vue&type=style&index=0&id=0b9d6020&lang=scss& */ "./resources/js/src/views/reports/ReportBudgets.vue?vue&type=style&index=0&id=0b9d6020&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ReportBudgets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ReportBudgets_vue_vue_type_template_id_0b9d6020___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ReportBudgets_vue_vue_type_template_id_0b9d6020___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/reports/ReportBudgets.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/reports/ReportBudgets.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/reports/ReportBudgets.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportBudgets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ReportBudgets.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/reports/ReportBudgets.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportBudgets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/reports/ReportBudgets.vue?vue&type=style&index=0&id=0b9d6020&lang=scss&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/views/reports/ReportBudgets.vue?vue&type=style&index=0&id=0b9d6020&lang=scss& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportBudgets_vue_vue_type_style_index_0_id_0b9d6020_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--12-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ReportBudgets.vue?vue&type=style&index=0&id=0b9d6020&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/reports/ReportBudgets.vue?vue&type=style&index=0&id=0b9d6020&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportBudgets_vue_vue_type_style_index_0_id_0b9d6020_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportBudgets_vue_vue_type_style_index_0_id_0b9d6020_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportBudgets_vue_vue_type_style_index_0_id_0b9d6020_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportBudgets_vue_vue_type_style_index_0_id_0b9d6020_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/reports/ReportBudgets.vue?vue&type=template&id=0b9d6020&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/reports/ReportBudgets.vue?vue&type=template&id=0b9d6020& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportBudgets_vue_vue_type_template_id_0b9d6020___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ReportBudgets.vue?vue&type=template&id=0b9d6020& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/reports/ReportBudgets.vue?vue&type=template&id=0b9d6020&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportBudgets_vue_vue_type_template_id_0b9d6020___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportBudgets_vue_vue_type_template_id_0b9d6020___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);