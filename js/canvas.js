$(function(){
	window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
	let canvas=document.getElementById('canvas');
	let clientWidth;
	let clientHeight;
	function onresize(){
		clientWidth=$(window).width();
		clientHeight=$(window).height();
		canvas.width=clientWidth;
		canvas.height=clientHeight;
	}
	onresize();
	let ctx = canvas.getContext('2d');
	let maxParticles = 30;
	let particles = [];
	let hue = 183;
	let mouse = {};
	mouse.size = 200;
	mouse.x = mouse.tx = clientWidth/2;
	mouse.y = mouse.ty = clientHeight/2;
	let clearColor='rgba(0,0,0,0.2)';
	function random(min,max){
		return Math.random()*(max-min)+min;
	}
	function distance(x1,y1,x2,y2){
		return Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
	}
	function Particle(){
		this.init=function(){
			this.size=this.origSize=random(10,100);
			if(Math.random()*(clientHeight+clientWidth)<clientHeight){
				this.x=Math.random()<0.5?-this.size:clientWidth+this.size;
				this.y=random(0,clientHeight);
			}else{
				this.x=random(0,clientWidth);
				this.y=Math.random()<0.5?-this.size:clientHeight+this.size;
			}
			this.speed=random(0.0001,0.0003);
		}
		this.init();
		this.draw=function(deltaPaintTime){
			const distanceFromMouse=distance(this.x,this.y,mouse.x,mouse.y);
			ctx.strokeStyle=`hsla(${Math.round(hue)},90%,50%,1)`;
			ctx.shadowColor=`hsla(${Math.round(hue)},100%,55%,1)`;
			ctx.shadowBlur=this.size*2;
			ctx.beginPath();
			ctx.moveTo(this.x+this.size*Math.cos(0),this.y+this.size*Math.sin(0));
			const angle=Math.PI/3;
			for(let i=0;i<6;i++){
				ctx.lineTo(this.x+this.size*Math.cos(i*angle),this.y+this.size*Math.sin(i*angle));
			}
			ctx.closePath();
			ctx.lineWidth=3;
			ctx.stroke();
			if(distanceFromMouse>20){
				this.speed=0.1/distanceFromMouse;
				this.x+=(mouse.x-this.x)*this.speed*deltaPaintTime;
				this.y+=(mouse.y-this.y)*this.speed*deltaPaintTime;
				if(distanceFromMouse<mouse.size){
					this.size-=this.size*this.speed*deltaPaintTime;
					this.speed+=0.0001*deltaPaintTime;
				}else{
					this.size+=(this.origSize-this.size)*this.speed*deltaPaintTime;
				}
			}else{
				this.init();
			}
		}
	}
	mouse.move = function(deltaPaintTime){
		const speed=deltaPaintTime/250;
		mouse.x+=(mouse.tx-mouse.x)*speed;
		mouse.y+=(mouse.ty-mouse.y)*speed;
	};
	mouse.touches=function(e) {
		const touches=e.touches;
		if(touches){
			mouse.tx=touches[0].clientX;
			mouse.ty=touches[0].clientY;
		}else{
			mouse.tx=e.clientX;
			mouse.ty=e.clientY;
		}
	};
	window.addEventListener("mousemove", mouse.touches);
	window.addEventListener("touchstart", mouse.touches);
	window.addEventListener("touchmove", mouse.touches);
	window.addEventListener("resize", onresize);
	for(let i=0;i<maxParticles;i++){
		setTimeout(function(){
			particles.push(new Particle());
		}, i * 50);
	}
	let lastPaintTime=new Date().getTime();
	function anim(){
		const thisPaintTime=new Date().getTime();
		const deltaPaintTime=thisPaintTime-lastPaintTime;
		ctx.fillStyle=clearColor;
		ctx.shadowColor=clearColor;
		ctx.shadowBlur=0;
		ctx.fillRect(0,0,clientWidth,clientHeight);
		mouse.move(deltaPaintTime);
		for(let i=0;i<particles.length;i++){
			particles[i].draw(deltaPaintTime);
		}
		hue+=deltaPaintTime/30;
		requestAnimationFrame(anim);
		lastPaintTime=thisPaintTime;
	}
	anim();
});