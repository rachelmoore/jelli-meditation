# Wim Hof Meditation Visualizer & Timer

## Background & Overview 

Wim Hof's method of breathwork and meditation has become quite popular over the last several years. Wim has his own app where you watch a a video of him instructing the user through one cycle of breathing. The user can then start a timer and save the data to a calendar. 

The app is fantastic (no, really...get it!) and I use it almost every morning. But I wondered -- wouldn't it be nice to not listen to the same video day after day and to have a more visual, more *meditative* experience? One where you could really focus on the breath alone and to set your own natural breathing pace?  

Enter the Wim Hof Meditation Visualizer & Timer! (<------snappier name coming shortly)

## Functionality and MVP

In the WHMV&T, users will be able to: 

* Set their own unique breathing pace by pressing a "Start" button upon starting their first inhalation and a "Stop" button once they have exhaled. 
* Adjust this breathing pace at any point in the cycle by using UP and DOWN buttons. 
* Watch a CSS animation pulse at the pace of the breath cycle to guide the user in breathing inward and outward. 
* Know when the cycle is finished (so that they then exhale and hold the breath) when the animation stops. 
* Have a timer start automatically when the animation stops and be able to press a STOP button once they inhale in order to track their breath hold time. 
* Be able to start the whole cycle over again by clicking the "Start" and "Stop" buttons to re-trigger the animation.

## Wireframe

![](https://raw.githubusercontent.com/rachelmoore/JavaScriptMeditation/master/images/JavaScriptMeditation.png)

## Architecture and Technologies 

* Vanilla JavaScript for the timer and event handlers. Possibly jQuery.
* CSS with keyframes for animation. Will start with a simple pulsing circle but hope to make a jellyfish.
* HTML for the instructions and DOM.

## Implementation Timeline 

**Day 1:** Organize filestructure. Create buttons and timer, get them responding to user interaction. Create layout of page with a grid and the instructions on the lefthand side of the page.

**Day 2:** Create CSS animated pulser (very simple mandala or circle shape) with keyframes. Be able to control the speed of the pulser by clicking up and down buttons. Figure out how to auto-stop the animation with a timer. 

**Day 3:** Final work on getting the start and stop buttons working correctly, triggering the pulser, auto-stopping the pulser, and triggering the automatic timer. Start on CSS jellyfish. 

**Day 4:** CSS jellyfish animation! Connect to timing cycle. 
