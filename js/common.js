var indexNum=1,filesNum=9,w=null;
var gentry=null,hl=null,le=null;
var er=null,ep=null;
var bUpdated=false; //用于兼容可能提前注入导致DOM未解析完更新的问题

// DOMContentLoaded事件处理
document.addEventListener('DOMContentLoaded', function(){
	// 获取DOM元素对象
	hl = document.getElementById('history');
	le = document.getElementById('empty');
	er = document.getElementById('record');
	rt = document.getElementById('rtime');
	ep = document.getElementById('play');
	pt = document.getElementById('ptime');
	pp = document.getElementById('progress')
	ps = document.getElementById('schedule');
},false);



/**
 * @param {Object} title 弹窗显示的标题
 * @param {Object} num 选择图片的数量
 */
function cameraAndAlbum(title,num,callback){
	if (mui.os.plus) { 
        var a = [{ 
            title: "拍照" 
        }, { 
            title: "从手机相册选择" 
        }]; 
        plus.nativeUI.actionSheet({ 
            title: title, 
            cancel: "取消", 
            buttons: a 
        }, function(b) {
            switch (b.index) { 
                case 0: 
                    break; 
                case 1: 
                    cameraAndUpload(callback);
                    break; 
                case 2: 
                    albumAndUpload(num,callback);
                    break; 
                default: 
                    break; 
            } 
        }) 
    } 
}

//相册选择照片上传
function albumAndUpload(num,callback){
	var msg={code:0,msg:'',objectList:[]};
	callback = callback || $.noop;
	if(num==0)num=filesNum;
	if(num==0){
		msg.code=-1;
		msg.msg='上传文件已超出了限制数量。';  
		callback(msg);
	}else{
		plus.gallery.pick(
        function(paths){
//      		paths.files所选择图片路径
//          taskUpload(paths.files);
            pushUploadFileList(paths.files,1,callback);
        },
        function(e){
			msg.code=-1;
			msg.msg='取消了选择';  
			callback(msg);
        		//mui.toast('取消了选择');
        },
        {
        		multiple:true,
        		maximum:num
        }
    );
	}
}
//拍照上传
function cameraAndUpload(callback){
	var msg={code:0,msg:'',objectList:[]};
	callback = callback || $.noop;
	if(filesNum==0){
		msg.code=-1;
		msg.msg='上传文件已超出了限制数量。';  
		callback(msg);
	}else{
		var c = plus.camera.getCamera();
	    c.captureImage(function(e) {
	        plus.io.resolveLocalFileSystemURL(e, function(entry) {
//	        		entry.toLocalURL()拍照的图片路径
	            var paths = new Array();
	            paths.push(entry.toLocalURL())
	            console.log(paths[0]);
//	          	taskUpload(paths);
	            pushUploadFileList(paths,1,callback);
	        }, function(e) {
				msg.code=-1;
				msg.msg="读取拍照文件错误：" + e.message;  
				callback(msg);
	            //console.log("读取拍照文件错误：" + e.message);
	        });
	    }, function(s) {
	        console.log("error" + s);
	    }, {
	        filename: "_doc/camera/"
	    })
	}
}

// 录像并上传
function videoAndUpload(callback){
	var msg={code:0,msg:'',objectList:[]};
	callback = callback || $.noop;
	if(filesNum==0){
		msg.code=-1;
		msg.msg='上传文件已超出了限制数量。';  
		callback(msg);
		//mui.toast('上传文件已超出了限制数量。');
	}else{
		console.log('开始录像...');
		var cmr = plus.camera.getCamera();
		var fmt = cmr.supportedVideoFormats;
		console.log('支持录制的视频格式'+fmt);
		cmr.startVideoCapture(function(p){
			console.log('成功：'+p);
			plus.io.resolveLocalFileSystemURL(p, function(entry){
//				entry.toLocalURL()视频路径
	            var paths = new Array();
	            paths.push(entry.toLocalURL())
	            console.log(paths[0]);
//	            taskUpload(paths);
	            pushUploadFileList(paths,1,callback);
			}, function(e){
				msg.code=-1;
				msg.msg='读取录像文件错误：'+e.message;  
				callback(msg);
				//console.log('读取录像文件错误：'+e.message);
			} );
		}, function(e){
			msg.code=-1;
			msg.msg='失败：'+e.message;  
			callback(msg);
			//console.log('失败：'+e.message);
		}, {filename:'_doc/camera/',format:fmt,index:indexNum});
	}
}



