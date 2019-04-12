//DIBUJO EN CANVAS
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var w = document.getElementById("myCanvas").offsetWidth;
var h = document.getElementById("myCanvas").offsetHeight;


//dibuja w ancho h alto con get elementbyid busca el elemento inicio y lo remplza con mas dibuja dentro dee ese elemento
var canonImageLoaded = false,canonImage2Loaded = false, torreImageLoaded = false, bombaImageLoaded = false,bombaImage2Loaded = false, fondoImageLoaded = false;
//declaracion de variables temporales incluyendo los dos scores 
var objectSizes = 20;
var vi=50.0;
var angi=45.0;
var g=9.8;
var vy=0;
var vx=0;
var t=0;
var h=0;
var ai=0;
var score1 = 0;
var score2 = 0;
var b1x=0;
var b1y=0;
var b2x=0;
var b2y=0;
var fx=0;
var fy=0;
var t1x=0;
var t2x=0;
var t3x=0;
var t4x=0;
var t5x=0;
var t6x=0;
var t7x=0;
var t8x=0;
var t9x=0;
var t10x=0;
var t1y=0;
var t2y=0;
var t3y=0;
var t4y=0;
var t5y=0;
var t6y=0;
var t7y=0;
var t8y=0;
var t9y=0;
var t10y=0;
var c1x=0;
var c1y=0;
var c2x=0;
var c2y=0;
//cargamos la imagen del cañon 
//cañon PLAYER 1
var canonImage = new Image();
canonImage.onload = function () {
    canonImageLoaded = true;
    assetsLoaded();
};
canonImage.src = "assets/img/canon.png";
//cargamos la imagen del cañon 
//cañon PLAYER 2
var canonImage2 = new Image();
canonImage2.onload = function () {
    canonImage2Loaded = true;
    assetsLoaded();
};
canonImage2.src = "assets/img/canon2.png";

// CARGAR IMAGEN Torres  imagen
var torreImage = new Image();
torreImage.onload = function () {
    torreImageLoaded = true;
    assetsLoaded();
};
torreImage.src = "assets/img/torres.png";
//CARGAR IMAGEN Fondo imagen
var fondoImage = new Image();
fondoImage.onload = function () {
    fondoImageLoaded = true;
    assetsLoaded();
};
fondoImage.src = "assets/img/fondo.jpg";
// CARGAR IMAGEN Bomba imagen
var bombaImage = new Image();
bombaImage.onload = function () {
    bombaImageLoaded = true;
    assetsLoaded();
};
bombaImage.src = "assets/img/bomba.png";

// CARGAR IMAGEN Bomba imagen
var bombaImage2 = new Image();
bombaImage2.onload = function () {
    bombaImage2Loaded = true;
    assetsLoaded();
};
bombaImage2.src = "assets/img/bomba.png";

    //Sonido de Fondo
    var mainTheme = new Audio("sonidofondo/main-theme.m4a");
    mainTheme.loop = true;
    mainTheme.volume = 0.3;
    mainTheme.play();

    //sonido lanzamiento
    var lanzamiento = new Audio("sonidofondo/cañon.m4a");
    lanzamiento.volume = 0.8;

 
/*
* Decide here if all the assets are ready to start updating
* @function
* @name assetsLoaded
*/
function assetsLoaded() {
    if (canonImage2Loaded == true && canonImageLoaded == true && torreImageLoaded == true && bombaImageLoaded == true && bombaImage2Loaded == true && fondoImageLoaded == true) {
        update();
    }
}

