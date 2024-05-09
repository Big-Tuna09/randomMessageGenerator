
//first part of msg arr with possible run times function to return msg;
const Runarr = [30, 40, 60, 75, 90, 120, 150];

const firstPart = () => {
  let time = Runarr[Math.floor(Math.random()*Runarr.length)];

    let timeMsg = '';
    if (time < 60) {
        timeMsg = time + ' minutes'
    } else if (time === 60) {
        timeMsg = 'an hour';
    } else if (time === 120) {
        timeMsg = 'two hours'
    } else if (time > 60 && time < 120) {
        timeMsg = `an hour and ${time - 60} minutes`
    } else {
        timeMsg = `${Math.floor(time / 60)} hours and ${time % 60} minutes` 
    }

    return `Run for ${timeMsg}.`;
}

//middle msg how hard you run.


const secondPart = () => {
const easyOrHardarr = ['relaxed', 'easy', 'good', 'hard', 'all out'];
const howHard = easyOrHardarr[Math.floor(Math.random()*easyOrHardarr.length)]

if (howHard === 'relaxed') {
    return 'Run relaxed, this is time to recover while you run.'
} else if (howHard === 'easy') {
    return 'Run easy, this is your everyday run pace. Just out for a jog.'
} else if (howHard === 'good') {
    return 'Run at a good pace. Keep up a little bit of pace for a tempo-like run.'
} else if ( howHard === 'hard') {
    return 'Run at a hard pace. keep up that heart rate for this speed run, this will be at race pace.'
} else if (howHard === 'all out') {
    return 'Run all out and try not to die'
}
}

//last part run advice.

const thirdPart = () => {
    return 'third part'
}

//testing.

console.log(firstPart());
console.log(secondPart());
console.log(thirdPart());

//put it all together


/*
const randomMsg = () => {
    const first = 
}
*/