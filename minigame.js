/*
<div>
  <canvas id="myCanvas" width="400" height="400" style="border:1px solid #000000; background:white;">
</canvas>
</div>
<button style="height:20px;width:80px" onclick="speedup()">speed up</button>


<button style="height:20px;width:80px" onclick="speeddown()">slow down</button>

*/

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var snake=[[0,0],[10,0],[20,0]];

function update(x,y){
  var curr=snake[0];
  x=x+curr[0];
  y=y+curr[1];
  if(x<0){
    x=390;
  }
  else if(y<0){
    y=390;
  }
  else{
    x%=400;
    y%=400;
  }
  snake.unshift([x,y]);
  snake.pop();
}

var num=0,up=false,down=false,right=false,left=false;
function draw(){
  ctx.clearRect(0,0,400,400)
  ctx.beginPath();

if(up){
  update(0,-10);
}
if(left){
  update(-10,0);
}
if(right){
  update(10,0);
}
if(down){
  update(0,10)
}


ctx.fillStyle="red";
  snake.forEach(
      function(element){
        
        ctx.fillRect(element[0],element[1],10,10);
      }
    );

}
document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38' && !down) {
        // up arrow
        up=true;
        down=false;
        left=false;
        right=false;
    }
    else if (e.keyCode == '40' && !up) {
        // down arrow
        up=false;
        down=true;
        left=false;
        right=false;
    }
    else if (e.keyCode == '37' && !right) {
       // left arrow
       up=false;
        down=false;
        left=true;
        right=false;
       
    }
    else if (e.keyCode == '39' && !left) {
       // right arrow
       
       up=false;
        down=false;
        left=false;
        right=true;
    }

}
var speed=300;
function speedup(){
  if(speed<=100){
    alert("too much");
    return
  }
  speed-=10;
  clearInterval(timer);
  timer=setInterval(draw, speed);
}
function speeddown(){
  if(speed>=500){
    alert("too slow");
    return;
  }
  speed+=10;
  clearInterval(timer);
  timer=setInterval(draw, speed);
}

var timer=setInterval(draw, speed);
