<!-- Inicio -->

window.addEventListener('load',init,false);
var juego=null;
var ctx=null;
var presiona=[];
var lastPress = null;

<!-- /Inicio -->









<!-- Disparador -->
function init()
{

tocar1 = document.getElementById("tocadisco1");
    juego=document.getElementById('iijuego');
    ctx=juego.getContext('2d');   

        juego.width=800;
        juego.height=600;
        juego.style.position='fixed';
        juego.style.top='0';
        juego.style.left='0';
        juego.style.width='100%';
        juego.style.height='100%';
    
    enableInputs();
    bucle();
    repintar();
}


function bucle()
{
    setTimeout(bucle,50);
    jugar();
}


function repintar()
{
    requestAnimationFrame(repintar);
    pintar_jugar(ctx);
}





<!-- /Disparador -->












<!-- iniciar control -->

	function enableInputs()
	{
      	juego.addEventListener('mousedown',function(evt){lastPress=evt.which; },false);
      	juego.addEventListener('mouseup',function(evt){lastPress=0; },false);
    	}

	document.addEventListener('mousemove',function(evt)
	{
      	mousex=evt.pageX-juego.offsetLeft;
      	mousey=evt.pageY-juego.offsetTop;
    	},false);
	document.addEventListener('keydown',function(evt){ lastPress=evt.keyCode;  presiona[evt.keyCode]=true; },false);
	document.addEventListener('keyup',function(evt){  presiona[evt.keyCode]=false; },false);



<!-- /iniciar control -->





window.requestAnimationFrame=(function(){
return window.requestAnimationFrame ||
window.webkitRequestAnimationFrame ||
window.mozRequestAnimationFrame ||
function(callback){window.setTimeout(callback,17);}; })();
