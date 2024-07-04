// Stopwatch class
class Stopwatch {
    constructor(displayElement) {
        this.display = displayElement;
        this.reset();
    }

    reset() {
        this.startTime = null;
        this.running = false;
        this.elapsedTime = 0;
        this.display.textContent = '00:00:00.000';
    }

    start() {
        if (!this.running) {
            this.startTime = Date.now() - this.elapsedTime;
            this.running = true;
            this.timer = setInterval(() => {
                this.elapsedTime = Date.now() - this.startTime;
                this.display.textContent = this.formatTime(this.elapsedTime);
            }, 10);
        }
    }

    stop() {
        if (this.running) {
            clearInterval(this.timer);
            this.running = false;
        }
    }

    formatTime(milliseconds) {
        let hours = Math.floor(milliseconds / 3600000);
        milliseconds %= 3600000;
        let minutes = Math.floor(milliseconds / 60000);
        milliseconds %= 60000;
        let seconds = Math.floor(milliseconds / 1000);
        milliseconds %= 1000;

        return (
            this.pad(hours, 2) + ':' +
            this.pad(minutes, 2) + ':' +
            this.pad(seconds, 2) + '.' +
            this.pad(milliseconds, 3)
        );
    }

    pad(number, length) {
        let str = String(number);
        while (str.length < length) {
            str = '0' + str;
        }
        return str;
    }
}

// Usage
const stopwatchDisplay = document.getElementById('stopwatch-display');
const stopwatch = new Stopwatch(stopwatchDisplay);

document.getElementById('start-btn').addEventListener('click', () => {
    stopwatch.start();
});

document.getElementById('stop-btn').addEventListener('click', () => {
    stopwatch.stop();
});

document.getElementById('reset-btn').addEventListener('click', () => {
    stopwatch.reset();
});
