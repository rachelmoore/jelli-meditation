import Timer from './timer';
import Interval from './interval';


document.addEventListener('DOMContentLoaded', () => {
    const timer = new Timer();
    const interval = new Interval(timer);
    const startCycle = document.querySelector('.start');
    const stopCycle = document.querySelector('.stop');

    
    startCycle.addEventListener('click', interval.startInterval);
    stopCycle.addEventListener('click', interval.stopInterval);

    // const startTimer = document.querySelector('.start-timer');
    const stopTimer = document.querySelector('.stop-timer');
    // startTimer.addEventListener('click', timer.start);
    stopTimer.addEventListener('click', timer.stop);

    // const resetButton = document.querySelector('.reset');
    // resetButton.addEventListener('click', interval.resetInterval);
    // resetButton.addEventListener('click', timer.resetTimer);

    console.log(timer);
    console.log(interval);
    

});

