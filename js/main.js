let CanvasButton;
let choosePage;
CanvasButton=function(){
	let thisCanvasButton=this;
	let canvas;
	let text;
	let font;
	let textColor;
	let backgroundColor;
	let x;
	let y;
	let width;
	let height;
	this.init=function(_canvas,_text,_font,_textColor,_backgroundColor,_x,_y,_width,_height){
		canvas=_canvas;
		text=_text;
		font=_font;
		textColor=_textColor;
		backgroundColor=_backgroundColor;
		x=_x;
		y=_y;
		width=_width;
		height=_height;
		return this;
	}
	this.setText=function(newText){
		text=newText;
	}
	this.draw=function(mouse){
		let ctx=canvas.getContext('2d');
		ctx.fillStyle=backgroundColor;
		ctx.fillRect(x,y,width,height);
		thisCanvasButton.hit(mouse,function(){
			ctx.fillStyle='rgba(128,128,128,0.3)';
			ctx.fillRect(x,y,width,height);
		});
		ctx.fillStyle=textColor;
		ctx.font=font;
		ctx.textAlign='center';
		ctx.textBaseline='middle';
		ctx.fillText(text,x+width/2,y+height/2);
	}
	this.hit=function(mouse,f){
		if(mouse.x>=x&&mouse.x<x+width&&mouse.y>=y&&mouse.y<y+height)f();
	}
}

choosePage=function(){
	let thisChoosePage=this;
	let canvas;
	let life;
	let page;
	let mouse;
	let tank;
	let redstone;
	let ai;
	let gomoku;
	let warma;
	let xbiquge6;
	this.init=function(_page){
		page=_page;
		canvas=document.createElement('canvas');
		canvas.style.position='fixed';
		canvas.style.left='0px';
		canvas.style.top='0px';
		canvas.style.right='0px';
		canvas.style.bottom='0px';
		page.append(canvas);
		life=true;
		mouse={x:0,y:0};
		tank=new CanvasButton().init(canvas,'坦克动荡','20px 黑体','rgb(0,0,0)','rgb(240,140,100)',50,50,150,40);
		redstone=new CanvasButton().init(canvas,'逻辑电路','20px 黑体','rgb(0,0,0)','rgb(240,100,200)',250,50,150,40);
		ai=new CanvasButton().init(canvas,'神经网络','20px 黑体','rgb(0,0,0)','rgb(200,220,180)',50,120,150,40);
		gomoku=new CanvasButton().init(canvas,'玩五子棋','20px 黑体','rgb(0,0,0)','rgb(200,200,150)',250,120,150,40);
		warma=new CanvasButton().init(canvas,'Warmaの探索','20px 黑体','rgb(0,0,0)','rgb(230,180,230)',50,190,150,40);
		xbiquge6=new CanvasButton().init(canvas,'小说下载','20px 黑体','rgb(0,0,0)','rgb(160,240,240)',250,190,150,40);
		canvas.onmousemove=function(event){
			mouse.x=event.layerX;
			mouse.y=event.layerY;
		}
		canvas.onclick=function(event){
			tank.hit(mouse,function(){
				location.href='https://yyhhenry.github.io/tank/';
			});
			redstone.hit(mouse,function(){
				location.href='https://yyhhenry.github.io/redstone/';
			});
			ai.hit(mouse,function(){
				location.href='https://yyhhenry.github.io/ai/';
			});
			gomoku.hit(mouse,function(){
				location.href='https://yyhhenry.github.io/gomoku/';
			});
			warma.hit(mouse,function(){
				location.href='https://yyhhenry.github.io/WarmaGame/';
			});
			xbiquge6.hit(mouse,function(){
				location.href='https://yyhhenry.github.io/xbiquge6/main.user.js';
			});
		}
		thisChoosePage.draw();
		return this;
	}
	this.clear=function(){
		page.innerHTML='';
		life=false;
	}
	this.draw=function(){
		if(!life)return;
		canvas.width=window.outerWidth;
		canvas.height=window.outerHeight;
		let ctx=canvas.getContext('2d');
		ctx.shadowBlur=0;
		ctx.fillStyle='rgb(200,220,250)';
		ctx.fillRect(0,0,canvas.width,canvas.height);
		tank.draw(mouse);
		redstone.draw(mouse);
		ai.draw(mouse);
		gomoku.draw(mouse);
		warma.draw(mouse);
		xbiquge6.draw(mouse);
		setTimeout(thisChoosePage.draw,20);
	}
}
window.onload=function(){
	let page=document.getElementById('page');
	new choosePage().init(page);
}