let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.moveTo(100, 0);
ctx.lineTo(120, 75);
ctx.lineTo(200, 80);
ctx.lineTo(140, 130);
ctx.lineTo(160, 205);
ctx.lineTo(100, 160);
ctx.lineTo(40, 205);
ctx.lineTo(60, 130);
ctx.lineTo(0, 80);
ctx.lineTo(80, 75);
ctx.closePath();
ctx.fill();