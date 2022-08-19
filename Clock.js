export class Clock {
    constructor(parent) {
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;
        this.running = false;
        this.clockClasses = [];
        this.parent = parent;

        this.createClockHTML();

        console.log("a new clock has been createad")
        this.tick();
        
    }

    createClockHTML() {
        this.clockelem = document.createElement("div");
        this.clockClasses.forEach(c => {
            clockDiv.classList.add(c);
        });

        this.parent.appendChild(this.clockelem);
        this.updateClockElement();
    }

    updateClockElement() {
        let Inner = this.formatNumber(this.hours)+":"+this.formatNumber(this.minutes)+":"+this.formatNumber(this.seconds);
        this.clockelem.innerHTML = Inner;

        // this.parent.replaceChildren(this.clockelem);
    }

    setParent(parent) {
        this.parent = parent;
    }

    formatNumber(number) {
        number = number.toString();
        if (number.length == 1){
            number = "0" + number;
        }

        return number;
    }

    updateSeconds() {
        if (this.seconds == 59) {
            this.updateMinutes();
            this.seconds = -1;
        }
        this.seconds += 1;
    }

    updateMinutes() {
        if (this.seconds == 59 && this.minutes == 59) {
            this.updateHours();
            this.minutes = 0;
            this.seconds = -1;
        }
        this.minutes += 1;
    }

    updateHours() {
        this.hours += 1;
    }

    tick() {
        if (this.running) {
            this.updateSeconds();
            this.logTime();
        }

        this.updateClockElement();
        let t = setTimeout(() => {
            this.tick();
        }, 200);
        
    }

    startClock() {
        this.running = true;
    }

    pauseClock() {
        this.running = false;
    }

    stopClock() {
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;
        this.pauseClock();
    }

    logTime() {
        console.log(this.hours+":"+this.minutes+":"+this.seconds);
    }
}