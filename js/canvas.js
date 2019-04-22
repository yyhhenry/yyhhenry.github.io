$(function(){
	window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
	let 成就={
		探索者:false,
		魔法阵:false,
		强迫症:false,
		暗杀者:false
	};
	function putmsg(text){
		let msgboxs=document.getElementById('msgboxs');
		let msgbox=document.createElement('div');
		msgboxs.append(msgbox);
		$(msgbox).addClass('noselect');
		$(msgbox).addClass('msgbox');
		$(msgbox).text(text);
		$(msgbox).slideDown();
		$(msgbox).click(function(){
			$(msgbox).slideUp();
			if(!成就.强迫症){
				成就.强迫症=true;
				putmsg('达成成就\"强迫症\"');
			}
		});
	}
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
	let maxParticles = 24;
	let particles = [];
	mouse = {};
	mouse.size = 200;
	mouse.x = mouse.tx = clientWidth/2;
	mouse.y = mouse.ty = clientHeight/2;
	let clearColor='rgba(0,0,0,0.025)';
	function random(min,max){
		return Math.random()*(max-min)+min;
	}
	function distance(x1,y1,x2,y2){
		return Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
	}
	let 刺杀=0;
	function Particle(){
		this.init=function(){
			this.lines=Math.round(random(5,8));
			this.angle=random(0,360);
			this.angleSpeed=random(-2,2)/1000;
			this.hue=random(0,360);
			this.hueSpeed=random(-50,50)/1000;
			this.size=this.maxSize=random(15,150);
			this.baseSpeed=random(0.5,1.5);
			if(Math.random()*(clientHeight+clientWidth)<clientHeight){
				this.x=Math.random()<0.5?-this.size:clientWidth+this.size;
				this.y=random(0,clientHeight);
			}else{
				this.x=random(0,clientWidth);
				this.y=Math.random()<0.5?-this.size:clientHeight+this.size;
			}
		}
		this.init();
		this.魔法阵成立=function(){
			for(let i=0;i<particles.length;i++){
				if(distance(this.x,this.y,particles[i].x,particles[i].y)>2){
					return false;
				}
			}
			return (this.size>this.maxSize/3*2);
		}
		this.draw=function(deltaPaintTime){
			const distanceFromMouse=distance(this.x,this.y,mouse.x,mouse.y);
			ctx.strokeStyle=`hsla(${Math.round(this.hue)},90%,50%,0.5)`;
			ctx.shadowColor=`hsla(${Math.round(this.hue)},100%,55%,0.5)`;
			ctx.shadowBlur=this.size*2;
			ctx.beginPath();
			this.angle+=this.angleSpeed*deltaPaintTime;
			this.hue+=this.hueSpeed*deltaPaintTime;
			ctx.moveTo(this.x+this.size*Math.cos(this.angle),this.y+this.size*Math.sin(this.angle));
			const angle=2*Math.PI/this.lines;
			for(let i=0;i<this.lines;i++){
				ctx.lineTo(this.x+this.size*Math.cos(this.angle+i*angle),this.y+this.size*Math.sin(this.angle+i*angle));
			}
			ctx.closePath();
			ctx.lineWidth=3;
			ctx.stroke();
			if(distanceFromMouse>15||成就.魔法阵){
				this.speed=0.1/distanceFromMouse;
				if(成就.魔法阵){
					this.speed*=this.baseSpeed;
					if(Math.abs(this.x-mouse.x)<1&&Math.abs(this.y-mouse.y)<1){
						this.baseSpeed=random(0.5,1.5);
					}
				}
				this.x+=(mouse.x-this.x)*this.speed*deltaPaintTime;
				this.y+=(mouse.y-this.y)*this.speed*deltaPaintTime;
				if(distanceFromMouse<mouse.size&&!成就.魔法阵){
					this.size-=this.size*this.speed*deltaPaintTime;
					if(this.size<2)this.size=2;
				}else{
					this.size+=(this.maxSize-this.size)*this.speed*deltaPaintTime;
				}
			}else{
				if(this.size>this.maxSize/2){
					刺杀++;
					if(刺杀>10&&!成就.暗杀者){
						成就.暗杀者=true;
						putmsg('达成成就\"暗杀者\"');
					}
				}
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
		particles.push(new Particle());
	}
	$(window).dblclick(function(){
		if(!成就.探索者){
			成就.探索者=true;
			putmsg('达成成就\"探索者\"');
		}
		$('#proScr').slideToggle();
	});
	let stopPaint=false;
	document.addEventListener('visibilitychange',function(){
		if(document.visibilityState=='hidden') {
			stopPaint=true;
		}
	});
	let lastPaintTime=new Date().getTime();
	function anim(){
		const thisPaintTime=new Date().getTime();
		if(stopPaint){
			lastPaintTime=thisPaintTime;
			stopPaint=false;
		}
		const deltaPaintTime=thisPaintTime-lastPaintTime;
		ctx.fillStyle=clearColor;
		ctx.shadowColor=clearColor;
		ctx.shadowBlur=0;
		ctx.fillRect(0,0,clientWidth,clientHeight);
		ctx.fillStyle='rgba(255,255,255,1)';
		mouse.move(deltaPaintTime);
		ctx.fillRect(mouse.x,mouse.y-10,1,20);
		ctx.fillRect(mouse.x-10,mouse.y,20,1);
		for(let i=0;i<particles.length;i++){
			particles[i].draw(deltaPaintTime);
		}
		if(!成就.魔法阵){
			let tot=true;
			for(let i=0;i<particles.length;i++){
				if(!particles[i].魔法阵成立()){
					tot=false;
				}
			}
			if(tot){
				成就.魔法阵=true;
				putmsg('达成成就\"魔法阵\"');
				putmsg('进入不灭模式');
			}
		}
		requestAnimationFrame(anim);
		lastPaintTime=thisPaintTime;
	}
	anim();
});