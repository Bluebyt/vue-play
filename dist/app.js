module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 67);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(10), __esModule: true };

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(29);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_C_Projects_Vue_vue_play_node_modules_babel_runtime_core_js_object_keys__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_C_Projects_Vue_vue_play_node_modules_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_C_Projects_Vue_vue_play_node_modules_babel_runtime_core_js_object_keys__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return validShortcuts; });

var model = {
  actions: {
    cmdShiftK: function cmdShiftK(_ref) {
      var dispatch = _ref.dispatch;

      dispatch('toggleAllPanels');
    },
    cmdShiftL: function cmdShiftL(_ref2) {
      var dispatch = _ref2.dispatch;

      dispatch('toggleLeftPanel');
    },
    cmdShiftD: function cmdShiftD(_ref3) {
      var dispatch = _ref3.dispatch;

      dispatch('toggleBottomPanel');
    },
    cmdShiftLeft: function cmdShiftLeft(_ref4) {
      var dispatch = _ref4.dispatch;

      dispatch('playPrevious');
    },
    cmdShiftRight: function cmdShiftRight(_ref5) {
      var dispatch = _ref5.dispatch;

      dispatch('playNext');
    }
  }
};

/* harmony default export */ __webpack_exports__["b"] = (model);
var validShortcuts = __WEBPACK_IMPORTED_MODULE_0_C_Projects_Vue_vue_play_node_modules_babel_runtime_core_js_object_keys___default()(model.actions);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (spots, query) {
  var scenarios = spots[query.spot];
  if (scenarios) {
    var scenario = scenarios.filter(function (scenario) {
      return scenario.scenario === query.scenario;
    })[0];
    return scenario;
  }
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_store_modules_shortcuts__ = __webpack_require__(5);
/* unused harmony export isModifierPressed */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return parseKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return executeShortcut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return observeKeyEvents; });


// Key codes
var keyK = 75;
var keyL = 76;
var keyD = 68;
var keyLeft = 37;
var keyRight = 39;
var keyWindows = 91;

var isModifierPressed = function isModifierPressed(e) {
  return (e.ctrlKey || e.keyCode === keyWindows || e.metaKey) && e.shiftKey;
};

var parseKey = function parseKey(e) {
  if (!isModifierPressed(e)) {
    return false;
  }

  switch (e.keyCode) {
    case keyK:
      e.preventDefault();
      return 'cmdShiftK';
    case keyL:
      e.preventDefault();
      return 'cmdShiftL';
    case keyD:
      e.preventDefault();
      return 'cmdShiftD';
    case keyLeft:
      e.preventDefault();
      return 'cmdShiftLeft';
    case keyRight:
      e.preventDefault();
      return 'cmdShiftRight';
    default:
      return false;
  }
};

var executeShortcut = function executeShortcut(store, combination) {
  if (combination) {
    if (!__WEBPACK_IMPORTED_MODULE_0_store_modules_shortcuts__["a" /* validShortcuts */].includes(combination)) {
      console.warn('Combination ' + combination + ' is not a valid shortcut');
      return;
    }
    store.dispatch(combination);
  }
};

var observeKeyEvents = function observeKeyEvents(store) {
  window.onkeydown = function (e) {
    var combination = parseKey(e);
    executeShortcut(store, combination);
  };
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(9), __esModule: true };

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Home_vue__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Home_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_Home_vue__);




__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router___default.a);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router___default.a({
  mode: 'history',
  routes: [{
    path: '*',
    component: __WEBPACK_IMPORTED_MODULE_2__components_Home_vue___default.a
  }]
}));

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_highlight_js_lib_highlight__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_highlight_js_lib_highlight___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_highlight_js_lib_highlight__);

__WEBPACK_IMPORTED_MODULE_0_highlight_js_lib_highlight___default.a.registerLanguage('json', __webpack_require__(59));
__WEBPACK_IMPORTED_MODULE_0_highlight_js_lib_highlight___default.a.registerLanguage('javascript', __webpack_require__(58));
__WEBPACK_IMPORTED_MODULE_0_highlight_js_lib_highlight___default.a.registerLanguage('xml', __webpack_require__(60));

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_highlight_js_lib_highlight___default.a);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return preventSelectStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return preventSelectStop; });
var preventSelectStart = function preventSelectStart() {
  document.onselectstart = function () {
    return false;
  };
};

var preventSelectStop = function preventSelectStop() {
  document.onselectstart = function () {
    return true;
  };
};

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_C_Projects_Vue_vue_play_node_modules_babel_runtime_core_js_object_keys__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_C_Projects_Vue_vue_play_node_modules_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_C_Projects_Vue_vue_play_node_modules_babel_runtime_core_js_object_keys__);

/* harmony default export */ __webpack_exports__["a"] = (function (a, b) {
  return __WEBPACK_IMPORTED_MODULE_0_C_Projects_Vue_vue_play_node_modules_babel_runtime_core_js_object_keys___default()(a).every(function (key) {
    return a[key] === b[key];
  });
});

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex_router_sync__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex_router_sync___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vuex_router_sync__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_markdown__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_markdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vue_markdown__);






