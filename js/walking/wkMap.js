var areaStr = "";
for(var i in areaArr){
	var num = parseInt(i)+1;
	areaStr += 
		'<div id="'+areaArr[i]+'" class="location_container">'+
			'<div class="animate_container">'+
				'<span class="l_number">'+num+'</span>'+
				'<img src="../images/walking/location.png" class="l_icon"/>'+
			'</div>'+
			'<img src="../images/walking/shadow.png" class="l_shadow"/>'+		
		'</div>'	;
}
$('.content').append(areaStr);

var areaPicStr = "";
for(var i in areaPicArr){
	var num = parseInt(i)+1;
	areaPicStr +=
		'<div class="show'+num+' rightContent">'+
			'<div class="list_title">'+areaPicArr[i].title+'</div>'+
			'<div class="list_detail">'+
				'<ul>';
				var picArr = areaPicArr[i].picArr;
				for(var j in picArr){
					areaPicStr +=
						'<li class="img_li"  onclick="newPages(\''+picArr[j].pinName+'\');">'+
							'<div class="img_show">'+
								'<img src="'+picArr[j].picUrl+'"/>'+
							'</div>'	+
							'<div class="img_name">'+picArr[j].name+'</div>'+
						'</li>';
				}
				areaPicStr +=
				'</ul>'+
			'</div>'+
		'</div>';
}
$('.right_show').append(areaPicStr);




window.onload = function(){
	var numberArr = []
	var timer
	$(".location_container").each( function() {
		$(this).on('tap',function(){
			var number = $(this).find('.l_number').html()
			$('.right_show').eq(0).addClass('show').removeClass('hide')
			$('.show' + number).css('display','block').siblings().css('display','none')
			//如果右侧边显示
			if($('.right_show').hasClass('show')){
				//监听点击事件
				$('body').on('tap',function(e){
					if($('.right_show').hasClass('show')){
						var clickTag = $(e.target).parent()
						//判断是否点击到除右侧栏其他的地方
						if(!clickTag.is($('.img_show'))&&!clickTag.is($('ul,li'))&&!clickTag.is($('.list_detail'))&&!clickTag.is($('.rightContent'))&&!clickTag.is($('.animate_container'))){
							$('.right_show').removeClass('show').addClass('hide')
						}
					}
				})
				//显示动画效果
//				var runContainer = $('.show' + number).find('.list_detail ul')
//				var lis = runContainer.html()
//				lis += lis
//				numberArr.push(number)
//				if(numberArr[numberArr.length - 1] != numberArr[numberArr.length - 2]){
//					runContainer.html(lis)
//					var liLength = $(runContainer).find('li').length
//					var liHeight = $(runContainer).find('li').eq(0).outerHeight()
//					console.log(runContainer.height())
//					console.log(liLength)
//					runContainer.height(liLength * liHeight + 'px')
//					var t = 0 
//					function run(){
//						t -= 1
//						if(t < - runContainer.height()/2){
//							t = 0
//						}
//						runContainer.css('top',t + 'px')
//					}
//					clearInterval(timer)
//					timer = setInterval(run,20)
//				}else{
//					return
//				}
				
			}
		})
	});
	
}
function newPages(targetName){
	var baseUrl = 'msgInfo.html';
	var url = mui.os.plus?baseUrl:baseUrl+'?targetName='+targetName;  
	mui.openWindow({
	    url: url,
	    extras: {
	        targetName: targetName
	    }
	})
}
