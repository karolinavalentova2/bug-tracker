function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.components.ts":
  /*!***********************************!*\
    !*** ./src/app/app.components.ts ***!
    \***********************************/

  /*! exports provided: Components */

  /***/
  function srcAppAppComponentsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Components", function () {
      return Components;
    });
    /* harmony import */


    var _components_views_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./components/views/login/login.component */
    "./src/app/components/views/login/login.component.ts");
    /* harmony import */


    var _components_root_view_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/root-view/app.component */
    "./src/app/components/root-view/app.component.ts");
    /* harmony import */


    var _components_ui_artefacts_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/ui-artefacts/navigation/navigation.component */
    "./src/app/components/ui-artefacts/navigation/navigation.component.ts");
    /* harmony import */


    var _components_ui_artefacts_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/ui-artefacts/top-bar/top-bar.component */
    "./src/app/components/ui-artefacts/top-bar/top-bar.component.ts");
    /* harmony import */


    var _components_ui_artefacts_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/ui-artefacts/breadcrumb/breadcrumb.component */
    "./src/app/components/ui-artefacts/breadcrumb/breadcrumb.component.ts");
    /* harmony import */


    var _components_ui_artefacts_side_filter_side_filter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/ui-artefacts/side-filter/side-filter.component */
    "./src/app/components/ui-artefacts/side-filter/side-filter.component.ts");
    /* harmony import */


    var _components_views_projects_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/views/projects/projects.component */
    "./src/app/components/views/projects/projects.component.ts");
    /* harmony import */


    var _components_views_inbox_inbox_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/views/inbox/inbox.component */
    "./src/app/components/views/inbox/inbox.component.ts");
    /* harmony import */


    var _components_views_users_users_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/views/users/users.component */
    "./src/app/components/views/users/users.component.ts");
    /* harmony import */


    var _components_views_settings_settings_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/views/settings/settings.component */
    "./src/app/components/views/settings/settings.component.ts");
    /* harmony import */


    var _components_views_projects_my_projects_my_projects_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/views/projects/my-projects/my-projects.component */
    "./src/app/components/views/projects/my-projects/my-projects.component.ts");
    /* harmony import */


    var _components_ui_artefacts_navigation_sub_navigation_sub_navigation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/ui-artefacts/navigation/sub-navigation/sub-navigation.component */
    "./src/app/components/ui-artefacts/navigation/sub-navigation/sub-navigation.component.ts");
    /* harmony import */


    var _components_ui_artefacts_navigation_sub_navigation_sub_navigation_entry_sub_navigation_entry_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/ui-artefacts/navigation/sub-navigation/sub-navigation-entry/sub-navigation-entry.component */
    "./src/app/components/ui-artefacts/navigation/sub-navigation/sub-navigation-entry/sub-navigation-entry.component.ts");
    /* harmony import */


    var _components_views_projects_active_projects_active_projects_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/views/projects/active-projects/active-projects.component */
    "./src/app/components/views/projects/active-projects/active-projects.component.ts");
    /* harmony import */


    var _components_views_projects_completed_projects_completed_projects_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/views/projects/completed-projects/completed-projects.component */
    "./src/app/components/views/projects/completed-projects/completed-projects.component.ts");
    /* harmony import */


    var _components_views_projects_add_new_project_add_new_project_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/views/projects/add-new-project/add-new-project.component */
    "./src/app/components/views/projects/add-new-project/add-new-project.component.ts");
    /* harmony import */


    var _components_ui_artefacts_status_toggle_status_toggle_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/ui-artefacts/status-toggle/status-toggle.component */
    "./src/app/components/ui-artefacts/status-toggle/status-toggle.component.ts");
    /* harmony import */


    var _components_views_users_all_users_all_users_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/views/users/all-users/all-users.component */
    "./src/app/components/views/users/all-users/all-users.component.ts");
    /* harmony import */


    var _components_views_users_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/views/users/my-profile/my-profile.component */
    "./src/app/components/views/users/my-profile/my-profile.component.ts");
    /* harmony import */


    var _components_views_users_add_new_user_add_new_user_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/views/users/add-new-user/add-new-user.component */
    "./src/app/components/views/users/add-new-user/add-new-user.component.ts");
    /* harmony import */


    var _components_views_inbox_notification_notification_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/views/inbox/notification/notification.component */
    "./src/app/components/views/inbox/notification/notification.component.ts");

    var Components = [_components_views_login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"], _components_root_view_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"], _components_ui_artefacts_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__["NavigationComponent"], _components_ui_artefacts_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_3__["TopBarComponent"], _components_ui_artefacts_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbComponent"], _components_views_projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"], _components_views_inbox_inbox_component__WEBPACK_IMPORTED_MODULE_7__["InboxComponent"], _components_views_users_users_component__WEBPACK_IMPORTED_MODULE_8__["UsersComponent"], _components_views_settings_settings_component__WEBPACK_IMPORTED_MODULE_9__["SettingsComponent"], _components_views_projects_my_projects_my_projects_component__WEBPACK_IMPORTED_MODULE_10__["MyProjectsComponent"], _components_ui_artefacts_side_filter_side_filter_component__WEBPACK_IMPORTED_MODULE_5__["SideFilterComponent"], _components_ui_artefacts_navigation_sub_navigation_sub_navigation_component__WEBPACK_IMPORTED_MODULE_11__["SubNavigationComponent"], _components_ui_artefacts_navigation_sub_navigation_sub_navigation_entry_sub_navigation_entry_component__WEBPACK_IMPORTED_MODULE_12__["SubNavigationEntryComponent"], _components_views_projects_active_projects_active_projects_component__WEBPACK_IMPORTED_MODULE_13__["ActiveProjectsComponent"], _components_views_projects_completed_projects_completed_projects_component__WEBPACK_IMPORTED_MODULE_14__["CompletedProjectsComponent"], _components_views_projects_add_new_project_add_new_project_component__WEBPACK_IMPORTED_MODULE_15__["AddNewProjectComponent"], _components_ui_artefacts_status_toggle_status_toggle_component__WEBPACK_IMPORTED_MODULE_16__["StatusToggleComponent"], _components_views_users_all_users_all_users_component__WEBPACK_IMPORTED_MODULE_17__["AllUsersComponent"], _components_views_users_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_18__["MyProfileComponent"], _components_views_users_add_new_user_add_new_user_component__WEBPACK_IMPORTED_MODULE_19__["AddNewUserComponent"], _components_views_inbox_notification_notification_component__WEBPACK_IMPORTED_MODULE_20__["NotificationComponent"]];
    /***/
  },

  /***/
  "./src/app/app.imports.ts":
  /*!********************************!*\
    !*** ./src/app/app.imports.ts ***!
    \********************************/

  /*! exports provided: Imports */

  /***/
  function srcAppAppImportsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Imports", function () {
      return Imports;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.router */
    "./src/app/app.router.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var Imports = [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(_app_router__WEBPACK_IMPORTED_MODULE_2__["RouterPaths"]), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]];
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_root_view_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/root-view/app.component */
    "./src/app/components/root-view/app.component.ts");
    /* harmony import */


    var _app_imports__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.imports */
    "./src/app/app.imports.ts");
    /* harmony import */


    var _app_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.components */
    "./src/app/app.components.ts");
    /* harmony import */


    var _components_views_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/views/login/login.component */
    "./src/app/components/views/login/login.component.ts");
    /* harmony import */


    var _components_ui_artefacts_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/ui-artefacts/navigation/navigation.component */
    "./src/app/components/ui-artefacts/navigation/navigation.component.ts");
    /* harmony import */


    var _components_ui_artefacts_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/ui-artefacts/top-bar/top-bar.component */
    "./src/app/components/ui-artefacts/top-bar/top-bar.component.ts");
    /* harmony import */


    var _components_ui_artefacts_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/ui-artefacts/breadcrumb/breadcrumb.component */
    "./src/app/components/ui-artefacts/breadcrumb/breadcrumb.component.ts");
    /* harmony import */


    var _components_views_projects_projects_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/views/projects/projects.component */
    "./src/app/components/views/projects/projects.component.ts");
    /* harmony import */


    var _components_views_inbox_inbox_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/views/inbox/inbox.component */
    "./src/app/components/views/inbox/inbox.component.ts");
    /* harmony import */


    var _components_views_users_users_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/views/users/users.component */
    "./src/app/components/views/users/users.component.ts");
    /* harmony import */


    var _components_views_settings_settings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/views/settings/settings.component */
    "./src/app/components/views/settings/settings.component.ts");
    /* harmony import */


    var _components_views_projects_my_projects_my_projects_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/views/projects/my-projects/my-projects.component */
    "./src/app/components/views/projects/my-projects/my-projects.component.ts");
    /* harmony import */


    var _components_ui_artefacts_side_filter_side_filter_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/ui-artefacts/side-filter/side-filter.component */
    "./src/app/components/ui-artefacts/side-filter/side-filter.component.ts");
    /* harmony import */


    var _components_ui_artefacts_navigation_sub_navigation_sub_navigation_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/ui-artefacts/navigation/sub-navigation/sub-navigation.component */
    "./src/app/components/ui-artefacts/navigation/sub-navigation/sub-navigation.component.ts");
    /* harmony import */


    var _components_ui_artefacts_navigation_sub_navigation_sub_navigation_entry_sub_navigation_entry_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/ui-artefacts/navigation/sub-navigation/sub-navigation-entry/sub-navigation-entry.component */
    "./src/app/components/ui-artefacts/navigation/sub-navigation/sub-navigation-entry/sub-navigation-entry.component.ts");
    /* harmony import */


    var _components_views_projects_active_projects_active_projects_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/views/projects/active-projects/active-projects.component */
    "./src/app/components/views/projects/active-projects/active-projects.component.ts");
    /* harmony import */


    var _components_views_projects_completed_projects_completed_projects_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/views/projects/completed-projects/completed-projects.component */
    "./src/app/components/views/projects/completed-projects/completed-projects.component.ts");
    /* harmony import */


    var _components_views_projects_add_new_project_add_new_project_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/views/projects/add-new-project/add-new-project.component */
    "./src/app/components/views/projects/add-new-project/add-new-project.component.ts");
    /* harmony import */


    var _components_ui_artefacts_status_toggle_status_toggle_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/ui-artefacts/status-toggle/status-toggle.component */
    "./src/app/components/ui-artefacts/status-toggle/status-toggle.component.ts");
    /* harmony import */


    var _components_views_users_all_users_all_users_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/views/users/all-users/all-users.component */
    "./src/app/components/views/users/all-users/all-users.component.ts");
    /* harmony import */


    var _components_views_users_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/views/users/my-profile/my-profile.component */
    "./src/app/components/views/users/my-profile/my-profile.component.ts");
    /* harmony import */


    var _components_views_users_add_new_user_add_new_user_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/views/users/add-new-user/add-new-user.component */
    "./src/app/components/views/users/add-new-user/add-new-user.component.ts");
    /* harmony import */


    var _components_views_inbox_notification_notification_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./components/views/inbox/notification/notification.component */
    "./src/app/components/views/inbox/notification/notification.component.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_components_root_view_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [_toConsumableArray(_app_imports__WEBPACK_IMPORTED_MODULE_2__["Imports"])]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_components_views_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _components_root_view_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"], _components_ui_artefacts_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__["NavigationComponent"], _components_ui_artefacts_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_6__["TopBarComponent"], _components_ui_artefacts_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_7__["BreadcrumbComponent"], _components_views_projects_projects_component__WEBPACK_IMPORTED_MODULE_8__["ProjectsComponent"], _components_views_inbox_inbox_component__WEBPACK_IMPORTED_MODULE_9__["InboxComponent"], _components_views_users_users_component__WEBPACK_IMPORTED_MODULE_10__["UsersComponent"], _components_views_settings_settings_component__WEBPACK_IMPORTED_MODULE_11__["SettingsComponent"], _components_views_projects_my_projects_my_projects_component__WEBPACK_IMPORTED_MODULE_12__["MyProjectsComponent"], _components_ui_artefacts_side_filter_side_filter_component__WEBPACK_IMPORTED_MODULE_13__["SideFilterComponent"], _components_ui_artefacts_navigation_sub_navigation_sub_navigation_component__WEBPACK_IMPORTED_MODULE_14__["SubNavigationComponent"], _components_ui_artefacts_navigation_sub_navigation_sub_navigation_entry_sub_navigation_entry_component__WEBPACK_IMPORTED_MODULE_15__["SubNavigationEntryComponent"], _components_views_projects_active_projects_active_projects_component__WEBPACK_IMPORTED_MODULE_16__["ActiveProjectsComponent"], _components_views_projects_completed_projects_completed_projects_component__WEBPACK_IMPORTED_MODULE_17__["CompletedProjectsComponent"], _components_views_projects_add_new_project_add_new_project_component__WEBPACK_IMPORTED_MODULE_18__["AddNewProjectComponent"], _components_ui_artefacts_status_toggle_status_toggle_component__WEBPACK_IMPORTED_MODULE_19__["StatusToggleComponent"], _components_views_users_all_users_all_users_component__WEBPACK_IMPORTED_MODULE_20__["AllUsersComponent"], _components_views_users_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_21__["MyProfileComponent"], _components_views_users_add_new_user_add_new_user_component__WEBPACK_IMPORTED_MODULE_22__["AddNewUserComponent"], _components_views_inbox_notification_notification_component__WEBPACK_IMPORTED_MODULE_23__["NotificationComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_24__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_25__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_26__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: _toConsumableArray(_app_components__WEBPACK_IMPORTED_MODULE_3__["Components"]),
          imports: _toConsumableArray(_app_imports__WEBPACK_IMPORTED_MODULE_2__["Imports"]),
          providers: [],
          bootstrap: [_components_root_view_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.router.ts":
  /*!*******************************!*\
    !*** ./src/app/app.router.ts ***!
    \*******************************/

  /*! exports provided: RouterPaths */

  /***/
  function srcAppAppRouterTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RouterPaths", function () {
      return RouterPaths;
    });
    /* harmony import */


    var _components_views_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./components/views/login/login.component */
    "./src/app/components/views/login/login.component.ts");
    /* harmony import */


    var _components_views_projects_projects_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/views/projects/projects.component */
    "./src/app/components/views/projects/projects.component.ts");
    /* harmony import */


    var _components_views_inbox_inbox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/views/inbox/inbox.component */
    "./src/app/components/views/inbox/inbox.component.ts");
    /* harmony import */


    var _components_views_users_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/views/users/users.component */
    "./src/app/components/views/users/users.component.ts");
    /* harmony import */


    var _components_views_settings_settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/views/settings/settings.component */
    "./src/app/components/views/settings/settings.component.ts");
    /* harmony import */


    var _components_views_projects_my_projects_my_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/views/projects/my-projects/my-projects.component */
    "./src/app/components/views/projects/my-projects/my-projects.component.ts");
    /* harmony import */


    var _components_views_projects_active_projects_active_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/views/projects/active-projects/active-projects.component */
    "./src/app/components/views/projects/active-projects/active-projects.component.ts");
    /* harmony import */


    var _components_views_projects_completed_projects_completed_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/views/projects/completed-projects/completed-projects.component */
    "./src/app/components/views/projects/completed-projects/completed-projects.component.ts");
    /* harmony import */


    var _components_views_projects_add_new_project_add_new_project_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/views/projects/add-new-project/add-new-project.component */
    "./src/app/components/views/projects/add-new-project/add-new-project.component.ts");
    /* harmony import */


    var _components_views_users_all_users_all_users_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/views/users/all-users/all-users.component */
    "./src/app/components/views/users/all-users/all-users.component.ts");
    /* harmony import */


    var _components_views_users_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/views/users/my-profile/my-profile.component */
    "./src/app/components/views/users/my-profile/my-profile.component.ts");
    /* harmony import */


    var _components_views_users_add_new_user_add_new_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/views/users/add-new-user/add-new-user.component */
    "./src/app/components/views/users/add-new-user/add-new-user.component.ts");

    var RouterPaths = [{
      path: 'login',
      component: _components_views_login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]
    }, {
      path: 'projects',
      component: _components_views_projects_projects_component__WEBPACK_IMPORTED_MODULE_1__["ProjectsComponent"]
    }, {
      path: 'my-projects',
      component: _components_views_projects_my_projects_my_projects_component__WEBPACK_IMPORTED_MODULE_5__["MyProjectsComponent"]
    }, {
      path: 'active-projects',
      component: _components_views_projects_active_projects_active_projects_component__WEBPACK_IMPORTED_MODULE_6__["ActiveProjectsComponent"]
    }, {
      path: 'completed-projects',
      component: _components_views_projects_completed_projects_completed_projects_component__WEBPACK_IMPORTED_MODULE_7__["CompletedProjectsComponent"]
    }, {
      path: 'add-new-project',
      component: _components_views_projects_add_new_project_add_new_project_component__WEBPACK_IMPORTED_MODULE_8__["AddNewProjectComponent"]
    }, {
      path: 'inbox',
      component: _components_views_inbox_inbox_component__WEBPACK_IMPORTED_MODULE_2__["InboxComponent"]
    }, {
      path: 'users',
      component: _components_views_users_users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"]
    }, {
      path: 'all-users',
      component: _components_views_users_all_users_all_users_component__WEBPACK_IMPORTED_MODULE_9__["AllUsersComponent"]
    }, {
      path: 'my-profile',
      component: _components_views_users_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_10__["MyProfileComponent"]
    }, {
      path: 'add-new-user',
      component: _components_views_users_add_new_user_add_new_user_component__WEBPACK_IMPORTED_MODULE_11__["AddNewUserComponent"]
    }, {
      path: 'settings',
      component: _components_views_settings_settings_component__WEBPACK_IMPORTED_MODULE_4__["SettingsComponent"]
    }];
    /***/
  },

  /***/
  "./src/app/components/root-view/app.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/root-view/app.component.ts ***!
    \*******************************************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppComponentsRootViewAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/login.service */
    "./src/app/services/login.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ui_artefacts_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../ui-artefacts/top-bar/top-bar.component */
    "./src/app/components/ui-artefacts/top-bar/top-bar.component.ts");
    /* harmony import */


    var _ui_artefacts_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../ui-artefacts/breadcrumb/breadcrumb.component */
    "./src/app/components/ui-artefacts/breadcrumb/breadcrumb.component.ts");
    /* harmony import */


    var _ui_artefacts_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../ui-artefacts/navigation/navigation.component */
    "./src/app/components/ui-artefacts/navigation/navigation.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _views_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../views/login/login.component */
    "./src/app/components/views/login/login.component.ts");

    function AppComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-top-bar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-breadcrumb");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "aside");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-navigation");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "main");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "router-outlet");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-login", 2);
      }
    }

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(loggingService) {
        _classCallCheck(this, AppComponent);

        this.loggingService = loggingService;
        this.title = 'bug-tracker';
        this.isLoginVisible = false;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.showLogin = this.loggingService.doListenToLogin().subscribe(function (status) {
            _this.isLoginVisible = !status;
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 2,
      consts: [[4, "ngIf", "ngIfElse"], ["loginView", ""], [1, "login-view"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_div_0_Template, 8, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_ng_template_1_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoginVisible)("ngIfElse", _r1);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _ui_artefacts_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_3__["TopBarComponent"], _ui_artefacts_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbComponent"], _ui_artefacts_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__["NavigationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"], _views_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]],
      styles: ["main[_ngcontent-%COMP%] {\n  margin-left: 20rem;\n  margin-top: 9rem;\n  width: calc(100vw - 20rem);\n  min-height: calc(100vh - 9rem);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yb290LXZpZXcvRjpcXHNjaG9vbFxcRmluYWwtZXhhbVxcYnVnLXRyYWNrZXIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHJvb3Qtdmlld1xcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Jvb3Qtdmlldy9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSw4QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yb290LXZpZXcvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWFpbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcmVtO1xyXG4gIG1hcmdpbi10b3A6IDlyZW07XHJcbiAgd2lkdGg6IGNhbGMoMTAwdncgLSAyMHJlbSk7IC8vIHRoZSBtYWluIHZpZXcgaXMgbW92ZWQgZHVlIHRvIHRoZSBuYXZpZ2F0aW9uXHJcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDlyZW0pOyAvLyB0aGUgbWFpbiB2aWV3IGlzIG1vdmVkIGR1ZSB0byB0aGUgdG9wIGJhciBhbmQgYnJlYWRjcnVtYlxyXG59XHJcblxyXG4iLCJtYWluIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcmVtO1xuICBtYXJnaW4tdG9wOiA5cmVtO1xuICB3aWR0aDogY2FsYygxMDB2dyAtIDIwcmVtKTtcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDlyZW0pO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/ui-artefacts/breadcrumb/breadcrumb.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/components/ui-artefacts/breadcrumb/breadcrumb.component.ts ***!
    \****************************************************************************/

  /*! exports provided: BreadcrumbComponent */

  /***/
  function srcAppComponentsUiArtefactsBreadcrumbBreadcrumbComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function () {
      return BreadcrumbComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BreadcrumbComponent =
    /*#__PURE__*/
    function () {
      function BreadcrumbComponent() {
        _classCallCheck(this, BreadcrumbComponent);
      }

      _createClass(BreadcrumbComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BreadcrumbComponent;
    }();

    BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) {
      return new (t || BreadcrumbComponent)();
    };

    BreadcrumbComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BreadcrumbComponent,
      selectors: [["app-breadcrumb"]],
      decls: 3,
      vars: 0,
      consts: [[1, "breadcrumb"], [1, "par3"]],
      template: function BreadcrumbComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Hi papa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".svg-fill[_ngcontent-%COMP%] {\n  fill: #fff;\n}\n.svg-fill__l-Grey[_ngcontent-%COMP%] {\n  fill: #D5D5D5;\n}\n.svg-fill__m-Grey[_ngcontent-%COMP%] {\n  fill: #8D93A4;\n}\n.breadcrumb[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 4rem;\n  border-bottom: 0.1rem solid #DADCE1;\n  position: fixed;\n  margin-left: 20rem;\n  margin-top: 5rem;\n  top: 0;\n  display: inline-flex;\n  align-items: center;\n  padding: 0 3rem;\n  background-color: #fff;\n  z-index: 10;\n}\n.breadcrumb[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #8D93A4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91aS1hcnRlZmFjdHMvYnJlYWRjcnVtYi9GOlxcc2Nob29sXFxGaW5hbC1leGFtXFxidWctdHJhY2tlci9zcmNcXHN0eWxlc1xcZ2VuZXJhbFxcY29sb3JzLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvdWktYXJ0ZWZhY3RzL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy91aS1hcnRlZmFjdHMvYnJlYWRjcnVtYi9GOlxcc2Nob29sXFxGaW5hbC1leGFtXFxidWctdHJhY2tlci9zcmNcXGFwcFxcY29tcG9uZW50c1xcdWktYXJ0ZWZhY3RzXFxicmVhZGNydW1iXFxicmVhZGNydW1iLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCQTtFQUNFLFVBbEJZO0FDRWQ7QURrQkU7RUFDRSxhQWxCZTtBQ0VuQjtBRG1CRTtFQUNFLGFBckJnQjtBQ0lwQjtBQ05BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JGYlk7RUVjWixXQUFBO0FEU0Y7QUNQRTtFQUNFLGNGYmdCO0FDc0JwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdWktYXJ0ZWZhY3RzL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvci13aGl0ZTogI2ZmZjtcclxuJGNvbG9yLWRhcmtlci13aGl0ZTogI2YyZjNmNztcclxuJGNvbG9yLXZlcnlMaWdodC1ncmV5OiAjREFEQ0UxO1xyXG4kY29sb3ItbGlnaHQtZ3JleTogI0Q1RDVENTtcclxuJGNvbG9yLW1lZGl1bS1ncmV5OiAjOEQ5M0E0O1xyXG4kY29sb3ItbWVkaXVtRGFyay1ncmV5OiAjNTY1QzZFO1xyXG4kY29sb3ItZGFyay1ncmV5OiAjM0EzQzQ5O1xyXG4kY29sb3ItdmVyeURhcmstZ3JleTogIzJGMzEzQjtcclxuJGNvbG9yLWRhcmtlc3QtZ3JleTogIzIyMjgzMTtcclxuXHJcbiR0ZXJ0aWFyeS1jb2xvci1ncmVlbjogIzczRDNCRTtcclxuJHRlcnRpYXJ5LWNvbG9yLWdyZWVuLWRhcms6ICMyRUM5QTc7XHJcbiR0ZXJ0aWFyeS1jb2xvci1ibHVlOiAjNjY4Q0Y2O1xyXG4kdGVydGlhcnktY29sb3ItYmx1ZS1kYXJrOiAjNDc3M0VDO1xyXG4kdGVydGlhcnktY29sb3ItcmVkOiAjRjY2Njc5O1xyXG4kdGVydGlhcnktY29sb3ItcmVkLWRhcms6ICNFQzRCNjA7XHJcblxyXG4uc3ZnLWZpbGwge1xyXG4gIGZpbGw6ICRjb2xvci13aGl0ZTtcclxuXHJcbiAgJl9fbC1HcmV5IHtcclxuICAgIGZpbGw6ICRjb2xvci1saWdodC1ncmV5O1xyXG4gIH1cclxuXHJcbiAgJl9fbS1HcmV5IHtcclxuICAgIGZpbGw6ICRjb2xvci1tZWRpdW0tZ3JleTtcclxuICB9XHJcbn1cclxuIiwiLnN2Zy1maWxsIHtcbiAgZmlsbDogI2ZmZjtcbn1cbi5zdmctZmlsbF9fbC1HcmV5IHtcbiAgZmlsbDogI0Q1RDVENTtcbn1cbi5zdmctZmlsbF9fbS1HcmV5IHtcbiAgZmlsbDogIzhEOTNBNDtcbn1cblxuLmJyZWFkY3J1bWIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0cmVtO1xuICBib3JkZXItYm90dG9tOiAwLjFyZW0gc29saWQgI0RBRENFMTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBtYXJnaW4tbGVmdDogMjByZW07XG4gIG1hcmdpbi10b3A6IDVyZW07XG4gIHRvcDogMDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgM3JlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgei1pbmRleDogMTA7XG59XG4uYnJlYWRjcnVtYiBwIHtcbiAgY29sb3I6ICM4RDkzQTQ7XG59IiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3N0eWxlcy9nZW5lcmFsL2NvbG9yc1wiO1xyXG5cclxuLmJyZWFkY3J1bWIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNHJlbTtcclxuICBib3JkZXItYm90dG9tOiAuMXJlbSBzb2xpZCAkY29sb3ItdmVyeUxpZ2h0LWdyZXk7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHJlbTtcclxuICBtYXJnaW4tdG9wOiA1cmVtOyAvLyB0aGUgYnJlYWRjcnVtYiBpcyBtb3ZlZCBkdWUgdG8gdGhlIHRvcCBiYXJcclxuICB0b3A6IDA7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwIDNyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gIHotaW5kZXg6IDEwO1xyXG5cclxuICBwIHtcclxuICAgIGNvbG9yOiAkY29sb3ItbWVkaXVtLWdyZXk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreadcrumbComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-breadcrumb',
          templateUrl: './breadcrumb.component.html',
          styleUrls: ['./breadcrumb.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/ui-artefacts/navigation/navigation.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/components/ui-artefacts/navigation/navigation.component.ts ***!
    \****************************************************************************/

  /*! exports provided: NavigationComponent */

  /***/
  function srcAppComponentsUiArtefactsNavigationNavigationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () {
      return NavigationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_models_mockDataModels_navigationPaths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/models/mockDataModels/navigationPaths */
    "./src/app/models/mockDataModels/navigationPaths.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _sub_navigation_sub_navigation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./sub-navigation/sub-navigation.component */
    "./src/app/components/ui-artefacts/navigation/sub-navigation/sub-navigation.component.ts");

    function NavigationComponent_app_sub_navigation_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-sub-navigation", 2);
      }

      if (rf & 2) {
        var navEntry_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("categoryInfo", navEntry_r9);
      }
    }

    var NavigationComponent =
    /*#__PURE__*/
    function () {
      function NavigationComponent() {
        _classCallCheck(this, NavigationComponent);

        this.navPaths = src_app_models_mockDataModels_navigationPaths__WEBPACK_IMPORTED_MODULE_1__["navPaths"];
      }

      _createClass(NavigationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (!this.navigationSub.closed) {
            this.navigationSub.unsubscribe();
          }
        }
      }]);

      return NavigationComponent;
    }();

    NavigationComponent.ɵfac = function NavigationComponent_Factory(t) {
      return new (t || NavigationComponent)();
    };

    NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavigationComponent,
      selectors: [["app-navigation"]],
      decls: 2,
      vars: 1,
      consts: [[1, "side-navigation"], [3, "categoryInfo", 4, "ngFor", "ngForOf"], [3, "categoryInfo"]],
      template: function NavigationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavigationComponent_app_sub_navigation_1_Template, 1, 1, "app-sub-navigation", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.navPaths);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _sub_navigation_sub_navigation_component__WEBPACK_IMPORTED_MODULE_3__["SubNavigationComponent"]],
      styles: [".svg-fill[_ngcontent-%COMP%] {\n  fill: #fff;\n}\n.svg-fill__l-Grey[_ngcontent-%COMP%] {\n  fill: #D5D5D5;\n}\n.svg-fill__m-Grey[_ngcontent-%COMP%] {\n  fill: #8D93A4;\n}\n.side-navigation[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 0;\n  top: 5rem;\n  width: 20rem;\n  height: calc(100vh - 5rem);\n  background-color: #2F313B;\n  color: #D5D5D5;\n  padding: 2rem 0;\n}\n.side-navigation[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.side-navigation__separator[_ngcontent-%COMP%] {\n  margin: 1.5rem;\n  width: auto;\n  height: 0.2rem;\n  background-color: #565C6E;\n}\n.side-navigation__title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 4rem;\n  padding: 0 1.5rem;\n  justify-content: space-between;\n}\n.side-navigation__title__highlight[_ngcontent-%COMP%] {\n  background-color: #565C6E;\n}\n.side-navigation__title[_ngcontent-%COMP%]   .pathfinder[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n.side-navigation__title[_ngcontent-%COMP%]   .pathfinder[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 1rem;\n  height: 1rem;\n  border-radius: 5rem;\n  background-color: #F66679;\n  margin-left: 1rem;\n  margin-top: -0.7rem;\n  -webkit-animation: pulse 1s infinite;\n          animation: pulse 1s infinite;\n}\n@-webkit-keyframes pulse {\n  0% {\n    -webkit-box-shadow: 0 0 0 0 rgba(246, 102, 121, 0.4);\n  }\n  70% {\n    -webkit-box-shadow: 0 0 0 10px rgba(246, 102, 121, 0);\n  }\n  100% {\n    -webkit-box-shadow: 0 0 0 0 rgba(246, 102, 121, 0);\n  }\n}\n@keyframes pulse {\n  0% {\n    box-shadow: 0 0 0 0 rgba(246, 102, 121, 0.4);\n  }\n  70% {\n    box-shadow: 0 0 0 10px rgba(246, 102, 121, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(246, 102, 121, 0);\n  }\n}\n.side-navigation__title[_ngcontent-%COMP%]   .highlighter[_ngcontent-%COMP%] {\n  height: inherit;\n  width: 0.5rem;\n  position: absolute;\n  left: 0;\n  background-color: #73D3BE;\n}\n.side-navigation__collapsible[_ngcontent-%COMP%] {\n  height: 0;\n  visibility: hidden;\n  opacity: 0;\n}\n.side-navigation__collapsible__subtitle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 3rem;\n  padding: 0 4rem;\n  background-color: #222831;\n}\n.side-navigation__collapsible__subtitle[_ngcontent-%COMP%]   .highlighter[_ngcontent-%COMP%] {\n  height: inherit;\n  width: 0.5rem;\n  position: absolute;\n  left: 0;\n  background-color: #73D3BE;\n}\n.side-navigation__collapsible__subtitle[_ngcontent-%COMP%]   .pathfinder[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n.side-navigation__collapsible__subtitle__highlight[_ngcontent-%COMP%] {\n  background-color: #3A3C49;\n  color: #73D3BE;\n}\n.side-navigation__collapsible__subtitle[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #8D93A4;\n}\n.collapsible-visible[_ngcontent-%COMP%] {\n  padding-bottom: 2rem;\n  height: auto;\n  visibility: visible;\n  opacity: 1;\n  transition: all 0.3s;\n}\n.collapse-trigger[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.nav-icon[_ngcontent-%COMP%] {\n  width: 1.5rem;\n  height: 1.5rem;\n  margin-right: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91aS1hcnRlZmFjdHMvbmF2aWdhdGlvbi9GOlxcc2Nob29sXFxGaW5hbC1leGFtXFxidWctdHJhY2tlci9zcmNcXHN0eWxlc1xcZ2VuZXJhbFxcY29sb3JzLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvdWktYXJ0ZWZhY3RzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy91aS1hcnRlZmFjdHMvbmF2aWdhdGlvbi9GOlxcc2Nob29sXFxGaW5hbC1leGFtXFxidWctdHJhY2tlci9zcmNcXHN0eWxlc1xcZ2VuZXJhbFxcbmF2aWdhdGlvbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCQTtFQUNFLFVBbEJZO0FDRWQ7QURrQkU7RUFDRSxhQWxCZTtBQ0VuQjtBRG1CRTtFQUNFLGFBckJnQjtBQ0lwQjtBQ05BO0VBQ0UsZUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EseUJGRG9CO0VFRXBCLGNGTmlCO0VFT2pCLGVBQUE7QURTRjtBQ1BFO0VBQ0UsaUJBQUE7QURTSjtBQ05FO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EseUJGZm9CO0FDdUJ4QjtBQ0xFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7QURPSjtBQ0xJO0VBQ0UseUJGMUJrQjtBQ2lDeEI7QUNKSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QURNTjtBQ0pNO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJGOUJhO0VFK0JiLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtVQUFBLDRCQUFBO0FETVI7QUNKUTtFQUNFO0lBQUksb0RBQUE7RURPWjtFQ05RO0lBQUsscURBQUE7RURTYjtFQ1JRO0lBQU0sa0RBQUE7RURXZDtBQUNGO0FDVlE7RUFDRTtJQUVFLDRDQUFBO0VEWVY7RUNWUTtJQUVFLDZDQUFBO0VEWVY7RUNWUTtJQUVFLDBDQUFBO0VEWVY7QUFDRjtBQ1BJO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSx5QkZsRWlCO0FDMkV2QjtBQ05FO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBRFFKO0FDTkk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHlCRmpGZTtBQ3lGckI7QUNOTTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EseUJGdEZlO0FDOEZ2QjtBQ0xNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBRE9SO0FDSk07RUFDRSx5QkZwR1U7RUVxR1YsY0ZqR2U7QUN1R3ZCO0FDSE07RUFDRSxjRjNHWTtBQ2dIcEI7QUNDQTtFQUNFLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0FERUY7QUNDQTtFQUNFLGVBQUE7QURFRjtBQ0NBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBREVGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91aS1hcnRlZmFjdHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yLXdoaXRlOiAjZmZmO1xyXG4kY29sb3ItZGFya2VyLXdoaXRlOiAjZjJmM2Y3O1xyXG4kY29sb3ItdmVyeUxpZ2h0LWdyZXk6ICNEQURDRTE7XHJcbiRjb2xvci1saWdodC1ncmV5OiAjRDVENUQ1O1xyXG4kY29sb3ItbWVkaXVtLWdyZXk6ICM4RDkzQTQ7XHJcbiRjb2xvci1tZWRpdW1EYXJrLWdyZXk6ICM1NjVDNkU7XHJcbiRjb2xvci1kYXJrLWdyZXk6ICMzQTNDNDk7XHJcbiRjb2xvci12ZXJ5RGFyay1ncmV5OiAjMkYzMTNCO1xyXG4kY29sb3ItZGFya2VzdC1ncmV5OiAjMjIyODMxO1xyXG5cclxuJHRlcnRpYXJ5LWNvbG9yLWdyZWVuOiAjNzNEM0JFO1xyXG4kdGVydGlhcnktY29sb3ItZ3JlZW4tZGFyazogIzJFQzlBNztcclxuJHRlcnRpYXJ5LWNvbG9yLWJsdWU6ICM2NjhDRjY7XHJcbiR0ZXJ0aWFyeS1jb2xvci1ibHVlLWRhcms6ICM0NzczRUM7XHJcbiR0ZXJ0aWFyeS1jb2xvci1yZWQ6ICNGNjY2Nzk7XHJcbiR0ZXJ0aWFyeS1jb2xvci1yZWQtZGFyazogI0VDNEI2MDtcclxuXHJcbi5zdmctZmlsbCB7XHJcbiAgZmlsbDogJGNvbG9yLXdoaXRlO1xyXG5cclxuICAmX19sLUdyZXkge1xyXG4gICAgZmlsbDogJGNvbG9yLWxpZ2h0LWdyZXk7XHJcbiAgfVxyXG5cclxuICAmX19tLUdyZXkge1xyXG4gICAgZmlsbDogJGNvbG9yLW1lZGl1bS1ncmV5O1xyXG4gIH1cclxufVxyXG4iLCIuc3ZnLWZpbGwge1xuICBmaWxsOiAjZmZmO1xufVxuLnN2Zy1maWxsX19sLUdyZXkge1xuICBmaWxsOiAjRDVENUQ1O1xufVxuLnN2Zy1maWxsX19tLUdyZXkge1xuICBmaWxsOiAjOEQ5M0E0O1xufVxuXG4uc2lkZS1uYXZpZ2F0aW9uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICB0b3A6IDVyZW07XG4gIHdpZHRoOiAyMHJlbTtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNXJlbSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyRjMxM0I7XG4gIGNvbG9yOiAjRDVENUQ1O1xuICBwYWRkaW5nOiAycmVtIDA7XG59XG4uc2lkZS1uYXZpZ2F0aW9uIHAge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cbi5zaWRlLW5hdmlnYXRpb25fX3NlcGFyYXRvciB7XG4gIG1hcmdpbjogMS41cmVtO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiAwLjJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NjVDNkU7XG59XG4uc2lkZS1uYXZpZ2F0aW9uX190aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNHJlbTtcbiAgcGFkZGluZzogMCAxLjVyZW07XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5zaWRlLW5hdmlnYXRpb25fX3RpdGxlX19oaWdobGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTY1QzZFO1xufVxuLnNpZGUtbmF2aWdhdGlvbl9fdGl0bGUgLnBhdGhmaW5kZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cbi5zaWRlLW5hdmlnYXRpb25fX3RpdGxlIC5wYXRoZmluZGVyIC5ub3RpZmljYXRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxcmVtO1xuICBoZWlnaHQ6IDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNjY2Nzk7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICBtYXJnaW4tdG9wOiAtMC43cmVtO1xuICBhbmltYXRpb246IHB1bHNlIDFzIGluZmluaXRlO1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIHB1bHNlIHtcbiAgMCUge1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDI0NiwgMTAyLCAxMjEsIDAuNCk7XG4gIH1cbiAgNzAlIHtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDEwcHggcmdiYSgyNDYsIDEwMiwgMTIxLCAwKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgyNDYsIDEwMiwgMTIxLCAwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBwdWxzZSB7XG4gIDAlIHtcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgyNDYsIDEwMiwgMTIxLCAwLjQpO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgyNDYsIDEwMiwgMTIxLCAwLjQpO1xuICB9XG4gIDcwJSB7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDAgMCAxMHB4IHJnYmEoMjQ2LCAxMDIsIDEyMSwgMCk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMTBweCByZ2JhKDI0NiwgMTAyLCAxMjEsIDApO1xuICB9XG4gIDEwMCUge1xuICAgIC1tb3otYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDI0NiwgMTAyLCAxMjEsIDApO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgyNDYsIDEwMiwgMTIxLCAwKTtcbiAgfVxufVxuLnNpZGUtbmF2aWdhdGlvbl9fdGl0bGUgLmhpZ2hsaWdodGVyIHtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICB3aWR0aDogMC41cmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3M0QzQkU7XG59XG4uc2lkZS1uYXZpZ2F0aW9uX19jb2xsYXBzaWJsZSB7XG4gIGhlaWdodDogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvcGFjaXR5OiAwO1xufVxuLnNpZGUtbmF2aWdhdGlvbl9fY29sbGFwc2libGVfX3N1YnRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAzcmVtO1xuICBwYWRkaW5nOiAwIDRyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjI4MzE7XG59XG4uc2lkZS1uYXZpZ2F0aW9uX19jb2xsYXBzaWJsZV9fc3VidGl0bGUgLmhpZ2hsaWdodGVyIHtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICB3aWR0aDogMC41cmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3M0QzQkU7XG59XG4uc2lkZS1uYXZpZ2F0aW9uX19jb2xsYXBzaWJsZV9fc3VidGl0bGUgLnBhdGhmaW5kZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc2lkZS1uYXZpZ2F0aW9uX19jb2xsYXBzaWJsZV9fc3VidGl0bGVfX2hpZ2hsaWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzQTNDNDk7XG4gIGNvbG9yOiAjNzNEM0JFO1xufVxuLnNpZGUtbmF2aWdhdGlvbl9fY29sbGFwc2libGVfX3N1YnRpdGxlIHAge1xuICBjb2xvcjogIzhEOTNBNDtcbn1cblxuLmNvbGxhcHNpYmxlLXZpc2libGUge1xuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcbiAgaGVpZ2h0OiBhdXRvO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuLmNvbGxhcHNlLXRyaWdnZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uYXYtaWNvbiB7XG4gIHdpZHRoOiAxLjVyZW07XG4gIGhlaWdodDogMS41cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG59IiwiQGltcG9ydCBcIi4vY29sb3JzXCI7XHJcblxyXG4uc2lkZS1uYXZpZ2F0aW9uIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDVyZW07XHJcbiAgd2lkdGg6IDIwcmVtO1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDVyZW0pO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci12ZXJ5RGFyay1ncmV5O1xyXG4gIGNvbG9yOiAkY29sb3ItbGlnaHQtZ3JleTtcclxuICBwYWRkaW5nOiAycmVtIDA7XHJcblxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgfVxyXG5cclxuICAmX19zZXBhcmF0b3Ige1xyXG4gICAgbWFyZ2luOiAxLjVyZW07XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGhlaWdodDogLjJyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItbWVkaXVtRGFyay1ncmV5O1xyXG4gIH1cclxuXHJcbiAgJl9fdGl0bGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDRyZW07XHJcbiAgICBwYWRkaW5nOiAwIDEuNXJlbTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAmX19oaWdobGlnaHQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItbWVkaXVtRGFyay1ncmV5O1xyXG4gICAgfVxyXG5cclxuICAgIC5wYXRoZmluZGVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAubm90aWZpY2F0aW9uIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDFyZW07XHJcbiAgICAgICAgaGVpZ2h0OiAxcmVtO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVyZW07XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRlcnRpYXJ5LWNvbG9yLXJlZDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtLjdyZW07XHJcbiAgICAgICAgYW5pbWF0aW9uOiBwdWxzZSAxcyBpbmZpbml0ZTtcclxuXHJcbiAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIHB1bHNlIHtcclxuICAgICAgICAgIDAlIHstd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgyNDYsMTAyLDEyMSwuNCk7fVxyXG4gICAgICAgICAgNzAlIHstd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDEwcHggcmdiYSgyNDYsMTAyLDEyMSwwKTt9XHJcbiAgICAgICAgICAxMDAlIHstd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgyNDYsMTAyLDEyMSwwKTt9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBrZXlmcmFtZXMgcHVsc2Uge1xyXG4gICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgyNDYsMTAyLDEyMSwuNCk7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgyNDYsMTAyLDEyMSwuNCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICA3MCUge1xyXG4gICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDAgMCAwIDEwcHggcmdiYSgyNDYsMTAyLDEyMSwwKTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMTBweCByZ2JhKDI0NiwxMDIsMTIxLDApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDI0NiwxMDIsMTIxLDApO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMjQ2LDEwMiwxMjEsMCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmhpZ2hsaWdodGVyIHtcclxuICAgICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICB3aWR0aDogLjVyZW07XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRlcnRpYXJ5LWNvbG9yLWdyZWVuO1xyXG4gICAgfVxyXG4gIH1cclxuICAmX19jb2xsYXBzaWJsZSB7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICBvcGFjaXR5OiAwO1xyXG5cclxuICAgICZfX3N1YnRpdGxlIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgaGVpZ2h0OiAzcmVtO1xyXG4gICAgICBwYWRkaW5nOiAwIDRyZW07XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1kYXJrZXN0LWdyZXk7XHJcblxyXG4gICAgICAuaGlnaGxpZ2h0ZXIge1xyXG4gICAgICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgICAgICB3aWR0aDogLjVyZW07XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRlcnRpYXJ5LWNvbG9yLWdyZWVuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucGF0aGZpbmRlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJl9faGlnaGxpZ2h0IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZGFyay1ncmV5O1xyXG4gICAgICAgIGNvbG9yOiAkdGVydGlhcnktY29sb3ItZ3JlZW47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHAge1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3ItbWVkaXVtLWdyZXk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jb2xsYXBzaWJsZS12aXNpYmxlIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuM3M7XHJcbn1cclxuXHJcbi5jb2xsYXBzZS10cmlnZ2VyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5uYXYtaWNvbiB7XHJcbiAgd2lkdGg6IDEuNXJlbTtcclxuICBoZWlnaHQ6IDEuNXJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navigation',
          templateUrl: './navigation.component.html',
          styleUrls: ['./navigation.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/ui-artefacts/navigation/sub-navigation/sub-navigation-entry/sub-navigation-entry.component.ts":
  /*!**************************************************************************************************************************!*\
    !*** ./src/app/components/ui-artefacts/navigation/sub-navigation/sub-navigation-entry/sub-navigation-entry.component.ts ***!
    \**************************************************************************************************************************/

  /*! exports provided: SubNavigationEntryComponent */

  /***/
  function srcAppComponentsUiArtefactsNavigationSubNavigationSubNavigationEntrySubNavigationEntryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubNavigationEntryComponent", function () {
      return SubNavigationEntryComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../../services/navigation.service */
    "./src/app/services/navigation.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return {
        "side-navigation__collapsible__subtitle__highlight": a0
      };
    };

    var _c1 = function _c1(a0) {
      return {
        "highlighter": a0
      };
    };

    var SubNavigationEntryComponent =
    /*#__PURE__*/
    function () {
      function SubNavigationEntryComponent(navigationService) {
        _classCallCheck(this, SubNavigationEntryComponent);

        this.navigationService = navigationService;
      }

      _createClass(SubNavigationEntryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SubNavigationEntryComponent;
    }();

    SubNavigationEntryComponent.ɵfac = function SubNavigationEntryComponent_Factory(t) {
      return new (t || SubNavigationEntryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"]));
    };

    SubNavigationEntryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SubNavigationEntryComponent,
      selectors: [["app-sub-navigation-entry"]],
      inputs: {
        activePath: "activePath",
        path: "path",
        name: "name",
        parent: "parent"
      },
      decls: 5,
      vars: 7,
      consts: [[1, "side-navigation__collapsible__subtitle", 3, "ngClass"], [3, "ngClass"], [1, "pathfinder", 3, "click"], [1, "par3"]],
      template: function SubNavigationEntryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubNavigationEntryComponent_Template_div_click_2_listener() {
            return ctx.navigationService.doNavigate(ctx.path);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.activePath === ctx.path));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx.activePath === ctx.path));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
      styles: [".svg-fill[_ngcontent-%COMP%] {\n  fill: #fff;\n}\n.svg-fill__l-Grey[_ngcontent-%COMP%] {\n  fill: #D5D5D5;\n}\n.svg-fill__m-Grey[_ngcontent-%COMP%] {\n  fill: #8D93A4;\n}\n.side-navigation[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 0;\n  top: 5rem;\n  width: 20rem;\n  height: calc(100vh - 5rem);\n  background-color: #2F313B;\n  color: #D5D5D5;\n  padding: 2rem 0;\n}\n.side-navigation[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.side-navigation__separator[_ngcontent-%COMP%] {\n  margin: 1.5rem;\n  width: auto;\n  height: 0.2rem;\n  background-color: #565C6E;\n}\n.side-navigation__title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 4rem;\n  padding: 0 1.5rem;\n  justify-content: space-between;\n}\n.side-navigation__title__highlight[_ngcontent-%COMP%] {\n  background-color: #565C6E;\n}\n.side-navigation__title[_ngcontent-%COMP%]   .pathfinder[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n.side-navigation__title[_ngcontent-%COMP%]   .pathfinder[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 1rem;\n  height: 1rem;\n  border-radius: 5rem;\n  background-color: #F66679;\n  margin-left: 1rem;\n  margin-top: -0.7rem;\n  -webkit-animation: pulse 1s infinite;\n          animation: pulse 1s infinite;\n}\n@-webkit-keyframes pulse {\n  0% {\n    -webkit-box-shadow: 0 0 0 0 rgba(246, 102, 121, 0.4);\n  }\n  70% {\n    -webkit-box-shadow: 0 0 0 10px rgba(246, 102, 121, 0);\n  }\n  100% {\n    -webkit-box-shadow: 0 0 0 0 rgba(246, 102, 121, 0);\n  }\n}\n@keyframes pulse {\n  0% {\n    box-shadow: 0 0 0 0 rgba(246, 102, 121, 0.4);\n  }\n  70% {\n    box-shadow: 0 0 0 10px rgba(246, 102, 121, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(246, 102, 121, 0);\n  }\n}\n.side-navigation__title[_ngcontent-%COMP%]   .highlighter[_ngcontent-%COMP%] {\n  height: inherit;\n  width: 0.5rem;\n  position: absolute;\n  left: 0;\n  background-color: #73D3BE;\n}\n.side-navigation__collapsible[_ngcontent-%COMP%] {\n  height: 0;\n  visibility: hidden;\n  opacity: 0;\n}\n.side-navigation__collapsible__subtitle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 3rem;\n  padding: 0 4rem;\n  background-color: #222831;\n}\n.side-navigation__collapsible__subtitle[_ngcontent-%COMP%]   .highlighter[_ngcontent-%COMP%] {\n  height: inherit;\n  width: 0.5rem;\n  position: absolute;\n  left: 0;\n  background-color: #73D3BE;\n}\n.side-navigation__collapsible__subtitle[_ngcontent-%COMP%]   .pathfinder[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n.side-navigation__collapsible__subtitle__highlight[_ngcontent-%COMP%] {\n  background-color: #3A3C49;\n  color: #73D3BE;\n}\n.side-navigation__collapsible__subtitle[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #8D93A4;\n}\n.collapsible-visible[_ngcontent-%COMP%] {\n  padding-bottom: 2rem;\n  height: auto;\n  visibility: visible;\n  opacity: 1;\n  transition: all 0.3s;\n}\n.collapse-trigger[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.nav-icon[_ngcontent-%COMP%] {\n  width: 1.5rem;\n  height: 1.5rem;\n  margin-right: 1rem;\n}\n\n.header3__m[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  font-weight: 500;\n}\n.header2__m[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 500;\n}\n.par2[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 400;\n}\n.par3[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 400;\n}\n.par3__m[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.par5[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91aS1hcnRlZmFjdHMvbmF2aWdhdGlvbi9zdWItbmF2aWdhdGlvbi9zdWItbmF2aWdhdGlvbi1lbnRyeS9GOlxcc2Nob29sXFxGaW5hbC1leGFtXFxidWctdHJhY2tlci9zcmNcXHN0eWxlc1xcZ2VuZXJhbFxcY29sb3JzLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvdWktYXJ0ZWZhY3RzL25hdmlnYXRpb24vc3ViLW5hdmlnYXRpb24vc3ViLW5hdmlnYXRpb24tZW50cnkvc3ViLW5hdmlnYXRpb24tZW50cnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvdWktYXJ0ZWZhY3RzL25hdmlnYXRpb24vc3ViLW5hdmlnYXRpb24vc3ViLW5hdmlnYXRpb24tZW50cnkvRjpcXHNjaG9vbFxcRmluYWwtZXhhbVxcYnVnLXRyYWNrZXIvc3JjXFxzdHlsZXNcXGdlbmVyYWxcXG5hdmlnYXRpb24uc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy91aS1hcnRlZmFjdHMvbmF2aWdhdGlvbi9zdWItbmF2aWdhdGlvbi9zdWItbmF2aWdhdGlvbi1lbnRyeS9GOlxcc2Nob29sXFxGaW5hbC1leGFtXFxidWctdHJhY2tlci9zcmNcXHN0eWxlc1xcZ2VuZXJhbFxcdHlwb2dyYXBoeS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCQTtFQUNFLFVBbEJZO0FDRWQ7QURrQkU7RUFDRSxhQWxCZTtBQ0VuQjtBRG1CRTtFQUNFLGFBckJnQjtBQ0lwQjtBQ05BO0VBQ0UsZUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EseUJGRG9CO0VFRXBCLGNGTmlCO0VFT2pCLGVBQUE7QURTRjtBQ1BFO0VBQ0UsaUJBQUE7QURTSjtBQ05FO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EseUJGZm9CO0FDdUJ4QjtBQ0xFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7QURPSjtBQ0xJO0VBQ0UseUJGMUJrQjtBQ2lDeEI7QUNKSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QURNTjtBQ0pNO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJGOUJhO0VFK0JiLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtVQUFBLDRCQUFBO0FETVI7QUNKUTtFQUNFO0lBQUksb0RBQUE7RURPWjtFQ05RO0lBQUsscURBQUE7RURTYjtFQ1JRO0lBQU0sa0RBQUE7RURXZDtBQUNGO0FDVlE7RUFDRTtJQUVFLDRDQUFBO0VEWVY7RUNWUTtJQUVFLDZDQUFBO0VEWVY7RUNWUTtJQUVFLDBDQUFBO0VEWVY7QUFDRjtBQ1BJO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSx5QkZsRWlCO0FDMkV2QjtBQ05FO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBRFFKO0FDTkk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHlCRmpGZTtBQ3lGckI7QUNOTTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EseUJGdEZlO0FDOEZ2QjtBQ0xNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBRE9SO0FDSk07RUFDRSx5QkZwR1U7RUVxR1YsY0ZqR2U7QUN1R3ZCO0FDSE07RUFDRSxjRjNHWTtBQ2dIcEI7QUNDQTtFQUNFLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0FERUY7QUNDQTtFQUNFLGVBQUE7QURFRjtBQ0NBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBREVGO0FFdElBOzs7Ozs7RUFBQTtBQVFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FGd0lGO0FFcklBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FGd0lGO0FFaklBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBRm9JRjtBRWpJQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUZvSUY7QUVsSUU7RUFDRSxnQkFBQTtBRm9JSjtBRWhJQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUZtSUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VpLWFydGVmYWN0cy9uYXZpZ2F0aW9uL3N1Yi1uYXZpZ2F0aW9uL3N1Yi1uYXZpZ2F0aW9uLWVudHJ5L3N1Yi1uYXZpZ2F0aW9uLWVudHJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yLXdoaXRlOiAjZmZmO1xyXG4kY29sb3ItZGFya2VyLXdoaXRlOiAjZjJmM2Y3O1xyXG4kY29sb3ItdmVyeUxpZ2h0LWdyZXk6ICNEQURDRTE7XHJcbiRjb2xvci1saWdodC1ncmV5OiAjRDVENUQ1O1xyXG4kY29sb3ItbWVkaXVtLWdyZXk6ICM4RDkzQTQ7XHJcbiRjb2xvci1tZWRpdW1EYXJrLWdyZXk6ICM1NjVDNkU7XHJcbiRjb2xvci1kYXJrLWdyZXk6ICMzQTNDNDk7XHJcbiRjb2xvci12ZXJ5RGFyay1ncmV5OiAjMkYzMTNCO1xyXG4kY29sb3ItZGFya2VzdC1ncmV5OiAjMjIyODMxO1xyXG5cclxuJHRlcnRpYXJ5LWNvbG9yLWdyZWVuOiAjNzNEM0JFO1xyXG4kdGVydGlhcnktY29sb3ItZ3JlZW4tZGFyazogIzJFQzlBNztcclxuJHRlcnRpYXJ5LWNvbG9yLWJsdWU6ICM2NjhDRjY7XHJcbiR0ZXJ0aWFyeS1jb2xvci1ibHVlLWRhcms6ICM0NzczRUM7XHJcbiR0ZXJ0aWFyeS1jb2xvci1yZWQ6ICNGNjY2Nzk7XHJcbiR0ZXJ0aWFyeS1jb2xvci1yZWQtZGFyazogI0VDNEI2MDtcclxuXHJcbi5zdmctZmlsbCB7XHJcbiAgZmlsbDogJGNvbG9yLXdoaXRlO1xyXG5cclxuICAmX19sLUdyZXkge1xyXG4gICAgZmlsbDogJGNvbG9yLWxpZ2h0LWdyZXk7XHJcbiAgfVxyXG5cclxuICAmX19tLUdyZXkge1xyXG4gICAgZmlsbDogJGNvbG9yLW1lZGl1bS1ncmV5O1xyXG4gIH1cclxufVxyXG4iLCIuc3ZnLWZpbGwge1xuICBmaWxsOiAjZmZmO1xufVxuLnN2Zy1maWxsX19sLUdyZXkge1xuICBmaWxsOiAjRDVENUQ1O1xufVxuLnN2Zy1maWxsX19tLUdyZXkge1xuICBmaWxsOiAjOEQ5M0E0O1xufVxuXG4uc2lkZS1uYXZpZ2F0aW9uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICB0b3A6IDVyZW07XG4gIHdpZHRoOiAyMHJlbTtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNXJlbSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyRjMxM0I7XG4gIGNvbG9yOiAjRDVENUQ1O1xuICBwYWRkaW5nOiAycmVtIDA7XG59XG4uc2lkZS1uYXZpZ2F0aW9uIHAge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cbi5zaWRlLW5hdmlnYXRpb25fX3NlcGFyYXRvciB7XG4gIG1hcmdpbjogMS41cmVtO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiAwLjJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NjVDNkU7XG59XG4uc2lkZS1uYXZpZ2F0aW9uX190aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNHJlbTtcbiAgcGFkZGluZzogMCAxLjVyZW07XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5zaWRlLW5hdmlnYXRpb25fX3RpdGxlX19oaWdobGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTY1QzZFO1xufVxuLnNpZGUtbmF2aWdhdGlvbl9fdGl0bGUgLnBhdGhmaW5kZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cbi5zaWRlLW5hdmlnYXRpb25fX3RpdGxlIC5wYXRoZmluZGVyIC5ub3RpZmljYXRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxcmVtO1xuICBoZWlnaHQ6IDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNjY2Nzk7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICBtYXJnaW4tdG9wOiAtMC43cmVtO1xuICBhbmltYXRpb246IHB1bHNlIDFzIGluZmluaXRlO1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIHB1bHNlIHtcbiAgMCUge1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDI0NiwgMTAyLCAxMjEsIDAuNCk7XG4gIH1cbiAgNzAlIHtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDEwcHggcmdiYSgyNDYsIDEwMiwgMTIxLCAwKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgyNDYsIDEwMiwgMTIxLCAwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBwdWxzZSB7XG4gIDAlIHtcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgyNDYsIDEwMiwgMTIxLCAwLjQpO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgyNDYsIDEwMiwgMTIxLCAwLjQpO1xuICB9XG4gIDcwJSB7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDAgMCAxMHB4IHJnYmEoMjQ2LCAxMDIsIDEyMSwgMCk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMTBweCByZ2JhKDI0NiwgMTAyLCAxMjEsIDApO1xuICB9XG4gIDEwMCUge1xuICAgIC1tb3otYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDI0NiwgMTAyLCAxMjEsIDApO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgyNDYsIDEwMiwgMTIxLCAwKTtcbiAgfVxufVxuLnNpZGUtbmF2aWdhdGlvbl9fdGl0bGUgLmhpZ2hsaWdodGVyIHtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICB3aWR0aDogMC41cmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3M0QzQkU7XG59XG4uc2lkZS1uYXZpZ2F0aW9uX19jb2xsYXBzaWJsZSB7XG4gIGhlaWdodDogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvcGFjaXR5OiAwO1xufVxuLnNpZGUtbmF2aWdhdGlvbl9fY29sbGFwc2libGVfX3N1YnRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAzcmVtO1xuICBwYWRkaW5nOiAwIDRyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjI4MzE7XG59XG4uc2lkZS1uYXZpZ2F0aW9uX19jb2xsYXBzaWJsZV9fc3VidGl0bGUgLmhpZ2hsaWdodGVyIHtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICB3aWR0aDogMC41cmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3M0QzQkU7XG59XG4uc2lkZS1uYXZpZ2F0aW9uX19jb2xsYXBzaWJsZV9fc3VidGl0bGUgLnBhdGhmaW5kZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc2lkZS1uYXZpZ2F0aW9uX19jb2xsYXBzaWJsZV9fc3VidGl0bGVfX2hpZ2hsaWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzQTNDNDk7XG4gIGNvbG9yOiAjNzNEM0JFO1xufVxuLnNpZGUtbmF2aWdhdGlvbl9fY29sbGFwc2libGVfX3N1YnRpdGxlIHAge1xuICBjb2xvcjogIzhEOTNBNDtcbn1cblxuLmNvbGxhcHNpYmxlLXZpc2libGUge1xuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcbiAgaGVpZ2h0OiBhdXRvO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuLmNvbGxhcHNlLXRyaWdnZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uYXYtaWNvbiB7XG4gIHdpZHRoOiAxLjVyZW07XG4gIGhlaWdodDogMS41cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG59XG5cbi8qIEVYQU1QTEUgT0YgVEhFIE5BTUlOR1xuZWxlbWVudE5hbWVfX3dlaWdodCwgcmVndWxhciB3ZWlnaHQgaXMgYnkgZGVmYXVsdFxuX19tID0gbWVkaXVtXG5fX3QgPSB0aGluXG5fX3NtID0gc2VtaWJvbGRcbi4uZXRjXG4gKi9cbi5oZWFkZXIzX19tIHtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uaGVhZGVyMl9fbSB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnBhcjIge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLnBhcjMge1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5wYXIzX19tIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnBhcjUge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn0iLCJAaW1wb3J0IFwiLi9jb2xvcnNcIjtcclxuXHJcbi5zaWRlLW5hdmlnYXRpb24ge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogNXJlbTtcclxuICB3aWR0aDogMjByZW07XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNXJlbSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXZlcnlEYXJrLWdyZXk7XHJcbiAgY29sb3I6ICRjb2xvci1saWdodC1ncmV5O1xyXG4gIHBhZGRpbmc6IDJyZW0gMDtcclxuXHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICB9XHJcblxyXG4gICZfX3NlcGFyYXRvciB7XHJcbiAgICBtYXJnaW46IDEuNXJlbTtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiAuMnJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1tZWRpdW1EYXJrLWdyZXk7XHJcbiAgfVxyXG5cclxuICAmX190aXRsZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogNHJlbTtcclxuICAgIHBhZGRpbmc6IDAgMS41cmVtO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICZfX2hpZ2hsaWdodCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1tZWRpdW1EYXJrLWdyZXk7XHJcbiAgICB9XHJcblxyXG4gICAgLnBhdGhmaW5kZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgIC5ub3RpZmljYXRpb24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMXJlbTtcclxuICAgICAgICBoZWlnaHQ6IDFyZW07XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXJlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGVydGlhcnktY29sb3ItcmVkO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0uN3JlbTtcclxuICAgICAgICBhbmltYXRpb246IHB1bHNlIDFzIGluZmluaXRlO1xyXG5cclxuICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgcHVsc2Uge1xyXG4gICAgICAgICAgMCUgey13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDI0NiwxMDIsMTIxLC40KTt9XHJcbiAgICAgICAgICA3MCUgey13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMTBweCByZ2JhKDI0NiwxMDIsMTIxLDApO31cclxuICAgICAgICAgIDEwMCUgey13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDI0NiwxMDIsMTIxLDApO31cclxuICAgICAgICB9XHJcbiAgICAgICAgQGtleWZyYW1lcyBwdWxzZSB7XHJcbiAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDI0NiwxMDIsMTIxLC40KTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDI0NiwxMDIsMTIxLC40KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDcwJSB7XHJcbiAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMCAwIDAgMTBweCByZ2JhKDI0NiwxMDIsMTIxLDApO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAxMHB4IHJnYmEoMjQ2LDEwMiwxMjEsMCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMjQ2LDEwMiwxMjEsMCk7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgyNDYsMTAyLDEyMSwwKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuaGlnaGxpZ2h0ZXIge1xyXG4gICAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIHdpZHRoOiAuNXJlbTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGVydGlhcnktY29sb3ItZ3JlZW47XHJcbiAgICB9XHJcbiAgfVxyXG4gICZfX2NvbGxhcHNpYmxlIHtcclxuICAgIGhlaWdodDogMDtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIG9wYWNpdHk6IDA7XHJcblxyXG4gICAgJl9fc3VidGl0bGUge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICAgIHBhZGRpbmc6IDAgNHJlbTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWRhcmtlc3QtZ3JleTtcclxuXHJcbiAgICAgIC5oaWdobGlnaHRlciB7XHJcbiAgICAgICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICAgIHdpZHRoOiAuNXJlbTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGVydGlhcnktY29sb3ItZ3JlZW47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5wYXRoZmluZGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmX19oaWdobGlnaHQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1kYXJrLWdyZXk7XHJcbiAgICAgICAgY29sb3I6ICR0ZXJ0aWFyeS1jb2xvci1ncmVlbjtcclxuICAgICAgfVxyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgY29sb3I6ICRjb2xvci1tZWRpdW0tZ3JleTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmNvbGxhcHNpYmxlLXZpc2libGUge1xyXG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xyXG4gIGhlaWdodDogYXV0bztcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4zcztcclxufVxyXG5cclxuLmNvbGxhcHNlLXRyaWdnZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm5hdi1pY29uIHtcclxuICB3aWR0aDogMS41cmVtO1xyXG4gIGhlaWdodDogMS41cmVtO1xyXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcclxufVxyXG4iLCIvKiBFWEFNUExFIE9GIFRIRSBOQU1JTkdcclxuZWxlbWVudE5hbWVfX3dlaWdodCwgcmVndWxhciB3ZWlnaHQgaXMgYnkgZGVmYXVsdFxyXG5fX20gPSBtZWRpdW1cclxuX190ID0gdGhpblxyXG5fX3NtID0gc2VtaWJvbGRcclxuLi5ldGNcclxuICovXHJcblxyXG4uaGVhZGVyM19fbSB7XHJcbiAgZm9udC1zaXplOiAzcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5oZWFkZXIyX19tIHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLnBhcjFfX3Mge1xyXG5cclxufVxyXG5cclxuLnBhcjIge1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi5wYXIzIHtcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG5cclxuICAmX19tIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG59XHJcblxyXG4ucGFyNSB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubNavigationEntryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sub-navigation-entry',
          templateUrl: './sub-navigation-entry.component.html',
          styleUrls: ['./sub-navigation-entry.component.scss']
        }]
      }], function () {
        return [{
          type: _services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"]
        }];
      }, {
        activePath: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        path: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        parent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/ui-artefacts/navigation/sub-navigation/sub-navigation.component.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/app/components/ui-artefacts/navigation/sub-navigation/sub-navigation.component.ts ***!
    \***********************************************************************************************/

  /*! exports provided: SubNavigationComponent */

  /***/
  function srcAppComponentsUiArtefactsNavigationSubNavigationSubNavigationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubNavigationComponent", function () {
      return SubNavigationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../models/icons */
    "./src/app/models/icons.ts");
    /* harmony import */


    var _services_navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../services/navigation.service */
    "./src/app/services/navigation.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _sub_navigation_entry_sub_navigation_entry_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./sub-navigation-entry/sub-navigation-entry.component */
    "./src/app/components/ui-artefacts/navigation/sub-navigation/sub-navigation-entry/sub-navigation-entry.component.ts");

    function SubNavigationComponent_a_0_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 10);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "arrow-icon__rotate": a0
      };
    };

    var _c1 = function _c1() {
      return {
        "svg-fill__l-Grey": true
      };
    };

    var _c2 = function _c2(a0) {
      return [a0];
    };

    function SubNavigationComponent_a_0__svg_svg_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "use", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, ctx_r14.isActive));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c2, ctx_r14.icons.arrowIcon), null, "xlink");
      }
    }

    var _c3 = function _c3(a0) {
      return {
        "side-navigation__title__highlight": a0
      };
    };

    var _c4 = function _c4(a0) {
      return {
        "highlighter": a0
      };
    };

    var _c5 = function _c5() {
      return {
        "svg-fill": true
      };
    };

    function SubNavigationComponent_a_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SubNavigationComponent_a_0_Template_div_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r15.navigationService.doNavigate(ctx_r15.categoryInfo.path);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SubNavigationComponent_a_0_span_3_Template, 1, 0, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "svg", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "use", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SubNavigationComponent_a_0_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r17.toggleCollapsible();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, SubNavigationComponent_a_0__svg_svg_10_Template, 2, 8, "svg", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c3, ctx_r10.isActive));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c4, ctx_r10.isParentActive));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.categoryInfo.path === "/inbox");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](11, _c5));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c2, ctx_r10.icons[ctx_r10.categoryInfo.path] || ""), null, "xlink");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r10.categoryInfo.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.categoryInfo.entries);
      }
    }

    function SubNavigationComponent_div_1_app_sub_navigation_entry_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-sub-navigation-entry", 14);
      }

      if (rf & 2) {
        var entry_r19 = ctx.$implicit;

        var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("path", entry_r19.path)("name", entry_r19.name)("activePath", ctx_r18.currentActivePath);
      }
    }

    var _c6 = function _c6(a0) {
      return {
        "collapsible-visible": a0
      };
    };

    function SubNavigationComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SubNavigationComponent_div_1_app_sub_navigation_entry_1_Template, 1, 3, "app-sub-navigation-entry", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c6, ctx_r11.isActive));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r11.categoryInfo.entries);
      }
    }

    function SubNavigationComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 15);
      }
    }

    var SubNavigationComponent =
    /*#__PURE__*/
    function () {
      function SubNavigationComponent(navigationService) {
        _classCallCheck(this, SubNavigationComponent);

        this.navigationService = navigationService;
        this.parentChildrenPaths = new Set();
        this.isActive = false;
        this.isParentActive = false;
        this.icons = _models_icons__WEBPACK_IMPORTED_MODULE_2__["IconsURIs"];
      }

      _createClass(SubNavigationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          if (this.categoryInfo.title !== 'Separator') {
            if (this.categoryInfo.entries) {
              this.categoryInfo.entries.forEach(function (entry) {
                _this2.parentChildrenPaths.add(entry.path);
              });
            }

            this.navigationSub = this.navigationService.doListenToNavigationPathChanges().subscribe(function (path) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0,
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        if (!this.categoryInfo.entries && path.includes(this.categoryInfo.path)) {
                          this.isActive = true;
                          this.isParentActive = true;
                        } else {
                          this.isActive = false;
                          this.isParentActive = false;
                          this.doDecideIfActive(path);
                        }

                      case 1:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            });
          }
        }
      }, {
        key: "doDecideIfActive",
        value: function doDecideIfActive(path) {
          if (path.includes(this.categoryInfo.path)) {
            this.navigationService.doNavigate(this.categoryInfo.entries[0].path);
            return;
          }

          if (this.parentChildrenPaths.has(path)) {
            this.isActive = true;
            this.currentActivePath = path;
            return;
          }
        }
      }, {
        key: "toggleCollapsible",
        value: function toggleCollapsible() {
          this.navigationService.doNavigate(this.categoryInfo.path);
        }
      }]);

      return SubNavigationComponent;
    }();

    SubNavigationComponent.ɵfac = function SubNavigationComponent_Factory(t) {
      return new (t || SubNavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_navigation_service__WEBPACK_IMPORTED_MODULE_3__["NavigationService"]));
    };

    SubNavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SubNavigationComponent,
      selectors: [["app-sub-navigation"]],
      inputs: {
        categoryInfo: "categoryInfo"
      },
      decls: 3,
      vars: 3,
      consts: [["class", "side-navigation__title", 3, "ngClass", 4, "ngIf"], ["class", "side-navigation__collapsible", 3, "ngClass", 4, "ngIf"], ["class", "side-navigation__separator", 4, "ngIf"], [1, "side-navigation__title", 3, "ngClass"], [3, "ngClass"], [1, "pathfinder", 3, "click"], ["class", "notification", 4, "ngIf"], [1, "nav-icon"], [1, "collapse-trigger", 3, "click"], ["class", "arrow-icon", 3, "ngClass", 4, "ngIf"], [1, "notification"], [1, "arrow-icon", 3, "ngClass"], [1, "side-navigation__collapsible", 3, "ngClass"], [3, "path", "name", "activePath", 4, "ngFor", "ngForOf"], [3, "path", "name", "activePath"], [1, "side-navigation__separator"]],
      template: function SubNavigationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SubNavigationComponent_a_0_Template, 11, 14, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SubNavigationComponent_div_1_Template, 2, 4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SubNavigationComponent_div_2_Template, 1, 0, "div", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.categoryInfo.title !== "Separator");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.categoryInfo.entries);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.categoryInfo.title === "Separator");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _sub_navigation_entry_sub_navigation_entry_component__WEBPACK_IMPORTED_MODULE_5__["SubNavigationEntryComponent"]],
      styles: [".svg-fill[_ngcontent-%COMP%] {\n  fill: #fff;\n}\n.svg-fill__l-Grey[_ngcontent-%COMP%] {\n  fill: #D5D5D5;\n}\n.svg-fill__m-Grey[_ngcontent-%COMP%] {\n  fill: #8D93A4;\n}\n.side-navigation[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 0;\n  top: 5rem;\n  width: 20rem;\n  height: calc(100vh - 5rem);\n  background-color: #2F313B;\n  color: #D5D5D5;\n  padding: 2rem 0;\n}\n.side-navigation[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.side-navigation__separator[_ngcontent-%COMP%] {\n  margin: 1.5rem;\n  width: auto;\n  height: 0.2rem;\n  background-color: #565C6E;\n}\n.side-navigation__title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 4rem;\n  padding: 0 1.5rem;\n  justify-content: space-between;\n}\n.side-navigation__title__highlight[_ngcontent-%COMP%] {\n  background-color: #565C6E;\n}\n.side-navigation__title[_ngcontent-%COMP%]   .pathfinder[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n.side-navigation__title[_ngcontent-%COMP%]   .pathfinder[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 1rem;\n  height: 1rem;\n  border-radius: 5rem;\n  background-color: #F66679;\n  margin-left: 1rem;\n  margin-top: -0.7rem;\n  -webkit-animation: pulse 1s infinite;\n          animation: pulse 1s infinite;\n}\n@-webkit-keyframes pulse {\n  0% {\n    -webkit-box-shadow: 0 0 0 0 rgba(246, 102, 121, 0.4);\n  }\n  70% {\n    -webkit-box-shadow: 0 0 0 10px rgba(246, 102, 121, 0);\n  }\n  100% {\n    -webkit-box-shadow: 0 0 0 0 rgba(246, 102, 121, 0);\n  }\n}\n@keyframes pulse {\n  0% {\n    box-shadow: 0 0 0 0 rgba(246, 102, 121, 0.4);\n  }\n  70% {\n    box-shadow: 0 0 0 10px rgba(246, 102, 121, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(246, 102, 121, 0);\n  }\n}\n.side-navigation__title[_ngcontent-%COMP%]   .highlighter[_ngcontent-%COMP%] {\n  height: inherit;\n  width: 0.5rem;\n  position: absolute;\n  left: 0;\n  background-color: #73D3BE;\n}\n.side-navigation__collapsible[_ngcontent-%COMP%] {\n  height: 0;\n  visibility: hidden;\n  opacity: 0;\n}\n.side-navigation__collapsible__subtitle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 3rem;\n  padding: 0 4rem;\n  background-color: #222831;\n}\n.side-navigation__collapsible__subtitle[_ngcontent-%COMP%]   .highlighter[_ngcontent-%COMP%] {\n  height: inherit;\n  width: 0.5rem;\n  position: absolute;\n  left: 0;\n  background-color: #73D3BE;\n}\n.side-navigation__collapsible__subtitle[_ngcontent-%COMP%]   .pathfinder[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n.side-navigation__collapsible__subtitle__highlight[_ngcontent-%COMP%] {\n  background-color: #3A3C49;\n  color: #73D3BE;\n}\n.side-navigation__collapsible__subtitle[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #8D93A4;\n}\n.collapsible-visible[_ngcontent-%COMP%] {\n  padding-bottom: 2rem;\n  height: auto;\n  visibility: visible;\n  opacity: 1;\n  transition: all 0.3s;\n}\n.collapse-trigger[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.nav-icon[_ngcontent-%COMP%] {\n  width: 1.5rem;\n  height: 1.5rem;\n  margin-right: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91aS1hcnRlZmFjdHMvbmF2aWdhdGlvbi9zdWItbmF2aWdhdGlvbi9GOlxcc2Nob29sXFxGaW5hbC1leGFtXFxidWctdHJhY2tlci9zcmNcXHN0eWxlc1xcZ2VuZXJhbFxcY29sb3JzLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvdWktYXJ0ZWZhY3RzL25hdmlnYXRpb24vc3ViLW5hdmlnYXRpb24vc3ViLW5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvdWktYXJ0ZWZhY3RzL25hdmlnYXRpb24vc3ViLW5hdmlnYXRpb24vRjpcXHNjaG9vbFxcRmluYWwtZXhhbVxcYnVnLXRyYWNrZXIvc3JjXFxzdHlsZXNcXGdlbmVyYWxcXG5hdmlnYXRpb24uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQkE7RUFDRSxVQWxCWTtBQ0VkO0FEa0JFO0VBQ0UsYUFsQmU7QUNFbkI7QURtQkU7RUFDRSxhQXJCZ0I7QUNJcEI7QUNOQTtFQUNFLGVBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLHlCRkRvQjtFRUVwQixjRk5pQjtFRU9qQixlQUFBO0FEU0Y7QUNQRTtFQUNFLGlCQUFBO0FEU0o7QUNORTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHlCRmZvQjtBQ3VCeEI7QUNMRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0FET0o7QUNMSTtFQUNFLHlCRjFCa0I7QUNpQ3hCO0FDSkk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FETU47QUNKTTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCRjlCYTtFRStCYixpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7VUFBQSw0QkFBQTtBRE1SO0FDSlE7RUFDRTtJQUFJLG9EQUFBO0VET1o7RUNOUTtJQUFLLHFEQUFBO0VEU2I7RUNSUTtJQUFNLGtEQUFBO0VEV2Q7QUFDRjtBQ1ZRO0VBQ0U7SUFFRSw0Q0FBQTtFRFlWO0VDVlE7SUFFRSw2Q0FBQTtFRFlWO0VDVlE7SUFFRSwwQ0FBQTtFRFlWO0FBQ0Y7QUNQSTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EseUJGbEVpQjtBQzJFdkI7QUNORTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QURRSjtBQ05JO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx5QkZqRmU7QUN5RnJCO0FDTk07RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLHlCRnRGZTtBQzhGdkI7QUNMTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QURPUjtBQ0pNO0VBQ0UseUJGcEdVO0VFcUdWLGNGakdlO0FDdUd2QjtBQ0hNO0VBQ0UsY0YzR1k7QUNnSHBCO0FDQ0E7RUFDRSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtBREVGO0FDQ0E7RUFDRSxlQUFBO0FERUY7QUNDQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QURFRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdWktYXJ0ZWZhY3RzL25hdmlnYXRpb24vc3ViLW5hdmlnYXRpb24vc3ViLW5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3Itd2hpdGU6ICNmZmY7XHJcbiRjb2xvci1kYXJrZXItd2hpdGU6ICNmMmYzZjc7XHJcbiRjb2xvci12ZXJ5TGlnaHQtZ3JleTogI0RBRENFMTtcclxuJGNvbG9yLWxpZ2h0LWdyZXk6ICNENUQ1RDU7XHJcbiRjb2xvci1tZWRpdW0tZ3JleTogIzhEOTNBNDtcclxuJGNvbG9yLW1lZGl1bURhcmstZ3JleTogIzU2NUM2RTtcclxuJGNvbG9yLWRhcmstZ3JleTogIzNBM0M0OTtcclxuJGNvbG9yLXZlcnlEYXJrLWdyZXk6ICMyRjMxM0I7XHJcbiRjb2xvci1kYXJrZXN0LWdyZXk6ICMyMjI4MzE7XHJcblxyXG4kdGVydGlhcnktY29sb3ItZ3JlZW46ICM3M0QzQkU7XHJcbiR0ZXJ0aWFyeS1jb2xvci1ncmVlbi1kYXJrOiAjMkVDOUE3O1xyXG4kdGVydGlhcnktY29sb3ItYmx1ZTogIzY2OENGNjtcclxuJHRlcnRpYXJ5LWNvbG9yLWJsdWUtZGFyazogIzQ3NzNFQztcclxuJHRlcnRpYXJ5LWNvbG9yLXJlZDogI0Y2NjY3OTtcclxuJHRlcnRpYXJ5LWNvbG9yLXJlZC1kYXJrOiAjRUM0QjYwO1xyXG5cclxuLnN2Zy1maWxsIHtcclxuICBmaWxsOiAkY29sb3Itd2hpdGU7XHJcblxyXG4gICZfX2wtR3JleSB7XHJcbiAgICBmaWxsOiAkY29sb3ItbGlnaHQtZ3JleTtcclxuICB9XHJcblxyXG4gICZfX20tR3JleSB7XHJcbiAgICBmaWxsOiAkY29sb3ItbWVkaXVtLWdyZXk7XHJcbiAgfVxyXG59XHJcbiIsIi5zdmctZmlsbCB7XG4gIGZpbGw6ICNmZmY7XG59XG4uc3ZnLWZpbGxfX2wtR3JleSB7XG4gIGZpbGw6ICNENUQ1RDU7XG59XG4uc3ZnLWZpbGxfX20tR3JleSB7XG4gIGZpbGw6ICM4RDkzQTQ7XG59XG5cbi5zaWRlLW5hdmlnYXRpb24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogNXJlbTtcbiAgd2lkdGg6IDIwcmVtO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1cmVtKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJGMzEzQjtcbiAgY29sb3I6ICNENUQ1RDU7XG4gIHBhZGRpbmc6IDJyZW0gMDtcbn1cbi5zaWRlLW5hdmlnYXRpb24gcCB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuLnNpZGUtbmF2aWdhdGlvbl9fc2VwYXJhdG9yIHtcbiAgbWFyZ2luOiAxLjVyZW07XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IDAuMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU2NUM2RTtcbn1cbi5zaWRlLW5hdmlnYXRpb25fX3RpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA0cmVtO1xuICBwYWRkaW5nOiAwIDEuNXJlbTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLnNpZGUtbmF2aWdhdGlvbl9fdGl0bGVfX2hpZ2hsaWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NjVDNkU7XG59XG4uc2lkZS1uYXZpZ2F0aW9uX190aXRsZSAucGF0aGZpbmRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnNpZGUtbmF2aWdhdGlvbl9fdGl0bGUgLnBhdGhmaW5kZXIgLm5vdGlmaWNhdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDFyZW07XG4gIGhlaWdodDogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y2NjY3OTtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gIG1hcmdpbi10b3A6IC0wLjdyZW07XG4gIGFuaW1hdGlvbjogcHVsc2UgMXMgaW5maW5pdGU7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgcHVsc2Uge1xuICAwJSB7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMjQ2LCAxMDIsIDEyMSwgMC40KTtcbiAgfVxuICA3MCUge1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMTBweCByZ2JhKDI0NiwgMTAyLCAxMjEsIDApO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDI0NiwgMTAyLCAxMjEsIDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHB1bHNlIHtcbiAgMCUge1xuICAgIC1tb3otYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDI0NiwgMTAyLCAxMjEsIDAuNCk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDI0NiwgMTAyLCAxMjEsIDAuNCk7XG4gIH1cbiAgNzAlIHtcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMCAwIDEwcHggcmdiYSgyNDYsIDEwMiwgMTIxLCAwKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAxMHB4IHJnYmEoMjQ2LCAxMDIsIDEyMSwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMjQ2LCAxMDIsIDEyMSwgMCk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDI0NiwgMTAyLCAxMjEsIDApO1xuICB9XG59XG4uc2lkZS1uYXZpZ2F0aW9uX190aXRsZSAuaGlnaGxpZ2h0ZXIge1xuICBoZWlnaHQ6IGluaGVyaXQ7XG4gIHdpZHRoOiAwLjVyZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzczRDNCRTtcbn1cbi5zaWRlLW5hdmlnYXRpb25fX2NvbGxhcHNpYmxlIHtcbiAgaGVpZ2h0OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG9wYWNpdHk6IDA7XG59XG4uc2lkZS1uYXZpZ2F0aW9uX19jb2xsYXBzaWJsZV9fc3VidGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDNyZW07XG4gIHBhZGRpbmc6IDAgNHJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjgzMTtcbn1cbi5zaWRlLW5hdmlnYXRpb25fX2NvbGxhcHNpYmxlX19zdWJ0aXRsZSAuaGlnaGxpZ2h0ZXIge1xuICBoZWlnaHQ6IGluaGVyaXQ7XG4gIHdpZHRoOiAwLjVyZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzczRDNCRTtcbn1cbi5zaWRlLW5hdmlnYXRpb25fX2NvbGxhcHNpYmxlX19zdWJ0aXRsZSAucGF0aGZpbmRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zaWRlLW5hdmlnYXRpb25fX2NvbGxhcHNpYmxlX19zdWJ0aXRsZV9faGlnaGxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNBM0M0OTtcbiAgY29sb3I6ICM3M0QzQkU7XG59XG4uc2lkZS1uYXZpZ2F0aW9uX19jb2xsYXBzaWJsZV9fc3VidGl0bGUgcCB7XG4gIGNvbG9yOiAjOEQ5M0E0O1xufVxuXG4uY29sbGFwc2libGUtdmlzaWJsZSB7XG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xuICBoZWlnaHQ6IGF1dG87XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuXG4uY29sbGFwc2UtdHJpZ2dlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5hdi1pY29uIHtcbiAgd2lkdGg6IDEuNXJlbTtcbiAgaGVpZ2h0OiAxLjVyZW07XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbn0iLCJAaW1wb3J0IFwiLi9jb2xvcnNcIjtcclxuXHJcbi5zaWRlLW5hdmlnYXRpb24ge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogNXJlbTtcclxuICB3aWR0aDogMjByZW07XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNXJlbSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXZlcnlEYXJrLWdyZXk7XHJcbiAgY29sb3I6ICRjb2xvci1saWdodC1ncmV5O1xyXG4gIHBhZGRpbmc6IDJyZW0gMDtcclxuXHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICB9XHJcblxyXG4gICZfX3NlcGFyYXRvciB7XHJcbiAgICBtYXJnaW46IDEuNXJlbTtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiAuMnJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1tZWRpdW1EYXJrLWdyZXk7XHJcbiAgfVxyXG5cclxuICAmX190aXRsZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogNHJlbTtcclxuICAgIHBhZGRpbmc6IDAgMS41cmVtO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICZfX2hpZ2hsaWdodCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1tZWRpdW1EYXJrLWdyZXk7XHJcbiAgICB9XHJcblxyXG4gICAgLnBhdGhmaW5kZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgIC5ub3RpZmljYXRpb24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMXJlbTtcclxuICAgICAgICBoZWlnaHQ6IDFyZW07XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXJlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGVydGlhcnktY29sb3ItcmVkO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0uN3JlbTtcclxuICAgICAgICBhbmltYXRpb246IHB1bHNlIDFzIGluZmluaXRlO1xyXG5cclxuICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgcHVsc2Uge1xyXG4gICAgICAgICAgMCUgey13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDI0NiwxMDIsMTIxLC40KTt9XHJcbiAgICAgICAgICA3MCUgey13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMTBweCByZ2JhKDI0NiwxMDIsMTIxLDApO31cclxuICAgICAgICAgIDEwMCUgey13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDI0NiwxMDIsMTIxLDApO31cclxuICAgICAgICB9XHJcbiAgICAgICAgQGtleWZyYW1lcyBwdWxzZSB7XHJcbiAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDI0NiwxMDIsMTIxLC40KTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDI0NiwxMDIsMTIxLC40KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDcwJSB7XHJcbiAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMCAwIDAgMTBweCByZ2JhKDI0NiwxMDIsMTIxLDApO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAxMHB4IHJnYmEoMjQ2LDEwMiwxMjEsMCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMjQ2LDEwMiwxMjEsMCk7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgyNDYsMTAyLDEyMSwwKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuaGlnaGxpZ2h0ZXIge1xyXG4gICAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIHdpZHRoOiAuNXJlbTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGVydGlhcnktY29sb3ItZ3JlZW47XHJcbiAgICB9XHJcbiAgfVxyXG4gICZfX2NvbGxhcHNpYmxlIHtcclxuICAgIGhlaWdodDogMDtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIG9wYWNpdHk6IDA7XHJcblxyXG4gICAgJl9fc3VidGl0bGUge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICAgIHBhZGRpbmc6IDAgNHJlbTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWRhcmtlc3QtZ3JleTtcclxuXHJcbiAgICAgIC5oaWdobGlnaHRlciB7XHJcbiAgICAgICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICAgIHdpZHRoOiAuNXJlbTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGVydGlhcnktY29sb3ItZ3JlZW47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5wYXRoZmluZGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmX19oaWdobGlnaHQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1kYXJrLWdyZXk7XHJcbiAgICAgICAgY29sb3I6ICR0ZXJ0aWFyeS1jb2xvci1ncmVlbjtcclxuICAgICAgfVxyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgY29sb3I6ICRjb2xvci1tZWRpdW0tZ3JleTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmNvbGxhcHNpYmxlLXZpc2libGUge1xyXG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xyXG4gIGhlaWdodDogYXV0bztcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4zcztcclxufVxyXG5cclxuLmNvbGxhcHNlLXRyaWdnZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm5hdi1pY29uIHtcclxuICB3aWR0aDogMS41cmVtO1xyXG4gIGhlaWdodDogMS41cmVtO1xyXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SubNavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-sub-navigation',
          templateUrl: './sub-navigation.component.html',
          styleUrls: ['./sub-navigation.component.scss']
        }]
      }], function () {
        return [{
          type: _services_navigation_service__WEBPACK_IMPORTED_MODULE_3__["NavigationService"]
        }];
      }, {
        categoryInfo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/ui-artefacts/side-filter/side-filter.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/components/ui-artefacts/side-filter/side-filter.component.ts ***!
    \******************************************************************************/

  /*! exports provided: SideFilterComponent */

  /***/
  function srcAppComponentsUiArtefactsSideFilterSideFilterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SideFilterComponent", function () {
      return SideFilterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SideFilterComponent =
    /*#__PURE__*/
    function () {
      function SideFilterComponent() {
        _classCallCheck(this, SideFilterComponent);
      }

      _createClass(SideFilterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SideFilterComponent;
    }();

    SideFilterComponent.ɵfac = function SideFilterComponent_Factory(t) {
      return new (t || SideFilterComponent)();
    };

    SideFilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SideFilterComponent,
      selectors: [["app-side-filter"]],
      decls: 7,
      vars: 0,
      consts: [[1, "side-filter"], [1, "par3", "side-filter__entry"]],
      template: function SideFilterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Recent projects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "All projects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".svg-fill[_ngcontent-%COMP%] {\n  fill: #fff;\n}\n.svg-fill__l-Grey[_ngcontent-%COMP%] {\n  fill: #D5D5D5;\n}\n.svg-fill__m-Grey[_ngcontent-%COMP%] {\n  fill: #8D93A4;\n}\n.side-filter[_ngcontent-%COMP%] {\n  background-color: #f2f3f7;\n  border-right: 0.1rem solid #DADCE1;\n  width: 17rem;\n  height: calc(100vh - 9rem);\n  padding: 2rem;\n  position: fixed;\n}\n.side-filter__entry[_ngcontent-%COMP%] {\n  padding-bottom: 1rem;\n  color: #565C6E;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91aS1hcnRlZmFjdHMvc2lkZS1maWx0ZXIvRjpcXHNjaG9vbFxcRmluYWwtZXhhbVxcYnVnLXRyYWNrZXIvc3JjXFxzdHlsZXNcXGdlbmVyYWxcXGNvbG9ycy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3VpLWFydGVmYWN0cy9zaWRlLWZpbHRlci9zaWRlLWZpbHRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy91aS1hcnRlZmFjdHMvc2lkZS1maWx0ZXIvRjpcXHNjaG9vbFxcRmluYWwtZXhhbVxcYnVnLXRyYWNrZXIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHVpLWFydGVmYWN0c1xcc2lkZS1maWx0ZXJcXHNpZGUtZmlsdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCQTtFQUNFLFVBbEJZO0FDRWQ7QURrQkU7RUFDRSxhQWxCZTtBQ0VuQjtBRG1CRTtFQUNFLGFBckJnQjtBQ0lwQjtBQ05BO0VBQ0UseUJGRm1CO0VFR25CLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QURTRjtBQ1BFO0VBQ0Usb0JBQUE7RUFDQSxjRlBvQjtBQ2dCeEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VpLWFydGVmYWN0cy9zaWRlLWZpbHRlci9zaWRlLWZpbHRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvci13aGl0ZTogI2ZmZjtcclxuJGNvbG9yLWRhcmtlci13aGl0ZTogI2YyZjNmNztcclxuJGNvbG9yLXZlcnlMaWdodC1ncmV5OiAjREFEQ0UxO1xyXG4kY29sb3ItbGlnaHQtZ3JleTogI0Q1RDVENTtcclxuJGNvbG9yLW1lZGl1bS1ncmV5OiAjOEQ5M0E0O1xyXG4kY29sb3ItbWVkaXVtRGFyay1ncmV5OiAjNTY1QzZFO1xyXG4kY29sb3ItZGFyay1ncmV5OiAjM0EzQzQ5O1xyXG4kY29sb3ItdmVyeURhcmstZ3JleTogIzJGMzEzQjtcclxuJGNvbG9yLWRhcmtlc3QtZ3JleTogIzIyMjgzMTtcclxuXHJcbiR0ZXJ0aWFyeS1jb2xvci1ncmVlbjogIzczRDNCRTtcclxuJHRlcnRpYXJ5LWNvbG9yLWdyZWVuLWRhcms6ICMyRUM5QTc7XHJcbiR0ZXJ0aWFyeS1jb2xvci1ibHVlOiAjNjY4Q0Y2O1xyXG4kdGVydGlhcnktY29sb3ItYmx1ZS1kYXJrOiAjNDc3M0VDO1xyXG4kdGVydGlhcnktY29sb3ItcmVkOiAjRjY2Njc5O1xyXG4kdGVydGlhcnktY29sb3ItcmVkLWRhcms6ICNFQzRCNjA7XHJcblxyXG4uc3ZnLWZpbGwge1xyXG4gIGZpbGw6ICRjb2xvci13aGl0ZTtcclxuXHJcbiAgJl9fbC1HcmV5IHtcclxuICAgIGZpbGw6ICRjb2xvci1saWdodC1ncmV5O1xyXG4gIH1cclxuXHJcbiAgJl9fbS1HcmV5IHtcclxuICAgIGZpbGw6ICRjb2xvci1tZWRpdW0tZ3JleTtcclxuICB9XHJcbn1cclxuIiwiLnN2Zy1maWxsIHtcbiAgZmlsbDogI2ZmZjtcbn1cbi5zdmctZmlsbF9fbC1HcmV5IHtcbiAgZmlsbDogI0Q1RDVENTtcbn1cbi5zdmctZmlsbF9fbS1HcmV5IHtcbiAgZmlsbDogIzhEOTNBNDtcbn1cblxuLnNpZGUtZmlsdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjNmNztcbiAgYm9yZGVyLXJpZ2h0OiAwLjFyZW0gc29saWQgI0RBRENFMTtcbiAgd2lkdGg6IDE3cmVtO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA5cmVtKTtcbiAgcGFkZGluZzogMnJlbTtcbiAgcG9zaXRpb246IGZpeGVkO1xufVxuLnNpZGUtZmlsdGVyX19lbnRyeSB7XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICBjb2xvcjogIzU2NUM2RTtcbn0iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vc3R5bGVzL2dlbmVyYWwvY29sb3JzXCI7XHJcblxyXG4uc2lkZS1maWx0ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1kYXJrZXItd2hpdGU7XHJcbiAgYm9yZGVyLXJpZ2h0OiAwLjFyZW0gc29saWQgI0RBRENFMTtcclxuICB3aWR0aDogMTdyZW07XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gOXJlbSk7IC8vIHRoZSBoZWlnaHQgaXMgbW92ZWQgZHVlIHRoZSB0b3AgYmFyIGFuZCBicmVhZGNydW1iXHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcblxyXG4gICZfX2VudHJ5IHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gICAgY29sb3I6ICRjb2xvci1tZWRpdW1EYXJrLWdyZXk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideFilterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-side-filter',
          templateUrl: './side-filter.component.html',
          styleUrls: ['./side-filter.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/ui-artefacts/status-toggle/status-toggle.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/components/ui-artefacts/status-toggle/status-toggle.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: StatusToggleComponent */

  /***/
  function srcAppComponentsUiArtefactsStatusToggleStatusToggleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StatusToggleComponent", function () {
      return StatusToggleComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return {
        "text2": a0
      };
    };

    var StatusToggleComponent =
    /*#__PURE__*/
    function () {
      function StatusToggleComponent() {
        _classCallCheck(this, StatusToggleComponent);
      }

      _createClass(StatusToggleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "doToggleCheckbox",
        value: function doToggleCheckbox() {
          this.isChecked = !this.isChecked;
        }
      }]);

      return StatusToggleComponent;
    }();

    StatusToggleComponent.ɵfac = function StatusToggleComponent_Factory(t) {
      return new (t || StatusToggleComponent)();
    };

    StatusToggleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StatusToggleComponent,
      selectors: [["app-status-toggle"]],
      decls: 5,
      vars: 5,
      consts: [[1, "wrapper"], [1, "checkbox-toggle"], ["type", "checkbox", 1, "checkbox-toggle__switch", 3, "checked", "click"], [1, "text", "text1", 3, "ngClass", "click"]],
      template: function StatusToggleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StatusToggleComponent_Template_input_click_2_listener() {
            return ctx.doToggleCheckbox();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StatusToggleComponent_Template_span_click_3_listener() {
            return ctx.doToggleCheckbox();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.isChecked);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, !ctx.isChecked));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.isChecked ? "Disabled" : "Active");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
      styles: [".svg-fill[_ngcontent-%COMP%] {\n  fill: #fff;\n}\n.svg-fill__l-Grey[_ngcontent-%COMP%] {\n  fill: #D5D5D5;\n}\n.svg-fill__m-Grey[_ngcontent-%COMP%] {\n  fill: #8D93A4;\n}\n.wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.checkbox-toggle[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 10rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n}\n.checkbox-toggle__switch[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 2.5rem;\n  padding: 0.5rem;\n  background: #668CF6;\n  border-radius: 100px;\n  position: relative;\n  cursor: pointer;\n  outline: none;\n  transition: all 0.2s ease-in-out;\n}\n.checkbox-toggle__switch[_ngcontent-%COMP%]:after {\n  width: 1.5rem;\n  height: 1.5rem;\n  background-color: #fff;\n  border-radius: inherit;\n  position: absolute;\n  content: \"\";\n  transition: all 0.2s ease-in-out;\n}\n.checkbox-toggle__switch[_ngcontent-%COMP%]:checked {\n  background-color: #F66679;\n  transition: all 0.2s ease-in-out;\n}\n.checkbox-toggle__switch[_ngcontent-%COMP%]:checked:after {\n  transform: translateX(7.5rem);\n}\n.text[_ngcontent-%COMP%] {\n  position: absolute;\n  font-weight: 500;\n  font-size: 1.2rem;\n  color: #fff;\n  cursor: pointer;\n}\n.text1[_ngcontent-%COMP%] {\n  left: 1rem;\n  z-index: 10;\n}\n.text2[_ngcontent-%COMP%] {\n  left: 4rem;\n  z-index: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91aS1hcnRlZmFjdHMvc3RhdHVzLXRvZ2dsZS9GOlxcc2Nob29sXFxGaW5hbC1leGFtXFxidWctdHJhY2tlci9zcmNcXHN0eWxlc1xcZ2VuZXJhbFxcY29sb3JzLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvdWktYXJ0ZWZhY3RzL3N0YXR1cy10b2dnbGUvc3RhdHVzLXRvZ2dsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy91aS1hcnRlZmFjdHMvc3RhdHVzLXRvZ2dsZS9GOlxcc2Nob29sXFxGaW5hbC1leGFtXFxidWctdHJhY2tlci9zcmNcXGFwcFxcY29tcG9uZW50c1xcdWktYXJ0ZWZhY3RzXFxzdGF0dXMtdG9nZ2xlXFxzdGF0dXMtdG9nZ2xlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCQTtFQUNFLFVBbEJZO0FDRWQ7QURrQkU7RUFDRSxhQWxCZTtBQ0VuQjtBRG1CRTtFQUNFLGFBckJnQjtBQ0lwQjtBQ0xBO0VBQ0UsV0FBQTtBRFFGO0FDTEE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FEUUY7QUNORTtFQUNFLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CRlprQjtFRWFsQixvQkFBQTtFQUVBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtBRE9KO0FDTEk7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHNCRm5DUTtFRW9DUixzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0FET047QUNKSTtFQUNFLHlCRjdCZTtFRThCZixnQ0FBQTtBRE1OO0FDSk07RUFDRSw2QkFBQTtBRE1SO0FDQ0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXRjFEWTtFRTJEWixlQUFBO0FERUY7QUNDQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FERUY7QUNDQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FERUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VpLWFydGVmYWN0cy9zdGF0dXMtdG9nZ2xlL3N0YXR1cy10b2dnbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3Itd2hpdGU6ICNmZmY7XHJcbiRjb2xvci1kYXJrZXItd2hpdGU6ICNmMmYzZjc7XHJcbiRjb2xvci12ZXJ5TGlnaHQtZ3JleTogI0RBRENFMTtcclxuJGNvbG9yLWxpZ2h0LWdyZXk6ICNENUQ1RDU7XHJcbiRjb2xvci1tZWRpdW0tZ3JleTogIzhEOTNBNDtcclxuJGNvbG9yLW1lZGl1bURhcmstZ3JleTogIzU2NUM2RTtcclxuJGNvbG9yLWRhcmstZ3JleTogIzNBM0M0OTtcclxuJGNvbG9yLXZlcnlEYXJrLWdyZXk6ICMyRjMxM0I7XHJcbiRjb2xvci1kYXJrZXN0LWdyZXk6ICMyMjI4MzE7XHJcblxyXG4kdGVydGlhcnktY29sb3ItZ3JlZW46ICM3M0QzQkU7XHJcbiR0ZXJ0aWFyeS1jb2xvci1ncmVlbi1kYXJrOiAjMkVDOUE3O1xyXG4kdGVydGlhcnktY29sb3ItYmx1ZTogIzY2OENGNjtcclxuJHRlcnRpYXJ5LWNvbG9yLWJsdWUtZGFyazogIzQ3NzNFQztcclxuJHRlcnRpYXJ5LWNvbG9yLXJlZDogI0Y2NjY3OTtcclxuJHRlcnRpYXJ5LWNvbG9yLXJlZC1kYXJrOiAjRUM0QjYwO1xyXG5cclxuLnN2Zy1maWxsIHtcclxuICBmaWxsOiAkY29sb3Itd2hpdGU7XHJcblxyXG4gICZfX2wtR3JleSB7XHJcbiAgICBmaWxsOiAkY29sb3ItbGlnaHQtZ3JleTtcclxuICB9XHJcblxyXG4gICZfX20tR3JleSB7XHJcbiAgICBmaWxsOiAkY29sb3ItbWVkaXVtLWdyZXk7XHJcbiAgfVxyXG59XHJcbiIsIi5zdmctZmlsbCB7XG4gIGZpbGw6ICNmZmY7XG59XG4uc3ZnLWZpbGxfX2wtR3JleSB7XG4gIGZpbGw6ICNENUQ1RDU7XG59XG4uc3ZnLWZpbGxfX20tR3JleSB7XG4gIGZpbGw6ICM4RDkzQTQ7XG59XG5cbi53cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jaGVja2JveC10b2dnbGUge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMHJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY2hlY2tib3gtdG9nZ2xlX19zd2l0Y2gge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMi41cmVtO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGJhY2tncm91bmQ6ICM2NjhDRjY7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG4uY2hlY2tib3gtdG9nZ2xlX19zd2l0Y2g6YWZ0ZXIge1xuICB3aWR0aDogMS41cmVtO1xuICBoZWlnaHQ6IDEuNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cbi5jaGVja2JveC10b2dnbGVfX3N3aXRjaDpjaGVja2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y2NjY3OTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG4uY2hlY2tib3gtdG9nZ2xlX19zd2l0Y2g6Y2hlY2tlZDphZnRlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg3LjVyZW0pO1xufVxuXG4udGV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGNvbG9yOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50ZXh0MSB7XG4gIGxlZnQ6IDFyZW07XG4gIHotaW5kZXg6IDEwO1xufVxuXG4udGV4dDIge1xuICBsZWZ0OiA0cmVtO1xuICB6LWluZGV4OiAxMDtcbn0iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vc3R5bGVzL2dlbmVyYWwvY29sb3JzXCI7XHJcblxyXG5cclxuLndyYXBwZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY2hlY2tib3gtdG9nZ2xlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDEwcmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAmX19zd2l0Y2gge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDIuNXJlbTtcclxuICAgIHBhZGRpbmc6IC41cmVtO1xyXG4gICAgYmFja2dyb3VuZDogJHRlcnRpYXJ5LWNvbG9yLWJsdWU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgIC8vYm94LXNoYWRvdzogMCAycHggMTBweCAjZDFjZmNmO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIHdpZHRoOiAxLjVyZW07XHJcbiAgICAgIGhlaWdodDogMS41cmVtO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcclxuICAgIH1cclxuXHJcbiAgICAmOmNoZWNrZWQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGVydGlhcnktY29sb3ItcmVkO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDcuNXJlbSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG4udGV4dCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi50ZXh0MSB7XHJcbiAgbGVmdDogMXJlbTtcclxuICB6LWluZGV4OiAxMDtcclxufVxyXG5cclxuLnRleHQyIHtcclxuICBsZWZ0OiA0cmVtO1xyXG4gIHotaW5kZXg6IDEwO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatusToggleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-status-toggle',
          templateUrl: './status-toggle.component.html',
          styleUrls: ['./status-toggle.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/ui-artefacts/top-bar/top-bar.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/components/ui-artefacts/top-bar/top-bar.component.ts ***!
    \**********************************************************************/

  /*! exports provided: TopBarComponent */

  /***/
  function srcAppComponentsUiArtefactsTopBarTopBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopBarComponent", function () {
      return TopBarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../models/icons */
    "./src/app/models/icons.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0() {
      return {
        "svg-fill": true
      };
    };

    var _c1 = function _c1(a0) {
      return [a0];
    };

    var TopBarComponent =
    /*#__PURE__*/
    function () {
      function TopBarComponent() {
        _classCallCheck(this, TopBarComponent);

        this.icons = _models_icons__WEBPACK_IMPORTED_MODULE_1__["IconsURIs"];
      }

      _createClass(TopBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TopBarComponent;
    }();

    TopBarComponent.ɵfac = function TopBarComponent_Factory(t) {
      return new (t || TopBarComponent)();
    };

    TopBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TopBarComponent,
      selectors: [["app-top-bar"]],
      decls: 18,
      vars: 10,
      consts: [[1, "top-bar"], [1, "top-bar__logo"], ["src", "../../../../assets/wd-track-logo.png", "alt", "wd-track-logo", 1, "wd-track-logo"], [1, "top-bar__search"], ["type", "text", "placeholder", "Search.."], [1, "top-bar__user-overview"], [1, "top-bar__user-overview__text"], [1, "par-topBar-l"], [1, "par-topBar-s"], [1, "top-bar__user-overview__icons"], [1, "top-bar-icon"], [3, "ngClass"], [1, ""]],
      template: function TopBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Karolina Valentova");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Admin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "svg", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "use", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "svg", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "use", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx.icons.userProfileIcon), null, "xlink");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, ctx.icons.signOutIcon), null, "xlink");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
      styles: [".svg-fill[_ngcontent-%COMP%] {\n  fill: #fff;\n}\n.svg-fill__l-Grey[_ngcontent-%COMP%] {\n  fill: #D5D5D5;\n}\n.svg-fill__m-Grey[_ngcontent-%COMP%] {\n  fill: #8D93A4;\n}\n.top-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100vw;\n  height: 5rem;\n  background-color: #222831;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-items: center;\n  z-index: 10;\n}\n.top-bar__logo[_ngcontent-%COMP%] {\n  color: #73D3BE;\n  min-width: 20rem;\n  display: flex;\n  justify-content: center;\n}\n.top-bar__search[_ngcontent-%COMP%] {\n  padding-left: 6rem;\n  width: 60%;\n  min-width: 15rem;\n  max-width: 50rem;\n}\n.top-bar__search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.5rem 1rem;\n}\n.top-bar__search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #8D93A4;\n}\n.top-bar__search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #8D93A4;\n}\n.top-bar__search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder {\n  color: #8D93A4;\n}\n.top-bar__search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #8D93A4;\n}\n.top-bar__user-overview[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n}\n.top-bar__user-overview__text[_ngcontent-%COMP%] {\n  color: white;\n  text-align: end;\n}\n.top-bar__user-overview__icons[_ngcontent-%COMP%] {\n  display: flex;\n  margin-right: 2rem;\n}\n.top-bar__user-overview__icons[_ngcontent-%COMP%]   .top-bar-icon[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  height: 3rem;\n  margin-left: 1rem;\n}\n.wd-track-logo[_ngcontent-%COMP%] {\n  width: 8rem;\n}\n.par-topBar-l[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  padding-bottom: 0.2rem;\n}\n.par-topBar-s[_ngcontent-%COMP%] {\n  color: #DADCE1;\n  font-size: 1.1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91aS1hcnRlZmFjdHMvdG9wLWJhci9GOlxcc2Nob29sXFxGaW5hbC1leGFtXFxidWctdHJhY2tlci9zcmNcXHN0eWxlc1xcZ2VuZXJhbFxcY29sb3JzLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvdWktYXJ0ZWZhY3RzL3RvcC1iYXIvdG9wLWJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy91aS1hcnRlZmFjdHMvdG9wLWJhci9GOlxcc2Nob29sXFxGaW5hbC1leGFtXFxidWctdHJhY2tlci9zcmNcXGFwcFxcY29tcG9uZW50c1xcdWktYXJ0ZWZhY3RzXFx0b3AtYmFyXFx0b3AtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCQTtFQUNFLFVBbEJZO0FDRWQ7QURrQkU7RUFDRSxhQWxCZTtBQ0VuQjtBRG1CRTtFQUNFLGFBckJnQjtBQ0lwQjtBQ05BO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJGRW1CO0VFRG5CLE1BQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FEU0Y7QUNQRTtFQUNFLGNGTG1CO0VFTW5CLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FEU0o7QUNORTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QURRSjtBQ05JO0VBQ0UsV0FBQTtFQUNBLG9CQUFBO0FEUU47QUNOTTtFQUNFLGNGNUJZO0FDb0NwQjtBQ1RNO0VBQ0UsY0Y1Qlk7QUNvQ3BCO0FDVE07RUFDRSxjRjVCWTtBQ29DcEI7QUNUTTtFQUNFLGNGNUJZO0FDb0NwQjtBQ0hFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBREtKO0FDSEk7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBREtOO0FDRkk7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QURJTjtBQ0ZNO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBRElSO0FDRUE7RUFDRSxXQUFBO0FEQ0Y7QUNFQTtFQUNFLGlCQUFBO0VBQ0Esc0JBQUE7QURDRjtBQ0VBO0VBQ0UsY0ZwRXFCO0VFcUVyQixpQkFBQTtBRENGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91aS1hcnRlZmFjdHMvdG9wLWJhci90b3AtYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yLXdoaXRlOiAjZmZmO1xyXG4kY29sb3ItZGFya2VyLXdoaXRlOiAjZjJmM2Y3O1xyXG4kY29sb3ItdmVyeUxpZ2h0LWdyZXk6ICNEQURDRTE7XHJcbiRjb2xvci1saWdodC1ncmV5OiAjRDVENUQ1O1xyXG4kY29sb3ItbWVkaXVtLWdyZXk6ICM4RDkzQTQ7XHJcbiRjb2xvci1tZWRpdW1EYXJrLWdyZXk6ICM1NjVDNkU7XHJcbiRjb2xvci1kYXJrLWdyZXk6ICMzQTNDNDk7XHJcbiRjb2xvci12ZXJ5RGFyay1ncmV5OiAjMkYzMTNCO1xyXG4kY29sb3ItZGFya2VzdC1ncmV5OiAjMjIyODMxO1xyXG5cclxuJHRlcnRpYXJ5LWNvbG9yLWdyZWVuOiAjNzNEM0JFO1xyXG4kdGVydGlhcnktY29sb3ItZ3JlZW4tZGFyazogIzJFQzlBNztcclxuJHRlcnRpYXJ5LWNvbG9yLWJsdWU6ICM2NjhDRjY7XHJcbiR0ZXJ0aWFyeS1jb2xvci1ibHVlLWRhcms6ICM0NzczRUM7XHJcbiR0ZXJ0aWFyeS1jb2xvci1yZWQ6ICNGNjY2Nzk7XHJcbiR0ZXJ0aWFyeS1jb2xvci1yZWQtZGFyazogI0VDNEI2MDtcclxuXHJcbi5zdmctZmlsbCB7XHJcbiAgZmlsbDogJGNvbG9yLXdoaXRlO1xyXG5cclxuICAmX19sLUdyZXkge1xyXG4gICAgZmlsbDogJGNvbG9yLWxpZ2h0LWdyZXk7XHJcbiAgfVxyXG5cclxuICAmX19tLUdyZXkge1xyXG4gICAgZmlsbDogJGNvbG9yLW1lZGl1bS1ncmV5O1xyXG4gIH1cclxufVxyXG4iLCIuc3ZnLWZpbGwge1xuICBmaWxsOiAjZmZmO1xufVxuLnN2Zy1maWxsX19sLUdyZXkge1xuICBmaWxsOiAjRDVENUQ1O1xufVxuLnN2Zy1maWxsX19tLUdyZXkge1xuICBmaWxsOiAjOEQ5M0E0O1xufVxuXG4udG9wLWJhciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjI4MzE7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiAxMDtcbn1cbi50b3AtYmFyX19sb2dvIHtcbiAgY29sb3I6ICM3M0QzQkU7XG4gIG1pbi13aWR0aDogMjByZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnRvcC1iYXJfX3NlYXJjaCB7XG4gIHBhZGRpbmctbGVmdDogNnJlbTtcbiAgd2lkdGg6IDYwJTtcbiAgbWluLXdpZHRoOiAxNXJlbTtcbiAgbWF4LXdpZHRoOiA1MHJlbTtcbn1cbi50b3AtYmFyX19zZWFyY2ggaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG59XG4udG9wLWJhcl9fc2VhcmNoIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjOEQ5M0E0O1xufVxuLnRvcC1iYXJfX3VzZXItb3ZlcnZpZXcge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi50b3AtYmFyX191c2VyLW92ZXJ2aWV3X190ZXh0IHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBlbmQ7XG59XG4udG9wLWJhcl9fdXNlci1vdmVydmlld19faWNvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tcmlnaHQ6IDJyZW07XG59XG4udG9wLWJhcl9fdXNlci1vdmVydmlld19faWNvbnMgLnRvcC1iYXItaWNvbiB7XG4gIHdpZHRoOiAyLjVyZW07XG4gIGhlaWdodDogM3JlbTtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG59XG5cbi53ZC10cmFjay1sb2dvIHtcbiAgd2lkdGg6IDhyZW07XG59XG5cbi5wYXItdG9wQmFyLWwge1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuMnJlbTtcbn1cblxuLnBhci10b3BCYXItcyB7XG4gIGNvbG9yOiAjREFEQ0UxO1xuICBmb250LXNpemU6IDEuMXJlbTtcbn0iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vc3R5bGVzL2dlbmVyYWwvY29sb3JzXCI7XHJcblxyXG4udG9wLWJhciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDVyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWRhcmtlc3QtZ3JleTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gIHotaW5kZXg6IDEwO1xyXG5cclxuICAmX19sb2dvIHtcclxuICAgIGNvbG9yOiAkdGVydGlhcnktY29sb3ItZ3JlZW47XHJcbiAgICBtaW4td2lkdGg6IDIwcmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgJl9fc2VhcmNoIHtcclxuICAgIHBhZGRpbmctbGVmdDogNnJlbTtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBtaW4td2lkdGg6IDE1cmVtO1xyXG4gICAgbWF4LXdpZHRoOiA1MHJlbTtcclxuXHJcbiAgICBpbnB1dCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuXHJcbiAgICAgICY6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICBjb2xvcjogJGNvbG9yLW1lZGl1bS1ncmV5O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX191c2VyLW92ZXJ2aWV3IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblxyXG4gICAgJl9fdGV4dCB7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgfVxyXG5cclxuICAgICZfX2ljb25zIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xyXG5cclxuICAgICAgLnRvcC1iYXItaWNvbiB7XHJcbiAgICAgICAgd2lkdGg6IDIuNXJlbTtcclxuICAgICAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi53ZC10cmFjay1sb2dvIHtcclxuICB3aWR0aDogOHJlbTtcclxufVxyXG5cclxuLnBhci10b3BCYXItbCB7XHJcbiAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDAuMnJlbTtcclxufVxyXG5cclxuLnBhci10b3BCYXItcyB7XHJcbiAgY29sb3I6ICRjb2xvci12ZXJ5TGlnaHQtZ3JleTtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxufVxyXG5cclxuXHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-top-bar',
          templateUrl: './top-bar.component.html',
          styleUrls: ['./top-bar.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/views/inbox/inbox.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/views/inbox/inbox.component.ts ***!
    \***********************************************************/

  /*! exports provided: InboxComponent */

  /***/
  function srcAppComponentsViewsInboxInboxComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InboxComponent", function () {
      return InboxComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_mockDataModels_mockNotification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../models/mockDataModels/mockNotification */
    "./src/app/models/mockDataModels/mockNotification.ts");
    /* harmony import */


    var _ui_artefacts_side_filter_side_filter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../ui-artefacts/side-filter/side-filter.component */
    "./src/app/components/ui-artefacts/side-filter/side-filter.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _notification_notification_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./notification/notification.component */
    "./src/app/components/views/inbox/notification/notification.component.ts");

    function InboxComponent_app_notification_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-notification", 7);
      }

      if (rf & 2) {
        var notifEntry_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("notifInfo", notifEntry_r5);
      }
    }

    var InboxComponent =
    /*#__PURE__*/
    function () {
      function InboxComponent() {
        _classCallCheck(this, InboxComponent);

        this.mockNotification = _models_mockDataModels_mockNotification__WEBPACK_IMPORTED_MODULE_1__["mockNotification"];
      }

      _createClass(InboxComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return InboxComponent;
    }();

    InboxComponent.ɵfac = function InboxComponent_Factory(t) {
      return new (t || InboxComponent)();
    };

    InboxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InboxComponent,
      selectors: [["app-inbox"]],
      decls: 11,
      vars: 1,
      consts: [[1, "main-view"], [1, "main-view__header"], [1, "main-view__header__headline"], [1, "header3__m"], [1, "par3"], [1, "inbox"], [3, "notifInfo", 4, "ngFor", "ngForOf"], [3, "notifInfo"]],
      template: function InboxComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-side-filter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Inbox");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Active, unread notifications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, InboxComponent_app_notification_10_Template, 1, 1, "app-notification", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.mockNotification);
        }
      },
      directives: [_ui_artefacts_side_filter_side_filter_component__WEBPACK_IMPORTED_MODULE_2__["SideFilterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _notification_notification_component__WEBPACK_IMPORTED_MODULE_4__["NotificationComponent"]],
      styles: [".svg-fill[_ngcontent-%COMP%] {\n  fill: #fff;\n}\n.svg-fill__l-Grey[_ngcontent-%COMP%] {\n  fill: #D5D5D5;\n}\n.svg-fill__m-Grey[_ngcontent-%COMP%] {\n  fill: #8D93A4;\n}\n.inbox[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 0.1rem solid #DADCE1;\n}\n.inbox[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n  max-height: 68vh;\n  display: block;\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92aWV3cy9pbmJveC9GOlxcc2Nob29sXFxGaW5hbC1leGFtXFxidWctdHJhY2tlci9zcmNcXHN0eWxlc1xcZ2VuZXJhbFxcY29sb3JzLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvdmlld3MvaW5ib3gvaW5ib3guY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvdmlld3MvaW5ib3gvRjpcXHNjaG9vbFxcRmluYWwtZXhhbVxcYnVnLXRyYWNrZXIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHZpZXdzXFxpbmJveFxcaW5ib3guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJBO0VBQ0UsVUFsQlk7QUNFZDtBRGtCRTtFQUNFLGFBbEJlO0FDRW5CO0FEbUJFO0VBQ0UsYUFyQmdCO0FDSXBCO0FDTkE7RUFDRSxXQUFBO0VBQ0EsNEJBQUE7QURTRjtBQ1BFO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QURTSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmlld3MvaW5ib3gvaW5ib3guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3Itd2hpdGU6ICNmZmY7XHJcbiRjb2xvci1kYXJrZXItd2hpdGU6ICNmMmYzZjc7XHJcbiRjb2xvci12ZXJ5TGlnaHQtZ3JleTogI0RBRENFMTtcclxuJGNvbG9yLWxpZ2h0LWdyZXk6ICNENUQ1RDU7XHJcbiRjb2xvci1tZWRpdW0tZ3JleTogIzhEOTNBNDtcclxuJGNvbG9yLW1lZGl1bURhcmstZ3JleTogIzU2NUM2RTtcclxuJGNvbG9yLWRhcmstZ3JleTogIzNBM0M0OTtcclxuJGNvbG9yLXZlcnlEYXJrLWdyZXk6ICMyRjMxM0I7XHJcbiRjb2xvci1kYXJrZXN0LWdyZXk6ICMyMjI4MzE7XHJcblxyXG4kdGVydGlhcnktY29sb3ItZ3JlZW46ICM3M0QzQkU7XHJcbiR0ZXJ0aWFyeS1jb2xvci1ncmVlbi1kYXJrOiAjMkVDOUE3O1xyXG4kdGVydGlhcnktY29sb3ItYmx1ZTogIzY2OENGNjtcclxuJHRlcnRpYXJ5LWNvbG9yLWJsdWUtZGFyazogIzQ3NzNFQztcclxuJHRlcnRpYXJ5LWNvbG9yLXJlZDogI0Y2NjY3OTtcclxuJHRlcnRpYXJ5LWNvbG9yLXJlZC1kYXJrOiAjRUM0QjYwO1xyXG5cclxuLnN2Zy1maWxsIHtcclxuICBmaWxsOiAkY29sb3Itd2hpdGU7XHJcblxyXG4gICZfX2wtR3JleSB7XHJcbiAgICBmaWxsOiAkY29sb3ItbGlnaHQtZ3JleTtcclxuICB9XHJcblxyXG4gICZfX20tR3JleSB7XHJcbiAgICBmaWxsOiAkY29sb3ItbWVkaXVtLWdyZXk7XHJcbiAgfVxyXG59XHJcbiIsIi5zdmctZmlsbCB7XG4gIGZpbGw6ICNmZmY7XG59XG4uc3ZnLWZpbGxfX2wtR3JleSB7XG4gIGZpbGw6ICNENUQ1RDU7XG59XG4uc3ZnLWZpbGxfX20tR3JleSB7XG4gIGZpbGw6ICM4RDkzQTQ7XG59XG5cbi5pbmJveCB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDAuMXJlbSBzb2xpZCAjREFEQ0UxO1xufVxuLmluYm94IHRib2R5IHtcbiAgbWF4LWhlaWdodDogNjh2aDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn0iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vc3R5bGVzL2dlbmVyYWwvY29sb3JzXCI7XHJcblxyXG4uaW5ib3gge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogLjFyZW0gc29saWQgJGNvbG9yLXZlcnlMaWdodC1ncmV5O1xyXG5cclxuICB0Ym9keSB7XHJcbiAgICBtYXgtaGVpZ2h0OiA2OHZoO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InboxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-inbox',
          templateUrl: './inbox.component.html',
          styleUrls: ['./inbox.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/views/inbox/notification/notification.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/components/views/inbox/notification/notification.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: NotificationComponent */

  /***/
  function srcAppComponentsViewsInboxNotificationNotificationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationComponent", function () {
      return NotificationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../models/icons */
    "./src/app/models/icons.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function NotificationComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r20.notifInfo.description, "\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r20.notifInfo.project.name);
      }
    }

    function NotificationComponent_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "to a project\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r21.notifInfo.description, "\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r21.notifInfo.position, "\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r21.notifInfo.project.name);
      }
    }

    function NotificationComponent_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "to an issue\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "of project\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r22.notifInfo.description, "\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r22.notifInfo.position, "\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r22.notifInfo.issue.name, "\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r22.notifInfo.project.name);
      }
    }

    function NotificationComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "of a project\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r23.notifInfo.description, "\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r23.notifInfo.issue.name, "\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r23.notifInfo.project.name);
      }
    }

    function NotificationComponent_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "of a project\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r24.notifInfo.description, "\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r24.notifInfo.issue.name, "\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r24.notifInfo.project.name);
      }
    }

    function NotificationComponent_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r25.notifInfo.description, "\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r25.notifInfo.project.name);
      }
    }

    var _c0 = function _c0() {
      return {
        "svg-fill__m-Grey": true
      };
    };

    var _c1 = function _c1(a0) {
      return [a0];
    };

    var NotificationComponent =
    /*#__PURE__*/
    function () {
      function NotificationComponent() {
        _classCallCheck(this, NotificationComponent);

        this.icons = _models_icons__WEBPACK_IMPORTED_MODULE_1__["IconsURIs"];
      }

      _createClass(NotificationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NotificationComponent;
    }();

    NotificationComponent.ɵfac = function NotificationComponent_Factory(t) {
      return new (t || NotificationComponent)();
    };

    NotificationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NotificationComponent,
      selectors: [["app-notification"]],
      inputs: {
        notifInfo: "notifInfo"
      },
      decls: 18,
      vars: 15,
      consts: [[1, "inbox__entry"], [1, "inbox__entry__date"], [1, "par3"], [1, "inbox__entry__sender"], [1, "table-profile"], [1, "table-profile__icon"], [3, "ngClass"], [1, "inbox__entry__description"], [4, "ngIf"], [1, "par3", "inbox__entry__description__blue"], [1, "par3", "inbox__entry__description__green-dark"]],
      template: function NotificationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "svg", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "use", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NotificationComponent_div_12_Template, 5, 2, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NotificationComponent_div_13_Template, 9, 3, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, NotificationComponent_div_14_Template, 13, 4, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, NotificationComponent_div_15_Template, 9, 3, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, NotificationComponent_div_16_Template, 9, 3, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, NotificationComponent_div_17_Template, 5, 2, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 10, ctx.notifInfo.date));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c1, ctx.icons.userProfileIcon), null, "xlink");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.notifInfo.sender.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notifInfo.type === "newProject");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notifInfo.type === "assignedToProject");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notifInfo.type === "assignedToIssue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notifInfo.type === "newIssue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notifInfo.type === "deletedIssue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notifInfo.type === "deletedProject");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
      styles: [".svg-fill[_ngcontent-%COMP%] {\n  fill: #fff;\n}\n.svg-fill__l-Grey[_ngcontent-%COMP%] {\n  fill: #D5D5D5;\n}\n.svg-fill__m-Grey[_ngcontent-%COMP%] {\n  fill: #8D93A4;\n}\n.inbox__entry[_ngcontent-%COMP%] {\n  border-bottom: 0.1rem solid #DADCE1;\n  display: flex;\n  align-items: center;\n  padding: 0 2rem;\n}\n.inbox__entry[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  margin: 0.5rem 1rem 0.5rem 0;\n}\n.inbox__entry__date[_ngcontent-%COMP%] {\n  width: 10rem;\n}\n.inbox__entry__sender[_ngcontent-%COMP%] {\n  width: 18rem;\n}\n.inbox__entry__description[_ngcontent-%COMP%] {\n  display: flex;\n  width: calc(100% - 28rem);\n}\n.inbox__entry__description[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n}\n.inbox__entry__description__blue[_ngcontent-%COMP%] {\n  color: #668CF6;\n}\n.inbox__entry__description__green-dark[_ngcontent-%COMP%] {\n  color: #2EC9A7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92aWV3cy9pbmJveC9ub3RpZmljYXRpb24vRjpcXHNjaG9vbFxcRmluYWwtZXhhbVxcYnVnLXRyYWNrZXIvc3JjXFxzdHlsZXNcXGdlbmVyYWxcXGNvbG9ycy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3ZpZXdzL2luYm94L25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvdmlld3MvaW5ib3gvbm90aWZpY2F0aW9uL0Y6XFxzY2hvb2xcXEZpbmFsLWV4YW1cXGJ1Zy10cmFja2VyL3NyY1xcYXBwXFxjb21wb25lbnRzXFx2aWV3c1xcaW5ib3hcXG5vdGlmaWNhdGlvblxcbm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCQTtFQUNFLFVBbEJZO0FDRWQ7QURrQkU7RUFDRSxhQWxCZTtBQ0VuQjtBRG1CRTtFQUNFLGFBckJnQjtBQ0lwQjtBQ05BO0VBQ0UsbUNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FEU0Y7QUNQRTtFQUNFLDRCQUFBO0FEU0o7QUNORTtFQUNFLFlBQUE7QURRSjtBQ0xFO0VBQ0UsWUFBQTtBRE9KO0FDSkU7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QURNSjtBQ0pJO0VBQ0UsYUFBQTtBRE1OO0FDSEk7RUFDRSxjRmpCZ0I7QUNzQnRCO0FDSEk7RUFDRSxjRnJCc0I7QUMwQjVCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy92aWV3cy9pbmJveC9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yLXdoaXRlOiAjZmZmO1xyXG4kY29sb3ItZGFya2VyLXdoaXRlOiAjZjJmM2Y3O1xyXG4kY29sb3ItdmVyeUxpZ2h0LWdyZXk6ICNEQURDRTE7XHJcbiRjb2xvci1saWdodC1ncmV5OiAjRDVENUQ1O1xyXG4kY29sb3ItbWVkaXVtLWdyZXk6ICM4RDkzQTQ7XHJcbiRjb2xvci1tZWRpdW1EYXJrLWdyZXk6ICM1NjVDNkU7XHJcbiRjb2xvci1kYXJrLWdyZXk6ICMzQTNDNDk7XHJcbiRjb2xvci12ZXJ5RGFyay1ncmV5OiAjMkYzMTNCO1xyXG4kY29sb3ItZGFya2VzdC1ncmV5OiAjMjIyODMxO1xyXG5cclxuJHRlcnRpYXJ5LWNvbG9yLWdyZWVuOiAjNzNEM0JFO1xyXG4kdGVydGlhcnktY29sb3ItZ3JlZW4tZGFyazogIzJFQzlBNztcclxuJHRlcnRpYXJ5LWNvbG9yLWJsdWU6ICM2NjhDRjY7XHJcbiR0ZXJ0aWFyeS1jb2xvci1ibHVlLWRhcms6ICM0NzczRUM7XHJcbiR0ZXJ0aWFyeS1jb2xvci1yZWQ6ICNGNjY2Nzk7XHJcbiR0ZXJ0aWFyeS1jb2xvci1yZWQtZGFyazogI0VDNEI2MDtcclxuXHJcbi5zdmctZmlsbCB7XHJcbiAgZmlsbDogJGNvbG9yLXdoaXRlO1xyXG5cclxuICAmX19sLUdyZXkge1xyXG4gICAgZmlsbDogJGNvbG9yLWxpZ2h0LWdyZXk7XHJcbiAgfVxyXG5cclxuICAmX19tLUdyZXkge1xyXG4gICAgZmlsbDogJGNvbG9yLW1lZGl1bS1ncmV5O1xyXG4gIH1cclxufVxyXG4iLCIuc3ZnLWZpbGwge1xuICBmaWxsOiAjZmZmO1xufVxuLnN2Zy1maWxsX19sLUdyZXkge1xuICBmaWxsOiAjRDVENUQ1O1xufVxuLnN2Zy1maWxsX19tLUdyZXkge1xuICBmaWxsOiAjOEQ5M0E0O1xufVxuXG4uaW5ib3hfX2VudHJ5IHtcbiAgYm9yZGVyLWJvdHRvbTogMC4xcmVtIHNvbGlkICNEQURDRTE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMnJlbTtcbn1cbi5pbmJveF9fZW50cnkgdGQge1xuICBtYXJnaW46IDAuNXJlbSAxcmVtIDAuNXJlbSAwO1xufVxuLmluYm94X19lbnRyeV9fZGF0ZSB7XG4gIHdpZHRoOiAxMHJlbTtcbn1cbi5pbmJveF9fZW50cnlfX3NlbmRlciB7XG4gIHdpZHRoOiAxOHJlbTtcbn1cbi5pbmJveF9fZW50cnlfX2Rlc2NyaXB0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDI4cmVtKTtcbn1cbi5pbmJveF9fZW50cnlfX2Rlc2NyaXB0aW9uIGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uaW5ib3hfX2VudHJ5X19kZXNjcmlwdGlvbl9fYmx1ZSB7XG4gIGNvbG9yOiAjNjY4Q0Y2O1xufVxuLmluYm94X19lbnRyeV9fZGVzY3JpcHRpb25fX2dyZWVuLWRhcmsge1xuICBjb2xvcjogIzJFQzlBNztcbn0iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vLi4vc3R5bGVzL2dlbmVyYWwvY29sb3JzXCI7XHJcblxyXG4uaW5ib3hfX2VudHJ5IHtcclxuICBib3JkZXItYm90dG9tOiAuMXJlbSBzb2xpZCAkY29sb3ItdmVyeUxpZ2h0LWdyZXk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAgMnJlbTtcclxuXHJcbiAgdGQge1xyXG4gICAgbWFyZ2luOiAuNXJlbSAxcmVtIC41cmVtIDA7XHJcbiAgfVxyXG5cclxuICAmX19kYXRlIHtcclxuICAgIHdpZHRoOiAxMHJlbTtcclxuICB9XHJcblxyXG4gICZfX3NlbmRlciB7XHJcbiAgICB3aWR0aDogMThyZW07XHJcbiAgfVxyXG5cclxuICAmX19kZXNjcmlwdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDI4cmVtKTsgLy8gdGhlIHdpZHRoIGlzIHNldCBieSBkZWR1Y3RpbmcgdGhlIGRhdGUgYW5kIHNlbmRlciB3aWR0aFxyXG5cclxuICAgIGRpdiB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fYmx1ZSB7XHJcbiAgICAgIGNvbG9yOiAkdGVydGlhcnktY29sb3ItYmx1ZTtcclxuICAgIH1cclxuICAgICZfX2dyZWVuLWRhcmsge1xyXG4gICAgICBjb2xvcjogJHRlcnRpYXJ5LWNvbG9yLWdyZWVuLWRhcms7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-notification',
          templateUrl: './notification.component.html',
          styleUrls: ['./notification.component.scss']
        }]
      }], function () {
        return [];
      }, {
        notifInfo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/views/login/login.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/views/login/login.component.ts ***!
    \***********************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentsViewsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/login.service */
    "./src/app/services/login.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function LoginComponent_p_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Incorrect email or password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "failHighlight": a0
      };
    };

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(router, logingService) {
        _classCallCheck(this, LoginComponent);

        this.router = router;
        this.logingService = logingService;
        this.tempEmail = 'test@email.com';
        this.tempPassword = 'password';
        this.formVal = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          submitedEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          submitedPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          if (this.tempEmail === this.formVal.value.submitedEmail && this.tempPassword === this.formVal.value.submitedPassword) {
            console.log('logged in');
            this.router.navigate(['/projects']);
            this.logingService.doEmitLoginStatus(true);
          } else {
            console.log('wrong credentials');
            this.loginFailed = true;
          }
        } // google button

      }, {
        key: "onSuccess",
        value: function onSuccess(googleUser) {
          console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
        }
      }, {
        key: "onFailure",
        value: function onFailure(error) {
          console.log(error);
        }
      }, {
        key: "renderButton",
        value: function renderButton() {
          gapi.signin2.render('my-signin2', {
            scope: 'profile email',
            width: 240,
            height: 50,
            longtitle: true,
            theme: 'dark',
            onsuccess: this.onSuccess,
            onfailure: this.onFailure
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.renderButton();
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 34,
      vars: 8,
      consts: [[1, "login"], [1, "login__background"], [1, "login__header"], ["src", "../../../../assets/wd-track-logo.png", "alt", "wd-track-logo", 1, "login-logo"], [1, "login-quote"], [1, "header3__m"], [1, "par2"], ["src", "../../../../assets/side-img-header-1.png", "alt", "illustration", 1, "illustration"], [1, "login__form"], [3, "formGroup", "submit"], [1, "header2__m"], [1, "login__form__credentials", 3, "click"], ["for", "email"], ["type", "email", "id", "email", "placeholder", "Email..", "required", "", "formControlName", "submitedEmail", 3, "ngClass"], ["for", "password"], ["type", "password", "id", "password", "placeholder", "Password..", "required", "", "formControlName", "submitedPassword", 3, "ngClass"], [1, "login__form__settings"], [1, "login__form__settings__checkbox"], ["type", "checkbox", "id", "rememberPassword", "name", "rememberPassword", 1, "input-checkbox"], ["for", "rememberPassword", 1, "par2"], [1, "login__form__button__login"], ["class", "par2", 4, "ngIf"], ["id", "my-signin2", 1, "login__form__button__google"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Don't be intimidated by what you don't know\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "- Sara Blakely");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function LoginComponent_Template_form_submit_11_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "User login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_div_click_14_listener() {
            return ctx.loginFailed = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Remember your password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Forgot your password?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, LoginComponent_p_30_Template, 2, 0, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Or");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formVal);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.loginFailed));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.loginFailed));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginFailed);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      styles: [".svg-fill[_ngcontent-%COMP%] {\n  fill: #fff;\n}\n.svg-fill__l-Grey[_ngcontent-%COMP%] {\n  fill: #D5D5D5;\n}\n.svg-fill__m-Grey[_ngcontent-%COMP%] {\n  fill: #8D93A4;\n}\n.svg-fill[_ngcontent-%COMP%] {\n  fill: #fff;\n}\n.svg-fill__l-Grey[_ngcontent-%COMP%] {\n  fill: #D5D5D5;\n}\n.svg-fill__m-Grey[_ngcontent-%COMP%] {\n  fill: #8D93A4;\n}\n\ninput[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border: none;\n}\n\n\n.input-checkbox[_ngcontent-%COMP%] {\n  width: 1.5rem;\n  height: 1.5rem;\n  background: #fff;\n  border-radius: 5rem;\n  border: 0.1rem solid #8D93A4;\n  margin-right: 0.5rem;\n}\n.input-checkbox[_ngcontent-%COMP%]:checked {\n  background-color: #668CF6;\n  border: 0.4rem solid #fff;\n  box-shadow: 0 0 0 0.1rem #668CF6;\n}\n.login[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100vw;\n  height: 100vh;\n  padding: 8rem 10rem;\n  justify-content: space-between;\n}\n.login__header[_ngcontent-%COMP%] {\n  width: 50%;\n}\n.login__header[_ngcontent-%COMP%]   .login-logo[_ngcontent-%COMP%] {\n  width: 20rem;\n}\n.login__header[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 5rem;\n  max-width: 70rem;\n}\n.login__header[_ngcontent-%COMP%]   .login-quote[_ngcontent-%COMP%] {\n  color: #4773EC;\n  max-width: 70rem;\n}\n.login__header[_ngcontent-%COMP%]   .login-quote[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: end;\n  margin-top: 2rem;\n}\n.login__form[_ngcontent-%COMP%] {\n  width: 32%;\n  display: flex;\n  justify-content: center;\n  color: #8D93A4;\n}\n.login__form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  width: 35rem;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  background-color: #f2f3f7;\n  text-align: center;\n  padding: 3rem;\n  margin-top: 15rem;\n  box-shadow: 4px 4px 16px 0 rgba(0, 0, 0, 0.2);\n}\n.login__form__credentials[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.login__form__credentials[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1.2rem 1rem;\n  margin-top: 2rem;\n  border: 0.1rem solid #fff;\n}\n.login__form__credentials[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border: 0.1rem solid #668CF6;\n}\n.login__form__credentials[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #8D93A4;\n}\n.login__form__credentials[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #8D93A4;\n}\n.login__form__credentials[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder {\n  color: #8D93A4;\n}\n.login__form__credentials[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #8D93A4;\n}\n.login__form__credentials[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-webkit-autofill {\n  background-color: #fff !important;\n}\n.login__form__credentials[_ngcontent-%COMP%]   .failHighlight[_ngcontent-%COMP%] {\n  border: 0.1rem solid #F66679;\n  -webkit-animation: 0.3s shake ease-in-out 0.3s;\n          animation: 0.3s shake ease-in-out 0.3s;\n}\n@-webkit-keyframes shake {\n  0% {\n    transform: translateX(0);\n  }\n  20% {\n    transform: translateX(1rem);\n  }\n  40% {\n    transform: translateX(-1rem);\n  }\n  60% {\n    transform: translateX(1rem);\n  }\n  80% {\n    transform: translateX(-1rem);\n  }\n  100% {\n    transform: translateX(0);\n  }\n}\n@keyframes shake {\n  0% {\n    transform: translateX(0);\n  }\n  20% {\n    transform: translateX(1rem);\n  }\n  40% {\n    transform: translateX(-1rem);\n  }\n  60% {\n    transform: translateX(1rem);\n  }\n  80% {\n    transform: translateX(-1rem);\n  }\n  100% {\n    transform: translateX(0);\n  }\n}\n.login__form__settings[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.login__form__settings__checkbox[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 1rem 0;\n}\n.login__form__settings[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #668CF6;\n}\n.login__form__button__login[_ngcontent-%COMP%] {\n  margin: 2rem 0;\n  width: 100%;\n}\n.login__form__button__login[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 1rem;\n  padding: 1.2rem;\n  background: #668CF6;\n  color: #fff;\n  font-size: 2rem;\n  font-weight: 600;\n  box-shadow: 4px 4px 16px 0 rgba(0, 0, 0, 0.2);\n}\n.login__form__button__login[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #4773EC;\n}\n.login__form__button__login[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #F66679;\n  text-align: left;\n}\n.login__form__button__google[_ngcontent-%COMP%] {\n  margin: 2rem 0;\n  justify-content: center;\n  display: flex;\n}\n.login__background[_ngcontent-%COMP%] {\n  background-color: #668CF6;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 60%;\n  z-index: -1;\n  transform: skew(20deg, 0deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92aWV3cy9sb2dpbi9GOlxcc2Nob29sXFxGaW5hbC1leGFtXFxidWctdHJhY2tlci9zcmNcXHN0eWxlc1xcZ2VuZXJhbFxcY29sb3JzLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvdmlld3MvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvdmlld3MvbG9naW4vRjpcXHNjaG9vbFxcRmluYWwtZXhhbVxcYnVnLXRyYWNrZXIvc3JjXFxzdHlsZXNcXGdlbmVyYWxcXGZvcm1zLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvdmlld3MvbG9naW4vRjpcXHNjaG9vbFxcRmluYWwtZXhhbVxcYnVnLXRyYWNrZXIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHZpZXdzXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJBO0VBQ0UsVUFsQlk7QUNFZDtBRGtCRTtFQUNFLGFBbEJlO0FDRW5CO0FEbUJFO0VBQ0UsYUFyQmdCO0FDSXBCO0FEU0E7RUFDRSxVQWxCWTtBQ1lkO0FEUUU7RUFDRSxhQWxCZTtBQ1luQjtBRFNFO0VBQ0UsYUFyQmdCO0FDY3BCO0FDaEJBLFVBQUE7QUFDQTtFQUNFLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QURtQkY7QUNqQkEsaUNBQUE7QUFDQSxpQ0FBQTtBQUVBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxnQkZmWTtFRWdCWixtQkFBQTtFQUNBLDRCQUFBO0VBQ0Esb0JBQUE7QURtQkY7QUNqQkU7RUFDRSx5QkZUa0I7RUVVbEIseUJBQUE7RUFHQSxnQ0FBQTtBRG1CSjtBRXpDQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUY0Q0Y7QUUxQ0U7RUFDRSxVQUFBO0FGNENKO0FFMUNJO0VBQ0UsWUFBQTtBRjRDTjtBRXpDSTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FGMkNOO0FFeENJO0VBQ0UsY0hYcUI7RUdZckIsZ0JBQUE7QUYwQ047QUV4Q007RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUYwQ1I7QUVyQ0U7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0hsQ2dCO0FDeUVwQjtBRXJDSTtFQUNFLFlBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSx5QkgxQ2U7RUcyQ2Ysa0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSw2Q0FBQTtBRnVDTjtBRXBDSTtFQUNFLGdCQUFBO0FGc0NOO0FFcENNO0VBQ0UsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBRnNDUjtBRXBDUTtFQUNFLDRCQUFBO0FGc0NWO0FFbkNRO0VBQ0UsY0g1RFU7QUNpR3BCO0FFdENRO0VBQ0UsY0g1RFU7QUNpR3BCO0FFdENRO0VBQ0UsY0g1RFU7QUNpR3BCO0FFdENRO0VBQ0UsY0g1RFU7QUNpR3BCO0FFbENRO0VBQ0UsaUNBQUE7QUZvQ1Y7QUVoQ007RUFDRSw0QkFBQTtFQUNBLDhDQUFBO1VBQUEsc0NBQUE7QUZrQ1I7QUUvQk07RUFDRTtJQUFJLHdCQUFBO0VGa0NWO0VFakNNO0lBQUssMkJBQUE7RUZvQ1g7RUVuQ007SUFBSyw0QkFBQTtFRnNDWDtFRXJDTTtJQUFLLDJCQUFBO0VGd0NYO0VFdkNNO0lBQUssNEJBQUE7RUYwQ1g7RUV6Q007SUFBTSx3QkFBQTtFRjRDWjtBQUNGO0FFbkRNO0VBQ0U7SUFBSSx3QkFBQTtFRmtDVjtFRWpDTTtJQUFLLDJCQUFBO0VGb0NYO0VFbkNNO0lBQUssNEJBQUE7RUZzQ1g7RUVyQ007SUFBSywyQkFBQTtFRndDWDtFRXZDTTtJQUFLLDRCQUFBO0VGMENYO0VFekNNO0lBQU0sd0JBQUE7RUY0Q1o7QUFDRjtBRXpDSTtFQUNFLGdCQUFBO0FGMkNOO0FFekNNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBRjJDUjtBRXhDTTtFQUNFLGNIckZjO0FDK0h0QjtBRXJDTTtFQUNFLGNBQUE7RUFDQSxXQUFBO0FGdUNSO0FFckNRO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG1CSGxHWTtFR21HWixXSC9HSTtFR2dISixlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2Q0FBQTtBRnVDVjtBRXJDVTtFQUNFLHlCSHhHZTtBQytJM0I7QUVuQ1E7RUFDRSxjSDVHVztFRzZHWCxnQkFBQTtBRnFDVjtBRWpDTTtFQUNFLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUZtQ1I7QUU3QkE7RUFDRSx5Qkg3SG9CO0VHOEhwQixXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7QUZnQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3ZpZXdzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yLXdoaXRlOiAjZmZmO1xyXG4kY29sb3ItZGFya2VyLXdoaXRlOiAjZjJmM2Y3O1xyXG4kY29sb3ItdmVyeUxpZ2h0LWdyZXk6ICNEQURDRTE7XHJcbiRjb2xvci1saWdodC1ncmV5OiAjRDVENUQ1O1xyXG4kY29sb3ItbWVkaXVtLWdyZXk6ICM4RDkzQTQ7XHJcbiRjb2xvci1tZWRpdW1EYXJrLWdyZXk6ICM1NjVDNkU7XHJcbiRjb2xvci1kYXJrLWdyZXk6ICMzQTNDNDk7XHJcbiRjb2xvci12ZXJ5RGFyay1ncmV5OiAjMkYzMTNCO1xyXG4kY29sb3ItZGFya2VzdC1ncmV5OiAjMjIyODMxO1xyXG5cclxuJHRlcnRpYXJ5LWNvbG9yLWdyZWVuOiAjNzNEM0JFO1xyXG4kdGVydGlhcnktY29sb3ItZ3JlZW4tZGFyazogIzJFQzlBNztcclxuJHRlcnRpYXJ5LWNvbG9yLWJsdWU6ICM2NjhDRjY7XHJcbiR0ZXJ0aWFyeS1jb2xvci1ibHVlLWRhcms6ICM0NzczRUM7XHJcbiR0ZXJ0aWFyeS1jb2xvci1yZWQ6ICNGNjY2Nzk7XHJcbiR0ZXJ0aWFyeS1jb2xvci1yZWQtZGFyazogI0VDNEI2MDtcclxuXHJcbi5zdmctZmlsbCB7XHJcbiAgZmlsbDogJGNvbG9yLXdoaXRlO1xyXG5cclxuICAmX19sLUdyZXkge1xyXG4gICAgZmlsbDogJGNvbG9yLWxpZ2h0LWdyZXk7XHJcbiAgfVxyXG5cclxuICAmX19tLUdyZXkge1xyXG4gICAgZmlsbDogJGNvbG9yLW1lZGl1bS1ncmV5O1xyXG4gIH1cclxufVxyXG4iLCIuc3ZnLWZpbGwge1xuICBmaWxsOiAjZmZmO1xufVxuLnN2Zy1maWxsX19sLUdyZXkge1xuICBmaWxsOiAjRDVENUQ1O1xufVxuLnN2Zy1maWxsX19tLUdyZXkge1xuICBmaWxsOiAjOEQ5M0E0O1xufVxuXG4uc3ZnLWZpbGwge1xuICBmaWxsOiAjZmZmO1xufVxuLnN2Zy1maWxsX19sLUdyZXkge1xuICBmaWxsOiAjRDVENUQ1O1xufVxuLnN2Zy1maWxsX19tLUdyZXkge1xuICBmaWxsOiAjOEQ5M0E0O1xufVxuXG4vKiBSZXNldCAqL1xuaW5wdXQge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKiBDdXN0b20gY2hlY2tib3ggKioqKioqKiovXG4uaW5wdXQtY2hlY2tib3gge1xuICB3aWR0aDogMS41cmVtO1xuICBoZWlnaHQ6IDEuNXJlbTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNXJlbTtcbiAgYm9yZGVyOiAwLjFyZW0gc29saWQgIzhEOTNBNDtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG59XG4uaW5wdXQtY2hlY2tib3g6Y2hlY2tlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NjhDRjY7XG4gIGJvcmRlcjogMC40cmVtIHNvbGlkICNmZmY7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMC4xcmVtICM2NjhDRjY7XG4gIC1tb3otYm94LXNoYWRvdzogMCAwIDAgMC4xcmVtICM2NjhDRjY7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMXJlbSAjNjY4Q0Y2O1xufVxuXG4ubG9naW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBhZGRpbmc6IDhyZW0gMTByZW07XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5sb2dpbl9faGVhZGVyIHtcbiAgd2lkdGg6IDUwJTtcbn1cbi5sb2dpbl9faGVhZGVyIC5sb2dpbi1sb2dvIHtcbiAgd2lkdGg6IDIwcmVtO1xufVxuLmxvZ2luX19oZWFkZXIgLmlsbHVzdHJhdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiA1cmVtO1xuICBtYXgtd2lkdGg6IDcwcmVtO1xufVxuLmxvZ2luX19oZWFkZXIgLmxvZ2luLXF1b3RlIHtcbiAgY29sb3I6ICM0NzczRUM7XG4gIG1heC13aWR0aDogNzByZW07XG59XG4ubG9naW5fX2hlYWRlciAubG9naW4tcXVvdGUgcCB7XG4gIHRleHQtYWxpZ246IGVuZDtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn1cbi5sb2dpbl9fZm9ybSB7XG4gIHdpZHRoOiAzMiU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogIzhEOTNBNDtcbn1cbi5sb2dpbl9fZm9ybSBmb3JtIHtcbiAgd2lkdGg6IDM1cmVtO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmM2Y3O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDNyZW07XG4gIG1hcmdpbi10b3A6IDE1cmVtO1xuICBib3gtc2hhZG93OiA0cHggNHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG4ubG9naW5fX2Zvcm1fX2NyZWRlbnRpYWxzIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5sb2dpbl9fZm9ybV9fY3JlZGVudGlhbHMgaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMS4ycmVtIDFyZW07XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIGJvcmRlcjogMC4xcmVtIHNvbGlkICNmZmY7XG59XG4ubG9naW5fX2Zvcm1fX2NyZWRlbnRpYWxzIGlucHV0OmZvY3VzIHtcbiAgYm9yZGVyOiAwLjFyZW0gc29saWQgIzY2OENGNjtcbn1cbi5sb2dpbl9fZm9ybV9fY3JlZGVudGlhbHMgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM4RDkzQTQ7XG59XG4ubG9naW5fX2Zvcm1fX2NyZWRlbnRpYWxzIGlucHV0Oi13ZWJraXQtYXV0b2ZpbGwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG4ubG9naW5fX2Zvcm1fX2NyZWRlbnRpYWxzIC5mYWlsSGlnaGxpZ2h0IHtcbiAgYm9yZGVyOiAwLjFyZW0gc29saWQgI0Y2NjY3OTtcbiAgYW5pbWF0aW9uOiAwLjNzIHNoYWtlIGVhc2UtaW4tb3V0IDAuM3M7XG59XG5Aa2V5ZnJhbWVzIHNoYWtlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxuICAyMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxcmVtKTtcbiAgfVxuICA0MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMXJlbSk7XG4gIH1cbiAgNjAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMXJlbSk7XG4gIH1cbiAgODAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTFyZW0pO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxufVxuLmxvZ2luX19mb3JtX19zZXR0aW5ncyB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ubG9naW5fX2Zvcm1fX3NldHRpbmdzX19jaGVja2JveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDFyZW0gMDtcbn1cbi5sb2dpbl9fZm9ybV9fc2V0dGluZ3MgYSB7XG4gIGNvbG9yOiAjNjY4Q0Y2O1xufVxuLmxvZ2luX19mb3JtX19idXR0b25fX2xvZ2luIHtcbiAgbWFyZ2luOiAycmVtIDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmxvZ2luX19mb3JtX19idXR0b25fX2xvZ2luIGJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBwYWRkaW5nOiAxLjJyZW07XG4gIGJhY2tncm91bmQ6ICM2NjhDRjY7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJveC1zaGFkb3c6IDRweCA0cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cbi5sb2dpbl9fZm9ybV9fYnV0dG9uX19sb2dpbiBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc3M0VDO1xufVxuLmxvZ2luX19mb3JtX19idXR0b25fX2xvZ2luIHAge1xuICBjb2xvcjogI0Y2NjY3OTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5sb2dpbl9fZm9ybV9fYnV0dG9uX19nb29nbGUge1xuICBtYXJnaW46IDJyZW0gMDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5sb2dpbl9fYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NjhDRjY7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiA2MCU7XG4gIHotaW5kZXg6IC0xO1xuICB0cmFuc2Zvcm06IHNrZXcoMjBkZWcsIDBkZWcpO1xufSIsIkBpbXBvcnQgXCIuL2NvbG9yc1wiO1xyXG5cclxuLyogUmVzZXQgKi9cclxuaW5wdXQge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgYXBwZWFyYW5jZTogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vKioqKioqKiBDdXN0b20gY2hlY2tib3ggKioqKioqKiovXHJcblxyXG4uaW5wdXQtY2hlY2tib3gge1xyXG4gIHdpZHRoOiAxLjVyZW07XHJcbiAgaGVpZ2h0OiAxLjVyZW07XHJcbiAgYmFja2dyb3VuZDogJGNvbG9yLXdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVyZW07XHJcbiAgYm9yZGVyOiAuMXJlbSBzb2xpZCAkY29sb3ItbWVkaXVtLWdyZXk7XHJcbiAgbWFyZ2luLXJpZ2h0OiAuNXJlbTtcclxuXHJcbiAgJjpjaGVja2VkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR0ZXJ0aWFyeS1jb2xvci1ibHVlO1xyXG4gICAgYm9yZGVyOiAuNHJlbSBzb2xpZCAkY29sb3Itd2hpdGU7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIC4xcmVtICR0ZXJ0aWFyeS1jb2xvci1ibHVlO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDAgMCAuMXJlbSAkdGVydGlhcnktY29sb3ItYmx1ZTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIC4xcmVtICR0ZXJ0aWFyeS1jb2xvci1ibHVlO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9zdHlsZXMvZ2VuZXJhbC9jb2xvcnNcIjtcclxuQGltcG9ydCBcIi4uLy4uLy4uLy4uL3N0eWxlcy9nZW5lcmFsL2Zvcm1zXCI7XHJcblxyXG4ubG9naW4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgcGFkZGluZzogOHJlbSAxMHJlbTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICZfX2hlYWRlciB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG5cclxuICAgIC5sb2dpbi1sb2dvIHtcclxuICAgICAgd2lkdGg6IDIwcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5pbGx1c3RyYXRpb24ge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWFyZ2luLXRvcDogNXJlbTtcclxuICAgICAgbWF4LXdpZHRoOiA3MHJlbTtcclxuICAgIH1cclxuXHJcbiAgICAubG9naW4tcXVvdGUge1xyXG4gICAgICBjb2xvcjogJHRlcnRpYXJ5LWNvbG9yLWJsdWUtZGFyaztcclxuICAgICAgbWF4LXdpZHRoOiA3MHJlbTtcclxuXHJcbiAgICAgIHAge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19mb3JtIHtcclxuICAgIHdpZHRoOiAzMiU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBjb2xvcjogJGNvbG9yLW1lZGl1bS1ncmV5O1xyXG5cclxuICAgIGZvcm0ge1xyXG4gICAgICB3aWR0aDogMzVyZW07XHJcbiAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1kYXJrZXItd2hpdGU7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgcGFkZGluZzogM3JlbTtcclxuICAgICAgbWFyZ2luLXRvcDogMTVyZW07XHJcbiAgICAgIGJveC1zaGFkb3c6IDRweCA0cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIH1cclxuXHJcbiAgICAmX19jcmVkZW50aWFscyB7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcblxyXG4gICAgICBpbnB1dCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogMS4ycmVtIDFyZW07XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgICAgICBib3JkZXI6IC4xcmVtIHNvbGlkICRjb2xvci13aGl0ZTtcclxuXHJcbiAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICBib3JkZXI6IC4xcmVtIHNvbGlkICR0ZXJ0aWFyeS1jb2xvci1ibHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgY29sb3I6ICRjb2xvci1tZWRpdW0tZ3JleVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjotd2Via2l0LWF1dG9maWxsIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmZhaWxIaWdobGlnaHQge1xyXG4gICAgICAgIGJvcmRlcjogLjFyZW0gc29saWQgJHRlcnRpYXJ5LWNvbG9yLXJlZDtcclxuICAgICAgICBhbmltYXRpb246IC4zcyBzaGFrZSBlYXNlLWluLW91dCAuM3M7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBrZXlmcmFtZXMgc2hha2Uge1xyXG4gICAgICAgIDAlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCl9XHJcbiAgICAgICAgMjAlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMXJlbSl9XHJcbiAgICAgICAgNDAlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTFyZW0pfVxyXG4gICAgICAgIDYwJSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDFyZW0pfVxyXG4gICAgICAgIDgwJSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xcmVtKX1cclxuICAgICAgICAxMDAlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCl9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmX19zZXR0aW5ncyB7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcblxyXG4gICAgICAmX19jaGVja2JveCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW0gMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgYSB7XHJcbiAgICAgICAgY29sb3I6ICR0ZXJ0aWFyeS1jb2xvci1ibHVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJl9fYnV0dG9uIHtcclxuICAgICAgJl9fbG9naW4ge1xyXG4gICAgICAgIG1hcmdpbjogMnJlbSAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgICAgcGFkZGluZzogMS4ycmVtO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogJHRlcnRpYXJ5LWNvbG9yLWJsdWU7XHJcbiAgICAgICAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDRweCA0cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRlcnRpYXJ5LWNvbG9yLWJsdWUtZGFyaztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgY29sb3I6ICR0ZXJ0aWFyeS1jb2xvci1yZWQ7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJl9fZ29vZ2xlIHtcclxuICAgICAgICBtYXJnaW46IDJyZW0gMDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubG9naW5fX2JhY2tncm91bmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR0ZXJ0aWFyeS1jb2xvci1ibHVlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDYwJTtcclxuICB6LWluZGV4OiAtMTtcclxuICB0cmFuc2Zvcm06IHNrZXcoMjBkZWcsIDBkZWcpO1xyXG59XHJcblxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/views/projects/active-projects/active-projects.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/components/views/projects/active-projects/active-projects.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: ActiveProjectsComponent */

  /***/
  function srcAppComponentsViewsProjectsActiveProjectsActiveProjectsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActiveProjectsComponent", function () {
      return ActiveProjectsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ActiveProjectsComponent =
    /*#__PURE__*/
    function () {
      function ActiveProjectsComponent() {
        _classCallCheck(this, ActiveProjectsComponent);
      }

      _createClass(ActiveProjectsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ActiveProjectsComponent;
    }();

    ActiveProjectsComponent.ɵfac = function ActiveProjectsComponent_Factory(t) {
      return new (t || ActiveProjectsComponent)();
    };

    ActiveProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ActiveProjectsComponent,
      selectors: [["app-active-projects"]],
      decls: 2,
      vars: 0,
      template: function ActiveProjectsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "active-projects works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmlld3MvcHJvamVjdHMvYWN0aXZlLXByb2plY3RzL2FjdGl2ZS1wcm9qZWN0cy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActiveProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-active-projects',
          templateUrl: './active-projects.component.html',
          styleUrls: ['./active-projects.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/views/projects/add-new-project/add-new-project.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/components/views/projects/add-new-project/add-new-project.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: AddNewProjectComponent */

  /***/
  function srcAppComponentsViewsProjectsAddNewProjectAddNewProjectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddNewProjectComponent", function () {
      return AddNewProjectComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AddNewProjectComponent =
    /*#__PURE__*/
    function () {
      function AddNewProjectComponent() {
        _classCallCheck(this, AddNewProjectComponent);
      }

      _createClass(AddNewProjectComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AddNewProjectComponent;
    }();

    AddNewProjectComponent.ɵfac = function AddNewProjectComponent_Factory(t) {
      return new (t || AddNewProjectComponent)();
    };

    AddNewProjectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddNewProjectComponent,
      selectors: [["app-add-new-project"]],
      decls: 2,
      vars: 0,
      template: function AddNewProjectComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "add-new-project works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmlld3MvcHJvamVjdHMvYWRkLW5ldy1wcm9qZWN0L2FkZC1uZXctcHJvamVjdC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddNewProjectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-add-new-project',
          templateUrl: './add-new-project.component.html',
          styleUrls: ['./add-new-project.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/views/projects/completed-projects/completed-projects.component.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/components/views/projects/completed-projects/completed-projects.component.ts ***!
    \**********************************************************************************************/

  /*! exports provided: CompletedProjectsComponent */

  /***/
  function srcAppComponentsViewsProjectsCompletedProjectsCompletedProjectsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompletedProjectsComponent", function () {
      return CompletedProjectsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CompletedProjectsComponent =
    /*#__PURE__*/
    function () {
      function CompletedProjectsComponent() {
        _classCallCheck(this, CompletedProjectsComponent);
      }

      _createClass(CompletedProjectsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CompletedProjectsComponent;
    }();

    CompletedProjectsComponent.ɵfac = function CompletedProjectsComponent_Factory(t) {
      return new (t || CompletedProjectsComponent)();
    };

    CompletedProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CompletedProjectsComponent,
      selectors: [["app-completed-projects"]],
      decls: 2,
      vars: 0,
      template: function CompletedProjectsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "completed-projects works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmlld3MvcHJvamVjdHMvY29tcGxldGVkLXByb2plY3RzL2NvbXBsZXRlZC1wcm9qZWN0cy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompletedProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-completed-projects',
          templateUrl: './completed-projects.component.html',
          styleUrls: ['./completed-projects.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/views/projects/my-projects/my-projects.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/components/views/projects/my-projects/my-projects.component.ts ***!
    \********************************************************************************/

  /*! exports provided: MyProjectsComponent */

  /***/
  function srcAppComponentsViewsProjectsMyProjectsMyProjectsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyProjectsComponent", function () {
      return MyProjectsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../models/icons */
    "./src/app/models/icons.ts");
    /* harmony import */


    var src_app_models_mockDataModels_mockTableProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/models/mockDataModels/mockTableProject */
    "./src/app/models/mockDataModels/mockTableProject.ts");
    /* harmony import */


    var _ui_artefacts_side_filter_side_filter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../ui-artefacts/side-filter/side-filter.component */
    "./src/app/components/ui-artefacts/side-filter/side-filter.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ui_artefacts_status_toggle_status_toggle_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../ui-artefacts/status-toggle/status-toggle.component */
    "./src/app/components/ui-artefacts/status-toggle/status-toggle.component.ts");

    var _c0 = function _c0() {
      return {
        "svg-fill__m-Grey": true
      };
    };

    var _c1 = function _c1(a0) {
      return [a0];
    };

    function MyProjectsComponent_tr_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "use", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-status-toggle");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var project_r7 = ctx.$implicit;

        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, ctx_r6.icons.userProfileIcon), null, "xlink");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r7.managedBy);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r7.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r7.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r7.users.length);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r7.issues.length);
      }
    }

    var MyProjectsComponent =
    /*#__PURE__*/
    function () {
      function MyProjectsComponent() {
        _classCallCheck(this, MyProjectsComponent);

        this.icons = _models_icons__WEBPACK_IMPORTED_MODULE_1__["IconsURIs"];
        this.mocktableProject = src_app_models_mockDataModels_mockTableProject__WEBPACK_IMPORTED_MODULE_2__["mockTableProject"];
      }

      _createClass(MyProjectsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MyProjectsComponent;
    }();

    MyProjectsComponent.ɵfac = function MyProjectsComponent_Factory(t) {
      return new (t || MyProjectsComponent)();
    };

    MyProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MyProjectsComponent,
      selectors: [["app-my-projects"]],
      decls: 28,
      vars: 1,
      consts: [[1, "main-view"], [1, "main-view__header"], [1, "main-view__header__headline"], [1, "header3__m"], [1, "par3"], [1, "main-view__header__buttons"], [1, "add-new-button"], [4, "ngFor", "ngForOf"], [1, "table-profile"], [1, "table-profile__icon"], [3, "ngClass"], [1, "par3__m"]],
      template: function MyProjectsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-side-filter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "My projects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Recent projects in the past 7 days");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Create new project");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Managed by");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Users");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Issues");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, MyProjectsComponent_tr_27_Template, 21, 10, "tr", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.mocktableProject);
        }
      },
      directives: [_ui_artefacts_side_filter_side_filter_component__WEBPACK_IMPORTED_MODULE_3__["SideFilterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _ui_artefacts_status_toggle_status_toggle_component__WEBPACK_IMPORTED_MODULE_5__["StatusToggleComponent"]],
      styles: [".svg-fill[_ngcontent-%COMP%] {\n  fill: #fff;\n}\n.svg-fill__l-Grey[_ngcontent-%COMP%] {\n  fill: #D5D5D5;\n}\n.svg-fill__m-Grey[_ngcontent-%COMP%] {\n  fill: #8D93A4;\n}\ntable[_ngcontent-%COMP%] {\n  text-align: left;\n  border-collapse: collapse;\n  width: 100%;\n  max-width: 80rem;\n}\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 0.1rem solid #2F313B;\n}\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 1rem 0;\n  font-size: 1.5rem;\n  font-weight: 500;\n  min-width: 6rem;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n  color: #565C6E;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 0.1rem solid #DADCE1;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.5rem 0;\n  font-size: 1.3rem;\n  min-width: 6rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92aWV3cy9wcm9qZWN0cy9teS1wcm9qZWN0cy9GOlxcc2Nob29sXFxGaW5hbC1leGFtXFxidWctdHJhY2tlci9zcmNcXHN0eWxlc1xcZ2VuZXJhbFxcY29sb3JzLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvdmlld3MvcHJvamVjdHMvbXktcHJvamVjdHMvbXktcHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvdmlld3MvcHJvamVjdHMvbXktcHJvamVjdHMvRjpcXHNjaG9vbFxcRmluYWwtZXhhbVxcYnVnLXRyYWNrZXIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHZpZXdzXFxwcm9qZWN0c1xcbXktcHJvamVjdHNcXG15LXByb2plY3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCQTtFQUNFLFVBbEJZO0FDRWQ7QURrQkU7RUFDRSxhQWxCZTtBQ0VuQjtBRG1CRTtFQUNFLGFBckJnQjtBQ0lwQjtBQ05BO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBRFNGO0FDTkk7RUFDRSxtQ0FBQTtBRFFOO0FDTk07RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QURRUjtBQ0hFO0VBQ0UsY0ZqQm9CO0FDc0J4QjtBQ0hJO0VBQ0UsbUNBQUE7QURLTjtBQ0hNO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QURLUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmlld3MvcHJvamVjdHMvbXktcHJvamVjdHMvbXktcHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3Itd2hpdGU6ICNmZmY7XHJcbiRjb2xvci1kYXJrZXItd2hpdGU6ICNmMmYzZjc7XHJcbiRjb2xvci12ZXJ5TGlnaHQtZ3JleTogI0RBRENFMTtcclxuJGNvbG9yLWxpZ2h0LWdyZXk6ICNENUQ1RDU7XHJcbiRjb2xvci1tZWRpdW0tZ3JleTogIzhEOTNBNDtcclxuJGNvbG9yLW1lZGl1bURhcmstZ3JleTogIzU2NUM2RTtcclxuJGNvbG9yLWRhcmstZ3JleTogIzNBM0M0OTtcclxuJGNvbG9yLXZlcnlEYXJrLWdyZXk6ICMyRjMxM0I7XHJcbiRjb2xvci1kYXJrZXN0LWdyZXk6ICMyMjI4MzE7XHJcblxyXG4kdGVydGlhcnktY29sb3ItZ3JlZW46ICM3M0QzQkU7XHJcbiR0ZXJ0aWFyeS1jb2xvci1ncmVlbi1kYXJrOiAjMkVDOUE3O1xyXG4kdGVydGlhcnktY29sb3ItYmx1ZTogIzY2OENGNjtcclxuJHRlcnRpYXJ5LWNvbG9yLWJsdWUtZGFyazogIzQ3NzNFQztcclxuJHRlcnRpYXJ5LWNvbG9yLXJlZDogI0Y2NjY3OTtcclxuJHRlcnRpYXJ5LWNvbG9yLXJlZC1kYXJrOiAjRUM0QjYwO1xyXG5cclxuLnN2Zy1maWxsIHtcclxuICBmaWxsOiAkY29sb3Itd2hpdGU7XHJcblxyXG4gICZfX2wtR3JleSB7XHJcbiAgICBmaWxsOiAkY29sb3ItbGlnaHQtZ3JleTtcclxuICB9XHJcblxyXG4gICZfX20tR3JleSB7XHJcbiAgICBmaWxsOiAkY29sb3ItbWVkaXVtLWdyZXk7XHJcbiAgfVxyXG59XHJcbiIsIi5zdmctZmlsbCB7XG4gIGZpbGw6ICNmZmY7XG59XG4uc3ZnLWZpbGxfX2wtR3JleSB7XG4gIGZpbGw6ICNENUQ1RDU7XG59XG4uc3ZnLWZpbGxfX20tR3JleSB7XG4gIGZpbGw6ICM4RDkzQTQ7XG59XG5cbnRhYmxlIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogODByZW07XG59XG50YWJsZSB0aGVhZCB0ciB7XG4gIGJvcmRlci1ib3R0b206IDAuMXJlbSBzb2xpZCAjMkYzMTNCO1xufVxudGFibGUgdGhlYWQgdHIgdGgge1xuICBwYWRkaW5nOiAxcmVtIDA7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtaW4td2lkdGg6IDZyZW07XG59XG50YWJsZSB0Ym9keSB7XG4gIGNvbG9yOiAjNTY1QzZFO1xufVxudGFibGUgdGJvZHkgdHIge1xuICBib3JkZXItYm90dG9tOiAwLjFyZW0gc29saWQgI0RBRENFMTtcbn1cbnRhYmxlIHRib2R5IHRyIHRkIHtcbiAgcGFkZGluZzogMC41cmVtIDA7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBtaW4td2lkdGg6IDZyZW07XG59IiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uLy4uL3N0eWxlcy9nZW5lcmFsL2NvbG9yc1wiO1xyXG5cclxudGFibGUge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDgwcmVtO1xyXG5cclxuICB0aGVhZCB7XHJcbiAgICB0ciB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDAuMXJlbSBzb2xpZCAkY29sb3ItdmVyeURhcmstZ3JleTtcclxuXHJcbiAgICAgIHRoIHtcclxuICAgICAgICBwYWRkaW5nOiAxcmVtIDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBtaW4td2lkdGg6IDZyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRib2R5IHtcclxuICAgIGNvbG9yOiAkY29sb3ItbWVkaXVtRGFyay1ncmV5O1xyXG5cclxuICAgIHRyIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMC4xcmVtIHNvbGlkICRjb2xvci12ZXJ5TGlnaHQtZ3JleTtcclxuXHJcbiAgICAgIHRkIHtcclxuICAgICAgICBwYWRkaW5nOiAuNXJlbSAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgICAgIG1pbi13aWR0aDogNnJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-my-projects',
          templateUrl: './my-projects.component.html',
          styleUrls: ['./my-projects.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/views/projects/projects.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/views/projects/projects.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ProjectsComponent */

  /***/
  function srcAppComponentsViewsProjectsProjectsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function () {
      return ProjectsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ProjectsComponent =
    /*#__PURE__*/
    function () {
      function ProjectsComponent() {
        _classCallCheck(this, ProjectsComponent);
      }

      _createClass(ProjectsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }]);

      return ProjectsComponent;
    }();

    ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) {
      return new (t || ProjectsComponent)();
    };

    ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProjectsComponent,
      selectors: [["app-projects"]],
      decls: 1,
      vars: 0,
      template: function ProjectsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmlld3MvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-projects',
          templateUrl: './projects.component.html',
          styleUrls: ['./projects.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/views/settings/settings.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/views/settings/settings.component.ts ***!
    \*****************************************************************/

  /*! exports provided: SettingsComponent */

  /***/
  function srcAppComponentsViewsSettingsSettingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsComponent", function () {
      return SettingsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SettingsComponent =
    /*#__PURE__*/
    function () {
      function SettingsComponent() {
        _classCallCheck(this, SettingsComponent);
      }

      _createClass(SettingsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SettingsComponent;
    }();

    SettingsComponent.ɵfac = function SettingsComponent_Factory(t) {
      return new (t || SettingsComponent)();
    };

    SettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SettingsComponent,
      selectors: [["app-settings"]],
      decls: 2,
      vars: 0,
      template: function SettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "settings works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmlld3Mvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-settings',
          templateUrl: './settings.component.html',
          styleUrls: ['./settings.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/views/users/add-new-user/add-new-user.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/components/views/users/add-new-user/add-new-user.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: AddNewUserComponent */

  /***/
  function srcAppComponentsViewsUsersAddNewUserAddNewUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddNewUserComponent", function () {
      return AddNewUserComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AddNewUserComponent =
    /*#__PURE__*/
    function () {
      function AddNewUserComponent() {
        _classCallCheck(this, AddNewUserComponent);
      }

      _createClass(AddNewUserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AddNewUserComponent;
    }();

    AddNewUserComponent.ɵfac = function AddNewUserComponent_Factory(t) {
      return new (t || AddNewUserComponent)();
    };

    AddNewUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddNewUserComponent,
      selectors: [["app-add-new-user"]],
      decls: 2,
      vars: 0,
      template: function AddNewUserComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "add-new-user works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmlld3MvdXNlcnMvYWRkLW5ldy11c2VyL2FkZC1uZXctdXNlci5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddNewUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-add-new-user',
          templateUrl: './add-new-user.component.html',
          styleUrls: ['./add-new-user.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/views/users/all-users/all-users.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/views/users/all-users/all-users.component.ts ***!
    \*************************************************************************/

  /*! exports provided: AllUsersComponent */

  /***/
  function srcAppComponentsViewsUsersAllUsersAllUsersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AllUsersComponent", function () {
      return AllUsersComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AllUsersComponent =
    /*#__PURE__*/
    function () {
      function AllUsersComponent() {
        _classCallCheck(this, AllUsersComponent);
      }

      _createClass(AllUsersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AllUsersComponent;
    }();

    AllUsersComponent.ɵfac = function AllUsersComponent_Factory(t) {
      return new (t || AllUsersComponent)();
    };

    AllUsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AllUsersComponent,
      selectors: [["app-all-users"]],
      decls: 2,
      vars: 0,
      template: function AllUsersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "all-users works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmlld3MvdXNlcnMvYWxsLXVzZXJzL2FsbC11c2Vycy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllUsersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-all-users',
          templateUrl: './all-users.component.html',
          styleUrls: ['./all-users.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/views/users/my-profile/my-profile.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/views/users/my-profile/my-profile.component.ts ***!
    \***************************************************************************/

  /*! exports provided: MyProfileComponent */

  /***/
  function srcAppComponentsViewsUsersMyProfileMyProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyProfileComponent", function () {
      return MyProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MyProfileComponent =
    /*#__PURE__*/
    function () {
      function MyProfileComponent() {
        _classCallCheck(this, MyProfileComponent);
      }

      _createClass(MyProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MyProfileComponent;
    }();

    MyProfileComponent.ɵfac = function MyProfileComponent_Factory(t) {
      return new (t || MyProfileComponent)();
    };

    MyProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MyProfileComponent,
      selectors: [["app-my-profile"]],
      decls: 2,
      vars: 0,
      template: function MyProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "my-profile works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmlld3MvdXNlcnMvbXktcHJvZmlsZS9teS1wcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-my-profile',
          templateUrl: './my-profile.component.html',
          styleUrls: ['./my-profile.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/views/users/users.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/views/users/users.component.ts ***!
    \***********************************************************/

  /*! exports provided: UsersComponent */

  /***/
  function srcAppComponentsViewsUsersUsersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersComponent", function () {
      return UsersComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var UsersComponent =
    /*#__PURE__*/
    function () {
      function UsersComponent() {
        _classCallCheck(this, UsersComponent);
      }

      _createClass(UsersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UsersComponent;
    }();

    UsersComponent.ɵfac = function UsersComponent_Factory(t) {
      return new (t || UsersComponent)();
    };

    UsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UsersComponent,
      selectors: [["app-users"]],
      decls: 2,
      vars: 0,
      template: function UsersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "users works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmlld3MvdXNlcnMvdXNlcnMuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-users',
          templateUrl: './users.component.html',
          styleUrls: ['./users.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/models/icons.ts":
  /*!*********************************!*\
    !*** ./src/app/models/icons.ts ***!
    \*********************************/

  /*! exports provided: IconsURIs */

  /***/
  function srcAppModelsIconsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IconsURIs", function () {
      return IconsURIs;
    });

    var IconsURIs = {
      // navigation
      arrowIcon: './assets/iconsSVG/navigation.svg#arrowIcon',
      '/projects': './assets/iconsSVG/navigation.svg#projectsIcon',
      '/users': './assets/iconsSVG/navigation.svg#usersIcon',
      '/settings': './assets/iconsSVG/navigation.svg#settingsIcon',
      '/inbox': './assets/iconsSVG/navigation.svg#inboxIcon',
      //  top bar
      userProfileIcon: './assets/iconsSVG/top-bar.svg#userProfileIcon',
      signOutIcon: './assets/iconsSVG/top-bar.svg#signOutIcon'
    };
    /***/
  },

  /***/
  "./src/app/models/mockDataModels/mockNotification.ts":
  /*!***********************************************************!*\
    !*** ./src/app/models/mockDataModels/mockNotification.ts ***!
    \***********************************************************/

  /*! exports provided: mockNotification */

  /***/
  function srcAppModelsMockDataModelsMockNotificationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mockNotification", function () {
      return mockNotification;
    });

    var mockNotification = [{
      type: 'newProject',
      date: new Date(),
      sender: {
        name: 'Bart Simpson',
        phone: '+45 117233',
        email: 'bartsimpson@gmail.com',
        imageUrl: '',
        department: 'development'
      },
      description: 'Created new project',
      project: {
        name: 'TimerV3',
        id: 33
      }
    }, {
      type: 'assignedToProject',
      date: new Date(),
      sender: {
        name: 'Meggie Simpson',
        phone: '+45 117923',
        email: 'meggiesimpson@gmail.wd.dk',
        imageUrl: '',
        department: 'development'
      },
      description: 'You have been assigned as',
      position: 'Developer',
      project: {
        name: 'TimerV3',
        id: 33
      }
    }, {
      type: 'assignedToIssue',
      date: new Date(),
      sender: {
        name: 'Lisa Simpson',
        phone: '+45 607923',
        email: 'lisasimpson@gmail.wd.dk',
        imageUrl: '',
        department: 'project management'
      },
      description: 'You have been assigned as',
      position: 'Project manager',
      project: {
        name: 'TimerV3',
        id: 33
      },
      issue: {
        name: 'Video does not work',
        id: 17
      }
    }, {
      type: 'newIssue',
      date: new Date(),
      sender: {
        name: 'John Black',
        phone: '+45 607923',
        email: 'lisasimpson@gmail.wd.dk',
        imageUrl: '',
        department: 'project management'
      },
      description: 'Created new issue',
      position: 'Project manager',
      project: {
        name: 'TimerV3',
        id: 33
      },
      issue: {
        name: 'Video does not work',
        id: 17
      }
    }, {
      type: 'deletedIssue',
      date: new Date(),
      sender: {
        name: 'John Black',
        phone: '+45 607923',
        email: 'lisasimpson@gmail.wd.dk',
        imageUrl: '',
        department: 'project management'
      },
      description: 'Deleted an issue',
      position: 'Project manager',
      project: {
        name: 'TimerV3',
        id: 33
      },
      issue: {
        name: 'Tooltip does not show email',
        id: 17
      }
    }, {
      type: 'deletedProject',
      date: new Date(),
      sender: {
        name: 'Lisa Simpson',
        phone: '+45 607923',
        email: 'lisasimpson@gmail.wd.dk',
        imageUrl: '',
        department: 'project management'
      },
      description: 'Deleted project',
      position: 'Project manager',
      project: {
        name: 'TimerV3',
        id: 33
      }
    }, {
      type: 'newProject',
      date: new Date(),
      sender: {
        name: 'Bart Simpson',
        phone: '+45 117233',
        email: 'bartsimpson@gmail.com',
        imageUrl: '',
        department: 'development'
      },
      description: 'Created new project',
      project: {
        name: 'TimerV3',
        id: 33
      }
    }, {
      type: 'assignedToProject',
      date: new Date(),
      sender: {
        name: 'Meggie Simpson',
        phone: '+45 117923',
        email: 'meggiesimpson@gmail.wd.dk',
        imageUrl: '',
        department: 'development'
      },
      description: 'You have been assigned as',
      position: 'Developer',
      project: {
        name: 'TimerV3',
        id: 33
      }
    }, {
      type: 'deletedIssue',
      date: new Date(),
      sender: {
        name: 'John Black',
        phone: '+45 607923',
        email: 'lisasimpson@gmail.wd.dk',
        imageUrl: '',
        department: 'project management'
      },
      description: 'Deleted an issue',
      position: 'Project manager',
      project: {
        name: 'TimerV3',
        id: 33
      },
      issue: {
        name: 'Tooltip does not show email',
        id: 17
      }
    }, {
      type: 'assignedToIssue',
      date: new Date(),
      sender: {
        name: 'Lisa Simpson',
        phone: '+45 607923',
        email: 'lisasimpson@gmail.wd.dk',
        imageUrl: '',
        department: 'project management'
      },
      description: 'You have been assigned as',
      position: 'Project manager',
      project: {
        name: 'TimerV3',
        id: 33
      },
      issue: {
        name: 'Video does not work',
        id: 17
      }
    }, {
      type: 'newProject',
      date: new Date(),
      sender: {
        name: 'Bart Simpson',
        phone: '+45 117233',
        email: 'bartsimpson@gmail.com',
        imageUrl: '',
        department: 'development'
      },
      description: 'Created new project',
      project: {
        name: 'TimerV3',
        id: 33
      }
    }, {
      type: 'assignedToProject',
      date: new Date(),
      sender: {
        name: 'Meggie Simpson',
        phone: '+45 117923',
        email: 'meggiesimpson@gmail.wd.dk',
        imageUrl: '',
        department: 'development'
      },
      description: 'You have been assigned as',
      position: 'Developer',
      project: {
        name: 'TimerV3',
        id: 33
      }
    }, {
      type: 'assignedToIssue',
      date: new Date(),
      sender: {
        name: 'Lisa Simpson',
        phone: '+45 607923',
        email: 'lisasimpson@gmail.wd.dk',
        imageUrl: '',
        department: 'project management'
      },
      description: 'You have been assigned as',
      position: 'Project manager',
      project: {
        name: 'TimerV3',
        id: 33
      },
      issue: {
        name: 'Video does not work',
        id: 17
      }
    }, {
      type: 'assignedToProject',
      date: new Date(),
      sender: {
        name: 'Meggie Simpson',
        phone: '+45 117923',
        email: 'meggiesimpson@gmail.wd.dk',
        imageUrl: '',
        department: 'development'
      },
      description: 'You have been assigned as',
      position: 'Developer',
      project: {
        name: 'TimerV3',
        id: 33
      }
    }, {
      type: 'deletedIssue',
      date: new Date(),
      sender: {
        name: 'John Black',
        phone: '+45 607923',
        email: 'lisasimpson@gmail.wd.dk',
        imageUrl: '',
        department: 'project management'
      },
      description: 'Deleted an issue',
      position: 'Project manager',
      project: {
        name: 'TimerV3',
        id: 33
      },
      issue: {
        name: 'Tooltip does not show email',
        id: 17
      }
    }, {
      type: 'assignedToIssue',
      date: new Date(),
      sender: {
        name: 'Lisa Simpson',
        phone: '+45 607923',
        email: 'lisasimpson@gmail.wd.dk',
        imageUrl: '',
        department: 'project management'
      },
      description: 'You have been assigned as',
      position: 'Project manager',
      project: {
        name: 'TimerV3',
        id: 33
      },
      issue: {
        name: 'Video does not work',
        id: 17
      }
    }, {
      type: 'assignedToProject',
      date: new Date(),
      sender: {
        name: 'Meggie Simpson',
        phone: '+45 117923',
        email: 'meggiesimpson@gmail.wd.dk',
        imageUrl: '',
        department: 'development'
      },
      description: 'You have been assigned as',
      position: 'Developer',
      project: {
        name: 'TimerV3',
        id: 33
      }
    }, {
      type: 'deletedIssue',
      date: new Date(),
      sender: {
        name: 'John Black',
        phone: '+45 607923',
        email: 'lisasimpson@gmail.wd.dk',
        imageUrl: '',
        department: 'project management'
      },
      description: 'Deleted an issue',
      position: 'Project manager',
      project: {
        name: 'TimerV3',
        id: 33
      },
      issue: {
        name: 'Tooltip does not show email',
        id: 17
      }
    }];
    /***/
  },

  /***/
  "./src/app/models/mockDataModels/mockTableProject.ts":
  /*!***********************************************************!*\
    !*** ./src/app/models/mockDataModels/mockTableProject.ts ***!
    \***********************************************************/

  /*! exports provided: mockTableProject */

  /***/
  function srcAppModelsMockDataModelsMockTableProjectTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mockTableProject", function () {
      return mockTableProject;
    });

    var mockTableProject = [{
      id: 65,
      link: 'www.wdtrack.wiredelta.com',
      name: 'WD Track V3',
      created: new Date(),
      issues: [{
        id: 7,
        name: 'Youtube link does not work',
        created: new Date(),
        status: 'pending'
      }],
      managedBy: 'John Doe',
      users: [{
        name: 'Bart Simpson',
        phone: '+45 117233',
        email: 'bartsimpson@gmail.com',
        imageUrl: '',
        department: 'development'
      }, {
        name: 'Meggie Simpson',
        phone: '+45 117923',
        email: 'meggiesimpson@gmail.wd.dk',
        imageUrl: '',
        department: 'development'
      }, {
        name: 'Lisa Simpson',
        phone: '+45 607923',
        email: 'lisasimpson@gmail.wd.dk',
        imageUrl: '',
        department: 'project management'
      }],
      status: true
    }, {
      id: 186,
      link: 'growcarrots.dk',
      name: 'growcarrots.dk',
      created: new Date(),
      issues: [{
        id: 3,
        name: 'Error 404',
        created: new Date(),
        status: 'active'
      }, {
        id: 2,
        name: 'Preloader broken animation',
        created: new Date(),
        status: 'pending'
      }, {
        id: 1,
        name: 'Does not communicate with database',
        created: new Date(),
        status: 'closed'
      }],
      managedBy: 'Peter Griffin',
      users: [{
        name: 'Bart Simpson',
        phone: '+45 117233',
        email: 'bartsimpson@gmail.com',
        imageUrl: '',
        department: 'development'
      }, {
        name: 'Meggie Simpson',
        phone: '+45 117923',
        email: 'meggiesimpson@gmail.wd.dk',
        imageUrl: '',
        department: 'development'
      }, {
        name: 'Lisa Simpson',
        phone: '+45 607923',
        email: 'lisasimpson@gmail.wd.dk',
        imageUrl: '',
        department: 'project management'
      }],
      status: true
    }, {
      id: 186,
      link: 'www.pmiiqos/shop.dk',
      name: 'PMI Iqos - e-shop',
      created: new Date(),
      issues: [{
        id: 6,
        name: 'Error 404',
        created: new Date(),
        status: 'active'
      }, {
        id: 11,
        name: 'Preloader broken animation',
        created: new Date(),
        status: 'pending'
      }, {
        id: 9,
        name: 'Does not communicate with database',
        created: new Date(),
        status: 'closed'
      }, {
        id: 10,
        name: 'Header is too on top',
        created: new Date(),
        status: 'closed'
      }],
      managedBy: 'Peter Griffin',
      users: [{
        name: 'Bart Simpson',
        phone: '+45 117233',
        email: 'bartsimpson@gmail.com',
        imageUrl: '',
        department: 'development'
      }, {
        name: 'Meggie Simpson',
        phone: '+45 117923',
        email: 'meggiesimpson@gmail.wd.dk',
        imageUrl: '',
        department: 'development'
      }, {
        name: 'Lisa Simpson',
        phone: '+45 607923',
        email: 'lisasimpson@gmail.wd.dk',
        imageUrl: '',
        department: 'project management'
      }, {
        name: 'Bender Black',
        phone: '+45 607203',
        email: 'benderfuture@gmail.wd.dk',
        imageUrl: '',
        department: 'client'
      }],
      status: true
    }];
    /***/
  },

  /***/
  "./src/app/models/mockDataModels/navigationPaths.ts":
  /*!**********************************************************!*\
    !*** ./src/app/models/mockDataModels/navigationPaths.ts ***!
    \**********************************************************/

  /*! exports provided: navPaths */

  /***/
  function srcAppModelsMockDataModelsNavigationPathsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "navPaths", function () {
      return navPaths;
    });

    var navPaths = [{
      title: 'Inbox',
      path: '/inbox',
      entries: null
    }, {
      title: 'Separator',
      path: null,
      entries: null
    }, {
      title: 'Projects',
      path: '/projects',
      entries: [{
        path: '/my-projects',
        name: 'My projects'
      }, {
        path: '/active-projects',
        name: 'Active projects'
      }, {
        path: '/completed-projects',
        name: 'Completed projects'
      }, {
        path: '/add-new-project',
        name: 'Add new project'
      }]
    }, {
      title: 'Users',
      path: '/users',
      entries: [{
        path: '/all-users',
        name: 'All users'
      }, {
        path: '/my-profile',
        name: 'My profile'
      }, {
        path: '/add-new-user',
        name: 'Add new user'
      }]
    }, {
      title: 'Separator',
      path: null,
      entries: null
    }, {
      title: 'Settings',
      path: '/settings',
      entries: null
    }];
    /***/
  },

  /***/
  "./src/app/services/login.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/login.service.ts ***!
    \*******************************************/

  /*! exports provided: LoginService */

  /***/
  function srcAppServicesLoginServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginService", function () {
      return LoginService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var LoginService =
    /*#__PURE__*/
    function () {
      function LoginService() {
        _classCallCheck(this, LoginService);

        this.isLoggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }

      _createClass(LoginService, [{
        key: "doEmitLoginStatus",
        value: function doEmitLoginStatus(status) {
          this.isLoggedIn.next(status);
        }
      }, {
        key: "doListenToLogin",
        value: function doListenToLogin() {
          return this.isLoggedIn.asObservable();
        }
      }]);

      return LoginService;
    }();

    LoginService.ɵfac = function LoginService_Factory(t) {
      return new (t || LoginService)();
    };

    LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LoginService,
      factory: LoginService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/navigation.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/navigation.service.ts ***!
    \************************************************/

  /*! exports provided: NavigationService */

  /***/
  function srcAppServicesNavigationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationService", function () {
      return NavigationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var NavigationService =
    /*#__PURE__*/
    function () {
      function NavigationService(routerService) {
        _classCallCheck(this, NavigationService);

        this.routerService = routerService;
        this.navSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.doWatchURL();
      }

      _createClass(NavigationService, [{
        key: "doListenToNavigationPathChanges",
        value: function doListenToNavigationPathChanges() {
          return this.navSubject.asObservable();
        }
      }, {
        key: "doWatchURL",
        value: function doWatchURL() {
          var _this3 = this;

          this.routerService.events.subscribe(function (val) {
            // see also
            if (val.urlAfterRedirects) {
              _this3.navSubject.next(val.urlAfterRedirects);
            }
          });
        }
      }, {
        key: "doNavigate",
        value: function doNavigate(path) {
          this.routerService.navigate([path]).then()["catch"](function (e) {
            return console.error(e);
          });
        }
      }]);

      return NavigationService;
    }();

    NavigationService.ɵfac = function NavigationService_Factory(t) {
      return new (t || NavigationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    NavigationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NavigationService,
      factory: NavigationService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! F:\school\Final-exam\bug-tracker\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map