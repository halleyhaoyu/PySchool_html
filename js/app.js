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
	
	//owner.hostname='http://192.168.31.232:8081/course-api';
	owner.hostname='http://192.168.0.185:8081/course-api';
	
	/**
	 * 用户登录
	 **/
	owner.login = function(loginInfo, callback) {
		//mui.toast('欢迎体验Hello MUI');
		callback = callback || $.noop;
		loginInfo = loginInfo || {};
		loginInfo.account = loginInfo.account || '';
		loginInfo.password = loginInfo.password || '';
		if (loginInfo.account.length < 4) {
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
//
		mui.ajax( owner.hostname+'/view/login/loginView.shtml',{
			data:{
				loginName:loginInfo.account,
				loginPassword:loginInfo.password
			},
			crossDomain:true,
			dataType:'json',//服务器返回json格式数据
			type:'post',//HTTP请求类型
			timeout:10000,//超时时间设置为10秒； 
	        //contentType:"application/x-www-form-urlencoded; charset=utf-8", 
			headers:{'Content-Type':'application/x-www-form-urlencoded; charset=utf-8'},	              
			success:function(data){
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
					msg:"用户名或密码错误"
				}
					return callback(msg);
			}
		});

	};

	owner.createState = function(userInfo) {
		var state = owner.getState();
		
		
		state.account = userInfo.loginName;
		state.token = userInfo.id;
		state.manageId = userInfo.manageId;
		if(userInfo.roleType==3){
			state.studentsDetail=userInfo.studentsDetail;
		}else if(userInfo.roleType==2){
			state.teacherDetail=userInfo.teacherDetail;
		}
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
		var state = {} ;
		owner.setState(state); 
		window.location.href='../login.html'
		
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
		var url=owner.hostname+'/view/teachingManage/listData.shtml?manageId='+userInfo.manageId+'&pageSize='+pageSize+'&pageIndex='+pageIndex;
		return owner.getCommon(url,callback);
	}
	
	/*
	 * 课程-获取课程详情
	 * */
	owner.getCourseDetail=function(chapId,courseId,callback){
		var userInfo = app.getState(); 
		var classId = userInfo.studentsDetail==undefined?0:userInfo.studentsDetail.stdClass;
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
		var url=owner.hostname+'/view/activity/listData.shtml?manageId='+userInfo.manageId+'&pageSize='+pageSize+'&pageIndex='+pageIndex;
		return owner.getCommon(url,callback);
	}
	
	/*
	  * 活动 -获取活动详情
	  */
	owner.getActivityDetail=function(activityId,callback){		
//		var url=owner.hostname+'/view/activity/listData.shtml?manageId='+userInfo.manageId+'&pageSize='+pageSize+'&pageIndex='+pageIndex;
//		return owner.getCommon(url,callback);
		var msg={
				code:-1,
				msg:"获取数据失败！"
			}
		return callback(msg);
	}
	
	
	/*
	  * 成果 -获取列表
	  */
	owner.getShowAll=function(userInfo,actFine,pageSize,pageIndex,callback){
		//view/activity/activityShow.shtml?manageId=55&actFine=1
		var url=owner.hostname+'/view/activity/activityShow.shtml?manageId='+userInfo.manageId+'&actFine='+actFine+'&pageSize='+pageSize+'&pageIndex='+pageIndex;
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