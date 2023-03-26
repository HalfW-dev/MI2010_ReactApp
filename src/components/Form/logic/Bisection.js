import { parseTex, evaluateTex } from 'tex-math-parser'
import { abs, evaluate} from 'mathjs';

function round(num, digit) {
    return Math.round( num * Math.pow(10, digit) ) / Math.pow(10, digit)
}

function evalX(fun, val) {
    return round(fun.evaluate({x: val}), 10);
}

export function bisectionTimes(a, b, fun, times) {
    if (evalX(fun, a) == 0) return `${a} is the solution`
    if (evalX(fun, b) == 0) return `${b} is the solution`

    let c = 0;
    let error = 0;
    let count = 0;


    for (let i = 0; i < times; i++) {
        count++;

        c = round((a+b) / 2.0, 10);
        error = round(abs(b-a) / 2, 10)

        if (evalX(fun, c) == 0) return `${c} is the solution`
        evalX(fun, a) * evalX(fun, c) > 0 ? a = c : b = c;
    }

    return [c, count]
}

export function bisectionErrorAllowance(a, b, fun, errAllowance) {
    if (evalX(fun, a) == 0) return `${a} is the solution`
    if (evalX(fun, b) == 0) return `${b} is the solution`

    let c = 0;
    let error = 0;
    let count = 0;

    while (true) {
        count++;

        c = round((a+b) / 2.0, 10);
        error = round(abs(b-a) / 2, 10)

        if (evalX(fun, c) == 0 || error < errAllowance) return [c, count];
        evalX(fun, a) * evalX(fun, c) > 0 ? a = c : b = c;
    }
}

console.log(bisectionErrorAllowance(1.6, 1.8, parseTex(String.raw`x^3-5`), 1e-3))