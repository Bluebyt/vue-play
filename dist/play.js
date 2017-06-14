module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 68);
/******/ })
/************************************************************************/
/******/ ({

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_C_Projects_Vue_vue_play_node_modules_babel_runtime_helpers_typeof__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_C_Projects_Vue_vue_play_node_modules_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_C_Projects_Vue_vue_play_node_modules_babel_runtime_helpers_typeof__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "play", function() { return play; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSpots", function() { return getSpots; });

var DEV = "production" === 'development';

var spots = {};
var initalConfig = {
  markdown: '',
  layout: '',
  example: '',
  style: ''
};
var play = function play(spot) {
  var isSpotComponent = (typeof spot === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_C_Projects_Vue_vue_play_node_modules_babel_runtime_helpers_typeof___default()(spot)) === 'object';

  var componentName = void 0;
  var _displayName = void 0;
  if (isSpotComponent) {
    componentName = spot.name;
    _displayName = spot.displayName || spot.name;
  } else {
    _displayName = spot;
  }

  return {
    add: function add(scenario, value) {
      var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : initalConfig;

      var component = value;
      if (typeof value === 'string') {
        component = { template: value };
      } else if (typeof value === 'function') {
        component = { render: value };
      }
      component.example = config.example || component.template;

      // register spot component inscenario component
      if (isSpotComponent) {
        if (componentName) {
          // remove pre initialized component
          // since vue-loader uses vue.extend automatically
          delete component._Ctor;
          component.components = component.components || {};
          if (component.components[componentName]) {
            DEV && console.error(componentName + ' is already registered in your scenario');
          } else {
            component.components[componentName] = spot;
          }
        } else {
          DEV && console.error('You haven\'t either defined a name property or called .name() to set spot component name');
        }
      }

      spots[_displayName] = spots[_displayName] || [];
      spots[_displayName].push({
        scenario: scenario,
        component: component,
        config: config
      });
      return this;
    },


    // update the spot title
    displayName: function displayName(name) {
      _displayName = name;
      return this;
    },


    // update the spot component name for registering in scenario component
    name: function name(_name) {
      if (isSpotComponent) {
        componentName = _name;
        if (!_displayName) {
          _displayName = _name;
        }
      } else {
        DEV && console.error('.name() is only available when you use a component as play() argument');
      }
      return this;
    }
  };
};

var getSpots = function getSpots() {
  return spots;
};



/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(55), __esModule: true };

/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(56), __esModule: true };

/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(31);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(30);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),

/***/ 55:
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ 56:
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(16);


/***/ })

/******/ });