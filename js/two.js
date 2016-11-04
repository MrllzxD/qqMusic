/**
 * Created by Administrator on 2016/8/24 0024.
 */
var HEIGHT =250;
var WIDTH = 1024;
var radius = 8;
var MARGIN_LEFT =0;
var MARGIN_TOP = 0;

var time = "2016-11-28";
var array=[];
var colorA = ["#33e5b5","#0099cc","#aa66cc","#9933cc","#669900","#ffbb33","#ff8800","#ff4444","#cc000c",];
window.onload = function(){
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    canvas.width =WIDTH;
    canvas.height = HEIGHT;
    render(context);

    currTime = Date.parse(time)-Date.parse(new Date());

}

function render(cxt){

    var timer = setInterval(function(){
        cxt.clearRect(0,0,WIDTH,HEIGHT);
        var hours = Math.floor(currTime/1000/60/60%24);
        var minutes = Math.floor(currTime/1000/60%60);
        var seconds = Math.floor(currTime/1000%60);
        beginContext(MARGIN_LEFT,MARGIN_TOP,parseInt(hours/10),cxt);
        beginContext(MARGIN_LEFT+15*(radius+1),MARGIN_TOP,parseInt(hours%10),cxt);
        beginContext(MARGIN_LEFT+30*(radius+1),MARGIN_TOP,10,cxt);
        beginContext(MARGIN_LEFT+39*(radius+1),MARGIN_TOP,parseInt(minutes/10),cxt);
        beginContext(MARGIN_LEFT+54*(radius+1),MARGIN_TOP,parseInt(minutes%10),cxt);
        beginContext(MARGIN_LEFT+69*(radius+1),MARGIN_TOP,10,cxt);
        beginContext(MARGIN_LEFT+78*(radius+1),MARGIN_TOP,parseInt(seconds/10),cxt);
        beginContext(MARGIN_LEFT+93*(radius+1),MARGIN_TOP,parseInt(seconds%10),cxt);

       update(cxt);

    },50)


}
function update(cxt){
    var nextTime= Date.parse(time)-Date.parse(new Date());
    var nextSeconds = nextTime%60
    var currSeconds = currTime%60;
    if(nextSeconds!=currSeconds){
        if(parseInt(nextSeconds/10)!=parseInt(currSeconds/10)){
            addBall(10,7,parseInt(currSeconds/10));

        }
         currTime=nextTime;
    }
    actionBall(cxt);
}

function addBall(x,y,num){
    for(var i= 0;i<digit[num].length;i++){
        for(var j =0;j<digit[i].length;j++){
            if(digit[num][i][j]==1){
                 var ball ={x:MARGIN_LEFT+93*(radius+1)+j*2*(radius+1)+(radius+1),y:MARGIN_TOP+i*2*(radius+1)+(radius
                +1),g:1.5+Math.random(),vx:Math.pow(-1,Math.ceil(Math.random()*1000))*4,vy:-5,color:colorA[Math.floor(Math.random()*colorA.length)]}
                array.push(ball);
            }


        }
    }

}

    function actionBall(cxt){
        for(var i=0;i<array.length;i++) {
            array[i].x += array[i].vx;
            array[i].y += array[i].vy;
            array[i].vy += array[i].g;
            if (array[i].y >= HEIGHT - radius) {
                array[i].y = HEIGHT - radius;
                array[i].vy = -array[i].vy * 0.75;

            }
        }
        for(var k=0;k<array.length;k++) {
            cxt.fillStyle = array[k].color;
            cxt.beginPath();
            cxt.arc(array[k].x, array[k].y, radius, 0, 2 * Math.PI);
            cxt.closePath();
            cxt.fill();
        }

    }



function beginContext(x,y,num,cxt){
    cxt.fillStyle="rgb(0,102,153)";
    for( var i=0; i<digit[num].length;i++){
        for (var j=0;j<digit[num][i].length;j++){
            if(digit[num][i][j]==1){
                cxt.beginPath();
                cxt.arc(x+j*2*(radius+1)+(radius+1),y+i*2*(radius+1)+(radius
                    +1),radius,0,2*Math.PI);
                cxt.closePath();
                cxt.fill();

            }
        }
    }

}
