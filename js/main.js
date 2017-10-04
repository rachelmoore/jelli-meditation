
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
        this.defineInterval();
    }

    defineInterval() {
        this.timeInterval = this.nextTime - this.startTime;
        console.log(this.timeInterval);
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
        // Format the time in HH:MM:SS
        const timeString = [this.hours, this.minutes, this.seconds].join(":");

        // Use console.log to print it.
        console.log(timeString);
    }

    start() {
        setInterval(this.tick, 1000);
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
        clearInterval(this.start);
    }
}

const timer = new Timer;
