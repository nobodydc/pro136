video = "";
status = "";
X = "";

function preload() {
    video = createCapture();
    video.hide();
}

function setup() {
    canvas = createCanvas(480, 380);
    canvas.center();
}

function draw() {
    image(video, 0, 0, 480, 380);
}

function start() {
    objectdetector = ml5.objectDetector('cocossd', modalLoaded);
    document.getElementById('status').innerHTML = 'Status = detecting objects';
    X = document.getElementById("Name").value
}

function modalLoaded() {
    console.log('modal is loaded');
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}
