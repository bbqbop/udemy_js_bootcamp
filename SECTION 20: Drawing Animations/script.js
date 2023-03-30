//// TIMER WITH A DRAWN BORDER AROUND IT
////  CLASS BASED IMPLEMENTATION
const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput,startButton,pauseButton, {
    onStart() {
        console.log('Started')
    },
    onTick() {
        console.log('Tick');
    },
    onComplete() {
        console.log('Comp[ete')
    }
});
