$(document).ready(function() {
	//获取音频变量及其它变量
	var $audio = $("#audio");
	var audio = $audio.get(0);
	var play = $("#play");
	var curTime = $("#current-time");
	var duration = $("#duration");
	var progress = $("#progress");
	var pi = $("#p-i");
	var vol = $("#volume");
	var vi = $("#v-i");
	var mote = $("#mote");
	var volmote = $("#vol");
	var collect = $("#collect");
	var hand = $("#hand");
	//rotate旋转
	var Rotate = $("#rotate");
	var rotate = $(".rotate");
	var rotateimg = $(".rotate-img");
	var content = $("#content");
	
	var current = 1;
	//列表切换歌曲
	var music = [
	{
		name: "黄国伦 - 直到世界都哭泣",
		author: "黄国伦",
		src: "music/黄国伦 - 直到世界都哭泣.mp3",
		content:"<li>直到世界都哭泣</li><li>黄国伦</li><li>电影《极光之爱》泪光主题曲</li><li>︿☆直到世界都哭泣☆︿</li><li>演唱：黄国伦</li><li>作词：黄国伦 作曲：黄国伦</li><li>爱上你 是早已注定的宿命</li><li>我无力抗拒陷入你的柔情</li><li>直到不能呼吸</li><li>忘记你 是夜夜徒劳的练习</li><li>我疯狂用尽力气 想离开你</li><li>但不能 命运将我们绑得更紧</li><li>就让我这样爱着你</li><li>就算是场悲剧</li><li>天若有情天亦老</li><li>你会知道 我的心痛</li><li>就让我这样爱着你</li><li>永远不离开你</li><li>一路陪你到尽头</li><li>无悔无求 直到世界都哭泣</li><li>我依然会相信真爱有奇迹</li><li>忘记你 是夜夜徒劳的练习</li><li>我疯狂用尽力气 想离开你</li><li>但不能 命运将我们绑得更紧</li><li>就让我这样爱着你</li><li>就算是场悲剧</li><li>天若有情天亦老</li><li>你会知道 我的心痛</li><li>就让我这样爱着你</li><li>永远不离开你</li><li>一路陪你到尽头</li><li>无悔无求 直到世界都哭泣</li><li>我依然会相信真爱有奇迹</li><li>我依然会相信真爱有奇迹</li>"
	},	{
		name:"巫启贤 - 不该让你等太久",
		author:"巫启贤",
		src:"巫启贤 - 不该让你等太久.mp3",
		content:"<li>歌手： 巫启贤</li><li>所属专辑：《太傻 情歌回顾展》</li><li>不该让你等太久 - 巫启贤</li><li>为何窗前只能下着雨</li><li>带着冷风拨乱了思绪</li><li>日子越来越没有意义</li><li>是否知道我每天都想你</li><li>只有自己陪伴着影子</li><li>是否见面只在入梦以后</li><li>不变的距离让彼此难受</li><li>孤枕独眠的夜还要多久</li><li>把你想个够</li><li>不要再担忧</li><li>我知道不该让你等太久</li><li>所有天的遥远地的沉默</li><li>海的辽阔山的冷漠</li><li>可有改变你的心</li><li>还有深夜的露思念的泪</li><li>等待的苦岁月的酒</li><li>可有醉了你容颜</li><li>那些空的承诺甜的言语</li><li>游戏的人虚假的心</li><li>可有动摇你的心</li><li>不管多少折磨多久守候</li><li>对你的爱依然不变</li><li>只有自己陪伴着影子</li><li>是否见面只在入梦以后</li><li>不变的距离让彼此难受</li><li>孤枕独眠的夜还要多久</li><li>把你想个够</li><li>不要再担忧</li><li>我知道不该让你等太久</li><li>所有天的遥远地的沉默</li><li>海的辽阔山的冷漠</li><li>可有改变你的心</li><li>还有深夜的露思念的泪</li><li>等待的苦岁月的酒</li><li>可有醉了你容颜</li><li>那些空的承诺甜的言语</li><li>游戏的人虚假的心</li><li>可有动摇你的心</li><li>不管多少折磨多久守候</li><li>对你的爱依然不变</li><li>那些空的承诺甜的言语</li><li>游戏的人虚假的心</li><li>可有动摇你的心</li><li>不管多少折磨多久守候</li><li>对你的爱依然不变</li>"
	},	{	
		name: '陈小春 - 独家记忆',
		author: '陈小春',
		src: 'music/陈小春 - 独家记忆.mp3',
		content:"<li>独家记忆</li><li>专辑：《独家记忆》</li><li>演唱：陈小春</li><li>忘记分开后的第几天起</li><li>喜欢一个人 看下大雨</li><li>没联络 孤单就像连锁反应</li><li>想要快乐都没力气</li><li>雷雨世界像场灾难电影</li><li>让现在的我 可怜到底</li><li>对不起 谁也没有时光机器</li><li>已经结束的 没有商量的余地</li><li>我希望你 是我独家的记忆</li><li>不管别人说的多么难听</li><li>现在我拥有的事情</li><li>是你 是给我一半的爱情</li><li>我喜欢你 是我独家的记忆</li><li>谁也不行</li><li>从我这个身体中拿走你</li><li>在我感情的封锁区</li><li>有关于你 绝口不提 没问题</li><li>雷雨世界像场灾难电影</li><li>让现在的我 可怜到底</li><li>对不起 谁也没有时光机器</li><li>已经结束的 没有商量的余地</li><li>我希望你 是我独家的记忆</li><li>摆在心底</li><li>不管别人说的多么难听</li><li>现在我拥有的事情</li><li>是你 是给我一半的爱情</li><li>谁也不行</li><li>从我这个身体中拿走你</li><li>在我感情的封锁区</li><li>有关于你 绝口不提 没关系</li><li>我希望你 是我独家的记忆</li><li>摆在心底</li><li>不管别人说的多么难听</li><li>现在我拥有的事情</li><li>是你 是给我一半的爱情</li><li>我喜欢你 是我独家的记忆</li><li>谁也不行</li><li>从我这个身体中拿走你</li><li>在我感情的封锁区</li><li>有关于你 绝口不提 没限期</li>"
		
	}, {
		name: "金南玲 - 逆流成河",
		author: "金南玲",
		src: "music/金南玲 - 逆流成河.mp3",
		content:"<li>逆流成河</li><li>词曲：廖伟志</li><li>演唱：金南玲</li><li>斑驳的夜色在说什么</li><li>谁能告诉我如何选择</li><li>每当我想起分离时刻</li><li>悲伤就逆流成河</li><li>你给的温暖属于谁呢</li><li>谁又会在乎我是谁呢</li><li>每当我想起你的选择</li><li>悲伤就逆流成河</li><li></li><li>失去了你也是种获得</li><li>一个人孤单未尝不可</li><li>每当我深夜辗转反侧</li><li>悲伤就逆流成河</li><li></li><li>离开你也是一种快乐</li><li>没人说一定非爱不可</li><li>想问你双手是否温热</li><li>悲伤就逆流成河</li><li>我想是因为我太天真</li><li>难过是因为我太认真</li><li>每当我想起你的眼神</li><li>悲伤就逆流成河</li>"
	},	{
		name:"巫启贤 - 人生如梦",
		author:"巫启贤",
		src:"巫启贤 - 人生如梦.mp3",
		content:"<li>歌手： 巫启贤</li><li>发行时间：1993-12-01</li><li>所属专辑：《红尘来去一场梦》</li><li>人生如梦-巫启贤</li><li>当我开始活的像一阵风</li><li>在人间不停的吹送</li><li>走过了春夏卷过了秋冬</li><li>用看戏的眼看待繁华梦</li><li>渐渐我发觉人生就像梦</li><li>像蝴蝶穿越了时空</li><li>有多少真实有几分朦胧</li><li>有苦有乐有笑有痛</li><li>人皆寻梦 梦里不分西东</li><li>醒在红尘中 醉在红尘中</li><li>何不从从容容入梦</li><li>人皆寻梦 梦里不分西东</li><li>爱在红尘中 恨在红尘中</li><li>何不潇洒入梦</li><li>日升日落潮起潮涌</li><li>梦里有爱何必怕人去楼空</li><li>当我开始活得像一阵风</li><li>在人间不停的吹送</li><li>走过了悲欢卷过了聚散</li><li>梦如人生人生如梦</li><li>人皆寻梦 梦里不分西东</li><li>醒在红尘中 醉在红尘中</li><li>何不从从容容入梦</li><li>人皆寻梦 梦里不分西东</li><li>爱在红尘中 恨在红尘中</li><li>何不潇洒入梦</li><li>日升日落潮起潮涌</li><li>梦里有爱何必怕人去楼空</li><li>当我开始活得像一阵风</li><li>在人间不停的吹送</li><li>走过了悲欢卷过了聚散</li><li>梦如人生人生如梦</li><li>走过了悲欢卷过了聚散</li><li>梦如人生人生如梦</li>"
	}];
	//将秒数转为时间
	function format(v) {
		var v = Math.floor(v);
		var s = v % 60;
		var m = Math.floor(v / 60);
		s = (s < 10) ? ('0' + s) : s;
		return m + ":" + s;
	}
	$(audio).on("canplay", function() {
		duration.html(format(audio.duration));
	})
	//渲染
	function render() {
		$("#music-list").empty();
		$.each(music, function(i, v) {
			var c = (i === current) ? "active" : "";
			$('<li class="' + c + '"><span>' + v.name + '</span><span class="author">' + v.author + '</span></li>').appendTo("#music-list");
		});
		$("#content").empty();
//		$.each(music,function(i,v){
//			var con = (i === current) ? "contentplay" : "";
			$('<ul class="content">'+music[current].content+'</ul>').appendTo("#content");
//		});
		$(".song").empty();
		var index = $(this).index;
		console.log(index);
	}
	$("#music-list").on("click", "li", function() {
		$("#music-list").find("li").removeClass('active');
		$(this).addClass("active");
		current = $(this).index();
		audio.src = music[current].src;
		audio.play();
	});
	render();
//	$audio.on("timeupdate",function(){
//		$("#content").find("li").removeClass("contentplay");
//		$("#content li").addClass("contentplay");
//		
//	});
	//列表删除
	$("#music-list").on("touched", ".delete", function() {
		var list = $(this).closest("li");
		var inddex = li.index();
		music.splice(index, 1);
		if(index === current) {
			if(music[current]) {
				audio.src = music[current].src;
			} else {
				audio.src = "";
			}
		} else if(index > current) {
			//
		} else if(index < current) {
			current -= 1;
		}
		render();
		return false;
	});
	//列表新增
	$(".song-list").on("click", "div", function() {
		var add = $(this).attr("data-v");
		music.push(JSON.parse(add));
		render();
		return false;
	});
	$("#music-list").on("touchend", "li", function() {
		var index = $(this).index();
		current = index;
		audio.src = music[current].src;
		render();
		return false;
	});
	//上一首
	function prev() {
		current -= 1;
		if(current === -1) {
			current = music.length - 1;
			//		current = current.length - 1;
		}
		audio.src = music[current].src;
		render();
		audio.play();
		return false;
	}
	//下一首
	function next() {
		current += 1;
		if(current === music.length) {
			current = 0;
		}
		audio.src = music[current].src;
		render();
		audio.play();
		return false;
	}
	$(".pre").on("touchend", prev);
	$(".next").on("touchend", next);
	
	//歌曲进度条点击
	progress.on('click', function(e) {
		audio.currentTime = e.offsetX / $(this).width() * audio.duration;
	});
	pi.on('click', false);
	// duration.html=format(audio.duration);	
	//歌曲进度拖拽
	pi.on('mousedown', function(e) {
		var r = pi.width() / 2;
		var start = r - e.offsetX;
		//		var start=e.offsetX;
		$(document).on('mousemove', function(e) {
			var left = e.clientX - progress.position().left + start;
			var c = left / progress.width() * audio.duration;
			if(c >= audio.duration || c <= 0) {
				return;
			}
			audio.currentTime = c;
		});
		return false;
	});
	$(document).on('mouseup', function() {
		$(document).off("mousemove");
	});
	
	//音频拖拽
//	vi.on("mousedown", function(e) {
//		//		e.preventDefault();
//		var offset = e.originalEvent.changedTouches[0].clientX;
//		var r = vi.width() / 2;
//		var start = r - e.offsetX;
//		$(document).on("mousemove", function(e) {
//			//console.log(e.clientX);
//			var left = offset - vol.offset().left + start;
//			var v = left / vol.width();
//			if(v > 1 || v < 0) {
//				return;
//			}
//			audio.volume = v;
//		});
//		return false;
//	});
	vi.on("mousedown", function(e) {
		//		e.preventDefault();
		var r = vi.width() / 2;
		var start = r - e.offsetX;
		$(document).on("mousemove", function(e) {
			//			console.log(e.clientX);
			var left = e.clientX - vol.position().left + start;
			var v = left / vol.width();
			if(v > 1 || v < 0) {
				return;
			}
			audio.volume = v;
		});
		return false;
	});
	$(document).on('mouseup', function() {
		$(document).off("mousemove");
	});
	//静音
	volmote.on("click", function() {
		if($(this).attr("data-v")) {
			audio.volume = $(this).attr("data-v");
			$(this).removeAttr("data-v");
			$(this).html("&#xe625;");
		} else {
			$(this).attr("data-v", audio.volume);
			$(this).html("&#xe626;");
			audio.volume = 0;			
		}
	});
//	////rotate  旋转动画
//	//当音乐播放完停止时，自动停止图片旋转
//	audio.addEventListener("ended",function(event){
//		rotate.removeClass("play");
//	});
//	////当音乐暂停播放时，音乐暂停，图片停止旋转
	////list
	$(".list").on("click","a",function(){
		$("#list").addClass("listdong");
	});
	Rotate.on("click",function(){
		$("#list").removeClass("listdong");
		$(".vol").fadeIn();
		$("#content-rotate").fadeOut();		
		content.fadeIn();
	});
	content.on("click",function(){
		$(this).fadeOut();
		$(".vol").fadeOut();
		$("#content-rotate").fadeIn();
	});
	//////////////////////////////所有事件
	$audio.on("localstart", function() {
		$("#name").html(music[current].name);
		$("#total").html(music[current].src);
	});
	$audio.on("canplay", function() {
		
	});
	$audio.on("progress", function() {

	});
	//歌曲播放过程中调用的函数
	$audio.on("timeupdate", function() {
		curTime.html(format(audio.currentTime));
		var left = progress.width() * audio.currentTime / audio.duration - pi.width() / 2;
		pi.css("left", left);
		var contentHeight = $("#content .content").height();
		var height = contentHeight * audio.currentTime / audio.duration;
		$("#content .content").css("top","120"-height);
		var index = Math.floor(($(".content li").length) * audio.currentTime / audio.duration);
		$(".content li").css("color","whitesmoke").eq(index).css("color","#FF0000");
	});
	//播放和暂停
	play.on("click","a",function() {
		if(audio.paused) {
			$("#hand img").addClass("hand");
			rotate.addClass("play");
			rotateimg.addClass("play");			
			audio.play();	
		} else {
			$("#hand img").removeClass("hand");
			rotate.removeClass("play");
			rotateimg.removeClass("play");
			audio.pause();
		}
	});
	$audio.on("play", function() {
		$("#play a").html("&#xe65a;");
	});
	$audio.on("pause", function() {
		$("#play a").html("&#xe659;");	
	});
	$audio.on('ended', next);
	$audio.on("ended", function() {
	});
	$audio.on("volumechange", function() {
		vi.css("left", vol.width() * audio.volume - vi.width() / 2);
	});
	vi.on("touchend", false);
	
});