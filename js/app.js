/**
 * 演示程序当前的 “注册/登录” 等操作，是基于 “本地存储” 完成的
 * 当您要参考这个演示程序进行相关 app 的开发时，
 * 请注意将相关方法调整成 “基于服务端Service” 的实现。
 **/
(function($, owner) {
	/*
	 * 配置域名，当前web app 需要和api配置相同域名
	 * owner.hostname：API 服务器域名
	 */
	//owner.hostname='http://api.course.com:8081/course-api';
	owner.hostname='http://121.41.112.94:8090/course-api';
	//owner.hostname='http://192.168.31.232:8081/course-api';
	//owner.hostname='http://192.168.0.185:8081/course-api';
	//owner.hostname='http://112.124.110.182:11008/course-api';
	//owner.hostname='http://172.16.103.41:8081/course-api';
	
	
	/**
	 * 用户登录
	 **/
	owner.login = function(loginInfo, callback) {
		//mui.toast('欢迎体验Hello MUI');
		callback = callback || $.noop;
		loginInfo = loginInfo || {};
		loginInfo.loginName = loginInfo.loginName || '';
		loginInfo.password = loginInfo.password || '';
		if (loginInfo.loginName.length < 4) {
			var msg={
					code:-1,
					msg:"账号最短为 4 个字符！"
				}
			return callback(msg);
		}
		if (loginInfo.password.length < 6) {
			var msg={
					code:-1,
					msg:"密码最短为 6 个字符！"
				}
			return callback(msg);
		}
//		var users = JSON.parse(localStorage.getItem('$users') || '[]');
//		var authed = users.some(function(user) {
//			return loginInfo.account == user.account && loginInfo.password == user.password;
//		});
		var url=owner.hostname+'/view/login/loginView.shtml';
		console.info(url);
		var loginData={
				loginName:loginInfo.loginName,
				loginPassword:loginInfo.password
			}
		console.info(JSON.stringify(loginData) ); 
		mui.ajax( url,{
			data:loginData,
			crossDomain:true,
			dataType:'json',//服务器返回json格式数据
			type:'post',//HTTP请求类型
			timeout:10000,//超时时间设置为10秒； 
	        //contentType:"application/json; charset=utf-8",
			//headers:{'Content-Type':'application/json; charset=utf-8'},	              
			headers:{'Content-Type':'application/x-www-form-urlencoded; charset=utf-8'},	              
			success:function(data){				
				console.info(JSON.stringify(data) ); 
				console.info(data.msg);
				console.info(data.object.userInfo.roleType);
				//服务器返回响应，根据响应结果，分析是否登录成功；
				if(data.code=='0'){
					owner.createState(data.object.userInfo);
				}
				return callback(data);
			},
			error:function(xhr,type,errorThrown){
				//异常处理；
				console.log(xhr);
				console.log(type);
				console.log(errorThrown);
				
				var msg={
					code:-1,
					msg:"服务器登陆错误！"
				}
					return callback(msg);
			}
		});

	};

	owner.createState = function(userInfo) {
		var state = owner.getState();
		
		
		state  = userInfo ;
//		state.token = userInfo.id;
//		state.manageId = userInfo.manageId;
//		state.roleType = userInfo.roleType;
		// state = state || {};
		state.studentsDetail=state.studentsDetail || {};
	 
		state.teacherDetail=state.teacherDetail || {} ;
		 
		owner.setState(state); 
	};
	/**
	 * 获取当前状态
	 **/
	owner.getState = function() {
		var stateText = localStorage.getItem('$state') || "{}";
		return JSON.parse(stateText);
	};
	owner.gotoLogin = function(){
		owner.logout();
		window.location.href='../login.html';
	}

	owner.logout = function(){		
		var state = {} ;
		owner.setState(state); 
	}
	

	/**
	 * 设置当前状态
	 **/
	owner.setState = function(state) {
		state = state || {};
		localStorage.setItem('$state', JSON.stringify(state));
		//var settings = owner.getSettings();
		//settings.gestures = '';
		//owner.setSettings(settings);
	};

	

	/*
	 * 课程-获取课程列表
	 * */
	owner.getCourseAll=function(pageSize,pageIndex,callback){
		var userInfo = app.getState(); 
		var url=owner.hostname+'/view/teachingManage/listData.shtml?manageId='+userInfo.manageId+'&page='+pageIndex;
		return owner.getCommon(url,callback);
	}
	/*
	 * 课程-相关课程列表
	 * */
	owner.getCourseAllOption=function(callback){
		//view/activity/courseClass.shtml
		var userInfo = app.getState(); 
		var url=owner.hostname+'/view/activity/courseClass.shtml?manageId='+userInfo.manageId;
		return owner.getCommon(url,callback);
	}
	
	
	
	/*
	 * 课程-获取课程详情
	 * */
	owner.getCourseDetail=function(chapId,courseId,classId,callback){
		var userInfo = app.getState(); 
		var classId = classId==undefined?0:classId;
		var url=owner.hostname+'/view/teachingManage/detailView.shtml?chapClassId='+chapId+'&manageId='+userInfo.manageId+'&tmId='+courseId+'&tcId='+classId ;
		return owner.getCommon(url,callback);
	}
	
	/*
	 * 课程-获取课程目录
	 */	
	owner.getCourseDir=function(rcId,parentId,callback){
		var userInfo = app.getState(); 
		// /view/teachingManage/listTreeData.shtml?manageId=55&rcId=4&id=5
		//  view/teachingManage/listAllTreeData.shtml?manageId=55&rcId=4
		var url=owner.hostname+'/view/teachingManage/listAllTreeData.shtml?manageId='+userInfo.manageId+'&rcId='+rcId;
	
		return owner.getCommon(url,callback); 
	}
	
	/*
	 * 课程-获取课程选课
	 */	
	owner.getCourseSelect=function(rcId,callback){
		var userInfo = app.getState();
		// /view/teachingManage/listTreeData.shtml?manageId=55&rcId=4&id=5
		var url=owner.hostname+'/view/teachingManage/courseData.shtml?manageId='+userInfo.manageId+'&rcId='+rcId; 
		return owner.getCommon(url,callback); 
	}
	 
	/*
	  * 活动 -获取活动列表
	  */
	owner.getActivityAll=function(userInfo,pageSize,pageIndex,callback){		
		var url=owner.hostname+'/view/activity/listData.shtml?manageId='+userInfo.manageId+'&page='+pageIndex;
		return owner.getCommon(url,callback);
	}
	
	/*
	  * 活动 -获取活动详情
	  */
	owner.getActivityDetail=function(activityId,callback){
		//view/activity/detailView.shtml?actId=1
		var userInfo = app.getState();
		var url=owner.hostname+'/view/activity/detailView.shtml?manageId='+userInfo.manageId+'&actId='+activityId;
		return owner.getCommon(url,callback);
//		var msg={
//				code:-1,
//				msg:"获取数据失败！"
//			}
		return callback(msg);
	}
	
		/*
	  * 活动 -获取活动详情
	  */
	owner.getExchangeAreaList=function(classId,pageIndex,callback){
		//view/activity/acAreaList.shtml&page=1 manageId   acaClassId 
		var userInfo = app.getState();
		var url=owner.hostname+'/view/activity/acAreaList.shtml?manageId='+userInfo.manageId+'&acaClassId='+classId+'&page='+pageIndex;
		return owner.getCommon(url,callback);
		return callback(msg);
	}
	
	
	
		/*
	  * 活动 -大家作品列表
	  */
	owner.getEveryoneWorkList=function(activityId,pageIndex,callback){
		// view/activity/allStudentWork.shtml?manageId=76&page=1 aswActId
		var userInfo = app.getState();
		var url=owner.hostname+'/view/activity/allStudentWork.shtml?manageId='+userInfo.manageId+'&aswActId='+activityId+'&page='+pageIndex;
		return owner.getCommon(url,callback); 
		return callback(msg);
	}
	
	
	/*
	  * 成果 -获取列表
	  */
	owner.getShowAll=function(userInfo,actFine,pageSize,pageIndex,callback){
		//view/activity/activityShow.shtml?manageId=55&actFine=1
		var url=owner.hostname+'/view/activity/activityShow.shtml?manageId='+userInfo.manageId+'&actFine='+actFine+'&page='+pageIndex;
		return owner.getCommon(url,callback); 
	}
	
	/*
	  * 我的 -学生-成长轨迹
	  */
	owner.getTimeLine=function(pageIndex,callback){
		//view/student/growthTrack.shtml?manageId=76
		var userInfo = app.getState();
		var url=owner.hostname+'/view/student/growthTrack.shtml?manageId='+userInfo.manageId+'&page='+pageIndex;
		return owner.getCommon(url,callback); 
	}
	
	/*
	  * 我的 -学生-我的荣誉
	  */
	owner.getMyHonor=function(callback){
		//view/activity/honorData.shtml?manageId=76
		var userInfo = app.getState();
		var url=owner.hostname+'/view/activity/honorData.shtml?manageId='+userInfo.manageId ;
		return owner.getCommon(url,callback); 
	}
	
	
	
	
	/*
	  * 我的 -老师-学生排行榜
	  */
	owner.getStudentPraiseRankingList=function(callback){
		//view/student/praiseRankingListData.shtml?manageId=55&page=1
		var userInfo = app.getState();
		var url=owner.hostname+'/view/student/praiseRankingListData.shtml?manageId='+userInfo.manageId+'&page=1' ;
		return owner.getCommon(url,callback); 
	}
	
	/*
  		* 我的 -老师-活动点赞
  	*/
	owner.getActivityPraiseRankingList=function(callback){
		//view/activity/praiseRankingListData.shtml?manageId=55&page=1
		var userInfo = app.getState();
		var url=owner.hostname+'/view/activity/praiseRankingListData.shtml?manageId='+userInfo.manageId +'&page=1';
		return owner.getCommon(url,callback); 
	}
		/*
	 * 业务功能
	 * */
	owner.getCommon=function(url,callback){
			console.log(url);
		mui.ajax( url,{
			dataType:'json',//服务器返回json格式数据
			crossDomain:true,
			type:'get',//HTTP请求类型
			timeout:10000,//超时时间设置为10秒； 
	        contentType:"application/json; charset=utf-8",
			headers:{'Content-Type':'application/json; charset=utf-8'},	              
			success:function(data){
				console.info(JSON.stringify(data));
				return callback(data);
			},
			error:function(xhr,type,errorThrown){
				//异常处理；
				var msg={
					code:-1,
					msg:"获取数据失败！"
				}
					return callback(msg);
			}
		});
	}


///////////////////////////////////////////////////////
///// POST 
/////////////////////////////////////////////////////////////////////////
	/*
	  * 课程-选课提交
	  */
	owner.postSelectCourse=function(data,callback){
		var userInfo = app.getState();
		//view/teachingManage/join.shtml
		var url=owner.hostname+'/view/teachingManage/join.shtml';  
	 	
		return owner.postCommon(url,data,callback); 
	}
	
	/*
	  * 课程-课程体会
	  */
	owner.postCourseExperience=function(data,callback){
		//view/teachingManage/join.shtml
		var url=owner.hostname+'/view/teachingManage/experience.shtml';	 	
		return owner.postCommon(url,data,callback); 
	}


	/*
	  * 活动-加入/退出活动
	  */
	owner.postActivityDetailJoin=function(data,callback){
		var userInfo = app.getState();
		//	view/activity/join.shtml
		var url=owner.hostname+'/view/activity/join.shtml';
		return owner.postCommon(url,data,callback); 
	}
	
	
	/*
	  * 活动-我的作品
	  */
	owner.postMyWorks=function(data,callback){
		var userInfo = app.getState();
		//	view/activity/activityStudentWork.shtml
		var url=owner.hostname+'/view/activity/activityStudentWork.shtml';
		return owner.postCommon(url,data,callback); 
	}
	
	/*
	  * 活动-活动申请
	  */
	owner.postAddActivity=function(data,callback){
		//	view/activity/activityEdit.shtml
		var url=owner.hostname+'/view/activity/activityEdit.shtml';
		return owner.postCommon(url,data,callback);
	}
	
	/*
	  * 活动-活动申请
	  */
	owner.postActivityReply=function(data,callback){
		//	view/activity/highlights.shtml
		var url=owner.hostname+'view/activity/highlights.shtml';
		return owner.postCommon(url,data,callback);
	}
	
	
	
	

	/*
	  * 评论-提交
	  */
	owner.postComment=function(data,callback){
		//	view/activity/comment.shtml
		var url=owner.hostname+'/view/activity/comment.shtml';
		return owner.postCommon(url,data,callback);
	}
	
	/*
	  * 我的-学生-修改个人信息
	  */
	owner.postSetStudentInfo=function(data,callback){
		//	view/student/save.shtml
		var url=owner.hostname+'/view/student/save.shtml';
		return owner.postCommon(url,data,callback);
	}	
	
	/*
	  * 我的-老师-修改个人信息
	  */
	owner.postSetTeacherInfo=function(data,callback){
		//	view/teacher/teachersDetail.shtml
		var url=owner.hostname+'/view/teacher/teachersDetail.shtml';
		return owner.postCommon(url,data,callback);
	}	
	
	/*
	  * 我的-老师-修改个人信息
	  */
	owner.postModifyPassword=function(data,callback){
		//	view/login/modifyPassword.shtml
		var url=owner.hostname+'/view/login/modifyPassword.shtml';
		return owner.postCommon(url,data,callback);
	}	
	
	
	

	/*
	 * 业务功能 POST
	 * */
	owner.postCommon=function(url,data,callback){
			console.log(JSON.stringify(data));
			//url+=owner.getPramString(data);
			console.log(url);
		mui.ajax( url,{
			data:data,
			crossDomain:true,
			dataType:'json',//服务器返回json格式数据
			type:'post',//HTTP请求类型
			timeout:10000,//超时时间设置为10秒； 
	        //contentType:"application/json; charset=utf-8",
	        //contentType:"application/x-www-form-urlencoded; charset=utf-8",
	        headers:{'Content-Type':'application/json'},
			//headers:{'Content-Type':'application/json; charset=utf-8'},	              
			//headers:{'Content-Type':'application/x-www-form-urlencoded; charset=utf-8'},
			processData:false,
			success:function(data){
				console.info(JSON.stringify(data));
				return callback(data);
			},
			error:function(xhr,type,errorThrown){
				//异常处理；
				console.info(JSON.stringify(type));
				console.info(JSON.stringify(errorThrown));
				var msg={
					code:-1,
					msg:"数据提交失败！"
				}
				return callback(msg);
			}
		});
	}
 

	owner.getPramString = function(data){
		var pram='';
		for (var prop in data){
			if(pram.length>0){
				pram= pram + '&'+prop+'='+data[prop];
			}else{
				pram='?'+prop+'='+data[prop];
			}
		}
		console.info(pram);
		return pram ;
	}
	/**
	 * 新用户注册
	 **/
	owner.reg = function(regInfo, callback) {
		callback = callback || $.noop;
		regInfo = regInfo || {};
		regInfo.account = regInfo.account || '';
		regInfo.password = regInfo.password || '';
		if (regInfo.account.length < 5) {
			return callback('用户名最短需要 5 个字符');
		}
		if (regInfo.password.length < 6) {
			return callback('密码最短需要 6 个字符');
		}
		if (!checkEmail(regInfo.email)) {
			return callback('邮箱地址不合法');
		}
		var users = JSON.parse(localStorage.getItem('$users') || '[]');
		users.push(regInfo);
		localStorage.setItem('$users', JSON.stringify(users));
		return callback();
	};
	
	
			/**
		 * 获取本地是否安装客户端
		 **/
	owner.isInstalled = function(id) {
		if (id === 'qihoo' && mui.os.plus) {
			return true;
		}
		if (mui.os.android) {
			var main = plus.android.runtimeMainActivity();
			var packageManager = main.getPackageManager();
			var PackageManager = plus.android.importClass(packageManager)
			var packageName = {
				"qq": "com.tencent.mobileqq",
				"weixin": "com.tencent.mm",
				"sinaweibo": "com.sina.weibo"
			}
			try {
				return packageManager.getPackageInfo(packageName[id], PackageManager.GET_ACTIVITIES);
			} catch (e) {}
		} else {
			switch (id) {
				case "qq":
					var TencentOAuth = plus.ios.import("TencentOAuth");
					return TencentOAuth.iphoneQQInstalled();
				case "weixin":
					var WXApi = plus.ios.import("WXApi");
					return WXApi.isWXAppInstalled()
				case "sinaweibo":
					var SinaAPI = plus.ios.import("WeiboSDK");
					return SinaAPI.isWeiboAppInstalled()
				default:
					break;
			}
		}
	}
	
	
	var checkEmail = function(email) {
		email = email || '';
		return (email.length > 3 && email.indexOf('@') > -1);
	};

	/**
	 * 找回密码
	 **/
	owner.forgetPassword = function(email, callback) {
		callback = callback || $.noop;
		if (!checkEmail(email)) {
			return callback('邮箱地址不合法');
		}
		return callback(null, '新的随机密码已经发送到您的邮箱，请查收邮件。');
	};

	/**
	 * 获取应用本地配置
	 **/
	owner.setSettings = function(settings) {
		settings = settings || {};
		localStorage.setItem('$settings', JSON.stringify(settings));
	}

	/**
	 * 设置应用本地配置
	 **/
	owner.getSettings = function() {
			var settingsText = localStorage.getItem('$settings') || "{}";
			return JSON.parse(settingsText);
		}

	
	
}(mui, window.app = {}));