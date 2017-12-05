class Interval {
    constructor(timer) {
        this.startTime = 0;
        this.nextTime = 0;
        this.timeInterval = 0;
        this.timer = timer;

        this.stopInterval = this.stopInterval.bind(this);
        this.startInterval = this.startInterval.bind(this);
        this.resetInterval = this.resetInterval.bind(this);
    }

    startInterval() {
        this.startTime = new Date();
    }

    stopInterval(animation) {
        this.nextTime = new Date();
        let animationInterval = this.defineInterval.bind(this)();

        const jellyfish1 = document.getElementById("jellyfish-animation1");
        const jellyfish2 = document.getElementById("jellyfish-animation2");
        const jcontainer1 = document.getElementById('jellyfish-container1');
        const jcontainer2 = document.getElementById('jellyfish-container2');
    
        jellyfish2.style.animationIterationCount = 30;
        jellyfish2.style.animationTimingFunction = 'cubic-bezier';
        jellyfish2.style.animationDuration = `${animationInterval}ms`;

        jcontainer1.classList.add('hidden');
        jcontainer2.classList.remove('hidden');
        
        setTimeout( () => this.timer.start(), animationInterval * 30);
    }

    resetInterval() {
        this.startTime = 0;
        this.nextTime = 0;
        this.timeInterval = 0;
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