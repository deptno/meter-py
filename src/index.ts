const PY_1 = 1.000001475;
export function py(meter) {
    if (meter.toString().includes('.')) {
        return meter * 0.3025;
    }
    return Number((meter * PY_1 * 0.3025).toFixed(4));
}
export function pyRound(meter) {
    return Math.round(py(meter));
}
export function squareMeter(py) {
    return py * 3.30579;
}
export function squareMeterRound(py) {
    return Math.round(squareMeter(py));
}
export const meter = squareMeter;
export const meterRound = squareMeterRound;
