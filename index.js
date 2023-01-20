class Clock {
    constructor() {
        this.clear();
        this.hasOutputs = false;
        this.tickEvents = [];
    }

    setOutputElements(hours, minutes, seconds) {
        this.hasOutputs = true;
        this.OutHours = hours;
        this.OutMinutes = minutes;
        this.OutSeconds = seconds;
    }

    addTickEvent(event) {
        this.tickEvents.push(event);
    }

    updateClock() {
        if (this.hasOutputs) {
            this.OutHours.innerHTML = this.hours;
            this.OutMinutes.innerHTML = this.minutes;
            this.OutSeconds.innerHTML = this.seconds;
        }
        
    }

    setStartButton(startButton) {
        startButton.addEventListener('click', () => {
            console.log("start button clicked");
            this.startClock();
        })
    }

    setStopButton(stopButton) {
        stopButton.addEventListener('click', () => {
            console.log("stop button clicked");
            this.stopClock();
        })
    }

    setClearButton(cleatButton) {
        cleatButton.addEventListener('click', () => {
            console.log("cleat button clicked");
            this.clear();
        });
    }

    clear() {
        this.milliSeconds = 0;
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;
        this.updateClock();
    }

    checkSeconds() {
        if (this.milliSeconds == 100) {
            this.milliSeconds = 0;
            this.seconds += 1;
        }
        if (this.seconds == 60) {
            this.minutes += 1;
            this.seconds = 0;
        }
    }

    checkMinutes() {
        if (this.minutes == 60) {
            this.hours += 1;
            this.minutes = 0;
        }
    }

    checkAll() {
        this.checkSeconds();
        this.checkMinutes();   
    }

    async startClock() {
        this.running = true;
        // while (this.running) {
        this.tick();
        // }
    }

    stopClock() {
        this.running = false;
    }

    setTime(hours, min, sec) {
        this.hours = hours;
        this.minutes = min;
        this.seconds = sec;

    }

    tick() {
        setTimeout(() => {
            this.milliSeconds += 1;
            this.checkAll();
            console.log(this.seconds);
            this.updateClock();
            this.tickEvents.forEach(e=> {
                e();
            });
            if (this.running) {
                this.tick();
            }
        }, 10);
    }
}

class workTimer {
    constructor() {
        this.timer = new Clock();
        this.money = 0;
        this.rate = 0;
    }

    setGUI(startButton, stopButton, clearButton, hours, minutes, seconds) {
        this.timer.setStartButton(startButton);
        this.timer.setStopButton(stopButton);
        this.timer.setClearButton(clearButton);
        this.timer.setOutputElements(hours, minutes, seconds);
    }

    setRate(rate) {
        this.rate = rate;
    }

    findMoney() {
        // let event = () => {
        //     console.log("its alive")
        // }
        this.timer.addTickEvent(() => {
            console.log("it works");})

    }

    startTimer() {
        this.timer.startClock();
    }
}

let timer = new workTimer();

let startButton = document.getElementById('start-button');
let stopButton = document.getElementById('stop-button');
let clearButton = document.getElementById('clear-button');
let hoursOut = document.getElementById('out-hour');
let minutesOut = document.getElementById('out-min'); 
let secondsOut = document.getElementById('out-sec');

timer.setGUI(startButton, stopButton, clearButton, hoursOut, minutesOut, secondsOut);
timer.setRate(250);
timer.findMoney();

startButton.addEventListener('click', () => {
    stopButton.style.display = 'block';
    startButton.style.display = 'none';
});

stopButton.addEventListener('click', () => {
    startButton.style.display = 'block';
    stopButton.style.display = 'none';
});

