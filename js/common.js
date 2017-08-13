/**
 * @param {Object} title 弹窗显示的标题
 * @param {Object} num 选择图片的数量
 */
function cameraAndAlbum(title,num){
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
                    cameraAndUpload();
                    break; 
                case 2: 
                    albumAndUpload(num);
                    break; 
                default: 
                    break; 
            } 
        }) 
    } 
}

//相册选择照片上传
function albumAndUpload(num){
	plus.gallery.pick(
        function(paths){
        		//paths.files所选择图片路径
            taskUpload(paths.files);
        },
        function(e){
        		mui.toast('取消了选择');
        },
        {
        		multiple:true,
        		maximum:num
        }
    );
}
//拍照上传
function cameraAndUpload(){
	var c = plus.camera.getCamera();
    c.captureImage(function(e) {
        plus.io.resolveLocalFileSystemURL(e, function(entry) {
        	//entry.toLocalURL()拍照的图片路径
            var paths = new Array();
            paths.push(entry.toLocalURL())
            console.log(paths[0]);
            taskUpload(paths);
            
        }, function(e) {
            console.log("读取拍照文件错误：" + e.message);
        });
    }, function(s) {
        console.log("error" + s);
    }, {
        filename: "_doc/camera/"
    })
}






//创建上传任务
function taskUpload(imageList){
	plus.nativeUI.showWaiting();
	var task = null;
	task = plus.uploader.createUpload(
    		'http://112.124.110.182:11008/course-api/uploadCommonApp.shtml',
    		{ method:"POST",priority:100},
    		function (t,status){
        		plus.nativeUI.closeWaiting();
        		t.responseText = JSON.parse(t.responseText);//首次转换数据
        		console.log(t.responseText);
        		var objStr = JSON.parse(t.responseText);//需再次转换
        		for(var k in objStr.objectList){
        			console.log(objStr.objectList[k].pathAll);//上传完成的图片全路径
        		}
        		mui.toast('上传成功！');
    		}
	);
	for(var i in imageList){
    		task.addFile(imageList[i],{key:'uper'+i,'name':imageList[i].substr(imageList[i].lastIndexOf('/'))});
    		task.addData('fileName',imageList[i].substr(imageList[i].lastIndexOf('/')));
    		task.addData('fileType','TaskExecPicture');
	}
	task.start();
}