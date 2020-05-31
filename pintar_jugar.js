
function pintar_jugar()
{




<!-- pantalla1 -->

if (pantalla_juego==1)
{
	

ctx.fillStyle='#1750A6';
ctx.fillRect(0,0,juego.width,juego.height);

	ctx.font="16px Arial";
	ctx.fillStyle='#fff';
    ctx.fillText(pantalla_juego,40,147)		
	ctx.textAlign='left';	


fondo.dibuja(ctx);
fondo2.dibuja(ctx);
tubo1.dibuja(ctx);
tubo2.dibuja(ctx);
guerrero.dibuja(ctx);


	ctx.font="40px Arial";
	ctx.fillStyle='#111';
   	ctx.fillText('Ki:'+puntos,700,80)		

if (paralisis==1){perdiste.dibuja(ctx);}



}

<!-- /pantalla1 -->












<!-- pantalla2 -->

if (pantalla_juego==2)
{
	
ctx.fillStyle='#000440';
ctx.fillRect(0,0,juego.width,juego.height);
inicio.dibuja(ctx);
perdiste.dibuja(ctx);



}

<!-- /pantalla2 -->




















<!-- pantalla3 -->

if (pantalla_juego==3)
{
	



}

<!-- /pantalla3 -->












<!-- pantalla5 -->

if (pantalla_juego==5)
{
	



}

<!-- /pantalla5 -->








}
