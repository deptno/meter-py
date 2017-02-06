const PY_1 = 1.000001475;
export function py(meter) {
    return meter * 3.30579;
}
export function squareMeter(py) {
    if (py.toString().includes('.')) {
        return py * 0.3025;
    }
    return Number((py * PY_1 * 0.3025).toFixed(4));
}
export const meter = squareMeter;
