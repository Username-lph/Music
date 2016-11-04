window.onload=function(){
	//创建$函数来用$获取类名，更加方便
	function $(id){
		return document.getElementById(id);
	}
	var audio=$("audio");
	var play=$("play");
	var pause=$("pause");
	var current=$("current-time");
	var duration=$("duration");
	var progress=$("progress");
	var pi=$("p-i");
	var vol=$("volume");
	var vi=$("v-i");
	play.addEventListener("click",function(){
		if(audio.paused){
			audio.play();
			this.innerHTML="暂停";
		}else{
			audio.pause();
			this.innerHTML="播放";
		}
	});
	//将秒数转为时间
	function format(v){
		var v=Math.floor(v);
		var s=v%60;
		var m = Math.floor(v/60);
		s = (s < 10)?( '0' + s):s;
		return m+":"+s;
	}
	duration.innerHTML=format(audio.duration);
	audio.addEventListener("timeupdate",function(){
		current.innerHTML=format(audio.currentTime);
		var left=progress.offsetWidth * audio.currentTime / audio.duration - pi.offsetWidth / 2;
		pi.style.left=left+"px";
	});
	//progress
	progress.addEventListener("click",function(e){
		audio.currentTime = e.offsetX / this.offsetWidth * audio.duration;
	});
	//声音
	
	vi.addEventListener("click",function(e){
		e.stopPropagation();
	});
	pi.addEventListener("click",function(e){
		e.stopPropagation();
	});
	vol.addEventListener("click",function(e){
		audio.volume = e.offsetX / vol.offsetWidth;
		mote.removeAttribute('data-v');
	});
	
	//静音
	var mote = $("mote");
	mote.addEventListener("click",function(){
		if(this.hasAttribute("data-v")){
			audio.volume=this.getAttribute("data-v");
			this.removeAttribute("data-v");
		}else{
			this.setAttribute("data-v",audio.volume);
			audio.volume=0;
		}
	});
	audio.onvolumechange=function(){
		vi.style.left=vol.offsetWidth * audio.volume - vi.offsetWidth / 2 + "px";
	}
	//歌曲进度条拖拽
//	pi.onmousedown = function(e){
//		e.preventDefault();
//		var r = pi.offsetWidth / 2;
//		var start = r - e.offsetX;		
//		document.onmousemove = function(e){
//			var left = e.clientX - progress.offsetLeft + start;
//			var c = left / progress.offsetWidth * audio.duration;
//			if(c >= audio.duration || c < 0){
//				return;
//			}
//			audio.volume = c;
//		}
//		
//	}
//	document.onmouseup = function(){
//		document.onmousemove = null;
//	}
	pi.onmousedown=function(e){
		e.preventDefault();
		var r = pi.offsetWidth/2;
		var start = r - e.offsetX;
//		var start=e.offsetX;
		document.onmousemove=function(e){
			var left = e.clientX - progress.offsetLeft + start;
			var c = left / progress.offsetWidth*audio.duration;
			if(c >= audio.duration || c < 0){
				return;
			}
			audio.currentTime = c;
		}
	}
	document.onmouseup=function(){
		document.onmousemove=null;
	}
	//声音拖拽
	vi.onmousedown = function(e){
		e.preventDefault();
		var r = vi.offsetWidth / 2;
		var start = r - e.offsetX;
		document.onmousemove = function(e){
//			console.log(e.clientX);
			var left = e.clientX - vol.offsetLeft - start;
			var v = left / vol.offsetWidth;
			if(v > 1 || v < 0){
				return;
			}
			audio.volume = v;
//			vi.style.left =  + 'px';
		}
		
	}
	document.onmouseup = function(){
		document.onmousemove = null;
	}
	
};