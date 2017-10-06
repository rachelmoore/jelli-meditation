class Timer {
    constructor() {
        const startTime = 0;
        const running = 0;

        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        this.tick = this.tick.bind(this);
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
    }

    printTime() {
        let second = 0;
        let minute = 0;
        let hour = 0;

        second = (this.seconds < 10) ? "0" + this.seconds : this.seconds;
        minute = (this.minutes < 10) ? "0" + this.minutes : this.minutes;
        hour = (this.hours < 10) ? "0" + this.hours : this.hours;

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

    resetTimer() {
        this.second = 0;
        this.minute = 0;
        this.hour = 0;
        this.printTime();
    }
}

export default Timer;
