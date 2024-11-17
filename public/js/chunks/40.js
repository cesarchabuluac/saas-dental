(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[40],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/Calendar.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/calendar/Calendar.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _fullcalendar_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fullcalendar/vue */ "./node_modules/@fullcalendar/vue/dist/main.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var _calendarStoreModule__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./calendarStoreModule */ "./resources/js/src/views/apps/calendar/calendarStoreModule.js");
/* harmony import */ var _calendar_sidebar_CalendarSidebar_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./calendar-sidebar/CalendarSidebar.vue */ "./resources/js/src/views/apps/calendar/calendar-sidebar/CalendarSidebar.vue");
/* harmony import */ var _calendar_event_handler_CalendarEventHandler_vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./calendar-event-handler/CalendarEventHandler.vue */ "./resources/js/src/views/apps/calendar/calendar-event-handler/CalendarEventHandler.vue");
/* harmony import */ var _calendar_detail_AppointmentDetail_vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./calendar-detail/AppointmentDetail.vue */ "./resources/js/src/views/apps/calendar/calendar-detail/AppointmentDetail.vue");
/* harmony import */ var _CalendarAppointmentAdd_vue__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./CalendarAppointmentAdd.vue */ "./resources/js/src/views/apps/calendar/CalendarAppointmentAdd.vue");
/* harmony import */ var _CalendarAppointmentEdit_vue__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./CalendarAppointmentEdit.vue */ "./resources/js/src/views/apps/calendar/CalendarAppointmentEdit.vue");
/* harmony import */ var _core_components_app_timeline_AppTimeline_vue__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @core/components/app-timeline/AppTimeline.vue */ "./resources/js/src/@core/components/app-timeline/AppTimeline.vue");
/* harmony import */ var _core_components_app_timeline_AppTimelineItem_vue__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @core/components/app-timeline/AppTimelineItem.vue */ "./resources/js/src/@core/components/app-timeline/AppTimelineItem.vue");
/* harmony import */ var _useCalendar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./useCalendar */ "./resources/js/src/views/apps/calendar/useCalendar.js");
/* harmony import */ var _providers_BranchOffices__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @/providers/BranchOffices */ "./resources/js/src/providers/BranchOffices.js");
/* harmony import */ var _providers_Users__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @/providers/Users */ "./resources/js/src/providers/Users.js");
/* harmony import */ var _providers_Patients__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @/providers/Patients */ "./resources/js/src/providers/Patients.js");





//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

















var BranchOfficeResource = new _providers_BranchOffices__WEBPACK_IMPORTED_MODULE_20__["default"]();

var UserResource = new _providers_Users__WEBPACK_IMPORTED_MODULE_21__["default"]();

var PatientResource = new _providers_Patients__WEBPACK_IMPORTED_MODULE_22__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  components: {
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BRow"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BButton"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BFormInput"],
    BFormCheckboxGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BFormCheckboxGroup"],
    BFormCheckbox: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BFormCheckbox"],
    BInputGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BInputGroup"],
    BInputGroupPrepend: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BInputGroupPrepend"],
    BDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BDropdown"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BDropdownItem"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BImg"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BCol"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BFormGroup"],
    BOverlay: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BOverlay"],
    BSpinner: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BSpinner"],
    BModal: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BModal"],
    VBModal: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["VBModal"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BCard"],
    BMedia: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BMedia"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BAvatar"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BBadge"],
    FullCalendar: _fullcalendar_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    // make the <FullCalendar> tag available
    CalendarSidebar: _calendar_sidebar_CalendarSidebar_vue__WEBPACK_IMPORTED_MODULE_12__["default"],
    CalendarEventHandler: _calendar_event_handler_CalendarEventHandler_vue__WEBPACK_IMPORTED_MODULE_13__["default"],
    CalendarAppointmentDetail: _calendar_detail_AppointmentDetail_vue__WEBPACK_IMPORTED_MODULE_14__["default"],
    CalendarAppointmentAdd: _CalendarAppointmentAdd_vue__WEBPACK_IMPORTED_MODULE_15__["default"],
    CalendarAppointmentEdit: _CalendarAppointmentEdit_vue__WEBPACK_IMPORTED_MODULE_16__["default"],
    AppTimeline: _core_components_app_timeline_AppTimeline_vue__WEBPACK_IMPORTED_MODULE_17__["default"],
    AppTimelineItem: _core_components_app_timeline_AppTimelineItem_vue__WEBPACK_IMPORTED_MODULE_18__["default"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_6___default.a
  },
  setup: function setup() {
    var searchQuery = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_10__["ref"])("");
    var nextAppointments = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_10__["ref"])([]);
    var activeModal = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_10__["ref"])(false);
    var userRoles = _store__WEBPACK_IMPORTED_MODULE_9__["default"].getters['auth/getUser'].roles.map(function (role) {
      return role.id;
    });
    var loading = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_10__["ref"])(false);
    var CALENDAR_APP_STORE_MODULE_NAME = 'calendar';

    // Register module
    if (!_store__WEBPACK_IMPORTED_MODULE_9__["default"].hasModule(CALENDAR_APP_STORE_MODULE_NAME)) _store__WEBPACK_IMPORTED_MODULE_9__["default"].registerModule(CALENDAR_APP_STORE_MODULE_NAME, _calendarStoreModule__WEBPACK_IMPORTED_MODULE_11__["default"]);

    // UnRegister on leave
    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_10__["onUnmounted"])(function () {
      if (_store__WEBPACK_IMPORTED_MODULE_9__["default"].hasModule(CALENDAR_APP_STORE_MODULE_NAME)) _store__WEBPACK_IMPORTED_MODULE_9__["default"].unregisterModule(CALENDAR_APP_STORE_MODULE_NAME);
    });
    var getBranch = /*#__PURE__*/function () {
      var _ref = Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee() {
        var _yield$BranchOfficeRe, data;
        return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(_store__WEBPACK_IMPORTED_MODULE_9__["default"].state.calendar.useBranchs.length > 0)) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return", false);
            case 2:
              _context.prev = 2;
              loading.value = true;
              _context.next = 6;
              return BranchOfficeResource.index({
                isAll: true
              });
            case 6:
              _yield$BranchOfficeRe = _context.sent;
              data = _yield$BranchOfficeRe.data;
              if (data.success) {
                _store__WEBPACK_IMPORTED_MODULE_9__["default"].commit('calendar/SET_USE_BRANCHS', data.data);
              } else {
                helper.danger(data.message);
              }
              _context.next = 14;
              break;
            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](2);
              helper.handleResponseErrors(_context.t0);
            case 14:
              _context.prev = 14;
              loading.value = false;
              return _context.finish(14);
            case 17:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[2, 11, 14, 17]]);
      }));
      return function getBranch() {
        return _ref.apply(this, arguments);
      };
    }();
    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_10__["onMounted"])( /*#__PURE__*/Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee2() {
      return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return getBranch();
          case 2:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    })));
    var _useCalendar = Object(_useCalendar__WEBPACK_IMPORTED_MODULE_19__["default"])(),
      isLoading = _useCalendar.isLoading,
      refCalendar = _useCalendar.refCalendar,
      isCalendarOverlaySidebarActive = _useCalendar.isCalendarOverlaySidebarActive,
      event = _useCalendar.event,
      clearEventData = _useCalendar.clearEventData,
      addEvent = _useCalendar.addEvent,
      updateEvent = _useCalendar.updateEvent,
      removeEvent = _useCalendar.removeEvent,
      fetchEvents = _useCalendar.fetchEvents,
      refetchEvents = _useCalendar.refetchEvents,
      calendarOptions = _useCalendar.calendarOptions,
      selectedProfessional = _useCalendar.selectedProfessional,
      isEventHandlerSidebarActive = _useCalendar.isEventHandlerSidebarActive,
      isNewEventHandlerModalActive = _useCalendar.isNewEventHandlerModalActive,
      dateOnNewEvent = _useCalendar.dateOnNewEvent,
      timeAvailables = _useCalendar.timeAvailables;
    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_10__["watch"])(activeModal, function (newValue) {
      searchQuery.value = "";
    });
    var searchNextAppointment = /*#__PURE__*/function () {
      var _ref3 = Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee3() {
        var query, _yield$PatientResourc, data;
        return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (!(searchQuery.value == '' || searchQuery.value == null)) {
                _context3.next = 2;
                break;
              }
              return _context3.abrupt("return", false);
            case 2:
              query = {
                search: searchQuery.value,
                sortBy: 'name',
                sortDesc: 'asc',
                perPage: 10
              }; // activeModal.value = true
              nextAppointments.value = [];
              isLoading.value = true;
              _context3.next = 7;
              return PatientResource.nextAppointment(query);
            case 7:
              _yield$PatientResourc = _context3.sent;
              data = _yield$PatientResourc.data;
              isLoading.value = false;
              if (data.success) {
                activeModal.value = true;
                nextAppointments.value = data.data;
              }
            case 11:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      return function searchNextAppointment() {
        return _ref3.apply(this, arguments);
      };
    }();
    var professionals = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_10__["computed"])(function () {
      return _store__WEBPACK_IMPORTED_MODULE_9__["default"].state.calendar.useProfessionals;
    });
    var isAdmin = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_10__["computed"])(function () {
      return userRoles.includes(1);
    });
    var isDirector = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_10__["computed"])(function () {
      return userRoles.includes(2);
    });
    var isProfessional = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_10__["computed"])(function () {
      return userRoles.includes(4);
    });
    fetchEvents();
    var addAppointment = function addAppointment(event) {
      addEvent(event);
    };
    var editAppointment = function editAppointment(event) {
      updateEvent(event);
    };
    return {
      isLoading: isLoading,
      refCalendar: refCalendar,
      isCalendarOverlaySidebarActive: isCalendarOverlaySidebarActive,
      event: event,
      isAdmin: isAdmin,
      isDirector: isDirector,
      isProfessional: isProfessional,
      clearEventData: clearEventData,
      addEvent: addEvent,
      updateEvent: updateEvent,
      removeEvent: removeEvent,
      refetchEvents: refetchEvents,
      searchNextAppointment: searchNextAppointment,
      addAppointment: addAppointment,
      editAppointment: editAppointment,
      calendarOptions: calendarOptions,
      professionals: professionals,
      selectedProfessional: selectedProfessional,
      nextAppointments: nextAppointments,
      searchQuery: searchQuery,
      activeModal: activeModal,
      // ----- UI ----- //
      isEventHandlerSidebarActive: isEventHandlerSidebarActive,
      isNewEventHandlerModalActive: isNewEventHandlerModalActive,
      dateOnNewEvent: dateOnNewEvent,
      timeAvailables: timeAvailables
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/CalendarAppointmentAdd.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/calendar/CalendarAppointmentAdd.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! animate.css */ "./node_modules/animate.css/animate.css");
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(animate_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var _validations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @validations */ "./resources/js/src/@core/utils/validations/validations.js");
/* harmony import */ var _core_comp_functions_forms_form_validation__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @core/comp-functions/forms/form-validation */ "./resources/js/src/@core/comp-functions/forms/form-validation.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var flatpickr_dist_l10n_es_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! flatpickr/dist/l10n/es.js */ "./node_modules/flatpickr/dist/l10n/es.js");
/* harmony import */ var flatpickr_dist_l10n_es_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_l10n_es_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _libs_helpers__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @/libs/helpers */ "./resources/js/src/libs/helpers.js");
/* harmony import */ var _core_libs_i18n__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @core/libs/i18n */ "./resources/js/src/@core/libs/i18n/index.js");
/* harmony import */ var _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @core/components/toastification/ToastificationContent.vue */ "./resources/js/src/@core/components/toastification/ToastificationContent.vue");
/* harmony import */ var _core_components_patients_SidebarAddNewPatient_vue__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @core/components/patients/SidebarAddNewPatient.vue */ "./resources/js/src/@core/components/patients/SidebarAddNewPatient.vue");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! vue-cleave-component */ "./node_modules/vue-cleave-component/dist/vue-cleave.min.js");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(vue_cleave_component__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @/router */ "./resources/js/src/router/index.js");
/* harmony import */ var _providers_Appointments__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @/providers/Appointments */ "./resources/js/src/providers/Appointments.js");
/* harmony import */ var _providers_BranchOffices__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @/providers/BranchOffices */ "./resources/js/src/providers/BranchOffices.js");
/* harmony import */ var _providers_Patients__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @/providers/Patients */ "./resources/js/src/providers/Patients.js");
/* harmony import */ var _providers_Users__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @/providers/Users */ "./resources/js/src/providers/Users.js");












//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//























var AppointmentResource = new _providers_Appointments__WEBPACK_IMPORTED_MODULE_33__["default"]();

var BranchOfficeResource = new _providers_BranchOffices__WEBPACK_IMPORTED_MODULE_34__["default"]();

var PatientsResource = new _providers_Patients__WEBPACK_IMPORTED_MODULE_35__["default"]();

var UserResource = new _providers_Users__WEBPACK_IMPORTED_MODULE_36__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'CalendarAppointmentAdd',
  components: {
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_27__["BForm"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_27__["BFormGroup"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_27__["BCard"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_27__["BCardText"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_27__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_27__["BCol"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_27__["BFormInput"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_27__["BButton"],
    BTable: bootstrap_vue__WEBPACK_IMPORTED_MODULE_27__["BTable"],
    BMedia: bootstrap_vue__WEBPACK_IMPORTED_MODULE_27__["BMedia"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_27__["BAvatar"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_27__["BLink"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_27__["BBadge"],
    BDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_27__["BDropdown"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_27__["BDropdownItem"],
    BPagination: bootstrap_vue__WEBPACK_IMPORTED_MODULE_27__["BPagination"],
    BTooltip: bootstrap_vue__WEBPACK_IMPORTED_MODULE_27__["BTooltip"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_27__["BImg"],
    VBTooltip: bootstrap_vue__WEBPACK_IMPORTED_MODULE_27__["VBTooltip"],
    VBToggle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_27__["VBToggle"],
    BInputGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_27__["BInputGroup"],
    BInputGroupPrepend: bootstrap_vue__WEBPACK_IMPORTED_MODULE_27__["BInputGroupPrepend"],
    BModal: bootstrap_vue__WEBPACK_IMPORTED_MODULE_27__["BModal"],
    VBModal: bootstrap_vue__WEBPACK_IMPORTED_MODULE_27__["VBModal"],
    BOverlay: bootstrap_vue__WEBPACK_IMPORTED_MODULE_27__["BOverlay"],
    BSpinner: bootstrap_vue__WEBPACK_IMPORTED_MODULE_27__["BSpinner"],
    BListGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_27__["BListGroup"],
    BListGroupItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_27__["BListGroupItem"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_27__["BCardBody"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_27__["BCardTitle"],
    BMediaAside: bootstrap_vue__WEBPACK_IMPORTED_MODULE_27__["BMediaAside"],
    BAvatarGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_27__["BAvatarGroup"],
    BMediaBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_27__["BMediaBody"],
    BAlert: bootstrap_vue__WEBPACK_IMPORTED_MODULE_27__["BAlert"],
    BFormTextarea: bootstrap_vue__WEBPACK_IMPORTED_MODULE_27__["BFormTextarea"],
    BFormRadioGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_27__["BFormRadioGroup"],
    BFormRadio: bootstrap_vue__WEBPACK_IMPORTED_MODULE_27__["BFormRadio"],
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_21___default.a,
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_20___default.a,
    Cleave: vue_cleave_component__WEBPACK_IMPORTED_MODULE_28___default.a,
    // Form Validation
    ValidationProvider: vee_validate__WEBPACK_IMPORTED_MODULE_17__["ValidationProvider"],
    ValidationObserver: vee_validate__WEBPACK_IMPORTED_MODULE_17__["ValidationObserver"],
    ToastificationContent: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_25__["default"],
    SidebarAddNewPatient: _core_components_patients_SidebarAddNewPatient_vue__WEBPACK_IMPORTED_MODULE_26__["default"]
  },
  directives: {
    'b-toggle': bootstrap_vue__WEBPACK_IMPORTED_MODULE_27__["VBToggle"],
    'b-tooltip': bootstrap_vue__WEBPACK_IMPORTED_MODULE_27__["VBTooltip"],
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_29__["default"]
  },
  model: {
    prop: "isNewEventHandlerModalActive",
    event: "update:is-new-event-handler-modal-active"
  },
  props: {
    isNewEventHandlerModalActive: {
      type: Boolean,
      required: true
    },
    event: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      required: _validations__WEBPACK_IMPORTED_MODULE_18__["required"],
      alphaNum: _validations__WEBPACK_IMPORTED_MODULE_18__["alphaNum"],
      email: _validations__WEBPACK_IMPORTED_MODULE_18__["email"],
      password: _validations__WEBPACK_IMPORTED_MODULE_18__["password"],
      clevePhone: {
        phone: true,
        phoneRegionCode: "US"
      }
    };
  },
  computed: {
    slotMinTime: function slotMinTime() {
      return _store__WEBPACK_IMPORTED_MODULE_31__["default"].state.auth.setting['schedule_start_time'] || "09:00:00";
    },
    slotMaxTime: function slotMaxTime() {
      return _store__WEBPACK_IMPORTED_MODULE_31__["default"].state.auth.setting['schedule_end_time'] || "22:00:00";
    },
    slotInterval: function slotInterval() {
      return _store__WEBPACK_IMPORTED_MODULE_31__["default"].state.auth.setting['scheduled_appointment_interval'] || 15;
    }
  },
  created: function created() {
    if (_store__WEBPACK_IMPORTED_MODULE_31__["default"].state.auth.setting['language'] === "es") {
      flatpickr.localize(flatpickr_dist_l10n_es_js__WEBPACK_IMPORTED_MODULE_22__["Spanish"]);
      Object(vee_validate__WEBPACK_IMPORTED_MODULE_17__["localize"])("es");
    }
  },
  methods: {
    onChange: function onChange(selectedDates, dateStr, instance) {
      var _this = this;
      return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().mark(function _callee() {
        var inputDateFormat, officeStartTime, officeEndTime, isValidDate, isWithinOfficeHours, now, selectedDateTime, isDateAvailable;
        return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              inputDateFormat = 'DD/MM/YYYY HH:mm';
              officeStartTime = _store__WEBPACK_IMPORTED_MODULE_31__["default"].state.auth.setting['schedule_start_time'] || '09:00:00'; // Schedule start time
              officeEndTime = _store__WEBPACK_IMPORTED_MODULE_31__["default"].state.auth.setting['schedule_end_time'] || '22:00:00'; // Schedule end time   
              console.log('onChange', dateStr);
              console.log('selectedDates', selectedDates);
              console.log('instance', instance);
              console.log('inputDateFormat', inputDateFormat);
              console.log('officeStartTime', officeStartTime);
              console.log('officeEndTime', officeEndTime);
              isValidDate = _this.isValidDate(dateStr, inputDateFormat);
              if (isValidDate) {
                _context.next = 13;
                break;
              }
              _this.danger(_this.$t('invalid_date_format'));
              return _context.abrupt("return", false);
            case 13:
              isWithinOfficeHours = _this.isWithinOfficeHours(dateStr, officeStartTime, officeEndTime);
              if (isWithinOfficeHours) {
                _context.next = 17;
                break;
              }
              _this.danger(_this.$t('closed_office'));
              return _context.abrupt("return", false);
            case 17:
              //
              now = moment__WEBPACK_IMPORTED_MODULE_13___default()();
              selectedDateTime = moment__WEBPACK_IMPORTED_MODULE_13___default()(dateStr, inputDateFormat, true);
              if (!selectedDateTime.isSameOrBefore(now)) {
                _context.next = 22;
                break;
              }
              _this.danger(_this.$t('date_not_available'));
              return _context.abrupt("return", false);
            case 22:
              _context.next = 24;
              return _this.checkAvailability(dateStr);
            case 24:
              isDateAvailable = _context.sent;
              if (isDateAvailable) {
                _context.next = 28;
                break;
              }
              _this.danger(_this.$t('date_not_available'));
              return _context.abrupt("return", false);
            case 28:
              // If you get here, all is well and the date is available
              _this.isAvailable = true;
            case 29:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    // Aplicar debounce a la función onSearch
    onSearchPatient: lodash__WEBPACK_IMPORTED_MODULE_12___default.a.debounce(function (search, loading) {
      if (search.length >= 3) {
        loading(true);
        this.searchPatient(loading, search, this);
      }
    }, 300),
    // 300ms es el tiempo de espera para ejecutar la función después del último evento 'onSearch'
    searchPatient: function searchPatient(loading, search, vm) {
      var _this2 = this;
      return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().mark(function _callee2() {
        var query, _yield$PatientsResour, data;
        return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _this2.loading = true;
              query = {
                q: search,
                isAll: true,
                perPage: 10,
                page: 1
              };
              _context2.next = 4;
              return PatientsResource.search(query);
            case 4:
              _yield$PatientsResour = _context2.sent;
              data = _yield$PatientsResour.data;
              vm.patients = data.data.map(function (item) {
                return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__["default"])({}, item), {}, {
                  full_name: "".concat(item.name, " ").concat(item.last_name, " ").concat(item.mother_last_name)
                });
              });
              loading(false);
            case 8:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    }
  },
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    // Use toast
    // const toast = useToast();
    var _useI18nUtils = Object(_core_libs_i18n__WEBPACK_IMPORTED_MODULE_24__["useUtils"])(),
      t = _useI18nUtils.t;
    var _toRefs = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_30__["toRefs"])(props),
      event = _toRefs.event;
    var clearFormData = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_30__["ref"])(null);
    var loading = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_30__["ref"])(false);
    var branchs = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_30__["ref"])([]);
    var patients = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_30__["ref"])([]);
    var hideSidebar = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_30__["ref"])(false);
    var isValidCellPhone = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_30__["ref"])(false);
    var isAddNewPatientSidebarActive = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_30__["ref"])(false);
    var professionals = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_30__["ref"])([]);
    var isAvailable = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_30__["ref"])(false);
    var calendarOptions = [{
      color: "warning",
      label: "pending"
    }, {
      color: "success",
      label: "confirmed"
    }, {
      color: "danger",
      label: "canceled"
    }];
    var blankAppointmentData = {
      branch_office_id: null,
      user_id: _store__WEBPACK_IMPORTED_MODULE_31__["default"].state.calendar.selectedProfessional.id,
      //Professional
      date: null,
      state: 'pending',
      patient: {
        id: null,
        name: null,
        last_name: null,
        mother_last_name: null,
        document_type: null,
        rut: null,
        email: null,
        cellphone: null,
        isValidCellPhone: false,
        full_name: null
      },
      timeAvailable: null
    };
    var appointmentData = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_30__["ref"])(JSON.parse(JSON.stringify(blankAppointmentData)));
    var resetappointmentData = function resetappointmentData() {
      appointmentData.value = JSON.parse(JSON.stringify(blankAppointmentData));
    };
    var selectedProfessional = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_30__["computed"])(function () {
      return _store__WEBPACK_IMPORTED_MODULE_31__["default"].state.calendar.selectedProfessional;
    });
    var selectPatient = function selectPatient(value) {
      console.log('selectPatient', value);
    };
    var checkAvailability = /*#__PURE__*/function () {
      var _ref2 = Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().mark(function _callee3(dateStr) {
        var query, _yield$AppointmentRes, data;
        return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              loading.value = true;
              query = {
                date: dateStr,
                user_id: appointmentData.value.user_id
              };
              _context3.prev = 2;
              _context3.next = 5;
              return AppointmentResource.available(query);
            case 5:
              _yield$AppointmentRes = _context3.sent;
              data = _yield$AppointmentRes.data;
              if (!data.success) {
                _context3.next = 11;
                break;
              }
              return _context3.abrupt("return", true);
            case 11:
              _libs_helpers__WEBPACK_IMPORTED_MODULE_23__["danger"](data.message);
              return _context3.abrupt("return", false);
            case 13:
              _context3.next = 19;
              break;
            case 15:
              _context3.prev = 15;
              _context3.t0 = _context3["catch"](2);
              _libs_helpers__WEBPACK_IMPORTED_MODULE_23__["handleResponseErrors"](_context3.t0);
              return _context3.abrupt("return", false);
            case 19:
              _context3.prev = 19;
              loading.value = false;
              return _context3.finish(19);
            case 22:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[2, 15, 19, 22]]);
      }));
      return function checkAvailability(_x) {
        return _ref2.apply(this, arguments);
      };
    }();
    var getProfessionals = /*#__PURE__*/function () {
      var _ref3 = Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().mark(function _callee4() {
        var _yield$UserResource$i, data;
        return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              loading.value = true;
              _context4.next = 4;
              return UserResource.index({
                criteria: "professionals",
                isCalendar: true,
                ignoreSchedules: false
              });
            case 4:
              _yield$UserResource$i = _context4.sent;
              data = _yield$UserResource$i.data;
              if (data.success) {
                professionals.value = data.data;
              } else {
                _libs_helpers__WEBPACK_IMPORTED_MODULE_23__["danger"](data.message);
              }
              _context4.next = 12;
              break;
            case 9:
              _context4.prev = 9;
              _context4.t0 = _context4["catch"](0);
              _libs_helpers__WEBPACK_IMPORTED_MODULE_23__["handleResponseErrors"](_context4.t0);
            case 12:
              _context4.prev = 12;
              loading.value = false;
              return _context4.finish(12);
            case 15:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[0, 9, 12, 15]]);
      }));
      return function getProfessionals() {
        return _ref3.apply(this, arguments);
      };
    }();
    var getBranch = /*#__PURE__*/function () {
      var _ref4 = Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().mark(function _callee5() {
        var _yield$BranchOfficeRe, data;
        return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              loading.value = true;
              _context5.next = 4;
              return BranchOfficeResource.index({
                isAll: true
              });
            case 4:
              _yield$BranchOfficeRe = _context5.sent;
              data = _yield$BranchOfficeRe.data;
              if (data.success) {
                branchs.value = data.data;

                // Set default branch office
                Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_30__["nextTick"])(function () {
                  if (branchs.value.length > 0) {
                    appointmentData.value.branch_office_id = branchs.value[0].id;
                  }
                });
                // store.commit('auth/SET_BRANCHES', data)
              } else {
                _libs_helpers__WEBPACK_IMPORTED_MODULE_23__["danger"](data.message);
              }
              _context5.next = 12;
              break;
            case 9:
              _context5.prev = 9;
              _context5.t0 = _context5["catch"](0);
              _libs_helpers__WEBPACK_IMPORTED_MODULE_23__["handleResponseErrors"](_context5.t0);
            case 12:
              _context5.prev = 12;
              loading.value = false;
              return _context5.finish(12);
            case 15:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[0, 9, 12, 15]]);
      }));
      return function getBranch() {
        return _ref4.apply(this, arguments);
      };
    }();
    var _formValidation = Object(_core_comp_functions_forms_form_validation__WEBPACK_IMPORTED_MODULE_19__["default"])(resetappointmentData),
      refFormObserver = _formValidation.refFormObserver,
      getValidationState = _formValidation.getValidationState,
      resetForm = _formValidation.resetForm;
    var onSubmit = /*#__PURE__*/function () {
      var _ref5 = Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().mark(function _callee6() {
        var _appointmentData$valu, _payload, _appointmentData$valu2, patient_id, user_id, date, branch_office_id, duration, intern_observation, timeAvailable, patient, onlyDate, dateTime, payload, _yield$AppointmentRes2, data;
        return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              console.log('onSubmit', appointmentData.value);
              _context6.prev = 1;
              appointmentData.value.patient_id = (_appointmentData$valu = appointmentData.value.patient) === null || _appointmentData$valu === void 0 ? void 0 : _appointmentData$valu.id;
              _appointmentData$valu2 = appointmentData.value, patient_id = _appointmentData$valu2.patient_id, user_id = _appointmentData$valu2.user_id, date = _appointmentData$valu2.date, branch_office_id = _appointmentData$valu2.branch_office_id, duration = _appointmentData$valu2.duration, intern_observation = _appointmentData$valu2.intern_observation, timeAvailable = _appointmentData$valu2.timeAvailable, patient = _appointmentData$valu2.patient; //De date necesito extrar solo la fecha
              onlyDate = moment__WEBPACK_IMPORTED_MODULE_13___default()(date).format('DD/MM/YYYY'); //Ahora de necesito aplicar este formato: 16/11/2024 09:45 con onlyDate y timeAvailable
              dateTime = "".concat(onlyDate, " ").concat(timeAvailable);
              payload = (_payload = {
                date: dateTime,
                branch_office_id: branch_office_id,
                user_id: user_id,
                patient_id: patient_id,
                duration: duration,
                intern_observation: intern_observation,
                state: 'pending'
              }, Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_payload, "user_id", selectedProfessional.value.id), Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_payload, "patient_name", patient.name), Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_payload, "patient_phone", patient.phone), Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_payload, "patient_email", patient.email), Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_payload, "patient_rut", patient.rut), _payload);
              loading.value = true;
              _context6.next = 10;
              return AppointmentResource.save(payload);
            case 10:
              _yield$AppointmentRes2 = _context6.sent;
              data = _yield$AppointmentRes2.data;
              loading.value = false;
              if (data.success) {
                _libs_helpers__WEBPACK_IMPORTED_MODULE_23__["success"](data.message);
                // router.push({ name: "appointments" });
                emit('add-appointment', data.data);
                emit("update:is-new-event-handler-modal-active", false);
              } else {
                _libs_helpers__WEBPACK_IMPORTED_MODULE_23__["danger"](data.message);
              }
              _context6.next = 19;
              break;
            case 16:
              _context6.prev = 16;
              _context6.t0 = _context6["catch"](1);
              _libs_helpers__WEBPACK_IMPORTED_MODULE_23__["handleResponseErrors"](_context6.t0);
            case 19:
              _context6.prev = 19;
              loading.value = false;
              return _context6.finish(19);
            case 22:
            case "end":
              return _context6.stop();
          }
        }, _callee6, null, [[1, 16, 19, 22]]);
      }));
      return function onSubmit() {
        return _ref5.apply(this, arguments);
      };
    }();
    var addPatient = function addPatient(newPatient) {
      var id = newPatient.id,
        name = newPatient.name,
        last_name = newPatient.last_name,
        mother_last_name = newPatient.mother_last_name,
        rut = newPatient.rut,
        phone = newPatient.phone,
        cellphone = newPatient.cellphone,
        email = newPatient.email,
        full_name = newPatient.full_name;

      // Set patient data
      appointmentData.value.patient = {
        id: id,
        name: name,
        last_name: last_name,
        mother_last_name: mother_last_name,
        rut: rut,
        email: email,
        cellphone: cellphone,
        phone: phone,
        full_name: full_name
      };

      // Add new patient to the list
      patients.value.push(appointmentData.value.patient);
    };
    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_30__["onMounted"])( /*#__PURE__*/Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().mark(function _callee7() {
      return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
          case "end":
            return _context7.stop();
        }
      }, _callee7);
    })));
    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_30__["watch"])(function () {
      return props.event;
    }, function (value) {
      if (value) {
        branchs.value = _store__WEBPACK_IMPORTED_MODULE_31__["default"].state.calendar.useBranchs;
        professionals.value = _store__WEBPACK_IMPORTED_MODULE_31__["default"].state.calendar.professionals;
        Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_30__["nextTick"])(function () {
          if (branchs.value.length > 0) {
            appointmentData.value.branch_office_id = branchs.value[0].id;
          }
        });
        appointmentData.value.date = value.start;
        var timezone = _store__WEBPACK_IMPORTED_MODULE_31__["default"].state.auth.setting['timezone'] || window._setting.timezone;
        var time = moment__WEBPACK_IMPORTED_MODULE_13___default.a.tz(value.start, 'YYYY-MM-DDTHH:mm:ss', timezone).format('HH:mm');
        appointmentData.value.timeAvailable = time;
      }
    });
    return {
      calendarOptions: calendarOptions,
      blankAppointmentData: blankAppointmentData,
      clearFormData: clearFormData,
      loading: loading,
      branchs: branchs,
      appointmentData: appointmentData,
      patients: patients,
      hideSidebar: hideSidebar,
      isValidCellPhone: isValidCellPhone,
      professionals: professionals,
      isAvailable: isAvailable,
      // Methods
      selectedProfessional: selectedProfessional,
      checkAvailability: checkAvailability,
      selectPatient: selectPatient,
      onSubmit: onSubmit,
      addPatient: addPatient,
      refFormObserver: refFormObserver,
      getValidationState: getValidationState,
      resetForm: resetForm,
      isAddNewPatientSidebarActive: isAddNewPatientSidebarActive
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/CalendarAppointmentEdit.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/calendar/CalendarAppointmentEdit.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! animate.css */ "./node_modules/animate.css/animate.css");
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(animate_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var _validations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @validations */ "./resources/js/src/@core/utils/validations/validations.js");
/* harmony import */ var _core_comp_functions_forms_form_validation__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @core/comp-functions/forms/form-validation */ "./resources/js/src/@core/comp-functions/forms/form-validation.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var flatpickr_dist_l10n_es_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! flatpickr/dist/l10n/es.js */ "./node_modules/flatpickr/dist/l10n/es.js");
/* harmony import */ var flatpickr_dist_l10n_es_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_l10n_es_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _libs_helpers__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @/libs/helpers */ "./resources/js/src/libs/helpers.js");
/* harmony import */ var _core_libs_i18n__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @core/libs/i18n */ "./resources/js/src/@core/libs/i18n/index.js");
/* harmony import */ var _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @core/components/toastification/ToastificationContent.vue */ "./resources/js/src/@core/components/toastification/ToastificationContent.vue");
/* harmony import */ var _core_components_patients_SidebarAddNewPatient_vue__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @core/components/patients/SidebarAddNewPatient.vue */ "./resources/js/src/@core/components/patients/SidebarAddNewPatient.vue");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! vue-cleave-component */ "./node_modules/vue-cleave-component/dist/vue-cleave.min.js");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(vue_cleave_component__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @/router */ "./resources/js/src/router/index.js");
/* harmony import */ var _providers_Appointments__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @/providers/Appointments */ "./resources/js/src/providers/Appointments.js");
/* harmony import */ var _providers_BranchOffices__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @/providers/BranchOffices */ "./resources/js/src/providers/BranchOffices.js");
/* harmony import */ var _providers_Patients__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @/providers/Patients */ "./resources/js/src/providers/Patients.js");
/* harmony import */ var _providers_Users__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @/providers/Users */ "./resources/js/src/providers/Users.js");











//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//























var AppointmentResource = new _providers_Appointments__WEBPACK_IMPORTED_MODULE_32__["default"]();

var BranchOfficeResource = new _providers_BranchOffices__WEBPACK_IMPORTED_MODULE_33__["default"]();

var PatientsResource = new _providers_Patients__WEBPACK_IMPORTED_MODULE_34__["default"]();

var UserResource = new _providers_Users__WEBPACK_IMPORTED_MODULE_35__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'CalendarAppointmentEdit',
  components: {
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_26__["BForm"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_26__["BFormGroup"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_26__["BCard"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_26__["BCardText"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_26__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_26__["BCol"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_26__["BFormInput"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_26__["BButton"],
    BTable: bootstrap_vue__WEBPACK_IMPORTED_MODULE_26__["BTable"],
    BMedia: bootstrap_vue__WEBPACK_IMPORTED_MODULE_26__["BMedia"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_26__["BAvatar"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_26__["BLink"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_26__["BBadge"],
    BDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_26__["BDropdown"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_26__["BDropdownItem"],
    BPagination: bootstrap_vue__WEBPACK_IMPORTED_MODULE_26__["BPagination"],
    BTooltip: bootstrap_vue__WEBPACK_IMPORTED_MODULE_26__["BTooltip"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_26__["BImg"],
    VBTooltip: bootstrap_vue__WEBPACK_IMPORTED_MODULE_26__["VBTooltip"],
    VBToggle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_26__["VBToggle"],
    BInputGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_26__["BInputGroup"],
    BInputGroupPrepend: bootstrap_vue__WEBPACK_IMPORTED_MODULE_26__["BInputGroupPrepend"],
    BModal: bootstrap_vue__WEBPACK_IMPORTED_MODULE_26__["BModal"],
    VBModal: bootstrap_vue__WEBPACK_IMPORTED_MODULE_26__["VBModal"],
    BOverlay: bootstrap_vue__WEBPACK_IMPORTED_MODULE_26__["BOverlay"],
    BSpinner: bootstrap_vue__WEBPACK_IMPORTED_MODULE_26__["BSpinner"],
    BListGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_26__["BListGroup"],
    BListGroupItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_26__["BListGroupItem"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_26__["BCardBody"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_26__["BCardTitle"],
    BMediaAside: bootstrap_vue__WEBPACK_IMPORTED_MODULE_26__["BMediaAside"],
    BAvatarGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_26__["BAvatarGroup"],
    BMediaBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_26__["BMediaBody"],
    BAlert: bootstrap_vue__WEBPACK_IMPORTED_MODULE_26__["BAlert"],
    BFormTextarea: bootstrap_vue__WEBPACK_IMPORTED_MODULE_26__["BFormTextarea"],
    BFormRadioGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_26__["BFormRadioGroup"],
    BFormRadio: bootstrap_vue__WEBPACK_IMPORTED_MODULE_26__["BFormRadio"],
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_20___default.a,
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_19___default.a,
    Cleave: vue_cleave_component__WEBPACK_IMPORTED_MODULE_27___default.a,
    // Form Validation
    ValidationProvider: vee_validate__WEBPACK_IMPORTED_MODULE_16__["ValidationProvider"],
    ValidationObserver: vee_validate__WEBPACK_IMPORTED_MODULE_16__["ValidationObserver"],
    ToastificationContent: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_24__["default"],
    SidebarAddNewPatient: _core_components_patients_SidebarAddNewPatient_vue__WEBPACK_IMPORTED_MODULE_25__["default"]
  },
  directives: {
    'b-toggle': bootstrap_vue__WEBPACK_IMPORTED_MODULE_26__["VBToggle"],
    'b-tooltip': bootstrap_vue__WEBPACK_IMPORTED_MODULE_26__["VBTooltip"],
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_28__["default"]
  },
  model: {
    prop: "isEditEventHandlerModalActive",
    event: "update:is-edit-event-handler-modal-active"
  },
  props: {
    isEditEventHandlerModalActive: {
      type: Boolean,
      required: true
    },
    event: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      required: _validations__WEBPACK_IMPORTED_MODULE_17__["required"],
      alphaNum: _validations__WEBPACK_IMPORTED_MODULE_17__["alphaNum"],
      email: _validations__WEBPACK_IMPORTED_MODULE_17__["email"],
      password: _validations__WEBPACK_IMPORTED_MODULE_17__["password"],
      clevePhone: {
        phone: true,
        phoneRegionCode: "US"
      }
    };
  },
  computed: {
    slotMinTime: function slotMinTime() {
      return _store__WEBPACK_IMPORTED_MODULE_30__["default"].state.auth.setting['schedule_start_time'] || "09:00:00";
    },
    slotMaxTime: function slotMaxTime() {
      return _store__WEBPACK_IMPORTED_MODULE_30__["default"].state.auth.setting['schedule_end_time'] || "22:00:00";
    },
    slotInterval: function slotInterval() {
      return _store__WEBPACK_IMPORTED_MODULE_30__["default"].state.auth.setting['scheduled_appointment_interval'] || 15;
    },
    minDate: function minDate() {
      var originalDateObject = new Date(this.event.date); // Asegúrate de que la fecha sea válida
      return originalDateObject;
    }
  },
  created: function created() {
    if (_store__WEBPACK_IMPORTED_MODULE_30__["default"].state.auth.setting['language'] === "es") {
      flatpickr.localize(flatpickr_dist_l10n_es_js__WEBPACK_IMPORTED_MODULE_21__["Spanish"]);
      Object(vee_validate__WEBPACK_IMPORTED_MODULE_16__["localize"])("es");
    }
  },
  methods: {
    onChange: function onChange(selectedDates, dateStr, instance) {
      var _this = this;
      return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().mark(function _callee() {
        var inputDateFormat, officeStartTime, officeEndTime, isValidDate, isWithinOfficeHours;
        return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              inputDateFormat = 'DD/MM/YYYY HH:mm';
              officeStartTime = _store__WEBPACK_IMPORTED_MODULE_30__["default"].state.auth.setting['schedule_start_time'] || '09:00:00'; // Schedule start time
              officeEndTime = _store__WEBPACK_IMPORTED_MODULE_30__["default"].state.auth.setting['schedule_end_time'] || '22:00:00'; // Schedule end time   
              isValidDate = _this.isValidDate(dateStr, inputDateFormat);
              if (isValidDate) {
                _context.next = 7;
                break;
              }
              _this.danger(_this.$t('invalid_date_format'));
              return _context.abrupt("return", false);
            case 7:
              isWithinOfficeHours = _this.isWithinOfficeHours(selectedDates, officeStartTime, officeEndTime);
              if (isWithinOfficeHours) {
                _context.next = 11;
                break;
              }
              _this.danger(_this.$t('closed_office'));
              return _context.abrupt("return", false);
            case 11:
              //
              // const now = moment();
              // const selectedDateTime = moment(dateStr, inputDateFormat, true);
              // if (selectedDateTime.isSameOrBefore(now)) {
              //     this.danger(this.$t('date_not_available'));
              //     return false
              // }

              // If you get here, all is well and the date is available
              _this.checkAvailability(dateStr);
            case 12:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    // Aplicar debounce a la función onSearch
    onSearchPatient: lodash__WEBPACK_IMPORTED_MODULE_11___default.a.debounce(function (search, loading) {
      if (search.length >= 3) {
        loading(true);
        this.searchPatient(loading, search, this);
      }
    }, 300),
    // 300ms es el tiempo de espera para ejecutar la función después del último evento 'onSearch'
    searchPatient: function searchPatient(loading, search, vm) {
      var _this2 = this;
      return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().mark(function _callee2() {
        var query, _yield$PatientsResour, data;
        return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _this2.loading = true;
              query = {
                q: search,
                isAll: true,
                perPage: 10,
                page: 1
              };
              _context2.next = 4;
              return PatientsResource.search(query);
            case 4:
              _yield$PatientsResour = _context2.sent;
              data = _yield$PatientsResour.data;
              vm.patients = data.data.map(function (item) {
                return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, item), {}, {
                  full_name: "".concat(item.name, " ").concat(item.last_name, " ").concat(item.mother_last_name)
                });
              });
              loading(false);
            case 8:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    }
  },
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    // Use toast
    // const toast = useToast();
    var _useI18nUtils = Object(_core_libs_i18n__WEBPACK_IMPORTED_MODULE_23__["useUtils"])(),
      t = _useI18nUtils.t;
    var _toRefs = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_29__["toRefs"])(props),
      event = _toRefs.event;
    var clearFormData = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_29__["ref"])(null);
    var loading = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_29__["ref"])(false);
    // const branchs = ref([]);
    var patients = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_29__["ref"])([]);
    var hideSidebar = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_29__["ref"])(false);
    var isValidCellPhone = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_29__["ref"])(false);
    var isAddNewPatientSidebarActive = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_29__["ref"])(false);
    var isAvailable = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_29__["ref"])(false);
    var calendarOptions = [{
      color: "warning",
      label: "pending"
    }, {
      color: "success",
      label: "confirmed"
    }, {
      color: "danger",
      label: "canceled"
    }];
    var blankAppointmentData = {
      branch_office_id: null,
      user_id: null,
      patient_id: null,
      date: null,
      state: null,
      duration: null,
      timeAvailable: null,
      intern_observation: null,
      patient: null
    };
    var professionals = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_29__["computed"])(function () {
      return _store__WEBPACK_IMPORTED_MODULE_30__["default"].state.calendar.useProfessionals;
    });
    var branchs = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_29__["computed"])(function () {
      return _store__WEBPACK_IMPORTED_MODULE_30__["default"].state.calendar.useBranchs;
    });
    var appointmentData = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_29__["ref"])(JSON.parse(JSON.stringify(blankAppointmentData)));
    var resetappointmentData = function resetappointmentData() {
      appointmentData.value = JSON.parse(JSON.stringify(blankAppointmentData));
    };
    var selectedProfessional = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_29__["computed"])(function () {
      return _store__WEBPACK_IMPORTED_MODULE_30__["default"].state.calendar.selectedProfessional;
    });
    var selectPatient = function selectPatient(value) {
      console.log('selectPatient', value);
    };
    var checkAvailability = /*#__PURE__*/function () {
      var _ref2 = Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().mark(function _callee3(dateStr) {
        var query, _yield$AppointmentRes, data;
        return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              loading.value = true;
              isAvailable.value = false;
              query = {
                id: appointmentData.value.id,
                isValidate: true,
                date: dateStr,
                user_id: appointmentData.value.user_id
              };
              _context3.prev = 3;
              _context3.next = 6;
              return AppointmentResource.available(query);
            case 6:
              _yield$AppointmentRes = _context3.sent;
              data = _yield$AppointmentRes.data;
              isAvailable.value = data.success;
              _context3.next = 14;
              break;
            case 11:
              _context3.prev = 11;
              _context3.t0 = _context3["catch"](3);
              _libs_helpers__WEBPACK_IMPORTED_MODULE_22__["handleResponseErrors"](_context3.t0);
            case 14:
              _context3.prev = 14;
              loading.value = false;
              return _context3.finish(14);
            case 17:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[3, 11, 14, 17]]);
      }));
      return function checkAvailability(_x) {
        return _ref2.apply(this, arguments);
      };
    }();
    var _formValidation = Object(_core_comp_functions_forms_form_validation__WEBPACK_IMPORTED_MODULE_18__["default"])(resetappointmentData),
      refFormObserver = _formValidation.refFormObserver,
      getValidationState = _formValidation.getValidationState,
      resetForm = _formValidation.resetForm;
    var onSubmit = /*#__PURE__*/function () {
      var _ref3 = Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().mark(function _callee4() {
        var payload, _yield$AppointmentRes2, data;
        return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              payload = {
                branch_office_id: appointmentData.value.branch_office_id,
                user_id: appointmentData.value.user_id,
                patient_id: appointmentData.value.patient.id,
                date: appointmentData.value.date,
                //moment(appointmentData.value.date, 'DD/MM/YYYY H:mm').format('YYYY-MM-DD HH:mm:ss'),
                state: appointmentData.value.state,
                duration: appointmentData.value.duration,
                intern_observation: appointmentData.value.intern_observation
              };
              _context4.prev = 1;
              loading.value = true;
              _context4.next = 5;
              return AppointmentResource.update(appointmentData.value.id, payload);
            case 5:
              _yield$AppointmentRes2 = _context4.sent;
              data = _yield$AppointmentRes2.data;
              loading.value = false;
              if (data.success) {
                _libs_helpers__WEBPACK_IMPORTED_MODULE_22__["success"](data.message);
                emit('edit-appointment', data.data);
                console.log('edit-appointment', data.data);
                emit("update:is-edit-event-handler-modal-active", false);
              } else {
                _libs_helpers__WEBPACK_IMPORTED_MODULE_22__["danger"](data.message);
              }
              _context4.next = 14;
              break;
            case 11:
              _context4.prev = 11;
              _context4.t0 = _context4["catch"](1);
              _libs_helpers__WEBPACK_IMPORTED_MODULE_22__["handleResponseErrors"](_context4.t0);
            case 14:
              _context4.prev = 14;
              loading.value = false;
              return _context4.finish(14);
            case 17:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[1, 11, 14, 17]]);
      }));
      return function onSubmit() {
        return _ref3.apply(this, arguments);
      };
    }();
    var addPatient = function addPatient(newPatient) {
      var id = newPatient.id,
        name = newPatient.name,
        last_name = newPatient.last_name,
        mother_last_name = newPatient.mother_last_name,
        rut = newPatient.rut,
        phone = newPatient.phone,
        cellphone = newPatient.cellphone,
        email = newPatient.email,
        full_name = newPatient.full_name;

      // Set patient data
      appointmentData.value.patient = {
        id: id,
        name: name,
        last_name: last_name,
        mother_last_name: mother_last_name,
        rut: rut,
        email: email,
        cellphone: cellphone,
        phone: phone,
        full_name: full_name
      };

      // Add new patient to the list
      patients.value.push(appointmentData.value.patient);
    };
    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_29__["onMounted"])( /*#__PURE__*/Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().mark(function _callee5() {
      return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    })));
    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_29__["watch"])(function () {
      return props.isEditEventHandlerModalActive;
    }, /*#__PURE__*/function () {
      var _ref5 = Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().mark(function _callee6(value) {
        return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              if (value) {
                appointmentData.value = {
                  id: props.event.id,
                  branch_office_id: props.event.branch_office_id,
                  user_id: props.event.user_id,
                  patient_id: props.event.patient_id,
                  date: moment__WEBPACK_IMPORTED_MODULE_12___default()(props.event.date).format('DD/MM/YYYY H:mm'),
                  state: props.event.state,
                  duration: props.event.duration,
                  intern_observation: props.event.intern_observation,
                  timeAvailable: null,
                  patient: props.event.patient
                };
              }
            case 1:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }));
      return function (_x2) {
        return _ref5.apply(this, arguments);
      };
    }());
    return {
      calendarOptions: calendarOptions,
      blankAppointmentData: blankAppointmentData,
      clearFormData: clearFormData,
      loading: loading,
      branchs: branchs,
      appointmentData: appointmentData,
      patients: patients,
      hideSidebar: hideSidebar,
      isValidCellPhone: isValidCellPhone,
      professionals: professionals,
      isAvailable: isAvailable,
      // Methods
      selectedProfessional: selectedProfessional,
      checkAvailability: checkAvailability,
      selectPatient: selectPatient,
      onSubmit: onSubmit,
      addPatient: addPatient,
      refFormObserver: refFormObserver,
      getValidationState: getValidationState,
      resetForm: resetForm,
      isAddNewPatientSidebarActive: isAddNewPatientSidebarActive
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/calendar-detail/AppointmentDetail.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/calendar/calendar-detail/AppointmentDetail.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! animate.css */ "./node_modules/animate.css/animate.css");
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(animate_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/router */ "./resources/js/src/router/index.js");
/* harmony import */ var _core_libs_i18n__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @core/libs/i18n */ "./resources/js/src/@core/libs/i18n/index.js");
/* harmony import */ var _calendar_event_handler_useCalendarEventHandler__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../calendar-event-handler/useCalendarEventHandler */ "./resources/js/src/views/apps/calendar/calendar-event-handler/useCalendarEventHandler.js");
/* harmony import */ var _CalendarAppointmentEdit_vue__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../CalendarAppointmentEdit.vue */ "./resources/js/src/views/apps/calendar/CalendarAppointmentEdit.vue");
/* harmony import */ var _core_components_app_timeline_AppTimeline_vue__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @core/components/app-timeline/AppTimeline.vue */ "./resources/js/src/@core/components/app-timeline/AppTimeline.vue");
/* harmony import */ var _core_components_app_timeline_AppTimelineItem_vue__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @core/components/app-timeline/AppTimelineItem.vue */ "./resources/js/src/@core/components/app-timeline/AppTimelineItem.vue");
/* harmony import */ var _providers_Appointments__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @/providers/Appointments */ "./resources/js/src/providers/Appointments.js");
/* harmony import */ var vue_toastification_composition__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! vue-toastification/composition */ "./node_modules/vue-toastification/composition/index.js");
/* harmony import */ var vue_toastification_composition__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(vue_toastification_composition__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @core/components/toastification/ToastificationContent.vue */ "./resources/js/src/@core/components/toastification/ToastificationContent.vue");





//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
















var AppointmentResource = new _providers_Appointments__WEBPACK_IMPORTED_MODULE_19__["default"]();

// Notification


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'CalendarAppointmentDetail',
  components: {
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__["BCard"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__["BCardText"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__["BCol"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__["BFormInput"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__["BButton"],
    BTable: bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__["BTable"],
    BMedia: bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__["BMedia"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__["BAvatar"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__["BLink"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__["BBadge"],
    BDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__["BDropdown"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__["BDropdownItem"],
    BPagination: bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__["BPagination"],
    BTooltip: bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__["BTooltip"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__["BImg"],
    VBTooltip: bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__["VBTooltip"],
    VBToggle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__["VBToggle"],
    BInputGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__["BInputGroup"],
    BInputGroupPrepend: bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__["BInputGroupPrepend"],
    BModal: bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__["BModal"],
    VBModal: bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__["VBModal"],
    BOverlay: bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__["BOverlay"],
    BSpinner: bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__["BSpinner"],
    BListGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__["BListGroup"],
    BListGroupItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__["BListGroupItem"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__["BCardBody"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__["BCardTitle"],
    BMediaAside: bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__["BMediaAside"],
    BAvatarGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__["BAvatarGroup"],
    BMediaBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__["BMediaBody"],
    BAlert: bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__["BAlert"],
    //
    AppTimeline: _core_components_app_timeline_AppTimeline_vue__WEBPACK_IMPORTED_MODULE_17__["default"],
    AppTimelineItem: _core_components_app_timeline_AppTimelineItem_vue__WEBPACK_IMPORTED_MODULE_18__["default"],
    CalendarAppointmentEdit: _CalendarAppointmentEdit_vue__WEBPACK_IMPORTED_MODULE_16__["default"]
  },
  directives: {
    'b-toggle': bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__["VBToggle"],
    'b-tooltip': bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__["VBTooltip"],
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_10__["default"]
  },
  model: {
    prop: "isEventHandlerSidebarActive",
    event: "update:is-event-handler-sidebar-active"
  },
  props: {
    isEventHandlerSidebarActive: {
      type: Boolean,
      required: true
    },
    event: {
      type: Object,
      required: true
    }
  },
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    // Use toast
    var toast = Object(vue_toastification_composition__WEBPACK_IMPORTED_MODULE_20__["useToast"])();
    var _useI18nUtils = Object(_core_libs_i18n__WEBPACK_IMPORTED_MODULE_14__["useUtils"])(),
      t = _useI18nUtils.t;
    var isEditEventHandlerModalActive = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_11__["ref"])(false);
    var loading = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_11__["ref"])(false);
    var appointment = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_11__["ref"])({});
    var clearFormData = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_11__["ref"])(null);
    var isAdministrator = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_11__["ref"])(false);
    var isDoctor = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_11__["ref"])(false);
    var calendarOptions = {
      'pending': t('appointments.status.pending'),
      'confirmed': t('appointments.status.confirmed'),
      'canceled': t('appointments.status.cancelled'),
      'assisted': t('appointments.status.assisted'),
      'unassisted': t('appointments.status.unassisted')
    };
    var swal_title = t('appointments.change_status_title');
    var swal_html = t('appointments.change_status_description');
    var swal_accept = t('yes_continue');
    var swal_cancel = t('cancel');
    var _useCalendarEventHand = Object(_calendar_event_handler_useCalendarEventHandler__WEBPACK_IMPORTED_MODULE_15__["default"])(Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_11__["toRefs"])(props), clearFormData, emit),
      eventLocal = _useCalendarEventHand.eventLocal,
      resetEventLocal = _useCalendarEventHand.resetEventLocal,
      onSubmit = _useCalendarEventHand.onSubmit;
    clearFormData.value = null;
    var userRoleIds = _store__WEBPACK_IMPORTED_MODULE_12__["default"].getters['auth/getUser'].roles || []; // Array de roles del usuario        
    var roleId = _store__WEBPACK_IMPORTED_MODULE_12__["default"].getters['auth/getRoleId']; // Id del rol del usuario
    isAdministrator.value = roleId === 1 || roleId === 2 ? true : false;
    isDoctor.value = roleId === 4 ? true : false; //userRoleIds.includes(4) ? true : false

    var youCanConfirm = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_11__["computed"])(function () {
      moment__WEBPACK_IMPORTED_MODULE_5___default.a.locale(_store__WEBPACK_IMPORTED_MODULE_12__["default"].state.auth.setting['language']);
      moment__WEBPACK_IMPORTED_MODULE_5___default.a.tz.setDefault(_store__WEBPACK_IMPORTED_MODULE_12__["default"].state.auth.setting['timezone']);
      var currentDate = moment__WEBPACK_IMPORTED_MODULE_5___default()().tz(_store__WEBPACK_IMPORTED_MODULE_12__["default"].state.auth.setting['timezone']);
      var eventDate = moment__WEBPACK_IMPORTED_MODULE_5___default.a.tz(props.event.extendedProps.date, _store__WEBPACK_IMPORTED_MODULE_12__["default"].state.auth.setting['timezone']);
      return currentDate.isSameOrBefore(eventDate);
    });
    var editAppointment = function editAppointment(data) {
      console.warn('editAppointment', data);
      emit('edit-appointment', data);
      emit('update:is-event-handler-sidebar-active', false);
    };
    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_11__["onMounted"])(function () {});
    var getAppointment = /*#__PURE__*/function () {
      var _ref2 = Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee(id) {
        var _yield$AppointmentRes, data;
        return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              loading.value = true;
              _context.next = 4;
              return AppointmentResource.show(id);
            case 4:
              _yield$AppointmentRes = _context.sent;
              data = _yield$AppointmentRes.data;
              if (data.success) {
                appointment.value = data.data;
              } else {
                helper.danger(data.message);
              }
              _context.next = 12;
              break;
            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              helper.handleResponseErrors(_context.t0);
            case 12:
              _context.prev = 12;
              loading.value = false;
              return _context.finish(12);
            case 15:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 9, 12, 15]]);
      }));
      return function getAppointment(_x) {
        return _ref2.apply(this, arguments);
      };
    }();
    var sendWhatsapp = function sendWhatsapp(event) {
      window.open("http://wa.me/".concat(event.mobile, "?text=").concat(event.message));
    };
    var changeStatus = function changeStatus(event, status) {
      var statusText = calendarOptions[status] || 'pending';
      sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
        title: swal_title.replace(':state', statusText),
        html: swal_html,
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: swal_accept,
        cancelButtonText: swal_cancel,
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
          var _preConfirm = Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee2() {
            var payload, _yield$AppointmentRes2, data;
            return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  payload = {
                    id: event.appointment_id,
                    user_id: event.user_id,
                    patient_id: event.patient_id,
                    branch_office_id: event.branch_office_id,
                    date: moment__WEBPACK_IMPORTED_MODULE_5___default()(event.date).format('DD/MM/YYYY H:mm'),
                    state: status,
                    duration: event.duration
                  };
                  _context2.prev = 1;
                  _context2.next = 4;
                  return AppointmentResource.update(event.appointment_id, payload);
                case 4:
                  _yield$AppointmentRes2 = _context2.sent;
                  data = _yield$AppointmentRes2.data;
                  if (data.success) {
                    props.event._context.calendarApi.refetchEvents();
                    emit('update:is-event-handler-sidebar-active', false);
                    toast({
                      component: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_21__["default"],
                      props: {
                        title: data.message,
                        icon: "CheckIcon",
                        variant: "success"
                      }
                    });
                  } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.showValidationMessage(data.message);
                  }
                  _context2.next = 12;
                  break;
                case 9:
                  _context2.prev = 9;
                  _context2.t0 = _context2["catch"](1);
                  sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.showValidationMessage("Error marking the appointment, please try again.");
                case 12:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, null, [[1, 9]]);
          }));
          function preConfirm() {
            return _preConfirm.apply(this, arguments);
          }
          return preConfirm;
        }(),
        allowOutsideClick: function allowOutsideClick() {
          return !sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.isLoading();
        }
      });
    };
    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_11__["watch"])(function () {
      return props.isEventHandlerSidebarActive;
    }, /*#__PURE__*/function () {
      var _ref3 = Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee3(newValue) {
        return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (!newValue) {
                _context3.next = 3;
                break;
              }
              _context3.next = 3;
              return getAppointment(props.event.id);
            case 3:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
    return {
      eventLocal: eventLocal,
      clearFormData: clearFormData,
      isAdministrator: isAdministrator,
      isDoctor: isDoctor,
      youCanConfirm: youCanConfirm,
      isEditEventHandlerModalActive: isEditEventHandlerModalActive,
      appointment: appointment,
      loading: loading,
      //
      editAppointment: editAppointment,
      sendWhatsapp: sendWhatsapp,
      changeStatus: changeStatus,
      // i18n
      t: t
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/calendar-event-handler/CalendarEventHandler.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/calendar/calendar-event-handler/CalendarEventHandler.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var _validations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @validations */ "./resources/js/src/@core/utils/validations/validations.js");
/* harmony import */ var _core_comp_functions_forms_form_validation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/comp-functions/forms/form-validation */ "./resources/js/src/@core/comp-functions/forms/form-validation.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var _useCalendarEventHandler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./useCalendarEventHandler */ "./resources/js/src/views/apps/calendar/calendar-event-handler/useCalendarEventHandler.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"],
    BSidebar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BSidebar"],
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BForm"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormGroup"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormInput"],
    BFormCheckbox: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormCheckbox"],
    BFormTextarea: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormTextarea"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAvatar"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_1___default.a,
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_2___default.a,
    ValidationProvider: vee_validate__WEBPACK_IMPORTED_MODULE_4__["ValidationProvider"],
    BFormInvalidFeedback: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormInvalidFeedback"],
    ValidationObserver: vee_validate__WEBPACK_IMPORTED_MODULE_4__["ValidationObserver"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  model: {
    prop: 'isEventHandlerSidebarActive',
    event: 'update:is-event-handler-sidebar-active'
  },
  props: {
    isEventHandlerSidebarActive: {
      type: Boolean,
      required: true
    },
    event: {
      type: Object,
      required: true
    },
    clearEventData: {
      type: Function,
      required: true
    }
  },
  data: function data() {
    return {
      required: _validations__WEBPACK_IMPORTED_MODULE_5__["required"],
      email: _validations__WEBPACK_IMPORTED_MODULE_5__["email"],
      url: _validations__WEBPACK_IMPORTED_MODULE_5__["url"]
    };
  },
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    /*
     ? This is handled quite differently in SFC due to deadlock of `useFormValidation` and this composition function.
     ? If we don't handle it the way it is being handled then either of two composition function used by this SFC get undefined as one of it's argument.
     * The Trick:
       * We created reactive property `clearFormData` and set to null so we can get `resetEventLocal` from `useCalendarEventHandler` composition function.
     * Once we get `resetEventLocal` function which is required by `useFormValidation` we will pass it to `useFormValidation` and in return we will get `clearForm` function which shall be original value of `clearFormData`.
     * Later we just assign `clearForm` to `clearFormData` and can resolve the deadlock. 😎
       ? Behind The Scene
     ? When we passed it to `useCalendarEventHandler` for first time it will be null but right after it we are getting correct value (which is `clearForm`) and assigning that correct value.
     ? As `clearFormData` is reactive it is being changed from `null` to corrent value and thanks to reactivity it is also update in `useCalendarEventHandler` composition function and it is getting correct value in second time and can work w/o any issues.
    */
    var clearFormData = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_7__["ref"])(null);
    var _useCalendarEventHand = Object(_useCalendarEventHandler__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_7__["toRefs"])(props), clearFormData, emit),
      eventLocal = _useCalendarEventHand.eventLocal,
      resetEventLocal = _useCalendarEventHand.resetEventLocal,
      calendarOptions = _useCalendarEventHand.calendarOptions,
      onSubmit = _useCalendarEventHand.onSubmit,
      guestsOptions = _useCalendarEventHand.guestsOptions;
    var _formValidation = Object(_core_comp_functions_forms_form_validation__WEBPACK_IMPORTED_MODULE_6__["default"])(resetEventLocal, props.clearEventData),
      refFormObserver = _formValidation.refFormObserver,
      getValidationState = _formValidation.getValidationState,
      resetForm = _formValidation.resetForm,
      clearForm = _formValidation.clearForm;
    clearFormData.value = clearForm;
    return {
      // Add New Event
      eventLocal: eventLocal,
      calendarOptions: calendarOptions,
      onSubmit: onSubmit,
      guestsOptions: guestsOptions,
      // Form Validation
      resetForm: resetForm,
      refFormObserver: refFormObserver,
      getValidationState: getValidationState
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/calendar-sidebar/CalendarSidebar.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/calendar/calendar-sidebar/CalendarSidebar.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _useCalendarSidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useCalendarSidebar */ "./resources/js/src/views/apps/calendar/calendar-sidebar/useCalendarSidebar.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flatpickr_dist_l10n_es_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flatpickr/dist/l10n/es.js */ "./node_modules/flatpickr/dist/l10n/es.js");
/* harmony import */ var flatpickr_dist_l10n_es_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_l10n_es_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  components: {
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCol"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BButton"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BImg"],
    BFormCheckbox: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormCheckbox"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormGroup"],
    BFormCheckboxGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormCheckboxGroup"],
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_4___default.a
  },
  props: {
    isEventHandlerSidebarActive: {
      type: Boolean,
      require: true
    }
  },
  created: function created() {
    if (_store__WEBPACK_IMPORTED_MODULE_6__["default"].state.auth.setting['language'] === "es") {
      flatpickr.localize(flatpickr_dist_l10n_es_js__WEBPACK_IMPORTED_MODULE_5__["Spanish"]);
    }
  },
  setup: function setup() {
    var _useCalendarSidebar = Object(_useCalendarSidebar__WEBPACK_IMPORTED_MODULE_3__["default"])(),
      calendarOptions = _useCalendarSidebar.calendarOptions,
      selectedCalendars = _useCalendarSidebar.selectedCalendars,
      checkAll = _useCalendarSidebar.checkAll,
      selectedCurrentDate = _useCalendarSidebar.selectedCurrentDate;
    var changeDate = function changeDate(val) {
      if (val) {
        selectedCurrentDate.value = new Date(val).toISOString();
      }
    };

    // const myDate = computed( () => store.state.calendar.selectedDates.start)

    var myDate = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_7__["computed"])({
      get: function get() {
        return _store__WEBPACK_IMPORTED_MODULE_6__["default"].state.calendar.selectedDates.start;
      },
      set: function set(val) {
        _store__WEBPACK_IMPORTED_MODULE_6__["default"].commit("calendar/SET_SELECTED_DATES", {
          start: val,
          end: moment__WEBPACK_IMPORTED_MODULE_0___default()(val).add('days', 1).format('YYY-MM-DD')
        });
        if (!_store__WEBPACK_IMPORTED_MODULE_6__["default"].state.calendar.selectedCurrentDate) {
          _store__WEBPACK_IMPORTED_MODULE_6__["default"].commit("calendar/SET_SELECTED_CURRENT_DATE", val);
        } else {
          if (_store__WEBPACK_IMPORTED_MODULE_6__["default"].state.calendar.selectedCalendars != _store__WEBPACK_IMPORTED_MODULE_6__["default"].state.calendar.selectedDates.start) {
            _store__WEBPACK_IMPORTED_MODULE_6__["default"].commit("calendar/SET_SELECTED_CURRENT_DATE", val);
          }
        }
      }
    });
    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_7__["watch"])([myDate], function (value) {
      console.warn(value);
    });
    return {
      calendarOptions: calendarOptions,
      selectedCalendars: selectedCalendars,
      checkAll: checkAll,
      changeDate: changeDate,
      selectedCurrentDate: selectedCurrentDate,
      myDate: myDate
    };
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/Calendar.vue?vue&type=style&index=0&id=741d173c&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/calendar/Calendar.vue?vue&type=style&index=0&id=741d173c&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".fc .fc-toolbar {\n  flex-wrap: wrap;\n  flex-direction: row !important;\n}\n.fc .fc-toolbar .fc-prev-button,\n.fc .fc-toolbar .fc-next-button {\n  display: inline-block;\n}\n[dir] .fc .fc-toolbar .fc-prev-button, [dir] .fc .fc-toolbar .fc-next-button {\n  background-color: transparent;\n  border-color: transparent;\n}\n.fc .fc-toolbar .fc-prev-button .fc-icon,\n.fc .fc-toolbar .fc-next-button .fc-icon {\n  color: #6e6b7b;\n}\n[dir] .fc .fc-toolbar .fc-prev-button:hover, [dir] .fc .fc-toolbar .fc-prev-button:active, [dir] .fc .fc-toolbar .fc-prev-button:focus, [dir] .fc .fc-toolbar .fc-next-button:hover, [dir] .fc .fc-toolbar .fc-next-button:active, [dir] .fc .fc-toolbar .fc-next-button:focus {\n  background-color: transparent !important;\n  border-color: transparent !important;\n  box-shadow: none !important;\n}\n[dir=ltr] .fc .fc-toolbar .fc-prev-button {\n  padding-left: 0 !important;\n}\n[dir=rtl] .fc .fc-toolbar .fc-prev-button {\n  padding-right: 0 !important;\n}\n.fc .fc-toolbar .fc-toolbar-chunk:first-child {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n}\n[dir] .fc .fc-toolbar .fc-button {\n  padding: 0.438rem 0.5rem;\n}\n[dir] .fc .fc-toolbar .fc-button:active, [dir] .fc .fc-toolbar .fc-button:focus {\n  box-shadow: none;\n}\n.fc .fc-toolbar .fc-button-group .fc-button {\n  text-transform: capitalize;\n}\n[dir] .fc .fc-toolbar .fc-button-group .fc-button:focus {\n  box-shadow: none;\n}\n.fc .fc-toolbar .fc-button-group .fc-button-primary:not(.fc-prev-button):not(.fc-next-button) {\n  color: #7367f0;\n}\n[dir] .fc .fc-toolbar .fc-button-group .fc-button-primary:not(.fc-prev-button):not(.fc-next-button) {\n  background-color: transparent;\n  border-color: #7367f0;\n}\n.fc .fc-toolbar .fc-button-group .fc-button-primary:not(.fc-prev-button):not(.fc-next-button).fc-button-active, .fc .fc-toolbar .fc-button-group .fc-button-primary:not(.fc-prev-button):not(.fc-next-button):hover {\n  color: #7367f0;\n}\n[dir] .fc .fc-toolbar .fc-button-group .fc-button-primary:not(.fc-prev-button):not(.fc-next-button).fc-button-active, [dir] .fc .fc-toolbar .fc-button-group .fc-button-primary:not(.fc-prev-button):not(.fc-next-button):hover {\n  background-color: rgba(115, 103, 240, 0.2) !important;\n  border-color: #7367f0 !important;\n}\n[dir] .fc .fc-toolbar .fc-button-group .fc-button-primary.fc-sidebarToggle-button {\n  border: 0;\n}\n.fc .fc-toolbar .fc-button-group .fc-button-primary.fc-sidebarToggle-button i,\n.fc .fc-toolbar .fc-button-group .fc-button-primary.fc-sidebarToggle-button svg {\n  height: 21px;\n  width: 21px;\n  font-size: 21px;\n}\n.fc .fc-toolbar .fc-button-group .fc-sidebarToggle-button {\n  color: #6e6b7b !important;\n}\n[dir] .fc .fc-toolbar .fc-button-group .fc-sidebarToggle-button {\n  background-color: transparent !important;\n}\n[dir=ltr] .fc .fc-toolbar .fc-button-group .fc-sidebarToggle-button {\n  padding-left: 0;\n}\n[dir=rtl] .fc .fc-toolbar .fc-button-group .fc-sidebarToggle-button {\n  padding-right: 0;\n}\n[dir] .fc .fc-toolbar .fc-button-group .fc-sidebarToggle-button:not(.fc-prev-button):not(.fc-next-button):hover {\n  background-color: transparent !important;\n}\n[dir=ltr] .fc .fc-toolbar .fc-button-group .fc-sidebarToggle-button + div {\n  margin-left: 0;\n}\n[dir=rtl] .fc .fc-toolbar .fc-button-group .fc-sidebarToggle-button + div {\n  margin-right: 0;\n}\n[dir] .fc .fc-toolbar .fc-button-group .fc-dayGridMonth-button, [dir] .fc .fc-toolbar .fc-button-group .fc-timeGridWeek-button, [dir] .fc .fc-toolbar .fc-button-group .fc-timeGridDay-button, [dir] .fc .fc-toolbar .fc-button-group .fc-listMonth-button {\n  padding: 0.55rem 1.5rem;\n}\n[dir] .fc .fc-toolbar .fc-button-group .fc-dayGridMonth-button:last-child, [dir] .fc .fc-toolbar .fc-button-group .fc-dayGridMonth-button:first-child, [dir] .fc .fc-toolbar .fc-button-group .fc-timeGridWeek-button:last-child, [dir] .fc .fc-toolbar .fc-button-group .fc-timeGridWeek-button:first-child, [dir] .fc .fc-toolbar .fc-button-group .fc-timeGridDay-button:last-child, [dir] .fc .fc-toolbar .fc-button-group .fc-timeGridDay-button:first-child, [dir] .fc .fc-toolbar .fc-button-group .fc-listMonth-button:last-child, [dir] .fc .fc-toolbar .fc-button-group .fc-listMonth-button:first-child {\n  border-radius: 0.358rem;\n}\n[dir=ltr] .fc .fc-toolbar .fc-button-group .fc-dayGridMonth-button:first-child, [dir=ltr] .fc .fc-toolbar .fc-button-group .fc-timeGridWeek-button:first-child, [dir=ltr] .fc .fc-toolbar .fc-button-group .fc-timeGridDay-button:first-child, [dir=ltr] .fc .fc-toolbar .fc-button-group .fc-listMonth-button:first-child {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n[dir=rtl] .fc .fc-toolbar .fc-button-group .fc-dayGridMonth-button:first-child, [dir=rtl] .fc .fc-toolbar .fc-button-group .fc-timeGridWeek-button:first-child, [dir=rtl] .fc .fc-toolbar .fc-button-group .fc-timeGridDay-button:first-child, [dir=rtl] .fc .fc-toolbar .fc-button-group .fc-listMonth-button:first-child {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n[dir=ltr] .fc .fc-toolbar .fc-button-group .fc-dayGridMonth-button:last-child, [dir=ltr] .fc .fc-toolbar .fc-button-group .fc-timeGridWeek-button:last-child, [dir=ltr] .fc .fc-toolbar .fc-button-group .fc-timeGridDay-button:last-child, [dir=ltr] .fc .fc-toolbar .fc-button-group .fc-listMonth-button:last-child {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n[dir=rtl] .fc .fc-toolbar .fc-button-group .fc-dayGridMonth-button:last-child, [dir=rtl] .fc .fc-toolbar .fc-button-group .fc-timeGridWeek-button:last-child, [dir=rtl] .fc .fc-toolbar .fc-button-group .fc-timeGridDay-button:last-child, [dir=rtl] .fc .fc-toolbar .fc-button-group .fc-listMonth-button:last-child {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n[dir=ltr] .fc .fc-toolbar > * > :not(:first-child) {\n  margin-left: 0rem;\n}\n[dir=rtl] .fc .fc-toolbar > * > :not(:first-child) {\n  margin-right: 0rem;\n}\n[dir=ltr] .fc .fc-toolbar .fc-toolbar-title {\n  margin-left: 0.25rem;\n}\n[dir=rtl] .fc .fc-toolbar .fc-toolbar-title {\n  margin-right: 0.25rem;\n}\n.fc .fc-toolbar .fc--button:empty,\n.fc .fc-toolbar .fc-toolbar-chunk:empty {\n  display: none;\n}\n[dir] .fc tbody td, [dir] .fc thead th {\n  border-color: #ebe9f1;\n}\n[dir=ltr] .fc tbody td.fc-col-header-cell, [dir=ltr] .fc thead th.fc-col-header-cell {\n  border-right: 0;\n  border-left: 0;\n}\n[dir=rtl] .fc tbody td.fc-col-header-cell, [dir=rtl] .fc thead th.fc-col-header-cell {\n  border-left: 0;\n  border-right: 0;\n}\n.fc .fc-view-harness {\n  min-height: 650px;\n}\n[dir] .fc .fc-scrollgrid-section-liquid > td {\n  border-bottom: 0;\n}\n.fc .fc-daygrid-event-harness .fc-event {\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n[dir] .fc .fc-daygrid-event-harness .fc-event {\n  padding: 0.25rem 0.5rem;\n}\n[dir] .fc .fc-daygrid-event-harness + .fc-daygrid-event-harness {\n  margin-top: 0.3rem;\n}\n[dir] .fc .fc-daygrid-day-bottom {\n  margin-top: 0.3rem;\n}\n[dir] .fc .fc-daygrid-day {\n  padding: 5px;\n}\n.fc .fc-daygrid-day .fc-daygrid-day-top {\n  flex-direction: row;\n}\n.fc .fc-daygrid-day-number,\n.fc .fc-timegrid-slot-label-cushion,\n.fc .fc-list-event-time {\n  color: #6e6b7b;\n}\n[dir] .fc .fc-day-today {\n  background: #f8f8f8 !important;\n  background-color: #f8f8f8 !important;\n}\n[dir] .fc .fc-timegrid .fc-scrollgrid-section .fc-col-header-cell, [dir] .fc .fc-timegrid .fc-scrollgrid-section .fc-timegrid-axis {\n  border-color: #ebe9f1;\n}\n[dir=ltr] .fc .fc-timegrid .fc-scrollgrid-section .fc-col-header-cell, [dir=ltr] .fc .fc-timegrid .fc-scrollgrid-section .fc-timegrid-axis {\n  border-left: 0;\n  border-right: 0;\n}\n[dir=rtl] .fc .fc-timegrid .fc-scrollgrid-section .fc-col-header-cell, [dir=rtl] .fc .fc-timegrid .fc-scrollgrid-section .fc-timegrid-axis {\n  border-right: 0;\n  border-left: 0;\n}\n[dir] .fc .fc-timegrid .fc-scrollgrid-section .fc-timegrid-axis {\n  border-color: #ebe9f1;\n}\n.fc .fc-timegrid .fc-timegrid-axis.fc-scrollgrid-shrink .fc-timegrid-axis-cushion {\n  text-transform: capitalize;\n  color: #b9b9c3;\n}\n.fc .fc-timegrid .fc-timegrid-slots .fc-timegrid-slot {\n  height: 3rem;\n}\n[dir] .fc .fc-timegrid .fc-timegrid-slots .fc-timegrid-slot .fc-timegrid-slot-label-frame {\n  text-align: center;\n}\n.fc .fc-timegrid .fc-timegrid-slots .fc-timegrid-slot .fc-timegrid-slot-label-frame .fc-timegrid-slot-label-cushion {\n  text-transform: uppercase;\n}\n.fc .fc-timegrid .fc-timegrid-divider {\n  display: none;\n}\n[dir] .fc .fc-list {\n  border-color: #ebe9f1;\n}\n[dir] .fc .fc-list .fc-list-day-cushion {\n  background: #f8f8f8;\n}\n[dir] .fc .fc-list .fc-list-event:hover td {\n  background-color: #f8f8f8;\n}\n[dir] .fc .fc-list .fc-list-event td {\n  border-color: #ebe9f1;\n}\n.app-calendar {\n  position: relative;\n}\n[dir] .app-calendar {\n  border-radius: 0.428rem;\n  margin-bottom: 2rem;\n}\n.app-calendar .app-calendar-sidebar {\n  position: absolute;\n  width: 18rem;\n  height: 100%;\n  z-index: 5;\n  flex-basis: 18rem;\n  transition: all 0.2s, background 0s, border 0s;\n}\n[dir] .app-calendar .app-calendar-sidebar {\n  background-color: #fff;\n}\n[dir=ltr] .app-calendar .app-calendar-sidebar {\n  left: calc(-18rem - 1.2rem);\n  border-right: 1px solid #ebe9f1;\n}\n[dir=rtl] .app-calendar .app-calendar-sidebar {\n  right: calc(-18rem - 1.2rem);\n  border-left: 1px solid #ebe9f1;\n}\n[dir=ltr] .app-calendar .app-calendar-sidebar.show {\n  left: 0;\n}\n[dir=rtl] .app-calendar .app-calendar-sidebar.show {\n  right: 0;\n}\n.app-calendar .app-calendar-sidebar .sidebar-content-title {\n  font-size: 0.85rem;\n  color: #b9b9c3;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n}\n.app-calendar .app-calendar-sidebar .select-all ~ label,\n.app-calendar .app-calendar-sidebar .input-filter ~ label {\n  color: #5e5873;\n  font-weight: 500;\n  letter-spacing: 0.4px;\n}\n.app-calendar .event-sidebar {\n  position: absolute;\n  top: 0;\n  width: 400px;\n  z-index: 15;\n  transition: all 0.3s ease-in-out;\n}\n[dir=ltr] .app-calendar .event-sidebar {\n  right: 0;\n  transform: translateX(120%);\n}\n[dir=rtl] .app-calendar .event-sidebar {\n  left: 0;\n  transform: translateX(-120%);\n}\n.app-calendar .event-sidebar .card {\n  height: calc(100vh - 12.96rem);\n  height: calc(var(--vh, 1vh) * 100 - 12.96rem);\n}\n[dir=ltr] .app-calendar .event-sidebar .card {\n  border-radius: 0 0.25rem 0.25rem 0;\n}\n[dir=rtl] .app-calendar .event-sidebar .card {\n  border-radius: 0.25rem 0 0 0.25rem;\n}\n[dir] .app-calendar .event-sidebar .card .close-bar {\n  cursor: pointer;\n}\n.app-calendar .event-sidebar .card .todo-item-action {\n  width: 6rem;\n}\n.app-calendar .event-sidebar .card .todo-item-action .todo-item-info,\n.app-calendar .event-sidebar .card .todo-item-action .todo-item-favorite,\n.app-calendar .event-sidebar .card .todo-item-action .dropdown {\n  line-height: 1.5;\n}\n[dir] .app-calendar .event-sidebar .card .todo-item-action .todo-item-info, [dir] .app-calendar .event-sidebar .card .todo-item-action .todo-item-favorite, [dir] .app-calendar .event-sidebar .card .todo-item-action .dropdown {\n  cursor: pointer;\n}\n[dir] .app-calendar .event-sidebar .card .todo-item-action .dropdown .dropdown-menu .dropdown-item {\n  padding: 0.14rem 1.428rem;\n}\n.app-calendar .event-sidebar .card .todo-item-action .dropdown-toggle::after {\n  display: none;\n}\n[dir] .app-calendar .event-sidebar.show {\n  transform: translateX(0);\n}\n.app-calendar .fc-toolbar h2 {\n  font-size: 1.45rem;\n}\n[dir] .app-calendar .fc-header-toolbar {\n  margin-bottom: 1.75rem !important;\n}\n[dir] .app-calendar .fc-view-harness {\n  margin: 0 -1.6rem;\n}\n[dir] .app-calendar .fc-scrollgrid {\n  border-color: #ebe9f1;\n}\n.app-calendar .fc-day-past .fc-daygrid-day-number,\n.app-calendar .fc-day-future .fc-daygrid-day-number {\n  color: #b9b9c3;\n}\n[dir] .app-calendar .fc-popover {\n  box-shadow: 0 4px 24px 0 rgba(34, 41, 47, 0.1);\n}\n[dir] .app-calendar .fc-popover .fc-popover-header {\n  background: transparent;\n  padding: 0.5rem;\n}\n.app-calendar .fc-popover .fc-popover-header .fc-popover-title,\n.app-calendar .fc-popover .fc-popover-header .fc-popover-close {\n  color: #5e5873;\n}\n[dir] .app-calendar .fc-popover .fc-popover-body *:not(:last-of-type) {\n  margin-bottom: 0.3rem;\n}\n.app-calendar .fc .fc-event .fc-event-main {\n  color: inherit;\n}\n[dir] .app-calendar .fc-list-event {\n  background: transparent !important;\n}\n@media (min-width: 992px) {\n.app-calendar .app-calendar-sidebar {\n    position: static;\n    height: auto;\n}\n[dir] .app-calendar .app-calendar-sidebar {\n    box-shadow: none !important;\n}\n[dir] .app-calendar .app-calendar-sidebar .flatpickr-days {\n    background-color: transparent;\n}\n}\n.event-sidebar .select2-selection__choice__remove:before {\n  top: 40% !important;\n}\n[dir] .horizontal-layout .app-calendar {\n  margin-bottom: 1rem;\n}\n@media (max-width: 992px) {\n.fc .fc-sidebarToggle-button {\n    font-size: 0;\n}\n}\n@media (min-width: 992px) {\n.fc .fc-sidebarToggle-button {\n    display: none;\n}\n}\n@media (max-width: 700px) {\n[dir] .app-calendar .fc .fc-header-toolbar .fc-toolbar-chunk:last-of-type {\n    margin-top: 1rem;\n}\n}\n.fc-sidebarToggle-button {\n  width: 25px;\n  height: 25px;\n  display: block;\n}\n[dir] .fc-sidebarToggle-button {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24' stroke='%236e6b7b' stroke-width='2' fill='none' stroke-linecap='round' stroke-linejoin='round' class='css-i6dzq1'%3E%3Cline x1='3' y1='12' x2='21' y2='12'%3E%3C/line%3E%3Cline x1='3' y1='6' x2='21' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='18' x2='21' y2='18'%3E%3C/line%3E%3C/svg%3E\");\n  background-position: center;\n  background-repeat: no-repeat;\n}\n[dir=ltr] .fc-sidebarToggle-button {\n  margin-right: 0.7rem !important;\n}\n[dir=rtl] .fc-sidebarToggle-button {\n  margin-left: 0.7rem !important;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/CalendarAppointmentAdd.vue?vue&type=style&index=0&id=5a25dfde&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/calendar/CalendarAppointmentAdd.vue?vue&type=style&index=0&id=5a25dfde&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/CalendarAppointmentAdd.vue?vue&type=style&index=1&id=5a25dfde&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/calendar/CalendarAppointmentAdd.vue?vue&type=style&index=1&id=5a25dfde&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../../../../../../node_modules/css-loader/dist/cjs.js!flatpickr/dist/flatpickr.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/flatpickr/dist/flatpickr.css");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);
// Module
exports.push([module.i, "/**\n    Support for SASS is deprecated as of v3.18.\n\n    The files remain here if your build is dependent on them\n    but they will not receive updates in future releases. All\n    SASS variables have been translated into CSS variables, so\n    migration should be quite simple if you'd like to move over.\n\n    In v4, these files will be removed.\n */\n.v-select {\n  position: relative;\n  font-family: inherit;\n}\n.v-select,\n.v-select * {\n  box-sizing: border-box;\n}\n\n/* KeyFrames */\n@-webkit-keyframes vSelectSpinner-ltr {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@-webkit-keyframes vSelectSpinner-rtl {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(-360deg);\n}\n}\n@keyframes vSelectSpinner-ltr {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes vSelectSpinner-rtl {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(-360deg);\n}\n}\n/* Dropdown Default Transition */\n.vs__fade-enter-active,\n.vs__fade-leave-active {\n  pointer-events: none;\n  transition: opacity 0.15s cubic-bezier(1, 0.5, 0.8, 1);\n}\n.vs__fade-enter,\n.vs__fade-leave-to {\n  opacity: 0;\n}\n\n/** Component States */\n/*\n * Disabled\n *\n * When the component is disabled, all interaction\n * should be prevented. Here we modify the bg color,\n * and change the cursor displayed on the interactive\n * components.\n */\n[dir] .vs--disabled .vs__dropdown-toggle, [dir] .vs--disabled .vs__clear, [dir] .vs--disabled .vs__search, [dir] .vs--disabled .vs__selected, [dir] .vs--disabled .vs__open-indicator {\n  cursor: not-allowed;\n  background-color: #f8f8f8;\n}\n\n/*\n *  RTL - Right to Left Support\n *\n *  Because we're using a flexbox layout, the `dir=\"rtl\"`\n *  HTML attribute does most of the work for us by\n *  rearranging the child elements visually.\n */\n.v-select[dir=rtl] .vs__actions {\n  padding: 0 3px 0 6px;\n}\n.v-select[dir=rtl] .vs__clear {\n  margin-left: 6px;\n  margin-right: 0;\n}\n.v-select[dir=rtl] .vs__deselect {\n  margin-left: 0;\n  margin-right: 2px;\n}\n.v-select[dir=rtl] .vs__dropdown-menu {\n  text-align: right;\n}\n\n/**\n    Dropdown Toggle\n\n    The dropdown toggle is the primary wrapper of the component. It\n    has two direct descendants: .vs__selected-options, and .vs__actions.\n\n    .vs__selected-options holds the .vs__selected's as well as the\n    main search input.\n\n    .vs__actions holds the clear button and dropdown toggle.\n */\n.vs__dropdown-toggle {\n  appearance: none;\n  display: flex;\n  white-space: normal;\n}\n[dir] .vs__dropdown-toggle {\n  padding: 0 0 4px 0;\n  background: none;\n  border: 1px solid #d8d6de;\n  border-radius: 0.357rem;\n}\n.vs__selected-options {\n  display: flex;\n  flex-basis: 100%;\n  flex-grow: 1;\n  flex-wrap: wrap;\n  position: relative;\n}\n[dir] .vs__selected-options {\n  padding: 0 2px;\n}\n.vs__actions {\n  display: flex;\n  align-items: center;\n}\n[dir=ltr] .vs__actions {\n  padding: 4px 6px 0 3px;\n}\n[dir=rtl] .vs__actions {\n  padding: 4px 3px 0 6px;\n}\n\n/* Dropdown Toggle States */\n[dir] .vs--searchable .vs__dropdown-toggle {\n  cursor: text;\n}\n[dir] .vs--unsearchable .vs__dropdown-toggle {\n  cursor: pointer;\n}\n[dir] .vs--open .vs__dropdown-toggle {\n  border-bottom-color: transparent;\n}\n[dir=ltr] .vs--open .vs__dropdown-toggle {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n[dir=rtl] .vs--open .vs__dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.vs__open-indicator {\n  fill: rgba(60, 60, 60, 0.5);\n  transition: transform 150ms cubic-bezier(1, -0.115, 0.975, 0.855);\n}\n[dir] .vs__open-indicator {\n  transform: scale(1);\n  transition-timing-function: cubic-bezier(1, -0.115, 0.975, 0.855);\n}\n[dir=ltr] .vs--open .vs__open-indicator {\n  transform: rotate(180deg) scale(1);\n}\n[dir=rtl] .vs--open .vs__open-indicator {\n  transform: rotate(-180deg) scale(1);\n}\n.vs--loading .vs__open-indicator {\n  opacity: 0;\n}\n\n/* Clear Button */\n.vs__clear {\n  fill: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__clear {\n  padding: 0;\n  border: 0;\n  background-color: transparent;\n  cursor: pointer;\n}\n[dir=ltr] .vs__clear {\n  margin-right: 8px;\n}\n[dir=rtl] .vs__clear {\n  margin-left: 8px;\n}\n\n/* Dropdown Menu */\n.vs__dropdown-menu {\n  display: block;\n  box-sizing: border-box;\n  position: absolute;\n  top: calc(100% - 1px);\n  z-index: 1000;\n  width: 100%;\n  max-height: 350px;\n  min-width: 160px;\n  overflow-y: auto;\n  list-style: none;\n}\n[dir] .vs__dropdown-menu {\n  padding: 5px 0;\n  margin: 0;\n  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.1);\n  border: 1px solid #d8d6de;\n  border-top-style: none;\n  border-radius: 0 0 0.357rem 0.357rem;\n  background: #fff;\n}\n[dir=ltr] .vs__dropdown-menu {\n  left: 0;\n  text-align: left;\n}\n[dir=rtl] .vs__dropdown-menu {\n  right: 0;\n  text-align: right;\n}\n[dir] .vs__no-options {\n  text-align: center;\n}\n\n/* List Items */\n.vs__dropdown-option {\n  line-height: 1.42857143;\n  /* Normalize line height */\n  display: block;\n  color: #333;\n  /* Overrides most CSS frameworks */\n  white-space: nowrap;\n}\n[dir] .vs__dropdown-option {\n  padding: 3px 20px;\n  clear: both;\n  cursor: pointer;\n}\n.vs__dropdown-option--highlight {\n  color: #7367f0 !important;\n}\n[dir] .vs__dropdown-option--highlight {\n  background: rgba(115, 103, 240, 0.12);\n}\n.vs__dropdown-option--deselect {\n  color: #fff;\n}\n[dir] .vs__dropdown-option--deselect {\n  background: #fb5858;\n}\n.vs__dropdown-option--disabled {\n  color: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__dropdown-option--disabled {\n  background: inherit;\n  cursor: inherit;\n}\n\n/* Selected Tags */\n.vs__selected {\n  display: flex;\n  align-items: center;\n  color: #333;\n  line-height: 1.8;\n  z-index: 0;\n}\n[dir] .vs__selected {\n  background-color: #7367f0;\n  border: 0 solid rgba(60, 60, 60, 0.26);\n  border-radius: 0.357rem;\n  margin: 4px 2px 0px 2px;\n  padding: 0 0.25em;\n}\n.vs__deselect {\n  display: inline-flex;\n  appearance: none;\n  fill: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__deselect {\n  padding: 0;\n  border: 0;\n  cursor: pointer;\n  background: none;\n  text-shadow: 0 1px 0 #fff;\n}\n[dir=ltr] .vs__deselect {\n  margin-left: 4px;\n}\n[dir=rtl] .vs__deselect {\n  margin-right: 4px;\n}\n\n/* States */\n[dir] .vs--single .vs__selected {\n  background-color: transparent;\n  border-color: transparent;\n}\n.vs--single.vs--open .vs__selected, .vs--single.vs--loading .vs__selected {\n  position: absolute;\n  opacity: 0.4;\n}\n.vs--single.vs--searching .vs__selected {\n  display: none;\n}\n\n/* Search Input */\n/**\n * Super weird bug... If this declaration is grouped\n * below, the cancel button will still appear in chrome.\n * If it's up here on it's own, it'll hide it.\n */\n.vs__search::-webkit-search-cancel-button {\n  display: none;\n}\n.vs__search::-webkit-search-decoration,\n.vs__search::-webkit-search-results-button,\n.vs__search::-webkit-search-results-decoration,\n.vs__search::-ms-clear {\n  display: none;\n}\n.vs__search,\n.vs__search:focus {\n  appearance: none;\n  line-height: 1.8;\n  font-size: 1em;\n  outline: none;\n  width: 0;\n  max-width: 100%;\n  flex-grow: 1;\n  z-index: 1;\n}\n[dir] .vs__search, [dir] .vs__search:focus {\n  border: 1px solid transparent;\n  margin: 4px 0 0 0;\n  padding: 0 7px;\n  background: none;\n  box-shadow: none;\n}\n[dir=ltr] .vs__search, [dir=ltr] .vs__search:focus {\n  border-left: none;\n}\n[dir=rtl] .vs__search, [dir=rtl] .vs__search:focus {\n  border-right: none;\n}\n.vs__search::placeholder {\n  color: #6e6b7b;\n}\n\n/**\n    States\n */\n.vs--unsearchable .vs__search {\n  opacity: 1;\n}\n[dir] .vs--unsearchable:not(.vs--disabled) .vs__search {\n  cursor: pointer;\n}\n.vs--single.vs--searching:not(.vs--open):not(.vs--loading) .vs__search {\n  opacity: 0.2;\n}\n\n/* Loading Spinner */\n.vs__spinner {\n  align-self: center;\n  opacity: 0;\n  font-size: 5px;\n  text-indent: -9999em;\n  overflow: hidden;\n  transition: opacity 0.1s;\n}\n[dir] .vs__spinner {\n  border-top: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-bottom: 0.9em solid rgba(100, 100, 100, 0.1);\n  transform: translateZ(0);\n}\n[dir=ltr] .vs__spinner {\n  border-right: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-left: 0.9em solid rgba(60, 60, 60, 0.45);\n  animation:  vSelectSpinner-ltr 1.1s infinite linear;\n}\n[dir=rtl] .vs__spinner {\n  border-left: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-right: 0.9em solid rgba(60, 60, 60, 0.45);\n  animation:  vSelectSpinner-rtl 1.1s infinite linear;\n}\n.vs__spinner,\n.vs__spinner:after {\n  width: 5em;\n  height: 5em;\n}\n[dir] .vs__spinner, [dir] .vs__spinner:after {\n  border-radius: 50%;\n}\n\n/* Loading Spinner States */\n.vs--loading .vs__spinner {\n  opacity: 1;\n}\n.vs__open-indicator {\n  fill: none;\n}\n[dir] .vs__open-indicator {\n  margin-top: 0.15rem;\n}\n.vs__dropdown-toggle {\n  transition: all 0.25s ease-in-out;\n}\n[dir] .vs__dropdown-toggle {\n  padding: 0.59px 0 4px 0;\n}\n[dir=ltr] .vs--single .vs__dropdown-toggle {\n  padding-left: 6px;\n}\n[dir=rtl] .vs--single .vs__dropdown-toggle {\n  padding-right: 6px;\n}\n.vs__dropdown-option--disabled {\n  opacity: 0.5;\n}\n[dir] .vs__dropdown-option--disabled.vs__dropdown-option--selected {\n  background: #7367f0 !important;\n}\n.vs__dropdown-option {\n  color: #6e6b7b;\n}\n[dir] .vs__dropdown-option, [dir] .vs__no-options {\n  padding: 7px 20px;\n}\n.vs__dropdown-option--selected {\n  background-color: #7367f0;\n  color: #fff;\n  position: relative;\n}\n.vs__dropdown-option--selected::after {\n  content: \"\";\n  height: 1.1rem;\n  width: 1.1rem;\n  display: inline-block;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  right: 20px;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-check'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 1.1rem;\n}\n[dir=rtl] .vs__dropdown-option--selected::after {\n  left: 20px;\n  right: unset;\n}\n.vs__dropdown-option--selected.vs__dropdown-option--highlight {\n  color: #fff !important;\n  background-color: #7367f0 !important;\n}\n.vs__clear svg {\n  color: #6e6b7b;\n}\n.vs__selected {\n  color: #fff;\n}\n.v-select.vs--single .vs__selected {\n  color: #6e6b7b;\n  transition: transform 0.2s ease;\n}\n[dir] .v-select.vs--single .vs__selected {\n  margin-top: 5px;\n}\n[dir=ltr] .v-select.vs--single .vs__selected input {\n  padding-left: 0;\n}\n[dir=rtl] .v-select.vs--single .vs__selected input {\n  padding-right: 0;\n}\n[dir=ltr] .vs--single.vs--open .vs__selected {\n  transform: translateX(5px);\n}\n[dir=rtl] .vs--single.vs--open .vs__selected {\n  transform: translateX(-5px);\n}\n.vs__selected .vs__deselect {\n  color: inherit;\n}\n.v-select:not(.vs--single) .vs__selected {\n  font-size: 0.9rem;\n}\n[dir] .v-select:not(.vs--single) .vs__selected {\n  border-radius: 3px;\n  padding: 0 0.6em;\n}\n[dir=ltr] .v-select:not(.vs--single) .vs__selected {\n  margin: 5px 2px 2px 5px;\n}\n[dir=rtl] .v-select:not(.vs--single) .vs__selected {\n  margin: 5px 5px 2px 2px;\n}\n.v-select:not(.vs--single) .vs__deselect svg {\n  vertical-align: text-top;\n}\n[dir] .v-select:not(.vs--single) .vs__deselect svg {\n  transform: scale(0.8);\n}\n.vs__dropdown-menu {\n  top: calc(100% + 1rem);\n}\n[dir] .vs__dropdown-menu {\n  border: none;\n  border-radius: 6px;\n  padding: 0;\n}\n[dir] .vs--open .vs__dropdown-toggle {\n  border-color: #7367f0;\n  border-bottom-color: #7367f0;\n  box-shadow: 0 3px 10px 0 rgba(34, 41, 47, 0.1);\n}\n[dir=ltr] .vs--open .vs__dropdown-toggle {\n  border-bottom-left-radius: 0.357rem;\n  border-bottom-right-radius: 0.357rem;\n}\n[dir=rtl] .vs--open .vs__dropdown-toggle {\n  border-bottom-right-radius: 0.357rem;\n  border-bottom-left-radius: 0.357rem;\n}\n.select-size-lg .vs__selected {\n  font-size: 1rem !important;\n}\n[dir] .select-size-lg.vs--single.vs--open .vs__selected {\n  margin-top: 6px;\n}\n.select-size-lg .vs__dropdown-toggle,\n.select-size-lg .vs__selected {\n  font-size: 1.25rem;\n}\n[dir] .select-size-lg .vs__dropdown-toggle {\n  padding: 5px;\n}\n[dir] .select-size-lg .vs__dropdown-toggle input {\n  margin-top: 0;\n}\n.select-size-lg .vs__deselect svg {\n  vertical-align: middle !important;\n}\n[dir] .select-size-lg .vs__deselect svg {\n  transform: scale(1) !important;\n}\n[dir] .select-size-sm .vs__dropdown-toggle {\n  padding-bottom: 0;\n  padding: 1px;\n}\n[dir] .select-size-sm.vs--single .vs__dropdown-toggle {\n  padding: 2px;\n}\n.select-size-sm .vs__dropdown-toggle,\n.select-size-sm .vs__selected {\n  font-size: 0.9rem;\n}\n[dir] .select-size-sm .vs__actions {\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n.select-size-sm .vs__deselect svg {\n  vertical-align: middle !important;\n}\n[dir] .select-size-sm .vs__search {\n  margin-top: 0;\n}\n.select-size-sm.v-select .vs__selected {\n  font-size: 0.75rem;\n}\n[dir] .select-size-sm.v-select .vs__selected {\n  padding: 0 0.3rem;\n}\n[dir] .select-size-sm.v-select:not(.vs--single) .vs__selected {\n  margin: 4px 5px;\n}\n[dir] .select-size-sm.v-select.vs--single .vs__selected {\n  margin-top: 1px;\n}\n[dir] .select-size-sm.vs--single.vs--open .vs__selected {\n  margin-top: 4px;\n}\n.dark-layout .vs__dropdown-toggle {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .vs__dropdown-toggle {\n  background: #283046;\n  border-color: #404656;\n}\n.dark-layout .vs__selected-options input {\n  color: #b4b7bd;\n}\n.dark-layout .vs__selected-options input::placeholder {\n  color: #676d7d;\n}\n.dark-layout .vs__actions svg {\n  fill: #404656;\n}\n[dir] .dark-layout .vs__dropdown-menu {\n  background: #283046;\n}\n.dark-layout .vs__dropdown-menu li {\n  color: #b4b7bd;\n}\n.dark-layout .v-select:not(.vs--single) .vs__selected {\n  color: #7367f0;\n}\n[dir] .dark-layout .v-select:not(.vs--single) .vs__selected {\n  background-color: rgba(115, 103, 240, 0.12);\n}\n.dark-layout .v-select.vs--single .vs__selected {\n  color: #b4b7bd !important;\n}\n.dark-layout .vs--disabled .vs__dropdown-toggle,\n.dark-layout .vs--disabled .vs__clear,\n.dark-layout .vs--disabled .vs__search,\n.dark-layout .vs--disabled .vs__selected,\n.dark-layout .vs--disabled .vs__open-indicator {\n  opacity: 0.5;\n}\n[dir] .dark-layout .vs--disabled .vs__dropdown-toggle, [dir] .dark-layout .vs--disabled .vs__clear, [dir] .dark-layout .vs--disabled .vs__search, [dir] .dark-layout .vs--disabled .vs__selected, [dir] .dark-layout .vs--disabled .vs__open-indicator {\n  background-color: #283046;\n}\n.flatpickr-calendar .flatpickr-day {\n  color: #6e6b7b;\n}\n[dir] .flatpickr-calendar .flatpickr-day.today {\n  border-color: #7367f0;\n}\n.flatpickr-calendar .flatpickr-day.today:hover {\n  color: #6e6b7b;\n}\n[dir] .flatpickr-calendar .flatpickr-day.today:hover {\n  background: transparent;\n}\n.flatpickr-calendar .flatpickr-day.selected, .flatpickr-calendar .flatpickr-day.selected:hover {\n  color: #fff;\n}\n[dir] .flatpickr-calendar .flatpickr-day.selected, [dir] .flatpickr-calendar .flatpickr-day.selected:hover {\n  background: #7367f0;\n  border-color: #7367f0;\n}\n[dir] .flatpickr-calendar .flatpickr-day.inRange, [dir] .flatpickr-calendar .flatpickr-day.inRange:hover {\n  background: #f3f2fe;\n  border-color: #f3f2fe;\n}\n[dir=ltr] .flatpickr-calendar .flatpickr-day.inRange, [dir=ltr] .flatpickr-calendar .flatpickr-day.inRange:hover {\n  box-shadow: -5px 0 0 #f3f2fe, 5px 0 0 #f3f2fe;\n}\n[dir=rtl] .flatpickr-calendar .flatpickr-day.inRange, [dir=rtl] .flatpickr-calendar .flatpickr-day.inRange:hover {\n  box-shadow: 5px 0 0 #f3f2fe, -5px 0 0 #f3f2fe;\n}\n.flatpickr-calendar .flatpickr-day.startRange, .flatpickr-calendar .flatpickr-day.endRange, .flatpickr-calendar .flatpickr-day.startRange:hover, .flatpickr-calendar .flatpickr-day.endRange:hover {\n  color: #fff;\n}\n[dir] .flatpickr-calendar .flatpickr-day.startRange, [dir] .flatpickr-calendar .flatpickr-day.endRange, [dir] .flatpickr-calendar .flatpickr-day.startRange:hover, [dir] .flatpickr-calendar .flatpickr-day.endRange:hover {\n  background: #7367f0;\n  border-color: #7367f0;\n}\n[dir=ltr] .flatpickr-calendar .flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n+1)), [dir=ltr] .flatpickr-calendar .flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n+1)), [dir=ltr] .flatpickr-calendar .flatpickr-day.endRange.startRange + .endRange:not(:nth-child(7n+1)) {\n  box-shadow: -10px 0 0 #7367f0;\n}\n[dir=rtl] .flatpickr-calendar .flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n+1)), [dir=rtl] .flatpickr-calendar .flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n+1)), [dir=rtl] .flatpickr-calendar .flatpickr-day.endRange.startRange + .endRange:not(:nth-child(7n+1)) {\n  box-shadow: 10px 0 0 #7367f0;\n}\n.flatpickr-calendar .flatpickr-day.flatpickr-disabled, .flatpickr-calendar .flatpickr-day.prevMonthDay, .flatpickr-calendar .flatpickr-day.nextMonthDay {\n  color: #dae1e7;\n}\n[dir] .flatpickr-calendar .flatpickr-day:hover {\n  background: #f6f6f6;\n}\n.flatpickr-calendar:after, .flatpickr-calendar:before {\n  display: none;\n}\n.flatpickr-calendar .flatpickr-months .flatpickr-prev-month,\n.flatpickr-calendar .flatpickr-months .flatpickr-next-month {\n  top: -5px;\n}\n.flatpickr-calendar .flatpickr-months .flatpickr-prev-month:hover i, .flatpickr-calendar .flatpickr-months .flatpickr-prev-month:hover svg,\n.flatpickr-calendar .flatpickr-months .flatpickr-next-month:hover i,\n.flatpickr-calendar .flatpickr-months .flatpickr-next-month:hover svg {\n  fill: #7367f0;\n}\n.flatpickr-calendar .flatpickr-current-month span.cur-month {\n  font-weight: 300;\n}\n.flatpickr-calendar.open {\n  z-index: 1051;\n}\n.flatpickr-calendar.hasTime.open .flatpickr-time {\n  height: auto;\n}\n[dir] .flatpickr-time input:hover, [dir] .flatpickr-time .flatpickr-am-pm:hover, [dir] .flatpickr-time input:focus, [dir] .flatpickr-time .flatpickr-am-pm:focus {\n  background: #fff;\n}\n[dir] .dark-layout .flatpickr-calendar {\n  background: #161d31;\n  border-color: #161d31;\n  box-shadow: none;\n}\n.dark-layout .flatpickr-calendar .flatpickr-months i,\n.dark-layout .flatpickr-calendar .flatpickr-months svg {\n  fill: #b4b7bd;\n}\n.dark-layout .flatpickr-calendar .flatpickr-month {\n  color: #b4b7bd;\n}\n[dir=ltr] .dark-layout .flatpickr-calendar .flatpickr-weekwrapper .flatpickr-weeks {\n  box-shadow: 1px 0 0 #3b4253;\n}\n[dir=rtl] .dark-layout .flatpickr-calendar .flatpickr-weekwrapper .flatpickr-weeks {\n  box-shadow: -1px 0 0 #3b4253;\n}\n.dark-layout .flatpickr-calendar .flatpickr-weekday {\n  color: #b4b7bd;\n}\n.dark-layout .flatpickr-calendar .flatpickr-day, .dark-layout .flatpickr-calendar .flatpickr-day.today:hover {\n  color: #b4b7bd;\n}\n.dark-layout .flatpickr-calendar .flatpickr-day.selected {\n  color: #fff;\n}\n.dark-layout .flatpickr-calendar .flatpickr-day.prevMonthDay, .dark-layout .flatpickr-calendar .flatpickr-day.nextMonthDay, .dark-layout .flatpickr-calendar .flatpickr-day.flatpickr-disabled {\n  color: #4e5154 !important;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-day.inRange, [dir] .dark-layout .flatpickr-calendar .flatpickr-day.inRange:hover {\n  background: #283046;\n  border-color: #283046;\n}\n[dir=ltr] .dark-layout .flatpickr-calendar .flatpickr-day.inRange, [dir=ltr] .dark-layout .flatpickr-calendar .flatpickr-day.inRange:hover {\n  box-shadow: -5px 0 0 #283046, 5px 0 0 #283046;\n}\n[dir=rtl] .dark-layout .flatpickr-calendar .flatpickr-day.inRange, [dir=rtl] .dark-layout .flatpickr-calendar .flatpickr-day.inRange:hover {\n  box-shadow: 5px 0 0 #283046, -5px 0 0 #283046;\n}\n.dark-layout .flatpickr-calendar .flatpickr-day:hover:not(.selected):not(.today):not(.startRange):not(.endRange) {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-day:hover:not(.selected):not(.today):not(.startRange):not(.endRange) {\n  border-color: #283046;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-days .flatpickr-day:hover:not(.selected):not(.today):not(.startRange):not(.endRange), [dir] .dark-layout .flatpickr-calendar .flatpickr-days .flatpickr-day:focus:not(.selected):not(.today):not(.startRange):not(.endRange) {\n  background: #283046;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-time {\n  border-color: #161d31 !important;\n}\n.dark-layout .flatpickr-calendar .flatpickr-time .numInput,\n.dark-layout .flatpickr-calendar .flatpickr-time .flatpickr-am-pm {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-time .numInput:hover, [dir] .dark-layout .flatpickr-calendar .flatpickr-time .flatpickr-am-pm:hover {\n  background: #161d31;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-time .arrowUp:after {\n  border-bottom-color: #b4b7bd;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-time .arrowDown:after {\n  border-top-color: #b4b7bd;\n}\n[dir] .dark-layout .flatpickr-time input:hover, [dir] .dark-layout .flatpickr-time .flatpickr-am-pm:hover, [dir] .dark-layout .flatpickr-time input:focus, [dir] .dark-layout .flatpickr-time .flatpickr-am-pm:focus {\n  background: #161d31;\n}\n.flatpickr-input[readonly],\n.flatpickr-input ~ .form-control[readonly],\n.flatpickr-human-friendly[readonly] {\n  opacity: 1 !important;\n}\n[dir] .flatpickr-input[readonly], [dir] .flatpickr-input ~ .form-control[readonly], [dir] .flatpickr-human-friendly[readonly] {\n  background-color: inherit;\n}\n[dir] .flatpickr-weekdays {\n  margin-top: 8px;\n}\n.flatpickr-current-month .flatpickr-monthDropdown-months {\n  -webkit-appearance: none;\n}\n.flatpickr-current-month .flatpickr-monthDropdown-months,\n.flatpickr-current-month .numInputWrapper {\n  font-size: 1.1rem;\n  transition: all 0.15s ease-out;\n}\n[dir] .flatpickr-current-month .flatpickr-monthDropdown-months, [dir] .flatpickr-current-month .numInputWrapper {\n  border-radius: 4px;\n  padding: 2px;\n}\n.flatpickr-current-month .flatpickr-monthDropdown-months span,\n.flatpickr-current-month .numInputWrapper span {\n  display: none;\n}\nhtml[dir=rtl] .flatpickr-calendar .flatpickr-prev-month svg,\nhtml[dir=rtl] .flatpickr-calendar .flatpickr-next-month svg {\n  transform: rotate(180deg);\n}\n.invoice-add-wrapper .add-new-client-header {\n  color: #28c76f;\n}\n[dir] .invoice-add-wrapper .add-new-client-header {\n  padding: 7px 20px;\n}\n[dir] .invoice-add-wrapper .add-new-client-header:hover {\n  background-color: rgba(40, 199, 111, 0.12);\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/CalendarAppointmentEdit.vue?vue&type=style&index=0&id=d34679c6&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/calendar/CalendarAppointmentEdit.vue?vue&type=style&index=0&id=d34679c6&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/CalendarAppointmentEdit.vue?vue&type=style&index=1&id=d34679c6&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/calendar/CalendarAppointmentEdit.vue?vue&type=style&index=1&id=d34679c6&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../../../../../../node_modules/css-loader/dist/cjs.js!flatpickr/dist/flatpickr.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/flatpickr/dist/flatpickr.css");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);
// Module
exports.push([module.i, "/**\n    Support for SASS is deprecated as of v3.18.\n\n    The files remain here if your build is dependent on them\n    but they will not receive updates in future releases. All\n    SASS variables have been translated into CSS variables, so\n    migration should be quite simple if you'd like to move over.\n\n    In v4, these files will be removed.\n */\n.v-select {\n  position: relative;\n  font-family: inherit;\n}\n.v-select,\n.v-select * {\n  box-sizing: border-box;\n}\n\n/* KeyFrames */\n@-webkit-keyframes vSelectSpinner-ltr {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@-webkit-keyframes vSelectSpinner-rtl {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(-360deg);\n}\n}\n@keyframes vSelectSpinner-ltr {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes vSelectSpinner-rtl {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(-360deg);\n}\n}\n/* Dropdown Default Transition */\n.vs__fade-enter-active,\n.vs__fade-leave-active {\n  pointer-events: none;\n  transition: opacity 0.15s cubic-bezier(1, 0.5, 0.8, 1);\n}\n.vs__fade-enter,\n.vs__fade-leave-to {\n  opacity: 0;\n}\n\n/** Component States */\n/*\n * Disabled\n *\n * When the component is disabled, all interaction\n * should be prevented. Here we modify the bg color,\n * and change the cursor displayed on the interactive\n * components.\n */\n[dir] .vs--disabled .vs__dropdown-toggle, [dir] .vs--disabled .vs__clear, [dir] .vs--disabled .vs__search, [dir] .vs--disabled .vs__selected, [dir] .vs--disabled .vs__open-indicator {\n  cursor: not-allowed;\n  background-color: #f8f8f8;\n}\n\n/*\n *  RTL - Right to Left Support\n *\n *  Because we're using a flexbox layout, the `dir=\"rtl\"`\n *  HTML attribute does most of the work for us by\n *  rearranging the child elements visually.\n */\n.v-select[dir=rtl] .vs__actions {\n  padding: 0 3px 0 6px;\n}\n.v-select[dir=rtl] .vs__clear {\n  margin-left: 6px;\n  margin-right: 0;\n}\n.v-select[dir=rtl] .vs__deselect {\n  margin-left: 0;\n  margin-right: 2px;\n}\n.v-select[dir=rtl] .vs__dropdown-menu {\n  text-align: right;\n}\n\n/**\n    Dropdown Toggle\n\n    The dropdown toggle is the primary wrapper of the component. It\n    has two direct descendants: .vs__selected-options, and .vs__actions.\n\n    .vs__selected-options holds the .vs__selected's as well as the\n    main search input.\n\n    .vs__actions holds the clear button and dropdown toggle.\n */\n.vs__dropdown-toggle {\n  appearance: none;\n  display: flex;\n  white-space: normal;\n}\n[dir] .vs__dropdown-toggle {\n  padding: 0 0 4px 0;\n  background: none;\n  border: 1px solid #d8d6de;\n  border-radius: 0.357rem;\n}\n.vs__selected-options {\n  display: flex;\n  flex-basis: 100%;\n  flex-grow: 1;\n  flex-wrap: wrap;\n  position: relative;\n}\n[dir] .vs__selected-options {\n  padding: 0 2px;\n}\n.vs__actions {\n  display: flex;\n  align-items: center;\n}\n[dir=ltr] .vs__actions {\n  padding: 4px 6px 0 3px;\n}\n[dir=rtl] .vs__actions {\n  padding: 4px 3px 0 6px;\n}\n\n/* Dropdown Toggle States */\n[dir] .vs--searchable .vs__dropdown-toggle {\n  cursor: text;\n}\n[dir] .vs--unsearchable .vs__dropdown-toggle {\n  cursor: pointer;\n}\n[dir] .vs--open .vs__dropdown-toggle {\n  border-bottom-color: transparent;\n}\n[dir=ltr] .vs--open .vs__dropdown-toggle {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n[dir=rtl] .vs--open .vs__dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.vs__open-indicator {\n  fill: rgba(60, 60, 60, 0.5);\n  transition: transform 150ms cubic-bezier(1, -0.115, 0.975, 0.855);\n}\n[dir] .vs__open-indicator {\n  transform: scale(1);\n  transition-timing-function: cubic-bezier(1, -0.115, 0.975, 0.855);\n}\n[dir=ltr] .vs--open .vs__open-indicator {\n  transform: rotate(180deg) scale(1);\n}\n[dir=rtl] .vs--open .vs__open-indicator {\n  transform: rotate(-180deg) scale(1);\n}\n.vs--loading .vs__open-indicator {\n  opacity: 0;\n}\n\n/* Clear Button */\n.vs__clear {\n  fill: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__clear {\n  padding: 0;\n  border: 0;\n  background-color: transparent;\n  cursor: pointer;\n}\n[dir=ltr] .vs__clear {\n  margin-right: 8px;\n}\n[dir=rtl] .vs__clear {\n  margin-left: 8px;\n}\n\n/* Dropdown Menu */\n.vs__dropdown-menu {\n  display: block;\n  box-sizing: border-box;\n  position: absolute;\n  top: calc(100% - 1px);\n  z-index: 1000;\n  width: 100%;\n  max-height: 350px;\n  min-width: 160px;\n  overflow-y: auto;\n  list-style: none;\n}\n[dir] .vs__dropdown-menu {\n  padding: 5px 0;\n  margin: 0;\n  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.1);\n  border: 1px solid #d8d6de;\n  border-top-style: none;\n  border-radius: 0 0 0.357rem 0.357rem;\n  background: #fff;\n}\n[dir=ltr] .vs__dropdown-menu {\n  left: 0;\n  text-align: left;\n}\n[dir=rtl] .vs__dropdown-menu {\n  right: 0;\n  text-align: right;\n}\n[dir] .vs__no-options {\n  text-align: center;\n}\n\n/* List Items */\n.vs__dropdown-option {\n  line-height: 1.42857143;\n  /* Normalize line height */\n  display: block;\n  color: #333;\n  /* Overrides most CSS frameworks */\n  white-space: nowrap;\n}\n[dir] .vs__dropdown-option {\n  padding: 3px 20px;\n  clear: both;\n  cursor: pointer;\n}\n.vs__dropdown-option--highlight {\n  color: #7367f0 !important;\n}\n[dir] .vs__dropdown-option--highlight {\n  background: rgba(115, 103, 240, 0.12);\n}\n.vs__dropdown-option--deselect {\n  color: #fff;\n}\n[dir] .vs__dropdown-option--deselect {\n  background: #fb5858;\n}\n.vs__dropdown-option--disabled {\n  color: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__dropdown-option--disabled {\n  background: inherit;\n  cursor: inherit;\n}\n\n/* Selected Tags */\n.vs__selected {\n  display: flex;\n  align-items: center;\n  color: #333;\n  line-height: 1.8;\n  z-index: 0;\n}\n[dir] .vs__selected {\n  background-color: #7367f0;\n  border: 0 solid rgba(60, 60, 60, 0.26);\n  border-radius: 0.357rem;\n  margin: 4px 2px 0px 2px;\n  padding: 0 0.25em;\n}\n.vs__deselect {\n  display: inline-flex;\n  appearance: none;\n  fill: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__deselect {\n  padding: 0;\n  border: 0;\n  cursor: pointer;\n  background: none;\n  text-shadow: 0 1px 0 #fff;\n}\n[dir=ltr] .vs__deselect {\n  margin-left: 4px;\n}\n[dir=rtl] .vs__deselect {\n  margin-right: 4px;\n}\n\n/* States */\n[dir] .vs--single .vs__selected {\n  background-color: transparent;\n  border-color: transparent;\n}\n.vs--single.vs--open .vs__selected, .vs--single.vs--loading .vs__selected {\n  position: absolute;\n  opacity: 0.4;\n}\n.vs--single.vs--searching .vs__selected {\n  display: none;\n}\n\n/* Search Input */\n/**\n * Super weird bug... If this declaration is grouped\n * below, the cancel button will still appear in chrome.\n * If it's up here on it's own, it'll hide it.\n */\n.vs__search::-webkit-search-cancel-button {\n  display: none;\n}\n.vs__search::-webkit-search-decoration,\n.vs__search::-webkit-search-results-button,\n.vs__search::-webkit-search-results-decoration,\n.vs__search::-ms-clear {\n  display: none;\n}\n.vs__search,\n.vs__search:focus {\n  appearance: none;\n  line-height: 1.8;\n  font-size: 1em;\n  outline: none;\n  width: 0;\n  max-width: 100%;\n  flex-grow: 1;\n  z-index: 1;\n}\n[dir] .vs__search, [dir] .vs__search:focus {\n  border: 1px solid transparent;\n  margin: 4px 0 0 0;\n  padding: 0 7px;\n  background: none;\n  box-shadow: none;\n}\n[dir=ltr] .vs__search, [dir=ltr] .vs__search:focus {\n  border-left: none;\n}\n[dir=rtl] .vs__search, [dir=rtl] .vs__search:focus {\n  border-right: none;\n}\n.vs__search::placeholder {\n  color: #6e6b7b;\n}\n\n/**\n    States\n */\n.vs--unsearchable .vs__search {\n  opacity: 1;\n}\n[dir] .vs--unsearchable:not(.vs--disabled) .vs__search {\n  cursor: pointer;\n}\n.vs--single.vs--searching:not(.vs--open):not(.vs--loading) .vs__search {\n  opacity: 0.2;\n}\n\n/* Loading Spinner */\n.vs__spinner {\n  align-self: center;\n  opacity: 0;\n  font-size: 5px;\n  text-indent: -9999em;\n  overflow: hidden;\n  transition: opacity 0.1s;\n}\n[dir] .vs__spinner {\n  border-top: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-bottom: 0.9em solid rgba(100, 100, 100, 0.1);\n  transform: translateZ(0);\n}\n[dir=ltr] .vs__spinner {\n  border-right: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-left: 0.9em solid rgba(60, 60, 60, 0.45);\n  animation:  vSelectSpinner-ltr 1.1s infinite linear;\n}\n[dir=rtl] .vs__spinner {\n  border-left: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-right: 0.9em solid rgba(60, 60, 60, 0.45);\n  animation:  vSelectSpinner-rtl 1.1s infinite linear;\n}\n.vs__spinner,\n.vs__spinner:after {\n  width: 5em;\n  height: 5em;\n}\n[dir] .vs__spinner, [dir] .vs__spinner:after {\n  border-radius: 50%;\n}\n\n/* Loading Spinner States */\n.vs--loading .vs__spinner {\n  opacity: 1;\n}\n.vs__open-indicator {\n  fill: none;\n}\n[dir] .vs__open-indicator {\n  margin-top: 0.15rem;\n}\n.vs__dropdown-toggle {\n  transition: all 0.25s ease-in-out;\n}\n[dir] .vs__dropdown-toggle {\n  padding: 0.59px 0 4px 0;\n}\n[dir=ltr] .vs--single .vs__dropdown-toggle {\n  padding-left: 6px;\n}\n[dir=rtl] .vs--single .vs__dropdown-toggle {\n  padding-right: 6px;\n}\n.vs__dropdown-option--disabled {\n  opacity: 0.5;\n}\n[dir] .vs__dropdown-option--disabled.vs__dropdown-option--selected {\n  background: #7367f0 !important;\n}\n.vs__dropdown-option {\n  color: #6e6b7b;\n}\n[dir] .vs__dropdown-option, [dir] .vs__no-options {\n  padding: 7px 20px;\n}\n.vs__dropdown-option--selected {\n  background-color: #7367f0;\n  color: #fff;\n  position: relative;\n}\n.vs__dropdown-option--selected::after {\n  content: \"\";\n  height: 1.1rem;\n  width: 1.1rem;\n  display: inline-block;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  right: 20px;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-check'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 1.1rem;\n}\n[dir=rtl] .vs__dropdown-option--selected::after {\n  left: 20px;\n  right: unset;\n}\n.vs__dropdown-option--selected.vs__dropdown-option--highlight {\n  color: #fff !important;\n  background-color: #7367f0 !important;\n}\n.vs__clear svg {\n  color: #6e6b7b;\n}\n.vs__selected {\n  color: #fff;\n}\n.v-select.vs--single .vs__selected {\n  color: #6e6b7b;\n  transition: transform 0.2s ease;\n}\n[dir] .v-select.vs--single .vs__selected {\n  margin-top: 5px;\n}\n[dir=ltr] .v-select.vs--single .vs__selected input {\n  padding-left: 0;\n}\n[dir=rtl] .v-select.vs--single .vs__selected input {\n  padding-right: 0;\n}\n[dir=ltr] .vs--single.vs--open .vs__selected {\n  transform: translateX(5px);\n}\n[dir=rtl] .vs--single.vs--open .vs__selected {\n  transform: translateX(-5px);\n}\n.vs__selected .vs__deselect {\n  color: inherit;\n}\n.v-select:not(.vs--single) .vs__selected {\n  font-size: 0.9rem;\n}\n[dir] .v-select:not(.vs--single) .vs__selected {\n  border-radius: 3px;\n  padding: 0 0.6em;\n}\n[dir=ltr] .v-select:not(.vs--single) .vs__selected {\n  margin: 5px 2px 2px 5px;\n}\n[dir=rtl] .v-select:not(.vs--single) .vs__selected {\n  margin: 5px 5px 2px 2px;\n}\n.v-select:not(.vs--single) .vs__deselect svg {\n  vertical-align: text-top;\n}\n[dir] .v-select:not(.vs--single) .vs__deselect svg {\n  transform: scale(0.8);\n}\n.vs__dropdown-menu {\n  top: calc(100% + 1rem);\n}\n[dir] .vs__dropdown-menu {\n  border: none;\n  border-radius: 6px;\n  padding: 0;\n}\n[dir] .vs--open .vs__dropdown-toggle {\n  border-color: #7367f0;\n  border-bottom-color: #7367f0;\n  box-shadow: 0 3px 10px 0 rgba(34, 41, 47, 0.1);\n}\n[dir=ltr] .vs--open .vs__dropdown-toggle {\n  border-bottom-left-radius: 0.357rem;\n  border-bottom-right-radius: 0.357rem;\n}\n[dir=rtl] .vs--open .vs__dropdown-toggle {\n  border-bottom-right-radius: 0.357rem;\n  border-bottom-left-radius: 0.357rem;\n}\n.select-size-lg .vs__selected {\n  font-size: 1rem !important;\n}\n[dir] .select-size-lg.vs--single.vs--open .vs__selected {\n  margin-top: 6px;\n}\n.select-size-lg .vs__dropdown-toggle,\n.select-size-lg .vs__selected {\n  font-size: 1.25rem;\n}\n[dir] .select-size-lg .vs__dropdown-toggle {\n  padding: 5px;\n}\n[dir] .select-size-lg .vs__dropdown-toggle input {\n  margin-top: 0;\n}\n.select-size-lg .vs__deselect svg {\n  vertical-align: middle !important;\n}\n[dir] .select-size-lg .vs__deselect svg {\n  transform: scale(1) !important;\n}\n[dir] .select-size-sm .vs__dropdown-toggle {\n  padding-bottom: 0;\n  padding: 1px;\n}\n[dir] .select-size-sm.vs--single .vs__dropdown-toggle {\n  padding: 2px;\n}\n.select-size-sm .vs__dropdown-toggle,\n.select-size-sm .vs__selected {\n  font-size: 0.9rem;\n}\n[dir] .select-size-sm .vs__actions {\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n.select-size-sm .vs__deselect svg {\n  vertical-align: middle !important;\n}\n[dir] .select-size-sm .vs__search {\n  margin-top: 0;\n}\n.select-size-sm.v-select .vs__selected {\n  font-size: 0.75rem;\n}\n[dir] .select-size-sm.v-select .vs__selected {\n  padding: 0 0.3rem;\n}\n[dir] .select-size-sm.v-select:not(.vs--single) .vs__selected {\n  margin: 4px 5px;\n}\n[dir] .select-size-sm.v-select.vs--single .vs__selected {\n  margin-top: 1px;\n}\n[dir] .select-size-sm.vs--single.vs--open .vs__selected {\n  margin-top: 4px;\n}\n.dark-layout .vs__dropdown-toggle {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .vs__dropdown-toggle {\n  background: #283046;\n  border-color: #404656;\n}\n.dark-layout .vs__selected-options input {\n  color: #b4b7bd;\n}\n.dark-layout .vs__selected-options input::placeholder {\n  color: #676d7d;\n}\n.dark-layout .vs__actions svg {\n  fill: #404656;\n}\n[dir] .dark-layout .vs__dropdown-menu {\n  background: #283046;\n}\n.dark-layout .vs__dropdown-menu li {\n  color: #b4b7bd;\n}\n.dark-layout .v-select:not(.vs--single) .vs__selected {\n  color: #7367f0;\n}\n[dir] .dark-layout .v-select:not(.vs--single) .vs__selected {\n  background-color: rgba(115, 103, 240, 0.12);\n}\n.dark-layout .v-select.vs--single .vs__selected {\n  color: #b4b7bd !important;\n}\n.dark-layout .vs--disabled .vs__dropdown-toggle,\n.dark-layout .vs--disabled .vs__clear,\n.dark-layout .vs--disabled .vs__search,\n.dark-layout .vs--disabled .vs__selected,\n.dark-layout .vs--disabled .vs__open-indicator {\n  opacity: 0.5;\n}\n[dir] .dark-layout .vs--disabled .vs__dropdown-toggle, [dir] .dark-layout .vs--disabled .vs__clear, [dir] .dark-layout .vs--disabled .vs__search, [dir] .dark-layout .vs--disabled .vs__selected, [dir] .dark-layout .vs--disabled .vs__open-indicator {\n  background-color: #283046;\n}\n.flatpickr-calendar .flatpickr-day {\n  color: #6e6b7b;\n}\n[dir] .flatpickr-calendar .flatpickr-day.today {\n  border-color: #7367f0;\n}\n.flatpickr-calendar .flatpickr-day.today:hover {\n  color: #6e6b7b;\n}\n[dir] .flatpickr-calendar .flatpickr-day.today:hover {\n  background: transparent;\n}\n.flatpickr-calendar .flatpickr-day.selected, .flatpickr-calendar .flatpickr-day.selected:hover {\n  color: #fff;\n}\n[dir] .flatpickr-calendar .flatpickr-day.selected, [dir] .flatpickr-calendar .flatpickr-day.selected:hover {\n  background: #7367f0;\n  border-color: #7367f0;\n}\n[dir] .flatpickr-calendar .flatpickr-day.inRange, [dir] .flatpickr-calendar .flatpickr-day.inRange:hover {\n  background: #f3f2fe;\n  border-color: #f3f2fe;\n}\n[dir=ltr] .flatpickr-calendar .flatpickr-day.inRange, [dir=ltr] .flatpickr-calendar .flatpickr-day.inRange:hover {\n  box-shadow: -5px 0 0 #f3f2fe, 5px 0 0 #f3f2fe;\n}\n[dir=rtl] .flatpickr-calendar .flatpickr-day.inRange, [dir=rtl] .flatpickr-calendar .flatpickr-day.inRange:hover {\n  box-shadow: 5px 0 0 #f3f2fe, -5px 0 0 #f3f2fe;\n}\n.flatpickr-calendar .flatpickr-day.startRange, .flatpickr-calendar .flatpickr-day.endRange, .flatpickr-calendar .flatpickr-day.startRange:hover, .flatpickr-calendar .flatpickr-day.endRange:hover {\n  color: #fff;\n}\n[dir] .flatpickr-calendar .flatpickr-day.startRange, [dir] .flatpickr-calendar .flatpickr-day.endRange, [dir] .flatpickr-calendar .flatpickr-day.startRange:hover, [dir] .flatpickr-calendar .flatpickr-day.endRange:hover {\n  background: #7367f0;\n  border-color: #7367f0;\n}\n[dir=ltr] .flatpickr-calendar .flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n+1)), [dir=ltr] .flatpickr-calendar .flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n+1)), [dir=ltr] .flatpickr-calendar .flatpickr-day.endRange.startRange + .endRange:not(:nth-child(7n+1)) {\n  box-shadow: -10px 0 0 #7367f0;\n}\n[dir=rtl] .flatpickr-calendar .flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n+1)), [dir=rtl] .flatpickr-calendar .flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n+1)), [dir=rtl] .flatpickr-calendar .flatpickr-day.endRange.startRange + .endRange:not(:nth-child(7n+1)) {\n  box-shadow: 10px 0 0 #7367f0;\n}\n.flatpickr-calendar .flatpickr-day.flatpickr-disabled, .flatpickr-calendar .flatpickr-day.prevMonthDay, .flatpickr-calendar .flatpickr-day.nextMonthDay {\n  color: #dae1e7;\n}\n[dir] .flatpickr-calendar .flatpickr-day:hover {\n  background: #f6f6f6;\n}\n.flatpickr-calendar:after, .flatpickr-calendar:before {\n  display: none;\n}\n.flatpickr-calendar .flatpickr-months .flatpickr-prev-month,\n.flatpickr-calendar .flatpickr-months .flatpickr-next-month {\n  top: -5px;\n}\n.flatpickr-calendar .flatpickr-months .flatpickr-prev-month:hover i, .flatpickr-calendar .flatpickr-months .flatpickr-prev-month:hover svg,\n.flatpickr-calendar .flatpickr-months .flatpickr-next-month:hover i,\n.flatpickr-calendar .flatpickr-months .flatpickr-next-month:hover svg {\n  fill: #7367f0;\n}\n.flatpickr-calendar .flatpickr-current-month span.cur-month {\n  font-weight: 300;\n}\n.flatpickr-calendar.open {\n  z-index: 1051;\n}\n.flatpickr-calendar.hasTime.open .flatpickr-time {\n  height: auto;\n}\n[dir] .flatpickr-time input:hover, [dir] .flatpickr-time .flatpickr-am-pm:hover, [dir] .flatpickr-time input:focus, [dir] .flatpickr-time .flatpickr-am-pm:focus {\n  background: #fff;\n}\n[dir] .dark-layout .flatpickr-calendar {\n  background: #161d31;\n  border-color: #161d31;\n  box-shadow: none;\n}\n.dark-layout .flatpickr-calendar .flatpickr-months i,\n.dark-layout .flatpickr-calendar .flatpickr-months svg {\n  fill: #b4b7bd;\n}\n.dark-layout .flatpickr-calendar .flatpickr-month {\n  color: #b4b7bd;\n}\n[dir=ltr] .dark-layout .flatpickr-calendar .flatpickr-weekwrapper .flatpickr-weeks {\n  box-shadow: 1px 0 0 #3b4253;\n}\n[dir=rtl] .dark-layout .flatpickr-calendar .flatpickr-weekwrapper .flatpickr-weeks {\n  box-shadow: -1px 0 0 #3b4253;\n}\n.dark-layout .flatpickr-calendar .flatpickr-weekday {\n  color: #b4b7bd;\n}\n.dark-layout .flatpickr-calendar .flatpickr-day, .dark-layout .flatpickr-calendar .flatpickr-day.today:hover {\n  color: #b4b7bd;\n}\n.dark-layout .flatpickr-calendar .flatpickr-day.selected {\n  color: #fff;\n}\n.dark-layout .flatpickr-calendar .flatpickr-day.prevMonthDay, .dark-layout .flatpickr-calendar .flatpickr-day.nextMonthDay, .dark-layout .flatpickr-calendar .flatpickr-day.flatpickr-disabled {\n  color: #4e5154 !important;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-day.inRange, [dir] .dark-layout .flatpickr-calendar .flatpickr-day.inRange:hover {\n  background: #283046;\n  border-color: #283046;\n}\n[dir=ltr] .dark-layout .flatpickr-calendar .flatpickr-day.inRange, [dir=ltr] .dark-layout .flatpickr-calendar .flatpickr-day.inRange:hover {\n  box-shadow: -5px 0 0 #283046, 5px 0 0 #283046;\n}\n[dir=rtl] .dark-layout .flatpickr-calendar .flatpickr-day.inRange, [dir=rtl] .dark-layout .flatpickr-calendar .flatpickr-day.inRange:hover {\n  box-shadow: 5px 0 0 #283046, -5px 0 0 #283046;\n}\n.dark-layout .flatpickr-calendar .flatpickr-day:hover:not(.selected):not(.today):not(.startRange):not(.endRange) {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-day:hover:not(.selected):not(.today):not(.startRange):not(.endRange) {\n  border-color: #283046;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-days .flatpickr-day:hover:not(.selected):not(.today):not(.startRange):not(.endRange), [dir] .dark-layout .flatpickr-calendar .flatpickr-days .flatpickr-day:focus:not(.selected):not(.today):not(.startRange):not(.endRange) {\n  background: #283046;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-time {\n  border-color: #161d31 !important;\n}\n.dark-layout .flatpickr-calendar .flatpickr-time .numInput,\n.dark-layout .flatpickr-calendar .flatpickr-time .flatpickr-am-pm {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-time .numInput:hover, [dir] .dark-layout .flatpickr-calendar .flatpickr-time .flatpickr-am-pm:hover {\n  background: #161d31;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-time .arrowUp:after {\n  border-bottom-color: #b4b7bd;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-time .arrowDown:after {\n  border-top-color: #b4b7bd;\n}\n[dir] .dark-layout .flatpickr-time input:hover, [dir] .dark-layout .flatpickr-time .flatpickr-am-pm:hover, [dir] .dark-layout .flatpickr-time input:focus, [dir] .dark-layout .flatpickr-time .flatpickr-am-pm:focus {\n  background: #161d31;\n}\n.flatpickr-input[readonly],\n.flatpickr-input ~ .form-control[readonly],\n.flatpickr-human-friendly[readonly] {\n  opacity: 1 !important;\n}\n[dir] .flatpickr-input[readonly], [dir] .flatpickr-input ~ .form-control[readonly], [dir] .flatpickr-human-friendly[readonly] {\n  background-color: inherit;\n}\n[dir] .flatpickr-weekdays {\n  margin-top: 8px;\n}\n.flatpickr-current-month .flatpickr-monthDropdown-months {\n  -webkit-appearance: none;\n}\n.flatpickr-current-month .flatpickr-monthDropdown-months,\n.flatpickr-current-month .numInputWrapper {\n  font-size: 1.1rem;\n  transition: all 0.15s ease-out;\n}\n[dir] .flatpickr-current-month .flatpickr-monthDropdown-months, [dir] .flatpickr-current-month .numInputWrapper {\n  border-radius: 4px;\n  padding: 2px;\n}\n.flatpickr-current-month .flatpickr-monthDropdown-months span,\n.flatpickr-current-month .numInputWrapper span {\n  display: none;\n}\nhtml[dir=rtl] .flatpickr-calendar .flatpickr-prev-month svg,\nhtml[dir=rtl] .flatpickr-calendar .flatpickr-next-month svg {\n  transform: rotate(180deg);\n}\n.invoice-add-wrapper .add-new-client-header {\n  color: #28c76f;\n}\n[dir] .invoice-add-wrapper .add-new-client-header {\n  padding: 7px 20px;\n}\n[dir] .invoice-add-wrapper .add-new-client-header:hover {\n  background-color: rgba(40, 199, 111, 0.12);\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/calendar-detail/AppointmentDetail.vue?vue&type=style&index=0&id=7f3fd6b3&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/calendar/calendar-detail/AppointmentDetail.vue?vue&type=style&index=0&id=7f3fd6b3&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".card-code[data-v-7f3fd6b3] {\n  overflow-y: auto;\n  height: 560px;\n  /* width */\n  /* Track */\n  /* Handle */\n  /* Handle on hover */\n}\n.card-code pre[class*=language-][data-v-7f3fd6b3] {\n  max-height: 350px;\n}\n[dir] .card-code pre[class*=language-][data-v-7f3fd6b3] {\n  margin: 0;\n  border-radius: 0.5rem;\n}\n.card-code[data-v-7f3fd6b3] ::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n[dir] .card-code[data-v-7f3fd6b3] ::-webkit-scrollbar {\n  background: #2d2d2d;\n  border-radius: 100%;\n}\n[dir] .dark-layout .card-code[data-v-7f3fd6b3] ::-webkit-scrollbar {\n  background-color: #161d31 !important;\n}\n[dir] .card-code[data-v-7f3fd6b3] ::-webkit-scrollbar-track {\n  background: transparent;\n}\n[dir] .card-code[data-v-7f3fd6b3] ::-webkit-scrollbar-thumb {\n  border-radius: 0.5rem;\n  background: rgba(241, 241, 241, 0.4);\n}\n.card-code[data-v-7f3fd6b3] ::-webkit-scrollbar-corner {\n  display: none;\n}\n[dir] .code-toggler[data-v-7f3fd6b3] {\n  border-bottom: 1px solid transparent;\n}\n[dir] .code-toggler[aria-expanded=false][data-v-7f3fd6b3] {\n  border-bottom-color: #7367f0;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/calendar-event-handler/CalendarEventHandler.vue?vue&type=style&index=0&id=16bc2672&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/calendar/calendar-event-handler/CalendarEventHandler.vue?vue&type=style&index=0&id=16bc2672&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../../../../../../../node_modules/css-loader/dist/cjs.js!flatpickr/dist/flatpickr.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/flatpickr/dist/flatpickr.css");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);
// Module
exports.push([module.i, "/**\n    Support for SASS is deprecated as of v3.18.\n\n    The files remain here if your build is dependent on them\n    but they will not receive updates in future releases. All\n    SASS variables have been translated into CSS variables, so\n    migration should be quite simple if you'd like to move over.\n\n    In v4, these files will be removed.\n */\n.v-select {\n  position: relative;\n  font-family: inherit;\n}\n.v-select,\n.v-select * {\n  box-sizing: border-box;\n}\n\n/* KeyFrames */\n@-webkit-keyframes vSelectSpinner-ltr {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@-webkit-keyframes vSelectSpinner-rtl {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(-360deg);\n}\n}\n@keyframes vSelectSpinner-ltr {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes vSelectSpinner-rtl {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(-360deg);\n}\n}\n/* Dropdown Default Transition */\n.vs__fade-enter-active,\n.vs__fade-leave-active {\n  pointer-events: none;\n  transition: opacity 0.15s cubic-bezier(1, 0.5, 0.8, 1);\n}\n.vs__fade-enter,\n.vs__fade-leave-to {\n  opacity: 0;\n}\n\n/** Component States */\n/*\n * Disabled\n *\n * When the component is disabled, all interaction\n * should be prevented. Here we modify the bg color,\n * and change the cursor displayed on the interactive\n * components.\n */\n[dir] .vs--disabled .vs__dropdown-toggle, [dir] .vs--disabled .vs__clear, [dir] .vs--disabled .vs__search, [dir] .vs--disabled .vs__selected, [dir] .vs--disabled .vs__open-indicator {\n  cursor: not-allowed;\n  background-color: #f8f8f8;\n}\n\n/*\n *  RTL - Right to Left Support\n *\n *  Because we're using a flexbox layout, the `dir=\"rtl\"`\n *  HTML attribute does most of the work for us by\n *  rearranging the child elements visually.\n */\n.v-select[dir=rtl] .vs__actions {\n  padding: 0 3px 0 6px;\n}\n.v-select[dir=rtl] .vs__clear {\n  margin-left: 6px;\n  margin-right: 0;\n}\n.v-select[dir=rtl] .vs__deselect {\n  margin-left: 0;\n  margin-right: 2px;\n}\n.v-select[dir=rtl] .vs__dropdown-menu {\n  text-align: right;\n}\n\n/**\n    Dropdown Toggle\n\n    The dropdown toggle is the primary wrapper of the component. It\n    has two direct descendants: .vs__selected-options, and .vs__actions.\n\n    .vs__selected-options holds the .vs__selected's as well as the\n    main search input.\n\n    .vs__actions holds the clear button and dropdown toggle.\n */\n.vs__dropdown-toggle {\n  appearance: none;\n  display: flex;\n  white-space: normal;\n}\n[dir] .vs__dropdown-toggle {\n  padding: 0 0 4px 0;\n  background: none;\n  border: 1px solid #d8d6de;\n  border-radius: 0.357rem;\n}\n.vs__selected-options {\n  display: flex;\n  flex-basis: 100%;\n  flex-grow: 1;\n  flex-wrap: wrap;\n  position: relative;\n}\n[dir] .vs__selected-options {\n  padding: 0 2px;\n}\n.vs__actions {\n  display: flex;\n  align-items: center;\n}\n[dir=ltr] .vs__actions {\n  padding: 4px 6px 0 3px;\n}\n[dir=rtl] .vs__actions {\n  padding: 4px 3px 0 6px;\n}\n\n/* Dropdown Toggle States */\n[dir] .vs--searchable .vs__dropdown-toggle {\n  cursor: text;\n}\n[dir] .vs--unsearchable .vs__dropdown-toggle {\n  cursor: pointer;\n}\n[dir] .vs--open .vs__dropdown-toggle {\n  border-bottom-color: transparent;\n}\n[dir=ltr] .vs--open .vs__dropdown-toggle {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n[dir=rtl] .vs--open .vs__dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.vs__open-indicator {\n  fill: rgba(60, 60, 60, 0.5);\n  transition: transform 150ms cubic-bezier(1, -0.115, 0.975, 0.855);\n}\n[dir] .vs__open-indicator {\n  transform: scale(1);\n  transition-timing-function: cubic-bezier(1, -0.115, 0.975, 0.855);\n}\n[dir=ltr] .vs--open .vs__open-indicator {\n  transform: rotate(180deg) scale(1);\n}\n[dir=rtl] .vs--open .vs__open-indicator {\n  transform: rotate(-180deg) scale(1);\n}\n.vs--loading .vs__open-indicator {\n  opacity: 0;\n}\n\n/* Clear Button */\n.vs__clear {\n  fill: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__clear {\n  padding: 0;\n  border: 0;\n  background-color: transparent;\n  cursor: pointer;\n}\n[dir=ltr] .vs__clear {\n  margin-right: 8px;\n}\n[dir=rtl] .vs__clear {\n  margin-left: 8px;\n}\n\n/* Dropdown Menu */\n.vs__dropdown-menu {\n  display: block;\n  box-sizing: border-box;\n  position: absolute;\n  top: calc(100% - 1px);\n  z-index: 1000;\n  width: 100%;\n  max-height: 350px;\n  min-width: 160px;\n  overflow-y: auto;\n  list-style: none;\n}\n[dir] .vs__dropdown-menu {\n  padding: 5px 0;\n  margin: 0;\n  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.1);\n  border: 1px solid #d8d6de;\n  border-top-style: none;\n  border-radius: 0 0 0.357rem 0.357rem;\n  background: #fff;\n}\n[dir=ltr] .vs__dropdown-menu {\n  left: 0;\n  text-align: left;\n}\n[dir=rtl] .vs__dropdown-menu {\n  right: 0;\n  text-align: right;\n}\n[dir] .vs__no-options {\n  text-align: center;\n}\n\n/* List Items */\n.vs__dropdown-option {\n  line-height: 1.42857143;\n  /* Normalize line height */\n  display: block;\n  color: #333;\n  /* Overrides most CSS frameworks */\n  white-space: nowrap;\n}\n[dir] .vs__dropdown-option {\n  padding: 3px 20px;\n  clear: both;\n  cursor: pointer;\n}\n.vs__dropdown-option--highlight {\n  color: #7367f0 !important;\n}\n[dir] .vs__dropdown-option--highlight {\n  background: rgba(115, 103, 240, 0.12);\n}\n.vs__dropdown-option--deselect {\n  color: #fff;\n}\n[dir] .vs__dropdown-option--deselect {\n  background: #fb5858;\n}\n.vs__dropdown-option--disabled {\n  color: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__dropdown-option--disabled {\n  background: inherit;\n  cursor: inherit;\n}\n\n/* Selected Tags */\n.vs__selected {\n  display: flex;\n  align-items: center;\n  color: #333;\n  line-height: 1.8;\n  z-index: 0;\n}\n[dir] .vs__selected {\n  background-color: #7367f0;\n  border: 0 solid rgba(60, 60, 60, 0.26);\n  border-radius: 0.357rem;\n  margin: 4px 2px 0px 2px;\n  padding: 0 0.25em;\n}\n.vs__deselect {\n  display: inline-flex;\n  appearance: none;\n  fill: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__deselect {\n  padding: 0;\n  border: 0;\n  cursor: pointer;\n  background: none;\n  text-shadow: 0 1px 0 #fff;\n}\n[dir=ltr] .vs__deselect {\n  margin-left: 4px;\n}\n[dir=rtl] .vs__deselect {\n  margin-right: 4px;\n}\n\n/* States */\n[dir] .vs--single .vs__selected {\n  background-color: transparent;\n  border-color: transparent;\n}\n.vs--single.vs--open .vs__selected, .vs--single.vs--loading .vs__selected {\n  position: absolute;\n  opacity: 0.4;\n}\n.vs--single.vs--searching .vs__selected {\n  display: none;\n}\n\n/* Search Input */\n/**\n * Super weird bug... If this declaration is grouped\n * below, the cancel button will still appear in chrome.\n * If it's up here on it's own, it'll hide it.\n */\n.vs__search::-webkit-search-cancel-button {\n  display: none;\n}\n.vs__search::-webkit-search-decoration,\n.vs__search::-webkit-search-results-button,\n.vs__search::-webkit-search-results-decoration,\n.vs__search::-ms-clear {\n  display: none;\n}\n.vs__search,\n.vs__search:focus {\n  appearance: none;\n  line-height: 1.8;\n  font-size: 1em;\n  outline: none;\n  width: 0;\n  max-width: 100%;\n  flex-grow: 1;\n  z-index: 1;\n}\n[dir] .vs__search, [dir] .vs__search:focus {\n  border: 1px solid transparent;\n  margin: 4px 0 0 0;\n  padding: 0 7px;\n  background: none;\n  box-shadow: none;\n}\n[dir=ltr] .vs__search, [dir=ltr] .vs__search:focus {\n  border-left: none;\n}\n[dir=rtl] .vs__search, [dir=rtl] .vs__search:focus {\n  border-right: none;\n}\n.vs__search::placeholder {\n  color: #6e6b7b;\n}\n\n/**\n    States\n */\n.vs--unsearchable .vs__search {\n  opacity: 1;\n}\n[dir] .vs--unsearchable:not(.vs--disabled) .vs__search {\n  cursor: pointer;\n}\n.vs--single.vs--searching:not(.vs--open):not(.vs--loading) .vs__search {\n  opacity: 0.2;\n}\n\n/* Loading Spinner */\n.vs__spinner {\n  align-self: center;\n  opacity: 0;\n  font-size: 5px;\n  text-indent: -9999em;\n  overflow: hidden;\n  transition: opacity 0.1s;\n}\n[dir] .vs__spinner {\n  border-top: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-bottom: 0.9em solid rgba(100, 100, 100, 0.1);\n  transform: translateZ(0);\n}\n[dir=ltr] .vs__spinner {\n  border-right: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-left: 0.9em solid rgba(60, 60, 60, 0.45);\n  animation:  vSelectSpinner-ltr 1.1s infinite linear;\n}\n[dir=rtl] .vs__spinner {\n  border-left: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-right: 0.9em solid rgba(60, 60, 60, 0.45);\n  animation:  vSelectSpinner-rtl 1.1s infinite linear;\n}\n.vs__spinner,\n.vs__spinner:after {\n  width: 5em;\n  height: 5em;\n}\n[dir] .vs__spinner, [dir] .vs__spinner:after {\n  border-radius: 50%;\n}\n\n/* Loading Spinner States */\n.vs--loading .vs__spinner {\n  opacity: 1;\n}\n.vs__open-indicator {\n  fill: none;\n}\n[dir] .vs__open-indicator {\n  margin-top: 0.15rem;\n}\n.vs__dropdown-toggle {\n  transition: all 0.25s ease-in-out;\n}\n[dir] .vs__dropdown-toggle {\n  padding: 0.59px 0 4px 0;\n}\n[dir=ltr] .vs--single .vs__dropdown-toggle {\n  padding-left: 6px;\n}\n[dir=rtl] .vs--single .vs__dropdown-toggle {\n  padding-right: 6px;\n}\n.vs__dropdown-option--disabled {\n  opacity: 0.5;\n}\n[dir] .vs__dropdown-option--disabled.vs__dropdown-option--selected {\n  background: #7367f0 !important;\n}\n.vs__dropdown-option {\n  color: #6e6b7b;\n}\n[dir] .vs__dropdown-option, [dir] .vs__no-options {\n  padding: 7px 20px;\n}\n.vs__dropdown-option--selected {\n  background-color: #7367f0;\n  color: #fff;\n  position: relative;\n}\n.vs__dropdown-option--selected::after {\n  content: \"\";\n  height: 1.1rem;\n  width: 1.1rem;\n  display: inline-block;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  right: 20px;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-check'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 1.1rem;\n}\n[dir=rtl] .vs__dropdown-option--selected::after {\n  left: 20px;\n  right: unset;\n}\n.vs__dropdown-option--selected.vs__dropdown-option--highlight {\n  color: #fff !important;\n  background-color: #7367f0 !important;\n}\n.vs__clear svg {\n  color: #6e6b7b;\n}\n.vs__selected {\n  color: #fff;\n}\n.v-select.vs--single .vs__selected {\n  color: #6e6b7b;\n  transition: transform 0.2s ease;\n}\n[dir] .v-select.vs--single .vs__selected {\n  margin-top: 5px;\n}\n[dir=ltr] .v-select.vs--single .vs__selected input {\n  padding-left: 0;\n}\n[dir=rtl] .v-select.vs--single .vs__selected input {\n  padding-right: 0;\n}\n[dir=ltr] .vs--single.vs--open .vs__selected {\n  transform: translateX(5px);\n}\n[dir=rtl] .vs--single.vs--open .vs__selected {\n  transform: translateX(-5px);\n}\n.vs__selected .vs__deselect {\n  color: inherit;\n}\n.v-select:not(.vs--single) .vs__selected {\n  font-size: 0.9rem;\n}\n[dir] .v-select:not(.vs--single) .vs__selected {\n  border-radius: 3px;\n  padding: 0 0.6em;\n}\n[dir=ltr] .v-select:not(.vs--single) .vs__selected {\n  margin: 5px 2px 2px 5px;\n}\n[dir=rtl] .v-select:not(.vs--single) .vs__selected {\n  margin: 5px 5px 2px 2px;\n}\n.v-select:not(.vs--single) .vs__deselect svg {\n  vertical-align: text-top;\n}\n[dir] .v-select:not(.vs--single) .vs__deselect svg {\n  transform: scale(0.8);\n}\n.vs__dropdown-menu {\n  top: calc(100% + 1rem);\n}\n[dir] .vs__dropdown-menu {\n  border: none;\n  border-radius: 6px;\n  padding: 0;\n}\n[dir] .vs--open .vs__dropdown-toggle {\n  border-color: #7367f0;\n  border-bottom-color: #7367f0;\n  box-shadow: 0 3px 10px 0 rgba(34, 41, 47, 0.1);\n}\n[dir=ltr] .vs--open .vs__dropdown-toggle {\n  border-bottom-left-radius: 0.357rem;\n  border-bottom-right-radius: 0.357rem;\n}\n[dir=rtl] .vs--open .vs__dropdown-toggle {\n  border-bottom-right-radius: 0.357rem;\n  border-bottom-left-radius: 0.357rem;\n}\n.select-size-lg .vs__selected {\n  font-size: 1rem !important;\n}\n[dir] .select-size-lg.vs--single.vs--open .vs__selected {\n  margin-top: 6px;\n}\n.select-size-lg .vs__dropdown-toggle,\n.select-size-lg .vs__selected {\n  font-size: 1.25rem;\n}\n[dir] .select-size-lg .vs__dropdown-toggle {\n  padding: 5px;\n}\n[dir] .select-size-lg .vs__dropdown-toggle input {\n  margin-top: 0;\n}\n.select-size-lg .vs__deselect svg {\n  vertical-align: middle !important;\n}\n[dir] .select-size-lg .vs__deselect svg {\n  transform: scale(1) !important;\n}\n[dir] .select-size-sm .vs__dropdown-toggle {\n  padding-bottom: 0;\n  padding: 1px;\n}\n[dir] .select-size-sm.vs--single .vs__dropdown-toggle {\n  padding: 2px;\n}\n.select-size-sm .vs__dropdown-toggle,\n.select-size-sm .vs__selected {\n  font-size: 0.9rem;\n}\n[dir] .select-size-sm .vs__actions {\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n.select-size-sm .vs__deselect svg {\n  vertical-align: middle !important;\n}\n[dir] .select-size-sm .vs__search {\n  margin-top: 0;\n}\n.select-size-sm.v-select .vs__selected {\n  font-size: 0.75rem;\n}\n[dir] .select-size-sm.v-select .vs__selected {\n  padding: 0 0.3rem;\n}\n[dir] .select-size-sm.v-select:not(.vs--single) .vs__selected {\n  margin: 4px 5px;\n}\n[dir] .select-size-sm.v-select.vs--single .vs__selected {\n  margin-top: 1px;\n}\n[dir] .select-size-sm.vs--single.vs--open .vs__selected {\n  margin-top: 4px;\n}\n.dark-layout .vs__dropdown-toggle {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .vs__dropdown-toggle {\n  background: #283046;\n  border-color: #404656;\n}\n.dark-layout .vs__selected-options input {\n  color: #b4b7bd;\n}\n.dark-layout .vs__selected-options input::placeholder {\n  color: #676d7d;\n}\n.dark-layout .vs__actions svg {\n  fill: #404656;\n}\n[dir] .dark-layout .vs__dropdown-menu {\n  background: #283046;\n}\n.dark-layout .vs__dropdown-menu li {\n  color: #b4b7bd;\n}\n.dark-layout .v-select:not(.vs--single) .vs__selected {\n  color: #7367f0;\n}\n[dir] .dark-layout .v-select:not(.vs--single) .vs__selected {\n  background-color: rgba(115, 103, 240, 0.12);\n}\n.dark-layout .v-select.vs--single .vs__selected {\n  color: #b4b7bd !important;\n}\n.dark-layout .vs--disabled .vs__dropdown-toggle,\n.dark-layout .vs--disabled .vs__clear,\n.dark-layout .vs--disabled .vs__search,\n.dark-layout .vs--disabled .vs__selected,\n.dark-layout .vs--disabled .vs__open-indicator {\n  opacity: 0.5;\n}\n[dir] .dark-layout .vs--disabled .vs__dropdown-toggle, [dir] .dark-layout .vs--disabled .vs__clear, [dir] .dark-layout .vs--disabled .vs__search, [dir] .dark-layout .vs--disabled .vs__selected, [dir] .dark-layout .vs--disabled .vs__open-indicator {\n  background-color: #283046;\n}\n.flatpickr-calendar .flatpickr-day {\n  color: #6e6b7b;\n}\n[dir] .flatpickr-calendar .flatpickr-day.today {\n  border-color: #7367f0;\n}\n.flatpickr-calendar .flatpickr-day.today:hover {\n  color: #6e6b7b;\n}\n[dir] .flatpickr-calendar .flatpickr-day.today:hover {\n  background: transparent;\n}\n.flatpickr-calendar .flatpickr-day.selected, .flatpickr-calendar .flatpickr-day.selected:hover {\n  color: #fff;\n}\n[dir] .flatpickr-calendar .flatpickr-day.selected, [dir] .flatpickr-calendar .flatpickr-day.selected:hover {\n  background: #7367f0;\n  border-color: #7367f0;\n}\n[dir] .flatpickr-calendar .flatpickr-day.inRange, [dir] .flatpickr-calendar .flatpickr-day.inRange:hover {\n  background: #f3f2fe;\n  border-color: #f3f2fe;\n}\n[dir=ltr] .flatpickr-calendar .flatpickr-day.inRange, [dir=ltr] .flatpickr-calendar .flatpickr-day.inRange:hover {\n  box-shadow: -5px 0 0 #f3f2fe, 5px 0 0 #f3f2fe;\n}\n[dir=rtl] .flatpickr-calendar .flatpickr-day.inRange, [dir=rtl] .flatpickr-calendar .flatpickr-day.inRange:hover {\n  box-shadow: 5px 0 0 #f3f2fe, -5px 0 0 #f3f2fe;\n}\n.flatpickr-calendar .flatpickr-day.startRange, .flatpickr-calendar .flatpickr-day.endRange, .flatpickr-calendar .flatpickr-day.startRange:hover, .flatpickr-calendar .flatpickr-day.endRange:hover {\n  color: #fff;\n}\n[dir] .flatpickr-calendar .flatpickr-day.startRange, [dir] .flatpickr-calendar .flatpickr-day.endRange, [dir] .flatpickr-calendar .flatpickr-day.startRange:hover, [dir] .flatpickr-calendar .flatpickr-day.endRange:hover {\n  background: #7367f0;\n  border-color: #7367f0;\n}\n[dir=ltr] .flatpickr-calendar .flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n+1)), [dir=ltr] .flatpickr-calendar .flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n+1)), [dir=ltr] .flatpickr-calendar .flatpickr-day.endRange.startRange + .endRange:not(:nth-child(7n+1)) {\n  box-shadow: -10px 0 0 #7367f0;\n}\n[dir=rtl] .flatpickr-calendar .flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n+1)), [dir=rtl] .flatpickr-calendar .flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n+1)), [dir=rtl] .flatpickr-calendar .flatpickr-day.endRange.startRange + .endRange:not(:nth-child(7n+1)) {\n  box-shadow: 10px 0 0 #7367f0;\n}\n.flatpickr-calendar .flatpickr-day.flatpickr-disabled, .flatpickr-calendar .flatpickr-day.prevMonthDay, .flatpickr-calendar .flatpickr-day.nextMonthDay {\n  color: #dae1e7;\n}\n[dir] .flatpickr-calendar .flatpickr-day:hover {\n  background: #f6f6f6;\n}\n.flatpickr-calendar:after, .flatpickr-calendar:before {\n  display: none;\n}\n.flatpickr-calendar .flatpickr-months .flatpickr-prev-month,\n.flatpickr-calendar .flatpickr-months .flatpickr-next-month {\n  top: -5px;\n}\n.flatpickr-calendar .flatpickr-months .flatpickr-prev-month:hover i, .flatpickr-calendar .flatpickr-months .flatpickr-prev-month:hover svg,\n.flatpickr-calendar .flatpickr-months .flatpickr-next-month:hover i,\n.flatpickr-calendar .flatpickr-months .flatpickr-next-month:hover svg {\n  fill: #7367f0;\n}\n.flatpickr-calendar .flatpickr-current-month span.cur-month {\n  font-weight: 300;\n}\n.flatpickr-calendar.open {\n  z-index: 1051;\n}\n.flatpickr-calendar.hasTime.open .flatpickr-time {\n  height: auto;\n}\n[dir] .flatpickr-time input:hover, [dir] .flatpickr-time .flatpickr-am-pm:hover, [dir] .flatpickr-time input:focus, [dir] .flatpickr-time .flatpickr-am-pm:focus {\n  background: #fff;\n}\n[dir] .dark-layout .flatpickr-calendar {\n  background: #161d31;\n  border-color: #161d31;\n  box-shadow: none;\n}\n.dark-layout .flatpickr-calendar .flatpickr-months i,\n.dark-layout .flatpickr-calendar .flatpickr-months svg {\n  fill: #b4b7bd;\n}\n.dark-layout .flatpickr-calendar .flatpickr-month {\n  color: #b4b7bd;\n}\n[dir=ltr] .dark-layout .flatpickr-calendar .flatpickr-weekwrapper .flatpickr-weeks {\n  box-shadow: 1px 0 0 #3b4253;\n}\n[dir=rtl] .dark-layout .flatpickr-calendar .flatpickr-weekwrapper .flatpickr-weeks {\n  box-shadow: -1px 0 0 #3b4253;\n}\n.dark-layout .flatpickr-calendar .flatpickr-weekday {\n  color: #b4b7bd;\n}\n.dark-layout .flatpickr-calendar .flatpickr-day, .dark-layout .flatpickr-calendar .flatpickr-day.today:hover {\n  color: #b4b7bd;\n}\n.dark-layout .flatpickr-calendar .flatpickr-day.selected {\n  color: #fff;\n}\n.dark-layout .flatpickr-calendar .flatpickr-day.prevMonthDay, .dark-layout .flatpickr-calendar .flatpickr-day.nextMonthDay, .dark-layout .flatpickr-calendar .flatpickr-day.flatpickr-disabled {\n  color: #4e5154 !important;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-day.inRange, [dir] .dark-layout .flatpickr-calendar .flatpickr-day.inRange:hover {\n  background: #283046;\n  border-color: #283046;\n}\n[dir=ltr] .dark-layout .flatpickr-calendar .flatpickr-day.inRange, [dir=ltr] .dark-layout .flatpickr-calendar .flatpickr-day.inRange:hover {\n  box-shadow: -5px 0 0 #283046, 5px 0 0 #283046;\n}\n[dir=rtl] .dark-layout .flatpickr-calendar .flatpickr-day.inRange, [dir=rtl] .dark-layout .flatpickr-calendar .flatpickr-day.inRange:hover {\n  box-shadow: 5px 0 0 #283046, -5px 0 0 #283046;\n}\n.dark-layout .flatpickr-calendar .flatpickr-day:hover:not(.selected):not(.today):not(.startRange):not(.endRange) {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-day:hover:not(.selected):not(.today):not(.startRange):not(.endRange) {\n  border-color: #283046;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-days .flatpickr-day:hover:not(.selected):not(.today):not(.startRange):not(.endRange), [dir] .dark-layout .flatpickr-calendar .flatpickr-days .flatpickr-day:focus:not(.selected):not(.today):not(.startRange):not(.endRange) {\n  background: #283046;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-time {\n  border-color: #161d31 !important;\n}\n.dark-layout .flatpickr-calendar .flatpickr-time .numInput,\n.dark-layout .flatpickr-calendar .flatpickr-time .flatpickr-am-pm {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-time .numInput:hover, [dir] .dark-layout .flatpickr-calendar .flatpickr-time .flatpickr-am-pm:hover {\n  background: #161d31;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-time .arrowUp:after {\n  border-bottom-color: #b4b7bd;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-time .arrowDown:after {\n  border-top-color: #b4b7bd;\n}\n[dir] .dark-layout .flatpickr-time input:hover, [dir] .dark-layout .flatpickr-time .flatpickr-am-pm:hover, [dir] .dark-layout .flatpickr-time input:focus, [dir] .dark-layout .flatpickr-time .flatpickr-am-pm:focus {\n  background: #161d31;\n}\n.flatpickr-input[readonly],\n.flatpickr-input ~ .form-control[readonly],\n.flatpickr-human-friendly[readonly] {\n  opacity: 1 !important;\n}\n[dir] .flatpickr-input[readonly], [dir] .flatpickr-input ~ .form-control[readonly], [dir] .flatpickr-human-friendly[readonly] {\n  background-color: inherit;\n}\n[dir] .flatpickr-weekdays {\n  margin-top: 8px;\n}\n.flatpickr-current-month .flatpickr-monthDropdown-months {\n  -webkit-appearance: none;\n}\n.flatpickr-current-month .flatpickr-monthDropdown-months,\n.flatpickr-current-month .numInputWrapper {\n  font-size: 1.1rem;\n  transition: all 0.15s ease-out;\n}\n[dir] .flatpickr-current-month .flatpickr-monthDropdown-months, [dir] .flatpickr-current-month .numInputWrapper {\n  border-radius: 4px;\n  padding: 2px;\n}\n.flatpickr-current-month .flatpickr-monthDropdown-months span,\n.flatpickr-current-month .numInputWrapper span {\n  display: none;\n}\nhtml[dir=rtl] .flatpickr-calendar .flatpickr-prev-month svg,\nhtml[dir=rtl] .flatpickr-calendar .flatpickr-next-month svg {\n  transform: rotate(180deg);\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/calendar-sidebar/CalendarSidebar.vue?vue&type=style&index=0&id=02d382ba&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/calendar/calendar-sidebar/CalendarSidebar.vue?vue&type=style&index=0&id=02d382ba&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../../../../../../../node_modules/css-loader/dist/cjs.js!flatpickr/dist/flatpickr.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/flatpickr/dist/flatpickr.css");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);
// Module
exports.push([module.i, ".flatpickr-calendar .flatpickr-day[data-v-02d382ba] {\n  color: #6e6b7b;\n}\n[dir] .flatpickr-calendar .flatpickr-day.today[data-v-02d382ba] {\n  border-color: #7367f0;\n}\n.flatpickr-calendar .flatpickr-day.today[data-v-02d382ba]:hover {\n  color: #6e6b7b;\n}\n[dir] .flatpickr-calendar .flatpickr-day.today[data-v-02d382ba]:hover {\n  background: transparent;\n}\n.flatpickr-calendar .flatpickr-day.selected[data-v-02d382ba], .flatpickr-calendar .flatpickr-day.selected[data-v-02d382ba]:hover {\n  color: #fff;\n}\n[dir] .flatpickr-calendar .flatpickr-day.selected[data-v-02d382ba], [dir] .flatpickr-calendar .flatpickr-day.selected[data-v-02d382ba]:hover {\n  background: #7367f0;\n  border-color: #7367f0;\n}\n[dir] .flatpickr-calendar .flatpickr-day.inRange[data-v-02d382ba], [dir] .flatpickr-calendar .flatpickr-day.inRange[data-v-02d382ba]:hover {\n  background: #f3f2fe;\n  border-color: #f3f2fe;\n}\n[dir=ltr] .flatpickr-calendar .flatpickr-day.inRange[data-v-02d382ba], [dir=ltr] .flatpickr-calendar .flatpickr-day.inRange[data-v-02d382ba]:hover {\n  box-shadow: -5px 0 0 #f3f2fe, 5px 0 0 #f3f2fe;\n}\n[dir=rtl] .flatpickr-calendar .flatpickr-day.inRange[data-v-02d382ba], [dir=rtl] .flatpickr-calendar .flatpickr-day.inRange[data-v-02d382ba]:hover {\n  box-shadow: 5px 0 0 #f3f2fe, -5px 0 0 #f3f2fe;\n}\n.flatpickr-calendar .flatpickr-day.startRange[data-v-02d382ba], .flatpickr-calendar .flatpickr-day.endRange[data-v-02d382ba], .flatpickr-calendar .flatpickr-day.startRange[data-v-02d382ba]:hover, .flatpickr-calendar .flatpickr-day.endRange[data-v-02d382ba]:hover {\n  color: #fff;\n}\n[dir] .flatpickr-calendar .flatpickr-day.startRange[data-v-02d382ba], [dir] .flatpickr-calendar .flatpickr-day.endRange[data-v-02d382ba], [dir] .flatpickr-calendar .flatpickr-day.startRange[data-v-02d382ba]:hover, [dir] .flatpickr-calendar .flatpickr-day.endRange[data-v-02d382ba]:hover {\n  background: #7367f0;\n  border-color: #7367f0;\n}\n[dir=ltr] .flatpickr-calendar .flatpickr-day.selected.startRange + .endRange[data-v-02d382ba]:not(:nth-child(7n+1)), [dir=ltr] .flatpickr-calendar .flatpickr-day.startRange.startRange + .endRange[data-v-02d382ba]:not(:nth-child(7n+1)), [dir=ltr] .flatpickr-calendar .flatpickr-day.endRange.startRange + .endRange[data-v-02d382ba]:not(:nth-child(7n+1)) {\n  box-shadow: -10px 0 0 #7367f0;\n}\n[dir=rtl] .flatpickr-calendar .flatpickr-day.selected.startRange + .endRange[data-v-02d382ba]:not(:nth-child(7n+1)), [dir=rtl] .flatpickr-calendar .flatpickr-day.startRange.startRange + .endRange[data-v-02d382ba]:not(:nth-child(7n+1)), [dir=rtl] .flatpickr-calendar .flatpickr-day.endRange.startRange + .endRange[data-v-02d382ba]:not(:nth-child(7n+1)) {\n  box-shadow: 10px 0 0 #7367f0;\n}\n.flatpickr-calendar .flatpickr-day.flatpickr-disabled[data-v-02d382ba], .flatpickr-calendar .flatpickr-day.prevMonthDay[data-v-02d382ba], .flatpickr-calendar .flatpickr-day.nextMonthDay[data-v-02d382ba] {\n  color: #dae1e7;\n}\n[dir] .flatpickr-calendar .flatpickr-day[data-v-02d382ba]:hover {\n  background: #f6f6f6;\n}\n.flatpickr-calendar[data-v-02d382ba]:after, .flatpickr-calendar[data-v-02d382ba]:before {\n  display: none;\n}\n.flatpickr-calendar .flatpickr-months .flatpickr-prev-month[data-v-02d382ba],\n.flatpickr-calendar .flatpickr-months .flatpickr-next-month[data-v-02d382ba] {\n  top: -5px;\n}\n.flatpickr-calendar .flatpickr-months .flatpickr-prev-month:hover i[data-v-02d382ba], .flatpickr-calendar .flatpickr-months .flatpickr-prev-month:hover svg[data-v-02d382ba],\n.flatpickr-calendar .flatpickr-months .flatpickr-next-month:hover i[data-v-02d382ba],\n.flatpickr-calendar .flatpickr-months .flatpickr-next-month:hover svg[data-v-02d382ba] {\n  fill: #7367f0;\n}\n.flatpickr-calendar .flatpickr-current-month span.cur-month[data-v-02d382ba] {\n  font-weight: 300;\n}\n.flatpickr-calendar.open[data-v-02d382ba] {\n  z-index: 1051;\n}\n.flatpickr-calendar.hasTime.open .flatpickr-time[data-v-02d382ba] {\n  height: auto;\n}\n[dir] .flatpickr-time input[data-v-02d382ba]:hover, [dir] .flatpickr-time .flatpickr-am-pm[data-v-02d382ba]:hover, [dir] .flatpickr-time input[data-v-02d382ba]:focus, [dir] .flatpickr-time .flatpickr-am-pm[data-v-02d382ba]:focus {\n  background: #fff;\n}\n[dir] .dark-layout .flatpickr-calendar[data-v-02d382ba] {\n  background: #161d31;\n  border-color: #161d31;\n  box-shadow: none;\n}\n.dark-layout .flatpickr-calendar .flatpickr-months i[data-v-02d382ba],\n.dark-layout .flatpickr-calendar .flatpickr-months svg[data-v-02d382ba] {\n  fill: #b4b7bd;\n}\n.dark-layout .flatpickr-calendar .flatpickr-month[data-v-02d382ba] {\n  color: #b4b7bd;\n}\n[dir=ltr] .dark-layout .flatpickr-calendar .flatpickr-weekwrapper .flatpickr-weeks[data-v-02d382ba] {\n  box-shadow: 1px 0 0 #3b4253;\n}\n[dir=rtl] .dark-layout .flatpickr-calendar .flatpickr-weekwrapper .flatpickr-weeks[data-v-02d382ba] {\n  box-shadow: -1px 0 0 #3b4253;\n}\n.dark-layout .flatpickr-calendar .flatpickr-weekday[data-v-02d382ba] {\n  color: #b4b7bd;\n}\n.dark-layout .flatpickr-calendar .flatpickr-day[data-v-02d382ba], .dark-layout .flatpickr-calendar .flatpickr-day.today[data-v-02d382ba]:hover {\n  color: #b4b7bd;\n}\n.dark-layout .flatpickr-calendar .flatpickr-day.selected[data-v-02d382ba] {\n  color: #fff;\n}\n.dark-layout .flatpickr-calendar .flatpickr-day.prevMonthDay[data-v-02d382ba], .dark-layout .flatpickr-calendar .flatpickr-day.nextMonthDay[data-v-02d382ba], .dark-layout .flatpickr-calendar .flatpickr-day.flatpickr-disabled[data-v-02d382ba] {\n  color: #4e5154 !important;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-day.inRange[data-v-02d382ba], [dir] .dark-layout .flatpickr-calendar .flatpickr-day.inRange[data-v-02d382ba]:hover {\n  background: #283046;\n  border-color: #283046;\n}\n[dir=ltr] .dark-layout .flatpickr-calendar .flatpickr-day.inRange[data-v-02d382ba], [dir=ltr] .dark-layout .flatpickr-calendar .flatpickr-day.inRange[data-v-02d382ba]:hover {\n  box-shadow: -5px 0 0 #283046, 5px 0 0 #283046;\n}\n[dir=rtl] .dark-layout .flatpickr-calendar .flatpickr-day.inRange[data-v-02d382ba], [dir=rtl] .dark-layout .flatpickr-calendar .flatpickr-day.inRange[data-v-02d382ba]:hover {\n  box-shadow: 5px 0 0 #283046, -5px 0 0 #283046;\n}\n.dark-layout .flatpickr-calendar .flatpickr-day[data-v-02d382ba]:hover:not(.selected):not(.today):not(.startRange):not(.endRange) {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-day[data-v-02d382ba]:hover:not(.selected):not(.today):not(.startRange):not(.endRange) {\n  border-color: #283046;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-days .flatpickr-day[data-v-02d382ba]:hover:not(.selected):not(.today):not(.startRange):not(.endRange), [dir] .dark-layout .flatpickr-calendar .flatpickr-days .flatpickr-day[data-v-02d382ba]:focus:not(.selected):not(.today):not(.startRange):not(.endRange) {\n  background: #283046;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-time[data-v-02d382ba] {\n  border-color: #161d31 !important;\n}\n.dark-layout .flatpickr-calendar .flatpickr-time .numInput[data-v-02d382ba],\n.dark-layout .flatpickr-calendar .flatpickr-time .flatpickr-am-pm[data-v-02d382ba] {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-time .numInput[data-v-02d382ba]:hover, [dir] .dark-layout .flatpickr-calendar .flatpickr-time .flatpickr-am-pm[data-v-02d382ba]:hover {\n  background: #161d31;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-time .arrowUp[data-v-02d382ba]:after {\n  border-bottom-color: #b4b7bd;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-time .arrowDown[data-v-02d382ba]:after {\n  border-top-color: #b4b7bd;\n}\n[dir] .dark-layout .flatpickr-time input[data-v-02d382ba]:hover, [dir] .dark-layout .flatpickr-time .flatpickr-am-pm[data-v-02d382ba]:hover, [dir] .dark-layout .flatpickr-time input[data-v-02d382ba]:focus, [dir] .dark-layout .flatpickr-time .flatpickr-am-pm[data-v-02d382ba]:focus {\n  background: #161d31;\n}\n.flatpickr-input[readonly][data-v-02d382ba],\n.flatpickr-input ~ .form-control[readonly][data-v-02d382ba],\n.flatpickr-human-friendly[readonly][data-v-02d382ba] {\n  opacity: 1 !important;\n}\n[dir] .flatpickr-input[readonly][data-v-02d382ba], [dir] .flatpickr-input ~ .form-control[readonly][data-v-02d382ba], [dir] .flatpickr-human-friendly[readonly][data-v-02d382ba] {\n  background-color: inherit;\n}\n[dir] .flatpickr-weekdays[data-v-02d382ba] {\n  margin-top: 8px;\n}\n.flatpickr-current-month .flatpickr-monthDropdown-months[data-v-02d382ba] {\n  -webkit-appearance: none;\n}\n.flatpickr-current-month .flatpickr-monthDropdown-months[data-v-02d382ba],\n.flatpickr-current-month .numInputWrapper[data-v-02d382ba] {\n  font-size: 1.1rem;\n  transition: all 0.15s ease-out;\n}\n[dir] .flatpickr-current-month .flatpickr-monthDropdown-months[data-v-02d382ba], [dir] .flatpickr-current-month .numInputWrapper[data-v-02d382ba] {\n  border-radius: 4px;\n  padding: 2px;\n}\n.flatpickr-current-month .flatpickr-monthDropdown-months span[data-v-02d382ba],\n.flatpickr-current-month .numInputWrapper span[data-v-02d382ba] {\n  display: none;\n}\nhtml[dir=rtl] .flatpickr-calendar .flatpickr-prev-month svg[data-v-02d382ba],\nhtml[dir=rtl] .flatpickr-calendar .flatpickr-next-month svg[data-v-02d382ba] {\n  transform: rotate(180deg);\n}\n\n/**\n    Support for SASS is deprecated as of v3.18.\n\n    The files remain here if your build is dependent on them\n    but they will not receive updates in future releases. All\n    SASS variables have been translated into CSS variables, so\n    migration should be quite simple if you'd like to move over.\n\n    In v4, these files will be removed.\n */\n.v-select[data-v-02d382ba] {\n  position: relative;\n  font-family: inherit;\n}\n.v-select[data-v-02d382ba],\n.v-select *[data-v-02d382ba] {\n  box-sizing: border-box;\n}\n\n/* KeyFrames */\n@-webkit-keyframes vSelectSpinner-ltr-data-v-02d382ba {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@-webkit-keyframes vSelectSpinner-rtl-data-v-02d382ba {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(-360deg);\n}\n}\n@keyframes vSelectSpinner-ltr-data-v-02d382ba {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes vSelectSpinner-rtl-data-v-02d382ba {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(-360deg);\n}\n}\n/* Dropdown Default Transition */\n.vs__fade-enter-active[data-v-02d382ba],\n.vs__fade-leave-active[data-v-02d382ba] {\n  pointer-events: none;\n  transition: opacity 0.15s cubic-bezier(1, 0.5, 0.8, 1);\n}\n.vs__fade-enter[data-v-02d382ba],\n.vs__fade-leave-to[data-v-02d382ba] {\n  opacity: 0;\n}\n\n/** Component States */\n/*\n * Disabled\n *\n * When the component is disabled, all interaction\n * should be prevented. Here we modify the bg color,\n * and change the cursor displayed on the interactive\n * components.\n */\n[dir] .vs--disabled .vs__dropdown-toggle[data-v-02d382ba], [dir] .vs--disabled .vs__clear[data-v-02d382ba], [dir] .vs--disabled .vs__search[data-v-02d382ba], [dir] .vs--disabled .vs__selected[data-v-02d382ba], [dir] .vs--disabled .vs__open-indicator[data-v-02d382ba] {\n  cursor: not-allowed;\n  background-color: #f8f8f8;\n}\n\n/*\n *  RTL - Right to Left Support\n *\n *  Because we're using a flexbox layout, the `dir=\"rtl\"`\n *  HTML attribute does most of the work for us by\n *  rearranging the child elements visually.\n */\n.v-select[dir=rtl] .vs__actions[data-v-02d382ba] {\n  padding: 0 3px 0 6px;\n}\n.v-select[dir=rtl] .vs__clear[data-v-02d382ba] {\n  margin-left: 6px;\n  margin-right: 0;\n}\n.v-select[dir=rtl] .vs__deselect[data-v-02d382ba] {\n  margin-left: 0;\n  margin-right: 2px;\n}\n.v-select[dir=rtl] .vs__dropdown-menu[data-v-02d382ba] {\n  text-align: right;\n}\n\n/**\n    Dropdown Toggle\n\n    The dropdown toggle is the primary wrapper of the component. It\n    has two direct descendants: .vs__selected-options, and .vs__actions.\n\n    .vs__selected-options holds the .vs__selected's as well as the\n    main search input.\n\n    .vs__actions holds the clear button and dropdown toggle.\n */\n.vs__dropdown-toggle[data-v-02d382ba] {\n  appearance: none;\n  display: flex;\n  white-space: normal;\n}\n[dir] .vs__dropdown-toggle[data-v-02d382ba] {\n  padding: 0 0 4px 0;\n  background: none;\n  border: 1px solid #d8d6de;\n  border-radius: 0.357rem;\n}\n.vs__selected-options[data-v-02d382ba] {\n  display: flex;\n  flex-basis: 100%;\n  flex-grow: 1;\n  flex-wrap: wrap;\n  position: relative;\n}\n[dir] .vs__selected-options[data-v-02d382ba] {\n  padding: 0 2px;\n}\n.vs__actions[data-v-02d382ba] {\n  display: flex;\n  align-items: center;\n}\n[dir=ltr] .vs__actions[data-v-02d382ba] {\n  padding: 4px 6px 0 3px;\n}\n[dir=rtl] .vs__actions[data-v-02d382ba] {\n  padding: 4px 3px 0 6px;\n}\n\n/* Dropdown Toggle States */\n[dir] .vs--searchable .vs__dropdown-toggle[data-v-02d382ba] {\n  cursor: text;\n}\n[dir] .vs--unsearchable .vs__dropdown-toggle[data-v-02d382ba] {\n  cursor: pointer;\n}\n[dir] .vs--open .vs__dropdown-toggle[data-v-02d382ba] {\n  border-bottom-color: transparent;\n}\n[dir=ltr] .vs--open .vs__dropdown-toggle[data-v-02d382ba] {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n[dir=rtl] .vs--open .vs__dropdown-toggle[data-v-02d382ba] {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.vs__open-indicator[data-v-02d382ba] {\n  fill: rgba(60, 60, 60, 0.5);\n  transition: transform 150ms cubic-bezier(1, -0.115, 0.975, 0.855);\n}\n[dir] .vs__open-indicator[data-v-02d382ba] {\n  transform: scale(1);\n  transition-timing-function: cubic-bezier(1, -0.115, 0.975, 0.855);\n}\n[dir=ltr] .vs--open .vs__open-indicator[data-v-02d382ba] {\n  transform: rotate(180deg) scale(1);\n}\n[dir=rtl] .vs--open .vs__open-indicator[data-v-02d382ba] {\n  transform: rotate(-180deg) scale(1);\n}\n.vs--loading .vs__open-indicator[data-v-02d382ba] {\n  opacity: 0;\n}\n\n/* Clear Button */\n.vs__clear[data-v-02d382ba] {\n  fill: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__clear[data-v-02d382ba] {\n  padding: 0;\n  border: 0;\n  background-color: transparent;\n  cursor: pointer;\n}\n[dir=ltr] .vs__clear[data-v-02d382ba] {\n  margin-right: 8px;\n}\n[dir=rtl] .vs__clear[data-v-02d382ba] {\n  margin-left: 8px;\n}\n\n/* Dropdown Menu */\n.vs__dropdown-menu[data-v-02d382ba] {\n  display: block;\n  box-sizing: border-box;\n  position: absolute;\n  top: calc(100% - 1px);\n  z-index: 1000;\n  width: 100%;\n  max-height: 350px;\n  min-width: 160px;\n  overflow-y: auto;\n  list-style: none;\n}\n[dir] .vs__dropdown-menu[data-v-02d382ba] {\n  padding: 5px 0;\n  margin: 0;\n  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.1);\n  border: 1px solid #d8d6de;\n  border-top-style: none;\n  border-radius: 0 0 0.357rem 0.357rem;\n  background: #fff;\n}\n[dir=ltr] .vs__dropdown-menu[data-v-02d382ba] {\n  left: 0;\n  text-align: left;\n}\n[dir=rtl] .vs__dropdown-menu[data-v-02d382ba] {\n  right: 0;\n  text-align: right;\n}\n[dir] .vs__no-options[data-v-02d382ba] {\n  text-align: center;\n}\n\n/* List Items */\n.vs__dropdown-option[data-v-02d382ba] {\n  line-height: 1.42857143;\n  /* Normalize line height */\n  display: block;\n  color: #333;\n  /* Overrides most CSS frameworks */\n  white-space: nowrap;\n}\n[dir] .vs__dropdown-option[data-v-02d382ba] {\n  padding: 3px 20px;\n  clear: both;\n  cursor: pointer;\n}\n.vs__dropdown-option--highlight[data-v-02d382ba] {\n  color: #7367f0 !important;\n}\n[dir] .vs__dropdown-option--highlight[data-v-02d382ba] {\n  background: rgba(115, 103, 240, 0.12);\n}\n.vs__dropdown-option--deselect[data-v-02d382ba] {\n  color: #fff;\n}\n[dir] .vs__dropdown-option--deselect[data-v-02d382ba] {\n  background: #fb5858;\n}\n.vs__dropdown-option--disabled[data-v-02d382ba] {\n  color: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__dropdown-option--disabled[data-v-02d382ba] {\n  background: inherit;\n  cursor: inherit;\n}\n\n/* Selected Tags */\n.vs__selected[data-v-02d382ba] {\n  display: flex;\n  align-items: center;\n  color: #333;\n  line-height: 1.8;\n  z-index: 0;\n}\n[dir] .vs__selected[data-v-02d382ba] {\n  background-color: #7367f0;\n  border: 0 solid rgba(60, 60, 60, 0.26);\n  border-radius: 0.357rem;\n  margin: 4px 2px 0px 2px;\n  padding: 0 0.25em;\n}\n.vs__deselect[data-v-02d382ba] {\n  display: inline-flex;\n  appearance: none;\n  fill: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__deselect[data-v-02d382ba] {\n  padding: 0;\n  border: 0;\n  cursor: pointer;\n  background: none;\n  text-shadow: 0 1px 0 #fff;\n}\n[dir=ltr] .vs__deselect[data-v-02d382ba] {\n  margin-left: 4px;\n}\n[dir=rtl] .vs__deselect[data-v-02d382ba] {\n  margin-right: 4px;\n}\n\n/* States */\n[dir] .vs--single .vs__selected[data-v-02d382ba] {\n  background-color: transparent;\n  border-color: transparent;\n}\n.vs--single.vs--open .vs__selected[data-v-02d382ba], .vs--single.vs--loading .vs__selected[data-v-02d382ba] {\n  position: absolute;\n  opacity: 0.4;\n}\n.vs--single.vs--searching .vs__selected[data-v-02d382ba] {\n  display: none;\n}\n\n/* Search Input */\n/**\n * Super weird bug... If this declaration is grouped\n * below, the cancel button will still appear in chrome.\n * If it's up here on it's own, it'll hide it.\n */\n.vs__search[data-v-02d382ba]::-webkit-search-cancel-button {\n  display: none;\n}\n.vs__search[data-v-02d382ba]::-webkit-search-decoration,\n.vs__search[data-v-02d382ba]::-webkit-search-results-button,\n.vs__search[data-v-02d382ba]::-webkit-search-results-decoration,\n.vs__search[data-v-02d382ba]::-ms-clear {\n  display: none;\n}\n.vs__search[data-v-02d382ba],\n.vs__search[data-v-02d382ba]:focus {\n  appearance: none;\n  line-height: 1.8;\n  font-size: 1em;\n  outline: none;\n  width: 0;\n  max-width: 100%;\n  flex-grow: 1;\n  z-index: 1;\n}\n[dir] .vs__search[data-v-02d382ba], [dir] .vs__search[data-v-02d382ba]:focus {\n  border: 1px solid transparent;\n  margin: 4px 0 0 0;\n  padding: 0 7px;\n  background: none;\n  box-shadow: none;\n}\n[dir=ltr] .vs__search[data-v-02d382ba], [dir=ltr] .vs__search[data-v-02d382ba]:focus {\n  border-left: none;\n}\n[dir=rtl] .vs__search[data-v-02d382ba], [dir=rtl] .vs__search[data-v-02d382ba]:focus {\n  border-right: none;\n}\n.vs__search[data-v-02d382ba]::placeholder {\n  color: #6e6b7b;\n}\n\n/**\n    States\n */\n.vs--unsearchable .vs__search[data-v-02d382ba] {\n  opacity: 1;\n}\n[dir] .vs--unsearchable:not(.vs--disabled) .vs__search[data-v-02d382ba] {\n  cursor: pointer;\n}\n.vs--single.vs--searching:not(.vs--open):not(.vs--loading) .vs__search[data-v-02d382ba] {\n  opacity: 0.2;\n}\n\n/* Loading Spinner */\n.vs__spinner[data-v-02d382ba] {\n  align-self: center;\n  opacity: 0;\n  font-size: 5px;\n  text-indent: -9999em;\n  overflow: hidden;\n  transition: opacity 0.1s;\n}\n[dir] .vs__spinner[data-v-02d382ba] {\n  border-top: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-bottom: 0.9em solid rgba(100, 100, 100, 0.1);\n  transform: translateZ(0);\n}\n[dir=ltr] .vs__spinner[data-v-02d382ba] {\n  border-right: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-left: 0.9em solid rgba(60, 60, 60, 0.45);\n  animation:  vSelectSpinner-ltr-data-v-02d382ba 1.1s infinite linear;\n}\n[dir=rtl] .vs__spinner[data-v-02d382ba] {\n  border-left: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-right: 0.9em solid rgba(60, 60, 60, 0.45);\n  animation:  vSelectSpinner-rtl-data-v-02d382ba 1.1s infinite linear;\n}\n.vs__spinner[data-v-02d382ba],\n.vs__spinner[data-v-02d382ba]:after {\n  width: 5em;\n  height: 5em;\n}\n[dir] .vs__spinner[data-v-02d382ba], [dir] .vs__spinner[data-v-02d382ba]:after {\n  border-radius: 50%;\n}\n\n/* Loading Spinner States */\n.vs--loading .vs__spinner[data-v-02d382ba] {\n  opacity: 1;\n}\n.vs__open-indicator[data-v-02d382ba] {\n  fill: none;\n}\n[dir] .vs__open-indicator[data-v-02d382ba] {\n  margin-top: 0.15rem;\n}\n.vs__dropdown-toggle[data-v-02d382ba] {\n  transition: all 0.25s ease-in-out;\n}\n[dir] .vs__dropdown-toggle[data-v-02d382ba] {\n  padding: 0.59px 0 4px 0;\n}\n[dir=ltr] .vs--single .vs__dropdown-toggle[data-v-02d382ba] {\n  padding-left: 6px;\n}\n[dir=rtl] .vs--single .vs__dropdown-toggle[data-v-02d382ba] {\n  padding-right: 6px;\n}\n.vs__dropdown-option--disabled[data-v-02d382ba] {\n  opacity: 0.5;\n}\n[dir] .vs__dropdown-option--disabled.vs__dropdown-option--selected[data-v-02d382ba] {\n  background: #7367f0 !important;\n}\n.vs__dropdown-option[data-v-02d382ba] {\n  color: #6e6b7b;\n}\n[dir] .vs__dropdown-option[data-v-02d382ba], [dir] .vs__no-options[data-v-02d382ba] {\n  padding: 7px 20px;\n}\n.vs__dropdown-option--selected[data-v-02d382ba] {\n  background-color: #7367f0;\n  color: #fff;\n  position: relative;\n}\n.vs__dropdown-option--selected[data-v-02d382ba]::after {\n  content: \"\";\n  height: 1.1rem;\n  width: 1.1rem;\n  display: inline-block;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  right: 20px;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-check'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 1.1rem;\n}\n[dir=rtl] .vs__dropdown-option--selected[data-v-02d382ba]::after {\n  left: 20px;\n  right: unset;\n}\n.vs__dropdown-option--selected.vs__dropdown-option--highlight[data-v-02d382ba] {\n  color: #fff !important;\n  background-color: #7367f0 !important;\n}\n.vs__clear svg[data-v-02d382ba] {\n  color: #6e6b7b;\n}\n.vs__selected[data-v-02d382ba] {\n  color: #fff;\n}\n.v-select.vs--single .vs__selected[data-v-02d382ba] {\n  color: #6e6b7b;\n  transition: transform 0.2s ease;\n}\n[dir] .v-select.vs--single .vs__selected[data-v-02d382ba] {\n  margin-top: 5px;\n}\n[dir=ltr] .v-select.vs--single .vs__selected input[data-v-02d382ba] {\n  padding-left: 0;\n}\n[dir=rtl] .v-select.vs--single .vs__selected input[data-v-02d382ba] {\n  padding-right: 0;\n}\n[dir=ltr] .vs--single.vs--open .vs__selected[data-v-02d382ba] {\n  transform: translateX(5px);\n}\n[dir=rtl] .vs--single.vs--open .vs__selected[data-v-02d382ba] {\n  transform: translateX(-5px);\n}\n.vs__selected .vs__deselect[data-v-02d382ba] {\n  color: inherit;\n}\n.v-select:not(.vs--single) .vs__selected[data-v-02d382ba] {\n  font-size: 0.9rem;\n}\n[dir] .v-select:not(.vs--single) .vs__selected[data-v-02d382ba] {\n  border-radius: 3px;\n  padding: 0 0.6em;\n}\n[dir=ltr] .v-select:not(.vs--single) .vs__selected[data-v-02d382ba] {\n  margin: 5px 2px 2px 5px;\n}\n[dir=rtl] .v-select:not(.vs--single) .vs__selected[data-v-02d382ba] {\n  margin: 5px 5px 2px 2px;\n}\n.v-select:not(.vs--single) .vs__deselect svg[data-v-02d382ba] {\n  vertical-align: text-top;\n}\n[dir] .v-select:not(.vs--single) .vs__deselect svg[data-v-02d382ba] {\n  transform: scale(0.8);\n}\n.vs__dropdown-menu[data-v-02d382ba] {\n  top: calc(100% + 1rem);\n}\n[dir] .vs__dropdown-menu[data-v-02d382ba] {\n  border: none;\n  border-radius: 6px;\n  padding: 0;\n}\n[dir] .vs--open .vs__dropdown-toggle[data-v-02d382ba] {\n  border-color: #7367f0;\n  border-bottom-color: #7367f0;\n  box-shadow: 0 3px 10px 0 rgba(34, 41, 47, 0.1);\n}\n[dir=ltr] .vs--open .vs__dropdown-toggle[data-v-02d382ba] {\n  border-bottom-left-radius: 0.357rem;\n  border-bottom-right-radius: 0.357rem;\n}\n[dir=rtl] .vs--open .vs__dropdown-toggle[data-v-02d382ba] {\n  border-bottom-right-radius: 0.357rem;\n  border-bottom-left-radius: 0.357rem;\n}\n.select-size-lg .vs__selected[data-v-02d382ba] {\n  font-size: 1rem !important;\n}\n[dir] .select-size-lg.vs--single.vs--open .vs__selected[data-v-02d382ba] {\n  margin-top: 6px;\n}\n.select-size-lg .vs__dropdown-toggle[data-v-02d382ba],\n.select-size-lg .vs__selected[data-v-02d382ba] {\n  font-size: 1.25rem;\n}\n[dir] .select-size-lg .vs__dropdown-toggle[data-v-02d382ba] {\n  padding: 5px;\n}\n[dir] .select-size-lg .vs__dropdown-toggle input[data-v-02d382ba] {\n  margin-top: 0;\n}\n.select-size-lg .vs__deselect svg[data-v-02d382ba] {\n  vertical-align: middle !important;\n}\n[dir] .select-size-lg .vs__deselect svg[data-v-02d382ba] {\n  transform: scale(1) !important;\n}\n[dir] .select-size-sm .vs__dropdown-toggle[data-v-02d382ba] {\n  padding-bottom: 0;\n  padding: 1px;\n}\n[dir] .select-size-sm.vs--single .vs__dropdown-toggle[data-v-02d382ba] {\n  padding: 2px;\n}\n.select-size-sm .vs__dropdown-toggle[data-v-02d382ba],\n.select-size-sm .vs__selected[data-v-02d382ba] {\n  font-size: 0.9rem;\n}\n[dir] .select-size-sm .vs__actions[data-v-02d382ba] {\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n.select-size-sm .vs__deselect svg[data-v-02d382ba] {\n  vertical-align: middle !important;\n}\n[dir] .select-size-sm .vs__search[data-v-02d382ba] {\n  margin-top: 0;\n}\n.select-size-sm.v-select .vs__selected[data-v-02d382ba] {\n  font-size: 0.75rem;\n}\n[dir] .select-size-sm.v-select .vs__selected[data-v-02d382ba] {\n  padding: 0 0.3rem;\n}\n[dir] .select-size-sm.v-select:not(.vs--single) .vs__selected[data-v-02d382ba] {\n  margin: 4px 5px;\n}\n[dir] .select-size-sm.v-select.vs--single .vs__selected[data-v-02d382ba] {\n  margin-top: 1px;\n}\n[dir] .select-size-sm.vs--single.vs--open .vs__selected[data-v-02d382ba] {\n  margin-top: 4px;\n}\n.dark-layout .vs__dropdown-toggle[data-v-02d382ba] {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .vs__dropdown-toggle[data-v-02d382ba] {\n  background: #283046;\n  border-color: #404656;\n}\n.dark-layout .vs__selected-options input[data-v-02d382ba] {\n  color: #b4b7bd;\n}\n.dark-layout .vs__selected-options input[data-v-02d382ba]::placeholder {\n  color: #676d7d;\n}\n.dark-layout .vs__actions svg[data-v-02d382ba] {\n  fill: #404656;\n}\n[dir] .dark-layout .vs__dropdown-menu[data-v-02d382ba] {\n  background: #283046;\n}\n.dark-layout .vs__dropdown-menu li[data-v-02d382ba] {\n  color: #b4b7bd;\n}\n.dark-layout .v-select:not(.vs--single) .vs__selected[data-v-02d382ba] {\n  color: #7367f0;\n}\n[dir] .dark-layout .v-select:not(.vs--single) .vs__selected[data-v-02d382ba] {\n  background-color: rgba(115, 103, 240, 0.12);\n}\n.dark-layout .v-select.vs--single .vs__selected[data-v-02d382ba] {\n  color: #b4b7bd !important;\n}\n.dark-layout .vs--disabled .vs__dropdown-toggle[data-v-02d382ba],\n.dark-layout .vs--disabled .vs__clear[data-v-02d382ba],\n.dark-layout .vs--disabled .vs__search[data-v-02d382ba],\n.dark-layout .vs--disabled .vs__selected[data-v-02d382ba],\n.dark-layout .vs--disabled .vs__open-indicator[data-v-02d382ba] {\n  opacity: 0.5;\n}\n[dir] .dark-layout .vs--disabled .vs__dropdown-toggle[data-v-02d382ba], [dir] .dark-layout .vs--disabled .vs__clear[data-v-02d382ba], [dir] .dark-layout .vs--disabled .vs__search[data-v-02d382ba], [dir] .dark-layout .vs--disabled .vs__selected[data-v-02d382ba], [dir] .dark-layout .vs--disabled .vs__open-indicator[data-v-02d382ba] {\n  background-color: #283046;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/CalendarAppointmentAdd.vue?vue&type=style&index=2&id=5a25dfde&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/calendar/CalendarAppointmentAdd.vue?vue&type=style&index=2&id=5a25dfde&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.custom-radio-group {\r\n    display: flex;\r\n    justify-content: center; /* Centra los elementos horizontalmente */\r\n    align-items: center;     /* Centra los elementos verticalmente */\r\n    flex-wrap: wrap;         /* Asegura que los radios no se desborden */\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/CalendarAppointmentEdit.vue?vue&type=style&index=2&id=d34679c6&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/calendar/CalendarAppointmentEdit.vue?vue&type=style&index=2&id=d34679c6&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.custom-radio-group {\r\n    display: flex;\r\n    justify-content: center; /* Centra los elementos horizontalmente */\r\n    align-items: center;     /* Centra los elementos verticalmente */\r\n    flex-wrap: wrap;         /* Asegura que los radios no se desborden */\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/calendar-sidebar/CalendarSidebar.vue?vue&type=style&index=1&id=02d382ba&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/calendar/calendar-sidebar/CalendarSidebar.vue?vue&type=style&index=1&id=02d382ba&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.app-calendar .app-calendar-sidebar {\r\n    position: absolute;\r\n    width: 18rem;\r\n    height: 100%;\r\n    z-index: 5;\r\n    flex-basis: 20rem!important;\r\n    transition: all 0.2s, background 0s, border 0s;\n}\r\n\r\n/* Estilo CSS para el contenedor del calendario */\n.mini-calendar {\r\n  max-width: 300px; /* Establece un ancho máximo */ /* Centra horizontalmente */\n}\n[dir] .mini-calendar {\r\n  margin: 0 auto;\n}\r\n\r\n/* Ajuste para dispositivos móviles */\n@media (max-width: 768px) {\n.mini-calendar {\r\n    max-width: 100%; /* Ocupa todo el ancho en dispositivos móviles */\n}\n.app-calendar .app-calendar-sidebar {\r\n    position: absolute;\r\n    width: 20rem!important;\r\n    height: 100%;\r\n    z-index: 5;\r\n    flex-basis: 20rem!important;\r\n    transition: all 0.2s, background 0s, border 0s;\n}\n}\n.flatpickr-calendar {\r\n    opacity: 0;\r\n    display: none;\r\n    visibility: hidden;\r\n    font-size: 12px !important;\r\n    line-height: 24px;\r\n    position: absolute;\r\n    width: 249px !important;\r\n    min-width: 249px !important;\r\n    max-width: 249px !important;\r\n    -webkit-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n    -ms-touch-action: manipulation;\r\n    touch-action: manipulation;\n}\n[dir] .flatpickr-calendar {\r\n    background: transparent;\r\n    text-align: center;\r\n    padding: 0;\r\n    border: 0;\r\n    border-radius: 5px;\r\n    background: #fff;\n}\n[dir=ltr] .flatpickr-calendar {\r\n    -webkit-animation: none;\r\n    animation: none;\r\n    direction: ltr;\r\n    -webkit-box-shadow: 1px 0 0 #e6e6e6, -1px 0 0 #e6e6e6, 0 1px 0 #e6e6e6, 0 -1px 0 #e6e6e6, 0 3px 13px rgb(0 0 0 / 8%);\r\n    box-shadow: 1px 0 0 #e6e6e6, -1px 0 0 #e6e6e6, 0 1px 0 #e6e6e6, 0 -1px 0 #e6e6e6, 0 3px 13px rgb(0 0 0 / 8%);\n}\n[dir=rtl] .flatpickr-calendar {\r\n    -webkit-animation: none;\r\n    animation: none;\r\n    direction: rtl;\r\n    -webkit-box-shadow: -1px 0 0 #e6e6e6, 1px 0 0 #e6e6e6, 0 1px 0 #e6e6e6, 0 -1px 0 #e6e6e6, 0 3px 13px rgb(0 0 0 / 8%);\r\n    box-shadow: -1px 0 0 #e6e6e6, 1px 0 0 #e6e6e6, 0 1px 0 #e6e6e6, 0 -1px 0 #e6e6e6, 0 3px 13px rgb(0 0 0 / 8%);\n}\n.dayContainer {\r\n    outline: 0;\r\n    width: 249px !important;\r\n    min-width: 249px !important;\r\n    max-width: 249px !important;\r\n    -webkit-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n    display: inline-block;\r\n    display: -ms-flexbox;\r\n    display: -webkit-box;\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    -webkit-flex-wrap: wrap;\r\n    flex-wrap: wrap;\r\n    -ms-flex-wrap: wrap;\r\n    -ms-flex-pack: justify;\r\n    -webkit-justify-content: space-around;\r\n    justify-content: space-around;\r\n    -webkit-transform: translate3d(0px, 0px, 0px);\r\n    opacity: 1;\n}\n[dir] .dayContainer {\r\n    padding: 0;\r\n    transform: translate3d(0px, 0px, 0px);\n}\n[dir=ltr] .dayContainer {\r\n    text-align: left;\n}\n[dir=rtl] .dayContainer {\r\n    text-align: right;\n}\n.flatpickr-current-month {\r\n    font-size: 135%;\r\n    line-height: inherit;\r\n    font-weight: 300;\r\n    color: inherit;\r\n    position: absolute;\r\n    line-height: 1;\r\n    height: 34px;\r\n    display: inline-block;\r\n    -webkit-transform: translate3d(0px, 0px, 0px);\n}\n[dir] .flatpickr-current-month {\r\n    padding: 7.48px 0 0 0;\r\n    text-align: center;\r\n    transform: translate3d(0px, 0px, 0px);\n}\n[dir=ltr] .flatpickr-current-month {\r\n    left: 12.5%;\n}\n[dir=rtl] .flatpickr-current-month {\r\n    right: 12.5%;\n}\n.flatpickr-days {\r\n    position: relative;\r\n    overflow: hidden;\r\n    display: -webkit-box;\r\n    display: -webkit-flex;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: start;\r\n    -webkit-align-items: flex-start;\r\n    -ms-flex-align: start;\r\n    align-items: flex-start;\r\n    width: 100% !important;\n}\n.flatpickr-day {\r\n    -webkit-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n    color: #393939;\r\n    font-weight: 400;\r\n    width: 14.2857143%;\r\n    -webkit-flex-basis: 14.2857143%;\r\n    -ms-flex-preferred-size: 14.2857143%;\r\n    flex-basis: 14.2857143%;\r\n    max-width: 39px !important;\r\n    height: 30px !important;\r\n    line-height: 30px !important;\r\n    display: inline-block;\r\n    position: relative;\r\n    -webkit-box-pack: center;\r\n    -webkit-justify-content: center;\r\n    -ms-flex-pack: center;\r\n    justify-content: center;\n}\n[dir] .flatpickr-day {\r\n    background: none;\r\n    border: 1px solid transparent;\r\n    border-radius: 150px;\r\n    cursor: pointer;\r\n    margin: 0;\r\n    text-align: center;\n}\n.flatpickr-calendar.inline {\r\n    display: block;\r\n    position: relative;\r\n    top: -15px;\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/Calendar.vue?vue&type=style&index=0&id=741d173c&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/calendar/Calendar.vue?vue&type=style&index=0&id=741d173c&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--12-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Calendar.vue?vue&type=style&index=0&id=741d173c&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/Calendar.vue?vue&type=style&index=0&id=741d173c&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/CalendarAppointmentAdd.vue?vue&type=style&index=0&id=5a25dfde&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/calendar/CalendarAppointmentAdd.vue?vue&type=style&index=0&id=5a25dfde&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--12-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CalendarAppointmentAdd.vue?vue&type=style&index=0&id=5a25dfde&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/CalendarAppointmentAdd.vue?vue&type=style&index=0&id=5a25dfde&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/CalendarAppointmentAdd.vue?vue&type=style&index=1&id=5a25dfde&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/calendar/CalendarAppointmentAdd.vue?vue&type=style&index=1&id=5a25dfde&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--12-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CalendarAppointmentAdd.vue?vue&type=style&index=1&id=5a25dfde&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/CalendarAppointmentAdd.vue?vue&type=style&index=1&id=5a25dfde&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/CalendarAppointmentEdit.vue?vue&type=style&index=0&id=d34679c6&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/calendar/CalendarAppointmentEdit.vue?vue&type=style&index=0&id=d34679c6&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--12-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CalendarAppointmentEdit.vue?vue&type=style&index=0&id=d34679c6&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/CalendarAppointmentEdit.vue?vue&type=style&index=0&id=d34679c6&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/CalendarAppointmentEdit.vue?vue&type=style&index=1&id=d34679c6&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/calendar/CalendarAppointmentEdit.vue?vue&type=style&index=1&id=d34679c6&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--12-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CalendarAppointmentEdit.vue?vue&type=style&index=1&id=d34679c6&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/CalendarAppointmentEdit.vue?vue&type=style&index=1&id=d34679c6&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/calendar-detail/AppointmentDetail.vue?vue&type=style&index=0&id=7f3fd6b3&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/calendar/calendar-detail/AppointmentDetail.vue?vue&type=style&index=0&id=7f3fd6b3&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--12-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppointmentDetail.vue?vue&type=style&index=0&id=7f3fd6b3&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/calendar-detail/AppointmentDetail.vue?vue&type=style&index=0&id=7f3fd6b3&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/calendar-event-handler/CalendarEventHandler.vue?vue&type=style&index=0&id=16bc2672&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/calendar/calendar-event-handler/CalendarEventHandler.vue?vue&type=style&index=0&id=16bc2672&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--12-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CalendarEventHandler.vue?vue&type=style&index=0&id=16bc2672&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/calendar-event-handler/CalendarEventHandler.vue?vue&type=style&index=0&id=16bc2672&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/calendar-sidebar/CalendarSidebar.vue?vue&type=style&index=0&id=02d382ba&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/calendar/calendar-sidebar/CalendarSidebar.vue?vue&type=style&index=0&id=02d382ba&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--12-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CalendarSidebar.vue?vue&type=style&index=0&id=02d382ba&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/calendar-sidebar/CalendarSidebar.vue?vue&type=style&index=0&id=02d382ba&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/CalendarAppointmentAdd.vue?vue&type=style&index=2&id=5a25dfde&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/calendar/CalendarAppointmentAdd.vue?vue&type=style&index=2&id=5a25dfde&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CalendarAppointmentAdd.vue?vue&type=style&index=2&id=5a25dfde&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/CalendarAppointmentAdd.vue?vue&type=style&index=2&id=5a25dfde&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/CalendarAppointmentEdit.vue?vue&type=style&index=2&id=d34679c6&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/calendar/CalendarAppointmentEdit.vue?vue&type=style&index=2&id=d34679c6&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CalendarAppointmentEdit.vue?vue&type=style&index=2&id=d34679c6&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/CalendarAppointmentEdit.vue?vue&type=style&index=2&id=d34679c6&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/calendar-sidebar/CalendarSidebar.vue?vue&type=style&index=1&id=02d382ba&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/calendar/calendar-sidebar/CalendarSidebar.vue?vue&type=style&index=1&id=02d382ba&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CalendarSidebar.vue?vue&type=style&index=1&id=02d382ba&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/calendar-sidebar/CalendarSidebar.vue?vue&type=style&index=1&id=02d382ba&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/Calendar.vue?vue&type=template&id=741d173c&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/calendar/Calendar.vue?vue&type=template&id=741d173c& ***!
  \************************************************************************************************************************************************************************************************************************/
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
        show: _vm.isLoading,
        blur: "2px",
        variant: "transparent",
        rounded: "lg",
        opacity: "0.85",
      },
    },
    [
      _c("div", { staticClass: "app-calendar mt-1 overflow-hidden border" }, [
        _c(
          "div",
          { staticClass: "row no-gutters" },
          [
            _c(
              "div",
              {
                staticClass:
                  "col app-calendar-sidebar flex-grow-0 overflow-hidden d-flex flex-column",
                class: { show: _vm.isCalendarOverlaySidebarActive },
              },
              [
                _c("calendar-sidebar", {
                  attrs: {
                    "is-event-handler-sidebar-active":
                      _vm.isEventHandlerSidebarActive,
                  },
                  on: {
                    "update:isEventHandlerSidebarActive": function ($event) {
                      _vm.isEventHandlerSidebarActive = $event
                    },
                    "update:is-event-handler-sidebar-active": function (
                      $event
                    ) {
                      _vm.isEventHandlerSidebarActive = $event
                    },
                  },
                }),
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col position-relative" }, [
              _c(
                "div",
                { staticClass: "card shadow-none border-0 mb-0 rounded-0" },
                [
                  _c("div", { staticClass: "card-header" }, [
                    _c("label", [_vm._v(_vm._s(_vm.$t("professional")))]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "d-flex align-content-center justify-content-between w-100",
                      },
                      [
                        _c("v-select", {
                          staticClass: "w-100",
                          attrs: {
                            disabled: !_vm.isAdmin && !_vm.isDirector,
                            options: _vm.professionals,
                            label: "name",
                            "input-id": "list-professional",
                            clearable: false,
                            placeholder: _vm.$t("appointments.search_doctor"),
                          },
                          model: {
                            value: _vm.selectedProfessional,
                            callback: function ($$v) {
                              _vm.selectedProfessional = $$v
                            },
                            expression: "selectedProfessional",
                          },
                        }),
                      ],
                      1
                    ),
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "card-body pb-0" },
                    [
                      _c("full-calendar", {
                        ref: "refCalendar",
                        staticClass: "full-calendar",
                        attrs: { options: _vm.calendarOptions },
                      }),
                    ],
                    1
                  ),
                ]
              ),
            ]),
            _vm._v(" "),
            _c("div", {
              staticClass: "body-content-overlay",
              class: { show: _vm.isCalendarOverlaySidebarActive },
              on: {
                click: function ($event) {
                  _vm.isCalendarOverlaySidebarActive = false
                },
              },
            }),
            _vm._v(" "),
            _c("calendar-event-handler", {
              attrs: {
                event: _vm.event,
                "clear-event-data": _vm.clearEventData,
                "is-event-handler-sidebar-active": false,
              },
              on: {
                "remove-event": _vm.removeEvent,
                "add-event": _vm.addEvent,
                "update-event": _vm.updateEvent,
              },
            }),
            _vm._v(" "),
            _c("calendar-appointment-detail", {
              attrs: { event: _vm.event },
              on: { "edit-appointment": _vm.editAppointment },
              model: {
                value: _vm.isEventHandlerSidebarActive,
                callback: function ($$v) {
                  _vm.isEventHandlerSidebarActive = $$v
                },
                expression: "isEventHandlerSidebarActive",
              },
            }),
            _vm._v(" "),
            _c("calendar-appointment-add", {
              attrs: { event: _vm.event },
              on: { "add-appointment": _vm.addAppointment },
              model: {
                value: _vm.isNewEventHandlerModalActive,
                callback: function ($$v) {
                  _vm.isNewEventHandlerModalActive = $$v
                },
                expression: "isNewEventHandlerModalActive",
              },
            }),
          ],
          1
        ),
      ]),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "info-modal",
          attrs: {
            id: "modal-center",
            centered: "",
            title: _vm.$t("appointments.modal_next_title"),
            visible: _vm.activeModal,
            "ok-title": _vm.$t("accept"),
            "ok-only": "",
          },
          on: {
            hidden: function ($event) {
              _vm.activeModal = false
            },
          },
        },
        [
          _vm.nextAppointments.length > 0
            ? _c(
                "div",
                [
                  _c(
                    "app-timeline",
                    { staticClass: "mt-2" },
                    _vm._l(_vm.nextAppointments, function (item, index) {
                      return _c(
                        "app-timeline-item",
                        {
                          key: index,
                          attrs: {
                            variant: _vm.resolveStateAppointmentColor(
                              item.state ? item.state : "primary"
                            ),
                          },
                        },
                        [
                          _c("p", [
                            _c("strong", [
                              _vm._v(
                                _vm._s(_vm.$t("appointments.appointment")) +
                                  " " +
                                  _vm._s(item.custom_date_diff_humans)
                              ),
                            ]),
                            _vm._v(" "),
                            _c(
                              "small",
                              { staticClass: "text-muted text-capitalize" },
                              [_vm._v(_vm._s(_vm.dateTimeFormat(item.date)))]
                            ),
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0",
                            },
                            [
                              _c("p", [
                                _vm._v(
                                  "\n\t\t\t\t\t\t\t\t" + _vm._s(item.full_name)
                                ),
                                _c("br"),
                                _vm._v(" "),
                                _c(
                                  "small",
                                  { staticClass: "text-secondary" },
                                  [
                                    _c("feather-icon", {
                                      attrs: {
                                        icon: "TerminalIcon",
                                        size: "16",
                                      },
                                    }),
                                    _vm._v(
                                      _vm._s(item.document_type) +
                                        ": " +
                                        _vm._s(item.rut)
                                    ),
                                  ],
                                  1
                                ),
                                _c("br"),
                                _vm._v(" "),
                                _c(
                                  "small",
                                  { staticClass: "text-secondary" },
                                  [
                                    _c("feather-icon", {
                                      attrs: { icon: "MailIcon", size: "16" },
                                    }),
                                    _vm._v(" " + _vm._s(item.email)),
                                  ],
                                  1
                                ),
                                _c("br"),
                                _vm._v(" "),
                                _c(
                                  "small",
                                  { staticClass: "text-secondary" },
                                  [
                                    _c("feather-icon", {
                                      attrs: { icon: "PhoneIcon", size: "16" },
                                    }),
                                    _vm._v(" " + _vm._s(item.phone)),
                                  ],
                                  1
                                ),
                                _c("br"),
                                _vm._v(" "),
                                _c(
                                  "small",
                                  [
                                    _vm._v(
                                      "\n\t\t\t\t\t\t\t\t\t" +
                                        _vm._s(_vm.$t("appointments.state")) +
                                        ":\n\t\t\t\t\t\t\t\t\t"
                                    ),
                                    _c(
                                      "b-badge",
                                      {
                                        attrs: {
                                          variant:
                                            "" +
                                            _vm.resolveStateAppointmentColor(
                                              item.state
                                            ),
                                        },
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm.resolveStateAppointment(
                                              item.state
                                            )
                                          )
                                        ),
                                      ]
                                    ),
                                  ],
                                  1
                                ),
                              ]),
                            ]
                          ),
                          _vm._v(" "),
                          _c("small", [
                            _vm._v(
                              _vm._s(
                                _vm.$t("appointments.table_observations")
                              ) +
                                ": " +
                                _vm._s(item.intern_observation)
                            ),
                          ]),
                          _vm._v(" "),
                          _c(
                            "b-media",
                            {
                              staticClass: "mt-1",
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "aside",
                                    fn: function () {
                                      return [
                                        _c("b-avatar", {
                                          attrs: {
                                            size: "24",
                                            src: null,
                                            text: _vm.avatarText(item.name),
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
                              _c("small", [
                                _vm._v(
                                  _vm._s(
                                    _vm
                                      .$t("appointments.doctor_will_assist_you")
                                      .replace(":doctor", item.name)
                                  )
                                ),
                              ]),
                            ]
                          ),
                        ],
                        1
                      )
                    }),
                    1
                  ),
                ],
                1
              )
            : _c("div", [
                !_vm.isLoading
                  ? _c(
                      "div",
                      { staticClass: "d-flex w-100 justify-content-center" },
                      [
                        _c("h5", { staticClass: "mb-1" }, [
                          _vm._v(
                            "\n\t\t\t\t\t\t" +
                              _vm._s(_vm.$t("appointments.modal_next_empty")) +
                              "\n\t\t\t\t\t"
                          ),
                        ]),
                      ]
                    )
                  : _vm._e(),
              ]),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/CalendarAppointmentAdd.vue?vue&type=template&id=5a25dfde&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/calendar/CalendarAppointmentAdd.vue?vue&type=template&id=5a25dfde&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
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
          ref: "info-modal",
          attrs: {
            id: "modal-center",
            title: "" + _vm.$t("appointments.add.desc"),
            "no-close-on-backdrop": "",
            "no-close-on-esc": "",
            visible: _vm.isNewEventHandlerModalActive,
            "hide-footer": "",
            "ok-title": _vm.$t("save"),
            "cancel-title": _vm.$t("cancel"),
          },
          on: {
            cancel: function ($event) {
              return _vm.$emit(
                "update:is-new-event-handler-modal-active",
                false
              )
            },
          },
        },
        [
          _c(
            "validation-observer",
            { ref: "refFormObserver" },
            [
              _c(
                "b-form",
                {
                  on: {
                    submit: function ($event) {
                      $event.preventDefault()
                      return _vm.onSubmit($event)
                    },
                  },
                },
                [
                  _c(
                    "b-row",
                    [
                      _c(
                        "b-col",
                        { attrs: { cols: "12", md: "6" } },
                        [
                          _c("validation-provider", {
                            attrs: {
                              name: _vm.$t("branch_office"),
                              rules: "required",
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function (validationContext) {
                                  return [
                                    _c(
                                      "b-form-group",
                                      {
                                        attrs: {
                                          label: _vm.$t("branch_office"),
                                          "label-for": "branch_office_id",
                                          state:
                                            _vm.getValidationState(
                                              validationContext
                                            ),
                                        },
                                      },
                                      [
                                        _c("v-select", {
                                          staticClass: "select-size-sm",
                                          attrs: {
                                            options: _vm.branchs,
                                            reduce: function (option) {
                                              return option.id
                                            },
                                            label: "name",
                                            "input-id": "branch_office_id",
                                            clearable: false,
                                            searchable: false,
                                          },
                                          model: {
                                            value:
                                              _vm.appointmentData
                                                .branch_office_id,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.appointmentData,
                                                "branch_office_id",
                                                $$v
                                              )
                                            },
                                            expression:
                                              "appointmentData.branch_office_id",
                                          },
                                        }),
                                      ],
                                      1
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
                      _c(
                        "b-col",
                        { attrs: { cols: "12", md: "6" } },
                        [
                          _c("validation-provider", {
                            attrs: {
                              name: _vm.$t("appointments.professional"),
                              rules: "required",
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function (validationContext) {
                                  return [
                                    _c(
                                      "b-form-group",
                                      {
                                        attrs: {
                                          label: _vm.$t(
                                            "appointments.professional"
                                          ),
                                          "label-for": "add-professional",
                                          state:
                                            _vm.getValidationState(
                                              validationContext
                                            ),
                                        },
                                      },
                                      [
                                        _c("b-form-input", {
                                          attrs: {
                                            size: "sm",
                                            value:
                                              _vm.selectedProfessional.name,
                                            readonly: "",
                                          },
                                        }),
                                      ],
                                      1
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
                      _c(
                        "b-col",
                        { attrs: { cols: "12", md: "12" } },
                        [
                          _c("validation-provider", {
                            attrs: {
                              name: _vm.$t("patients.patient"),
                              rules: "required",
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function (validationContext) {
                                  return [
                                    _c(
                                      "b-form-group",
                                      {
                                        attrs: {
                                          label: _vm.$t("patients.patient"),
                                          "label-for": "patient_id",
                                          state:
                                            _vm.getValidationState(
                                              validationContext
                                            ),
                                        },
                                      },
                                      [
                                        _c("v-select", {
                                          staticClass: "select-size-sm",
                                          attrs: {
                                            options: _vm.patients,
                                            label: "full_name",
                                            "input-id": "patient_id",
                                            clearable: false,
                                            searchable: true,
                                            placeholder: _vm.$t(
                                              "patients.search_options"
                                            ),
                                          },
                                          on: {
                                            search: _vm.onSearchPatient,
                                            input: _vm.selectPatient,
                                          },
                                          scopedSlots: _vm._u(
                                            [
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
                                                              "v-b-toggle.sidebar-add-new-patient",
                                                            modifiers: {
                                                              "sidebar-add-new-patient": true,
                                                            },
                                                          },
                                                        ],
                                                        staticClass:
                                                          "add-new-client-header text-success d-flex align-items-center my-75",
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
                                                            staticClass:
                                                              "align-middle ml-25",
                                                          },
                                                          [
                                                            _vm._v(
                                                              _vm._s(
                                                                _vm.$t(
                                                                  "patients.title_add"
                                                                )
                                                              )
                                                            ),
                                                          ]
                                                        ),
                                                      ],
                                                      1
                                                    ),
                                                  ]
                                                },
                                                proxy: true,
                                              },
                                            ],
                                            null,
                                            true
                                          ),
                                          model: {
                                            value: _vm.appointmentData.patient,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.appointmentData,
                                                "patient",
                                                $$v
                                              )
                                            },
                                            expression:
                                              "appointmentData.patient",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                  ]
                                },
                              },
                            ]),
                          }),
                          _vm._v(" "),
                          _c("sidebar-add-new-patient", {
                            attrs: {
                              "is-add-new-patient-sidebar-active":
                                _vm.isAddNewPatientSidebarActive,
                            },
                            on: {
                              "update:isAddNewPatientSidebarActive": function (
                                $event
                              ) {
                                _vm.isAddNewPatientSidebarActive = $event
                              },
                              "update:is-add-new-patient-sidebar-active":
                                function ($event) {
                                  _vm.isAddNewPatientSidebarActive = $event
                                },
                              "add-patient": _vm.addPatient,
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { cols: "12", md: "12" } },
                        [
                          _c("validation-provider", {
                            attrs: {
                              name: _vm.$t("appointments.duration"),
                              rules: "required",
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function (validationContext) {
                                  return [
                                    _c(
                                      "b-form-group",
                                      {
                                        attrs: {
                                          label: _vm.$t(
                                            "appointments.duration"
                                          ),
                                          "label-for": "event-duration",
                                          state:
                                            _vm.getValidationState(
                                              validationContext
                                            ),
                                        },
                                      },
                                      [
                                        _c("b-form-input", {
                                          attrs: {
                                            size: "sm",
                                            "input-id": "event-duration",
                                            type: "number",
                                            placeholder: _vm.$t(
                                              "appointments.duration_placeholder"
                                            ),
                                          },
                                          model: {
                                            value: _vm.appointmentData.duration,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.appointmentData,
                                                "duration",
                                                $$v
                                              )
                                            },
                                            expression:
                                              "appointmentData.duration",
                                          },
                                        }),
                                      ],
                                      1
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
                      _c(
                        "b-col",
                        { attrs: { cols: "12", md: "12" } },
                        [
                          _c("validation-provider", {
                            attrs: {
                              name: _vm.$t("appointments.times_availables"),
                              rules: "required",
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function (validationContext) {
                                  return [
                                    _c(
                                      "b-form-group",
                                      {
                                        attrs: {
                                          label: _vm.$t(
                                            "appointments.times_availables"
                                          ),
                                          state:
                                            _vm.getValidationState(
                                              validationContext
                                            ),
                                        },
                                      },
                                      [
                                        _c("b-form-radio-group", {
                                          staticClass:
                                            "text-left demo-inline-spacing",
                                          attrs: {
                                            options: _vm.event.timeAvailables,
                                            name: "radio-inline",
                                          },
                                          model: {
                                            value:
                                              _vm.appointmentData.timeAvailable,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.appointmentData,
                                                "timeAvailable",
                                                $$v
                                              )
                                            },
                                            expression:
                                              "appointmentData.timeAvailable",
                                          },
                                        }),
                                      ],
                                      1
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
                      _c(
                        "b-col",
                        { attrs: { cols: "12", md: "12" } },
                        [
                          _c(
                            "b-form-group",
                            {
                              attrs: {
                                label: _vm.$t("appointments.observations"),
                                "label-for": "event-observation",
                              },
                            },
                            [
                              _c("b-form-textarea", {
                                attrs: {
                                  size: "sm",
                                  id: "event-observation",
                                  placeholder: _vm.$t(
                                    "appointments.observations_placeholder"
                                  ),
                                },
                                model: {
                                  value: _vm.appointmentData.intern_observation,
                                  callback: function ($$v) {
                                    _vm.$set(
                                      _vm.appointmentData,
                                      "intern_observation",
                                      $$v
                                    )
                                  },
                                  expression:
                                    "appointmentData.intern_observation",
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
                  _c(
                    "div",
                    { staticClass: "d-flex mt-2" },
                    [
                      _c(
                        "b-button",
                        {
                          staticClass: "mb-1 mb-sm-0 mr-0 mr-sm-1",
                          attrs: { variant: "outline-secondary" },
                          on: {
                            click: function ($event) {
                              return _vm.$emit(
                                "update:is-new-event-handler-modal-active",
                                false
                              )
                            },
                          },
                        },
                        [
                          _vm._v(
                            "\n                        " +
                              _vm._s(_vm.$t("cancel")) +
                              "\n                    "
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _vm.canAccess("appointments.store")
                        ? _c(
                            "b-button",
                            {
                              staticClass: "mb-1 mb-sm-0 mr-0 mr-sm-1",
                              attrs: {
                                disabled: _vm.loading,
                                variant: "primary",
                                type: "submit",
                              },
                            },
                            [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(_vm.$t("save")) +
                                  "\n                    "
                              ),
                            ]
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
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/CalendarAppointmentEdit.vue?vue&type=template&id=d34679c6&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/calendar/CalendarAppointmentEdit.vue?vue&type=template&id=d34679c6&scoped=true& ***!
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
    "div",
    [
      _c(
        "b-modal",
        {
          ref: "info-modal",
          attrs: {
            id: "modal-center",
            title: "" + _vm.$t("appointments.add.desc"),
            "no-close-on-backdrop": "",
            "no-close-on-esc": "",
            visible: _vm.isEditEventHandlerModalActive,
            "hide-footer": "",
            "ok-title": _vm.$t("save"),
            "cancel-title": _vm.$t("cancel"),
          },
          on: {
            cancel: function ($event) {
              return _vm.$emit(
                "update:is-new-event-handler-modal-active",
                false
              )
            },
          },
        },
        [
          _c(
            "validation-observer",
            { ref: "refFormObserver" },
            [
              _c(
                "b-form",
                {
                  on: {
                    submit: function ($event) {
                      $event.preventDefault()
                      return _vm.onSubmit($event)
                    },
                  },
                },
                [
                  _c(
                    "b-row",
                    [
                      _c(
                        "b-col",
                        { attrs: { cols: "12", md: "6" } },
                        [
                          _c("validation-provider", {
                            attrs: {
                              name: _vm.$t("branch_office"),
                              rules: "required",
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function (validationContext) {
                                  return [
                                    _c(
                                      "b-form-group",
                                      {
                                        attrs: {
                                          label: _vm.$t("branch_office"),
                                          "label-for": "branch_office_id",
                                          state:
                                            _vm.getValidationState(
                                              validationContext
                                            ),
                                        },
                                      },
                                      [
                                        _c("v-select", {
                                          staticClass: "select-size-sm",
                                          attrs: {
                                            options: _vm.branchs,
                                            reduce: function (option) {
                                              return option.id
                                            },
                                            label: "name",
                                            "input-id": "branch_office_id",
                                            clearable: false,
                                            searchable: false,
                                          },
                                          model: {
                                            value:
                                              _vm.appointmentData
                                                .branch_office_id,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.appointmentData,
                                                "branch_office_id",
                                                $$v
                                              )
                                            },
                                            expression:
                                              "appointmentData.branch_office_id",
                                          },
                                        }),
                                      ],
                                      1
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
                      _c(
                        "b-col",
                        { attrs: { cols: "12", md: "6" } },
                        [
                          _c("validation-provider", {
                            attrs: {
                              name: _vm.$t("appointments.professional"),
                              rules: "required",
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function (validationContext) {
                                  return [
                                    _c(
                                      "b-form-group",
                                      {
                                        attrs: {
                                          label: _vm.$t(
                                            "appointments.professional"
                                          ),
                                          "label-for": "add-professional",
                                          state:
                                            _vm.getValidationState(
                                              validationContext
                                            ),
                                        },
                                      },
                                      [
                                        _c("b-form-input", {
                                          attrs: {
                                            size: "sm",
                                            value:
                                              _vm.selectedProfessional.name,
                                            readonly: "",
                                          },
                                        }),
                                      ],
                                      1
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
                      _c(
                        "b-col",
                        { attrs: { cols: "12", md: "12" } },
                        [
                          _c("validation-provider", {
                            attrs: {
                              name: _vm.$t("patients.patient"),
                              rules: "required",
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function (validationContext) {
                                  return [
                                    _c(
                                      "b-form-group",
                                      {
                                        attrs: {
                                          label: _vm.$t("patients.patient"),
                                          "label-for": "patient_id",
                                          state:
                                            _vm.getValidationState(
                                              validationContext
                                            ),
                                        },
                                      },
                                      [
                                        _c("v-select", {
                                          staticClass: "select-size-sm",
                                          attrs: {
                                            options: _vm.patients,
                                            label: "full_name",
                                            "input-id": "patient_id",
                                            clearable: false,
                                            searchable: true,
                                            placeholder: _vm.$t(
                                              "patients.search_options"
                                            ),
                                          },
                                          on: {
                                            search: _vm.onSearchPatient,
                                            input: _vm.selectPatient,
                                          },
                                          scopedSlots: _vm._u(
                                            [
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
                                                              "v-b-toggle.sidebar-add-new-patient",
                                                            modifiers: {
                                                              "sidebar-add-new-patient": true,
                                                            },
                                                          },
                                                        ],
                                                        staticClass:
                                                          "add-new-client-header text-success d-flex align-items-center my-75",
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
                                                            staticClass:
                                                              "align-middle ml-25",
                                                          },
                                                          [
                                                            _vm._v(
                                                              _vm._s(
                                                                _vm.$t(
                                                                  "patients.title_add"
                                                                )
                                                              )
                                                            ),
                                                          ]
                                                        ),
                                                      ],
                                                      1
                                                    ),
                                                  ]
                                                },
                                                proxy: true,
                                              },
                                            ],
                                            null,
                                            true
                                          ),
                                          model: {
                                            value: _vm.appointmentData.patient,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.appointmentData,
                                                "patient",
                                                $$v
                                              )
                                            },
                                            expression:
                                              "appointmentData.patient",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                  ]
                                },
                              },
                            ]),
                          }),
                          _vm._v(" "),
                          _c("sidebar-add-new-patient", {
                            attrs: {
                              "is-add-new-patient-sidebar-active":
                                _vm.isAddNewPatientSidebarActive,
                            },
                            on: {
                              "update:isAddNewPatientSidebarActive": function (
                                $event
                              ) {
                                _vm.isAddNewPatientSidebarActive = $event
                              },
                              "update:is-add-new-patient-sidebar-active":
                                function ($event) {
                                  _vm.isAddNewPatientSidebarActive = $event
                                },
                              "add-patient": _vm.addPatient,
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { cols: "12", md: "6" } },
                        [
                          _c("validation-provider", {
                            attrs: {
                              name: _vm.$t("appointments.duration"),
                              rules: "required",
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function (validationContext) {
                                  return [
                                    _c(
                                      "b-form-group",
                                      {
                                        attrs: {
                                          label: _vm.$t(
                                            "appointments.duration"
                                          ),
                                          "label-for": "event-duration",
                                          state:
                                            _vm.getValidationState(
                                              validationContext
                                            ),
                                        },
                                      },
                                      [
                                        _c("b-form-input", {
                                          attrs: {
                                            size: "sm",
                                            "input-id": "event-duration",
                                            type: "number",
                                            placeholder: _vm.$t(
                                              "appointments.duration_placeholder"
                                            ),
                                          },
                                          model: {
                                            value: _vm.appointmentData.duration,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.appointmentData,
                                                "duration",
                                                $$v
                                              )
                                            },
                                            expression:
                                              "appointmentData.duration",
                                          },
                                        }),
                                      ],
                                      1
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
                      _c(
                        "b-col",
                        { attrs: { cols: "12", md: "6", lg: "6" } },
                        [
                          _c(
                            "b-form-group",
                            {
                              attrs: {
                                label: _vm.$t("appointments.date"),
                                description: !_vm.isAvailable
                                  ? _vm.$t("appointments.not_available_help")
                                  : "",
                                "label-for": "date",
                              },
                            },
                            [
                              _c("flat-pickr", {
                                staticClass: "form-control",
                                class: !_vm.isAvailable ? "is-invalid" : "",
                                attrs: {
                                  config: {
                                    minDate: _vm.minDate,
                                    enableTime: true,
                                    time_24hr: true,
                                    dateFormat: "d/m/Y H:i",
                                    minTime: _vm.slotMinTime,
                                    maxTime: _vm.slotMaxTime,
                                    minuteIncrement: _vm.slotInterval,
                                  },
                                  placeholder: "DD-MM-YYYY H:I:S",
                                },
                                on: {
                                  "on-change": _vm.onChange,
                                  "on-ValueUpdate": _vm.onChange,
                                },
                                model: {
                                  value: _vm.appointmentData.date,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.appointmentData, "date", $$v)
                                  },
                                  expression: "appointmentData.date",
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
                        { attrs: { cols: "12", md: "12" } },
                        [
                          _c(
                            "b-form-group",
                            {
                              attrs: {
                                label: _vm.$t("appointments.observations"),
                                "label-for": "event-observation",
                              },
                            },
                            [
                              _c("b-form-textarea", {
                                attrs: {
                                  size: "sm",
                                  id: "event-observation",
                                  placeholder: _vm.$t(
                                    "appointments.observations_placeholder"
                                  ),
                                },
                                model: {
                                  value: _vm.appointmentData.intern_observation,
                                  callback: function ($$v) {
                                    _vm.$set(
                                      _vm.appointmentData,
                                      "intern_observation",
                                      $$v
                                    )
                                  },
                                  expression:
                                    "appointmentData.intern_observation",
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
                  _c(
                    "div",
                    { staticClass: "d-flex mt-2" },
                    [
                      _c(
                        "b-button",
                        {
                          staticClass: "mb-1 mb-sm-0 mr-0 mr-sm-1",
                          attrs: { variant: "outline-secondary" },
                          on: {
                            click: function ($event) {
                              return _vm.$emit(
                                "update:is-new-event-handler-modal-active",
                                false
                              )
                            },
                          },
                        },
                        [
                          _vm._v(
                            "\n                        " +
                              _vm._s(_vm.$t("cancel")) +
                              "\n                    "
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _vm.canAccess("appointments.store")
                        ? _c(
                            "b-button",
                            {
                              staticClass: "mb-1 mb-sm-0 mr-0 mr-sm-1",
                              attrs: {
                                disabled: _vm.loading,
                                variant: "primary",
                                type: "submit",
                              },
                            },
                            [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(_vm.$t("save")) +
                                  "\n                    "
                              ),
                            ]
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
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/calendar-detail/AppointmentDetail.vue?vue&type=template&id=7f3fd6b3&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/calendar/calendar-detail/AppointmentDetail.vue?vue&type=template&id=7f3fd6b3&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
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
          ref: "info-modal",
          attrs: {
            id: "modal-center",
            centered: "",
            title: _vm.$t("patients.patient") + ": " + _vm.eventLocal.title,
            visible: _vm.isEventHandlerSidebarActive,
            size: _vm.isAdministrator ? "lg" : "sm",
            "hide-footer": "",
          },
          on: {
            hidden: function ($event) {
              return _vm.$emit("update:is-event-handler-sidebar-active", false)
            },
          },
        },
        [
          _c(
            "b-row",
            { staticClass: "match-height" },
            [
              _c(
                "b-col",
                {
                  attrs: {
                    cols: "12",
                    lg: _vm.isAdministrator ? "8" : "12",
                    md: "12",
                  },
                },
                [
                  _c(
                    "b-card",
                    {
                      staticClass: "card-developer-meetup",
                      attrs: { "no-body": "" },
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "bg-light-primary rounded-top text-center",
                        },
                        [
                          _c("b-img", {
                            attrs: {
                              src: __webpack_require__(/*! @/assets/images/illustration/marketing.svg */ "./resources/js/src/assets/images/illustration/marketing.svg"),
                              alt: "Meeting Pic",
                              height: "170",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-card-body",
                        [
                          _c(
                            "div",
                            {
                              staticClass:
                                "meetup-header d-flex align-items-center",
                            },
                            [
                              _c("div", { staticClass: "meetup-day d-none" }, [
                                _c(
                                  "h6",
                                  { staticClass: "mb-0 text-uppercase" },
                                  [
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(_vm.$t("today"))
                                    ),
                                    _c("br"),
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(_vm.momentFormat(null, "dddd")) +
                                        "\n                                "
                                    ),
                                  ]
                                ),
                                _vm._v(" "),
                                _c("h3", { staticClass: "mb-0" }, [
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(_vm.momentFormat(null, "DD")) +
                                      "\n                                "
                                  ),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "my-auto" },
                                [
                                  _c("b-card-title", { staticClass: "mb-25" }, [
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(
                                          _vm.eventLocal.extendedProps.folio
                                        ) +
                                        "\n                                "
                                    ),
                                  ]),
                                  _vm._v(" "),
                                  _c("b-card-text", { staticClass: "mb-0" }, [
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(
                                          _vm.t("appointments.observations")
                                        ) +
                                        ": "
                                    ),
                                    _c("small", [
                                      _vm._v(
                                        _vm._s(
                                          _vm.eventLocal.extendedProps
                                            .intern_observation
                                        )
                                      ),
                                    ]),
                                  ]),
                                ],
                                1
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-media",
                            { attrs: { "no-body": "" } },
                            [
                              _c(
                                "b-media-aside",
                                { staticClass: "mr-1" },
                                [
                                  _c(
                                    "b-avatar",
                                    {
                                      attrs: {
                                        rounded: "",
                                        variant: "light-primary",
                                        size: "34",
                                      },
                                    },
                                    [
                                      _c("feather-icon", {
                                        attrs: {
                                          icon: "CalendarIcon",
                                          size: "18",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("b-media-body", [
                                _c(
                                  "h6",
                                  { staticClass: "mb-0 text-capitalize" },
                                  [
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(
                                          _vm.dateFormat(
                                            _vm.eventLocal.extendedProps.date,
                                            "MMM D YYYY H:mm a"
                                          )
                                        ) +
                                        "\n                                "
                                    ),
                                  ]
                                ),
                                _vm._v(" "),
                                _c("small", { staticClass: "text-uppercase" }, [
                                  _vm._v(
                                    _vm._s(
                                      _vm.dateFormat(
                                        _vm.eventLocal.extendedProps.start_at,
                                        "H:mm a"
                                      )
                                    ) +
                                      " a " +
                                      _vm._s(
                                        _vm.dateFormat(
                                          _vm.eventLocal.extendedProps.end_at,
                                          "H:mm a"
                                        )
                                      )
                                  ),
                                ]),
                              ]),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-media",
                            { attrs: { "no-body": "" } },
                            [
                              _c(
                                "b-media-aside",
                                { staticClass: "mr-1" },
                                [
                                  _c(
                                    "b-avatar",
                                    {
                                      attrs: {
                                        rounded: "",
                                        variant: "light-primary",
                                        size: "34",
                                      },
                                    },
                                    [
                                      _c("feather-icon", {
                                        attrs: { icon: "InfoIcon", size: "18" },
                                      }),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("b-media-body", [
                                _c(
                                  "h6",
                                  { staticClass: "mb-0 text-capitalize" },
                                  [
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(_vm.$t("appointments.state")) +
                                        "\n                                "
                                    ),
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "small",
                                  [
                                    _c(
                                      "b-badge",
                                      {
                                        attrs: {
                                          variant:
                                            "light-" +
                                            _vm.resolveStateAppointmentColor(
                                              _vm.eventLocal.extendedProps.state
                                            ),
                                        },
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm.resolveStateAppointment(
                                              _vm.eventLocal.extendedProps.state
                                            )
                                          )
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
                          _vm._v(" "),
                          _vm.eventLocal.extendedProps.doctor_name
                            ? _c(
                                "b-avatar-group",
                                { staticClass: "mt-2 pt-50" },
                                [
                                  _c("b-avatar", {
                                    directives: [
                                      {
                                        name: "b-tooltip",
                                        rawName: "v-b-tooltip.hover.bottom",
                                        value:
                                          _vm.eventLocal.extendedProps
                                            .doctor_name,
                                        expression:
                                          "eventLocal.extendedProps.doctor_name",
                                        modifiers: {
                                          hover: true,
                                          bottom: true,
                                        },
                                      },
                                    ],
                                    staticClass: "pull-up",
                                    attrs: {
                                      src: _vm.eventLocal.extendedProps.doctor
                                        .has_media
                                        ? _vm.eventLocal.extendedProps.doctor
                                            .avatar
                                        : null,
                                      text: _vm.avatarText(
                                        _vm.eventLocal.extendedProps.doctor_name
                                      ),
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "h6",
                                    {
                                      staticClass:
                                        "align-self-center cursor-pointer ml-1 mb-0",
                                    },
                                    [
                                      _c("small", [
                                        _vm._v(
                                          _vm._s(
                                            _vm
                                              .$t(
                                                "appointments.doctor_will_assist_you"
                                              )
                                              .replace(
                                                ":doctor",
                                                _vm.eventLocal.extendedProps
                                                  .doctor_name
                                              )
                                          )
                                        ),
                                      ]),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          !_vm.isDoctor
                            ? _c(
                                "div",
                                { staticClass: "demo-inline-spacing mt-1" },
                                [
                                  _vm.eventLocal.extendedProps.calendar ===
                                  "pending"
                                    ? _c(
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
                                          attrs: {
                                            size: "sm",
                                            disabled: !_vm.youCanConfirm,
                                            variant: "outline-success",
                                          },
                                          on: {
                                            click: function ($event) {
                                              return _vm.changeStatus(
                                                _vm.eventLocal.extendedProps,
                                                "confirmed"
                                              )
                                            },
                                          },
                                        },
                                        [
                                          _c("feather-icon", {
                                            attrs: {
                                              icon: "CheckIcon",
                                              size: "16",
                                            },
                                          }),
                                          _vm._v(
                                            "\n                                " +
                                              _vm._s(_vm.$t("button_confirm")) +
                                              "\n                            "
                                          ),
                                        ],
                                        1
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.eventLocal.extendedProps.calendar !==
                                  "canceled"
                                    ? _c(
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
                                          attrs: {
                                            size: "sm",
                                            variant: "outline-danger",
                                          },
                                          on: {
                                            click: function ($event) {
                                              return _vm.changeStatus(
                                                _vm.eventLocal.extendedProps,
                                                "canceled"
                                              )
                                            },
                                          },
                                        },
                                        [
                                          _c("feather-icon", {
                                            attrs: {
                                              icon: "XIcon",
                                              size: "16",
                                            },
                                          }),
                                          _vm._v(
                                            "\n                                " +
                                              _vm._s(_vm.$t("button_cancel")) +
                                              "\n                            "
                                          ),
                                        ],
                                        1
                                      )
                                    : _vm._e(),
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          !_vm.isDoctor
                            ? _c(
                                "div",
                                { staticClass: "demo-inline-spacing mt-1" },
                                [
                                  _vm.eventLocal.extendedProps.calendar !==
                                  "canceled"
                                    ? _c(
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
                                          attrs: {
                                            size: "sm",
                                            variant: "primary",
                                          },
                                          on: {
                                            click: function ($event) {
                                              _vm.isEditEventHandlerModalActive = true
                                            },
                                          },
                                        },
                                        [
                                          _c("feather-icon", {
                                            attrs: {
                                              icon: "EditIcon",
                                              size: "16",
                                            },
                                          }),
                                          _vm._v(
                                            "\n                                " +
                                              _vm._s(_vm.$t("button_edit")) +
                                              "\n                            "
                                          ),
                                        ],
                                        1
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.eventLocal.extendedProps.calendar !==
                                  "canceled"
                                    ? _c(
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
                                          attrs: {
                                            size: "sm",
                                            variant: "warning",
                                          },
                                          on: {
                                            click: function ($event) {
                                              return _vm.sendWhatsapp(
                                                _vm.eventLocal.extendedProps
                                              )
                                            },
                                          },
                                        },
                                        [
                                          _c("feather-icon", {
                                            attrs: {
                                              icon: "BellIcon",
                                              size: "16",
                                            },
                                          }),
                                          _vm._v(
                                            "\n                                " +
                                              _vm._s(_vm.$t("button_notify")) +
                                              "\n                            "
                                          ),
                                        ],
                                        1
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.isAdministrator
                                    ? _c(
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
                                          attrs: {
                                            size: "sm",
                                            variant: "secondary",
                                          },
                                          on: {
                                            click: function ($event) {
                                              return _vm.$router.push({
                                                name: "apps-patients-view",
                                                params: {
                                                  id: _vm.eventLocal
                                                    .extendedProps.patient_id,
                                                },
                                              })
                                            },
                                          },
                                        },
                                        [
                                          _c("feather-icon", {
                                            attrs: {
                                              icon: "EyeIcon",
                                              size: "16",
                                            },
                                          }),
                                          _vm._v(
                                            "\n                                " +
                                              _vm._s(
                                                _vm.$t("patients.patient")
                                              ) +
                                              "\n                            "
                                          ),
                                        ],
                                        1
                                      )
                                    : _vm._e(),
                                ],
                                1
                              )
                            : _c(
                                "div",
                                { staticClass: "mt-3" },
                                [
                                  _vm.canAccess("patients.show")
                                    ? _c(
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
                                          attrs: {
                                            size: "sm",
                                            variant: "primary",
                                          },
                                          on: {
                                            click: function ($event) {
                                              return _vm.$router.push({
                                                name: "apps-patients-view",
                                                params: {
                                                  id: _vm.eventLocal
                                                    .extendedProps.patient_id,
                                                },
                                              })
                                            },
                                          },
                                        },
                                        [
                                          _c("feather-icon", {
                                            attrs: {
                                              icon: "EyeIcon",
                                              size: "16",
                                            },
                                          }),
                                          _vm._v(
                                            "\n                                " +
                                              _vm._s(
                                                _vm.$t("patients.detail.title")
                                              ) +
                                              "\n                            "
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
              ),
              _vm._v(" "),
              _vm.isAdministrator
                ? _c(
                    "b-col",
                    { attrs: { cols: "12", lg: "4", md: "12" } },
                    [
                      _c(
                        "b-card",
                        { staticClass: "card-code", attrs: { "no-body": "" } },
                        [
                          _c("h6", { staticClass: "text-center mt-1" }, [
                            _vm._v(
                              _vm._s(_vm.$t("appointments.dating_timeline"))
                            ),
                          ]),
                          _vm._v(" "),
                          _c(
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
                                "app-timeline",
                                { staticClass: "mt-2" },
                                _vm._l(
                                  _vm.appointment.logs,
                                  function (item, index) {
                                    return _c(
                                      "app-timeline-item",
                                      {
                                        key: index,
                                        attrs: {
                                          variant:
                                            _vm.resolveStateAppointmentColor(
                                              item.state
                                                ? item.state
                                                : "primary"
                                            ),
                                        },
                                      },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0",
                                          },
                                          [
                                            _c(
                                              "small",
                                              { staticClass: "text-muted" },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.dateTimeFormat(
                                                      item.created_at
                                                    )
                                                  )
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("small", [
                                          _vm._v(_vm._s(item.comments)),
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "b-media",
                                          {
                                            staticClass: "mt-1",
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "aside",
                                                  fn: function () {
                                                    return [
                                                      _c("b-avatar", {
                                                        attrs: {
                                                          size: "24",
                                                          src: item.user
                                                            .has_media
                                                            ? item.user.avatar
                                                            : null,
                                                          text: _vm.avatarText(
                                                            item.user.name
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
                                            _c("small", [
                                              _vm._v(_vm._s(item.user.name)),
                                            ]),
                                          ]
                                        ),
                                      ],
                                      1
                                    )
                                  }
                                ),
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
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c("calendar-appointment-edit", {
        attrs: { event: _vm.appointment },
        on: { "edit-appointment": _vm.editAppointment },
        model: {
          value: _vm.isEditEventHandlerModalActive,
          callback: function ($$v) {
            _vm.isEditEventHandlerModalActive = $$v
          },
          expression: "isEditEventHandlerModalActive",
        },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/calendar-event-handler/CalendarEventHandler.vue?vue&type=template&id=16bc2672&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/calendar/calendar-event-handler/CalendarEventHandler.vue?vue&type=template&id=16bc2672& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
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
      _c("b-sidebar", {
        attrs: {
          id: "sidebar-add-new-event",
          "sidebar-class": "sidebar-lg",
          visible: _vm.isEventHandlerSidebarActive,
          "bg-variant": "white",
          shadow: "",
          backdrop: "",
          "no-header": "",
          right: "",
        },
        on: {
          change: function (val) {
            return _vm.$emit("update:is-event-handler-sidebar-active", val)
          },
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
                      _vm._v(
                        "\n          " +
                          _vm._s(_vm.eventLocal.id ? "Update" : "Add") +
                          " Event\n        "
                      ),
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      [
                        _vm.eventLocal.id
                          ? _c("feather-icon", {
                              staticClass: "cursor-pointer",
                              attrs: { icon: "TrashIcon" },
                              on: {
                                click: function ($event) {
                                  _vm.$emit("remove-event")
                                  hide()
                                },
                              },
                            })
                          : _vm._e(),
                        _vm._v(" "),
                        _c("feather-icon", {
                          staticClass: "ml-1 cursor-pointer",
                          attrs: { icon: "XIcon", size: "16" },
                          on: { click: hide },
                        }),
                      ],
                      1
                    ),
                  ]
                ),
                _vm._v(" "),
                _c("validation-observer", {
                  ref: "refFormObserver",
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "default",
                        fn: function (ref) {
                          var handleSubmit = ref.handleSubmit
                          return [
                            _c(
                              "b-form",
                              {
                                staticClass: "p-2",
                                on: {
                                  submit: function ($event) {
                                    $event.preventDefault()
                                    return handleSubmit(_vm.onSubmit)
                                  },
                                  reset: function ($event) {
                                    $event.preventDefault()
                                    return _vm.resetForm($event)
                                  },
                                },
                              },
                              [
                                _c("validation-provider", {
                                  attrs: { name: "Title", rules: "required" },
                                  scopedSlots: _vm._u(
                                    [
                                      {
                                        key: "default",
                                        fn: function (validationContext) {
                                          return [
                                            _c(
                                              "b-form-group",
                                              {
                                                attrs: {
                                                  label: "Title",
                                                  "label-for": "event-title",
                                                },
                                              },
                                              [
                                                _c("b-form-input", {
                                                  attrs: {
                                                    id: "event-title",
                                                    autofocus: "",
                                                    state:
                                                      _vm.getValidationState(
                                                        validationContext
                                                      ),
                                                    trim: "",
                                                    placeholder: "Event Title",
                                                  },
                                                  model: {
                                                    value: _vm.eventLocal.title,
                                                    callback: function ($$v) {
                                                      _vm.$set(
                                                        _vm.eventLocal,
                                                        "title",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "eventLocal.title",
                                                  },
                                                }),
                                                _vm._v(" "),
                                                _c("b-form-invalid-feedback", [
                                                  _vm._v(
                                                    "\n                " +
                                                      _vm._s(
                                                        validationContext
                                                          .errors[0]
                                                      ) +
                                                      "\n              "
                                                  ),
                                                ]),
                                              ],
                                              1
                                            ),
                                          ]
                                        },
                                      },
                                    ],
                                    null,
                                    true
                                  ),
                                }),
                                _vm._v(" "),
                                _c("validation-provider", {
                                  attrs: {
                                    name: "Calendar",
                                    rules: "required",
                                  },
                                  scopedSlots: _vm._u(
                                    [
                                      {
                                        key: "default",
                                        fn: function (validationContext) {
                                          return [
                                            _c(
                                              "b-form-group",
                                              {
                                                attrs: {
                                                  label: "Calendar",
                                                  "label-for": "calendar",
                                                  state:
                                                    _vm.getValidationState(
                                                      validationContext
                                                    ),
                                                },
                                              },
                                              [
                                                _c("v-select", {
                                                  attrs: {
                                                    dir: _vm.$store.state
                                                      .appConfig.isRTL
                                                      ? "rtl"
                                                      : "ltr",
                                                    options:
                                                      _vm.calendarOptions,
                                                    label: "label",
                                                    reduce: function (
                                                      calendar
                                                    ) {
                                                      return calendar.label
                                                    },
                                                    "input-id": "calendar",
                                                  },
                                                  scopedSlots: _vm._u(
                                                    [
                                                      {
                                                        key: "option",
                                                        fn: function (ref) {
                                                          var color = ref.color
                                                          var label = ref.label
                                                          return [
                                                            _c("div", {
                                                              staticClass:
                                                                "rounded-circle d-inline-block mr-50",
                                                              class:
                                                                "bg-" + color,
                                                              staticStyle: {
                                                                height: "10px",
                                                                width: "10px",
                                                              },
                                                            }),
                                                            _vm._v(" "),
                                                            _c("span", [
                                                              _vm._v(
                                                                " " +
                                                                  _vm._s(label)
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
                                                              class:
                                                                "bg-" + color,
                                                              staticStyle: {
                                                                height: "10px",
                                                                width: "10px",
                                                              },
                                                            }),
                                                            _vm._v(" "),
                                                            _c("span", [
                                                              _vm._v(
                                                                " " +
                                                                  _vm._s(label)
                                                              ),
                                                            ]),
                                                          ]
                                                        },
                                                      },
                                                    ],
                                                    null,
                                                    true
                                                  ),
                                                  model: {
                                                    value:
                                                      _vm.eventLocal
                                                        .extendedProps.calendar,
                                                    callback: function ($$v) {
                                                      _vm.$set(
                                                        _vm.eventLocal
                                                          .extendedProps,
                                                        "calendar",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "eventLocal.extendedProps.calendar",
                                                  },
                                                }),
                                                _vm._v(" "),
                                                _c(
                                                  "b-form-invalid-feedback",
                                                  {
                                                    attrs: {
                                                      state:
                                                        _vm.getValidationState(
                                                          validationContext
                                                        ),
                                                    },
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                " +
                                                        _vm._s(
                                                          validationContext
                                                            .errors[0]
                                                        ) +
                                                        "\n              "
                                                    ),
                                                  ]
                                                ),
                                              ],
                                              1
                                            ),
                                          ]
                                        },
                                      },
                                    ],
                                    null,
                                    true
                                  ),
                                }),
                                _vm._v(" "),
                                _c("validation-provider", {
                                  attrs: {
                                    name: "Start Date",
                                    rules: "required",
                                  },
                                  scopedSlots: _vm._u(
                                    [
                                      {
                                        key: "default",
                                        fn: function (validationContext) {
                                          return [
                                            _c(
                                              "b-form-group",
                                              {
                                                attrs: {
                                                  label: "Start Date",
                                                  "label-for": "start-date",
                                                  state:
                                                    _vm.getValidationState(
                                                      validationContext
                                                    ),
                                                },
                                              },
                                              [
                                                _c("flat-pickr", {
                                                  staticClass: "form-control",
                                                  attrs: {
                                                    config: {
                                                      enableTime: true,
                                                      dateFormat: "Y-m-d H:i",
                                                    },
                                                  },
                                                  model: {
                                                    value: _vm.eventLocal.start,
                                                    callback: function ($$v) {
                                                      _vm.$set(
                                                        _vm.eventLocal,
                                                        "start",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "eventLocal.start",
                                                  },
                                                }),
                                                _vm._v(" "),
                                                _c(
                                                  "b-form-invalid-feedback",
                                                  {
                                                    attrs: {
                                                      state:
                                                        _vm.getValidationState(
                                                          validationContext
                                                        ),
                                                    },
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                " +
                                                        _vm._s(
                                                          validationContext
                                                            .errors[0]
                                                        ) +
                                                        "\n              "
                                                    ),
                                                  ]
                                                ),
                                              ],
                                              1
                                            ),
                                          ]
                                        },
                                      },
                                    ],
                                    null,
                                    true
                                  ),
                                }),
                                _vm._v(" "),
                                _c("validation-provider", {
                                  attrs: {
                                    name: "End Date",
                                    rules: "required",
                                  },
                                  scopedSlots: _vm._u(
                                    [
                                      {
                                        key: "default",
                                        fn: function (validationContext) {
                                          return [
                                            _c(
                                              "b-form-group",
                                              {
                                                attrs: {
                                                  label: "End Date",
                                                  "label-for": "end-date",
                                                  state:
                                                    _vm.getValidationState(
                                                      validationContext
                                                    ),
                                                },
                                              },
                                              [
                                                _c("flat-pickr", {
                                                  staticClass: "form-control",
                                                  attrs: {
                                                    config: {
                                                      enableTime: true,
                                                      dateFormat: "Y-m-d H:i",
                                                    },
                                                  },
                                                  model: {
                                                    value: _vm.eventLocal.end,
                                                    callback: function ($$v) {
                                                      _vm.$set(
                                                        _vm.eventLocal,
                                                        "end",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "eventLocal.end",
                                                  },
                                                }),
                                                _vm._v(" "),
                                                _c(
                                                  "b-form-invalid-feedback",
                                                  {
                                                    attrs: {
                                                      state:
                                                        _vm.getValidationState(
                                                          validationContext
                                                        ),
                                                    },
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                " +
                                                        _vm._s(
                                                          validationContext
                                                            .errors[0]
                                                        ) +
                                                        "\n              "
                                                    ),
                                                  ]
                                                ),
                                              ],
                                              1
                                            ),
                                          ]
                                        },
                                      },
                                    ],
                                    null,
                                    true
                                  ),
                                }),
                                _vm._v(" "),
                                _c(
                                  "b-form-group",
                                  [
                                    _c(
                                      "b-form-checkbox",
                                      {
                                        attrs: {
                                          name: "check-button",
                                          switch: "",
                                          inline: "",
                                        },
                                        model: {
                                          value: _vm.eventLocal.allDay,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.eventLocal,
                                              "allDay",
                                              $$v
                                            )
                                          },
                                          expression: "eventLocal.allDay",
                                        },
                                      },
                                      [
                                        _vm._v(
                                          "\n              All Day\n            "
                                        ),
                                      ]
                                    ),
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("validation-provider", {
                                  attrs: { name: "Event URL", rules: "url" },
                                  scopedSlots: _vm._u(
                                    [
                                      {
                                        key: "default",
                                        fn: function (validationContext) {
                                          return [
                                            _c(
                                              "b-form-group",
                                              {
                                                attrs: {
                                                  label: "Event URL",
                                                  "label-for": "event-url",
                                                },
                                              },
                                              [
                                                _c("b-form-input", {
                                                  attrs: {
                                                    id: "event-url",
                                                    type: "url",
                                                    state:
                                                      _vm.getValidationState(
                                                        validationContext
                                                      ),
                                                    placeholder:
                                                      "htttps://www.google.com",
                                                    trim: "",
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.eventLocal.eventUrl,
                                                    callback: function ($$v) {
                                                      _vm.$set(
                                                        _vm.eventLocal,
                                                        "eventUrl",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "eventLocal.eventUrl",
                                                  },
                                                }),
                                                _vm._v(" "),
                                                _c(
                                                  "b-form-invalid-feedback",
                                                  {
                                                    attrs: {
                                                      state:
                                                        _vm.getValidationState(
                                                          validationContext
                                                        ),
                                                    },
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                " +
                                                        _vm._s(
                                                          validationContext
                                                            .errors[0]
                                                        ) +
                                                        "\n              "
                                                    ),
                                                  ]
                                                ),
                                              ],
                                              1
                                            ),
                                          ]
                                        },
                                      },
                                    ],
                                    null,
                                    true
                                  ),
                                }),
                                _vm._v(" "),
                                _c(
                                  "b-form-group",
                                  {
                                    attrs: {
                                      label: "Add Guests",
                                      "label-for": "add-guests",
                                    },
                                  },
                                  [
                                    _c("v-select", {
                                      attrs: {
                                        dir: _vm.$store.state.appConfig.isRTL
                                          ? "rtl"
                                          : "ltr",
                                        multiple: "",
                                        "close-on-select": false,
                                        options: _vm.guestsOptions,
                                        label: "name",
                                        "input-id": "add-guests",
                                      },
                                      scopedSlots: _vm._u(
                                        [
                                          {
                                            key: "option",
                                            fn: function (ref) {
                                              var avatar = ref.avatar
                                              var name = ref.name
                                              return [
                                                _c("b-avatar", {
                                                  attrs: {
                                                    size: "sm",
                                                    src: avatar,
                                                  },
                                                }),
                                                _vm._v(" "),
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "ml-50 align-middle",
                                                  },
                                                  [_vm._v(" " + _vm._s(name))]
                                                ),
                                              ]
                                            },
                                          },
                                          {
                                            key: "selected-option",
                                            fn: function (ref) {
                                              var avatar = ref.avatar
                                              var name = ref.name
                                              return [
                                                _c("b-avatar", {
                                                  staticClass:
                                                    "border border-white",
                                                  attrs: {
                                                    size: "sm",
                                                    src: avatar,
                                                  },
                                                }),
                                                _vm._v(" "),
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "ml-50 align-middle",
                                                  },
                                                  [_vm._v(" " + _vm._s(name))]
                                                ),
                                              ]
                                            },
                                          },
                                        ],
                                        null,
                                        true
                                      ),
                                      model: {
                                        value:
                                          _vm.eventLocal.extendedProps.guests,
                                        callback: function ($$v) {
                                          _vm.$set(
                                            _vm.eventLocal.extendedProps,
                                            "guests",
                                            $$v
                                          )
                                        },
                                        expression:
                                          "eventLocal.extendedProps.guests",
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
                                      label: "Location",
                                      "label-for": "event-location",
                                    },
                                  },
                                  [
                                    _c("b-form-input", {
                                      attrs: {
                                        id: "event-location",
                                        trim: "",
                                        placeholder: "Event Location",
                                      },
                                      model: {
                                        value:
                                          _vm.eventLocal.extendedProps.location,
                                        callback: function ($$v) {
                                          _vm.$set(
                                            _vm.eventLocal.extendedProps,
                                            "location",
                                            $$v
                                          )
                                        },
                                        expression:
                                          "eventLocal.extendedProps.location",
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
                                      label: "Description",
                                      "label-for": "event-description",
                                    },
                                  },
                                  [
                                    _c("b-form-textarea", {
                                      attrs: { id: "event-description" },
                                      model: {
                                        value:
                                          _vm.eventLocal.extendedProps
                                            .description,
                                        callback: function ($$v) {
                                          _vm.$set(
                                            _vm.eventLocal.extendedProps,
                                            "description",
                                            $$v
                                          )
                                        },
                                        expression:
                                          "eventLocal.extendedProps.description",
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
                                    _c(
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
                                        staticClass: "mr-2",
                                        attrs: {
                                          variant: "primary",
                                          type: "submit",
                                        },
                                      },
                                      [
                                        _vm._v(
                                          "\n              " +
                                            _vm._s(
                                              _vm.eventLocal.id
                                                ? "Update"
                                                : "Add "
                                            ) +
                                            "\n            "
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
                                            expression:
                                              "'rgba(186, 191, 199, 0.15)'",
                                            modifiers: { 400: true },
                                          },
                                        ],
                                        attrs: {
                                          type: "reset",
                                          variant: "outline-secondary",
                                        },
                                      },
                                      [
                                        _vm._v(
                                          "\n              Reset\n            "
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
                    ],
                    null,
                    true
                  ),
                }),
              ]
            },
          },
        ]),
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/calendar-sidebar/CalendarSidebar.vue?vue&type=template&id=02d382ba&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/calendar/calendar-sidebar/CalendarSidebar.vue?vue&type=template&id=02d382ba&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
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
      staticClass:
        "sidebar-wrapper d-flex justify-content-between flex-column flex-grow-1",
    },
    [
      _c(
        "div",
        { staticClass: "p-2" },
        [
          _vm.canAccess("appointments.create")
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
                  attrs: {
                    "aria-controls": "sidebar-add-new-event",
                    "aria-expanded": String(_vm.isEventHandlerSidebarActive),
                    variant: "primary",
                    block: "",
                    to: { name: "appointments-add" },
                  },
                },
                [
                  _vm._v(
                    "\n        " +
                      _vm._s(_vm.$t("appointments.add_event")) +
                      "\n    "
                  ),
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "mt-3" },
            [
              _c("h5", { staticClass: "app-label section-label mb-1" }, [
                _c("span", { staticClass: "align-middle" }, [
                  _vm._v(_vm._s(_vm.$t("appointments.state"))),
                ]),
              ]),
              _vm._v(" "),
              _c(
                "b-form-checkbox",
                {
                  staticClass: "mb-1",
                  model: {
                    value: _vm.checkAll,
                    callback: function ($$v) {
                      _vm.checkAll = $$v
                    },
                    expression: "checkAll",
                  },
                },
                [
                  _vm._v(
                    "\n        " +
                      _vm._s(_vm.$t("appointments.all_state")) +
                      "\n      "
                  ),
                ]
              ),
              _vm._v(" "),
              _c(
                "b-form-group",
                [
                  _c(
                    "b-form-checkbox-group",
                    {
                      attrs: { name: "event-filter", stacked: "" },
                      model: {
                        value: _vm.selectedCalendars,
                        callback: function ($$v) {
                          _vm.selectedCalendars = $$v
                        },
                        expression: "selectedCalendars",
                      },
                    },
                    _vm._l(_vm.calendarOptions, function (item) {
                      return _c(
                        "b-form-checkbox",
                        {
                          key: item.label,
                          staticClass: "mb-1",
                          class: "custom-control-" + item.color,
                          attrs: { name: "event-filter", value: item.label },
                        },
                        [
                          _vm._v(
                            "\n              " +
                              _vm._s(
                                _vm.$t("appointments.state_" + item.label)
                              ) +
                              "\n            "
                          ),
                        ]
                      )
                    }),
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
            "div",
            { staticClass: "mt-3" },
            [
              _c(
                "b-form-group",
                [
                  _c("flat-pickr", {
                    ref: "miniCalendar",
                    staticClass: "d-none",
                    attrs: {
                      small: "",
                      config: { inline: true, dateFormat: "Y-m-d" },
                    },
                    model: {
                      value: _vm.myDate,
                      callback: function ($$v) {
                        _vm.myDate = $$v
                      },
                      expression: "myDate",
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
      _c("b-img", {
        attrs: {
          src: __webpack_require__(/*! @/assets/images/pages/calendar-illustration.png */ "./resources/js/src/assets/images/pages/calendar-illustration.png"),
        },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/@core/libs/i18n/index.js":
/*!***************************************************!*\
  !*** ./resources/js/src/@core/libs/i18n/index.js ***!
  \***************************************************/
/*! exports provided: useUtils, _ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUtils", function() { return useUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_", function() { return _; });
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./resources/js/src/@core/libs/i18n/utils.js");


var useUtils = function useUtils() {
  return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _utils__WEBPACK_IMPORTED_MODULE_1__);
};
var _ = null;

/***/ }),

/***/ "./resources/js/src/@core/libs/i18n/utils.js":
/*!***************************************************!*\
  !*** ./resources/js/src/@core/libs/i18n/utils.js ***!
  \***************************************************/
/*! exports provided: t, _ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_", function() { return _; });
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");


/**
 * Returns translated string if i18n package is available to Vue
 * If i18n is not configured then it will simply return what is being passed
 * Useful if you don't know if i18n is configured or not
 * Used in @core files to handle absence of i18n without errors
 * @param {String} key i18n key to use for translation
 */
var t = function t(key) {
  var vm = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["getCurrentInstance"])().proxy;
  return vm.$t ? vm.$t(key) : key;
};
var _ = null;

/***/ }),

/***/ "./resources/js/src/assets/images/avatars/1-small.png":
/*!************************************************************!*\
  !*** ./resources/js/src/assets/images/avatars/1-small.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/saas-dental/resources/js/src/assets/images/avatars/1-small.png";

/***/ }),

/***/ "./resources/js/src/assets/images/avatars/11-small.png":
/*!*************************************************************!*\
  !*** ./resources/js/src/assets/images/avatars/11-small.png ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/saas-dental/resources/js/src/assets/images/avatars/11-small.png";

/***/ }),

/***/ "./resources/js/src/assets/images/avatars/3-small.png":
/*!************************************************************!*\
  !*** ./resources/js/src/assets/images/avatars/3-small.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/saas-dental/resources/js/src/assets/images/avatars/3-small.png";

/***/ }),

/***/ "./resources/js/src/assets/images/avatars/5-small.png":
/*!************************************************************!*\
  !*** ./resources/js/src/assets/images/avatars/5-small.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/saas-dental/resources/js/src/assets/images/avatars/5-small.png";

/***/ }),

/***/ "./resources/js/src/assets/images/avatars/7-small.png":
/*!************************************************************!*\
  !*** ./resources/js/src/assets/images/avatars/7-small.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/saas-dental/resources/js/src/assets/images/avatars/7-small.png";

/***/ }),

/***/ "./resources/js/src/assets/images/avatars/9-small.png":
/*!************************************************************!*\
  !*** ./resources/js/src/assets/images/avatars/9-small.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/saas-dental/resources/js/src/assets/images/avatars/9-small.png";

/***/ }),

/***/ "./resources/js/src/assets/images/illustration/marketing.svg":
/*!*******************************************************************!*\
  !*** ./resources/js/src/assets/images/illustration/marketing.svg ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/saas-dental/resources/js/src/assets/images/illustration/marketing.svg";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/calendar-illustration.png":
/*!************************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/calendar-illustration.png ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/saas-dental/resources/js/src/assets/images/pages/calendar-illustration.png";

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

/***/ "./resources/js/src/views/apps/calendar/Calendar.vue":
/*!***********************************************************!*\
  !*** ./resources/js/src/views/apps/calendar/Calendar.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Calendar_vue_vue_type_template_id_741d173c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Calendar.vue?vue&type=template&id=741d173c& */ "./resources/js/src/views/apps/calendar/Calendar.vue?vue&type=template&id=741d173c&");
/* harmony import */ var _Calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Calendar.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/calendar/Calendar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Calendar_vue_vue_type_style_index_0_id_741d173c_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Calendar.vue?vue&type=style&index=0&id=741d173c&lang=scss& */ "./resources/js/src/views/apps/calendar/Calendar.vue?vue&type=style&index=0&id=741d173c&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Calendar_vue_vue_type_template_id_741d173c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Calendar_vue_vue_type_template_id_741d173c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/calendar/Calendar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/calendar/Calendar.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/apps/calendar/Calendar.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Calendar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/Calendar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/calendar/Calendar.vue?vue&type=style&index=0&id=741d173c&lang=scss&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/calendar/Calendar.vue?vue&type=style&index=0&id=741d173c&lang=scss& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_style_index_0_id_741d173c_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--12-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Calendar.vue?vue&type=style&index=0&id=741d173c&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/Calendar.vue?vue&type=style&index=0&id=741d173c&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_style_index_0_id_741d173c_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_style_index_0_id_741d173c_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_style_index_0_id_741d173c_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_style_index_0_id_741d173c_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/apps/calendar/Calendar.vue?vue&type=template&id=741d173c&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/apps/calendar/Calendar.vue?vue&type=template&id=741d173c& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_template_id_741d173c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Calendar.vue?vue&type=template&id=741d173c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/Calendar.vue?vue&type=template&id=741d173c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_template_id_741d173c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_template_id_741d173c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/apps/calendar/CalendarAppointmentAdd.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/src/views/apps/calendar/CalendarAppointmentAdd.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CalendarAppointmentAdd_vue_vue_type_template_id_5a25dfde_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CalendarAppointmentAdd.vue?vue&type=template&id=5a25dfde&scoped=true& */ "./resources/js/src/views/apps/calendar/CalendarAppointmentAdd.vue?vue&type=template&id=5a25dfde&scoped=true&");
/* harmony import */ var _CalendarAppointmentAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CalendarAppointmentAdd.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/calendar/CalendarAppointmentAdd.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CalendarAppointmentAdd_vue_vue_type_style_index_0_id_5a25dfde_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CalendarAppointmentAdd.vue?vue&type=style&index=0&id=5a25dfde&lang=scss&scoped=true& */ "./resources/js/src/views/apps/calendar/CalendarAppointmentAdd.vue?vue&type=style&index=0&id=5a25dfde&lang=scss&scoped=true&");
/* harmony import */ var _CalendarAppointmentAdd_vue_vue_type_style_index_1_id_5a25dfde_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CalendarAppointmentAdd.vue?vue&type=style&index=1&id=5a25dfde&lang=scss& */ "./resources/js/src/views/apps/calendar/CalendarAppointmentAdd.vue?vue&type=style&index=1&id=5a25dfde&lang=scss&");
/* harmony import */ var _CalendarAppointmentAdd_vue_vue_type_style_index_2_id_5a25dfde_lang_css___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CalendarAppointmentAdd.vue?vue&type=style&index=2&id=5a25dfde&lang=css& */ "./resources/js/src/views/apps/calendar/CalendarAppointmentAdd.vue?vue&type=style&index=2&id=5a25dfde&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");








/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__["default"])(
  _CalendarAppointmentAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CalendarAppointmentAdd_vue_vue_type_template_id_5a25dfde_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CalendarAppointmentAdd_vue_vue_type_template_id_5a25dfde_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5a25dfde",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/calendar/CalendarAppointmentAdd.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/calendar/CalendarAppointmentAdd.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/calendar/CalendarAppointmentAdd.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarAppointmentAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CalendarAppointmentAdd.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/CalendarAppointmentAdd.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarAppointmentAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/calendar/CalendarAppointmentAdd.vue?vue&type=style&index=0&id=5a25dfde&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/calendar/CalendarAppointmentAdd.vue?vue&type=style&index=0&id=5a25dfde&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarAppointmentAdd_vue_vue_type_style_index_0_id_5a25dfde_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--12-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CalendarAppointmentAdd.vue?vue&type=style&index=0&id=5a25dfde&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/CalendarAppointmentAdd.vue?vue&type=style&index=0&id=5a25dfde&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarAppointmentAdd_vue_vue_type_style_index_0_id_5a25dfde_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarAppointmentAdd_vue_vue_type_style_index_0_id_5a25dfde_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarAppointmentAdd_vue_vue_type_style_index_0_id_5a25dfde_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarAppointmentAdd_vue_vue_type_style_index_0_id_5a25dfde_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/apps/calendar/CalendarAppointmentAdd.vue?vue&type=style&index=1&id=5a25dfde&lang=scss&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/calendar/CalendarAppointmentAdd.vue?vue&type=style&index=1&id=5a25dfde&lang=scss& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarAppointmentAdd_vue_vue_type_style_index_1_id_5a25dfde_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--12-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CalendarAppointmentAdd.vue?vue&type=style&index=1&id=5a25dfde&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/CalendarAppointmentAdd.vue?vue&type=style&index=1&id=5a25dfde&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarAppointmentAdd_vue_vue_type_style_index_1_id_5a25dfde_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarAppointmentAdd_vue_vue_type_style_index_1_id_5a25dfde_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarAppointmentAdd_vue_vue_type_style_index_1_id_5a25dfde_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarAppointmentAdd_vue_vue_type_style_index_1_id_5a25dfde_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/apps/calendar/CalendarAppointmentAdd.vue?vue&type=style&index=2&id=5a25dfde&lang=css&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/calendar/CalendarAppointmentAdd.vue?vue&type=style&index=2&id=5a25dfde&lang=css& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarAppointmentAdd_vue_vue_type_style_index_2_id_5a25dfde_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CalendarAppointmentAdd.vue?vue&type=style&index=2&id=5a25dfde&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/CalendarAppointmentAdd.vue?vue&type=style&index=2&id=5a25dfde&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarAppointmentAdd_vue_vue_type_style_index_2_id_5a25dfde_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarAppointmentAdd_vue_vue_type_style_index_2_id_5a25dfde_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarAppointmentAdd_vue_vue_type_style_index_2_id_5a25dfde_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarAppointmentAdd_vue_vue_type_style_index_2_id_5a25dfde_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/apps/calendar/CalendarAppointmentAdd.vue?vue&type=template&id=5a25dfde&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/calendar/CalendarAppointmentAdd.vue?vue&type=template&id=5a25dfde&scoped=true& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarAppointmentAdd_vue_vue_type_template_id_5a25dfde_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CalendarAppointmentAdd.vue?vue&type=template&id=5a25dfde&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/CalendarAppointmentAdd.vue?vue&type=template&id=5a25dfde&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarAppointmentAdd_vue_vue_type_template_id_5a25dfde_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarAppointmentAdd_vue_vue_type_template_id_5a25dfde_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/apps/calendar/CalendarAppointmentEdit.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/src/views/apps/calendar/CalendarAppointmentEdit.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CalendarAppointmentEdit_vue_vue_type_template_id_d34679c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CalendarAppointmentEdit.vue?vue&type=template&id=d34679c6&scoped=true& */ "./resources/js/src/views/apps/calendar/CalendarAppointmentEdit.vue?vue&type=template&id=d34679c6&scoped=true&");
/* harmony import */ var _CalendarAppointmentEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CalendarAppointmentEdit.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/calendar/CalendarAppointmentEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CalendarAppointmentEdit_vue_vue_type_style_index_0_id_d34679c6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CalendarAppointmentEdit.vue?vue&type=style&index=0&id=d34679c6&lang=scss&scoped=true& */ "./resources/js/src/views/apps/calendar/CalendarAppointmentEdit.vue?vue&type=style&index=0&id=d34679c6&lang=scss&scoped=true&");
/* harmony import */ var _CalendarAppointmentEdit_vue_vue_type_style_index_1_id_d34679c6_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CalendarAppointmentEdit.vue?vue&type=style&index=1&id=d34679c6&lang=scss& */ "./resources/js/src/views/apps/calendar/CalendarAppointmentEdit.vue?vue&type=style&index=1&id=d34679c6&lang=scss&");
/* harmony import */ var _CalendarAppointmentEdit_vue_vue_type_style_index_2_id_d34679c6_lang_css___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CalendarAppointmentEdit.vue?vue&type=style&index=2&id=d34679c6&lang=css& */ "./resources/js/src/views/apps/calendar/CalendarAppointmentEdit.vue?vue&type=style&index=2&id=d34679c6&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");








/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__["default"])(
  _CalendarAppointmentEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CalendarAppointmentEdit_vue_vue_type_template_id_d34679c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CalendarAppointmentEdit_vue_vue_type_template_id_d34679c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d34679c6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/calendar/CalendarAppointmentEdit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/calendar/CalendarAppointmentEdit.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/calendar/CalendarAppointmentEdit.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarAppointmentEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CalendarAppointmentEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/CalendarAppointmentEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarAppointmentEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/calendar/CalendarAppointmentEdit.vue?vue&type=style&index=0&id=d34679c6&lang=scss&scoped=true&":
/*!************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/calendar/CalendarAppointmentEdit.vue?vue&type=style&index=0&id=d34679c6&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarAppointmentEdit_vue_vue_type_style_index_0_id_d34679c6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--12-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CalendarAppointmentEdit.vue?vue&type=style&index=0&id=d34679c6&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/CalendarAppointmentEdit.vue?vue&type=style&index=0&id=d34679c6&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarAppointmentEdit_vue_vue_type_style_index_0_id_d34679c6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarAppointmentEdit_vue_vue_type_style_index_0_id_d34679c6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarAppointmentEdit_vue_vue_type_style_index_0_id_d34679c6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarAppointmentEdit_vue_vue_type_style_index_0_id_d34679c6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/apps/calendar/CalendarAppointmentEdit.vue?vue&type=style&index=1&id=d34679c6&lang=scss&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/calendar/CalendarAppointmentEdit.vue?vue&type=style&index=1&id=d34679c6&lang=scss& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarAppointmentEdit_vue_vue_type_style_index_1_id_d34679c6_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--12-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CalendarAppointmentEdit.vue?vue&type=style&index=1&id=d34679c6&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/CalendarAppointmentEdit.vue?vue&type=style&index=1&id=d34679c6&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarAppointmentEdit_vue_vue_type_style_index_1_id_d34679c6_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarAppointmentEdit_vue_vue_type_style_index_1_id_d34679c6_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarAppointmentEdit_vue_vue_type_style_index_1_id_d34679c6_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarAppointmentEdit_vue_vue_type_style_index_1_id_d34679c6_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/apps/calendar/CalendarAppointmentEdit.vue?vue&type=style&index=2&id=d34679c6&lang=css&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/calendar/CalendarAppointmentEdit.vue?vue&type=style&index=2&id=d34679c6&lang=css& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarAppointmentEdit_vue_vue_type_style_index_2_id_d34679c6_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CalendarAppointmentEdit.vue?vue&type=style&index=2&id=d34679c6&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/CalendarAppointmentEdit.vue?vue&type=style&index=2&id=d34679c6&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarAppointmentEdit_vue_vue_type_style_index_2_id_d34679c6_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarAppointmentEdit_vue_vue_type_style_index_2_id_d34679c6_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarAppointmentEdit_vue_vue_type_style_index_2_id_d34679c6_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarAppointmentEdit_vue_vue_type_style_index_2_id_d34679c6_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/apps/calendar/CalendarAppointmentEdit.vue?vue&type=template&id=d34679c6&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/calendar/CalendarAppointmentEdit.vue?vue&type=template&id=d34679c6&scoped=true& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarAppointmentEdit_vue_vue_type_template_id_d34679c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CalendarAppointmentEdit.vue?vue&type=template&id=d34679c6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/CalendarAppointmentEdit.vue?vue&type=template&id=d34679c6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarAppointmentEdit_vue_vue_type_template_id_d34679c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarAppointmentEdit_vue_vue_type_template_id_d34679c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/apps/calendar/calendar-detail/AppointmentDetail.vue":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/apps/calendar/calendar-detail/AppointmentDetail.vue ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppointmentDetail_vue_vue_type_template_id_7f3fd6b3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppointmentDetail.vue?vue&type=template&id=7f3fd6b3&scoped=true& */ "./resources/js/src/views/apps/calendar/calendar-detail/AppointmentDetail.vue?vue&type=template&id=7f3fd6b3&scoped=true&");
/* harmony import */ var _AppointmentDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppointmentDetail.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/calendar/calendar-detail/AppointmentDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AppointmentDetail_vue_vue_type_style_index_0_id_7f3fd6b3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppointmentDetail.vue?vue&type=style&index=0&id=7f3fd6b3&lang=scss&scoped=true& */ "./resources/js/src/views/apps/calendar/calendar-detail/AppointmentDetail.vue?vue&type=style&index=0&id=7f3fd6b3&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AppointmentDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppointmentDetail_vue_vue_type_template_id_7f3fd6b3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppointmentDetail_vue_vue_type_template_id_7f3fd6b3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7f3fd6b3",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/calendar/calendar-detail/AppointmentDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/calendar/calendar-detail/AppointmentDetail.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/calendar/calendar-detail/AppointmentDetail.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppointmentDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppointmentDetail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/calendar-detail/AppointmentDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppointmentDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/calendar/calendar-detail/AppointmentDetail.vue?vue&type=style&index=0&id=7f3fd6b3&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/calendar/calendar-detail/AppointmentDetail.vue?vue&type=style&index=0&id=7f3fd6b3&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppointmentDetail_vue_vue_type_style_index_0_id_7f3fd6b3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--12-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppointmentDetail.vue?vue&type=style&index=0&id=7f3fd6b3&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/calendar-detail/AppointmentDetail.vue?vue&type=style&index=0&id=7f3fd6b3&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppointmentDetail_vue_vue_type_style_index_0_id_7f3fd6b3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppointmentDetail_vue_vue_type_style_index_0_id_7f3fd6b3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppointmentDetail_vue_vue_type_style_index_0_id_7f3fd6b3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppointmentDetail_vue_vue_type_style_index_0_id_7f3fd6b3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/apps/calendar/calendar-detail/AppointmentDetail.vue?vue&type=template&id=7f3fd6b3&scoped=true&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/calendar/calendar-detail/AppointmentDetail.vue?vue&type=template&id=7f3fd6b3&scoped=true& ***!
  \*******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppointmentDetail_vue_vue_type_template_id_7f3fd6b3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppointmentDetail.vue?vue&type=template&id=7f3fd6b3&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/calendar-detail/AppointmentDetail.vue?vue&type=template&id=7f3fd6b3&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppointmentDetail_vue_vue_type_template_id_7f3fd6b3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppointmentDetail_vue_vue_type_template_id_7f3fd6b3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/apps/calendar/calendar-event-handler/CalendarEventHandler.vue":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/apps/calendar/calendar-event-handler/CalendarEventHandler.vue ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CalendarEventHandler_vue_vue_type_template_id_16bc2672___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CalendarEventHandler.vue?vue&type=template&id=16bc2672& */ "./resources/js/src/views/apps/calendar/calendar-event-handler/CalendarEventHandler.vue?vue&type=template&id=16bc2672&");
/* harmony import */ var _CalendarEventHandler_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CalendarEventHandler.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/calendar/calendar-event-handler/CalendarEventHandler.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CalendarEventHandler_vue_vue_type_style_index_0_id_16bc2672_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CalendarEventHandler.vue?vue&type=style&index=0&id=16bc2672&lang=scss& */ "./resources/js/src/views/apps/calendar/calendar-event-handler/CalendarEventHandler.vue?vue&type=style&index=0&id=16bc2672&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CalendarEventHandler_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CalendarEventHandler_vue_vue_type_template_id_16bc2672___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CalendarEventHandler_vue_vue_type_template_id_16bc2672___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/calendar/calendar-event-handler/CalendarEventHandler.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/calendar/calendar-event-handler/CalendarEventHandler.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/calendar/calendar-event-handler/CalendarEventHandler.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarEventHandler_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CalendarEventHandler.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/calendar-event-handler/CalendarEventHandler.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarEventHandler_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/calendar/calendar-event-handler/CalendarEventHandler.vue?vue&type=style&index=0&id=16bc2672&lang=scss&":
/*!********************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/calendar/calendar-event-handler/CalendarEventHandler.vue?vue&type=style&index=0&id=16bc2672&lang=scss& ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarEventHandler_vue_vue_type_style_index_0_id_16bc2672_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--12-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CalendarEventHandler.vue?vue&type=style&index=0&id=16bc2672&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/calendar-event-handler/CalendarEventHandler.vue?vue&type=style&index=0&id=16bc2672&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarEventHandler_vue_vue_type_style_index_0_id_16bc2672_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarEventHandler_vue_vue_type_style_index_0_id_16bc2672_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarEventHandler_vue_vue_type_style_index_0_id_16bc2672_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarEventHandler_vue_vue_type_style_index_0_id_16bc2672_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/apps/calendar/calendar-event-handler/CalendarEventHandler.vue?vue&type=template&id=16bc2672&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/calendar/calendar-event-handler/CalendarEventHandler.vue?vue&type=template&id=16bc2672& ***!
  \*****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarEventHandler_vue_vue_type_template_id_16bc2672___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CalendarEventHandler.vue?vue&type=template&id=16bc2672& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/calendar-event-handler/CalendarEventHandler.vue?vue&type=template&id=16bc2672&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarEventHandler_vue_vue_type_template_id_16bc2672___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarEventHandler_vue_vue_type_template_id_16bc2672___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/apps/calendar/calendar-event-handler/useCalendarEventHandler.js":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/calendar/calendar-event-handler/useCalendarEventHandler.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useCalendarEventHandler; });
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");




function useCalendarEventHandler(props, clearForm, emit) {
  // ------------------------------------------------
  // eventLocal
  // ------------------------------------------------
  var eventLocal = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["ref"])(JSON.parse(JSON.stringify(props.event.value)));
  var resetEventLocal = function resetEventLocal() {
    eventLocal.value = JSON.parse(JSON.stringify(props.event.value));
  };
  Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["watch"])(props.event, function () {
    resetEventLocal();
  });

  // ------------------------------------------------
  // isEventHandlerSidebarActive
  // * Clear form if sidebar is closed
  // ------------------------------------------------
  Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["watch"])(props.isEventHandlerSidebarActive, function (val) {
    // ? Don't reset event till transition is finished
    if (!val) {
      setTimeout(function () {
        clearForm.value();
      }, 350);
    }
  });
  // ------------------------------------------------
  // calendarOptions
  // ------------------------------------------------
  var calendarOptions = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["computed"])(function () {
    return _store__WEBPACK_IMPORTED_MODULE_3__["default"].state.calendar.calendarOptions;
  });
  var onSubmit = function onSubmit() {
    var eventData = JSON.parse(JSON.stringify(eventLocal));

    // * If event has id => Edit Event
    // Emit event for add/update event
    if (props.event.value.id) emit('update-event', eventData.value);else emit('add-event', eventData.value);

    // Close sidebar
    emit('update:is-event-handler-sidebar-active', false);
  };

  // *===============================================---*
  // *--------- UI ---------------------------------------*
  // *===============================================---*

  // ------------------------------------------------
  // guestOptions
  // ------------------------------------------------

  /* eslint-disable global-require */
  var guestsOptions = [{
    avatar: __webpack_require__(/*! @/assets/images/avatars/1-small.png */ "./resources/js/src/assets/images/avatars/1-small.png"),
    name: 'Jane Foster'
  }, {
    avatar: __webpack_require__(/*! @/assets/images/avatars/3-small.png */ "./resources/js/src/assets/images/avatars/3-small.png"),
    name: 'Donna Frank'
  }, {
    avatar: __webpack_require__(/*! @/assets/images/avatars/5-small.png */ "./resources/js/src/assets/images/avatars/5-small.png"),
    name: 'Gabrielle Robertson'
  }, {
    avatar: __webpack_require__(/*! @/assets/images/avatars/7-small.png */ "./resources/js/src/assets/images/avatars/7-small.png"),
    name: 'Lori Spears'
  }, {
    avatar: __webpack_require__(/*! @/assets/images/avatars/9-small.png */ "./resources/js/src/assets/images/avatars/9-small.png"),
    name: 'Sandy Vega'
  }, {
    avatar: __webpack_require__(/*! @/assets/images/avatars/11-small.png */ "./resources/js/src/assets/images/avatars/11-small.png"),
    name: 'Cheryl May'
  }];
  /* eslint-enable global-require */

  return {
    eventLocal: eventLocal,
    resetEventLocal: resetEventLocal,
    calendarOptions: calendarOptions,
    // UI
    guestsOptions: guestsOptions,
    onSubmit: onSubmit
  };
}

/***/ }),

/***/ "./resources/js/src/views/apps/calendar/calendar-sidebar/CalendarSidebar.vue":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/apps/calendar/calendar-sidebar/CalendarSidebar.vue ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CalendarSidebar_vue_vue_type_template_id_02d382ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CalendarSidebar.vue?vue&type=template&id=02d382ba&scoped=true& */ "./resources/js/src/views/apps/calendar/calendar-sidebar/CalendarSidebar.vue?vue&type=template&id=02d382ba&scoped=true&");
/* harmony import */ var _CalendarSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CalendarSidebar.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/calendar/calendar-sidebar/CalendarSidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CalendarSidebar_vue_vue_type_style_index_0_id_02d382ba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CalendarSidebar.vue?vue&type=style&index=0&id=02d382ba&lang=scss&scoped=true& */ "./resources/js/src/views/apps/calendar/calendar-sidebar/CalendarSidebar.vue?vue&type=style&index=0&id=02d382ba&lang=scss&scoped=true&");
/* harmony import */ var _CalendarSidebar_vue_vue_type_style_index_1_id_02d382ba_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CalendarSidebar.vue?vue&type=style&index=1&id=02d382ba&lang=css& */ "./resources/js/src/views/apps/calendar/calendar-sidebar/CalendarSidebar.vue?vue&type=style&index=1&id=02d382ba&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _CalendarSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CalendarSidebar_vue_vue_type_template_id_02d382ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CalendarSidebar_vue_vue_type_template_id_02d382ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "02d382ba",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/calendar/calendar-sidebar/CalendarSidebar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/calendar/calendar-sidebar/CalendarSidebar.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/calendar/calendar-sidebar/CalendarSidebar.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CalendarSidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/calendar-sidebar/CalendarSidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/calendar/calendar-sidebar/CalendarSidebar.vue?vue&type=style&index=0&id=02d382ba&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/calendar/calendar-sidebar/CalendarSidebar.vue?vue&type=style&index=0&id=02d382ba&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarSidebar_vue_vue_type_style_index_0_id_02d382ba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--12-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CalendarSidebar.vue?vue&type=style&index=0&id=02d382ba&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/calendar-sidebar/CalendarSidebar.vue?vue&type=style&index=0&id=02d382ba&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarSidebar_vue_vue_type_style_index_0_id_02d382ba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarSidebar_vue_vue_type_style_index_0_id_02d382ba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarSidebar_vue_vue_type_style_index_0_id_02d382ba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarSidebar_vue_vue_type_style_index_0_id_02d382ba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/apps/calendar/calendar-sidebar/CalendarSidebar.vue?vue&type=style&index=1&id=02d382ba&lang=css&":
/*!********************************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/calendar/calendar-sidebar/CalendarSidebar.vue?vue&type=style&index=1&id=02d382ba&lang=css& ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarSidebar_vue_vue_type_style_index_1_id_02d382ba_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CalendarSidebar.vue?vue&type=style&index=1&id=02d382ba&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/calendar-sidebar/CalendarSidebar.vue?vue&type=style&index=1&id=02d382ba&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarSidebar_vue_vue_type_style_index_1_id_02d382ba_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarSidebar_vue_vue_type_style_index_1_id_02d382ba_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarSidebar_vue_vue_type_style_index_1_id_02d382ba_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarSidebar_vue_vue_type_style_index_1_id_02d382ba_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/apps/calendar/calendar-sidebar/CalendarSidebar.vue?vue&type=template&id=02d382ba&scoped=true&":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/calendar/calendar-sidebar/CalendarSidebar.vue?vue&type=template&id=02d382ba&scoped=true& ***!
  \******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarSidebar_vue_vue_type_template_id_02d382ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CalendarSidebar.vue?vue&type=template&id=02d382ba&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/calendar-sidebar/CalendarSidebar.vue?vue&type=template&id=02d382ba&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarSidebar_vue_vue_type_template_id_02d382ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarSidebar_vue_vue_type_template_id_02d382ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/apps/calendar/calendar-sidebar/useCalendarSidebar.js":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/apps/calendar/calendar-sidebar/useCalendarSidebar.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useCalendarSidebar; });
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var _providers_Users__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/providers/Users */ "./resources/js/src/providers/Users.js");








var UserResource = new _providers_Users__WEBPACK_IMPORTED_MODULE_7__["default"]();
function useCalendarSidebar() {
  Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_6__["onMounted"])( /*#__PURE__*/Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee() {
    var _yield$UserResource$i, data, userRolesIds;
    return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (!(_store__WEBPACK_IMPORTED_MODULE_5__["default"].state.calendar.useProfessionals.length <= 0)) {
            _context.next = 7;
            break;
          }
          _context.next = 3;
          return UserResource.index({
            criteria: "professionals",
            isCalendar: true,
            ignoreSchedules: false
          });
        case 3:
          _yield$UserResource$i = _context.sent;
          data = _yield$UserResource$i.data;
          _store__WEBPACK_IMPORTED_MODULE_5__["default"].commit('calendar/SET_USE_PROFESSIONALS', data.data);
          _store__WEBPACK_IMPORTED_MODULE_5__["default"].commit("calendar/SET_SELECTED_PROFESSIONAL", data.data[0]);
        case 7:
          userRolesIds = _store__WEBPACK_IMPORTED_MODULE_5__["default"].getters['auth/getUser'].roles.map(function (role) {
            return role.id;
          });
          if (userRolesIds.includes(4)) {
            //Professional
            _store__WEBPACK_IMPORTED_MODULE_5__["default"].commit("calendar/SET_SELECTED_PROFESSIONAL", _store__WEBPACK_IMPORTED_MODULE_5__["default"].getters['auth/getUser']);
          }
        case 9:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })));

  // ------------------------------------------------
  // calendarOptions
  // ------------------------------------------------
  var calendarOptions = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_6__["computed"])(function () {
    return _store__WEBPACK_IMPORTED_MODULE_5__["default"].state.calendar.calendarOptions;
  });

  // ------------------------------------------------
  // selectedCalendars
  // ------------------------------------------------
  var selectedCalendars = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_6__["computed"])({
    get: function get() {
      return _store__WEBPACK_IMPORTED_MODULE_5__["default"].state.calendar.selectedCalendars;
    },
    set: function set(val) {
      _store__WEBPACK_IMPORTED_MODULE_5__["default"].commit('calendar/SET_SELECTED_EVENTS', val);
    }
  });

  // ------------------------------------------------
  // checkAll
  // ------------------------------------------------
  var checkAll = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_6__["computed"])({
    /*
      GET: Return boolean `true` => if length of options matches length of selected filters => Length matches when all events are selected
      SET: If value is `true` => then add all available options in selected filters => Select All
           Else if => all filters are selected (by checking length of both array) => Empty Selected array  => Deselect All
    */
    get: function get() {
      return selectedCalendars.value.length === calendarOptions.value.length;
    },
    set: function set(val) {
      if (val) {
        selectedCalendars.value = calendarOptions.value.map(function (i) {
          return i.label;
        });
      } else if (selectedCalendars.value.length === calendarOptions.value.length) {
        selectedCalendars.value = [];
      }
    }
  });
  var selectedCurrentDate = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_6__["computed"])({
    get: function get() {
      return _store__WEBPACK_IMPORTED_MODULE_5__["default"].state.calendar.selectedCurrentDate;
    },
    set: function set(val) {
      _store__WEBPACK_IMPORTED_MODULE_5__["default"].commit("calendar/SET_SELECTED_CURRENT_DATE", val);
    }
  });
  return {
    calendarOptions: calendarOptions,
    selectedCalendars: selectedCalendars,
    checkAll: checkAll,
    selectedCurrentDate: selectedCurrentDate
  };
}

/***/ }),

/***/ "./resources/js/src/views/apps/calendar/useCalendar.js":
/*!*************************************************************!*\
  !*** ./resources/js/src/views/apps/calendar/useCalendar.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userCalendar; });
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_pad_start_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.pad-start.js */ "./node_modules/core-js/modules/es.string.pad-start.js");
/* harmony import */ var core_js_modules_es_string_pad_start_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_pad_start_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _fullcalendar_core_locales_es__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fullcalendar/core/locales/es */ "./node_modules/@fullcalendar/core/locales/es.js");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fullcalendar/daygrid */ "./node_modules/@fullcalendar/daygrid/main.js");
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fullcalendar/timegrid */ "./node_modules/@fullcalendar/timegrid/main.js");
/* harmony import */ var _fullcalendar_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fullcalendar/list */ "./node_modules/@fullcalendar/list/main.js");
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fullcalendar/interaction */ "./node_modules/@fullcalendar/interaction/main.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _fullcalendar_moment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @fullcalendar/moment */ "./node_modules/@fullcalendar/moment/index.js");
/* harmony import */ var _fullcalendar_moment_timezone__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @fullcalendar/moment-timezone */ "./node_modules/@fullcalendar/moment-timezone/index.js");
/* harmony import */ var vue_toastification_composition__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! vue-toastification/composition */ "./node_modules/vue-toastification/composition/index.js");
/* harmony import */ var vue_toastification_composition__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(vue_toastification_composition__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @core/components/toastification/ToastificationContent.vue */ "./resources/js/src/@core/components/toastification/ToastificationContent.vue");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! animate.css */ "./node_modules/animate.css/animate.css");
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(animate_css__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @/router */ "./resources/js/src/router/index.js");
/* harmony import */ var _libs_helpers__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @/libs/helpers */ "./resources/js/src/libs/helpers.js");
/* harmony import */ var _providers_Appointments__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @/providers/Appointments */ "./resources/js/src/providers/Appointments.js");
/* harmony import */ var _providers_Users__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @/providers/Users */ "./resources/js/src/providers/Users.js");












// Full Calendar Plugins






 // only for formatting


// Notification






// eslint-disable-next-line object-curly-newline





// Providers

var AppointmentResource = new _providers_Appointments__WEBPACK_IMPORTED_MODULE_29__["default"]();

var UserResource = new _providers_Users__WEBPACK_IMPORTED_MODULE_30__["default"]();
function userCalendar() {
  var _this = this;
  // Use toast
  var toast = Object(vue_toastification_composition__WEBPACK_IMPORTED_MODULE_20__["useToast"])();
  // ------------------------------------------------
  // refCalendar
  // ------------------------------------------------
  var refCalendar = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_25__["ref"])(null);
  var isLoading = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_25__["ref"])(false);
  var hasPermission = function hasPermission(permissionName) {
    var permissions = _store__WEBPACK_IMPORTED_MODULE_26__["default"].getters['auth/getPermissions'];
    return permissions.some(function (permission) {
      return permission.name === permissionName;
    });
  };

  // ------------------------------------------------
  // calendarApi
  // ------------------------------------------------
  var calendarApi = null;
  Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_25__["onMounted"])( /*#__PURE__*/Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee() {
    return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          isLoading.value = true;
          calendarApi = refCalendar.value.getApi();
          isLoading.value = false;
        case 3:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })));

  // ------------------------------------------------
  // calendars
  // ------------------------------------------------
  var calendarsColor = {
    confirmed: "success",
    canceled: "danger",
    pending: "warning",
    assisted: "info",
    unassisted: "dark"
  };

  // ------------------------------------------------
  // event
  // ------------------------------------------------
  var blankEvent = {
    title: '',
    start: '',
    end: '',
    allDay: false,
    url: '',
    disabled: false,
    doctor_name: null,
    extendedProps: {
      calendar: '',
      guests: [],
      location: '',
      description: ''
    },
    timeAvailables: [],
    professional_id: null,
    isEdit: false
  };
  var event = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_25__["ref"])(JSON.parse(JSON.stringify(blankEvent)));
  var clearEventData = function clearEventData() {
    event.value = JSON.parse(JSON.stringify(blankEvent));
  };

  // *===========================================================================---*
  // *--------- Calendar API Function/Utils --------------------------------------------*
  // Template Future Update: We might move this utils function in its own file
  // *===========================================================================---*

  // ------------------------------------------------
  // (UI) addEventInCalendar
  // ? This is useless because this just add event in calendar and not in our data
  // * If we try to call it on new event then callback & try to toggle from calendar we get two events => One from UI and one from data
  // ------------------------------------------------
  var addEventInCalendar = function addEventInCalendar(eventData) {
    console.warn(eventData);
    //   toast({
    //     component: ToastificationContent,
    //     position: 'bottom-right',
    //     props: {
    //       title: 'Event Added',
    //       icon: 'CheckIcon',
    //       variant: 'success',
    //     },
    //   })
    //   calendarApi.addEvent(eventData)
  };

  // ------------------------------------------------
  // (UI) updateEventInCalendar
  // ------------------------------------------------
  var updateEventInCalendar = function updateEventInCalendar(updatedEventData, propsToUpdate, extendedPropsToUpdate) {
    toast({
      component: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_21__["default"],
      props: {
        title: 'Event Updated',
        icon: 'CheckIcon',
        variant: 'success'
      }
    });

    // const existingEvent = calendarApi.getEventById(updatedEventData.id)

    // // --- Set event properties except date related ----- //
    // // ? Docs: https://fullcalendar.io/docs/Event-setProp
    // // dateRelatedProps => ['start', 'end', 'allDay']
    // // eslint-disable-next-line no-plusplus
    // for (let index = 0; index < propsToUpdate.length; index++) {
    //   const propName = propsToUpdate[index]
    //   existingEvent.setProp(propName, updatedEventData[propName])
    // }

    // // --- Set date related props ----- //
    // // ? Docs: https://fullcalendar.io/docs/Event-setDates
    // existingEvent.setDates(updatedEventData.start, updatedEventData.end, { allDay: updatedEventData.allDay })

    // // --- Set event's extendedProps ----- //
    // // ? Docs: https://fullcalendar.io/docs/Event-setExtendedProp
    // // eslint-disable-next-line no-plusplus
    // for (let index = 0; index < extendedPropsToUpdate.length; index++) {
    //   const propName = extendedPropsToUpdate[index]
    //   existingEvent.setExtendedProp(propName, updatedEventData.extendedProps[propName])
    // }
  };

  // ------------------------------------------------
  // (UI) removeEventInCalendar
  // ------------------------------------------------
  var removeEventInCalendar = function removeEventInCalendar(eventId) {
    toast({
      component: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_21__["default"],
      props: {
        title: 'Event Removed',
        icon: 'TrashIcon',
        variant: 'danger'
      }
    });
    calendarApi.getEventById(eventId).remove();
  };

  // ------------------------------------------------
  // grabEventDataFromEventApi
  // ? It will return just event data from fullCalendar's EventApi which is not required for event mutations and other tasks
  // ! You need to update below function as per your extendedProps
  // ------------------------------------------------
  var grabEventDataFromEventApi = function grabEventDataFromEventApi(eventApi) {
    return eventApi;
  };

  // ------------------------------------------------
  // addEvent
  // ------------------------------------------------
  var addEvent = function addEvent(eventData) {
    console.warn('addEvent', eventData);
    // store.dispatch('calendar/addEvent', { event: eventData }).then(() => {
    // 	// eslint-disable-next-line no-use-before-define
    refetchEvents();
    // })
  };

  // ------------------------------------------------
  // updateEvent
  // ------------------------------------------------
  var updateEvent = function updateEvent(eventData) {
    refetchEvents();
    // store.dispatch('calendar/updateEvent', { event: eventData }).then(response => {
    // 	const updatedEvent = response.data.event

    // 	const propsToUpdate = ['id', 'title', 'url']
    // 	const extendedPropsToUpdate = ['calendar', 'guests', 'location', 'description']

    // 	updateEventInCalendar(updatedEvent, propsToUpdate, extendedPropsToUpdate)
    // })
  };

  // ------------------------------------------------
  // removeEvent
  // ------------------------------------------------
  var removeEvent = function removeEvent() {
    var eventId = event.value.id;
    _store__WEBPACK_IMPORTED_MODULE_26__["default"].dispatch('calendar/removeEvent', {
      id: eventId
    }).then(function () {
      removeEventInCalendar(eventId);
    });
  };

  // ------------------------------------------------
  // refetchEvents
  // ------------------------------------------------
  var refetchEvents = function refetchEvents() {
    // _.debounce(function () {
    calendarApi.refetchEvents();
    // }, 500)
  };

  // ------------------------------------------------
  // selectedCalendars
  // ------------------------------------------------
  var selectedCalendars = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_25__["computed"])(function () {
    return _store__WEBPACK_IMPORTED_MODULE_26__["default"].state.calendar.selectedCalendars;
  });
  Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_25__["watch"])(selectedCalendars, function (value) {
    refetchEvents();
  });

  // ------------------------------------------------
  // selectedProfessionals
  // ------------------------------------------------
  var selectedProfessional = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_25__["computed"])({
    get: function get() {
      return _store__WEBPACK_IMPORTED_MODULE_26__["default"].state.calendar.selectedProfessional;
    },
    set: function set(val) {
      _store__WEBPACK_IMPORTED_MODULE_26__["default"].commit("calendar/SET_SELECTED_PROFESSIONAL", val);
    }
  });
  Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_25__["watch"])([selectedProfessional], function (value) {
    refetchEvents();
  });
  var selectedCurrentDate = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_25__["computed"])(function () {
    return _store__WEBPACK_IMPORTED_MODULE_26__["default"].state.calendar.selectedCurrentDate;
  });
  Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_25__["watch"])([selectedCurrentDate], function (newValue, oldValue) {
    if (newValue !== oldValue) {
      calendarApi.gotoDate(newValue[0]);
    }
  });

  // --------------------------------------------------------------------------------------------------
  // AXIOS: fetchEvents
  // * This will be called by fullCalendar to fetch events. Also this can be used to refetch events.
  // --------------------------------------------------------------------------------------------------
  var fetchEvents = /*#__PURE__*/function () {
    var _ref2 = Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee2(info, successCallback) {
      var _yield$store$dispatch, data;
      return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (info) {
              _context2.next = 2;
              break;
            }
            return _context2.abrupt("return");
          case 2:
            if (selectedProfessional.value.id) {
              _context2.next = 4;
              break;
            }
            return _context2.abrupt("return", false);
          case 4:
            _store__WEBPACK_IMPORTED_MODULE_26__["default"].commit("calendar/SET_SELECTED_DATES", {
              start: info.startStr,
              end: info.endStr
            });

            // Fetch Events from API endpoint
            _context2.prev = 5;
            isLoading.value = true;
            _context2.next = 9;
            return _store__WEBPACK_IMPORTED_MODULE_26__["default"].dispatch("calendar/fetchEvents", {
              calendars: {
                calendar: selectedCalendars.value,
                profesional: selectedProfessional.value.id
              }
            });
          case 9:
            _yield$store$dispatch = _context2.sent;
            data = _yield$store$dispatch.data;
            isLoading.value = false;
            if (data.success) {
              successCallback(data.data);
            } else {
              toast({
                component: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_21__["default"],
                props: {
                  title: data.message,
                  icon: "AlertTriangleIcon",
                  variant: "danger"
                }
              });
            }
            _context2.next = 19;
            break;
          case 15:
            _context2.prev = 15;
            _context2.t0 = _context2["catch"](5);
            isLoading.value = false;
            toast({
              component: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_21__["default"],
              props: {
                title: 'Error fetching calendar events',
                icon: 'AlertTriangleIcon',
                variant: 'danger'
              }
            });
          case 19:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[5, 15]]);
    }));
    return function fetchEvents(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  // --------------------------------------------------------------------------------------------------
  // AXIOS: fetchAvailable
  // * fullCalendar will call you to determine if the date is available to schedule
  // --------------------------------------------------------------------------------------------------
  var fetchAvailable = /*#__PURE__*/function () {
    var _ref3 = Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee3(date) {
      var query, _yield$AppointmentRes, data;
      return Object(C_projects_saas_dental_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            query = {
              date: date,
              user_id: selectedProfessional.value.id
            };
            _context3.prev = 1;
            isLoading.value = true;
            _context3.next = 5;
            return AppointmentResource.available(query);
          case 5:
            _yield$AppointmentRes = _context3.sent;
            data = _yield$AppointmentRes.data;
            isLoading.value = false;
            if (data.success) {
              dateOnNewEvent.value = date;
              isNewEventHandlerModalActive.value = true;
              timeAvailables.value = data.data;
              event.value.start = date;
              event.value.professional_id = selectedProfessional.value.id;
              event.value.timeAvailables = data.data;

              // router.push({ name: 'appointments-add', params })
            } else {
              event.value = JSON.parse(JSON.stringify(blankEvent));
              toast({
                component: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_21__["default"],
                props: {
                  title: data.message,
                  icon: "AlertTriangleIcon",
                  variant: "danger"
                }
              });
            }
            _context3.next = 16;
            break;
          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](1);
            event.value = JSON.parse(JSON.stringify(blankEvent));
            isLoading.value = false;
            if (_context3.t0.response.status === 422) {
              toast({
                component: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_21__["default"],
                props: {
                  title: _this.getFirstValidationError(_context3.t0.response.data.errors),
                  icon: "AlertTriangleIcon",
                  variant: "danger"
                }
              });
            } else {
              toast({
                component: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_21__["default"],
                props: {
                  title: _context3.t0.message,
                  icon: "AlertTriangleIcon",
                  variant: "danger"
                }
              });
            }
          case 16:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[1, 11]]);
    }));
    return function fetchAvailable(_x3) {
      return _ref3.apply(this, arguments);
    };
  }();

  // ------------------------------------------------------------------------
  // calendarOptions
  // * This isn't considered in UI because this is the core of calendar app
  // ------------------------------------------------------------------------

  var interval = _store__WEBPACK_IMPORTED_MODULE_26__["default"].state.auth.setting['scheduled_appointment_interval'] || 15; // Intervalo en minutos
  var hours = Math.floor(interval / 60); // Obtenemos las horas (15 minutos = 0 horas)
  var minutes = interval % 60; // Obtenemos los minutos (15 minutos)
  var formattedInterval = "".concat(hours.toString().padStart(2, '0'), ":").concat(minutes.toString().padStart(2, '0'), ":00");
  var timezone = _store__WEBPACK_IMPORTED_MODULE_26__["default"].state.auth.setting['timezone'] || window._setting.timezone;
  var language = _store__WEBPACK_IMPORTED_MODULE_26__["default"].state.auth.setting['language'] || 'es';
  var calendarOptions = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_25__["ref"])({
    plugins: [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_13__["default"], _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_16__["default"], _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_14__["default"], _fullcalendar_list__WEBPACK_IMPORTED_MODULE_15__["default"], _fullcalendar_moment_timezone__WEBPACK_IMPORTED_MODULE_19__["default"]],
    locale: _fullcalendar_core_locales_es__WEBPACK_IMPORTED_MODULE_12__["default"],
    //language,
    timeZone: timezone,
    initialView: "timeGridDay",
    headerToolbar: {
      center: 'title',
      start: 'sidebarToggle, prev,next, today',
      end: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    allDaySlot: false,
    slotDuration: "".concat(formattedInterval),
    slotLabelInterval: "".concat(formattedInterval),
    slotMinTime: _store__WEBPACK_IMPORTED_MODULE_26__["default"].state.auth.setting['schedule_start_time'] || "09:00:00",
    slotMaxTime: _store__WEBPACK_IMPORTED_MODULE_26__["default"].state.auth.setting['schedule_end_time'] || "22:00:00",
    // nextDayThreshold: '09:00:00',
    nowIndicator: true,
    //selectHelper: true,
    //eventLimit: false, // allow "more" link when too many events
    events: fetchEvents,
    /*
      Enable dragging and resizing event
      ? Docs: https://fullcalendar.io/docs/editable
    */
    editable: true,
    /*
      Enable resizing event from start
      ? Docs: https://fullcalendar.io/docs/eventResizableFromStart
    */
    eventResizableFromStart: false,
    /*
      Automatically scroll the scroll-containers during event drag-and-drop and date selecting
      ? Docs: https://fullcalendar.io/docs/dragScroll
    */
    dragScroll: true,
    /*
      Max number of events within a given day
      ? Docs: https://fullcalendar.io/docs/dayMaxEvents
    */
    dayMaxEvents: 2,
    /*
      Determines if day names and week names are clickable
      ? Docs: https://fullcalendar.io/docs/navLinks
    */
    navLinks: true,
    eventClassNames: function eventClassNames(_ref4) {
      var calendarEvent = _ref4.event;
      // eslint-disable-next-line no-underscore-dangle
      var colorName = calendarsColor[calendarEvent._def.extendedProps.calendar];
      return [// Background Color
      "bg-light-".concat(colorName)];
    },
    eventClick: function eventClick(_ref5) {
      var clickedEvent = _ref5.event;
      clearEventData();

      // * Only grab required field otherwise it goes in infinity loop
      // ! Always grab all fields rendered by form (even if it get `undefined`) otherwise due to Vue3/Composition API you might get: "object is not extensible"
      // ! If you don't grab all fields then you will get error like: "object is not extensible"
      event.value = grabEventDataFromEventApi(clickedEvent);
      if (event.value.extendedProps.disabled) {
        _libs_helpers__WEBPACK_IMPORTED_MODULE_28__["danger"](event.value.title);
      } else {
        isEventHandlerSidebarActive.value = true;
      }
    },
    customButtons: {
      sidebarToggle: {
        // --- This dummy text actual icon rendering is handled using SCSS ----- //
        text: 'sidebar',
        click: function click() {
          // eslint-disable-next-line no-use-before-define
          isCalendarOverlaySidebarActive.value = !isCalendarOverlaySidebarActive.value;
        }
      }
    },
    dateClick: function dateClick(info) {
      /*
        ! Vue3 Change
        Using Vue.set isn't working for now so we will try to check reactivity in Vue 3 as it can handle this automatically
        ```
        event.value.start = info.date
        ```
      */

      clearEventData();

      //Validamos si la fecha hora seleccionada es mayor a la fecha actual
      var currenDateTime = moment__WEBPACK_IMPORTED_MODULE_17___default.a.tz(new Date(), 'YYYY-MM-DDTHH:mm:ss', timezone).format('YYYY-MM-DDTHH:mm:ss');
      var selectedDateTime = moment__WEBPACK_IMPORTED_MODULE_17___default.a.tz(info.dateStr, 'YYYY-MM-DDTHH:mm:ss', timezone).format('YYYY-MM-DDTHH:mm:ss');
      if (selectedDateTime < currenDateTime) {
        _libs_helpers__WEBPACK_IMPORTED_MODULE_28__["danger"]('No puedes seleccionar una fecha anterior a la actual');
        return;
      }
      event.value = JSON.parse(JSON.stringify(Object.assign(event.value, {
        start: info.date
      })));
      // isEventHandlerSidebarActive.value = true   

      // Obtén los roles del usuario desde el store
      // const userRoleIds = store.getters['auth/getUser'].roles.map(role => role.id);

      // Verifica si el usuario no tiene el rol con ID 4
      // if (!userRoleIds.includes(4)) {
      if (hasPermission('appointments.create')) {
        var startDate = moment__WEBPACK_IMPORTED_MODULE_17___default.a.tz(info.dateStr, 'YYYY-MM-DDTHH:mm:ss', timezone).format('DD/MM/YYYY HH:mm');
        fetchAvailable(startDate);
      }
    },
    // eventDidMount: function (info) {
    // 	const extendedProps = info.event.extendedProps;
    // 	if (extendedProps && extendedProps.cellphone) {
    // 		// Crear el botón
    // 		const whatsappButton = document.createElement("button");
    // 		whatsappButton.innerText = "WhatsApp";
    // 		whatsappButton.style.background = "green";
    // 		whatsappButton.style.color = "white";
    // 		whatsappButton.style.border = "none";
    // 		// whatsappButton.style.padding = "5px 8px";
    // 		whatsappButton.style.borderRadius = "3px";
    // 		whatsappButton.style.cursor = "pointer";
    // 		whatsappButton.style.marginTop = "5px";
    // 		whatsappButton.style.fontSize = "8px";

    // 		// Agregar acción al botón
    // 		whatsappButton.onclick = function (event) {
    // 			// Detener propagación del clic
    // 			event.stopPropagation();

    // 			const message = encodeURIComponent(
    // 				`Hola ${info.event.title}, le recordamos su cita el ${info.event.start.toLocaleString()}.`
    // 			);
    // 			window.open(`https://wa.me/${extendedProps.cellphone}?text=${message}`, "_blank");
    // 		};

    // 		// Insertar el botón dentro del evento
    // 		const eventMain = info.el.querySelector(".fc-event-main");
    // 		if (eventMain) {
    // 			eventMain.appendChild(whatsappButton);
    // 		}
    // 	}
    // },

    eventContent: function eventContent(arg) {
      var event = arg.event.extendedProps;

      // Títulos y observaciones
      var title = arg.event.title || "Sin título"; // Título del evento
      var internObservation = event.intern_observation || "Sin observaciones"; // Observación interna

      // Teléfono (manejo de null o undefined)
      var cellphone = event.mobile || "No disponible";

      // Generar el botón de WhatsApp
      var whatsappButton = cellphone !== "No disponible" ? "\n\t\t\t\t<button \n\t\t\t\t\tstyle=\"\n\t\t\t\t\t\tbackground: green; \n\t\t\t\t\t\tcolor: white; \n\t\t\t\t\t\tborder: none; \n\t\t\t\t\t\tpadding: 2px 5px; \n\t\t\t\t\t\tborder-radius: 3px; \n\t\t\t\t\t\tfont-size: 10px; \n\t\t\t\t\t\tmargin-left: 5px; \n\t\t\t\t\t\tcursor: pointer;\" \n\t\t\t\t\tonclick=\"event.stopPropagation(); window.open('https://wa.me/".concat(cellphone, "?text=").concat(event.message, "', '_blank')\">\n\t\t\t\t\tWhatsApp\n\t\t\t\t</button>") : "";
      var isShowButton = false;

      // Obtén los roles del usuario desde el store
      var userRoleIds = _store__WEBPACK_IMPORTED_MODULE_26__["default"].getters['auth/getUser'].roles.map(function (role) {
        return role.id;
      });
      if (!userRoleIds.includes(4)) {
        isShowButton = true;
      }

      // Construir el HTML del evento
      var htmlContent = "\t\t\t\t\n\t\t\t\t\t<b style=\"flex: 1;\">".concat(title, " ").concat(isShowButton ? whatsappButton : '', "</b><br>\n\t\t\t\t\t<b>Tel.:</b> ").concat(cellphone, " <b>OI:</b> ").concat(internObservation.substring(0, 50), "...\n\t\t\t\t\n\t\t\t");
      return {
        html: htmlContent
      };
    },
    //Change event content
    // eventContent: function (arg) {
    // 	const event = arg.event.extendedProps;
    // 	// Títulos y observaciones
    // 	const title = arg.event.title || "Sin título"; // Título del evento
    // 	const internObservation = event.intern_observation || "Sin observaciones"; // Observación interna			
    // 	// Teléfono (manejo de null o undefined)
    // 	const cellphone = event.cellphone || "No disponible";
    // 	// Generar contenido según la vista
    // 	if (arg.view.type === "listMonth" || arg.view.type === "timeGridDay") {
    // 		// Información adicional según vista
    // 		const additionalInfo = `<b>Tel.:</b> ${cellphone} <b>OI:</b> ${internObservation.substring(0, 50)}...`;
    // 		// Construcción del HTML final
    // 		const htmlContent = `<div><b>${title}</b> <br>${additionalInfo}</div>`;
    // 		return { html: htmlContent };
    // 	}
    // 	// Default (para otras vistas)
    // 	return { html: `<b>${title}</b>` };
    // },
    /*
      Handle event drop (Also include dragged event)
      ? Docs: https://fullcalendar.io/docs/eventDrop
      ? We can use `eventDragStop` but it doesn't return updated event so we have to use `eventDrop` which returns updated event
    */
    eventDrop: function eventDrop(_ref6) {
      var droppedEvent = _ref6.event;
      updateEvent(grabEventDataFromEventApi(droppedEvent));
    },
    /*
      Handle event resize
      ? Docs: https://fullcalendar.io/docs/eventResize
    */
    eventResize: function eventResize(_ref7) {
      var resizedEvent = _ref7.event;
      updateEvent(grabEventDataFromEventApi(resizedEvent));
    },
    // Get direction from app state (store)
    direction: Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_25__["computed"])(function () {
      return _store__WEBPACK_IMPORTED_MODULE_26__["default"].state.appConfig.isRTL ? 'rtl' : 'ltr';
    }),
    rerenderDelay: 350
  });

  // ------------------------------------------------------------------------

  // *===============================================---*
  // *--------- UI ---------------------------------------*
  // *===============================================---*

  var isEventHandlerSidebarActive = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_25__["ref"])(false);
  var isNewEventHandlerModalActive = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_25__["ref"])(false);
  var dateOnNewEvent = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_25__["ref"])(null);
  var timeAvailables = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_25__["ref"])([]);
  var isCalendarOverlaySidebarActive = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_25__["ref"])(false);
  return {
    isLoading: isLoading,
    refCalendar: refCalendar,
    isCalendarOverlaySidebarActive: isCalendarOverlaySidebarActive,
    calendarOptions: calendarOptions,
    event: event,
    clearEventData: clearEventData,
    addEvent: addEvent,
    updateEvent: updateEvent,
    removeEvent: removeEvent,
    refetchEvents: refetchEvents,
    fetchEvents: fetchEvents,
    selectedProfessional: selectedProfessional,
    // ----- UI ----- //
    isEventHandlerSidebarActive: isEventHandlerSidebarActive,
    isNewEventHandlerModalActive: isNewEventHandlerModalActive,
    timeAvailables: timeAvailables
  };
}

/***/ })

}]);