// 开始录音
var r=null,t=0,ri=null,rt=null;
function startRecord( callback ){
	
	callback = callback || $.noop;
	var msg={code:0,msg:'',objectList:[]};
	
	if(filesNum==0){
		msg.code=-1;
		msg.msg='上传文件已超出了限制数量。'; 
	}else{
		console.log('开始录音：');
		r = plus.audio.getRecorder();
		if ( r == null ) {
			msg.code=-1;
			msg.msg='录音对象未获取'; 
			console.log('录音对象未获取');
			return callback(msg);
		}
		r.record({filename:'_doc/audio/',format:'amr'}, function(p){
			console.log('录音完成：'+p);
			plus.io.resolveLocalFileSystemURL(p, function(entry){
//				entry.toLocalURL()录音文件路径
	            var paths = new Array();
	            paths.push(entry.toLocalURL())
	            console.log(paths[0]);
//	            taskUpload(paths);
				pushUploadFileList(paths,2,callback);
			}, function(e){
				console.log('读取录音文件错误：'+e.message);
			});
		}, function(e){
			console.log('录音失败：'+e.message);
		} );
		er.style.display = 'block';
		t = 0;
		ri = setInterval(function(){
			t++;
			rt.innerText = timeToStr(t);
		}, 1000);
	}
	return callback(msg);
}
// 停止录音
function stopRecord(){
	er.style.display = 'none';
	rt.innerText = '00:00:00';
	clearInterval(ri);
	ri = null;
	r.stop();
	w = null;
	r = null;
	t = 0;
}


// 播放音频文件
function playAudio(obj){
	if(!obj ){
		console.log('无效的音频文件');
		return;
	}
	console.log('播放音频文件：'+obj);
	startPlay(obj);
}
// 播放文件相关对象
var p=null,pt=null,pp=null,ps=null,pi=null;
// 开始播放
function startPlay(url){
	ep.style.display = 'block';
	var L = pp.clientWidth;
	p = plus.audio.createPlayer(url);
	p.play(function(){
		console.log('播放完成！');
		// 播放完成
		pt.innerText = timeToStr(d)+'/'+timeToStr(d);
		ps.style.webkitTransition = 'all 0.3s linear';
		ps.style.width = L+'px';
		stopPlay();
	}, function(e){
		console.log('播放音频文件"'+url+'"失败：'+e.message);
	});
	// 获取总时长
	var d = p.getDuration();
	if(!d){
		pt.innerText = '00:00:00/'+timeToStr(d);
	}
	pi = setInterval(function(){
		if(!d){ // 兼容无法及时获取总时长的情况
			d = p.getDuration();
		}
		var c = p.getPosition();
		if(!c){  // 兼容无法及时获取当前播放位置的情况
			return;
		}
		pt.innerText = timeToStr(c)+'/'+timeToStr(d);
		var pct = Math.round(L*c/d);
		if(pct < 8){
			pct = 8;
		}
		ps.style.width = pct+'px';
	}, 1000);
}
// 停止播放
function stopPlay(){
	clearInterval(pi);
	pi=null;
	setTimeout(resetPlay, 500);
	// 操作播放对象
	if(p){
		p.stop();
		p=null;
	}
}
// 重置播放页面内容
function resetPlay(){
	ep.style.display = 'none';
	ps.style.width = '8px';
	ps.style.webkitTransition = 'all 1s linear';
	pt.innerText = '00:00:00/00:00:00';	
}
// 重写关闭
var _back=window.back;
function resetback(){
	// 停止播放
	if(ep.style.display == 'block'){
		stopPlay();
	}else if(er.style.display == 'block'){
		stopRecord();
	}else{
		_back();
	}
}
window.back=resetback;






// 预览视频、图片
function displayFile(obj){
	if(w){
		console.log('重复点击！');
		return;
	}
	if(!obj){
		console.log('无效的媒体文件');
		return;
	}
	var name = obj.substr(obj.lastIndexOf('/')+1);
	var suffix = name.substr(name.lastIndexOf('.'));
	var url = '';
	if(suffix=='.mov' || suffix=='.3gp' || suffix=='.mp4' || suffix=='.avi'){
		url = '/school/showVideo.html';
	} else {
		url = '/school/showImage.html';
	}
	w=plus.webview.create(url,url,{hardwareAccelerated:true,scrollIndicator:'none',scalable:true,bounce:'all'});
	w.addEventListener('loaded', function(){
		w.evalJS('loadMedia("'+obj+'")');
	}, false );
	w.addEventListener('close', function(){
		w = null;
	}, false);
	w.show('pop-in');
}

