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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _timer = __webpack_require__(2);
	
	var _timer2 = _interopRequireDefault(_timer);
	
	var _interval = __webpack_require__(3);
	
	var _interval2 = _interopRequireDefault(_interval);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	document.addEventListener('DOMContentLoaded', function () {
	    var timer = new _timer2.default();
	    var interval = new _interval2.default(timer);
	    var startCycle = document.querySelector('.start');
	    var stopCycle = document.querySelector('.stop');
	    startCycle.addEventListener('click', interval.startInterval);
	    stopCycle.addEventListener('click', interval.stopInterval);
	
	    // const startTimer = document.querySelector('.start-timer');
	    var stopTimer = document.querySelector('.stop-timer');
	    // startTimer.addEventListener('click', timer.start);
	    stopTimer.addEventListener('click', timer.stop);
	
	    // const resetButton = document.querySelector('.reset');
	    // resetButton.addEventListener('click', interval.resetInterval);
	    // resetButton.addEventListener('click', timer.resetTimer);
	
	    console.log(timer);
	    console.log(interval);
	});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Timer = function () {
	    function Timer() {
	        _classCallCheck(this, Timer);
	
	        var startTime = 0;
	        var running = 0;
	
	        this.hours = 0;
	        this.minutes = 0;
	        this.seconds = 0;
	        this.tick = this.tick.bind(this);
	        this.start = this.start.bind(this);
	        this.stop = this.stop.bind(this);
	        this.resetTimer = this.resetTimer.bind(this);
	    }
	
	    _createClass(Timer, [{
	        key: "printTime",
	        value: function printTime() {
	            var second = 0;
	            var minute = 0;
	            var hour = 0;
	
	            second = this.seconds < 10 ? "0" + this.seconds : this.seconds;
	            minute = this.minutes < 10 ? "0" + this.minutes : this.minutes;
	            hour = this.hours < 10 ? "0" + this.hours : this.hours;
	
	            var spanSecond = document.getElementById('second');
	            var spanMinute = document.getElementById('minute');
	            var spanHour = document.getElementById('hour');
	
	            spanSecond.innerHTML = second;
	            spanMinute.innerHTML = minute;
	            spanHour.innerHTML = hour;
	
	            var timeString = [hour, minute, second].join(":");
	
	            // don't forget to clear after testing
	            console.log(timeString);
	        }
	    }, {
	        key: "start",
	        value: function start() {
	            this.running = setInterval(this.tick, 1000);
	        }
	    }, {
	        key: "tick",
	        value: function tick() {
	            this.incrementSeconds();
	            this.printTime();
	        }
	    }, {
	        key: "incrementSeconds",
	        value: function incrementSeconds() {
	            this.seconds += 1;
	            if (this.seconds === 60) {
	                this.seconds = 0;
	                this.incrementMinutes();
	            }
	        }
	    }, {
	        key: "incrementMinutes",
	        value: function incrementMinutes() {
	            this.minutes += 1;
	            if (this.minutes === 60) {
	                this.minutes = 0;
	                this.incrementHours();
	            }
	        }
	    }, {
	        key: "incrementHours",
	        value: function incrementHours() {
	            this.hours = (this.hours + 1) % 24;
	        }
	    }, {
	        key: "stop",
	        value: function stop() {
	            clearInterval(this.running);
	        }
	    }, {
	        key: "resetTimer",
	        value: function resetTimer() {
	            this.second = 0;
	            this.minute = 0;
	            this.hour = 0;
	            this.printTime();
	        }
	    }]);
	
	    return Timer;
	}();
	
	exports.default = Timer;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Interval = function () {
	    function Interval(timer) {
	        _classCallCheck(this, Interval);
	
	        this.startTime = 0;
	        this.nextTime = 0;
	        this.timeInterval = 0;
	        this.timer = timer;
	
	        this.stopInterval = this.stopInterval.bind(this);
	        this.startInterval = this.startInterval.bind(this);
	        this.resetInterval = this.resetInterval.bind(this);
	    }
	
	    _createClass(Interval, [{
	        key: "startInterval",
	        value: function startInterval() {
	            this.startTime = new Date();
	        }
	    }, {
	        key: "stopInterval",
	        value: function stopInterval(animation) {
	            var _this = this;
	
	            this.nextTime = new Date();
	            var animationInterval = this.defineInterval.bind(this)();
	
	            var jellyfish1 = document.getElementById("jellyfish-animation1");
	            var jellyfish2 = document.getElementById("jellyfish-animation2");
	            var jcontainer1 = document.getElementById('jellyfish-container1');
	            var jcontainer2 = document.getElementById('jellyfish-container2');
	
	            jellyfish2.style.animationIterationCount = 10;
	            jellyfish2.style.animationTimingFunction = 'cubic-bezier';
	            jellyfish2.style.animationDuration = animationInterval + "ms";
	
	            jcontainer1.classList.add('hidden');
	            jcontainer2.classList.remove('hidden');
	
	            setTimeout(function () {
	                return _this.timer.start();
	            }, animationInterval * 10);
	        }
	    }, {
	        key: "resetInterval",
	        value: function resetInterval() {
	            this.startTime = 0;
	            this.nextTime = 0;
	            this.timeInterval = 0;
	        }
	    }, {
	        key: "defineInterval",
	        value: function defineInterval() {
	            this.timeInterval = this.nextTime - this.startTime;
	            return this.timeInterval;
	        }
	
	        // increaseSpeed() {
	        //     let animationInterval = this.defineInterval();
	        //     let jellySpeed = document.getElementById("jellyfish-animation").style.animationDuration;
	        //     let newSpeed = jellySpeed + 1500;
	        //     document.getElementById("jellyfish-animation").style.animationDuration = `${newSpeed}ms`;
	        // }
	
	        // decreaseSpeed() {
	        //     let animationInterval = this.defineInterval();
	        //     let jellySpeed = document.getElementById("jellyfish-animation").style.animationDuration;
	        //     let newSpeed = jellySpeed - 1500;
	        //     document.getElementById("jellyfish-animation").style.animationDuration = `${newSpeed}ms`;
	        // }
	
	    }]);
	
	    return Interval;
	}();
	
	exports.default = Interval;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map