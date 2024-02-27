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

let arcs = new Array(5);
let newAngles = new Array(3);
let colors = ['green', 'red', 'gray'];
let secondColors = ['blue','magenta'];
let results = ['Wins: ', 'Loses: ', 'No Result: '];
let fights = ['Itadori and Nobara vs Building Curse\nItadori and Nanami vs Transfigured Humans\nItadori and Nobara vs Death Paintings\nItadori vs Locust Curse\nItadori and Megumi vs Awasaka\nItadori and Todo vs Mahito',
             'Itadori vs Sukuna Finger Curse\nItadori vs Sukuna\nItadori vs Choso',
             'Itadori and Nanami vs Mahito\nItadori vs Todo\nItadori and Todo vs Hanami'];
let index = 0;

let winSoloOrTeam = [1,5];
let loseSoloOrTeam = [3,0];
let noResultSoloOrTeam = [1,2];

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

    noStroke();

  
    //Mapping the Angles, Big Pie Graph
    newAngles[0] = map(6, 0, 12, 0, 360);
    newAngles[1] = map(3, 0, 12, 0, 360);
    newAngles[2] = map(3, 0, 12, 0, 360);
    
    //map types of win array
    winSoloOrTeam[0] = map(1,0,6,0,360);
    winSoloOrTeam[1] = map(5,0,6,0,360);
    
    //map types of lose array
    loseSoloOrTeam[0] = map(3,0,3,0,360);
    loseSoloOrTeam[1] = map(0,0,3,0,360);
    
    //map types of no result array
    noResultSoloOrTeam[0] = map(1,0,3,0,360);
    noResultSoloOrTeam[1] = map(2,0,3,0,360);
}

// draw() function is called repeatedly, it's the main animation loop
function draw() {
    background(0);    
    // call a method on the instance
    myInstance.myMethod();

    // Put drawings here
    var centerHorz = canvasContainer.width() / 2 - 125;
    var centerVert = canvasContainer.height() / 2 - 125;

    pieChartDrawing = pieChart(300, newAngles);
    smallPieChart(index);
    fill(colors[index]);
    textSize(16)
    text(results[index] + Math.round(map(newAngles[index], 0, 360, 0, 100)) + "%", width/100, height/4);
    textSize(12);
    text(fights[index], width/100, height/3);


    
}

function pieChart(diameter, data) {
    let lastAngle = 0;
    for (let i = 0; i < data.length; i++) {
      // let colors = map(i, 0, data.length, 0, 255);
      fill(colors[i]);
      arcs[i]=arc(
        width / 1.5,
        height / 2,
        diameter,
        diameter,
        lastAngle,
        lastAngle + radians(data[i])
      );
      lastAngle += radians(data[i]);
    }
  }
  
  function smallPieChart(index){  
    let diameter=100;
    let lastAngle = 0;
    let data;
    if(index==0){
      data = winSoloOrTeam;
    }else if(index==1){
      data = loseSoloOrTeam;
    }else if(index == 2){
      data = noResultSoloOrTeam;
    }
    
    for (let i = 0; i < data.length; i++) {
      // let colors = map(i, 0, data.length, 0, 255);
      fill(secondColors[i]);
      arcs[i]=arc(
        width/10,
        height/1.4,
        diameter,
        diameter,
        lastAngle,
        lastAngle + radians(data[i])
      );
      lastAngle += radians(data[i]);
    }
    textSize(16)
    fill(secondColors[0]);
    text("Solo Fights: " + Math.round(map(data[0], 0, 360, 0, 100))+"%" , width/30, height/1.11);
    fill(secondColors[1]);
    text("With Teamates: " + Math.round(map(data[1], 0, 360, 0, 100))+"%" , width/30, height/1.05);
  }
  
  
  function keyReleased(){
    if(key == 'Shift'){  
      index++;
      if(index>2){
        index=0;
      }
    }
  }