// 添加预览、播放项
function createItem(mediaFile,type){
	filesNum--;
	var li = document.createElement('li');
	var fileName=mediaFile.substr(mediaFile.lastIndexOf('/')+1);
	var suffix = fileName.substr(fileName.lastIndexOf('.'));
	if(type==1){
		if(suffix=='.mov' || suffix=='.3gp' || suffix=='.mp4' || suffix=='.avi'){
			li.className = 'ditem file-color3';
			li.innerHTML = "<span class='iplay'><font class='aname'></font>"+
			"<img class='file-icon' src='../images/school/video-icon.png' onclick='displayFile(this)'/>"+
			"<span class='mui-icon mui-icon-close close-color3' onclick='delUploadFileList(this)'></span></span>";
		}else{
			li.className = 'ditem file-color1';
			li.innerHTML = "<span class='iplay'><font class='aname' onclick='displayFile(this)'></font>"+
			"<img class='file-icon' src='../images/school/photo-icon.png' onclick='displayFile(this)'/>"+
			"<span class='mui-icon mui-icon-close close-color1' onclick='delUploadFileList(this)'></span></span>";
		}
		
	}else{
		li.className = 'ditem file-color2';
		li.innerHTML = "<span class='iplay'><font class='aname' onclick='playAudio(this)'></font>"+
		"<img class='file-icon' src='../images/school/record-icon.png' onclick='displayFile(this)'/>"+
		"<span class='mui-icon mui-icon-close close-color2' onclick='delUploadFileList(this)'></span></span>";
	}
	hl.append( li);
	
	li.querySelector('.aname').innerText = fileName;
	li.querySelector('.file-icon').mediaFile = mediaFile;
	li.querySelector('.mui-icon-close').mediaFile = mediaFile;
}

//上传文件集合
var uploadFileList = new Array();
var selectFileList = new Array();
//添加image至需要上传的uploadFileList
function pushUploadFileList(fileList,type,callback){
	for(var i in fileList){
		filesNum--;
		//createItem(fileList[i],type);
		selectFileList.push({patch:fileList[i],type:type});
		console.info(JSON.stringify({patch:fileList[i],type:type}));
		uploadFileList.push(fileList[i]);
	}

	
	//uploadFileList.concat(fileList);
	
	taskUpload(uploadFileList,callback)
}

//从uploadFileList中移除指定uploadFile
function delUploadFileList(obj){
	console.info(obj);
	console.info(JSON.stringify(selectFileList));
	for(var i in selectFileList){
		if(selectFileList[i].patch==obj){
			console.log(obj);
			//$(obj).parent().parent().remove();
			selectFileList.splice(i,1);
			filesNum++;
		}
	}
}


//创建上传任务
function taskUpload(fileList, callback){
	plus.nativeUI.showWaiting();
	var filePathList=[];
	var task = null;
	//console.info(JSON.stringify(app.hostname))
	task = plus.uploader.createUpload(
    		//'http://112.124.110.182:11008/course-api/uploadCommonApp.shtml',
    		app.hostname+'/uploadCommonApp.shtml' ,
    		{ method:"POST",priority:100},
    		function (t,status){
    			//console.info(t);
    			//console.info(JSON.stringify(t));
        		plus.nativeUI.closeWaiting();
        		t.responseText = JSON.parse(t.responseText);//首次转换数据
        		//console.log(t.responseText);
        		var objStr = JSON.parse(t.responseText);//需再次转换
//      		for(var k in objStr.objectList){
//      			console.log(objStr.objectList[k].pathAll);//上传完成的图片全路径
//      		}
        		//mui.toast('上传成功！');
        		var msg=objStr;
        		console.info(JSON.stringify(msg));
        		callback(msg);
        		filesNum=filesNum+uploadFileList.length;
        		filesNum=filesNum>9?9:filesNum;
        		uploadFileList.splice(0,uploadFileList.length);
    		}
	);
	for(var i in fileList){
    		task.addFile(fileList[i],{key:'uper'+i,'name':fileList[i].substr(fileList[i].lastIndexOf('/'))});
    		task.addData('fileName',fileList[i].substr(fileList[i].lastIndexOf('/')));
    		task.addData('fileType','TaskExecPicture');
	}
//	执行上传任务
	task.start();
}


/**
 * 检测当前网络状态
 */
mui.plusReady(function(){
    document.addEventListener("netchange", function(){
        var connectionStatus = plus.networkinfo.getCurrentType();
        switch ( connectionStatus ) {
            case plus.networkinfo.CONNECTION_ETHERNET:
            case plus.networkinfo.CONNECTION_WIFI:
            mui.toast('当前使用Wifi网络！');
            break; 
            case plus.networkinfo.CONNECTION_CELL2G:
            mui.toast('当前使用2G网络！');
            break; 
            case plus.networkinfo.CONNECTION_CELL3G:
            mui.toast('当前使用3G网络！');
            break; 
            case plus.networkinfo.CONNECTION_CELL4G:
            mui.toast('当前使用4G网络！');
            break; 
            default:
            mui.toast('当前无网络！');
            break; 
        }
    }, false );
});




