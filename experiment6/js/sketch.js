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
const grammarObj = {
    "origin": ["#greeting#, #person#!"],
    "greeting": ["Hello", "Hi", "Hey"],
    "person": ["world", "friend", "there"]
  };

let grammar;
// const tracery = require('tracery-grammar');

let texts = [];
let anglesX = [];
let anglesY = [];
let input;
let inputAdd;
let index=0;
let sizeVar = 600;

class MyClass {
    constructor(param1, param2) {
        this.property1 = param1;
        this.property2 = param2;
    }

    myMethod() {
        // code to run when method is called
    }
}

function preload() {
    customFont = loadFont('https://cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/font/SourceCodePro-Bold.otf');
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

    textFont(customFont);

    texts = ["Text 1", "Text 2", "Text 3", "Text 4"];

    for (let i = 0; i < texts.length; i++) {
        anglesX[i] = 0;
        anglesY[i] = 0;
    }
    
    input = createInput();
    input.position(20 + 50, height + 10+sizeVar);
    inputAdd = createInput();
    inputAdd.position(20 + 50, height + 40+sizeVar);
    // Create a button to submit the input
    let button = createButton('Change');
    button.position(input.x + input.width + 10, height + 10+sizeVar);
    button.mousePressed(submitText);
    
    let button2 = createButton('Add');
    button2.position(input.x + inputAdd.width + 10, height + 40+sizeVar);
    button2.mousePressed(newText);
}

// draw() function is called repeatedly, it's the main animation loop
function draw() {
    background(220);    
    // call a method on the instance
    myInstance.myMethod();

    // Put drawings here
    for (let i = 0; i < texts.length; i++) {
        push();
        
        // Adjust the position based on the index 'i'
        translate(i * 100 - (texts.length - 1) * 50, 0, 0);
        
        rotateX(anglesX[i]);
        rotateY(anglesY[i]);
    
        textSize(24);
        fill(0);
        text(texts[i], -textWidth(texts[i]) / 2, 0);
    
        pop();
    
        anglesX[i] += 0.01;
        anglesY[i] += 0.02;
      }
}

// mousePressed() function is called once after every time a mouse button is pressed
function mousePressed() {
    // code to run when mouse is pressed
}

function submitText() {
  
    console.log("Submitted: " + input.value());
    texts[index] = input.value();
    index++;
    if(index>=texts.length){
      index=0;
    }
    
  }
  
  function newText(){
    console.log("Added: " + inputAdd.value());
    texts.push(inputAdd.value());
    anglesX.push(0);
    anglesY.push(0);
  
  }