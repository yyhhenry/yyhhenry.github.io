let mouse;
let repositories=[
	{
		name:'manketuan',
		details:`<p>Chrome浏览器插件</p><p>默认所有图片会被替换成'Loading'，只能通过审查元素查看链接信息</p><p>如果想要正常使用，请在选项页中关闭调试模式</p><p>注意：每次重启浏览器都会导致调试模式被默认打开</p><p>如果显示区域发生重叠，可能是您的浏览器不支持太宽的弹出页面，请尝试把选项页中的width改小一些</p><p><a href="https://yyhhenry.github.io/manketuan" rel="nofollow">手机版测试</a>`
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
		details:`<p><a href="https://yyhhenry.github.io/redstone" rel="nofollow" target="_blank">随便玩电路</a></p>
<h2>操作方法：</h2>
<pre><code>	
	单击或者框选可以选中若干个节点或线路，每一次选择操作会覆盖已选
	
	按住Shift之后，每一次选择操作会与已选XOR

	按住Ctrl单击空白处添加节点

	选中若干个个节点，按住Ctrl单击另一个节点连接电路，如果单击处没有节点，则新建一个节点

	选中若干个节点，按住鼠标左键拖动，可以移动节点

	选中若干个节点，敲击空格该节点打开/关闭电源

	选中一条线路，敲击空格该线路更改属性(导线/非门)和方向

	选中若干个节点或一条线路，敲击Delete删除
	
	滚轮控制放大缩小
	
	Ctrl+A全选，Ctrl+X剪切，Ctrl+C复制，Ctrl+V粘贴
</code></pre>
<h2>其它细节：</h2>
<pre><code>
	两个节点之间只能有一条线路

	导线可以**双向**传播电流，但是会逐渐削弱，串联大约30条导线后电流无法被捕捉
	
	非门测定较粗一端的电流，并将结果输送到较细一端，较细一端的状态**不会影响**较粗一端
	
	非门整流后，电流又可以传播30条导线长
	
	删除节点会把与它相接的边删除
	
	删除边不影响节点
	
	Ctrl+V后会自动选中内容以便继续进行移动或Ctrl+X
	
	按住Ctrl时会出现新元素指示，如果一条边提示为黄色则表示该条边已经存在
	
	如果一次添加操作完全无意义，新节点指示为黄色
	
	没有选中任何节点的时候，Ctrl+X或Ctrl+C无效
	
</code></pre>`
	},
	{
		name:'gomoku',
		details:`<h1>gomoku</h1>
<p>一个取材自@wky32768 的项目，当然主要也是因为他@我太多了。</p>
<p>使用方法过于简单，不再赘述。</p>
<p>初步加入“入门级AI”，“普通级AI”、“提高级AI”请等下次</p>
<p><a href="https://yyhhenry.github.io/gomoku" rel="nofollow">在线试玩</a></p>`
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