let mouse;
let repositories=[
	{
		name:'ai',
		details:`<p>第一次尝试神经网络</p><p><a href='https://yyhhenry.github.io/ai/'>试一试</a></p>`
	},
	{
		name:'yyhhenry.github.io',
		details:`<p><a href='https://yyhhenry.github.io'>我的博客</a></p>`
	},
	{
		name:'trick',
		details:`<p>GALGAME开发模板</p><p><a href="https://yyhhenry.github.io/trick/" rel="nofollow">在线尝试</a></p>`
	},
	{
		name:'phyjs',
		details:`<p>The name of the repository ,'phyjs', means 'Physical' and 'Javascript'.</p><p>As a matter of fact,it is just for test.</p><p>You could have a try under <a href="https://yyhhenry.github.io/phyjs?mini" rel="nofollow">https://yyhhenry.github.io/phyjs?mini</a>.</p><p>The same game with a huge map at <a href="https://yyhhenry.github.io/phyjs?huge" rel="nofollow">https://yyhhenry.github.io/phyjs?huge</a> is also recommended.</p><p>Enjoy yourself in playing.</p>`
	},
	{
		name:'xbiquge6',
		details:`<p>用于下载xbiquge6.com的小说</p><p><a href="https://yyhhenry.github.io/xbiquge6/main.user.js" rel="nofollow">下载脚本</a></p>`
	},
	{
		name:'Java-3D-Engine',
		details:`<p>一个手写的不完善的Java3D引擎</p><p>现在只支持添加纯色三角形，没法填位图、光源和材质</p>`
	},
	{
		name:'hitgame',
		details:`<p>A Game Played Under The LAN</p>`
	},
	{
		name:'Cpx',
		details:`<p>An Educational Programming Language</p>`
	},
	{
		name:'redstone',
		details:`<p><a href="https://yyhhenry.github.io/redstone" rel="nofollow" target="_blank">随便玩电路</a></p>`
	},
	{
		name:'gomoku',
		details:`
<p>一个取材自@wky32768 的项目，当然主要也是因为他@我太多了。</p>
<p>使用方法过于简单，不再赘述。</p>
<p>初步加入“入门级AI”，“普通级AI”、“提高级AI”请等下次</p>
<p><a href="https://yyhhenry.github.io/gomoku" rel="nofollow">在线试玩</a></p>`
	},
	{
		name:'live',
		details:`
		(请通过上方链接查询使用细则)
<p><a href="https://yyhhenry.github.io/live" rel="nofollow">Enjoy yourself!</a></p>`
	}
];
function getElementLeft(element){
	let actualLeft = element.offsetLeft;
	let current = element.offsetParent;
	while(current!=null){
		actualLeft += current.offsetLeft;
		current = current.offsetParent;
	}
	return actualLeft;
}
function getElementTop(element){
	let actualLeft = element.offsetTop;
	let current = element.offsetParent;
	while(current!=null){
		actualLeft += current.offsetTop;
		current = current.offsetParent;
	}
	return actualLeft;
}
function setRepositories(){
	const list=document.getElementById('list');
	const details=document.getElementById('details');
	$(list).html('');
	for(let i=0;i<repositories.length;i++){
		let option=document.createElement('h3');
		list.appendChild(option);
		$(option).text(repositories[i].name);
		$(option).mouseenter(function(){
			$(option).css('background','rgba(80,0,0,0.6)');
			$(option).css('color','rgba(255,255,255,0.7)');
			$(option).css('filter','brightness(1.5)');
			$(details).html(`<h1><a href='https://github.com/yyhhenry/${repositories[i].name}'>${repositories[i].name}</a></h1><hr>`+repositories[i].details);
		});
		$(option).mouseleave(function(){
			repositories[i].mouseentered=false;
			$(option).css('background','rgba(0,0,0,0)');
			$(option).css('color','rgba(220,220,220,1)');
			$(option).css('filter','brightness(1)');
		});
	}
}
function onresize(){
	const proportion=9/16;
	const proScr=document.getElementById('proScr');
	const clientHeight=$(window).height();
	const clientWidth=$(window).width();
	if(proportion*clientWidth>clientHeight){
		proScr.style.height=(clientHeight-10)+'px';
		proScr.style.width=((clientHeight-10)/proportion)+'px';
		proScr.style.left=(clientWidth-(clientHeight-10)/proportion)/2+'px';
		proScr.style.top='5px';
	}else{
		proScr.style.width=(clientWidth-10)+'px';
		proScr.style.height=((clientWidth-10)*proportion)+'px';
		proScr.style.top=(clientHeight-(clientWidth-10)*proportion)/2+'px';
		proScr.style.left='5px';
	}
}
$(function(){
	onresize();
	setRepositories();
	$(window).resize(onresize);
});