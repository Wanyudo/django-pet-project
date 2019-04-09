var c = document.getElementById("myFirstCanvas");
var ctx = c.getContext("2d");

//1 Create gradient
var grd = ctx.createLinearGradient(0, 0, c.width, 0);
grd.addColorStop(0, 'red');
grd.addColorStop(1, 'white');
//2 fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(0, 0, c.width, c.height);

// Draw line
ctx.moveTo(0, 0);
ctx.lineTo(c.width, c.height);
ctx.stroke();
//Draw circle
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();
//Draw text
ctx.font = '30px Arial';
ctx.fillText('New phone', c.width - c.width/1.2, c.height - (c.height/2));
//Stroke text
ctx.font = '20px Arial';
ctx.strokeText('Sometime...', c.width - c.width/1.2, c.height - (c.height/2) + 20);
//Radial gradient
grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
grd.addColorStop(0, "blue");
grd.addColorStop(1, "green");
ctx.fillStyle = grd;
ctx.fillRect(10, 10, 150, 80);
//Draw image
ctx.drawImage(document.getElementById('imagka'), 0, 0);