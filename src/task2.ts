import {compose, pipe} from 'ramda'

const addTen = (a: number): number => {
    return a + 10
}

const triple = (b: number): number => {
    return b * 3
}

const composed = compose(addTen, triple)

console.log(composed(2))

// the compose function took the triple function first which gave me 6 and then added 10 to that value. Which gave a total of 16 in the console.

const piped = pipe(addTen, triple)

console.log(piped(2))

// in this case, the pipe function took the addTen function first which gave us 12 and then used the triple functin which multiplied 12 into 36

