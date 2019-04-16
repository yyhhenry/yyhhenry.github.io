const repositories=[
	{
		name:'manketuan',
		details:`<p>Chrome浏览器插件</p><p>默认所有图片会被替换成'Loading'，只能通过审查元素查看链接信息</p><p>如果想要正常使用，请在选项页中关闭调试模式</p><p>注意：每次重启浏览器都会导致调试模式被默认打开</p><p>如果显示区域发生重叠，可能是您的浏览器不支持太宽的弹出页面，请尝试把选项页中的width改小一些</p><p><a href="https://yyhhenry.github.io/manketuan" rel="nofollow">手机版测试</a>`
	},
	{
		name:'yyhhenry.github.io',
		details:`<p>我的博客</p>`
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
		details:`</a>xbiquge6</h1><p>用于下载xbiquge6.com的小说</p><p><a href="https://raw.githubusercontent.com/yyhhenry/xbiquge6/master/main.user.js" rel="nofollow">下载脚本</a></p>`
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
	}
];
function setRepositories(){
	const list=document.getElementById('list');
	const details=document.getElementById('details');
	$(list).html('');
	for(let i=0;i<repositories.length;i++){
		let option=document.createElement('h3');
		option.innerText=repositories[i].name;
		$(option).mouseenter(function(){
			$(option).css('background','rgba(128,0,0,0.7)');
			$(details).html(`<h1><a href='https://github.com/yyhhenry/${repositories[i].name}'>${repositories[i].name}</a></h1><hr>`+repositories[i].details);
		});
		$(option).mouseleave(function(){
			$(option).css('background','rgba(0,0,0,0)');
		});
		list.appendChild(option);
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