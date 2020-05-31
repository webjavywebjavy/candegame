var inicio = new ente(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0); inicio.dibujo=3; inicio.velocidad=80; inicio.vida=20; inicio.poder=10; inicio.h=40; inicio.w=70; inicio.x=0; inicio.y=0; inicio.fotograma=1; inicio.volumen=800; inicio.resolucion=800; 
var fondo = new ente(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0); fondo.dibujo=2; fondo.velocidad=80; fondo.vida=20; fondo.poder=10; fondo.h=40; fondo.w=70; fondo.x=0; fondo.y=0; fondo.fotograma=1; fondo.volumen=800;  fondo.resolucion=800; 
var fondo2 = new ente(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0); fondo2.dibujo=2; fondo2.velocidad=80; fondo2.vida=20; fondo2.poder=10; fondo2.h=40; fondo2.w=70; fondo2.x=800; fondo2.y=0; fondo2.fotograma=1; fondo2.volumen=800; fondo2.resolucion=800; 
var perdiste = new ente(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0); perdiste.dibujo=4; perdiste.velocidad=80; perdiste.vida=20; perdiste.poder=10; perdiste.h=40; perdiste.w=70; perdiste.x=0; perdiste.y=0; perdiste.fotograma=1; perdiste.volumen=800; perdiste.resolucion=800; 
var guerrero = new ente(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0); guerrero.dibujo=1; guerrero.velocidadmax=30; guerrero.vida=20; guerrero.poder=10; guerrero.h=40; guerrero.w=70; guerrero.fotograma=1; guerrero.volumen=150; guerrero.estado=0; guerrero.resolucion=100;  


var tubo1 = new ente(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0); tubo1.dibujo=5; tubo1.velocidad=80; tubo1.vida=20; tubo1.poder=10; tubo1.h=570; tubo1.w=50; tubo1.x=-100; tubo1.y=0; tubo1.fotograma=1; tubo1.volumen=800; tubo1.resolucion=800; 
var tubo2 = new ente(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0); tubo2.dibujo=6; tubo2.velocidad=80; tubo2.vida=20; tubo2.poder=10; tubo2.h=570; tubo2.w=50; tubo2.x=1300; tubo2.y=-500; tubo2.fotograma=1; tubo2.volumen=800; tubo2.resolucion=800;



var pantalla_juego =2;
var paralisis = 0;
var contador_segundos=0;
var contador_perdiste=0;
var aleatorio=1;

var velocidad_jugador=60;
var gravedad=20;
var velocidad_vuelo=20;
var velocidad_fondo=13;




var contador_pulsa=5;
var puntos=0;
var puntos_sub=0;

<!-- dibujo -->
var cordenadax_dibuja=0;
var cordenaday_dibuja=0;
<!-- /dibujo -->


<!-- contadores  -->
var contador1=0;
<!-- /contadores -->


<!-- control -->
var mousex=0;
var mousey=0;
var tecla_izquierda = 37;
var tecla_arriba = 38;
var tecla_derecha = 39;
var tecla_abajo = 40;
var tecla_a = 65;
var tecla_b = 66;
var tecla_c = 67;
var tecla_d = 68;
var tecla_e = 69;
var tecla_f = 70;
var tecla_g = 71;
var tecla_h = 72;
var tecla_i = 73;
var tecla_j = 74;
var tecla_k = 75;
var tecla_l = 76;
var tecla_m = 77;
var tecla_n = 78;
var tecla_o = 79;
var tecla_p = 80;
var tecla_q = 81;
var tecla_r = 82;
var tecla_s = 83;
var tecla_t = 84;
var tecla_u = 85;
var tecla_v = 86;
var tecla_w = 87;
var tecla_x = 88;
var tecla_y = 89;
var tecla_z = 90;
var tecla_enter = 13;
var tecla_espacio = 32;
var tecla_retroceso = 8;
var tecla_mayus = 16;
var tecla_control = 17;
<!-- /control -->



var tocar1; 
var sonido_musica1 = "sonidos/musica1.wav"; 


<!-- Imagenes -->

var imagen=new Array();
imagen[1] = new Image(); imagen[1].src = 'recursos/personaje.png';
imagen[2] = new Image(); imagen[2].src = 'recursos/fondo.png';
imagen[3] = new Image(); imagen[3].src = 'recursos/inicio.png';
imagen[4] = new Image(); imagen[4].src = 'recursos/perdiste.png';
imagen[5] = new Image(); imagen[5].src = 'recursos/tubo1.png';
imagen[6] = new Image(); imagen[6].src = 'recursos/tubo2.png';
imagen[7] = new Image(); imagen[7].src = 'recursos/7.png';
imagen[8] = new Image(); imagen[8].src = 'recursos/8.png';
imagen[9] = new Image(); imagen[9].src = 'recursos/9.png';
imagen[10] = new Image(); imagen[10].src = 'recursos/10.png';


<!-- /Imagenes -->