// DETERMINE THE VALUE OF 'THIS'

    // Did you define the function with an Arrow function? 
        // Write 'console.log(this)' on the first valid line above the arrow function.
        // Value of 'this' in the arrow function will be equal to that console.log
    // Did you call 'bind', 'call' or 'apply' on the function when you invoked it? 
        // 'this' is equal to the first argument of 'bind', 'call' or 'apply'
    // All other cases
        // 'this' is equal to whatever is to the left of the '.' in the method call


class Timer{
    constructor(durationInput, startButton, pauseButton, callbacks){
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        if(callbacks){
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }
    // use arrow function to set 'this' to the instance of the object
    start = () => { 
        if(this.interval) return;
        if(this.onStart){
            this.onStart();
        }
        this.tick();
        this.interval = setInterval(this.tick, 1000);
    };
    pause = () => {
        clearInterval(this.interval);
        this.interval = 0;
    };
    tick = () => {
        if (this.timeRemaining <= 0) {
            this.pause();
            if (this.onComplete) {
                this.onComplete();
            }
        } else {
            this.timeRemaining--;
            if (this.onTick) {
                this.onTick();
            }
        }
    };
    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    }
    set timeRemaining(time){
        this.durationInput.value = time;
    }
}