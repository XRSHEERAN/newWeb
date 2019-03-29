/*
<div>
  <canvas id="myCanvas" width="400" height="400" style="border:1px solid #000000; background:white;">
</canvas>
<input style="margin-left:10%; direction:rtl" onchange="speedchange()" type="range" min="100" max="500" value="300" id="myRange">
</div>
*/
var spotX=Math.floor(Math.random()*391),spotY=Math.floor(Math.random()*391);
spotX=spotX-spotX%10;
spotY=spotY-spotY%10;
var c = document.getElementById("myCanvas");
var inp=document.getElementById("myRange");
var ctx = c.getContext("2d");
var snake=[[0,0],[10,0],[20,0]];

function randomGen(){
  spotX=Math.floor(Math.random()*391);
  spotY=Math.floor(Math.random()*391);
  spotX=spotX-spotX%10;
  spotY=spotY-spotY%10;
}

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
  if(x!=spotX || y!=spotY){
    
    
    snake.pop();
    
  }
  else{
    randomGen();
  }
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
var hx=snake[0][0],hy=snake[0][1],count=0;

  snake.forEach(
      function(element){
        if(element[0]==hx && element[1]==hy){
          
          if(count==1){
            alert('Boom')
            up=false;
            right=false;
            left=false;
            down=false;
          }
          ++count;
        }
        ctx.fillRect(element[0],element[1],10,10);
      }
    );
    ctx.fillRect(spotX,spotY,10,10);

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
var speed=inp.value;
function speedchange(){
  speed=inp.value;
  clearInterval(timer);
  timer=setInterval(draw, speed);
}
var timer=setInterval(draw, speed);