__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component('vue-markdown', __WEBPACK_IMPORTED_MODULE_4_vue_markdown___default.a);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$spots = _ref.spots,
      spots = _ref$spots === undefined ? [] : _ref$spots;

  __WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */].registerModule('app', {
    state: {
      spots: spots
    },
    mutations: {
      SET_SPOTS: function SET_SPOTS(state, payload) {
        state.spots = payload;
      }
    },
    actions: {
      setSpots: function setSpots(_ref2, payload) {
        var commit = _ref2.commit;

        commit('SET_SPOTS', payload);
      }
    }
  });

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex_router_sync__["sync"])(__WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__router__["a" /* default */]);

  return new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
    el: '#app',
    store: __WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */],
    router: __WEBPACK_IMPORTED_MODULE_3__router__["a" /* default */],
    render: function render(h) {
      return h('router-view');
    }
  });
});

/***/ }),
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_C_Projects_Vue_vue_play_node_modules_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_C_Projects_Vue_vue_play_node_modules_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_C_Projects_Vue_vue_play_node_modules_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vuex__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_utils_find_scenario__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_utils_key_events__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Tabs_vue__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Tabs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Tabs_vue__);

//
//
//
//
//
//
//
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
  watch: {
    current: 'updateIframe'
  },
  data: function data() {
    return {
      iframeLoaded: false
    };
  },
  mounted: function mounted() {
    this.updateIframe();
    this.listenChild();
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_utils_key_events__["b" /* observeKeyEvents */])(this.$store);
    this.resizeIframe();
  },
  beforeDestroy: function beforeDestroy() {
    console.log('remove');
    clearTimeout(this.resizeTimeout);
  },

  computed: __WEBPACK_IMPORTED_MODULE_0_C_Projects_Vue_vue_play_node_modules_babel_runtime_helpers_extends___default()({
    markdown: function markdown() {
      return this.getScenarioProperty('markdown');
    },
    example: function example() {
      return this.getScenarioProperty('example');
    },
    style: function style() {
      var style = this.getScenarioProperty('style');
      console.log(style);
      return style;
    }
  }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex__["mapGetters"])(['mainWidth']), {
    current: function current() {
      var spot = this.$route.query.spot;

      var _ref = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_utils_find_scenario__["a" /* default */])(this.$store.state.app.spots, this.$route.query) || {},
          scenario = _ref.scenario,
          component = _ref.component,
          example = _ref.example,
          markdown = _ref.markdown;

      if (!component) {
        return {};
      }

      return {
        spot: spot, scenario: scenario, component: component, example: example, markdown: markdown
      };
    },
    currentScenario: function currentScenario() {
      return {
        spot: this.current.spot,
        scenario: this.current.scenario
      };
    }
  }),
  methods: __WEBPACK_IMPORTED_MODULE_0_C_Projects_Vue_vue_play_node_modules_babel_runtime_helpers_extends___default()({
    getScenarioProperty: function getScenarioProperty(name) {
      var _ref2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_utils_find_scenario__["a" /* default */])(this.$store.state.app.spots, this.$route.query) || {},
          config = _ref2.config;

      if (config) {
        return config[name];
      }
    }
  }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex__["mapActions"])(['addLog', 'updateCurrentScenario', 'setSpots']), {
    postMessage: function postMessage() {
      this.$refs.iframe.contentWindow.postMessage({
        type: 'UPDATE_ROUTE',
        payload: this.currentScenario
      }, location.origin);
    },
    updateIframe: function updateIframe() {
      var _this = this;

      if (this.current.scenario) {
        document.title = this.current.scenario + ' - Vue Play';
      } else {
        document.title = 'Vue Play';
      }
      this.resizeIframe();
      this.updateCurrentScenario(this.currentScenario);
      if (this.iframeLoaded) {
        this.postMessage();
      } else {
        this.$refs.iframe.onload = function () {
          _this.postMessage();
          _this.iframeLoaded = true;
          _this.resizeIframe();
        };
      }
    },
    resizeIframe: function resizeIframe() {
      var _this2 = this;

      this.resizeTimeout = setTimeout(function () {
        if (_this2.$refs.iframe.contentWindow.document.body) {
          _this2.$refs.iframe.style.minHeight = 0;
          _this2.$refs.iframe.style.minHeight = Math.max(_this2.$refs.iframe.contentWindow.document.body.scrollHeight, 10) + 'px';
        }
      }, 10);
    },
    listenChild: function listenChild() {
      var _this3 = this;

      window.addEventListener('message', function (_ref3) {
        var data = _ref3.data;

        if (data.type === 'SET_SPOTS') {
          _this3.setSpots(JSON.parse(data.payload));
        }
        if (data.type === 'APPLY_SHORTCUT') {
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_utils_key_events__["c" /* executeShortcut */])(_this3.$store, JSON.parse(data.payload));
        }
        if (data.type === 'ADD_LOG') {
          var _current = _this3.current,
              spot = _current.spot,
              scenario = _current.scenario;

          _this3.addLog({
            data: data.payload,
            route: {
              spot: spot, scenario: scenario
            }
          });
          var consoleEl = document.querySelector('.console-body');
          if (consoleEl) {
            _this3.$nextTick(function () {
              consoleEl.scrollTop = consoleEl.scrollHeight;
            });
          }
        }
      });
    }
  }),
  components: {
    Tabs: __WEBPACK_IMPORTED_MODULE_4__Tabs_vue___default.a
  }
});

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_C_Projects_Vue_vue_play_node_modules_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_C_Projects_Vue_vue_play_node_modules_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_C_Projects_Vue_vue_play_node_modules_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_slim_modal__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_slim_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_slim_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vuex__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  computed: __WEBPACK_IMPORTED_MODULE_0_C_Projects_Vue_vue_play_node_modules_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_vuex__["mapGetters"])(['showHelp'])),
  components: {
    SlimModal: __WEBPACK_IMPORTED_MODULE_1_vue_slim_modal___default.a
  },
  methods: __WEBPACK_IMPORTED_MODULE_0_C_Projects_Vue_vue_play_node_modules_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_vuex__["mapActions"])(['toggleHelp']))
});

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Sidebar_vue__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Sidebar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Sidebar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppMain_vue__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppMain_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__AppMain_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__HelpModal_vue__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__HelpModal_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__HelpModal_vue__);
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'home',
  components: {
    Sidebar: __WEBPACK_IMPORTED_MODULE_0__Sidebar_vue___default.a,
    AppMain: __WEBPACK_IMPORTED_MODULE_1__AppMain_vue___default.a,
    HelpModal: __WEBPACK_IMPORTED_MODULE_2__HelpModal_vue___default.a
  }
});

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_C_Projects_Vue_vue_play_node_modules_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_C_Projects_Vue_vue_play_node_modules_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_C_Projects_Vue_vue_play_node_modules_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_utils_prevent_select__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vuex__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_utils_debounce__ = __webpack_require__(27);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





