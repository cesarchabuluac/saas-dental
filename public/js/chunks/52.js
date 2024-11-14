(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[52],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/reports/ReportWareHouses.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/reports/ReportWareHouses.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var flatpickr_dist_l10n_es_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! flatpickr/dist/l10n/es.js */ "./node_modules/flatpickr/dist/l10n/es.js");
/* harmony import */ var flatpickr_dist_l10n_es_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_l10n_es_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! animate.css */ "./node_modules/animate.css/animate.css");
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(animate_css__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _providers_Users__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @/providers/Users */ "./resources/js/src/providers/Users.js");
/* harmony import */ var _providers_inventories_Suppliers__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @/providers/inventories/Suppliers */ "./resources/js/src/providers/inventories/Suppliers.js");
/* harmony import */ var _providers_inventories_Units__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @/providers/inventories/Units */ "./resources/js/src/providers/inventories/Units.js");
/* harmony import */ var _providers_inventories_Categories__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @/providers/inventories/Categories */ "./resources/js/src/providers/inventories/Categories.js");
/* harmony import */ var _providers_inventories_Brands__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @/providers/inventories/Brands */ "./resources/js/src/providers/inventories/Brands.js");
/* harmony import */ var _providers_inventories_SubCategories__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @/providers/inventories/SubCategories */ "./resources/js/src/providers/inventories/SubCategories.js");
/* harmony import */ var _providers_inventories_Medicines__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @/providers/inventories/Medicines */ "./resources/js/src/providers/inventories/Medicines.js");
/* harmony import */ var _providers_inventories_Warehouses__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @/providers/inventories/Warehouses */ "./resources/js/src/providers/inventories/Warehouses.js");
/* harmony import */ var _providers_v2_Reports__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @/providers/v2/Reports */ "./resources/js/src/providers/v2/Reports.js");











//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



















var UserResource = new _providers_Users__WEBPACK_IMPORTED_MODULE_20__["default"]();
var SupplierResource = new _providers_inventories_Suppliers__WEBPACK_IMPORTED_MODULE_21__["default"]();
var UnitResource = new _providers_inventories_Units__WEBPACK_IMPORTED_MODULE_22__["default"]();
var CategoryResource = new _providers_inventories_Categories__WEBPACK_IMPORTED_MODULE_23__["default"]();
var BrandResource = new _providers_inventories_Brands__WEBPACK_IMPORTED_MODULE_24__["default"]();
var SubcategoryResource = new _providers_inventories_SubCategories__WEBPACK_IMPORTED_MODULE_25__["default"]();
var MedicineResource = new _providers_inventories_Medicines__WEBPACK_IMPORTED_MODULE_26__["default"]();
var WarehouseResource = new _providers_inventories_Warehouses__WEBPACK_IMPORTED_MODULE_27__["default"]();
var ReportsResource = new _providers_v2_Reports__WEBPACK_IMPORTED_MODULE_28__["default"]();
if (_store__WEBPACK_IMPORTED_MODULE_13__["default"].state.auth.setting['language'] === "es") {
  flatpickr.localize(flatpickr_dist_l10n_es_js__WEBPACK_IMPORTED_MODULE_15__["Spanish"]);
}
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ReportWareHouses',
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_17__["default"],
    'b-modal': bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["VBModal"],
    'b-toggle': bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["VBToggle"]
  },
  components: Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__["default"])({
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BCol"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BCard"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BCardBody"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BCardText"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BButton"],
    BAlert: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BAlert"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BLink"],
    BOverlay: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BOverlay"],
    BSpinner: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BSpinner"],
    BTable: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BTable"],
    BTableLite: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BTableLite"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_16___default.a,
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_14___default.a,
    BFormCheckbox: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BFormCheckbox"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BFormGroup"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BFormInput"],
    BModal: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BModal"],
    BMediaAside: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BMediaAside"],
    BMedia: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BMedia"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BAvatar"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BImg"],
    BCardHeader: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BCardHeader"],
    BMediaBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BMediaBody"],
    BFormTextarea: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BFormTextarea"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BCardTitle"],
    VBModal: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["VBModal"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BBadge"],
    BPagination: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BPagination"],
    BTooltip: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BTooltip"],
    VBTooltip: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["VBTooltip"]
  }, "BFormCheckbox", bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BFormCheckbox"]),
  data: function data() {
    return {
      loading: false,
      units: [],
      brands: [],
      categories: [],
      subcategories: [],
      warehouses: [],
      medicines: [],
      columns: [{
        key: "warehouse_id",
        label: this.$t('warehouse')
      }, {
        key: "name",
        label: this.$t('inventories.medicines.medicine')
      }, {
        key: "unit",
        label: this.$t('inventories.medicines.unit')
      }, {
        key: "category",
        label: this.$t('inventories.medicines.category')
      }, {
        key: "brand",
        label: this.$t('inventories.medicines.brand')
      }, {
        key: "price",
        label: this.$t('price')
      }, {
        key: "current_stock",
        label: this.$t('current_stock')
      }, {
        key: "expiration_date",
        label: this.$t('expiration_date')
      }, {
        key: "deleted_at",
        label: this.$t('status')
      }],
      perPageOptions: [10, 25, 50, 100],
      perPage: 100,
      currentPage: 1,
      totalMedicines: 0,
      sortBy: "name",
      sortDesc: false,
      searchQuery: null,
      from: 0,
      to: 0,
      pagination: {},
      offset: 3,
      critery: "reference",
      search: "",
      donwload: false,
      opacity: .75,
      filter: {
        start: null,
        end: null,
        name: null,
        unit_id: null,
        brand_id: null,
        category_id: null,
        warehouse_id: null
      },
      isMobile: false,
      isFilterApplied: false
    };
  },
  computed: {
    dataMeta: function dataMeta() {
      var localItemsCount = _.size(this.medicines);
      return {
        from: this.perPage * (this.currentPage - 1) + (localItemsCount ? 1 : 0),
        to: this.perPage * (this.currentPage - 1) + localItemsCount,
        of: this.totalMedicines
      };
    }
  },
  mounted: function mounted() {
    var _this = this;
    return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().mark(function _callee() {
      return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            window.addEventListener('resize', _this.handleResize);
            _this.handleResize();
            _context.next = 4;
            return _this.getWarehouses();
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
    getWarehouses: function getWarehouses() {
      var _this2 = this;
      return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().mark(function _callee2() {
        var _yield$WarehouseResou, data, todasWarehouse;
        return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!(_this2.warehouses.length <= 0)) {
                _context2.next = 11;
                break;
              }
              _this2.loading = true;
              _context2.next = 4;
              return WarehouseResource.index({
                all: true
              });
            case 4:
              _yield$WarehouseResou = _context2.sent;
              data = _yield$WarehouseResou.data;
              _this2.loading = false;

              // Agregar el objeto deseado al inicio del array de warehouses
              todasWarehouse = {
                branch_office: null,
                id: 0,
                name: "TODAS"
              }; // Insertar el nuevo objeto al principio del array
              _this2.warehouses = [todasWarehouse].concat(Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(data.data));
              _this2.filter.warehouse_id = _this2.warehouses[0].id;
              _store__WEBPACK_IMPORTED_MODULE_13__["default"].commit('inventory/SET_WAREHOUSES', data.data);
            case 11:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    getMedicinesWithStock: function getMedicinesWithStock() {
      var _this3 = this;
      return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().mark(function _callee3() {
        var _yield$ReportsResourc, data;
        return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _this3.loading = true;
              _context3.next = 4;
              return ReportsResource.getMedicinesWithStock(Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
                page: _this3.currentPage,
                perPage: _this3.perPage,
                sortBy: _this3.sortBy,
                sortDesc: _this3.sortDesc,
                search: _this3.search
              }, _this3.filter), {}, {
                all: true
              }));
            case 4:
              _yield$ReportsResourc = _context3.sent;
              data = _yield$ReportsResourc.data;
              _this3.loading = false;
              _this3.medicines = data;
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
    handleResize: function handleResize() {
      this.isMobile = window.innerWidth < 576;
    },
    downloadPatient: function downloadPatient() {
      var _this4 = this;
      return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().mark(function _callee4() {
        var query;
        return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              query = Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _this4.filter), {}, {
                isDownload: true
              });
              try {
                _this4.loading = true;
                axios__WEBPACK_IMPORTED_MODULE_12___default.a.get("/api/inventories/medicines", {
                  responseType: 'blob',
                  params: Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, query)
                }).then(function (response) {
                  _this4.loading = false;
                  var blob = new Blob([response.data], {
                    type: 'application/vnd.ms-excel'
                  });
                  var currentTime = Math.floor(Date.now() / 1000);
                  Object(file_saver__WEBPACK_IMPORTED_MODULE_19__["saveAs"])(blob, "".concat(_this4.$t('reports.medicines.excel_name'), "-").concat(currentTime, ".xlsx"));
                })["catch"](function (e) {
                  _this4.loading = false;
                  _this4.handleResponseErrors(e);
                });
              } catch (e) {
                _this4.loading = false;
                _this4.handleResponseErrors(e);
              }
            case 2:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    },
    clearFilter: function clearFilter() {
      this.filter = {};
      this.isFilterApplied = false;
      this.medicines = [];
    },
    resolveVariantCurrentStock: function resolveVariantCurrentStock(item) {
      if (item.current_stock <= item.stock_min) {
        return {
          variant: 'danger',
          icon: 'InfoIcon'
        };
      }
      return {
        variant: 'primary',
        icon: 'CheckIcon'
      };
    }
  },
  watch: {
    currentPage: function currentPage(value) {
      if (_.isEmpty(this.filter.start) && _.isEmpty(this.filter.end) && _.isEmpty(this.filter.name)) return false;
      this.getMedicinesWithStock();
    },
    perPage: function perPage(value) {
      if (_.isEmpty(this.filter.start) && _.isEmpty(this.filter.end) && _.isEmpty(this.filter.name)) return false;
      this.getMedicinesWithStock();
    }
  }
});

/***/ }),

