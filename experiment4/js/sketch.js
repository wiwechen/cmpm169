// sketch.js - purpose and description here
// Author: Your Name
// Date:

// Here is how you might set up an OOP p5.js project
// Note that p5.js looks for a file called sketch.js

// Constants - User-servicable parts
// In a longer project I like to put these in a separate file
const VALUE1 = 1;
const VALUE2 = 2;

// Globals
let myInstance;
let canvasContainer;

let img;
let backgroundImg;
let walkSound;
let bgm;
let amplitude;
let slime;
let circleColor;

class MyClass {
    constructor(param1, param2) {
        this.property1 = param1;
        this.property2 = param2;
    }

    myMethod() {
        // code to run when method is called
    }
}

function preload(){
    img = loadImage('img/Slime_Sprite.png');
    backgroundImg = loadImage('img/windows_xp_bliss-wide.png');
    walkSound = loadSound('assets/spit.mp3');
    bgm = loadSound('assets/Grass-Skirt-Chase.mp3');

}


// setup() function is called once when the program starts
function setup() {
    // place our canvas, making it fit our container
    canvasContainer = $("#canvas-container");
    let canvas = createCanvas(canvasContainer.width(), canvasContainer.height());
    canvas.parent("canvas-container");
    // resize canvas is the page is resized
    $(window).resize(function() {
        console.log("Resizing...");
        resizeCanvas(canvasContainer.width(), canvasContainer.height());
    });
    // create an instance of the class
    myInstance = new MyClass(VALUE1, VALUE2);

    var centerHorz = windowWidth / 2;
    var centerVert = windowHeight / 2;

    bgm.loop();
    amplitude = new p5.Amplitude();

    circleColor = color(random(255), random(255), random(255));

    
}

// draw() function is called repeatedly, it's the main animation loop
function draw() {
    // background(220);
    background (backgroundImg, canvasContainer.width(), canvasContainer.height());

    slime = image(img, mouseX, mouseY, 150, 150);

    let level = amplitude.getLevel();
    let size = map(level, 0, 1, 50, 200);

    fill(circleColor);
    ellipse(mouseX, mouseY, size, size);
    // circleColor = color(random(255), random(255), random(255));
    
    
}

// mousePressed() function is called once after every time a mouse button is pressed
function mousePressed() {
    // code to run when mouse is pressed
    walkSound.play();
    circleColor = color(random(255), random(255), random(255));
}
