function jugar()
{










<!-- pantalla 1 -->
if (pantalla_juego==1)
{


<!-- Pausas y Triunfos  -->

contador_segundos = contador_segundos + 1;
if (contador_segundos == 30) { contador_segundos = 1; }


aleatorio=Math . floor ( Math . random ( )  *  51 );


<!-- /Pausas y Triunfos -->








<!-- control -->



if (paralisis==0)
{


	if ( presiona[tecla_espacio] && contador_pulsa>0 )
	{
	mover ( 0, 0-velocidad_jugador); contador_pulsa=contador_pulsa-1;
	}
	mover ( 0, gravedad);

	if (guerrero.y<-100){guerrero.y=-100;}
	
	if (presiona[tecla_espacio]==0){contador_pulsa=8;}


	fondo.x=fondo.x-velocidad_fondo;
	fondo2.x=fondo2.x-velocidad_fondo;

	if (fondo.x<-800){fondo.x=fondo.x+1600}
	if (fondo2.x<-800){fondo2.x=fondo2.x+1600}

	if (guerrero.y>410){paralisis=1; contador_perdiste=10; }
	if (guerrero.choque(tubo1)==1){paralisis=1; contador_perdiste=10;}
	if (guerrero.choque(tubo2)==1){paralisis=1; contador_perdiste=10;}
	
	tubo1.x=tubo1.x-velocidad_vuelo;
	tubo2.x=tubo2.x-velocidad_vuelo;
	
	aleatorio=Math . floor ( Math . random ( )  *  51 );
	
	if (tubo1.x<-200){tubo1.x=800; tubo1.y=aleatorio*8 + 100;}
	if (tubo2.x<-200){tubo2.x=800; tubo2.y=aleatorio*8 -600;}
	
	puntos_sub=puntos_sub+1;
	if (puntos_sub==50){puntos_sub=0; puntos=puntos+1;}
	
}

else
	
{
	if (presiona[tecla_espacio]==1 && contador_perdiste==0){paralisis=0; guerrero.y=100; tubo1.x=-100; tubo2.x=1500; tubo2.y=-300;  puntos_sub=0; puntos=0;}	
	if (contador_perdiste>0){contador_perdiste=contador_perdiste-1;}
}




<!-- /control  -->














}
<!-- /pantalla 1 -->













<!-- pantalla 2 -->
if (pantalla_juego==2)
{








<!-- control -->

if ( presiona[tecla_espacio] )
{
guerrero.x=200; guerrero.y=300; guerrero.vida=guerrero.vidamax; guerrero.velocidad=guerrero.velocidadmax; guerrero.accion=1; paralisis=0; guerrero.fotograma=1; guerrero.dibujo=1; 
tocar1.src = sonido_musica1; tocar1.play(); 
pantalla_juego=1;



}
<!-- /control  -->








}
<!-- /pantalla 2 -->












}