/***/ "./node_modules/core-js/internals/same-value.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/same-value.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `SameValue` abstract operation
// https://tc39.es/ecma262/#sec-samevalue
// eslint-disable-next-line es/no-object-is -- safe
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare -- NaN check
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.search.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.search.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ "./node_modules/core-js/internals/is-null-or-undefined.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var sameValue = __webpack_require__(/*! ../internals/same-value */ "./node_modules/core-js/internals/same-value.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "./node_modules/core-js/internals/get-method.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");

// @@search logic
fixRegExpWellKnownSymbolLogic('search', function (SEARCH, nativeSearch, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.es/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = requireObjectCoercible(this);
      var searcher = isNullOrUndefined(regexp) ? undefined : getMethod(regexp, SEARCH);
      return searcher ? call(searcher, regexp, O) : new RegExp(regexp)[SEARCH](toString(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@search
    function (string) {
      var rx = anObject(this);
      var S = toString(string);
      var res = maybeCallNative(nativeSearch, rx, S);

      if (res.done) return res.value;

      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/reports/ReportWareHouses.vue?vue&type=style&index=0&id=8b4ab404&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/reports/ReportWareHouses.vue?vue&type=style&index=0&id=8b4ab404&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../../../../../node_modules/css-loader/dist/cjs.js!flatpickr/dist/flatpickr.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/flatpickr/dist/flatpickr.css");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);
// Module
exports.push([module.i, "/**\n    Support for SASS is deprecated as of v3.18.\n\n    The files remain here if your build is dependent on them\n    but they will not receive updates in future releases. All\n    SASS variables have been translated into CSS variables, so\n    migration should be quite simple if you'd like to move over.\n\n    In v4, these files will be removed.\n */\n.v-select {\n  position: relative;\n  font-family: inherit;\n}\n.v-select,\n.v-select * {\n  box-sizing: border-box;\n}\n\n/* KeyFrames */\n@-webkit-keyframes vSelectSpinner-ltr {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@-webkit-keyframes vSelectSpinner-rtl {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(-360deg);\n}\n}\n@keyframes vSelectSpinner-ltr {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes vSelectSpinner-rtl {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(-360deg);\n}\n}\n/* Dropdown Default Transition */\n.vs__fade-enter-active,\n.vs__fade-leave-active {\n  pointer-events: none;\n  transition: opacity 0.15s cubic-bezier(1, 0.5, 0.8, 1);\n}\n.vs__fade-enter,\n.vs__fade-leave-to {\n  opacity: 0;\n}\n\n/** Component States */\n/*\n * Disabled\n *\n * When the component is disabled, all interaction\n * should be prevented. Here we modify the bg color,\n * and change the cursor displayed on the interactive\n * components.\n */\n[dir] .vs--disabled .vs__dropdown-toggle, [dir] .vs--disabled .vs__clear, [dir] .vs--disabled .vs__search, [dir] .vs--disabled .vs__selected, [dir] .vs--disabled .vs__open-indicator {\n  cursor: not-allowed;\n  background-color: #f8f8f8;\n}\n\n/*\n *  RTL - Right to Left Support\n *\n *  Because we're using a flexbox layout, the `dir=\"rtl\"`\n *  HTML attribute does most of the work for us by\n *  rearranging the child elements visually.\n */\n.v-select[dir=rtl] .vs__actions {\n  padding: 0 3px 0 6px;\n}\n.v-select[dir=rtl] .vs__clear {\n  margin-left: 6px;\n  margin-right: 0;\n}\n.v-select[dir=rtl] .vs__deselect {\n  margin-left: 0;\n  margin-right: 2px;\n}\n.v-select[dir=rtl] .vs__dropdown-menu {\n  text-align: right;\n}\n\n/**\n    Dropdown Toggle\n\n    The dropdown toggle is the primary wrapper of the component. It\n    has two direct descendants: .vs__selected-options, and .vs__actions.\n\n    .vs__selected-options holds the .vs__selected's as well as the\n    main search input.\n\n    .vs__actions holds the clear button and dropdown toggle.\n */\n.vs__dropdown-toggle {\n  appearance: none;\n  display: flex;\n  white-space: normal;\n}\n[dir] .vs__dropdown-toggle {\n  padding: 0 0 4px 0;\n  background: none;\n  border: 1px solid #d8d6de;\n  border-radius: 0.357rem;\n}\n.vs__selected-options {\n  display: flex;\n  flex-basis: 100%;\n  flex-grow: 1;\n  flex-wrap: wrap;\n  position: relative;\n}\n[dir] .vs__selected-options {\n  padding: 0 2px;\n}\n.vs__actions {\n  display: flex;\n  align-items: center;\n}\n[dir=ltr] .vs__actions {\n  padding: 4px 6px 0 3px;\n}\n[dir=rtl] .vs__actions {\n  padding: 4px 3px 0 6px;\n}\n\n/* Dropdown Toggle States */\n[dir] .vs--searchable .vs__dropdown-toggle {\n  cursor: text;\n}\n[dir] .vs--unsearchable .vs__dropdown-toggle {\n  cursor: pointer;\n}\n[dir] .vs--open .vs__dropdown-toggle {\n  border-bottom-color: transparent;\n}\n[dir=ltr] .vs--open .vs__dropdown-toggle {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n[dir=rtl] .vs--open .vs__dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.vs__open-indicator {\n  fill: rgba(60, 60, 60, 0.5);\n  transition: transform 150ms cubic-bezier(1, -0.115, 0.975, 0.855);\n}\n[dir] .vs__open-indicator {\n  transform: scale(1);\n  transition-timing-function: cubic-bezier(1, -0.115, 0.975, 0.855);\n}\n[dir=ltr] .vs--open .vs__open-indicator {\n  transform: rotate(180deg) scale(1);\n}\n[dir=rtl] .vs--open .vs__open-indicator {\n  transform: rotate(-180deg) scale(1);\n}\n.vs--loading .vs__open-indicator {\n  opacity: 0;\n}\n\n/* Clear Button */\n.vs__clear {\n  fill: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__clear {\n  padding: 0;\n  border: 0;\n  background-color: transparent;\n  cursor: pointer;\n}\n[dir=ltr] .vs__clear {\n  margin-right: 8px;\n}\n[dir=rtl] .vs__clear {\n  margin-left: 8px;\n}\n\n/* Dropdown Menu */\n.vs__dropdown-menu {\n  display: block;\n  box-sizing: border-box;\n  position: absolute;\n  top: calc(100% - 1px);\n  z-index: 1000;\n  width: 100%;\n  max-height: 350px;\n  min-width: 160px;\n  overflow-y: auto;\n  list-style: none;\n}\n[dir] .vs__dropdown-menu {\n  padding: 5px 0;\n  margin: 0;\n  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.1);\n  border: 1px solid #d8d6de;\n  border-top-style: none;\n  border-radius: 0 0 0.357rem 0.357rem;\n  background: #fff;\n}\n[dir=ltr] .vs__dropdown-menu {\n  left: 0;\n  text-align: left;\n}\n[dir=rtl] .vs__dropdown-menu {\n  right: 0;\n  text-align: right;\n}\n[dir] .vs__no-options {\n  text-align: center;\n}\n\n/* List Items */\n.vs__dropdown-option {\n  line-height: 1.42857143;\n  /* Normalize line height */\n  display: block;\n  color: #333;\n  /* Overrides most CSS frameworks */\n  white-space: nowrap;\n}\n[dir] .vs__dropdown-option {\n  padding: 3px 20px;\n  clear: both;\n  cursor: pointer;\n}\n.vs__dropdown-option--highlight {\n  color: #7367f0 !important;\n}\n[dir] .vs__dropdown-option--highlight {\n  background: rgba(115, 103, 240, 0.12);\n}\n.vs__dropdown-option--deselect {\n  color: #fff;\n}\n[dir] .vs__dropdown-option--deselect {\n  background: #fb5858;\n}\n.vs__dropdown-option--disabled {\n  color: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__dropdown-option--disabled {\n  background: inherit;\n  cursor: inherit;\n}\n\n/* Selected Tags */\n.vs__selected {\n  display: flex;\n  align-items: center;\n  color: #333;\n  line-height: 1.8;\n  z-index: 0;\n}\n[dir] .vs__selected {\n  background-color: #7367f0;\n  border: 0 solid rgba(60, 60, 60, 0.26);\n  border-radius: 0.357rem;\n  margin: 4px 2px 0px 2px;\n  padding: 0 0.25em;\n}\n.vs__deselect {\n  display: inline-flex;\n  appearance: none;\n  fill: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__deselect {\n  padding: 0;\n  border: 0;\n  cursor: pointer;\n  background: none;\n  text-shadow: 0 1px 0 #fff;\n}\n[dir=ltr] .vs__deselect {\n  margin-left: 4px;\n}\n[dir=rtl] .vs__deselect {\n  margin-right: 4px;\n}\n\n/* States */\n[dir] .vs--single .vs__selected {\n  background-color: transparent;\n  border-color: transparent;\n}\n.vs--single.vs--open .vs__selected, .vs--single.vs--loading .vs__selected {\n  position: absolute;\n  opacity: 0.4;\n}\n.vs--single.vs--searching .vs__selected {\n  display: none;\n}\n\n/* Search Input */\n/**\n * Super weird bug... If this declaration is grouped\n * below, the cancel button will still appear in chrome.\n * If it's up here on it's own, it'll hide it.\n */\n.vs__search::-webkit-search-cancel-button {\n  display: none;\n}\n.vs__search::-webkit-search-decoration,\n.vs__search::-webkit-search-results-button,\n.vs__search::-webkit-search-results-decoration,\n.vs__search::-ms-clear {\n  display: none;\n}\n.vs__search,\n.vs__search:focus {\n  appearance: none;\n  line-height: 1.8;\n  font-size: 1em;\n  outline: none;\n  width: 0;\n  max-width: 100%;\n  flex-grow: 1;\n  z-index: 1;\n}\n[dir] .vs__search, [dir] .vs__search:focus {\n  border: 1px solid transparent;\n  margin: 4px 0 0 0;\n  padding: 0 7px;\n  background: none;\n  box-shadow: none;\n}\n[dir=ltr] .vs__search, [dir=ltr] .vs__search:focus {\n  border-left: none;\n}\n[dir=rtl] .vs__search, [dir=rtl] .vs__search:focus {\n  border-right: none;\n}\n.vs__search::placeholder {\n  color: #6e6b7b;\n}\n\n/**\n    States\n */\n.vs--unsearchable .vs__search {\n  opacity: 1;\n}\n[dir] .vs--unsearchable:not(.vs--disabled) .vs__search {\n  cursor: pointer;\n}\n.vs--single.vs--searching:not(.vs--open):not(.vs--loading) .vs__search {\n  opacity: 0.2;\n}\n\n/* Loading Spinner */\n.vs__spinner {\n  align-self: center;\n  opacity: 0;\n  font-size: 5px;\n  text-indent: -9999em;\n  overflow: hidden;\n  transition: opacity 0.1s;\n}\n[dir] .vs__spinner {\n  border-top: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-bottom: 0.9em solid rgba(100, 100, 100, 0.1);\n  transform: translateZ(0);\n}\n[dir=ltr] .vs__spinner {\n  border-right: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-left: 0.9em solid rgba(60, 60, 60, 0.45);\n  animation:  vSelectSpinner-ltr 1.1s infinite linear;\n}\n[dir=rtl] .vs__spinner {\n  border-left: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-right: 0.9em solid rgba(60, 60, 60, 0.45);\n  animation:  vSelectSpinner-rtl 1.1s infinite linear;\n}\n.vs__spinner,\n.vs__spinner:after {\n  width: 5em;\n  height: 5em;\n}\n[dir] .vs__spinner, [dir] .vs__spinner:after {\n  border-radius: 50%;\n}\n\n/* Loading Spinner States */\n.vs--loading .vs__spinner {\n  opacity: 1;\n}\n.vs__open-indicator {\n  fill: none;\n}\n[dir] .vs__open-indicator {\n  margin-top: 0.15rem;\n}\n.vs__dropdown-toggle {\n  transition: all 0.25s ease-in-out;\n}\n[dir] .vs__dropdown-toggle {\n  padding: 0.59px 0 4px 0;\n}\n[dir=ltr] .vs--single .vs__dropdown-toggle {\n  padding-left: 6px;\n}\n[dir=rtl] .vs--single .vs__dropdown-toggle {\n  padding-right: 6px;\n}\n.vs__dropdown-option--disabled {\n  opacity: 0.5;\n}\n[dir] .vs__dropdown-option--disabled.vs__dropdown-option--selected {\n  background: #7367f0 !important;\n}\n.vs__dropdown-option {\n  color: #6e6b7b;\n}\n[dir] .vs__dropdown-option, [dir] .vs__no-options {\n  padding: 7px 20px;\n}\n.vs__dropdown-option--selected {\n  background-color: #7367f0;\n  color: #fff;\n  position: relative;\n}\n.vs__dropdown-option--selected::after {\n  content: \"\";\n  height: 1.1rem;\n  width: 1.1rem;\n  display: inline-block;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  right: 20px;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-check'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 1.1rem;\n}\n[dir=rtl] .vs__dropdown-option--selected::after {\n  left: 20px;\n  right: unset;\n}\n.vs__dropdown-option--selected.vs__dropdown-option--highlight {\n  color: #fff !important;\n  background-color: #7367f0 !important;\n}\n.vs__clear svg {\n  color: #6e6b7b;\n}\n.vs__selected {\n  color: #fff;\n}\n.v-select.vs--single .vs__selected {\n  color: #6e6b7b;\n  transition: transform 0.2s ease;\n}\n[dir] .v-select.vs--single .vs__selected {\n  margin-top: 5px;\n}\n[dir=ltr] .v-select.vs--single .vs__selected input {\n  padding-left: 0;\n}\n[dir=rtl] .v-select.vs--single .vs__selected input {\n  padding-right: 0;\n}\n[dir=ltr] .vs--single.vs--open .vs__selected {\n  transform: translateX(5px);\n}\n[dir=rtl] .vs--single.vs--open .vs__selected {\n  transform: translateX(-5px);\n}\n.vs__selected .vs__deselect {\n  color: inherit;\n}\n.v-select:not(.vs--single) .vs__selected {\n  font-size: 0.9rem;\n}\n[dir] .v-select:not(.vs--single) .vs__selected {\n  border-radius: 3px;\n  padding: 0 0.6em;\n}\n[dir=ltr] .v-select:not(.vs--single) .vs__selected {\n  margin: 5px 2px 2px 5px;\n}\n[dir=rtl] .v-select:not(.vs--single) .vs__selected {\n  margin: 5px 5px 2px 2px;\n}\n.v-select:not(.vs--single) .vs__deselect svg {\n  vertical-align: text-top;\n}\n[dir] .v-select:not(.vs--single) .vs__deselect svg {\n  transform: scale(0.8);\n}\n.vs__dropdown-menu {\n  top: calc(100% + 1rem);\n}\n[dir] .vs__dropdown-menu {\n  border: none;\n  border-radius: 6px;\n  padding: 0;\n}\n[dir] .vs--open .vs__dropdown-toggle {\n  border-color: #7367f0;\n  border-bottom-color: #7367f0;\n  box-shadow: 0 3px 10px 0 rgba(34, 41, 47, 0.1);\n}\n[dir=ltr] .vs--open .vs__dropdown-toggle {\n  border-bottom-left-radius: 0.357rem;\n  border-bottom-right-radius: 0.357rem;\n}\n[dir=rtl] .vs--open .vs__dropdown-toggle {\n  border-bottom-right-radius: 0.357rem;\n  border-bottom-left-radius: 0.357rem;\n}\n.select-size-lg .vs__selected {\n  font-size: 1rem !important;\n}\n[dir] .select-size-lg.vs--single.vs--open .vs__selected {\n  margin-top: 6px;\n}\n.select-size-lg .vs__dropdown-toggle,\n.select-size-lg .vs__selected {\n  font-size: 1.25rem;\n}\n[dir] .select-size-lg .vs__dropdown-toggle {\n  padding: 5px;\n}\n[dir] .select-size-lg .vs__dropdown-toggle input {\n  margin-top: 0;\n}\n.select-size-lg .vs__deselect svg {\n  vertical-align: middle !important;\n}\n[dir] .select-size-lg .vs__deselect svg {\n  transform: scale(1) !important;\n}\n[dir] .select-size-sm .vs__dropdown-toggle {\n  padding-bottom: 0;\n  padding: 1px;\n}\n[dir] .select-size-sm.vs--single .vs__dropdown-toggle {\n  padding: 2px;\n}\n.select-size-sm .vs__dropdown-toggle,\n.select-size-sm .vs__selected {\n  font-size: 0.9rem;\n}\n[dir] .select-size-sm .vs__actions {\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n.select-size-sm .vs__deselect svg {\n  vertical-align: middle !important;\n}\n[dir] .select-size-sm .vs__search {\n  margin-top: 0;\n}\n.select-size-sm.v-select .vs__selected {\n  font-size: 0.75rem;\n}\n[dir] .select-size-sm.v-select .vs__selected {\n  padding: 0 0.3rem;\n}\n[dir] .select-size-sm.v-select:not(.vs--single) .vs__selected {\n  margin: 4px 5px;\n}\n[dir] .select-size-sm.v-select.vs--single .vs__selected {\n  margin-top: 1px;\n}\n[dir] .select-size-sm.vs--single.vs--open .vs__selected {\n  margin-top: 4px;\n}\n.dark-layout .vs__dropdown-toggle {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .vs__dropdown-toggle {\n  background: #283046;\n  border-color: #404656;\n}\n.dark-layout .vs__selected-options input {\n  color: #b4b7bd;\n}\n.dark-layout .vs__selected-options input::placeholder {\n  color: #676d7d;\n}\n.dark-layout .vs__actions svg {\n  fill: #404656;\n}\n[dir] .dark-layout .vs__dropdown-menu {\n  background: #283046;\n}\n.dark-layout .vs__dropdown-menu li {\n  color: #b4b7bd;\n}\n.dark-layout .v-select:not(.vs--single) .vs__selected {\n  color: #7367f0;\n}\n[dir] .dark-layout .v-select:not(.vs--single) .vs__selected {\n  background-color: rgba(115, 103, 240, 0.12);\n}\n.dark-layout .v-select.vs--single .vs__selected {\n  color: #b4b7bd !important;\n}\n.dark-layout .vs--disabled .vs__dropdown-toggle,\n.dark-layout .vs--disabled .vs__clear,\n.dark-layout .vs--disabled .vs__search,\n.dark-layout .vs--disabled .vs__selected,\n.dark-layout .vs--disabled .vs__open-indicator {\n  opacity: 0.5;\n}\n[dir] .dark-layout .vs--disabled .vs__dropdown-toggle, [dir] .dark-layout .vs--disabled .vs__clear, [dir] .dark-layout .vs--disabled .vs__search, [dir] .dark-layout .vs--disabled .vs__selected, [dir] .dark-layout .vs--disabled .vs__open-indicator {\n  background-color: #283046;\n}\n.flatpickr-calendar .flatpickr-day {\n  color: #6e6b7b;\n}\n[dir] .flatpickr-calendar .flatpickr-day.today {\n  border-color: #7367f0;\n}\n.flatpickr-calendar .flatpickr-day.today:hover {\n  color: #6e6b7b;\n}\n[dir] .flatpickr-calendar .flatpickr-day.today:hover {\n  background: transparent;\n}\n.flatpickr-calendar .flatpickr-day.selected, .flatpickr-calendar .flatpickr-day.selected:hover {\n  color: #fff;\n}\n[dir] .flatpickr-calendar .flatpickr-day.selected, [dir] .flatpickr-calendar .flatpickr-day.selected:hover {\n  background: #7367f0;\n  border-color: #7367f0;\n}\n[dir] .flatpickr-calendar .flatpickr-day.inRange, [dir] .flatpickr-calendar .flatpickr-day.inRange:hover {\n  background: #f3f2fe;\n  border-color: #f3f2fe;\n}\n[dir=ltr] .flatpickr-calendar .flatpickr-day.inRange, [dir=ltr] .flatpickr-calendar .flatpickr-day.inRange:hover {\n  box-shadow: -5px 0 0 #f3f2fe, 5px 0 0 #f3f2fe;\n}\n[dir=rtl] .flatpickr-calendar .flatpickr-day.inRange, [dir=rtl] .flatpickr-calendar .flatpickr-day.inRange:hover {\n  box-shadow: 5px 0 0 #f3f2fe, -5px 0 0 #f3f2fe;\n}\n.flatpickr-calendar .flatpickr-day.startRange, .flatpickr-calendar .flatpickr-day.endRange, .flatpickr-calendar .flatpickr-day.startRange:hover, .flatpickr-calendar .flatpickr-day.endRange:hover {\n  color: #fff;\n}\n[dir] .flatpickr-calendar .flatpickr-day.startRange, [dir] .flatpickr-calendar .flatpickr-day.endRange, [dir] .flatpickr-calendar .flatpickr-day.startRange:hover, [dir] .flatpickr-calendar .flatpickr-day.endRange:hover {\n  background: #7367f0;\n  border-color: #7367f0;\n}\n[dir=ltr] .flatpickr-calendar .flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n+1)), [dir=ltr] .flatpickr-calendar .flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n+1)), [dir=ltr] .flatpickr-calendar .flatpickr-day.endRange.startRange + .endRange:not(:nth-child(7n+1)) {\n  box-shadow: -10px 0 0 #7367f0;\n}\n[dir=rtl] .flatpickr-calendar .flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n+1)), [dir=rtl] .flatpickr-calendar .flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n+1)), [dir=rtl] .flatpickr-calendar .flatpickr-day.endRange.startRange + .endRange:not(:nth-child(7n+1)) {\n  box-shadow: 10px 0 0 #7367f0;\n}\n.flatpickr-calendar .flatpickr-day.flatpickr-disabled, .flatpickr-calendar .flatpickr-day.prevMonthDay, .flatpickr-calendar .flatpickr-day.nextMonthDay {\n  color: #dae1e7;\n}\n[dir] .flatpickr-calendar .flatpickr-day:hover {\n  background: #f6f6f6;\n}\n.flatpickr-calendar:after, .flatpickr-calendar:before {\n  display: none;\n}\n.flatpickr-calendar .flatpickr-months .flatpickr-prev-month,\n.flatpickr-calendar .flatpickr-months .flatpickr-next-month {\n  top: -5px;\n}\n.flatpickr-calendar .flatpickr-months .flatpickr-prev-month:hover i, .flatpickr-calendar .flatpickr-months .flatpickr-prev-month:hover svg,\n.flatpickr-calendar .flatpickr-months .flatpickr-next-month:hover i,\n.flatpickr-calendar .flatpickr-months .flatpickr-next-month:hover svg {\n  fill: #7367f0;\n}\n.flatpickr-calendar .flatpickr-current-month span.cur-month {\n  font-weight: 300;\n}\n.flatpickr-calendar.open {\n  z-index: 1051;\n}\n.flatpickr-calendar.hasTime.open .flatpickr-time {\n  height: auto;\n}\n[dir] .flatpickr-time input:hover, [dir] .flatpickr-time .flatpickr-am-pm:hover, [dir] .flatpickr-time input:focus, [dir] .flatpickr-time .flatpickr-am-pm:focus {\n  background: #fff;\n}\n[dir] .dark-layout .flatpickr-calendar {\n  background: #161d31;\n  border-color: #161d31;\n  box-shadow: none;\n}\n.dark-layout .flatpickr-calendar .flatpickr-months i,\n.dark-layout .flatpickr-calendar .flatpickr-months svg {\n  fill: #b4b7bd;\n}\n.dark-layout .flatpickr-calendar .flatpickr-month {\n  color: #b4b7bd;\n}\n[dir=ltr] .dark-layout .flatpickr-calendar .flatpickr-weekwrapper .flatpickr-weeks {\n  box-shadow: 1px 0 0 #3b4253;\n}\n[dir=rtl] .dark-layout .flatpickr-calendar .flatpickr-weekwrapper .flatpickr-weeks {\n  box-shadow: -1px 0 0 #3b4253;\n}\n.dark-layout .flatpickr-calendar .flatpickr-weekday {\n  color: #b4b7bd;\n}\n.dark-layout .flatpickr-calendar .flatpickr-day, .dark-layout .flatpickr-calendar .flatpickr-day.today:hover {\n  color: #b4b7bd;\n}\n.dark-layout .flatpickr-calendar .flatpickr-day.selected {\n  color: #fff;\n}\n.dark-layout .flatpickr-calendar .flatpickr-day.prevMonthDay, .dark-layout .flatpickr-calendar .flatpickr-day.nextMonthDay, .dark-layout .flatpickr-calendar .flatpickr-day.flatpickr-disabled {\n  color: #4e5154 !important;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-day.inRange, [dir] .dark-layout .flatpickr-calendar .flatpickr-day.inRange:hover {\n  background: #283046;\n  border-color: #283046;\n}\n[dir=ltr] .dark-layout .flatpickr-calendar .flatpickr-day.inRange, [dir=ltr] .dark-layout .flatpickr-calendar .flatpickr-day.inRange:hover {\n  box-shadow: -5px 0 0 #283046, 5px 0 0 #283046;\n}\n[dir=rtl] .dark-layout .flatpickr-calendar .flatpickr-day.inRange, [dir=rtl] .dark-layout .flatpickr-calendar .flatpickr-day.inRange:hover {\n  box-shadow: 5px 0 0 #283046, -5px 0 0 #283046;\n}\n.dark-layout .flatpickr-calendar .flatpickr-day:hover:not(.selected):not(.today):not(.startRange):not(.endRange) {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-day:hover:not(.selected):not(.today):not(.startRange):not(.endRange) {\n  border-color: #283046;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-days .flatpickr-day:hover:not(.selected):not(.today):not(.startRange):not(.endRange), [dir] .dark-layout .flatpickr-calendar .flatpickr-days .flatpickr-day:focus:not(.selected):not(.today):not(.startRange):not(.endRange) {\n  background: #283046;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-time {\n  border-color: #161d31 !important;\n}\n.dark-layout .flatpickr-calendar .flatpickr-time .numInput,\n.dark-layout .flatpickr-calendar .flatpickr-time .flatpickr-am-pm {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-time .numInput:hover, [dir] .dark-layout .flatpickr-calendar .flatpickr-time .flatpickr-am-pm:hover {\n  background: #161d31;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-time .arrowUp:after {\n  border-bottom-color: #b4b7bd;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-time .arrowDown:after {\n  border-top-color: #b4b7bd;\n}\n[dir] .dark-layout .flatpickr-time input:hover, [dir] .dark-layout .flatpickr-time .flatpickr-am-pm:hover, [dir] .dark-layout .flatpickr-time input:focus, [dir] .dark-layout .flatpickr-time .flatpickr-am-pm:focus {\n  background: #161d31;\n}\n.flatpickr-input[readonly],\n.flatpickr-input ~ .form-control[readonly],\n.flatpickr-human-friendly[readonly] {\n  opacity: 1 !important;\n}\n[dir] .flatpickr-input[readonly], [dir] .flatpickr-input ~ .form-control[readonly], [dir] .flatpickr-human-friendly[readonly] {\n  background-color: inherit;\n}\n[dir] .flatpickr-weekdays {\n  margin-top: 8px;\n}\n.flatpickr-current-month .flatpickr-monthDropdown-months {\n  -webkit-appearance: none;\n}\n.flatpickr-current-month .flatpickr-monthDropdown-months,\n.flatpickr-current-month .numInputWrapper {\n  font-size: 1.1rem;\n  transition: all 0.15s ease-out;\n}\n[dir] .flatpickr-current-month .flatpickr-monthDropdown-months, [dir] .flatpickr-current-month .numInputWrapper {\n  border-radius: 4px;\n  padding: 2px;\n}\n.flatpickr-current-month .flatpickr-monthDropdown-months span,\n.flatpickr-current-month .numInputWrapper span {\n  display: none;\n}\nhtml[dir=rtl] .flatpickr-calendar .flatpickr-prev-month svg,\nhtml[dir=rtl] .flatpickr-calendar .flatpickr-next-month svg {\n  transform: rotate(180deg);\n}\n[dir] .dark-layout .card-company-table ::v-deep td .b-avatar.badge-light-company {\n  background: #161d31 !important;\n}", ""]);
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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/reports/ReportWareHouses.vue?vue&type=style&index=0&id=8b4ab404&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/reports/ReportWareHouses.vue?vue&type=style&index=0&id=8b4ab404&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--12-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ReportWareHouses.vue?vue&type=style&index=0&id=8b4ab404&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/reports/ReportWareHouses.vue?vue&type=style&index=0&id=8b4ab404&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/reports/ReportWareHouses.vue?vue&type=template&id=8b4ab404&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/reports/ReportWareHouses.vue?vue&type=template&id=8b4ab404& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
                        { attrs: { label: _vm.$t("warehouse") } },
                        [
                          _c("v-select", {
                            staticClass: "select-size-sm",
                            attrs: {
                              id: "warehouse_id",
                              options: _vm.warehouses,
                              reduce: function (option) {
                                return option.id
                              },
                              label: "name",
                              placeholder: _vm.$t("warehouse_placeholder"),
                              clearable: false,
                            },
                            model: {
                              value: _vm.filter.warehouse_id,
                              callback: function ($$v) {
                                _vm.$set(_vm.filter, "warehouse_id", $$v)
                              },
                              expression: "filter.warehouse_id",
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("b-col", { attrs: { cols: "12", md: "8" } }, [
                    _c(
                      "div",
                      { staticClass: "demo-inline-spacing_ mt-2" },
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
                            attrs: { size: "sm", variant: "outline-primary" },
                            on: { click: _vm.getMedicinesWithStock },
                          },
                          [
                            _c("feather-icon", {
                              attrs: { icon: "SearchIcon" },
                            }),
                            _vm._v(
                              "\n                            " +
                                _vm._s(_vm.$t("button_filter")) +
                                "\n                        "
                            ),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _vm.medicines.length
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
                                class: { "btn-block": _vm.isMobile },
                                attrs: {
                                  size: "sm",
                                  variant: "outline-success",
                                },
                                on: { click: _vm.downloadPatient },
                              },
                              [
                                _c("feather-icon", {
                                  attrs: { icon: "DownloadIcon" },
                                }),
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(_vm.$t("button_download")) +
                                    "\n                        "
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
                                    expression: "'rgba(255, 255, 255, 0.15)'",
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
                                  "\n                            " +
                                    _vm._s(_vm.$t("button_clear_filter")) +
                                    "\n                        "
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
                            attrs: { size: "sm", variant: "outline-secondary" },
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
                              "\n                            " +
                                _vm._s(_vm.$t("back")) +
                                "\n                        "
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
          _c("b-card", { staticClass: "mb-0", attrs: { "no-body": "" } }, [
            _c("div", { staticClass: "table-responsive" }, [
              _c(
                "div",
                {
                  staticClass:
                    "position-relative b-table-responsive mb-0 text-small small b-table-sticky-header table-responsive",
                },
                [
                  _c(
                    "table",
                    {
                      ref: "routings",
                      staticClass:
                        "table b-table text-small small table-small table-sm b-table-no-border-collapse b-table-selectable b-table-select-single",
                    },
                    [
                      _c("thead", [
                        _c(
                          "tr",
                          _vm._l(_vm.columns, function (column) {
                            return _c(
                              "th",
                              {
                                key: column.key,
                                class: {
                                  sorting_asc: _vm.sortBy === column.key,
                                  sorting_desc: _vm.sortBy !== column.key,
                                },
                                on: {
                                  click: function ($event) {
                                    _vm.sortBy = column.key
                                  },
                                },
                              },
                              [
                                _vm._v(
                                  "\n                                    " +
                                    _vm._s(column.label) +
                                    "\n                                "
                                ),
                              ]
                            )
                          }),
                          0
                        ),
                      ]),
                      _vm._v(" "),
                      _c(
                        "tbody",
                        _vm._l(_vm.medicines, function (item, index) {
                          return _c("tr", { key: index }, [
                            _c("td", [_vm._v(_vm._s(item.warehouse.name))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(item.medicine.name))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(item.medicine.unit.name))]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(_vm._s(item.medicine.category.name)),
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(_vm._s(item.medicine.brand.name)),
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(item.medicine.price))]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-center" }, [
                              _vm._v(_vm._s(item.medicine.current_stock)),
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(_vm._s(item.medicine.expiration_date)),
                            ]),
                            _vm._v(" "),
                            _c(
                              "td",
                              [
                                _c(
                                  "b-badge",
                                  {
                                    staticClass: "text-capitalize",
                                    attrs: {
                                      pill: "",
                                      variant:
                                        "light-" +
                                        _vm.resolveStatusVariant(
                                          item.medicine.deleted_at
                                        ),
                                    },
                                  },
                                  [
                                    _vm._v(
                                      "\n                                        " +
                                        _vm._s(
                                          _vm.resolveStatusTranslate(
                                            item.medicine.deleted_at
                                          )
                                        ) +
                                        "\n                                    "
                                    ),
                                  ]
                                ),
                              ],
                              1
                            ),
                          ])
                        }),
                        0
                      ),
                    ]
                  ),
                ]
              ),
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

/***/ "./resources/js/src/providers/inventories/Brands.js":
/*!**********************************************************!*\
  !*** ./resources/js/src/providers/inventories/Brands.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Brands; });
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);



var Brands = /*#__PURE__*/function () {
  function Brands() {
    Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Brands);
  }
  Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Brands, [{
    key: "index",
    value: function index(query) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/inventories/brands", {
        params: query
      });
    }
  }, {
    key: "store",
    value: function store(payload) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/api/inventories/brands", payload);
    }
  }, {
    key: "destroy",
    value: function destroy(id) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a["delete"]("/api/inventories/brands/".concat(id));
    }
  }, {
    key: "update",
    value: function update(id, payload) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.put("/api/inventories/brands/".concat(id), payload);
    }
  }, {
    key: "show",
    value: function show(id) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/inventories/brands/".concat(id));
    }
  }]);
  return Brands;
}();


/***/ }),

