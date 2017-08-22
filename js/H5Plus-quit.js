(function(w){
// 空函数
function shield(){
	return false;
}
document.addEventListener('touchstart',shield,false);//取消浏览器的所有事件，使得active的样式在手机上正常生效
document.oncontextmenu=shield;//屏蔽选择函数
// H5 plus事件处理
var ws=null,as='pop-in';
function plusReady(){
	ws=plus.webview.currentWebview();
	// Android处理返回键
	plus.key.addEventListener('backbutton',function(){
		back();
	},false); 
}
if(w.plus){
	plusReady();
}else{
	document.addEventListener('plusready',plusReady,false);
}
 
// 处理返回事件
w.back=function(hide){
	if(w.plus){
		ws||(ws=plus.webview.currentWebview());
		if(hide||ws.preate){
			ws.hide('auto');
		}else{
			ws.close('auto');
		}
	}else if(history.length>1){
		history.back();
	}else{
		w.close();
	}
};
 
})(window);
 