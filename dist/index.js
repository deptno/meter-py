"use strict";
var PY_1 = 1.000001475;
function py(meter) {
    if (meter.toString().includes('.')) {
        return meter * 0.3025;
    }
    return Number((meter * PY_1 * 0.3025).toFixed(4));
}
exports.py = py;
function pyRound(meter) {
    return Math.round(py(meter));
}
exports.pyRound = pyRound;
function squareMeter(py) {
    return py * 3.30579;
}
exports.squareMeter = squareMeter;
function squareMeterRound(py) {
    return Math.round(squareMeter(py));
}
exports.squareMeterRound = squareMeterRound;
exports.meter = squareMeter;
exports.meterRound = squareMeterRound;
