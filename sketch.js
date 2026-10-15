let beat;
// Load sound file before canvas loads so it is ready
function preload() {
beat = loadSound('beat.mp3');
}

function setup() {
let myCanvas = createCanvas(600, 400);
myCanvas.parent('myContainer');
}

function mousePressed() {
if (beat.isPlaying()) {
beat.stop();
} else {
beat.loop();
}
}
