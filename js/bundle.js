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
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports) {


class Interval {
    constructor() {
    this.startTime = 0;
    this.nextTime = 0;
    this.timeInterval = 0;
    }
    
    startInterval() {
        this.startTime = new Date();
        console.log(this.startTime);
    }

    stopInterval() {
        this.nextTime = new Date();
        console.log(this.nextTime);
        let animationInterval = this.defineInterval();
        console.log(animationInterval);
        document.getElementById("jellyfish-animation").style.animationIterationCount = 37;
        document.getElementById("jellyfish-animation").style.animationDuration = `${animationInterval}ms`;
    }

    defineInterval() {
        this.timeInterval = this.nextTime - this.startTime;
        return this.timeInterval;
    }

    increaseSpeed() {
        let animationInterval = this.defineInterval();
        let jellySpeed = document.getElementById("jellyfish-animation").style.animationDuration;
        let newSpeed = jellySpeed + 1500;
        document.getElementById("jellyfish-animation").style.animationDuration = `${newSpeed}ms`;
    }

    decreaseSpeed() {
        let animationInterval = this.defineInterval();
        let jellySpeed = document.getElementById("jellyfish-animation").style.animationDuration;
        let newSpeed = jellySpeed - 1500;
        document.getElementById("jellyfish-animation").style.animationDuration = `${newSpeed}ms`;
    }
}

const interval = new Interval;



class Timer {
    constructor() {
        const startTime = 0;
        const running = 0;

        this.hours = 0;
        this.minutes =  0;
        this.seconds = 0;
        this.tick = this.tick.bind(this);
    }

    printTime() {
        let second = 0;
        let minute = 0;
        let hour = 0;

        second = (this.seconds < 10) ? "0"+this.seconds : this.seconds;
        minute = (this.minutes < 10) ? "0"+this.minutes : this.minutes;
        hour = (this.hours < 10) ? "0"+this.hours : this.hours;

        let spanSecond = document.getElementById('second');
        let spanMinute = document.getElementById('minute');
        let spanHour = document.getElementById('hour');

        spanSecond.innerHTML = second;
        spanMinute.innerHTML = minute;
        spanHour.innerHTML = hour;
        
        const timeString = [hour, minute, second].join(":");

        // don't forget to clear after testing
        console.log(timeString);
    }

    start() {
        this.running = setInterval(this.tick, 1000);
    }

    tick() {
        this.incrementSeconds();
        this.printTime();
    }

    incrementSeconds() {
        this.seconds += 1;
        if (this.seconds === 60) {
            this.seconds = 0;
            this.incrementMinutes();
        }
    }

    incrementMinutes() {
        this.minutes += 1;
        if (this.minutes === 60) {
            this.minutes = 0; 
            this.incrementHours();
        }
    }

    incrementHours() {
        this.hours = (this.hours + 1) % 24;
    }

    stop() {
        clearInterval(this.running);
    }
}

const timer = new Timer;


// var jellyOver = document.getElementById("jellyfish-animation");
// jellyOver.addEventListener("animationend", timer.start());




/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map