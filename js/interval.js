class Interval {
    constructor(timer) {
        this.startTime = 0;
        this.nextTime = 0;
        this.timeInterval = 0;
        this.timer = timer;

        this.stopInterval = this.stopInterval.bind(this);
        this.startInterval = this.startInterval.bind(this);
    }

    startInterval() {
        this.startTime = new Date();
    }

    stopInterval(animation) {
        this.nextTime = new Date();
        let animationInterval = this.defineInterval.bind(this)();
        // console.log(document.getElementById("jellyfish-animation"))
        let count = 0;
        document.getElementById("jellyfish-animation").style.animationIterationCount = 10;
        
        document.getElementById("jellyfish-animation").style.animationTimingFunction = 'cubic-bezier';
        document.getElementById("jellyfish-animation").style.animationDuration = `${animationInterval}ms`;
        // var jellyOver = document.getElementById("jellyfish-animation");
        setTimeout( () => this.timer.start(), animationInterval * 9);
    }

    defineInterval() {
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
}

export default Interval;