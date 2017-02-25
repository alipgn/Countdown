var t;
var interval = 10;

function setup()
{
  createCanvas(300, 300);
  
}

function draw()
{
    background(200);
   
    t = interval-int(millis()/1000);
    time = nf(t ,1);
    
    text(time, width/2, height/2);
   
    if(t === 0){
    noStroke();
    fill(0, 0, 0);
    rect(0, 0, windowWidth, windowHeight);
    textSize(32);
    fill(250);
    textAlign(CENTER);
    text("Remember dresda", width/2, height/2);
    t(0 ,1); 
    }
}