var BOUNDARY = {
  min: 200,
  max: 500
};

/* harmony default export */ __webpack_exports__["default"] = ({
  computed: __WEBPACK_IMPORTED_MODULE_0_C_Projects_Vue_vue_play_node_modules_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_vuex__["mapGetters"])(['leftPanelExpanded', 'visibleScenarios', 'sidebarWidth', 'currentScenario', 'filterKeyword'])),

  data: function data() {
    return {
      resizing: false,
      startX: null,
      originalWidth: null,
      keyword: ''
    };
  },


  methods: __WEBPACK_IMPORTED_MODULE_0_C_Projects_Vue_vue_play_node_modules_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_vuex__["mapActions"])(['updatePlayspot', 'updateSidebarWidth', 'toggleHelp', 'filterToys', 'activateSpot']), {
    filter: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_utils_debounce__["a" /* default */])(function (_ref) {
      var target = _ref.target;

      this.filterToys(target.value);
    }, 350),
    handleMouseDown: function handleMouseDown(_ref2) {
      var clientX = _ref2.clientX;

      this.resizing = true;
      this.startX = clientX;
      this.originalWidth = parseInt(this.$refs.sidebar.getBoundingClientRect().width, 10) || 0;
      document.addEventListener('mousemove', this.handleMouseMove);
      document.addEventListener('mouseup', this.handleMouseUp);
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_utils_prevent_select__["a" /* preventSelectStart */])();
    },
    handleMouseMove: function handleMouseMove(_ref3) {
      var clientX = _ref3.clientX;

      if (!this.resizing || clientX < BOUNDARY.min || clientX > BOUNDARY.max) {
        return;
      }
      this.updateSidebarWidth(this.originalWidth + clientX - this.startX);
    },
    handleMouseUp: function handleMouseUp() {
      this.resizing = false;
      document.removeEventListener('mousemove', this.handleMouseMove);
      document.removeEventListener('mouseup', this.handleMouseUp);
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_utils_prevent_select__["b" /* preventSelectStop */])();
    },
    isActiveSpot: function isActiveSpot(name, index) {
      if (this.filterKeyword) {
        return true;
      }
      if (!this.currentScenario.spot && index === 0) {
        return true;
      }
      return this.currentScenario.spot === name;
    }
  })
});

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_C_Projects_Vue_vue_play_node_modules_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_C_Projects_Vue_vue_play_node_modules_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_C_Projects_Vue_vue_play_node_modules_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vuex__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_utils_highlight__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_utils_prevent_select__ = __webpack_require__(13);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'console',
  props: {
    example: {
      type: String
    },
    markdown: {
      type: String
    },
    setHeight: {
      type: Function
    }
  },
  computed: __WEBPACK_IMPORTED_MODULE_0_C_Projects_Vue_vue_play_node_modules_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex__["mapGetters"])(['logs', 'bottomPanelExpanded']), {
    highlightedExample: function highlightedExample() {
      if (!this.example) {
        return;
      }
      return __WEBPACK_IMPORTED_MODULE_2_utils_highlight__["a" /* default */].highlightAuto(this.example).value;
    },
    active: function active() {
      var tab = this.$store.getters.activeTab;
      if (tab === 'console' || tab && this[tab]) {
        return tab;
      }
      return this.markdown ? 'markdown' : 'console';
    }
  }),
  data: function data() {
    return {
      tabHeight: 200,
      startY: null,
      originalHeight: null,
      resizing: false
    };
  },
  mounted: function mounted() {
    this.boundary = {
      min: 200,
      max: 800
    };
  },


  methods: __WEBPACK_IMPORTED_MODULE_0_C_Projects_Vue_vue_play_node_modules_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex__["mapActions"])(['setBottomPanelHeight', 'clearLogs', 'updateActiveTab']), {
    handleMouseDown: function handleMouseDown(_ref) {
      var clientY = _ref.clientY;

      this.resizing = true;
      this.startY = clientY;
      this.originalHeight = parseInt(this.$refs.body.getBoundingClientRect().height, 10) || 0;
      document.addEventListener('mousemove', this.handleMouseMove);
      document.addEventListener('mouseup', this.handleMouseUp);
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_utils_prevent_select__["a" /* preventSelectStart */])();
    },
    handleMouseMove: function handleMouseMove(_ref2) {
      var clientY = _ref2.clientY;

      if (!this.resizing) {
        return;
      }
      var height = this.originalHeight - clientY + this.startY;
      if (height < window.innerHeight * 0.2 || height > window.innerHeight * 0.7) {
        return;
      }
      this.setTabHeight(height);
      this.setHeight(height);
    },
    handleMouseUp: function handleMouseUp() {
      this.resizing = false;
      this.setTabHeight(this.tabHeight);
      document.removeEventListener('mousemove', this.handleMouseMove);
      document.removeEventListener('mouseup', this.handleMouseUp);
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_utils_prevent_select__["b" /* preventSelectStop */])();
    },
    clearCurrentLogs: function clearCurrentLogs() {
      var _$route$query = this.$route.query,
          scenario = _$route$query.scenario,
          spot = _$route$query.spot;

      this.clearLogs({ scenario: scenario, spot: spot });
    },
    setTabHeight: function setTabHeight(height) {
      this.tabHeight = height;
    }
  })
});

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vuex__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_layout__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_playspot__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_shortcuts__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_toys__ = __webpack_require__(26);








