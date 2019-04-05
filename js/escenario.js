
//DIBUJO EN CANVAS
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width / 2;
var y = canvas.height - 30;
var dx = 2;
var dy = -2;
console.log("frames:" + draw);
function dibujaEscenario() {
    var sol = new Object();
    sol.color = "yellow";
    sol.x = 612;
    sol.y = 40;
    sol.radio = 30;
    ctx.beginPath();
    ctx.arc(sol.x, sol.y, sol.radio, 0, Math.PI * 2, false);
    ctx.fillStyle = sol.color;
    ctx.fill();
    ctx.closePath();

    var torre1 = new Object();
    torre1.color = "#BFBFCE"
    torre1.x = 0;
    torre1.y = 260;
    torre1.ancho = 120;
    torre1.alto = 220;
    ctx.beginPath();
    ctx.rect(torre1.x, torre1.y, torre1.ancho, torre1.alto);
    ctx.fillStyle = torre1.color;
    ctx.fill();
    ctx.closePath();

    var torre2 = new Object();
    torre2.color = "green"
    torre2.x = 120;
    torre2.y = 260;
    torre2.ancho = 120;
    torre2.alto = 220;
    ctx.beginPath();
    ctx.rect(torre2.x, torre2.y, torre2.ancho, torre2.alto);
    ctx.fillStyle = torre2.color;
    ctx.fill();
    ctx.closePath();

    //los valores en x y en y estan en negativo 

    var torre3 = new Object();
    torre3.color = "red"
    torre3.x = 240;
    torre3.y = 260;
    torre3.ancho = 120;
    torre3.alto = 220;
    ctx.beginPath();
    ctx.rect(torre3.x, torre3.y, torre3.ancho, torre3.alto);
    ctx.fillStyle = torre3.color;
    ctx.fill();
    ctx.closePath();

}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dibujaEscenario();
    x += dx;
    y += dy;


    /////////////////////////////DATOS  PLAYER 1/////////////////////////
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
    ///////////////////////////// DATOS P2/////////////////////////
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
    /////////////////////////////FIN/////////////////////////
}
setInterval(draw, 10);