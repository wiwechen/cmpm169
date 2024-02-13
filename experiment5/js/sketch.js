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

let colorBoxed
let rotateXSpeed;
let rotateYSpeed;
let boxSize;
let oneZeroArray = [0,1];

class MyClass {
    constructor(param1, param2) {
        this.property1 = param1;
        this.property2 = param2;
    }

    myMethod() {
        // code to run when method is called
    }
}

// setup() function is called once when the program starts
function setup() {
    // place our canvas, making it fit our container
    canvasContainer = $("#canvas-container");
    let canvas = createCanvas(canvasContainer.width(), canvasContainer.height(), WEBGL);
    canvas.parent("canvas-container");
    // resize canvas is the page is resized
    $(window).resize(function() {
        console.log("Resizing...");
        resizeCanvas(canvasContainer.width(), canvasContainer.height(), WEBGL);
    });
    // create an instance of the class
    myInstance = new MyClass(VALUE1, VALUE2);

    var centerHorz = windowWidth / 2;
    var centerVert = windowHeight / 2;
    rectMode(CENTER);
    colorBoxed = color(255, 0, 0);
    rotateXSpeed = 0.01;
    rotateYSpeed = 0.01;
    boxSize = 100;
}

// draw() function is called repeatedly, it's the main animation loop
function draw() {
    background(220);    
    // call a method on the instance
    myInstance.myMethod();

    // Put drawings here
    rotateY(frameCount * rotateXSpeed);
    rotateX(frameCount * rotateYSpeed);
    fill(colorBoxed);
    box(boxSize, boxSize, boxSize);
    
}

//functions to change elements of the box
function changeColor(){
  colorBoxed = color (random(255), random(225), random(225));
}

function changeSpeed(){
  rotateXSpeed = random(0.2);
  rotateYSpeed = random(0.2);
  if(random(oneZeroArray) == 1){
    rotateXSpeed *= -1;
  }
  if(random(oneZeroArray) == 1){
    rotateYSpeed *= -1;
  }
}



// mousePressed() function is called once after every time a mouse button is pressed
function mousePressed() {
    // code to run when mouse is pressed
    changeColor();
    changeSpeed();
    boxSize = random(30,100);
}

//keyReleased() function is called when a key has been released
function keyReleased(){
    if(key == 'q') {
      rotateXSpeed *= -1;
    }
    if(key == 'e'){
      rotateYSpeed *= -1;
    }
    if(key == 'c'){
      changeColor();
    }
    if(key=='w'){
      rotateXSpeed = random(0.2);
    }
    if(key=='s'){
      rotateYSpeed = random(0.2);
    }
    if(key == ' ' ){
      boxSize = random(30,100);
    }
  }