__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex___default.a);

var store = new __WEBPACK_IMPORTED_MODULE_1_vuex___default.a.Store({
  modules: {
    layout: __WEBPACK_IMPORTED_MODULE_2__modules_layout__["a" /* default */],
    playspot: __WEBPACK_IMPORTED_MODULE_3__modules_playspot__["a" /* default */],
    shortcuts: __WEBPACK_IMPORTED_MODULE_4__modules_shortcuts__["b" /* default */],
    toys: __WEBPACK_IMPORTED_MODULE_5__modules_toys__["a" /* default */]
  }
});

/* harmony default export */ __webpack_exports__["a"] = (store);

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TOGGLE_LEFT_PANEL */
/* unused harmony export TOGGLE_BOTTOM_PANEL */
/* unused harmony export TOGGLE_ALL_PANELS */
/* unused harmony export UPDATE_SIDEBAR_WIDTH */
/* unused harmony export UPDATE_ACTIVE_TAB */
/* unused harmony export TOGGLE_HELP */
var TOGGLE_LEFT_PANEL = 'TOGGLE_LEFT_PANEL';
var TOGGLE_BOTTOM_PANEL = 'TOGGLE_BOTTOM_PANEL';
var TOGGLE_ALL_PANELS = 'TOGGLE_ALL_PANELS';
var UPDATE_SIDEBAR_WIDTH = 'UPDATE_SIDEBAR_WIDTH';
var UPDATE_ACTIVE_TAB = 'UPDATE_ACTIVE_TAB';
var TOGGLE_HELP = 'TOGGLE_HELP';

/* harmony default export */ __webpack_exports__["a"] = ({
  state: {
    leftPanelExpanded: true,
    bottomPanelExpanded: true,
    sidebarWidth: 280,
    activeTab: null,
    showHelp: false
  },
  mutations: {
    TOGGLE_LEFT_PANEL: function TOGGLE_LEFT_PANEL(state) {
      state.leftPanelExpanded = !state.leftPanelExpanded;
    },
    TOGGLE_BOTTOM_PANEL: function TOGGLE_BOTTOM_PANEL(state) {
      state.bottomPanelExpanded = !state.bottomPanelExpanded;
    },
    UPDATE_SIDEBAR_WIDTH: function UPDATE_SIDEBAR_WIDTH(state, payload) {
      state.sidebarWidth = payload;
    },
    UPDATE_ACTIVE_TAB: function UPDATE_ACTIVE_TAB(state, payload) {
      state.activeTab = payload;
    },
    TOGGLE_HELP: function TOGGLE_HELP(state) {
      state.showHelp = !state.showHelp;
    }
  },
  actions: {
    toggleLeftPanel: function toggleLeftPanel(_ref) {
      var commit = _ref.commit;

      commit(TOGGLE_LEFT_PANEL);
    },
    toggleBottomPanel: function toggleBottomPanel(_ref2) {
      var commit = _ref2.commit;

      commit(TOGGLE_BOTTOM_PANEL);
    },
    toggleAllPanels: function toggleAllPanels(_ref3) {
      var commit = _ref3.commit,
          state = _ref3.state;

      if (state.leftPanelExpanded && state.bottomPanelExpanded || !state.leftPanelExpanded && !state.bottomPanelExpanded) {
        commit(TOGGLE_LEFT_PANEL);
        commit(TOGGLE_BOTTOM_PANEL);
      } else {
        if (state.leftPanelExpanded) {
          commit(TOGGLE_LEFT_PANEL);
        }
        if (state.bottomPanelExpanded) {
          commit(TOGGLE_BOTTOM_PANEL);
        }
      }
    },
    updateSidebarWidth: function updateSidebarWidth(_ref4, payload) {
      var commit = _ref4.commit;

      commit(UPDATE_SIDEBAR_WIDTH, payload);
    },
    updateActiveTab: function updateActiveTab(_ref5, payload) {
      var commit = _ref5.commit;

      commit(UPDATE_ACTIVE_TAB, payload);
    },
    toggleHelp: function toggleHelp(_ref6) {
      var commit = _ref6.commit;

      commit(TOGGLE_HELP);
    }
  },
  getters: {
    leftPanelExpanded: function leftPanelExpanded(state) {
      return state.leftPanelExpanded;
    },
    bottomPanelExpanded: function bottomPanelExpanded(state) {
      return state.bottomPanelExpanded;
    },
    bottomPanelHeight: function bottomPanelHeight(state) {
      return state.bottomPanelHeight;
    },
    sidebarWidth: function sidebarWidth(state) {
      return state.sidebarWidth + 'px';
    },
    mainWidth: function mainWidth(state, getters) {
      return 'calc(100% - ' + getters.sidebarWidth + ')';
    },
    activeTab: function activeTab(state) {
      return state.activeTab;
    },
    showHelp: function showHelp(state) {
      return state.showHelp;
    }
  }
});

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_array_find_index__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_array_find_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_array_find_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_utils_shallow_equal__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_router__ = __webpack_require__(11);
/* unused harmony export UPDATE_CURRENT_SCENARIO */




