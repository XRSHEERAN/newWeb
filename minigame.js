/*
<div>
  <canvas id="myCanvas" width="400" height="400" style="border:1px solid #000000; background:white;">
</canvas>
</div>
*/

// The canvas is 400x400
class Node{
  constructor(x,y,next){
    this.x=x;
    this.y=y;
    this.next=next;
  }
}
var head=new Node(0,0,null);

var mid=new Node(0,10,head);
var tail=new Node(0,20,mid);

function update(x,y){
  if(tail!=head){
    var temp=new Node()
    head.x+=x;
    head.y+=y;
    
    tail=tail.next;
    
  }
}

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var n=10,up=false,down=false,right=false,left=false;
function draw(){
  ctx.clearRect(0,0,400,400)
ctx.beginPath();
if(up){
  update(0,-1);
}
else if(down){
  update(0,1);
}
else if(left){
  update(-1,0);
}
else if(right){
  update(1,0);
}

var curr=tail;
if(x<0){
  x=390;
}
if(y<0){
  y=390;
}
x%=400;
y%=400;

ctx.fillStyle = "red";
ctx.fill();

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
