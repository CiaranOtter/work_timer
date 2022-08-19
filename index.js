import { Clock } from "./Clock.js";

const clock = new Clock(document.getElementById("clock-parent"));
clock.setParent();

const start_button = document.getElementById("start-button");
const pause_button = document.createElement("div");
pause_button.innerHTML = "pause"
const stop_button = document.getElementById("stop-button");
const clock_container = document.getElementById("clock-outer-container");

start_button.addEventListener("click", () => {
    clock_container.replaceChild(pause_button, start_button);
    clock.startClock();
})

pause_button.addEventListener("click", () => {
    clock_container.replaceChild(start_button, pause_button);
    clock.pauseClock();   
})

stop_button.addEventListener("click", () => {
    clock.stopClock();
})