var UPDATE_CURRENT_SCENARIO = 'UPDATE_CURRENT_SCENARIO';

var updateCurrent = function updateCurrent(state, payload) {
  state.current = payload;
};

/* harmony default export */ __webpack_exports__["a"] = ({
  state: {
    current: null
  },
  mutations: {
    UPDATE_CURRENT_SCENARIO: updateCurrent
  },
  actions: {
    playNext: function playNext(_ref) {
      var commit = _ref.commit,
          getters = _ref.getters,
          state = _ref.state;

      var total = getters.playspotRoutes.length;
      var current = __WEBPACK_IMPORTED_MODULE_0_array_find_index___default()(getters.playspotRoutes, function (element) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_utils_shallow_equal__["a" /* default */])(state.current, element);
      });
      var nextIndex = (current + 1) % total;
      var next = getters.playspotRoutes[nextIndex];
      commit(UPDATE_CURRENT_SCENARIO, next);
      __WEBPACK_IMPORTED_MODULE_2_router__["a" /* default */].push({ query: next });
    },
    playPrevious: function playPrevious(_ref2) {
      var commit = _ref2.commit,
          getters = _ref2.getters,
          state = _ref2.state;

      var total = getters.playspotRoutes.length;
      var current = __WEBPACK_IMPORTED_MODULE_0_array_find_index___default()(getters.playspotRoutes, function (element) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_utils_shallow_equal__["a" /* default */])(state.current, element);
      });
      var prevIndex = (total + (current - 1)) % total;
      var prev = getters.playspotRoutes[prevIndex];
      commit(UPDATE_CURRENT_SCENARIO, prev);
      __WEBPACK_IMPORTED_MODULE_2_router__["a" /* default */].push({ query: prev });
    },
    updateCurrentScenario: function updateCurrentScenario(_ref3, path) {
      var commit = _ref3.commit;

      commit(UPDATE_CURRENT_SCENARIO, path);
    },
    activateSpot: function activateSpot(_ref4, spot) {
      var commit = _ref4.commit,
          getters = _ref4.getters;
      var scenario = getters.visibleScenarios[spot][0].scenario;

      __WEBPACK_IMPORTED_MODULE_2_router__["a" /* default */].push({ query: { spot: spot, scenario: scenario } });
    }
  },
  getters: {
    currentScenario: function currentScenario(state, getters, rootState) {
      var _rootState$route$quer = rootState.route.query,
          spot = _rootState$route$quer.spot,
          scenario = _rootState$route$quer.scenario;

      return state.current || { spot: spot, scenario: scenario };
    }
  }
});

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_C_Projects_Vue_vue_play_node_modules_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_C_Projects_Vue_vue_play_node_modules_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_C_Projects_Vue_vue_play_node_modules_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_C_Projects_Vue_vue_play_node_modules_babel_runtime_core_js_object_keys__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_C_Projects_Vue_vue_play_node_modules_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_C_Projects_Vue_vue_play_node_modules_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_C_Projects_Vue_vue_play_node_modules_babel_runtime_core_js_json_stringify__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_C_Projects_Vue_vue_play_node_modules_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_C_Projects_Vue_vue_play_node_modules_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_C_Projects_Vue_vue_play_node_modules_babel_runtime_helpers_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_C_Projects_Vue_vue_play_node_modules_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_C_Projects_Vue_vue_play_node_modules_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_uid__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_uid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_uid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_utils_highlight__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_utils_shallow_equal__ = __webpack_require__(14);








var matches = function matches(filter, text) {
  var f = filter.toLowerCase();
  var t = text.toLowerCase();
  return t.includes(f);
};

