import {py, meter} from './index';
import '@types/jest';

test('1 py to 3.30579㎥', () => {
    expect(py(1)).toEqual(3.30579);
});
test('1㎥ to 0.3025py', () => {
    expect(meter(1)).toEqual(0.3025);
});