/***/ "./resources/js/src/providers/inventories/Categories.js":
/*!**************************************************************!*\
  !*** ./resources/js/src/providers/inventories/Categories.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Categories; });
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);



var Categories = /*#__PURE__*/function () {
  function Categories() {
    Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Categories);
  }
  Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Categories, [{
    key: "index",
    value: function index(query) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/inventories/categories", {
        params: query
      });
    }
  }, {
    key: "store",
    value: function store(payload) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/api/inventories/categories", payload);
    }
  }, {
    key: "destroy",
    value: function destroy(id) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a["delete"]("/api/inventories/categories/".concat(id));
    }
  }, {
    key: "update",
    value: function update(id, payload) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.put("/api/inventories/categories/".concat(id), payload);
    }
  }, {
    key: "show",
    value: function show(id) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/inventories/categories/".concat(id));
    }
  }]);
  return Categories;
}();


/***/ }),

/***/ "./resources/js/src/providers/inventories/Medicines.js":
/*!*************************************************************!*\
  !*** ./resources/js/src/providers/inventories/Medicines.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Medicines; });
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);



var Medicines = /*#__PURE__*/function () {
  function Medicines() {
    Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Medicines);
  }
  Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Medicines, [{
    key: "index",
    value: function index(query) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/inventories/medicines", {
        params: query
      });
    }
  }, {
    key: "store",
    value: function store(payload) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/api/inventories/medicines", payload);
    }
  }, {
    key: "destroy",
    value: function destroy(id) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a["delete"]("/api/inventories/medicines/".concat(id));
    }
  }, {
    key: "update",
    value: function update(id, payload) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.put("/api/inventories/medicines/".concat(id), payload);
    }
  }, {
    key: "show",
    value: function show(id) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/inventories/medicines/".concat(id));
    }
  }]);
  return Medicines;
}();


