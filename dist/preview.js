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
/******/ 	return __webpack_require__(__webpack_require__.s = 69);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(10), __esModule: true };

/***/ }),

/***/ 10:
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_C_Projects_Vue_vue_play_node_modules_babel_runtime_core_js_json_stringify__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_C_Projects_Vue_vue_play_node_modules_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_C_Projects_Vue_vue_play_node_modules_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_query_string__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_query_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_query_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_find_scenario__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_key_events__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__play__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__play___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__play__);







/* harmony default export */ __webpack_exports__["default"] = (function () {
  var spots = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__play__["getSpots"])();
  var query = __WEBPACK_IMPORTED_MODULE_2_query_string___default.a.parse(location.search);

  __WEBPACK_IMPORTED_MODULE_1_vue___default.a.prototype.$log = function (data) {
    parent.postMessage({
      type: 'ADD_LOG',
      payload: data
    }, location.origin);
  };
  return new __WEBPACK_IMPORTED_MODULE_1_vue___default.a({
    el: '#app',
    data: function data() {
      var scenario = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils_find_scenario__["a" /* default */])(spots, query);
      var component = scenario && scenario.component;
      return {
        current: component
      };
    },
    created: function created() {
      var _this = this;

      window.addEventListener('message', function (_ref) {
        var data = _ref.data;

        if (data.type === 'UPDATE_ROUTE') {
          var scenario = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils_find_scenario__["a" /* default */])(spots, data.payload);
          if (scenario) {
            _this.current = scenario.component;
          }
        }
      });
      window.onkeydown = function (e) {
        parent.postMessage({
          type: 'APPLY_SHORTCUT',
          payload: __WEBPACK_IMPORTED_MODULE_0_C_Projects_Vue_vue_play_node_modules_babel_runtime_core_js_json_stringify___default()(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils_key_events__["a" /* parseKey */])(e))
        }, location.origin);
      };
      parent.postMessage({
        type: 'SET_SPOTS',
        payload: __WEBPACK_IMPORTED_MODULE_0_C_Projects_Vue_vue_play_node_modules_babel_runtime_core_js_json_stringify___default()(purify(spots))
      }, location.origin);
    },
    render: function render(h) {
      return h('div', { attrs: { id: 'app' } }, [h(this.current)]);
    }
  });
});

function purify(spots) {
  var result = {};
  for (var name in spots) {
    result[name] = spots[name].map(function (spot) {
      return {
        scenario: spot.scenario,
        component: {
          template: spot.component.template
        },
        config: spot.config
      };
    });
  }
  return result;
}

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ 5:
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

/***/ 51:
/***/ (function(module, exports) {

module.exports = require("./play");

/***/ }),

/***/ 6:
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

/***/ 61:
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(17);


/***/ }),

/***/ 7:
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

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(9), __esModule: true };

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ })

/******/ });