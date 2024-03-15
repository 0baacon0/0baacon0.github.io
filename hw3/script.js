// 定義變數
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let x=100,y=220,x2=600,y2=200,
 dx=7,dy=2,dx2=2,dy2=4,m=1,m2=4,
r=70,r2=100,color="#0095DD",color2="#f9b80a",
c1=0,c2=0,a=0,a2=0;

// 畫圓形
function drawBall(x, y, r, color)
{
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2); // arc(圓心x, 圓心y, 半徑, 起始角, 結束角)
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(x2, y2, r2, 0, Math.PI * 2);
    ctx.fillStyle = color2;
    ctx.fill();
    ctx.closePath();
}

// 更新畫布
function draw()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    x = x + dx;
    x2 = x2 + dx2;
    y = y + dy;
    y2 = y2 + dy2;
if(y>=600-r){dy=-dy;c1=1;}
else if(y<=r){dy=-dy;c1=1;}

if(x>=800-r){dx=-dx;c1=1;}
else if(x<=r){dx=-dx;c1=1;}

if(c1==1){color="#"+Math.floor(Math.random()*16777215).toString(16);
c1=0;}

if(y2>=600-r2){dy2=-dy2;c2=1;}
else if(y2<=r2){dy2=-dy2;c2=1;}

if(x2>=800-r2){dx2=-dx2;c2=1;}
else if(x2<=r2){dx2=-dx2;c2=1;}

if(c2==1){color2="#"+Math.floor(Math.random()*16777215).toString(16);
c2=0;}
   


if((x-x2)*(x-x2)+(y-y2)*(y-y2)<(r+r2)*(r+r2))
{a=dx; a2=dy;

c1=1;c2=1;
dx=dx2;  dx2=a;
dy=dy2;  dy2=a2;
}

    drawBall(x, y, r, color);
    requestAnimationFrame(draw);
}
draw();
