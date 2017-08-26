var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

function drawMap(width, height, size) {
  var w = Math.floor(width/size);
  var h = Math.floor(height/size);
  ctx.beginPath();
  for (var x = 0; x < w; x++) {
    ctx.moveTo(x*size, 0);
    ctx.lineTo(x*size, height);
  }
  for (var y = 0; y < w; y++) {
    ctx.moveTo(0, y*size);
    ctx.lineTo(width, y*size);
  }
  ctx.stroke();
}

function drawSquare(x, y, color) {
  mapData[x][y] = color;
  ctx.fillStyle = color;
  ctx.fillRect(x*size, y*size, size, size);
  drawMiniMap(205, (img)=>{
	   document.querySelector("#img").innerHTML = "";
    document.querySelector("#img").appendChild(img);
  });
}

function drawMiniMap(size, cb) {
  var c = document.createElement("canvas");
  c.width = size;
  c.height = size;
  var s = size/50;
  var ct = c.getContext("2d");
  for (var x = 0; x < 50; x++) {
    for (var y = 0; y < 50; y++) {
      if (mapData[x][y]) {
        ct.fillStyle = mapData[x][y];
        ct.fillRect(x*s, y*s, s, s);
      }
    }
  }
  cb(c);
}


var speed = 20;
var size = 100;
var color = '#'+Math.floor(Math.random()*16777215).toString(16);
var players = [];

var mapData = [];
for (var x = 0; x < 50; x++) {
  mapData[x] = [];
  for (var y = 0; y < 50; y++) {
    mapData[x][y] = undefined;
  }
}

drawMap(5000,5000,100);

var fx = new fox("game", new Date().getHours().toString(), (raw)=>{
  var data = JSON.parse(raw);
  drawSquare(data.x, data.y, data.color);
});

fx.addUser = (id)=>{

}

fx.removeUser = (id)=>{

}

// Controls
var map = {};
onkeydown = onkeyup = (e)=>{
    e = e || event;
    map[e.keyCode] = e.type == "keydown";
    var x = 0;
    var y = 0;
    // Up
    if (map[87]) {
      y -= speed;
    }
    if (map[65]) {
      x -= speed;
    }
    if (map[83]) {
      y += speed;
    }
    if (map[68]) {
      x += speed;
    }
    window.scrollBy(x, y);
}

document.addEventListener("click", (e)=> {
  var x = Math.floor(e.pageX/size);
  var y = Math.floor(e.pageY/size);
  drawSquare(x,y,color)
  fx.msg(JSON.stringify({x:x,y:y,color:color}));
});
