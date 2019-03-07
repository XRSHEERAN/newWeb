// The canvas is 400x400
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var y=0;
var x=0;
var n=10,up=false,down=false,right=false,left=false;
function draw(){
  ctx.clearRect(0,0,400,400)
ctx.beginPath();
if(x<0){
  x=390;
}
if(y<0){
  y=390;
}
x%=400;
y%=400;
ctx.rect(x, y, 10, 10);
ctx.fillStyle = "red";
ctx.fill();
if(up){
  --y;
}
else if(down){
  ++y;
}
else if(left){
  --x;
}
else if(right){
  ++x;
}
   window.requestAnimationFrame(draw);
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
 draw();
