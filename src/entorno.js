//DIBUJO EN CANVAS
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var w = document.getElementById("myCanvas").offsetWidth;
var h = document.getElementById("myCanvas").offsetHeight;


//dibuja w ancho h alto con get elementbyid busca el elemento inicio y lo remplza con mas dibuja dentro dee ese elemento
var canonImageLoaded = false,canonImage2Loaded = false, torreImageLoaded = false, bombaImageLoaded = false, fondoImageLoaded = false;
//declaracion de variables temporales incluyendo los dos scores 
var objectSizes = 20;
var speed = 100;
var modifier = 100;
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
/* por definir
    //Sonido de Fondo
    var mainTheme = new Audio("sounds/main-theme.mp3");
    mainTheme.loop = true;
    mainTheme.volume = 0.5;
    mainTheme.play();
*/
/* por definir
    //sonido lanzamiento
    var lanzamiento = new Audio("sounds/lanzar.mp3");
    pokePick.volume = 0.8;
 */
/*
* Decide here if all the assets are ready to start updating
* @function
* @name assetsLoaded
*/
function assetsLoaded() {
    if (canonImage2Loaded == true && canonImageLoaded == true && torreImageLoaded == true && bombaImageLoaded == true && fondoImageLoaded == true) {
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
    Torre1.y = 150;
    //////////////////////////////////////////
    var Torre2 = new Object;
    Torre2.x = 100;
    Torre2.y = 350;
    //////////////////////////////////////////
    var Torre3 = new Object;
    Torre3.x = 200;
    Torre3.y = 350;
    //////////////////////////////////////////
    var Torre4 = new Object;
    Torre4.x = 300;
    Torre4.y = 350;
    //////////////////////////////////////////
    var Torre5 = new Object;
    Torre5.x = 400;
    Torre5.y = 350;
    //////////////////////////////////////////
    var Torre6 = new Object;
    Torre6.x = 500;
    Torre6.y = 170;
    //////////////////////////////////////////
    var Torre7 = new Object;
    Torre7.x = 600;
    Torre7.y = 350;
    //////////////////////////////////////////
    var Torre8 = new Object;
    Torre8.x = 700;
    Torre8.y = 190;
    //////////////////////////////////////////
    var Torre9 = new Object;
    Torre9.x = 800;
    Torre9.y = 170;
    //////////////////////////////////////////
    var Torre10 = new Object;
    Torre10.x = 900;
    Torre10.y = 190;
    //////////////////////////////////////////
    var Torre11 = new Object;
    Torre11.x = 1000;
    Torre11.y = 170;
    //////////////////////////////////////////
    var Torre12 = new Object;
    Torre12.x = 1100;
    Torre12.y = 170;
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
    ctx.drawImage(torreImage, Torre11.x, Torre11.y);
    ctx.drawImage(torreImage, Torre12.x, Torre12.y);
    /////////////////////////////////////////////////////////        
    //dibuja bomba 600 * 350
    var bomba = new Object;
    bomba.bx = 900;
    bomba.by = 150;
    ctx.drawImage(bombaImage, bomba.bx, bomba.by);

    //dibuja cañon  coordenadas de la imagen 
    var canon1 = new Object;
    canon1.x = 250;
    canon1.y = 200;
    canon1.spritePosition = 0;
    canon1.spriteItemDistance = 33;
   // canon1.x = Math.floor(Math.random() * 600) + 1;

    var canon2 = new Object;
    canon2.x = 0;
    canon2.y = 90;
    canon2.spritePosition = 0;
    canon2.spriteItemDistance = 33;
   // canon2.x = Math.floor(Math.random() * 600) + 1;
   var azar=Math.floor(Math.random(0,5)* 5) + 1;
   console.log(azar);

   switch(0,azar){       
    case 0:
    {
        
     canon1.x =Torre1.x;
     canon1.y=Torre1.y;
     console.log("0");


    } break;
    case 1:
    {
    canon1.x=Torre2.x;
     canon1.y=Torre2.y;
     console.log("1");

    }break;
    case 2:

    {
    canon1.x=Torre3.x;
     canon1.y=Torre3.y;
     console.log("2");

    }break;
    case 3:
    {
        canon1.x=Torre4.x;
     canon1.y=Torre4.y;
     console.log("3");

    }break;
    case 4:
    {
        canon1.x=Torre5.x;
     canon1.y=Torre5.y;
     console.log("4");

    }break;
    }
    switch(6,12){       
    case 6:
    {
     canon2.x=Torre9.x;
     canon2.y=Torre9.y;
     console.log("6");

    }break;
    case 7:
    {
        canon2.x=Torre9.x;
     canon2.y=Torre9.y;
     console.log("7");

    }break;
    case 8:
    {
        canon2.x=Torre9.x;
     canon2.y=Torre3.y;
     console.log("8");

    }break;
    case 9:
    {
        canon2.x=Torre10.x;
     canon2.y=Torre10.y;
     console.log("9");

    }break;
    case 10:
    {
        canon2.x=Torre10.x;
     canon2.y=Torre10.y;
     console.log("10");

    }break;
    }

    /////////////////////////////////////////////////
    ctx.drawImage(canonImage, canon1.x, canon1.x);
    ctx.drawImage(canonImage2, canon2.x, canon2.y);
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
    });

}

function board() {
    //DIBUJA SCORES EN LA PANTALLA 
    ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
    ctx.fillRect(w - 100, h - 70, 100, 70);
    ctx.font = "18px Arial";
    ctx.fillStyle = "rgba(255, 255, 255, 1)";
    ctx.fillText("SCORE #2:" + score2, w - 120, h - 390);
    ctx.font = "18px Arial";
    ctx.fillStyle = "rgba(255, 255, 255, 1)";
    ctx.fillText(score1 + "SCORE #1:" + score1, w - 1200, h - 390);
}