// AQUI DIBUJAMOS
function update() {
    //OBJETOS TORRES de izquierda a derecha
    var fondo = new Object;
    fondo.x = 0;
    fondo.y = 0;
    fx=fondo.x;
    fy=fondo.y;
    //////////////////////////////////////////
    var Torre1 = new Object;
    Torre1.x = 0;
    t1x=Torre1.x;
    Torre1.y = Math.random()*400;
    t1y=Torre1.y;
    if(Torre1.y < 150)
    {
        Torre1.y=150; 
        t1y=Torre1.y;   
    }
    //console.log("Torre1: "+Torre1.y);
    //////////////////////////////////////////
    var Torre2 = new Object;
    Torre2.x = 100;
    t2x=Torre2.x;
    Torre2.y = Math.random()*400;
    t2y=Torre2.y;
    //console.log("Torre2: "+Torre2.y );
    if(Torre2.y < 150)
    {
        Torre2.y=150;
        t2y=Torre2.y;   
    }
    //////////////////////////////////////////
    var Torre3 = new Object;
    Torre3.x = 200;
    t3x=Torre3.x;
    Torre3.y = Math.random()*400;
    t3y=Torre3.y;
    if(Torre3.y < 150)
    {
        Torre3.y=150;
        t3y=Torre3.y;    
    }
    //console.log("Torre3: "+Torre3.y );

    //////////////////////////////////////////
    var Torre4 = new Object;
    Torre4.x = 300;
    t4x=Torre4.x;
    Torre4.y = Math.random()*400;
    t4y=Torre4.y;
    if(Torre4.y < 150)
    {
        Torre4.y=150; 
        t4y=Torre4.y;   
    }
    //console.log("Torre4: "+Torre4.y );

    //////////////////////////////////////////
    var Torre5 = new Object;
    Torre5.x = 400;
    t5x=Torre5.x;
    Torre5.y = Math.random()*400;
    t5y=Torre5.y;
    if(Torre5.y < 150)
    {
        Torre5.y=150;
        t5y=Torre5.y;    
    }
    //console.log("Torre5: "+Torre5.y );

    //////////////////////////////////////////
    var Torre6 = new Object;
    Torre6.x = 500;
    t6x=Torre6.x;
    Torre6.y = Math.random()*400;
    t6y=Torre6.y;
    if(Torre6.y < 150)
    {
        Torre6.y=150; 
        t6y=Torre6.y;   
    }
    //console.log("Torre6: "+Torre6.y );

    //////////////////////////////////////////
    var Torre7 = new Object;
    Torre7.x = 600;
    t7x=Torre7.x;
    Torre7.y = Math.random()*400;
    t7y=Torre7.y;
    if(Torre7.y < 150)
    {
        Torre7.y=150; 
        t7y=Torre7.y;   
    }
    //console.log("Torre7: "+Torre7.y );

    //////////////////////////////////////////
    var Torre8 = new Object;
    Torre8.x = 700;
    t8x=Torre8.x;
    Torre8.y = Math.random()*400;
    t8y=Torre8.y;
    if(Torre8.y < 150)
    {
        Torre8.y=150;
        t8y=Torre8.y;    
    }
    //console.log("Torre8: "+Torre8.y );

    //////////////////////////////////////////
    var Torre9 = new Object;
    Torre9.x = 800;
    t9x=Torre9.x;
    Torre9.y = Math.random()*400;
    t9y=Torre9.y;
    if(Torre9.y < 150)
    {
        Torre9.y=150;
        t9y=Torre9.y;    
    }
    //console.log("Torre9: "+Torre9.y );
    //////////////////////////////////////////
    var Torre10 = new Object;
    Torre10.x = 900;
    t10x=Torre10.x;
    Torre10.y = Math.random()*400;
    t10y=Torre10.y;
    if(Torre10.y < 150)
    {
        Torre10.y=150; 
        t10y=Torre10.y;   
    }
    //console.log("Torre10: "+Torre10.y );
    /////////////////////////////////////////////////////////
    //agregar fondo de imagen
    ctx.drawImage(fondoImage, fondo.x, fondo.y);
    ctx.drawImage(torreImage, Torre1.x, Torre1.y);
    ctx.drawImage(torreImage, Torre2.x, Torre2.y);
    ctx.drawImage(torreImage, Torre3.x, Torre3.y);
    ctx.drawImage(torreImage, Torre4.x, Torre4.y);
    ctx.drawImage(torreImage, Torre5.x, Torre5.y);
    ctx.drawImage(torreImage, Torre6.x, Torre6.y);
    ctx.drawImage(torreImage, Torre7.x, Torre7.y);
    ctx.drawImage(torreImage, Torre8.x, Torre8.y);
    ctx.drawImage(torreImage, Torre9.x, Torre9.y);
    ctx.drawImage(torreImage, Torre10.x, Torre10.y);
///////////////////////////////////CAÑON 2 ///////////////////////////
    var canon2 = new Object;
    canon2.x = 0;//0
    canon2.y = 0;//90
    //c2x=canon2.x;
    //c2y=canon2.y;
    var bomba2 = new Object;
    bomba2.bx = 0;
    bomba2.by = 0;
    //b2x=bomba2.bx;
    //b2y=bomba2.by;
//vamos a selecionar una torre al azar para el cañon 1
    var azar=Math.floor(Math.random(0,5)* 4) + 1;
   // console.log("Azar: "+azar);
if(azar==1)
{
 canon2.x=Torre1.x-60;
 canon2.y=Torre1.y-100;
 c2x=canon2.x;
 c2y=canon2.y;
 bomba2.bx = Torre1.x+60;
 bomba2.by = Torre1.y-50;
 b2x=bomba2.bx;
 b2y=bomba2.by;
 //console.log(canon2.y);
}
if(azar==2)
{
 canon2.x=Torre2.x-40;
 canon2.y=Torre2.y-80;
 c2x=canon2.x;
 c2y=canon2.y;
 bomba2.bx = Torre2.x+90;
 bomba2.by = Torre2.y-30;
 b2x=bomba2.bx;
 b2y=bomba2.by;
 //console.log(canon2.y);
}
if(azar==3)
{
 canon2.x=Torre3.x-40;
 canon2.y=Torre3.y-80;
 c2x=canon2.x;
 c2y=canon2.y;
 bomba2.bx = Torre3.x+90;
 bomba2.by = Torre3.y-30;
 b2x=bomba2.bx;
 b2y=bomba2.by;
 //console.log(canon2.y);

}
if(azar==4)
{
 canon2.x=Torre4.x-40;
 canon2.y=Torre4.y-80;
 c2x=canon2.x;
 c2y=canon2.y;
 bomba2.bx = Torre4.x+90;
 bomba2.by = Torre4.y-30;
 b2x=bomba2.bx;
 b2y=bomba2.by;
 //console.log(canon2.y);
}
ctx.drawImage(canonImage2, canon2.x, canon2.y);
//ctx.drawImage(bombaImage2, bomba2.bx, bomba2.by);

///////////////////////////////////CAÑON 1 ///////////////////////////
var canon1 = new Object;
var bomba = new Object;
bomba.bx = 0;
bomba.by = 0;
b1x=bomba.bx;
b1y=bomba.by;

canon1.x = 0;//250
canon1.y = 0;//200
c1x=canon1.x;
c1y=canon1.y;

var azar2=Math.floor(Math.random(0,5)* 4) + 1;
//console.log("Azar2: "+azar2)

if(azar2==1)
{
 canon1.x=Torre7.x-40;
 canon1.y=Torre7.y-80;
 c1x=canon1.x;
 c1y=canon1.y;
 bomba.bx = Torre7.x+9;
 bomba.by = Torre7.y-30;
 b1x=bomba.bx;
b1y=bomba.by;
 //console.log("Torre7 Y:" + canon1.y);
 //console.log("Torre7 X:" + canon1.x);

}
if(azar2==2)
{
 canon1.x=Torre8.x-40;
 canon1.y=Torre8.y-80;
 c1x=canon1.x;
 c1y=canon1.y;
 bomba.bx = Torre8.x+9;
 bomba.by = Torre8.y-30;
 b1x=bomba.bx;
b1y=bomba.by;
 //console.log("Torre8 Y:" + canon1.y);
 //console.log("Torre8 X:" + canon1.x);

}
if(azar2==3)
{
 canon1.x=Torre9.x-40;
 canon1.y=Torre9.y-80;
 c1x=canon1.x;
 c1y=canon1.y;
 bomba.bx = Torre9.x+9;
 bomba.by = Torre9.y-30;
 b1x=bomba.bx;
b1y=bomba.by;
 //console.log("Torre9 y:" + canon1.y);
 //console.log("Torre9 X:" + canon1.x);


}
if(azar2==4)
{
 canon1.x=Torre10.x-40;
 canon1.y=Torre10.y-80;
 c1x=canon1.x;
 c1y=canon1.y;
 bomba.bx = Torre10.x+8; 
 bomba.by = Torre10.y-30;
 b1x=bomba.bx;
b1y=bomba.by;
 //console.log("Torre10 X:" + canon1.x);
 //console.log("Torre10 Y:" + canon1.y);
}
ctx.drawImage(canonImage, canon1.x, canon1.y);
//ctx.drawImage(bombaImage, bomba.bx, bomba.by);








    //////////////////////////////////////////////////
    //generador de fondo¡¡
    board();
    //AQUI PONEMOS EL ANGULO Y VELOCIDAD DE LA BOMBA p1_angulo ANGULO PLAYER 1   p1_vel VELOCIDAD PLAYER 1
    $("input[name=p1_angulo]").change(function () {
        var p1_angulo = $('input[name=p1_angulo]').val();
        var p1_angulo = ($("#p1_angulo").val());
        console.log(p1_angulo);
    });
    $("input[name=p1_vel]").change(function () {
        var p1_vel = $('input[name=p1_vel]').val();
        var p1_vel = ($("#p1_vel").val());
        console.log(p1_vel);
        lanzamiento.play();

    });
    //AQUI PONEMOS EL ANGULO Y VELOCIDAD DE LA BOMBA p2_angulo ANGULO PLAYER 2   p2_vel VELOCIDAD PLAYER 2
    $("input[name=p2_angulo]").change(function () {
        var p2_angulo = $('input[name=p2_angulo]').val();
        var p2_angulo = ($("#p2_angulo").val());
        console.log(p2_angulo);
    });
    $("input[name=p2_vel]").change(function () {
        var p2_vel = $('input[name=p2_vel]').val();
        var p2_vel = ($("#p2_vel").val());
        console.log(p2_vel);
        lanzamiento.play();
    });
}

