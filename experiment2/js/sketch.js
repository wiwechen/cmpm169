// sketch.js - purpose and description here
// Author: William Chen
// Date: January 20th, 2023

// Here is how you might set up an OOP p5.js project
// Note that p5.js looks for a file called sketch.js

// Constants - User-servicable parts
// In a longer project I like to put these in a separate file
const VALUE1 = 1;
const VALUE2 = 2;

// Globals
let myInstance;
let canvasContainer;
var tileCount = 20;
//random Var
var actRandomSeed = 0;
var m;
var d;
var y;
var h;
var mins;
var sec;
var seedString;
var seedNumber;
//square color
var squareAlpha = 130;
var squareColor;
//rotation and color variables
var rotation=false;
var rotateValue = 3.0;
var oneColor=true;

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

    updateSeed();
    noFill();
    squareColor = color(random(255), random(255), random(255), squareAlpha);
}

// draw() function is called repeatedly, it's the main animation loop
function draw() {
    background(225);    
    // call a method on the instance
    myInstance.myMethod();

    // Put drawings here
    translate(width / tileCount / 2, height / tileCount / 2);
    background(225);
    randomSeed(actRandomSeed);
    
    stroke(squareColor);
    strokeWeight(mouseY / 60);
    
    for (var gridY = 0; gridY < tileCount; gridY++) {
      
      for (var gridX = 0; gridX < tileCount; gridX++) {
        
        squareColor = color(random(255), random(255), random(255), squareAlpha);
        
        if(oneColor==false){
          stroke(squareColor);
        }
        
  
        var posX = width / tileCount * gridX;
        var posY = height / tileCount * gridY;
  
        var shiftX = random(-mouseX, mouseX) / 20;
        var shiftY = random(-mouseX, mouseX) / 20;
        
        if(rotation){
          rotate(PI / rotateValue);
        }
  
        
        rect(posX + shiftX, posY + shiftY, mouseY /15, mouseY / 15);
      }
    }  
}

// mousePressed() function is called once after every time a mouse button is pressed
function mousePressed() {
  actRandomSeed = random(100000);
}

function updateSeed(){
    m = month();
    d = day();
    y = year();
    h = hour();
    mins = minute();
    sec = second();
    seedString = m + "" + d + "" + y + "" + h + "" + mins + "" + sec;
    console.log(typeof(seedString));
    seedInt = parseInt(seedString);
    console.log(typeof(seedInt));
    actRandomSeed = seedInt;
    console.log("current actRandomSeed is: "+actRandomSeed)
  }


function keyReleased() {
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
    if(key == 'r'){
      rotateValue = 3.0;
      rotation = !rotation;
    }
    if(key == 'c'){
      oneColor = !oneColor;
    }
    if(rotation==true){
      if(key == 'e'){
        rotateValue += 0.2;
        console.log("up, at: " + rotateValue);
      }
      if(key == 'q' && rotateValue>=3.0){
        rotateValue -= 0.2;
        console.log("down, at: " + rotateValue);
      
      }
    } 
  }