/* harmony default export */ __webpack_exports__["a"] = ({
  state: {
    logs: [],
    filter: ''
  },
  mutations: {
    ADD_LOG: function ADD_LOG(state, payload) {
      state.logs.push(payload);
    },
    CLEAR_CURRENT_LOGS: function CLEAR_CURRENT_LOGS(state, logs) {
      state.logs = logs;
    },
    UPDATE_FILTER: function UPDATE_FILTER(state, payload) {
      state.filter = payload;
    }
  },
  actions: {
    filterToys: function filterToys(_ref, payload) {
      var commit = _ref.commit;

      commit('UPDATE_FILTER', payload);
    },
    addLog: function addLog(_ref2, _ref3) {
      var commit = _ref2.commit;
      var data = _ref3.data,
          route = _ref3.route;

      commit('ADD_LOG', {
        data: data,
        route: route,
        id: __WEBPACK_IMPORTED_MODULE_4_uid___default()()
      });
    },
    clearLogs: function clearLogs(_ref4, payload) {
      var commit = _ref4.commit,
          state = _ref4.state;

      commit('CLEAR_CURRENT_LOGS', state.logs.filter(function (log) {
        return !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_utils_shallow_equal__["a" /* default */])(payload, log.route);
      }));
    }
  },
  getters: {
    logs: function logs(state, getters) {
      return state.logs.filter(function (log) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_utils_shallow_equal__["a" /* default */])(log.route, getters.currentScenario);
      }).map(function (log) {
        return __WEBPACK_IMPORTED_MODULE_3_C_Projects_Vue_vue_play_node_modules_babel_runtime_helpers_extends___default()({}, log, {
          data: __WEBPACK_IMPORTED_MODULE_5_utils_highlight__["a" /* default */].highlight('json', __WEBPACK_IMPORTED_MODULE_2_C_Projects_Vue_vue_play_node_modules_babel_runtime_core_js_json_stringify___default()(log.data, null, 2)).value
        });
      });
    },
    visibleScenarios: function visibleScenarios(_ref5, getters, _ref6) {
      var filter = _ref5.filter;
      var app = _ref6.app;

      if (!filter) {
        return app.spots;
      }
      var result = {};

      var _loop = function _loop(name) {
        var scenarios = app.spots[name];
        result[name] = scenarios.filter(function (scenario) {
          return matches(filter, name + ' ' + scenario.scenario);
        });
      };

      for (var name in app.spots) {
        _loop(name);
      }
      return result;
    },
    playspotRoutes: function playspotRoutes(state, _ref7) {
      var visibleScenarios = _ref7.visibleScenarios;

      return __WEBPACK_IMPORTED_MODULE_1_C_Projects_Vue_vue_play_node_modules_babel_runtime_core_js_object_keys___default()(visibleScenarios).map(function (name) {
        var scenarios = visibleScenarios[name];
        return scenarios.map(function (scenario) {
          return {
            scenario: scenario.scenario,
            spot: name
          };
        });
      }).reduce(function (current, next) {
        return [].concat(__WEBPACK_IMPORTED_MODULE_0_C_Projects_Vue_vue_play_node_modules_babel_runtime_helpers_toConsumableArray___default()(current), __WEBPACK_IMPORTED_MODULE_0_C_Projects_Vue_vue_play_node_modules_babel_runtime_helpers_toConsumableArray___default()(next));
      }, []);
    },
    filterKeyword: function filterKeyword(state) {
      return state.filter;
    }
  }
});

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = debounce;
function debounce(func, wait, immediate) {
  var timeout = void 0;

  return function () {
    var _this = this;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var later = function later() {
      timeout = null;
      if (!immediate) {
        func.apply(_this, args);
      }
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      func.apply(this, args);
    }
  };
}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(53), __esModule: true };

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(54), __esModule: true };

