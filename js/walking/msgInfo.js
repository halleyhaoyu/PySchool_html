$(".play").click(function() {
	var mySwiper = new Swiper('.swiper-container', {
		autoplay: 1000,
		loop: true,
		pagination: '.swiper-pagination',
		swipeHandler : '.swipe-handler',
		effect: 'fade'
	});
	$(this).hide();
	$(".stop").show();
	mySwiper.startAutoplay();
	$(".stop").click(function() {
		$(this).hide();
		$(".play").show();
		mySwiper.stopAutoplay();
	})
})

onResizeWindow();
window.onresize = onResizeWindow;
function onResizeWindow(){
	$(".text").css("height",$(window).height()-340);
	$("#item2").css("height",$(window).height()-12);
	$("#item3").css("height",$(window).height()-12);
}



//$.fn.autotype = function() {
//	var timer = null;
//	var _this = $(this);
//	var str = _this.html();
//	// 正则替换代码行之间添加的多个空格，不去除换行输出会有明显的停顿：实际是在输出多个空格
//	str = str.replace(/(\s){2,}/g, "$1");
//	var index = 0;
//	$(this).html('');
//	var printer = function() {
//		var args = arguments;
//		var current = str.slice(index, index + 1);
//		// html标签完整输出,如：<p>
//		if(current == '<') {
//			index = str.indexOf('>', index) + 1;
//		} else {
//			index++;
//		}
//		timer = setTimeout(args.callee, 70);
//		//位运算符: 根据setInterval运行奇偶次来判断是否加入下划线字符“_”，使输入效果更逼真
//		if(index < str.length - 1) { //打印字符倒数第2个字符开始，不加下划线字符，以防止结束符可能会多输出一下划线字符
//			_this.html(str.substring(0, index) + (index & 1 ? ' ' : ''));
//		} else {
//			_this.html(str.substring(0, index));
//			clearTimeout(timer);
//		};
//	};
//	// 延迟1s开始
//	setTimeout(printer, 1000);
//};






mui.plusReady(function () {
	var self = plus.webview.currentWebview();
	for(var i in msgArr){
		if(self.targetName==msgArr[i].pinName){
			var topPicArr = msgArr[i].topPicArr,dialogueArr = msgArr[i].dialogue;
			var wordsAttr = msgArr[i].words,adoutAllArr = msgArr[i].adoutAll;
			var seeWorldArr = msgArr[i].seeWorld;
			var str1='',str2='',str3='',str4='',str5='',str6='';
			for(var j in topPicArr){//轮播图片
				str1 += '<div class="swiper-slide" style="background-image:url('+topPicArr[j].picUrl+')"></div>';
			}
			$('.swiper-wrapper').append(str1);
			//轮播图片为1张时隐藏播放按钮
			if(topPicArr.length==1)$('.playStop').css('display','none');
			$('.introText h1').html(msgArr[i].name);
			$('.introText small').html(msgArr[i].subText);
			$('.local p').html(msgArr[i].addr);
			$('.local p').attr("onclick","openBaiduMap('"+msgArr[i].name+"','"+msgArr[i].addr+"')");
			$('.text-desc').html(msgArr[i].desc);
			$('.balazi').html(msgArr[i].balazi);
			for(var k in dialogueArr){//对话
				str2 += '<li class="mui-table-view-cell mui-media">';
				if(dialogueArr[k].name=='Pingping'){
					str2 += '<div class="name1 mui-pull-left" name="Pingping">'+
						'<img src="../images/walking/boy.png">';
				}else{
					str2 += '<div class="name2 mui-pull-right" name="Yangyang">'+
						'<img src="../images/walking/girl.png">';
				}
				str2 += '</div>'	;
				if(dialogueArr[k].name=='Pingping'){
					str2 += '<div class="outputText1">';
				}else{
					str2 += '<div class="outputText2">';
				}
				str2 += 
				'<p>'+dialogueArr[k].speak+'</p>'+
				'</div>'	+
				'</li>';
			}
			$('.mui-table-view').append(str2);
//			$("#autotype").autotype();//执行打字机效果
			for(var m in wordsAttr){//词汇
				var num = parseInt(m)+1;
				str3 += 
				'<div class="word-show">'+
					'<div class="word-float-left">'+num+'</div>'+
					'<div class="word-float-right">'+
						'<p>'+wordsAttr[m].enStr+'</p>'+
						'<p>'+wordsAttr[m].textStr+'</p>'+
					'</div>'+
				'</div>';
			}
			$('.words-content').append(str3);
			for(var n in adoutAllArr){//关于
				str4 += 
				'<div class="show-div">'+
				'<div class="msg-title">'+
					'<p>'+adoutAllArr[n].title+'</p>'+
				'</div>';
				var contentArr = adoutAllArr[n].contentArr,aboutPicArr = adoutAllArr[n].aboutPic
				for(var sn in contentArr){
					var num = parseInt(sn)+1;
					str4 +=
					'<div class="word-show">'+
						'<div class="word-float-left">'+num+'</div>'+
						'<div class="word-float-right">'+
							'<p onclick="searchBdBaike(\''+contentArr[sn].name+'\')">'+contentArr[sn].name+'</p>'+
							'<p>'+contentArr[sn].desc+'</p>'+
						'</div>'+
					'</div>';
				}
				if(aboutPicArr.length>0){
					str4 += '<div class="img-show">';
					for(var x in aboutPicArr){//图片
						str4 += '<img src="'+aboutPicArr[x].picUrl+'" class="desc-pic">';
					}
					str4 += '</div>';
				}
				
				str4 += '</div>';
			}
			$('#item3').append(str4);
			
			for(var y in seeWorldArr){//放眼世界
				str6 += 
				'<div class="show-div">'+
				'<div class="msg-title">'+
					'<p>'+seeWorldArr[y].title+'</p>'+
				'</div>';
				var contentArr = seeWorldArr[y].contentArr;
				for(var sy in contentArr){
					var num = parseInt(sy)+1;
					str6 +=
					'<div class="word-show">'+
						'<div class="word-float-left">'+num+'</div>'+
						'<div class="word-float-right">'+
							'<p onclick="searchBdBaike(\''+contentArr[sy].name+'\')">'+contentArr[sy].name+'</p>'+
							'<p></p>'+
						'</div>'+
					'</div>';
				}
				str6 += '</div>';
			}
			$('#item3').append(str6);
		}
	}
	
	
	
 	$(".mui-control-item").on('tap',function(){
 		if($(this).attr('id')=='it1'){
 			$(this).parent().parent().addClass('opacity');
 		}else{
 			$(this).parent().parent().removeClass('opacity');
 		}
	});
  	
	
})




function searchBdBaike(targetName){
	var baseUrl = 'bdBaike.html';
	var url = mui.os.plus?baseUrl:baseUrl+'?targetName='+targetName;  
	mui.openWindow({
	    url: url,
	    extras: {
	        targetName: targetName
	    }
	})
}
function openBaiduMap(targetName,addr){
	var baseUrl = 'baiduMap.html';
	var url = mui.os.plus?baseUrl:baseUrl+'?targetName='+targetName;  
	mui.openWindow({
	    url: url,
	    extras: {
	        targetName: targetName,
	        addr:addr
	    }
	})
}