var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var snake=[[0,0],[10,0],[20,0]];

function update(x,y){
  var curr=snake[0];
  x=x+curr[0];
  y=y+curr[1];
  snake.unshift([x,y]);
  snake.pop();
}

var num=0
function draw(){
  ctx.clearRect(0,0,400,400)
  ctx.beginPath();
/*
if(up){
  update(0,-1);
}
else 
else if(left){
  update(-1,0);
}
else if(right){
  update(1,0);
}
*/
//update(0,10);
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

    if (e.keyCode == '38') {
        // up arrow
        up=true;
        down=false;
        left=false;
        right=false;
    }
    else if (e.keyCode == '40') {
        // down arrow
        up=false;
        down=true;
        left=false;
        right=false;
    }
    else if (e.keyCode == '37') {
       // left arrow
       up=false;
        down=false;
        left=true;
        right=false;
       
    }
    else if (e.keyCode == '39') {
       // right arrow
       
       up=false;
        down=false;
        left=false;
        right=true;
    }

}
setInterval(draw, 300);
