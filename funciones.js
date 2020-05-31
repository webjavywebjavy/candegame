function ente (x,y,w,h,dibujo,fotograma,volumen,resolucion,animacion,vida,vidamax,velocidad,velocidadmax,poder,podermax,acciontipo,accionavance,estado)
{

	
	this.choque=function(rect)
	{
		if(rect!=null)
		{
		if (this.x<rect.x+rect.w && this.x+this.w>rect.x && this.y<rect.y+rect.h && this.y+this.h>rect.y){return(1);}
		else {return(0);}
		}
	}

	this.interseccion=function(rect)
	{
		if(rect!=null)
		{
		if (this.x<rect.x+rect.w && this.x+this.w>rect.x ){return(1);}
		else {return(0);}
		}
	}

	this.muere=function()
	{
		this.x = 1200;
	}

	this.nace=function(xxx,yyy)
	{
		this.vida=this.vidamax;
		this.x=xxx;
		this.y=yyy;
	}

	this.dibuja=function(ctx)
	{
		cordenadax_dibuja=(this.fotograma-1)*this.volumen;
		ctx.drawImage(imagen[this.dibujo], cordenadax_dibuja , cordenaday_dibuja , this.volumen, this.volumen, this.x, this.y, this.resolucion, this.resolucion);
	}

}




function  mover (velocidad,elevar)
{


guerrero.x=guerrero.x+velocidad;
guerrero.y=guerrero.y+elevar;


}



