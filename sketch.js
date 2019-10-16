function setup(){
  createCanvas(640,640);
}


function mousePressed(){
      var r = random(200,255);
      var g = random(200,255);
      var b = random(200,255);
      var k = random(-1,1);
      
      for(var x = 20; x <= width+20; x += 30){
    for(var y = 20; y <= height+20; y += 30){
      fill(r,g,b);
      ellipse (x,y,30-x/25,30-x/25);
    }
      }
      fill(r,g,b);
      ellipse(mouseX+k,mouseY+k,mouseX-mouseY,mouseX-mouseY);
      stroke(r,g,b);
      strokeCap(ROUND);
      strokeWeight(10);

}
    