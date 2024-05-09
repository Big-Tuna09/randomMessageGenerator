
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
const howHard = easyOrHardarr[Math.floor(Math.random()*Runarr.length)]
}

//last part run advice.

const thirdPart = () => {

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