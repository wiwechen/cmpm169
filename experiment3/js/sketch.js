// sketch.js - purpose and description here
// Author: William Chen
// Date: 01/29/2024

// Here is how you might set up an OOP p5.js project
// Note that p5.js looks for a file called sketch.js

// Constants - User-servicable parts
// In a longer project I like to put these in a separate file
const VALUE1 = 1;
const VALUE2 = 2;

// Globals
let myInstance;
let canvasContainer;
let x, y;
var lineColor = ['blue', 'red', 'purple'];
var lineColor2 = ['yellow', 'orange', 'green'];
var minBounds = -5;
var maxBounds = 5;
var lineChange = ['same','same','increase', 'decrease'];
var colorSchemeChange = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,];
var colorScheme2 = false;
var randLineMode = true;

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

    background(0);
    stroke(255);
    x = width / 2;
    y = height / 2;
    stroke(lineColor[0]);
}

// draw() function is called repeatedly, it's the main animation loop
function draw() {
    point(x, y);
    xOld = x;
    yOld = y;
    x += random(minBounds, maxBounds);
    y += random(minBounds, maxBounds);
    x = constrain(x, 0, width);
    y = constrain(y, 0, height);
    // Draw a line from the last point to the current point
    line(xOld, yOld, x, y);
    colorChange();
    changeScheme();
    if(randLineMode == true){
      randomStrokeMode();
    }
  }

  function increaseBounds(){
    if(minBounds <= -5 && maxBounds >= 5){
      if(minBounds>-20 && maxBounds<20){
        minBounds--;
        maxBounds++;
      }else{
        console.log("Hit Upper Limit");
      }
    }
      
  }
  
  //Increasing and Decreasing the line's bounds
  function decreaseBounds(){
    if(minBounds >= -20 && maxBounds <= 20){
      if(minBounds<-5 && maxBounds>5){
        maxBounds--;
        minBounds++;
      }else{
        console.log("Hit Lower Limit");
      }  
    }
  }
  
  //Change the mode from controled Bound change or Random Bound Change
  function randomStrokeMode(){
    var mode = random(lineChange);
    if(mode == 'lineChange'){
      return;
    }else if(mode == 'increase'){
      increaseBounds();
    }else if(mode == 'decrease') {
      decreaseBounds();
    }
  }
  
  
  //color change code
  function changeScheme(){
    var change = random(colorSchemeChange);
    if(change == 0){
      console.log("No Change")
      return;
    }else if(change==1){
      colorScheme2 = !colorScheme2;
      console.log("Color Scheme Changed");
    }
  }
  
  function colorChange(){
    if(colorScheme2 == false){
      stroke(random(lineColor));
    }else if(colorScheme2 == true){
      stroke(random(lineColor2));
    }
    
  }
  
  function keyReleased(){
    
    if(randLineMode == false){
      if(key == 'e' || key == "E"){
        increaseBounds()
      }
      if(key == 'q' || key == "Q"){
        decreaseBounds();
      }
    }
    
    if(key=='r' || key=='R'){
      randLineMode = !randLineMode;
      console.log('randMode: ' + randLineMode);
    }
    
  }