/***/ }),

/***/ "./resources/js/src/providers/inventories/SubCategories.js":
/*!*****************************************************************!*\
  !*** ./resources/js/src/providers/inventories/SubCategories.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SubCategories; });
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);



var SubCategories = /*#__PURE__*/function () {
  function SubCategories() {
    Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SubCategories);
  }
  Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(SubCategories, [{
    key: "index",
    value: function index(query) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/inventories/subcategories", {
        params: query
      });
    }
  }, {
    key: "store",
    value: function store(payload) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/api/inventories/subcategories", payload);
    }
  }, {
    key: "destroy",
    value: function destroy(id) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a["delete"]("/api/inventories/subcategories/".concat(id));
    }
  }, {
    key: "update",
    value: function update(id, payload) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.put("/api/inventories/subcategories/".concat(id), payload);
    }
  }, {
    key: "show",
    value: function show(id) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/inventories/subcategories/".concat(id));
    }
  }]);
  return SubCategories;
}();


/***/ }),

/***/ "./resources/js/src/providers/inventories/Suppliers.js":
/*!*************************************************************!*\
  !*** ./resources/js/src/providers/inventories/Suppliers.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Suppliers; });
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);



var Suppliers = /*#__PURE__*/function () {
  function Suppliers() {
    Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Suppliers);
  }
  Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Suppliers, [{
    key: "index",
    value: function index(query) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/inventories/suppliers", {
        params: query
      });
    }
  }, {
    key: "store",
    value: function store(payload) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/api/inventories/suppliers", payload);
    }
  }, {
    key: "destroy",
    value: function destroy(id) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a["delete"]("/api/inventories/suppliers/".concat(id));
    }
  }, {
    key: "update",
    value: function update(id, payload) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.put("/api/inventories/suppliers/".concat(id), payload);
    }
  }, {
    key: "show",
    value: function show(id) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/inventories/suppliers/".concat(id));
    }
  }]);
  return Suppliers;
}();


