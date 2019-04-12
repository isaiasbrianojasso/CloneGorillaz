//DIBUJO EN CANVAS
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var w = document.getElementById("myCanvas").offsetWidth;
var h = document.getElementById("myCanvas").offsetHeight;


//dibuja w ancho h alto con get elementbyid busca el elemento inicio y lo remplza con mas dibuja dentro dee ese elemento
var canonImageLoaded = false,canonImage2Loaded = false, torreImageLoaded = false, bombaImageLoaded = false,bombaImage2Loaded = false, fondoImageLoaded = false;
//declaracion de variables temporales incluyendo los dos scores 
var objectSizes = 20;
var score1 = 0;
var score2 = 0;
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
    //////////////////////////////////////////
    var Torre1 = new Object;
    Torre1.x = 0;
    Torre1.y = Math.random()*400;
    if(Torre1.y < 150)
    {
        Torre1.y=150;    
    }
    //console.log("Torre1: "+Torre1.y);
    //////////////////////////////////////////
    var Torre2 = new Object;
    Torre2.x = 100;
    Torre2.y = Math.random()*400;
    //console.log("Torre2: "+Torre2.y );
    if(Torre2.y < 150)
    {
        Torre2.y=150;    
    }
    //////////////////////////////////////////
    var Torre3 = new Object;
    Torre3.x = 200;
    Torre3.y = Math.random()*400;
    if(Torre3.y < 150)
    {
        Torre3.y=150;    
    }
    //console.log("Torre3: "+Torre3.y );

    //////////////////////////////////////////
    var Torre4 = new Object;
    Torre4.x = 300;
    Torre4.y = Math.random()*400;
    if(Torre4.y < 150)
    {
        Torre4.y=150;    
    }
    //console.log("Torre4: "+Torre4.y );

    //////////////////////////////////////////
    var Torre5 = new Object;
    Torre5.x = 400;
    Torre5.y = Math.random()*400;
    if(Torre5.y < 150)
    {
        Torre5.y=150;    
    }
    //console.log("Torre5: "+Torre5.y );

    //////////////////////////////////////////
    var Torre6 = new Object;
    Torre6.x = 500;
    Torre6.y = Math.random()*400;
    if(Torre6.y < 150)
    {
        Torre6.y=150;    
    }
    //console.log("Torre6: "+Torre6.y );

    //////////////////////////////////////////
    var Torre7 = new Object;
    Torre7.x = 600;
    Torre7.y = Math.random()*400;
    if(Torre7.y < 150)
    {
        Torre7.y=150;    
    }
    //console.log("Torre7: "+Torre7.y );

    //////////////////////////////////////////
    var Torre8 = new Object;
    Torre8.x = 700;
    Torre8.y = Math.random()*400;
    if(Torre8.y < 150)
    {
        Torre8.y=150;    
    }
    //console.log("Torre8: "+Torre8.y );

    //////////////////////////////////////////
    var Torre9 = new Object;
    Torre9.x = 800;
    Torre9.y = Math.random()*400;
    if(Torre9.y < 150)
    {
        Torre9.y=150;    
    }
    //console.log("Torre9: "+Torre9.y );
    //////////////////////////////////////////
    var Torre10 = new Object;
    Torre10.x = 900;
    Torre10.y = Math.random()*400;
    if(Torre10.y < 150)
    {
        Torre10.y=150;    
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
    var bomba2 = new Object;
    bomba2.bx = 0;
    bomba2.by = 0;
//vamos a selecionar una torre al azar para el cañon 1
    var azar=Math.floor(Math.random(0,5)* 4) + 1;
   // console.log("Azar: "+azar);
if(azar==1)
{
 canon2.x=Torre1.x-60;
 canon2.y=Torre1.y-100;
 bomba2.bx = Torre1.x+60;
 bomba2.by = Torre1.y-50;
 //console.log(canon2.y);
}
if(azar==2)
{
 canon2.x=Torre2.x-40;
 canon2.y=Torre2.y-80;
 bomba2.bx = Torre2.x+90;
 bomba2.by = Torre2.y-30;
 //console.log(canon2.y);
}
if(azar==3)
{
 canon2.x=Torre3.x-40;
 canon2.y=Torre3.y-80;
 bomba2.bx = Torre3.x+90;
 bomba2.by = Torre3.y-30;
 //console.log(canon2.y);

}
if(azar==4)
{
 canon2.x=Torre4.x-40;
 canon2.y=Torre4.y-80;
 bomba2.bx = Torre4.x+90;
 bomba2.by = Torre4.y-30;
 //console.log(canon2.y);
}
ctx.drawImage(canonImage2, canon2.x, canon2.y);
ctx.drawImage(bombaImage2, bomba2.bx, bomba2.by);

///////////////////////////////////CAÑON 1 ///////////////////////////
var canon1 = new Object;
var bomba = new Object;
bomba.bx = 0;
bomba.by = 0;

canon1.x = 0;//250
canon1.y = 0;//200
var azar2=Math.floor(Math.random(0,5)* 4) + 1;
//console.log("Azar2: "+azar2)

if(azar2==1)
{
 canon1.x=Torre7.x-40;
 canon1.y=Torre7.y-80;
 bomba.bx = Torre7.x+9;
 bomba.by = Torre7.y-30;
 //console.log("Torre7 Y:" + canon1.y);
 //console.log("Torre7 X:" + canon1.x);

}
if(azar2==2)
{
 canon1.x=Torre8.x-40;
 canon1.y=Torre8.y-80;
 bomba.bx = Torre8.x+9;
 bomba.by = Torre8.y-30;
 //console.log("Torre8 Y:" + canon1.y);
 //console.log("Torre8 X:" + canon1.x);

}
if(azar2==3)
{
 canon1.x=Torre9.x-40;
 canon1.y=Torre9.y-80;
 bomba.bx = Torre9.x+9;
 bomba.by = Torre9.y-30;
 //console.log("Torre9 y:" + canon1.y);
 //console.log("Torre9 X:" + canon1.x);


}
if(azar2==4)
{
 canon1.x=Torre10.x-40;
 canon1.y=Torre10.y-80;
 bomba.bx = Torre10.x+8; 
 bomba.by = Torre10.y-30;
 //console.log("Torre10 X:" + canon1.x);
 //console.log("Torre10 Y:" + canon1.y);
}
ctx.drawImage(canonImage, canon1.x, canon1.y);
ctx.drawImage(bombaImage, bomba.bx, bomba.by);








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