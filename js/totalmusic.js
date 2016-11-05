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
	var current = 1;
		//列表切换歌曲
	var music = [{
		name: "黄国伦 - 直到世界都哭泣",
		author: "黄国伦",
		src: "music/黄国伦 - 直到世界都哭泣.mp3"
	}, {
		name: '陈小春 - 独家记忆',
		author: '陈小春',
		src: 'music/陈小春 - 独家记忆.mp3'
	}, {
		name: "金南玲 - 逆流成河",
		author: "金南玲",
		src: "music/金南玲 - 逆流成河.mp3"
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
	}
	$("#music-list").on("click", "li", function() {
		$("#music-list").find("li").removeClass('active');
		$(this).addClass("active");
		current = $(this).index();
		audio.src = music[current].src;
		audio.play();
	});
	render();
	
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
	});
	//播放和暂停
	play.on("click","a",function() {
		if(audio.paused) {
			audio.play();
		} else {
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