/***/ }),

/***/ "./resources/js/src/providers/inventories/Units.js":
/*!*********************************************************!*\
  !*** ./resources/js/src/providers/inventories/Units.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Units; });
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);



var Units = /*#__PURE__*/function () {
  function Units() {
    Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Units);
  }
  Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Units, [{
    key: "index",
    value: function index(query) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/inventories/units", {
        params: query
      });
    }
  }, {
    key: "store",
    value: function store(payload) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/api/inventories/units", payload);
    }
  }, {
    key: "destroy",
    value: function destroy(id) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a["delete"]("/api/inventories/units/".concat(id));
    }
  }, {
    key: "update",
    value: function update(id, payload) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.put("/api/inventories/units/".concat(id), payload);
    }
  }, {
    key: "show",
    value: function show(id) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/inventories/units/".concat(id));
    }
  }]);
  return Units;
}();


/***/ }),

/***/ "./resources/js/src/providers/inventories/Warehouses.js":
/*!**************************************************************!*\
  !*** ./resources/js/src/providers/inventories/Warehouses.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Warehouses; });
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);



var Warehouses = /*#__PURE__*/function () {
  function Warehouses() {
    Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Warehouses);
  }
  Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Warehouses, [{
    key: "index",
    value: function index(query) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/inventories/warehouses", {
        params: query
      });
    }
  }, {
    key: "store",
    value: function store(payload) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/api/inventories/warehouses", payload);
    }
  }, {
    key: "destroy",
    value: function destroy(id) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a["delete"]("/api/inventories/warehouses/".concat(id));
    }
  }, {
    key: "update",
    value: function update(id, payload) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.put("/api/inventories/warehouses/".concat(id), payload);
    }
  }, {
    key: "show",
    value: function show(id) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/inventories/warehouses/".concat(id));
    }
  }]);
  return Warehouses;
}();