/***/ }),
/* 30 */,
/* 31 */,
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(28);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),
/* 33 */,
/* 34 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 35 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 36 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 37 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 38 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 39 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 40 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(34)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(18),
  /* template */
  __webpack_require__(46),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\Projects\\Vue\\vue-play\\src\\components\\AppMain.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] AppMain.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-296b4fc2", Component.options)
  } else {
    hotAPI.reload("data-v-296b4fc2", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(36)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(19),
  /* template */
  __webpack_require__(48),
  /* scopeId */
  "data-v-42e90998",
  /* cssModules */
  null
)
Component.options.__file = "C:\\Projects\\Vue\\vue-play\\src\\components\\HelpModal.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] HelpModal.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-42e90998", Component.options)
  } else {
    hotAPI.reload("data-v-42e90998", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(37)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(20),
  /* template */
  __webpack_require__(49),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\Projects\\Vue\\vue-play\\src\\components\\Home.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Home.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8d3da172", Component.options)
  } else {
    hotAPI.reload("data-v-8d3da172", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(35)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(21),
  /* template */
  __webpack_require__(47),
  /* scopeId */
  "data-v-3646c2b8",
  /* cssModules */
  null
)
Component.options.__file = "C:\\Projects\\Vue\\vue-play\\src\\components\\Sidebar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Sidebar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3646c2b8", Component.options)
  } else {
    hotAPI.reload("data-v-3646c2b8", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(38)
__webpack_require__(39)
__webpack_require__(40)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(22),
  /* template */
  __webpack_require__(50),
  /* scopeId */
  "data-v-bd4ff334",
  /* cssModules */
  null
)
Component.options.__file = "C:\\Projects\\Vue\\vue-play\\src\\components\\Tabs.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Tabs.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-bd4ff334", Component.options)
  } else {
    hotAPI.reload("data-v-bd4ff334", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main",
    style: ({
      width: _vm.mainWidth
    })
  }, [_c('div', {
    staticClass: "view"
  }, [_c('div', {
    staticClass: "iframe-wrapper"
  }, [_c('iframe', {
    ref: "iframe",
    staticClass: "iframe",
    style: (_vm.style),
    attrs: {
      "src": "preview.html",
      "frameborder": "0"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "description-content"
  }, [_c('tabs', {
    attrs: {
      "markdown": _vm.markdown,
      "example": _vm.example
    }
  })], 1)])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-296b4fc2", module.exports)
  }
}

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('figure', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.leftPanelExpanded),
      expression: "leftPanelExpanded"
    }],
    ref: "sidebar",
    staticClass: "sidebar",
    style: ({
      width: _vm.sidebarWidth
    })
  }, [(_vm.resizing) ? _c('div', {
    staticClass: "resize-indicator"
  }, [_vm._v("W: " + _vm._s(_vm.sidebarWidth))]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "sidebar-border",
    on: {
      "mousedown": _vm.handleMouseDown,
      "mouseup": _vm.handleMouseUp
    }
  }), _vm._v(" "), _c('h1', {
    on: {
      "click": _vm.toggleHelp
    }
  }, [_vm._v("Vue Play")]), _vm._v(" "), _c('div', {
    staticClass: "sidebar-search"
  }, [_c('input', {
    attrs: {
      "placeholder": "Type to filter components..."
    },
    on: {
      "input": _vm.filter
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "scenarios"
  }, _vm._l((_vm.visibleScenarios), function(scenarios, name, index) {
    return _c('ul', {
      staticClass: "nav-spots",
      class: {
        active: _vm.isActiveSpot(name, index)
      }
    }, [_c('li', {
      staticClass: "nav-spot"
    }, [(scenarios.length > 0) ? _c('div', {
      staticClass: "component-name",
      on: {
        "click": function($event) {
          _vm.activateSpot(name)
        }
      }
    }, [_vm._v("\n          " + _vm._s(name) + "\n        ")]) : _vm._e(), _vm._v(" "), _c('ul', {
      staticClass: "nav-scenarios"
    }, _vm._l((scenarios), function(scenario) {
      return _c('li', {
        staticClass: "nav-scenario"
      }, [_c('router-link', {
        attrs: {
          "exact": "",
          "to": {
            query: {
              spot: name,
              scenario: scenario.scenario
            }
          }
        }
      }, [_vm._v("\n              " + _vm._s(scenario.scenario) + "\n            ")])], 1)
    }))])])
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3646c2b8", module.exports)
  }
}

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('slim-modal', {
    staticClass: "help-modal",
    style: ({
      padding: 0
    }),
    attrs: {
      "overlay-style": {
        backgroundColor: 'rgba(0, 0, 0, 0.74902)'
      },
      "is-open": _vm.showHelp,
      "click-outside": _vm.toggleHelp
    }
  }, [_c('h2', {
    staticClass: "modal-header"
  }, [_vm._v("\n    Shortcuts\n  ")]), _vm._v(" "), _c('div', {
    staticClass: "modal-body"
  }, [_c('div', {
    staticClass: "shortcut"
  }, [_c('span', {
    staticClass: "kbd"
  }, [_vm._v("Command/Ctrl + Shift + L")]), _vm._v(" "), _c('span', {
    staticClass: "desc"
  }, [_vm._v("Toggle Left Panel")])]), _vm._v(" "), _c('div', {
    staticClass: "shortcut"
  }, [_c('span', {
    staticClass: "kbd"
  }, [_vm._v("Command/Ctrl + Shift + D")]), _vm._v(" "), _c('span', {
    staticClass: "desc"
  }, [_vm._v("Toggle Down Panel")])]), _vm._v(" "), _c('div', {
    staticClass: "shortcut"
  }, [_c('span', {
    staticClass: "kbd"
  }, [_vm._v("Command/Ctrl + Shift + K")]), _vm._v(" "), _c('span', {
    staticClass: "desc"
  }, [_vm._v("Toggle All Panels")])]), _vm._v(" "), _c('div', {
    staticClass: "shortcut"
  }, [_c('span', {
    staticClass: "kbd"
  }, [_vm._v("Command/Ctrl + Shift + ←")]), _vm._v(" "), _c('span', {
    staticClass: "desc"
  }, [_vm._v("Play Previous Example")])]), _vm._v(" "), _c('div', {
    staticClass: "shortcut"
  }, [_c('span', {
    staticClass: "kbd"
  }, [_vm._v("Command/Ctrl + Shift + →")]), _vm._v(" "), _c('span', {
    staticClass: "desc"
  }, [_vm._v("Play Next Example")])])]), _vm._v(" "), _c('div', {
    staticClass: "modal-footer"
  }, [_c('button', {
    staticClass: "play-button",
    on: {
      "click": _vm.toggleHelp
    }
  }, [_vm._v("Close")]), _vm._v(" "), _c('a', {
    staticClass: "play-repo",
    attrs: {
      "href": "https://github.com/vue-play/vue-play"
    }
  }, [_vm._v("\n      Check out vue-play on GitHub\n    ")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-42e90998", module.exports)
  }
}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "app"
  }, [_c('help-modal'), _vm._v(" "), _c('sidebar'), _vm._v(" "), _c('app-main')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-8d3da172", module.exports)
  }
}

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.bottomPanelExpanded),
      expression: "bottomPanelExpanded"
    }],
    ref: "panel",
    staticClass: "play-tabs"
  }, [(_vm.resizing) ? _c('div', {
    staticClass: "resize-indicator"
  }, [_vm._v("H: " + _vm._s(_vm.tabHeight) + "px")]) : _vm._e(), _vm._v(" "), _c('div', {
    ref: "header",
    staticClass: "tab-header",
    on: {
      "mousedown": _vm.handleMouseDown,
      "mouseup": _vm.handleMouseUp
    }
  }, [_c('div', {
    staticClass: "tabs-wrapper"
  }, [(_vm.markdown) ? _c('span', {
    staticClass: "title",
    class: {
      active: _vm.active === 'markdown'
    },
    on: {
      "mousedown": function($event) {
        $event.stopPropagation();
      },
      "click": function($event) {
        _vm.updateActiveTab('markdown')
      }
    }
  }, [_c('svg', {
    attrs: {
      "id": "i-book",
      "viewBox": "0 0 32 32",
      "width": "32",
      "height": "32",
      "fill": "none",
      "stroke": "currentcolor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "6.25%"
    }
  }, [_c('path', {
    attrs: {
      "d": "M16 7 C16 7 9 1 2 6 L2 28 C9 23 16 28 16 28 16 28 23 23 30 28 L30 6 C23 1 16 7 16 7 Z M16 7 L16 28"
    }
  })]), _vm._v("\n        Styleguide\n      ")]) : _vm._e(), _vm._v(" "), (_vm.example) ? _c('span', {
    staticClass: "title",
    class: {
      active: _vm.active === 'example'
    },
    on: {
      "mousedown": function($event) {
        $event.stopPropagation();
      },
      "click": function($event) {
        _vm.updateActiveTab('example')
      }
    }
  }, [_c('svg', {
    attrs: {
      "id": "i-code",
      "viewBox": "0 0 32 32",
      "width": "32",
      "height": "32",
      "fill": "none",
      "stroke": "currentcolor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "6.25%"
    }
  }, [_c('path', {
    attrs: {
      "d": "M10 9 L3 17 10 25 M22 9 L29 17 22 25 M18 7 L14 27"
    }
  })]), _vm._v("\n        Example\n      ")]) : _vm._e(), _vm._v(" "), _c('span', {
    staticClass: "title",
    class: {
      active: _vm.active === 'console'
    },
    on: {
      "mousedown": function($event) {
        $event.stopPropagation();
      },
      "click": function($event) {
        _vm.updateActiveTab('console')
      }
    }
  }, [_c('svg', {
    attrs: {
      "id": "i-bell",
      "viewBox": "0 0 32 32",
      "width": "32",
      "height": "32",
      "fill": "none",
      "stroke": "currentcolor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "6.25%"
    }
  }, [_c('path', {
    attrs: {
      "d": "M8 17 C8 12 9 6 16 6 23 6 24 12 24 17 24 22 27 25 27 25 L5 25 C5 25 8 22 8 17 Z M20 25 C20 25 20 29 16 29 12 29 12 25 12 25 M16 3 L16 6"
    }
  })]), _vm._v("\n        console"), (_vm.logs.length > 0) ? _c('sup', {
    staticClass: "logs-count"
  }, [_vm._v(_vm._s(_vm.logs.length))]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "tab-actions"
  }, [(_vm.logs.length > 0 && _vm.active === 'console') ? _c('span', {
    staticClass: "tab-action hint--top-left hint--rounded",
    attrs: {
      "aria-label": "clean logs"
    },
    on: {
      "mousedown": function($event) {
        $event.stopPropagation();
      },
      "click": _vm.clearCurrentLogs
    }
  }, [_c('svg', {
    attrs: {
      "id": "i-trash",
      "viewBox": "0 0 32 32",
      "width": "32",
      "height": "32",
      "fill": "none",
      "stroke": "currentcolor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "6.25%"
    }
  }, [_c('path', {
    attrs: {
      "d": "M28 6 L6 6 8 30 24 30 26 6 4 6 M16 12 L16 24 M21 12 L20 24 M11 12 L12 24 M12 6 L13 2 19 2 20 6"
    }
  })])]) : _vm._e()])])]), _vm._v(" "), _c('div', {
    staticClass: "tabs-content"
  }, [(_vm.active === 'markdown') ? _c('div', {
    ref: "body",
    staticClass: "tab-body",
    style: ({
      padding: '10px',
      minHeight: _vm.tabHeight + 'px'
    })
  }, [_c('vue-markdown', {
    staticClass: "markdown-styled",
    attrs: {
      "source": _vm.markdown
    }
  })], 1) : _vm._e(), _vm._v(" "), (_vm.active === 'example') ? _c('div', {
    ref: "body",
    staticClass: "tab-body",
    style: ({
      minHeight: _vm.tabHeight + 'px'
    })
  }, [_c('pre', [_c('code', {
    domProps: {
      "innerHTML": _vm._s(_vm.highlightedExample)
    }
  })])]) : _vm._e(), _vm._v(" "), (_vm.active === 'console') ? _c('div', {
    ref: "body",
    staticClass: "tab-body console-body",
    style: ({
      minHeight: _vm.tabHeight + 'px'
    })
  }, _vm._l((_vm.logs), function(log) {
    return _c('div', {
      staticClass: "console-item"
    }, [_c('pre', [_c('code', {
      domProps: {
        "innerHTML": _vm._s(log.data)
      }
    })])])
  })) : _vm._e()])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-bd4ff334", module.exports)
  }
}

/***/ }),
/* 51 */,
/* 52 */
/***/ (function(module, exports) {

module.exports = require("array-find-index");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),
/* 55 */,
/* 56 */,
/* 57 */
/***/ (function(module, exports) {

module.exports = require("highlight.js/lib/highlight");

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("highlight.js/lib/languages/javascript");

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("highlight.js/lib/languages/json");

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("highlight.js/lib/languages/xml");

/***/ }),
/* 61 */,
/* 62 */
/***/ (function(module, exports) {

module.exports = require("uid");

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("vue-markdown");

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("vue-slim-modal");

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("vuex-router-sync");

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(15);


/***/ })
/******/ ]);