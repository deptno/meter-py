import {py, meter, pyRound, meterRound} from './index';

test('1 py to 3.30579㎥', () => {
    expect(py(1)).toEqual(3.30579);
});
test('1㎥ to 0.3025py', () => {
    expect(meter(1)).toEqual(0.3025);
});
test('1 py to 3㎥', () => {
    expect(pyRound(1)).toEqual(3);
});
test('3.3㎥ to 1py', () => {
    expect(meterRound(3.3)).toEqual(1);
});