/***/ }),

/***/ "./resources/js/src/providers/v2/Reports.js":
/*!**************************************************!*\
  !*** ./resources/js/src/providers/v2/Reports.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Reports; });
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);


/* eslint-disable class-methods-use-this */

var Reports = /*#__PURE__*/function () {
  function Reports() {
    Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Reports);
  }
  Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Reports, [{
    key: "getMedicinesWithStock",
    value:
    /**
     *  Function to get all medicines with stock
     */
    function getMedicinesWithStock(query) {
      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/api/v2/reports/medicines-with-stock', {
        params: query
      });
    }
  }]);
  return Reports;
}();


/***/ }),

/***/ "./resources/js/src/views/reports/ReportWareHouses.vue":
/*!*************************************************************!*\
  !*** ./resources/js/src/views/reports/ReportWareHouses.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ReportWareHouses_vue_vue_type_template_id_8b4ab404___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReportWareHouses.vue?vue&type=template&id=8b4ab404& */ "./resources/js/src/views/reports/ReportWareHouses.vue?vue&type=template&id=8b4ab404&");
/* harmony import */ var _ReportWareHouses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReportWareHouses.vue?vue&type=script&lang=js& */ "./resources/js/src/views/reports/ReportWareHouses.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ReportWareHouses_vue_vue_type_style_index_0_id_8b4ab404_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ReportWareHouses.vue?vue&type=style&index=0&id=8b4ab404&lang=scss& */ "./resources/js/src/views/reports/ReportWareHouses.vue?vue&type=style&index=0&id=8b4ab404&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ReportWareHouses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ReportWareHouses_vue_vue_type_template_id_8b4ab404___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ReportWareHouses_vue_vue_type_template_id_8b4ab404___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/reports/ReportWareHouses.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/reports/ReportWareHouses.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/reports/ReportWareHouses.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportWareHouses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ReportWareHouses.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/reports/ReportWareHouses.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportWareHouses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/reports/ReportWareHouses.vue?vue&type=style&index=0&id=8b4ab404&lang=scss&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/src/views/reports/ReportWareHouses.vue?vue&type=style&index=0&id=8b4ab404&lang=scss& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportWareHouses_vue_vue_type_style_index_0_id_8b4ab404_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--12-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ReportWareHouses.vue?vue&type=style&index=0&id=8b4ab404&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/reports/ReportWareHouses.vue?vue&type=style&index=0&id=8b4ab404&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportWareHouses_vue_vue_type_style_index_0_id_8b4ab404_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportWareHouses_vue_vue_type_style_index_0_id_8b4ab404_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportWareHouses_vue_vue_type_style_index_0_id_8b4ab404_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportWareHouses_vue_vue_type_style_index_0_id_8b4ab404_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/reports/ReportWareHouses.vue?vue&type=template&id=8b4ab404&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/views/reports/ReportWareHouses.vue?vue&type=template&id=8b4ab404& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportWareHouses_vue_vue_type_template_id_8b4ab404___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ReportWareHouses.vue?vue&type=template&id=8b4ab404& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/reports/ReportWareHouses.vue?vue&type=template&id=8b4ab404&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportWareHouses_vue_vue_type_template_id_8b4ab404___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportWareHouses_vue_vue_type_template_id_8b4ab404___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);