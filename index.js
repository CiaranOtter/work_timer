import { Clock } from "./Clock.js";

const clock = new Clock(document.getElementById("clock-parent"));
clock.setParent();
clock.startClock();