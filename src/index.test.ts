import {py, meter, pyRound, meterRound} from './index';

test('1 py to 3.30579㎥', () => {
    expect(meter(1)).toEqual(3.30579);
});
test('1㎥ to 0.3025py', () => {
    expect(py(1)).toEqual(0.3025);
});
test('1 py to 3㎥', () => {
    expect(meterRound(1)).toEqual(3);
});
test('3.3㎥ to 1py', () => {
    expect(pyRound(3.3)).toEqual(1);
});
