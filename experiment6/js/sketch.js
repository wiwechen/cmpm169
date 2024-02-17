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
    grammar = createTraceryGrammar();
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

    
    console.log(flattenGrammar())


}

// draw() function is called repeatedly, it's the main animation loop
function draw() {
    background(220);    
    // call a method on the instance
    myInstance.myMethod();

    // Put drawings here
    var centerHorz = canvasContainer.width() / 2 - 125;
    var centerVert = canvasContainer.height() / 2 - 125;
    
    if (frameCount % 50 == 0) {
        newOut = flattenGrammar();
        stroke(0);
        textSize(2**random(2,6));
        text(newOut, random(width), random(height));
      }
}

// mousePressed() function is called once after every time a mouse button is pressed
function mousePressed() {
    // code to run when mouse is pressed
}

function createTraceryGrammar() {
    // this is not needed if we are not doing node.js
    // const tracery = require('tracery-grammar');
  
    return tracery.createGrammar(grammarObj);
  }
  
  function flattenGrammar() {
    return grammar.flatten("#origin#");
  }