function board() {
    //DIBUJA SCORES EN LA PANTALLA 
    ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
    ctx.fillRect(w - 100, h - 70, 100, 70);
    ctx.font = "18px Arial";
    ctx.fillStyle = "rgba(255, 255, 255, 1)";
    ctx.fillText("SCORE #2:" + score, w - 120, h - 390);
    ctx.font = "18px Arial";
    ctx.fillStyle = "rgba(255, 255, 255, 1)";
    ctx.fillText("SCORE #1:" + score, w - 1200, h - 390);
}



function init(){
    //alert("llego a init");
     
    setInterval('run()',500);

    }

    function run(){
        //alert("run");
        //b2x=b2x+5;
        ctx.clearRect(0, 0, w, h);
        ctx.drawImage(fondoImage, fx, fy);
        ctx.drawImage(torreImage, t1x, t1y);
        ctx.drawImage(torreImage, t2x, t2y);
        ctx.drawImage(torreImage, t3x, t3y);
        ctx.drawImage(torreImage, t4x, t4y);
        ctx.drawImage(torreImage, t5x, t5y);
        ctx.drawImage(torreImage, t6x, t6y);
        ctx.drawImage(torreImage, t7x, t7y);
        ctx.drawImage(torreImage, t8x, t8y);
        ctx.drawImage(torreImage, t9x, t9y);
        ctx.drawImage(torreImage, t10x, t10y);
        ctx.drawImage(canonImage2, c2x, c2y);
        //ctx.drawImage(bombaImage2, b2x, b2y);
        ctx.drawImage(canonImage, c1x, c1y);

        //Aqui se crean todas las formulas para la obtencion de coordenadas x,y para tiro parabolico.
        /*gra=((parseFloat(angi)*Math.PI)/180); */

       b2x=b2x+5;
       b1x=b1x-5;

         ctx.drawImage(bombaImage2, b2x, b2y);
         ctx.drawImage(bombaImage, b1x, b1y);
    }



    