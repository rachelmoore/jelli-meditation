
# jellī

## Background & Overview 

Wim Hof's method of breathwork and meditation has become quite popular over the last several years. Wim has his own app where you watch a a video of him instructing the user through one cycle of breathing. The user can then start a timer and save the data to a calendar. 

The app is fantastic (no, really...get it!) and I use it almost every morning. But I wondered -- wouldn't it be nice to not listen to the same video day after day and to have a more visual, more *meditative* experience? One where you could really focus on the breath alone and to set your own natural breathing pace?  

Enter jellī!

![](http://res.cloudinary.com/df9oqycdp/image/upload/v1507309045/jellilogo-min_gwcdky.gif)

## Features

In jellī, users are able to: 

* Set their own unique and natural breathing pace by pressing a START BREATH CYCLE button upon starting their first inhalation and a STOP BREATH CYCLE button once they have exhaled. 
* Watch a CSS animation pulse at the pace of the breath cycle to guide breathing inward and outward. 
* Know when the cycle is finished when the animation stops. 
* Have a timer start automatically when the animation stops and be able to press a STOP button once they inhale in order to track their breath hold time. 
* Do multiple cycles by clicking the RESET button to clear the timer then trigger a new cycle with the START BREATH CYCLE button.

![](http://res.cloudinary.com/df9oqycdp/image/upload/v1507309081/jelliscreenshot_itgyjn.png)

## Architecture and Technologies 

* Vanilla JavaScript for the timers and event handlers. 
* CSS with keyframes for animation of the logo and timed pulsing circle. 
* HTML

## A tricky problem & hack-y solution

The animation is triggered upon the user hitting the STOP BREATH CYCLE button. 

```
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
    
        jellyfish2.style.animationIterationCount = 10;
        jellyfish2.style.animationTimingFunction = 'cubic-bezier';
        jellyfish2.style.animationDuration = `${animationInterval}ms`;

        jcontainer1.classList.add('hidden');
        jcontainer2.classList.remove('hidden');
        
        setTimeout( () => this.timer.start(), animationInterval * 10);
    }

    defineInterval() {
        this.timeInterval = this.nextTime - this.startTime;
        return this.timeInterval;
    }
}
```



