var areaArr = ['huangpu','pudongxinqu','songjiang','chongming','jinshan','minhang','nanhui','jiading'];

var areaPicArr = [
	{title:'黄浦、徐汇...',picArr:[
		{picUrl:'../images/walking/HuangPu/YuYuan/001.png',name:'豫园',pinName:'YuYuan'},
		{picUrl:'../images/walking/HuangPu/WaiTan/001.png',name:'外滩',pinName:'WaiTan'},
		{picUrl:'../images/walking/HuangPu/BoWuGuan/001.png',name:'上海博物馆',pinName:'BoWuGuan'},
		{picUrl:'../images/walking/HuangPu/NanJingLu/001.png',name:'南京路',pinName:'NanJingLu'},
		{picUrl:'../images/walking/HuangPu/XinTianDi/001.png',name:'新天地',pinName:'XinTianDi'},
		{picUrl:'../images/walking/XuHui/LvDi/001.png',name:'徐汇绿地',pinName:'LvDi'},
		{picUrl:'../images/walking/XuHui/JiaoTong/001.png',name:'交通大学',pinName:'JiaoTong'},
		{picUrl:'../images/walking/LuWan/ZhouGongGuan/001.png',name:'周公馆',pinName:'ZhouGongGuan'},
		{picUrl:'../images/walking/LuWan/TianZiFang/001.png',name:'田子坊',pinName:'TianZiFang'},
		{picUrl:'../images/walking/JingAn/WangJiaSha/001.png',name:'王家沙',pinName:'WangJiaSha'}
		
	]},
	{title:'浦东新区',picArr:[
		{picUrl:'../images/walking/PuDongXinQu/HuanQiu/001.png',name:'环球金融中心',pinName:'HuanQiu'},
		{picUrl:'../images/walking/PuDongXinQu/YiShuGong/001.png',name:'中华艺术宫',pinName:'YiShuGong'}
	]},
	{title:'松江区',picArr:[
		{picUrl:'../images/walking/SongJiang/HuanLeGu/001.png',name:'欢乐谷',pinName:'HuanLeGu'}
	]},
	{title:'崇明区',picArr:[
		{picUrl:'../images/walking/ChongMing/ShiDi/001.png',name:'湿地公园',pinName:'ShiDi'}
	]},
	{title:'金山区',picArr:[
		{picUrl:'../images/walking/JinShan/ShaTan/001.png',name:'城市沙滩',pinName:'ShaTan'},
		{picUrl:'../images/walking/JinShan/NongMinHua/001.png',name:'农民画村',pinName:'NongMinHua'}
	]},
	{title:'闵行区',picArr:[
		{picUrl:'../images/walking/MinHang/QiBao/001.png',name:'七宝',pinName:'QiBao'},
		{picUrl:'../images/walking/MinHang/HongQiao/001.png',name:'虹桥枢纽',pinName:'HongQiao'}
	]},
	{title:'南汇区',picArr:[
		{picUrl:'../images/walking/NanHui/TaoYuan/001.png',name:'桃园民俗村',pinName:'TaoYuan'}
	]},
	{title:'嘉定',picArr:[
		{picUrl:'../images/walking/JiaDing/SaiCheChang/001.png',name:'F1国际赛车场',pinName:'SaiCheChang'}
	]}
];

var msgArr = [
	//--------------------------------------------START--------------------------------------------//
	//--------------------------------------------豫园--------------------------------------------//
	{
		name:'豫园',pinName:'YuYuan',subText:'Yu Garden——Stories about old urban area',addr:'上海市黄浦区安仁街132号',
		desc:'豫园坐落于上海市中心的黄浦区，是一座典型的江南古典园林。它的建筑和街道保留着明清时期传统的、古老的风貌，'+
		'是观光、购物、美食和休闲为一体的商业中心。'+
		'豫园有三大看点，一是精致的园林建筑，二是石雕、木刻等艺术品，三是顺道逛逛旁边的商场，品尝上海本地和全国各地的风味小吃，'+
		'如蟹粉小笼，老虎爪等，都是纯正的海派特色。每年元宵节，豫园还会举行盛大的灯会，吸引成千上万的游客前往观赏。',
		balazi:'在老上海人的口中，一直流传着这样一句话：“不去城隍庙，等于没到过大上海。”由于城隍庙保留了上海老城厢的独特风貌，'+
		'所以成为了认识上海的必去之地。今天，就让我们走访上海豫园， 去看看古老的 “街市” 风景， 找找地道的 “上海”风味。',
		topPicArr:[
			{picUrl:'../images/walking/HuangPu/YuYuan/001.png',pinName:'YuYuan'}
		],
		dialogue:[
			{name:'Pingping',speak:'Look!  What’s this place?'},
			{name:'Yangyang',speak:'It’s Yu Garden. '},
			{name:'Pingping',speak:'Wow! It’s so beautiful.What can we do here?'},
			{name:'Yangyang',speak:'We can buy all kinds of things at Chenghuang Temple.We can enjoy Lantern Exhibition'+
			'on Bridge of Nine Turnings.'},
			{name:'Pingping',speak:'How interesting!Chenghuang Temple must be very old.'},
			{name:'Yangyang',speak:'Yeah, you are right. It has a history of 800 years.'}
		],
		words:[
			{textStr:'豫园',enStr:'Yu Garden'},{textStr:'九曲桥',enStr:'Bridge of Nine Turnings'},
			{textStr:'历史',enStr:'history '},{textStr:'各种各样的',enStr:'all kinds of'},
			{textStr:'灯展',enStr:'Lantern Exhibition'},{textStr:'城隍庙',enStr:'Chenghuang Temple'}
		],
		adoutAll:[
			{
				title:'上海古老的街道城墙',
				contentArr:[
					{name:'上海老街',desc:'方浜中路249号'},
					{name:'上海古城墙',desc:'大境路259号,269号'}
				],
				aboutPic:[
					{picUrl:'../images/walking/HuangPu/YuYuan/1.png'},{picUrl:'../images/walking/HuangPu/YuYuan/2.png'},
					{picUrl:'../images/walking/HuangPu/YuYuan/3.png'},{picUrl:'../images/walking/HuangPu/YuYuan/4.png'},
					{picUrl:'../images/walking/HuangPu/YuYuan/5.png'}
				]
			}
		],
		seeWorld:[
			{title:'放眼世界',
			contentArr:[
				{name:'唐人街'},{name:'威尼斯'},{name:'雅法老城'}
			]}
		]
	},
	//--------------------------------------------周公馆--------------------------------------------//
	{
		name:'周公馆',pinName:'ZhouGongGuan',subText:'Zhou Gong Museum——Stories about old foreign-style houses',
		addr:'上海市卢湾区思南路73号',
		desc:'幽静的思南路，马路两边的法国梧桐环抱着窄窄的路面，树荫深处是 20 多幢花园洋房，有的还是名人的故居。'+
		'怀思南路 73 号，曾经是当年中国共产党代表团的驻沪办事处，因为周恩来总理曾经在这里工作，也称为“周公馆”。',
		balazi:'走过上海的大街小巷，不经意间你就会与“上海的过去”不期而遇。一条条老马路、一栋栋老房子，走在其中，'+
		'仿佛坐着“时光机”穿梭回到了过去。今天，让我们去走走思南路，看看名人故居，了解“过去的故事”，体会“上海的味道”。',
		topPicArr:[
			{picUrl:'../images/walking/LuWan/ZhouGongGuan/001.png',name:'周公馆',pinName:'ZhouGongGuan'}
		],
		dialogue:[
			{name:'Pingping',speak:'hi, Yangyang, do you know how old Shanghai is?'},
			{name:'Yangyang',speak:'I know. Shanghai is 700 years old. '},
			{name:'Pingping',speak:'Oh, really? There must be a lot of old stories about Shanghai.'},
			{name:'Yangyang',speak:'That’s right. This is Zhou Gong Museum. It tells us a lot of old'},
			{name:'Pingping',speak:'I can’t wait! Let’s go inside and have a look.'},
			{name:'Yangyang',speak:'Ok, let’s go.'}
		],
		words:[
			{textStr:'老洋房',enStr:'old villa'},{textStr:'过去的故事',enStr:'the story of the past'},
			{textStr:'周公馆',enStr:'Zhou Gong Museum'}
		],
		adoutAll:[
			{
				title:'上海的名人故居',
				contentArr:[
					{name:'孙中山故居',desc:'香山路7号'},{name:'宋庆龄故居',desc:'淮海中路1843号'},
					{name:'宋美龄陪嫁—“爱庐”',desc:'东平路9号，现上海音乐学院附中'},{name:'鲁迅故居',desc:'山阴路132弄9号'},
					{name:'蔡元培故居',desc:'华山路303 弄16 号'}
				],
				aboutPic:[
					{picUrl:'../images/walking/LuWan/ZhouGongGuan/1.png'},{picUrl:'../images/walking/LuWan/ZhouGongGuan/2.png'},
					{picUrl:'../images/walking/LuWan/ZhouGongGuan/3.png'},{picUrl:'../images/walking/LuWan/ZhouGongGuan/4.png'},
					{picUrl:'../images/walking/LuWan/ZhouGongGuan/5.png'}
				]
			},
			{
				title:'上海的花园洋房',
				contentArr:[
					{name:'童话世界—马勒公寓',desc:'陕西南路30号'},{name:'上海工艺美术博物馆',desc:'汾阳路79号'},
					{name:'罗别根花园',desc:'虹桥路2310号'},{name:'大班住宅',desc:'武康路99号'}
				],
				aboutPic:[
					{picUrl:'../images/walking/LuWan/ZhouGongGuan/6.png'},{picUrl:'../images/walking/LuWan/ZhouGongGuan/7.png'},
					{picUrl:'../images/walking/LuWan/ZhouGongGuan/8.png'},{picUrl:'../images/walking/LuWan/ZhouGongGuan/9.png'}
				]
			}
		],
		seeWorld:[
			{title:'放眼世界',
			contentArr:[
				{name:'白金汉宫'},{name:'罗马斗兽场'},{name:'比萨斜塔'}
			]}
		]
	},
	//--------------------------------------------田子坊--------------------------------------------//
	{
		name:'田子坊',pinName:'TianZiFang',subText:'Tianzifang——Stories about old alleys',
		addr:'上海市卢湾区泰康路210弄',
		desc:'“田子坊”位于泰康路靠近瑞金二路处。这里原先是打浦桥地区的一条小街和马路集市。自1998年著名画家陈逸飞等一些艺术家'+
		'先后入驻泰康路，让原来默默无闻的小马路渐渐吹起了艺术之风。曾经居住在弄堂里的上海人邻里互助、亲如一家。'+
		'“田子坊”保留了石库门里弄平常人家的真实生活，所以让人感觉亲切而温暖。自由穿行在迷宫般的弄堂里，看到的是一家家的特色小店'+
		'和一个个的艺术作坊。晾晒在头顶上的衣服，奔跑在弄堂里的孩子，这就是“小八腊子”曾经的弄堂生活。',
		balazi:'弄堂是上海的特产，是属于上海人的。它记录了上海人的生活，记载了上海的故事。随着上海大规模的城市改造，'+
		'我们纷纷住进了高楼、新房，曾经陪伴了上海人一个多世纪的弄堂慢慢在消逝。今天，让我们走进“田子坊”，'+
		'一起去感受上海弄堂里那与众不同的生活。',
		topPicArr:[
			{picUrl:'../images/walking/LuWan/TianZiFang/001.png',name:'田子坊',pinName:'TianZiFang'}
		],
		dialogue:[
			{name:'Pingping',speak:'Yangyang, I go to Tianzifang today.'},
			{name:'Yangyang',speak:'Really? Anything interesting?'},
			{name:'Pingping',speak:'Yeah. The lane life is very interesting!'},
			{name:'Yangyang',speak:'Do you see any paintings?'},
			{name:'Pingping',speak:'So many! I think there are a lot of artists there.'},
			{name:'Yangyang',speak:'Great! I will visit Tianzifang next week.'}
		],
		words:[
			{textStr:'田子坊',enStr:'Tianzifang'},{textStr:'弄堂生活',enStr:'lane life'},
			{textStr:'有趣的',enStr:'interesting'},{textStr:'油画',enStr:'painting'},
			{textStr:'参观',enStr:'visit'},,{textStr:'艺术家',enStr:'artist'}
		],
		adoutAll:[
			{
				title:'上海的弄堂',
				contentArr:[
					{name:'尚贤坊',desc:'淮海中路358弄'},{name:'渔阳里',desc:'南昌路100弄'},
					{name:'步高里',desc:'陕西南路287弄'},{name:'霞飞里',desc:'淮海中路927弄'},
					{name:'万宜坊',desc:'重庆南路205弄'}
				],
				aboutPic:[
					{picUrl:'../images/walking/LuWan/TianZiFang/1.png'},{picUrl:'../images/walking/LuWan/TianZiFang/2.png'},
					{picUrl:'../images/walking/LuWan/TianZiFang/3.png'},{picUrl:'../images/walking/LuWan/TianZiFang/4.png'},
					{picUrl:'../images/walking/LuWan/TianZiFang/5.png'}
				]
			}
		],
		seeWorld:[
			{title:'放眼世界',
			contentArr:[
				{name:'白金汉宫'},{name:'罗马斗兽场'},{name:'比萨斜塔'}
			]}
		]
	},
	//--------------------------------------------外滩--------------------------------------------//
	{
		name:'外滩',pinName:'WaiTan',subText:'The Bund——Various buildings in Shanghai',
		addr:'上海市黄浦区中山东一路',
		desc:'外滩又名中山东一路，全长约1.5 公里。位于浦西，东临黄浦江，西面为哥特式、罗马式、巴洛克式、中西合璧式等52幢风格各异的大楼，'+
		'被称为“万国建筑博览群”。上海外滩的江面、长堤、绿化带及美轮美奂的建筑群所构成的街景，是最具有特征的上海景观。'+
		'早晨，上海外滩是人们的健身的场所；白天，它是繁华热闹的游览胜地；晚上，则是纳凉散步的休闲天地。每当华灯初上之时，'+
		'外滩各栋建筑物上灯光辉煌，一座座犹如水晶宫似的，令海内外游客赞叹不已。',
		balazi:'外滩是来上海观光游客的必到之地。从外白渡桥开始，沿着黄浦江堤岸在浦西一路走来，领略“万国建筑博览群”的风采；'+
		'远望对岸，浦东陆家嘴金融贸易区清晰可见。今天，我们就一起去走走、看看吧。',
		topPicArr:[
			{picUrl:'../images/walking/HuangPu/WaiTan/001.png',name:'外滩',pinName:'WaiTan'}
		],
		dialogue:[
			{name:'Pingping',speak:'Yangyang, what do you do at this weekend?'},
			{name:'Yangyang',speak:'My family go to the Bund on Sunday. It is beautiful.'},
			{name:'Pingping',speak:'What do you see there?'},
			{name:'Yangyang',speak:'The Bund faces our mother river—Huangpu River. It is wide. I like it very much.'},
			{name:'Pingping',speak:'Do you see International Architecture Exhibition Group?'},
			{name:'Yangyang',speak:'Yeah, I take a lot of photos. I will show you now.'}
		],
		words:[
			{textStr:'外滩',enStr:'The Bund'},{textStr:'万国建筑博览群',enStr:' International Architecture Exhibition Group '}
		],
		adoutAll:[
			{
				title:'外滩的古典建筑群',
				contentArr:[
					{name:'上海总会',desc:'黄浦区中山东一路2号'},{name:'亚细亚大楼',desc:'黄浦区延安东路2号'},
					{name:'东风饭店',desc:'黄浦区中山东一路3号'},{name:'汇丰银行大楼',desc:'浦东新区世纪大道8号'},
					{name:'怡泰邮船大楼',desc:'黄浦区北京东路2号-7楼-712室'},{name:'俄罗斯总领事馆',desc:'上海市虹口区黄浦路20号'},
					{name:'气象信号台',desc:'中山东二路1号甲'}
				],
				aboutPic:[
					{picUrl:'../images/walking/HuangPu/WaiTan/3.png'},{picUrl:'../images/walking/HuangPu/WaiTan/4.png'},
					{picUrl:'../images/walking/HuangPu/WaiTan/5.png'},{picUrl:'../images/walking/HuangPu/WaiTan/6.png'}
				]
			},
			{
				title:'上海的地标性建筑',
			contentArr:[
				{name:'海关大楼',desc:'黄浦区中山东一路13号'},{name:'和平饭店',desc:'黄浦区南京东路20号'},
				{name:'上海大厦',desc:'北苏州路20号'},{name:'东方明珠电视塔',desc:'浦东区世纪大道1号'},
				{name:'上海展览中心',desc:'静安区延安中路1000号'},{name:'上海图书馆',desc:'徐汇区淮海中路1555号'},
				{name:'上海国际会议中心',desc:'滨江大道2727号'},{name:'上海博物馆',desc:'黄浦区人民大道201号'},
				{name:'上海大剧院',desc:'人民大道300号'},{name:'上海新锦江大酒店',desc:'长乐路161号'},
				{name:'上海体育场',desc:'徐汇区天钥桥路666号'},{name:'浦东国际机场',desc:'浦东新区迎宾大道6000号'}
			],
			aboutPic:[
				{picUrl:'../images/walking/HuangPu/WaiTan/1.png'},{picUrl:'../images/walking/HuangPu/WaiTan/2.png'}
			]
			}
		],
		seeWorld:[
			{title:'放眼世界',
			contentArr:[
				{name:'布达佩斯布达城堡'},{name:'大本钟'},{name:'爱丁堡'},{name:'圣保罗教堂'}
			]}
		]
	},
	//--------------------------------------------环球金融中心--------------------------------------------//
	{
		name:'环球金融中心',pinName:'HuanQiu',subText:'World Financial Center——High-rise buildings in Shanghai',
		addr:'上海市浦东新区世纪大道100号',
		desc:'上海环球金融中心是一幢以办公为主，集商贸、宾馆、观光、会议等设施于一体的综合型大厦，地上101层，高492米，'+
		'就现在而言是中国第一、世界第三高楼，位于中国上海陆家嘴，比邻金茂大厦。<br/>'+
		'●上海环球金融中心94F 观光大厅<br/>'+
		'观光大厅可以一览新旧上海风貌之外，还能以美丽的浦江两岸为背景举办各种展会和活动，带给你完全不同的视听感受'+
		'和前所未有的身心震撼。<br/>'+
		'●上海环球金融中心97F 观光天桥<br/>'+
		'观光天桥犹如一道浮在空中的天桥，身处其中，仿佛漫步天际，开放式的玻璃顶棚设计令你在仰望天际的同时，尽情呼吸最清新的空气，'+
		'蓝天白云触手可及，人与自然在这里溶为一体。<br/>'+
		'●上海环球金融中心100F 观光天阁<br/>'+
		'观光天阁是一条长约55 米的悬空观光长廊，为目前世界上最高的观光设施，内设三条透明玻璃地板，走在上面还能体验一回'+
		'”会当凌绝顶，一览众山小“的豪情快意。',
		balazi:'在上海这座世界瞩目的国际化大都市里，云集了一批高楼大厦，有大家熟知的金茂大厦，也有目前上海最高的环球金融中心。'+
		'在2011 年的The World’s Best Skylines 全球摩天城市排行榜中，仅次于香港和纽约，位列榜单第三位。今天，我们就一起去参观参观，'+
		'感受一下上海这座现代化高度发展城市的节奏吧！',
		topPicArr:[
			{picUrl:'../images/walking/PuDongXinQu/HuanQiu/001.png',name:'环球金融中心',pinName:'HuanQiu'}
		],
		dialogue:[
			{name:'Pingping',speak:'Wow, what is this ?'},
			{name:'Yangyang',speak:'It’s the Shanghai World Financial Center'},
			{name:'Pingping',speak:'How beautiful the skyscraper is!'},
			{name:'Yangyang',speak:'It’s the tallest building in Shanghai.'},
			{name:'Pingping',speak:'So great! Where is it?'},
			{name:'Yangyang',speak:'It’s in Shanghai Lujiazui District. Let’s visit it.'},
			{name:'Pingping',speak:'OK.'}
		],
		words:[
			{textStr:'上海环球金融中心',enStr:'The Shanghai World Financial Center'},
			{textStr:'摩天大楼',enStr:'Skyscraper'},{textStr:'上海陆家嘴',enStr:'Shanghai Lujiazui District '}
		],
		adoutAll:[
			{
				title:'上海的高楼大厦',
				contentArr:[
					{name:'上海最高的摩天大楼',desc:'上海中心大厦'},{name:'上海的88 层高楼',desc:'金茂大厦'},
					{name:'上海第三高的摩天大楼',desc:'上海世茂国际广场'}
				],
				aboutPic:[
					{picUrl:'../images/walking/PuDongXinQu/HuanQiu/2.png'}
				]
			},
			{
				title:'中国的高楼大厦',
				contentArr:[
					{name:'武汉绿地中心',desc:'总高度666米'},{name:'台北101大厦',desc:'高508米'},
					{name:'香港的环球贸易广场',desc:'高484米'}
				],
				aboutPic:[
					{picUrl:'../images/walking/PuDongXinQu/HuanQiu/1.png'},{picUrl:'../images/walking/PuDongXinQu/HuanQiu/6.png'}
				]
			},
			{
				title:'世界的高楼大厦',
				contentArr:[
					{name:'迪拜塔( 哈利法塔)',desc:'高828米'},{name:'吉隆坡双峰塔',desc:'高452米'},
					{name:'芝加哥韦莱集团大厦( 西尔斯大厦) ',desc:'高442米'}
				],
				aboutPic:[
					{picUrl:'../images/walking/PuDongXinQu/HuanQiu/3.png'},{picUrl:'../images/walking/PuDongXinQu/HuanQiu/4.png'},
					{picUrl:'../images/walking/PuDongXinQu/HuanQiu/5.png'}
				]
			}
		],
		seeWorld:[
			{title:'放眼世界',
			contentArr:[
				{name:'迪拜塔'},{name:'双峰塔'},{name:'西尔斯大厦'}
			]}
		]
	},
	//--------------------------------------------虹桥枢纽--------------------------------------------//
	{
		name:'虹桥枢纽',pinName:'HongQiao',subText:'Hongqiao Transportation Hub——Traffic network in Shanghai',
		addr:'上海市申虹路与申贵路交叉口东200米',
		desc:'虹桥综合交通枢纽有高速铁路、磁悬浮、城际铁路、高速公路客运、城市轨道交通、公共交通、民用航空等组成。'+
		'是城市交通建设上的一大创新，整个交通枢纽每天平均客流量有48万人次呢。',
		balazi:'上海是一座交通发达的现代化大都市。你知道吗？在闵行、长宁交界处的虹桥枢纽可是个各种车站聚集的“超级车站”。 '+
		'在这个“车站”里，高铁、磁浮、城际列车、城市轨道和长途高速巴士、城市公交等“一个都不少”。'+
		'今天，我们就一起去走走看看，体验一下这国际一流的现代化大型综合交通枢纽给我们出行带来的便利吧！',
		topPicArr:[
			{picUrl:'../images/walking/MinHang/HongQiao/001.png',name:'虹桥枢纽',pinName:'HongQiao'}
		],
		dialogue:[
			{name:'Pingping',speak:'Hi, do you know Hongqiao hub?'},
			{name:'Yangyang',speak:'Yes, Hongqiao hub is a “super station “.'},
			{name:'Pingping',speak:'It’s so big.'},
			{name:'Yangyang',speak:'I know Hongqiao hub is one of the best “super station ” in Asia.'},
			{name:'Pingping',speak:'So wonderful! I want to visit it.'},
			{name:'Yangyang',speak:'OK. Let’s go.'}
		],
		words:[
			{textStr:'虹桥枢纽',enStr:'Hongqiao hub'},{textStr:'超级车站',enStr:'Super station'},{textStr:'亚洲',enStr:'Asia '}
		],
		adoutAll:[
			{
				title:'雄伟壮观的江上大桥',
				contentArr:[
					{name:'松浦大桥',desc:''},{name:'杨浦大桥',desc:''},{name:'南浦大桥',desc:''},{name:'卢浦大桥',desc:''},
					{name:'徐浦大桥',desc:''},{name:'闵浦大桥',desc:''},{name:'奉浦大桥',desc:''}
				],
				aboutPic:[
					{picUrl:'../images/walking/MinHang/HongQiao/1.png'},{picUrl:'../images/walking/MinHang/HongQiao/2.png'},
					{picUrl:'../images/walking/MinHang/HongQiao/3.png'}
				]
			}
		],
		seeWorld:[
			{title:'放眼世界',
			contentArr:[
				{name:'希思罗国际机场'},{name:'纽约中央火车站'},{name:'鹿特丹港'}
			]}
		]
	},
	//--------------------------------------------王家沙--------------------------------------------//
	{
		name:'王家沙',pinName:'WangJiaSha',subText:'Wangjiasha——Looking for all the snacks in Shanghai',
		addr:'上海市静安区南京西路805号',
		desc:'说到王家沙，上海滩几乎人人都知道，它以生产上海传统小吃而闻名，是一家老字号的上海餐饮点心店，有“上海点心状元”之称。'+
		'王家沙始建于1945 年（民国34 年），上海总店位于繁华的南京西路，在香港、日本等地也设有分店。蟹粉小笼、蟹粉汤团、松糕、八宝饭、'+
		'枣粒包、萝卜丝酥饼、萝卜丝包、蟹粉锅贴、枣粒汤团、鸡虾肉生煎等十个产品获得“中华名点名小吃”称号。<br/>'+
		'●难觅的“老虎脚爪”：<br/>'+
		'“老虎脚爪”本是老上海最为寻常的一种点心，现在上海只有南京西路的王家沙能看到。<br/>'+
		'●久违的“艾草青团”：<br/>'+
		'每当清明，王家沙门口就会排起十多米的长队，两个多小时的等待只为买到久违的“艾草汁青团”。除了传统的豆沙青团，马兰头青团、'+
		'荠菜鲜肉青团也十分热销，每天销售12 万只左右呢！',
		balazi:'说到美食，最令上海人引以为豪的除了浓油酱赤的本帮菜，还有阿拉上海的各色点心。无论是市井的四大金刚，咸菜泡饭，'+
		'还是绿波廊里接待西哈努克的鸽蛋圆子、眉毛酥，均是上乘之美味。搜罗起角角落落的小点心，慢慢品尝，美味就从小处开始了。'+
		'今天就让我带你到号称“点心状元”的百年老字号“王家沙总店”去尝尝正宗的上海点心，赶紧出发吧！',
		topPicArr:[
			{picUrl:'../images/walking/JingAn/WangJiaSha/001.png',name:'王家沙',pinName:'WangJiaSha'}
		],
		dialogue:[
			{name:'Pingping',speak:'Wow, look! The traditional snacks are nice.'},
			{name:'Yangyang',speak:'May I have one?'},
			{name:'Pingping',speak:'Sure! Here you are.'},
			{name:'Yangyang',speak:'Thank you!'},
			{name:'Pingping',speak:'How do they taste?'},
			{name:'Yangyang',speak:'Yummy! I like them very much.Where can we buy them?'},
			{name:'Pingping',speak:'Some old and famous shops.'}
		],
		words:[
			{textStr:'传统小吃',enStr:'traditional snack '},{textStr:'老字号',enStr:'old and famous shop'}
		],
		adoutAll:[
			{
				title:'风情各异美食街',
				contentArr:[
					{name:'老城隍庙小吃广场',desc:''},{name:'云南路美食街',desc:''},
					{name:'黄河路美食街',desc:''},{name:'老外街',desc:''}
				],
				aboutPic:[
					{picUrl:'../images/walking/JingAn/WangJiaSha/1.png'},{picUrl:'../images/walking/JingAn/WangJiaSha/2.png'},
					{picUrl:'../images/walking/JingAn/WangJiaSha/3.png'},{picUrl:'../images/walking/JingAn/WangJiaSha/4.png'},
					{picUrl:'../images/walking/JingAn/WangJiaSha/5.png'}
				]
			},
			{
				title:'寻找身边美食街',
				contentArr:[
					{name:'十尚坊',desc:''},{name:'七宝老街',desc:''}
				],
				aboutPic:[]
			}
		],
		seeWorld:[
			{title:'放眼世界',
			contentArr:[
				{name:'“法国洗衣房”餐厅'},{name:'阿萨克餐厅'},{name:'花鼓餐厅'},{name:'披萨'}
			]}
		]
	},
	//--------------------------------------------欢乐谷--------------------------------------------//
	{
		name:'欢乐谷',pinName:'HuanLeGu',subText:'Happy Valley——Travelling around Shanghai',
		addr:'上海市松江区佘山镇林湖路888号',
		desc:'上海欢乐谷以“动感、时尚、欢乐、梦幻”的大型主题公园而闻名，它包含了“阳光港、欢乐时光、飓风湾、金矿镇、蚂蚁王国、'+
		'上海滩、香格里拉”七个主题区。欢乐谷的设计融入了二三十年代“老上海的元素”，可是里面的游乐项目可是新潮而刺激的。'+
		'你可以搭乘国内首台木质过山车，体验冒险的真实。你可以乘坐特制船只卷入海湾的风暴漩涡中，体验15 米浪尖飞驰而下的刺激，'+
		'更多的惊喜留待你自己去发现……<br/>'+
		'●谷木游龙<br/>'+
		'世界上最古老的过山车形式，以美国南方松木为主材，沿湖堤搭建，1200 米的呼啸之旅，带给你超过10 次的太空零重力的刺激感受。<br/>'+
		'●金银岛<br/>'+
		'站在园区制高点，俯瞰整个全园美景，慢慢旋转中将佘山、月湖景色尽收眼底。<br/>'+
		'●峡谷漂流<br/>'+
		'带你穿越峡谷、假山、涵洞、林场、花海……进行一场浪漫的漂流奇遇记！',
		balazi:'同学们，随着生活水平的提升，上海市民的日子也越过越精彩：房子越住越宽敞，商品越来越充裕，娱乐越来越丰富，'+
		'生活越来越精致……今天，就让我们来一次“主题公园”之行，体验“上海欢乐谷”带给我们的惊喜。',
		topPicArr:[
			{picUrl:'../images/walking/SongJiang/HuanLeGu/001.png',name:'欢乐谷',pinName:'HuanLeGu'}
		],
		dialogue:[
			{name:'Pingping',speak:'Do you want to go to the Happy Valley?It’s a beautiful theme park.'},
			{name:'Yangyang',speak:'Good idea! We can have fun there.'},
			{name:'Pingping',speak:'When shall we go?'},
			{name:'Yangyang',speak:'How about this weekend?'},
			{name:'Pingping',speak:'OK! Let’s go there together!'}
		],
		words:[
			{textStr:'欢乐谷',enStr:'Happy Valley'},{textStr:'主题公园',enStr:'theme park'},{textStr:'周末',enStr:'weekend'}
		],
		adoutAll:[
			{
				title:'风格各异的上海游乐场',
				contentArr:[
					{name:'老牌游乐场',desc:'锦江乐园'},{name:'获奖最多的游乐场',desc:'上海玛雅海滩水公园'},
					{name:'最上海的乐园',desc:'上海影视乐园'}
				],
				aboutPic:[
					{picUrl:'../images/walking/SongJiang/HuanLeGu/1.png'},{picUrl:'../images/walking/SongJiang/HuanLeGu/2.png'},
					{picUrl:'../images/walking/SongJiang/HuanLeGu/3.png'},{picUrl:'../images/walking/SongJiang/HuanLeGu/4.png'}
				]
			}
		],
		seeWorld:[
			{title:'放眼世界',
			contentArr:[
				{name:'迪士尼乐园'},{name:'六旗游乐园'},{name:'里瑟本游乐园'}
			]}
		]
	},
	//--------------------------------------------崇明东滩湿地公园--------------------------------------------//
	{
		name:'崇明东滩湿地公园',pinName:'ShiDi',subText:'Chongming Dongtan Wetland Park——Wetland in the city',
		addr:'上海市崇明区东滩东旺路风车处',
		desc:'崇明岛，是我们国家的第三大岛，也是上海十九个区县里面唯一的县。崇明岛内处处是湿地，这些湿地是上海十分宝贵的生态资源。'+
		'崇明东滩湿地2002年被列为国际重要湿地，这里是候鸟们迁徙极好的停歇地。每年随着冬季的到来，北方的气候越来越冷，'+
		'大批的候鸟南下过冬，东滩湿地公园就开始热闹起来了。湿地记录的鸟类达312 种，迁徙水鸟上百万只。其中国家一级保护动物4种，'+
		'国家二级保护动物43 种。',
		balazi:'虽然上海是一个现代化的大都市，可是我们渴望生活在“水清、气爽、声静、地绿”的环境中。随着“绿色上海”、“园林城市”、'+
		'“生态型城市”的建设，环境保护越来越受到重视。今天，就让我们去崇明岛的湿地走一走，与大自然亲密接触。',
		topPicArr:[
			{picUrl:'../images/walking/ChongMing/ShiDi/001.png',name:'湿地公园',pinName:'ShiDi'}
		],
		dialogue:[
			{name:'Pingping',speak:'Wow, Yangyang, look! What’s that?'},
			{name:'Yangyang',speak:'hat’s the wetland, Pingping.Now we are in the wetland park.Is it beautiful?'},
			{name:'Pingping',speak:'Yes! How nice! I can see so many birds here! They live happily in this park!'},
			{name:'Yangyang',speak:'Of course! We can see the beautiful trees and clean water.The air is fresh, too! '+
			'I likethis park very much!'},
			{name:'Pingping',speak:'Me too. Let’s go around this park together and take some photos.'}
		],
		words:[
			{textStr:'湿地',enStr:'wet land'},{textStr:'新鲜',enStr:'fresh'},{textStr:'参观',enStr:'go around'},
			{textStr:'拍照',enStr:'take some photos'}
		],
		adoutAll:[
			{title:'中国的湿地、森林公园',
			contentArr:[
				{name:'崇明西沙湿地公园',desc:''},{name:'东平国家森林公园',desc:''}
			]}
		],
		seeWorld:[
			{title:'放眼世界',
			contentArr:[
				{name:'黄石国家森林公园'},{name:'加洛韦森林公园'},{name:'奇旺国家公园'},{name:'九寨国家森林公园'}
			]}
		],
		aboutPic:[
			{picUrl:'../images/walking/ChongMing/ShiDi/1.png'},{picUrl:'../images/walking/ChongMing/ShiDi/2.png'},
			{picUrl:'../images/walking/ChongMing/ShiDi/3.png'}
		]
	},
	//--------------------------------------------金山城市沙滩--------------------------------------------//
	{
		name:'金山城市沙滩',pinName:'ShaTan',subText:'Jin Shan City Beach—— Beach in the city',
		addr:'上海市金山城市沙滩',
		desc:'金山城市沙滩位于杭州湾北岸，金山区南端，总长3529米。由保滩工程、人工沙滩、滨海景观长廊、滨海商业街、'+
		'沙滩排球场馆以及水上游乐项目组成。金山城市沙滩采用了高水隐堤的办法，隔绝了东海的浑浊。另外还人工铺设了2万平方米的金色沙滩，'+
		'营造出了一片碧海与金沙为一体的城市景观海岸线。',
		balazi:'你是否曾经和爸爸妈妈手拉手漫步在我们上海的城市沙滩边，踩着细细的沙子，玩着各种海边的游乐设施，偶尔还能捡到漂亮的贝壳呢？'+
		'今天，就让我们一起去金山城市沙滩走一走，看看蓝天，吹吹海风，听听海的声音。',
		topPicArr:[
			{picUrl:'../images/walking/JinShan/ShaTan/001.png',name:'城市沙滩',pinName:'ShaTan'}
		],
		dialogue:[
			{name:'Pingping',speak:'Listen, can you feel it? It’s the sea!Now we are at the Jinshan beach! '+
			'I wantto play beach volleyball.'},
			{name:'Yangyang',speak:'Wait! Look at these beautiful shells on the beach. We can collect some shells'+
			'and decorate our school.'},
			{name:'Pingping',speak:'That’s a good idea! Hey! Yangyang, do you love music?'},
			{name:'Yangyang',speak:'Yes! I love music! Music is amazing!'},
			{name:'Pingping',speak:'Oh, great! There is a Music Festival on this beach in July every year.'+
			'Next year,we can come here together!'},
			{name:'Yangyang',speak:'Hooray!'}
		],
		words:[
			{textStr:'湿地',enStr:'wet land'},{textStr:'新鲜',enStr:'fresh'},{textStr:'参观',enStr:'go around'},
			{textStr:'拍照',enStr:'take some photos'}
		],
		adoutAll:[
			{
				title:'上海的沙滩',
				contentArr:[
					{name:'奉贤碧海金沙',desc:'上海市奉贤区海湾旅游区'},{name:'三甲港',desc:'浦东“母亲河”川杨河入海口'}
				],
				aboutPic:[
					{picUrl:'../images/walking/JinShan/ShaTan/1.png'},{picUrl:'../images/walking/JinShan/ShaTan/2.png'}
				]
			}
		],
		seeWorld:[
			{title:'放眼世界',
			contentArr:[
				{name:'黄金海岸'},{name:'尼格瑞尔海滩'},{name:'博龙岸海滩'}
			]}
		]
	},
	//--------------------------------------------徐汇绿地--------------------------------------------//
	{
		name:'徐汇绿地',pinName:'LvDi',subText:'Xuhui Greenland —— Greenland in the City',
		addr:'上海市徐汇区肇嘉浜路',
		desc:'徐汇绿地位于上海市徐家汇东北侧，北起衡山路，南到肇嘉浜路，西临天平路，东面宛平路，面积约为8.47 万平方米。<br/>'+
		'徐汇绿地是为了改善生活环境和空气质量建造的人工绿地。公园里保留了建于1926年的大烟囱、法式红楼和百年古树，'+
		'还架设了将近200 米的景观天桥。公园里有多个雕塑，绿树成荫、百花争艳，还有小型篮球场、足球场等体育健身设施，真是假日休闲的好去处。',
		balazi:'徐家汇商圈商厦林立、人流如织。但是，为了给我们的城市增添一抹绿色，我们上海市政府在寸土寸金的徐家汇中心建了一个'+
		'面积不小的徐家汇公园。让我们除了美食购物外，还有一个可以运动、散步、休息的地方。今天就让我们一起去徐汇绿地走一走，'+
		'呼吸新鲜空气，享受宁静的休闲时光。',
		topPicArr:[
			{picUrl:'../images/walking/XuHui/LvDi/001.png',name:'徐汇绿地',pinName:'LvDi'}
		],
		dialogue:[
			{name:'Pingping',speak:'oh, you look not so good, Yangyang.How is everything going?'},
			{name:'Yangyang',speak:'I feel so tired these days. I am busy preparing for my exams.'},
			{name:'Pingping',speak:'Do you want to take a break? Let me show you a place. Let’s go!'},
			{name:'Yangyang',speak:'Wow, it’s so beautiful here, where is it?'},
			{name:'Pingping',speak:'It’s the Xuhui Greenland. You can see many beautiful flowers, '+
			'green grass and trees here. Many people like to enjoy their holidays here.'},
			{name:'Yangyang',speak:'Oh, I like this place so much! I can breathe clean air and relax myself.'+
			'Thank you for your help. I feel much better now.'}
		],
		words:[
			{textStr:'绿地',enStr:'green land'},{textStr:'呼吸新鲜空气',enStr:'breath clean air'},
			{textStr:'享受假期',enStr:'enjoy the holidays'},{textStr:'休息',enStr:'take a break'},
			{textStr:'自我放松',enStr:'relax myself'}
		],
		adoutAll:[
			{
				title:'上海的绿地、公园',
				contentArr:[
					{name:'陆家嘴中心绿地',desc:'陆家嘴金融中心的核心部位'},{name:'三甲港',desc:'浦东“母亲河”川杨河入海口'}
				],
				aboutPic:[
					{picUrl:'../images/walking/XuHui/LvDi/1.png'},{picUrl:'../images/walking/XuHui/LvDi/2.png'},
					{picUrl:'../images/walking/XuHui/LvDi/3.png'},{picUrl:'../images/walking/XuHui/LvDi/4.png'}
				]
			}
		],
		seeWorld:[
			{title:'放眼世界',
			contentArr:[
				{name:'纽约中央公园'},{name:'悉尼海德公园'},{name:'马德里丽池公园'}
			]}
		]
	},
	//--------------------------------------------七宝古镇--------------------------------------------//
	{
		name:'七宝古镇',pinName:'QiBao',subText:'Qibao Ancient Town ——A visiting in Shanghai Ancient Town',
		addr:'上海市闵行区七宝镇',
		desc:'小桥流水、明清街巷是江南古镇的共同特色，而在七宝却能感受到与众不同的海派韵味。蟋蟀馆、老行当再现的是昔日上海的民俗风情；'+
		'老饭店、天香楼推出的是颇具代表性的上海菜；七宝戏园展演的是沪上一些主要地方戏曲；微雕馆、书翰馆表现的是中国民间艺术与'+
		'海派文化的和谐结合；张充仁纪念馆的西洋雕塑艺术更是诠释了海派精神对于外来文化介入时的宽容和理智。<br/>'+
		'●七宝七件宝：飞来佛、氽来钟、金字莲花经、神树、金鸡、玉斧、玉筷。<br/>'+
		'●老街汤团。',
		balazi:'七宝镇是位于我们闵行的一座千年古镇，镇上有条知名的七宝老街，整条街上有丰富的特色小吃、古色古香的建筑等。'+
		'你们知道吗？七宝古镇不仅历史悠久，风景如画，还有着丰厚的文化底蕴呢。今天，我们就一起去七宝古镇，逛逛老街上的商铺，'+
		'看看古镇的风景，还可以顺道尝尝美食。',
		topPicArr:[
			{picUrl:'../images/walking/MinHang/QiBao/001.png',name:'七宝',pinName:'QiBao'}
		],
		dialogue:[
			{name:'Pingping',speak:'This is such a busy street! There are so many people here. Where is it?'},
			{name:'Yangyang',speak:'It’s the Qibao Old Street in Qibao Ancient Town. You can eat some special '+
			'food and see many old-style buildings here. Let’s take a look at here.'},
			{name:'Pingping',speak:'It’s so beautiful here. I can see the history and learn more about the history of Shanghai.'},
			{name:'Yangyang',speak:'Yes! It’s the nearest old town to Shanghai downtown.'},
			{name:'Pingping',speak:'Great! I want to be here next time again!'}
		],
		words:[
			{textStr:'七宝老街',enStr:'Qibao Old Street'},{textStr:'老式建筑',enStr:'old-style building'},
			{textStr:'七宝古镇',enStr:'Qibao Ancient Town'},{textStr:'繁忙的',enStr:'busy'},
			{textStr:'历史',enStr:'histor y'},{textStr:'最近的',enStr:'nearest'}
		],
		adoutAll:[
			{
				title:'上海历史文化名镇',
				contentArr:[
					{name:'松江华亭古镇',desc:''},{name:'松江泗泾古镇',desc:''},{name:'嘉定古镇',desc:''},
					{name:'南翔古镇',desc:''},{name:'朱家角古镇',desc:''}
				],
				aboutPic:[
					{picUrl:'../images/walking/MinHang/QiBao/1.png'},{picUrl:'../images/walking/MinHang/QiBao/2.png'},
					{picUrl:'../images/walking/MinHang/QiBao/3.png'},{picUrl:'../images/walking/MinHang/QiBao/4.png'},
					{picUrl:'../images/walking/MinHang/QiBao/5.png'}
				]
			}
		],
		seeWorld:[
			{title:'放眼世界',
			contentArr:[
				{name:'圣地亚哥老城'},{name:'古巴哈瓦那旧城'},{name:'土耳其伊斯坦布尔'}
			]}
		]
	},
	//--------------------------------------------南汇桃园民俗村--------------------------------------------//
	{
		name:'南汇桃园民俗村',pinName:'TaoYuan',subText:'Nanhui Peach Garden Folk Village ——Getting to Know the Customs',
		addr:'上海市南汇惠南镇城北村',
		desc:'桃源民俗村是上海南汇桃花节中兴建的旅游景点，位于惠南镇北首的城北村，处在千亩桃林中，占地约40公顷，人工湖泊6.67公顷。'+
		'是一个“春有花、夏有荫、秋有果、冬有青”的农业观光旅游胜地。园内种植了大量桃树，每年桃花开放之时，当地便组织'+
		'内容丰富的“南汇桃花节”活动，是追寻浦东乡土风情，回归大自然的上佳旅游场所。',
		balazi:'你们知道吗？上海人至今仍保留着许多传统习俗，既喜庆祥和又繁琐排场。在这座现代化大都市里，地方性民俗节日，'+
		'为现代的生活节奏频添了不少传统喜庆的色彩。今天，就让我们一起走进“南汇桃花节”，去体验浓浓的民俗节庆活动吧。',
		topPicArr:[
			{picUrl:'../images/walking/NanHui/TaoYuan/001.png',name:'桃园民俗村',pinName:'TaoYuan'}
		],
		dialogue:[
			{name:'Pingping',speak:'Yangyang, do you know “Peach Flower Festival”?'},
			{name:'Yangyang',speak:'Sure. It is wonderful. It is in Nanhui .'},
			{name:'Pingping',speak:'In our metropolis, there are a lot of Shanghai Folk Festivals．'},
			{name:'Yangyang',speak:'Yes! Let’s go out and enjoy the festivals!'},
			{name:'Pingping',speak:'Sure! Let’s go!'},
			{name:'Yangyang',speak:'OK.'}
		],
		words:[
			{textStr:'七大都市',enStr:'Metropolis'},{textStr:'节庆',enStr:'festival'},
			{textStr:'精彩',enStr:'wonderful'},{textStr:'上海民俗节日',enStr:'Shanghai Folk Festivals'}
		],
		adoutAll:[
			{
				title:'上海传统节日',
				contentArr:[
					{name:'传统集会—龙华庙会',desc:'每年的农历三月初三都会在龙华古寺前举行庙会纪念活动。'},
					{name:'华人聚集——青浦国际龙舟赛',desc:'上海青浦区在9月都会举办“国际龙舟赛”。'},
					{name:'金秋聚会——上海旅游节',desc:'每年9月到10月历时二十几天'}
				],
				aboutPic:[
					{picUrl:'../images/walking/NanHui/TaoYuan/1.png'},{picUrl:'../images/walking/NanHui/TaoYuan/2.png'},
					{picUrl:'../images/walking/NanHui/TaoYuan/3.png'}
				]
			}
		],
		seeWorld:[
			{title:'放眼世界',
			contentArr:[
				{name:'日本桃花节'},{name:'加拿大枫糖节'},{name:'泰国宋干节'},{name:'圣诞节'}
			]}
		]
	},
	//--------------------------------------------金山农民画村--------------------------------------------//
	{
		name:'金山农民画村',pinName:'NongMinHua',subText:'Jinshan Farmer Paintings Village——Looking for Folk Arts',
		addr:'上海市金山区枫泾镇中洪村',
		desc:'在上海金山区的农村，有一种民间艺术驰名中外，它就是“金山农民画”。这些农民画的创作者都是土生土长的农民，'+
		'他们的创作都取材于简朴的农村生活，歌颂了农民自己的新生活。画作色彩鲜明、对比强烈，有着浓郁的生活气息和超强的艺术表现能力，'+
		'散发着泥土的芬芳。<br/>'+
		'金山农民画起根于中洪村（原为胜利大队）。2006 年初，“金山农民画村”被评为首批“中国特色村”（也称民俗文化村）。',
		balazi:'民间艺术之美，值得我们用崇敬的眼光去欣赏，更值得我们用心去传承。金山农民画，既是一种传统的民间绘画艺术，'+
		'又是一种逐渐成熟的新型画种。今天，就让我们走进民间艺术，欣赏“金山农民画”。',
		topPicArr:[
			{picUrl:'../images/walking/JinShan/NongMinHua/001.png',name:'农民画村',pinName:'NongMinHua'}
		],
		dialogue:[
			{name:'Pingping',speak:'Look, how beautiful the paintings are!'},
			{name:'Yangyang',speak:'Wow, so magic!'},
			{name:'Pingping',speak:'They are drawn by Jinshan farmers. Jinshan farmer painting is a masterpiece of folk art.'},
			{name:'Yangyang',speak:'They are great.'},
			{name:'Pingping',speak:'So we should protect Jinshan farmerpaintings .'},
			{name:'Yangyang',speak:'A good idea!'}
		],
		words:[
			{textStr:'艺术',enStr:'art'},{textStr:'绘画',enStr:'painting'},
			{textStr:'民间艺术',enStr:'folk art'},{textStr:'奇葩',enStr:'masterpiece'},{textStr:'保护',enStr:'protect'}
		],
		adoutAll:[
			{
				title:'上海民间艺术',
				contentArr:[
					{name:'本土工艺瑰宝—上海顾绣',desc:'顾绣”又称“露香园顾绣”'},
					{name:'本土剪纸流派—海派剪纸',desc:'海派剪纸被认定为上海市传统保护技艺。'},
					{name:'本土地方特产—马陆篾编竹器',desc:'嘉定一种特产工艺品。'}
				],
				aboutPic:[
					{picUrl:'../images/walking/JinShan/NongMinHua/1.png'},{picUrl:'../images/walking/JinShan/NongMinHua/2.png'},
					{picUrl:'../images/walking/JinShan/NongMinHua/3.png'}
				]
			}
		],
		seeWorld:[
			{title:'放眼世界',
			contentArr:[
				{name:'埃及的莎草纸绘画'},{name:'非洲的面具'},{name:'唐卡'},{name:'皮影戏'},{name:'苏绣'}
			]}
		]
	},
	//--------------------------------------------交通大学--------------------------------------------//
	{
		name:'交通大学',pinName:'JiaoTong',subText:'Jiaotong University——Investigating the Famous University',
		addr:'上海市徐汇区华山路1954号',
		desc:'上海交通大学是我们国家历史悠久、海内外知名的高等学府之一，是全国重点大学。培养出了200 多名中国科学院、中国工程院院士。'+
		'钱学森、江泽民、汪道涵等都是交大校友。<br/>'+
		'上海交通大学的前身是“南洋公学”，交通大学徐汇校区现在的所在地就是原先的“南洋公学”，现在是上海市优秀历史建筑。',
		balazi:'我们今天刻苦学习，是为了吸收和积累更多的文化和知识。你们知道吗？上海有我们国内一流的大学资源，让我们去走走、看看，'+
		'感受高等学府的魅力吧！',
		topPicArr:[
			{picUrl:'../images/walking/XuHui/JiaoTong/001.png',name:'交通大学',pinName:'JiaoTong'}
		],
		dialogue:[
			{name:'Pingping',speak:'Look at the picture. This is my dream university.'},
			{name:'Yangyang',speak:'Oh, it’s Shanghai Jiao Tong University.'},
			{name:'Pingping',speak:'It’s a famous university with a long history in China.'},
			{name:'Yangyang',speak:'It is a dream university for many students.'},
			{name:'Pingping',speak:'I think so. We must study hard and make progress every day.'},
			{name:'Yangyang',speak:'I hope your dream will come true one day!'}
		],
		words:[
			{textStr:'理想大学',enStr:'dream university'},{textStr:'著名的',enStr:'famous'},
			{textStr:'进步',enStr:'progress'},{textStr:'历史',enStr:'history'}
		],
		adoutAll:[
			{
				title:'世界各大名校',
				contentArr:[
					{name:'复旦大学',desc:''},{name:'北京大学',desc:''},{name:'清华大学',desc:''},
					{name:'香港大学',desc:''},{name:'牛津大学',desc:''},{name:'耶鲁大学',desc:''}
				],
				aboutPic:[
					{picUrl:'../images/walking/XuHui/JiaoTong/1.png'},{picUrl:'../images/walking/XuHui/JiaoTong/2.png'},
					{picUrl:'../images/walking/XuHui/JiaoTong/3.png'},{picUrl:'../images/walking/XuHui/JiaoTong/4.png'},
					{picUrl:'../images/walking/XuHui/JiaoTong/5.png'},{picUrl:'../images/walking/XuHui/JiaoTong/6.png'}
				]
			}
		],
		seeWorld:[
			{title:'放眼世界',
			contentArr:[
				{name:'牛津大学'},{name:'剑桥大学'},{name:'哈佛大学'},{name:'麻省理工大学'},{name:'香港大学'}
			]}
		]
	},
	//--------------------------------------------上海博物馆--------------------------------------------//
	{
		name:'上海博物馆',pinName:'BoWuGuan',subText:'Shanghai Museum——Exploring Museums',
		addr:'上海市黄浦区人民大道201号',
		desc:'上海博物馆位于上海市中心——人民广场的南侧。是与北京、南京、西安博物馆齐名的中国四大博物馆之一。'+
		'上海博物馆是一座大型的中国古代艺术博物馆，上圆下方的造型寓意中国“天圆地方”之说。陈列面积2,800 平方米。'+
		'馆藏珍贵文物14 万件，其中尤以青铜器、陶瓷器、书法、绘画为特色。在国内外享有盛誉，有文物界“半壁江山”之誉。<br/>'+
		'钱币馆藏品、玉器馆藏品、家具馆藏品、玺印馆藏品、书法馆藏品、绘画馆藏品、雕塑馆藏品、青铜器馆藏品',
		balazi:'一直以来，上海都是各种文化艺术交汇的中心。来自不同国家、不同种族、不同地域的人们，将各地不同的文化带到上海。'+
		'丰富了上海的文化底蕴，并赋予了上海旺盛的城市活力。今天，让我们来一次文化之行，去走走、看看博物馆，感受那里浓浓的文化艺术气息。',
		topPicArr:[
			{picUrl:'../images/walking/HuangPu/BoWuGuan/001.png',name:'上海博物馆',pinName:'BoWuGuan'}
		],
		dialogue:[
			{name:'Pingping',speak:'There is an art show in Shanghai Museum this weekend. Do you want to go with me?'},
			{name:'Yangyang',speak:'Yes, of course. Shanghai Museum is one of the biggest museums in China.'},
			{name:'Pingping',speak:'There are a lot of foreigners too.'},
			{name:'Yangyang',speak:'Oh, Shanghai culture is a mixture of Chinese and Western culture.'},
			{name:'Pingping',speak:'I’m so proud of it!'}
		],
		words:[
			{textStr:'历史',enStr:'history'},{textStr:'博物馆',enStr:'museum'},
			{textStr:'中西文化',enStr:'Chinese and Western culture'},{textStr:'融合',enStr:'mixture'}
		],
		adoutAll:[
			{
				title:'上海其他博物馆',
				contentArr:[
					{name:'上海汽车博物馆',desc:'上海市安亭博园路7565号'},{name:'上海玻璃博物馆',desc:'长江西路685号'},
					{name:'中国航海博物馆',desc:'浦东新区临港新城申港大道197号'},
					{name:'上海天文博物馆',desc:'淮海中路1843号'},{name:'上海电影博物馆',desc:'徐汇区漕溪北路595号'}
				],
				aboutPic:[
					{picUrl:'../images/walking/HuangPu/BoWuGuan/1.png'},{picUrl:'../images/walking/HuangPu/BoWuGuan/2.png'},
					{picUrl:'../images/walking/HuangPu/BoWuGuan/3.png'},{picUrl:'../images/walking/HuangPu/BoWuGuan/4.png'}
				]
			},
			{
				title:'上海的其他历史文化场所',
				contentArr:[
					{name:'上海美术馆',desc:'南京西路325号'},{name:'大镜阁城墙',desc:'大境路259号'},
					{name:'提篮桥历史文化风貌区',desc:'虹口区东部提篮桥地区'}
				],
				aboutPic:[
					{picUrl:'../images/walking/HuangPu/BoWuGuan/5.png'}
				]
			}
		],
		seeWorld:[
			{title:'放眼世界',
			contentArr:[
				{name:'伦敦大英博物馆'},{name:'纽约大都会博物馆'},{name:'艾尔米塔什博物馆'},
				{name:'梵蒂冈博物馆'},{name:'故宫博物院'}
			]}
		]
	},
	//--------------------------------------------中华艺术宫--------------------------------------------//
	{
		name:'中华艺术宫',pinName:'YiShuGong',subText:'China Art Museum——Investigating Art Museums',
		addr:'上海市浦东新区上南路205号',
		desc:'2012 年10 月1 日， 上海美术馆变迁至世博会中国馆，命名为中华艺术宫。<br/>'+
		'中华艺术宫总建筑面积达16.7万平米，展示面积达6.4 万平米，拥有27 个展厅。场馆外观设计包含了繁体的“华”字，'+
		'鲜艳的东方红色表达了我们炎黄子孙对祖国的热爱！场馆以展出近现代艺术为侧重，是对公众免费开放的公益性艺术博物馆。',
		balazi:'上海是一座移民城市，极具现代化而又不失中国传统特色。我们在吸收包容外来文化的同时也要继承发扬我们中国的传统文化。'+
		'随着我们城市的发展，上海建设了一批各具特色的文化艺术场馆。今天就让我们走进这些文化艺术场馆，感受中华艺术之美。',
		topPicArr:[
			{picUrl:'../images/walking/PuDongXinQu/YiShuGong/001.png',name:'中华艺术宫',pinName:'YiShuGong'}
		],
		dialogue:[
			{name:'Pingping',speak:'Hello, do you know “China Art Museum”?'},
			{name:'Yangyang',speak:'Sure, it is wonderful. It is in PuDong .'},
			{name:'Pingping',speak:'I went there last Saturday.I’m going there next week again.'},
			{name:'Yangyang',speak:'Really? Let’s go together. I like different cultures.'},
			{name:'Pingping',speak:'Yes. We should inherit and carry forward the traditional Chinese culture.'}
		],
		words:[
			{textStr:'文化场馆',enStr:'culture museum'},{textStr:'中华艺术宫',enStr:'Chinese Art Palace'},
			{textStr:'继承和发扬',enStr:'inherit and carry for ward'}
		],
		adoutAll:[
			{
				title:'中华艺术宫周边文化场所',
				contentArr:[
					{name:'沙特馆',desc:'世博园区'},{name:'西班牙馆',desc:'世博园区'},
					{name:'法国馆',desc:'世博园区'},{name:'意大利馆',desc:'世博园区'},
					{name:'俄罗斯馆',desc:'世博园区'},{name:'世博会主题馆',desc:'世博园区'},
					{name:'奔驰. 梅赛德斯文化中心',desc:'世博大道1200号'}
				],
				aboutPic:[
					{picUrl:'../images/walking/PuDongXinQu/YiShuGong/1.png'},{picUrl:'../images/walking/PuDongXinQu/YiShuGong/2.png'},
					{picUrl:'../images/walking/PuDongXinQu/YiShuGong/3.png'},{picUrl:'../images/walking/PuDongXinQu/YiShuGong/4.png'}
				]
			},
			{
				title:'上海其他艺术文化场所',
				contentArr:[
					{name:'上海东方艺术中心',desc:'上海市浦东丁香路425号'},{name:'上海话剧艺术中心',desc:'安福路288号'},
					{name:'上海大剧院艺术中心',desc:'黄陂北路200号'}
				],
				aboutPic:[
					{picUrl:'../images/walking/PuDongXinQu/YiShuGong/5.png'},{picUrl:'../images/walking/PuDongXinQu/YiShuGong/6.png'}
				]
			}
		],
		seeWorld:[
			{title:'放眼世界',
			contentArr:[
				{name:'伦敦大英博物馆'},{name:'纽约大都会博物馆'},{name:'艾尔米塔什博物馆'},
				{name:'梵蒂冈博物馆'},{name:'故宫博物院'}
			]}
		]
	},
	//--------------------------------------------南京路--------------------------------------------//
	{
		name:'南京路',pinName:'NanJingLu',subText:'Nanjing Road——Walking into the famous road',
		addr:'上海市黄浦区南京东路299号南京路步行街',
		desc:'南京路是世界闻名的商业街区，也是上海开埠后最早建立的一条商业街。它东起外滩、西至延安西路，横跨静安、黄浦两个区，'+
		'全长5.5 公里，以西藏中路为界分为南京西路和南京东路两段。南京西路（包括静安寺地区）是中国商铺租金最高也是全上海'+
		'最奢华的时尚商业街区。南京东路（包括南京路步行街）主要是平价商业区和旅游区。<br/>'+
		'●繁华热闹的南京东路<br/>'+
		'知名的南京路步行街就位于南京东路，步行街的东西两端均有一块暗红色大理石屏，上面是江泽民主席亲笔题写的“南京路步行街”。',
		balazi:'生活在上海的人没有不知道南京路、淮海路的。今天，我们就走进南京路走走街道，逛逛商铺，看看风景，了解那些知名马路的故事。',
		topPicArr:[
			{picUrl:'../images/walking/HuangPu/NanJingLu/001.png',name:'南京路',pinName:'NanJingLu'}
		],
		dialogue:[
			{name:'Pingping',speak:'Wow! How beautiful the street is!'},
			{name:'Yangyang',speak:'Yes, this is a famous street- Nanjing Road. Nanjing Road is in the center of Shanghai.'},
			{name:'Pingping',speak:'It’s a busy street. You can buy some clocks, some clothes and many other things there.'},
			{name:'Yangyang',speak:'Yeah, we can buy all kinds of things here..'},
			{name:'Pingping',speak:'Let’s get on the tour bus. Look! Thebus is coming.'},
			{name:'Yangyang',speak:'Let’s go!'}
		],
		words:[
			{textStr:'南京路',enStr:'Nanjing Road'},{textStr:'各种各样',enStr:'all kinds of'},
			{textStr:'观光车',enStr:'tour bus'},{textStr:'…在……中心',enStr:'in the center of'}
		],
		adoutAll:[
			{
				title:'时尚奢华的南京西路',
				contentArr:[
					{name:'恒隆广场',desc:''},{name:'梅龙镇伊势丹广场',desc:''},{name:'波特曼酒店',desc:''}
				],
				aboutPic:[
					{picUrl:'../images/walking/HuangPu/NanJingLu/1.png'},{picUrl:'../images/walking/HuangPu/NanJingLu/2.png'},
					{picUrl:'../images/walking/HuangPu/NanJingLu/3.png'}
				]
			},
			{
				title:'上海风情各异的路',
				contentArr:[
					{name:'衡山路休闲街',desc:''},{name:'浦东世纪大道',desc:''},{name:'多伦路文化名人街',desc:''}
				],
				aboutPic:[
					{picUrl:'../images/walking/HuangPu/NanJingLu/4.png'},
					{picUrl:'../images/walking/HuangPu/NanJingLu/5.png'},{picUrl:'../images/walking/HuangPu/NanJingLu/6.png'}
				]
			}
		],
		seeWorld:[
			{title:'放眼世界',
			contentArr:[
				{name:'纽约第五大道'},{name:'伦敦牛津街'},{name:'东京都新宿大街'},
				{name:'汉城市明洞大街'},{name:'柏林KU—Damm大街(库达姆大街)'},{name:'加拿大蒙特利尔地下城'}
			]}
		]
	},
	//--------------------------------------------新天地--------------------------------------------//
	{
		name:'新天地',pinName:'XinTianDi',subText:'Shanghai New World——Walking into Fashion Landmark',
		addr:'上海市黄浦区太仓路181弄',
		desc:'新天地位于上海的市中心，是在上海独特的石库门建筑基础上改造起来的休闲步行街。走进“新天地”，石库门的弄堂，'+
		'青砖的步行道，仿佛穿越了几十年的光阴，来到了20年代的上海。可是当你跨入石库门里面，现代化的装潢带来的是时尚的生活方式。'+
		'真是传统与时尚完美结合的怀旧时尚新地标。<br/>'+
		'●怀旧新天地<br/>'+
		'●时尚新天地',
		balazi:'在我们上海的某些地方，既可以感受到“老上海”的味道，又洋溢着时尚的气息。走在其中，老年人觉得怀旧，年轻人觉得时尚，'+
		'外国人觉得很中国，中国人觉得很洋气。今天，就让我们去走走、看看这些传统与时尚融合的上海时尚新地标。',
		topPicArr:[
			{picUrl:'../images/walking/HuangPu/XinTianDi/001.png',name:'新天地',pinName:'XinTianDi'}
		],
		dialogue:[
			{name:'Pingping',speak:'Wow! Shanghai New World! So famous! So fashionable!'},
			{name:'Yangyang',speak:'Yes. But many years ago, it was Shikumen.'},
			{name:'Pingping',speak:'Shikumen ?'},
			{name:'Yangyang',speak:'Many people lived here. It was crowed, not nice.'},
			{name:'Pingping',speak:'Really?'},
			{name:'Yangyang',speak:'Shikumen was rebuilt into a walking street with fashion and leisure in 2002. '+
			'It is a new landmark of Shanghai fashion.'}
		],
		words:[
			{textStr:'著名',enStr:'famous'},{textStr:'时尚的',enStr:'fashionable'},
			{textStr:'上海新天地',enStr:'Shanghai New World'},{textStr:'重建',enStr:'rebuilt'},
			{textStr:'悠闲',enStr:'leisure'}
		],
		adoutAll:[
			{
				title:'上海时尚特色地点',
				contentArr:[
					{name:'“老码头”的“新乐章”',desc:'上海原来的十六铺码头，现在成为了一片创意产业园区，也是中外游客热衷的上海旅游地。'},
					{name:'“老工厂”的“新面貌”',desc:'以前“同乐坊”是“弄堂小工厂”的聚集地，现在外观虽然保持了原来厂房的特色，'+
					'内部却已经成为了时尚创意的空间。'}
				],
				aboutPic:[
					{picUrl:'../images/walking/HuangPu/XinTianDi/1.png'},{picUrl:'../images/walking/HuangPu/XinTianDi/2.png'},
					{picUrl:'../images/walking/HuangPu/XinTianDi/3.png'},{picUrl:'../images/walking/HuangPu/XinTianDi/4.png'}
				]
			}
		],
		seeWorld:[
			{title:'放眼世界',
			contentArr:[
				{name:'百老汇大道'},{name:'香榭丽舍大街'},{name:'哈洛德百货公司'}
			]}
		]
	},
	//--------------------------------------------上海F1 国际赛车场--------------------------------------------//
	{
		name:'上海F1 国际赛车场',pinName:'SaiCheChang',subText:'Shanghai F1 International Circuit——Walking into '+
		'International Matches',addr:'上海市嘉定区伊宁路2000号F1国际赛车场',
		desc:'上海“F1”国际赛车场是我们国家现在唯一的一级方程式赛场。它位于上海嘉定区安亭镇，场地设计的风格可是中西合并的哦！'+
		'赛道建筑设计师赫曼·蒂尔克先生为上海特别设计了“上”字型的赛道。“ 上”字型赛道总长约5.541 公里，宽度在13 至20 米之间。'+
		'赛车最高时速可以达到327 公里/ 小时。',
		balazi:'随着我们城市的发展，上海的体育事业也展现出了蓬勃的生机，散发出了迷人的魅力。体育已经成为了上海的新时尚，'+
		'“F1”、“大师杯”等一些世界最高级别的赛事纷纷落户上海。今天，让我们去赛场走一走，体会体育赛事带来的激情。',
		topPicArr:[
			{picUrl:'../images/walking/JiaDing/SaiCheChang/001.png',name:'F1国际赛车场',pinName:'SaiCheChang'}
		],
		dialogue:[
			{name:'Pingping',speak:'Do you know the International games in Shanghai?'},
			{name:'Yangyang',speak:'Really? Which games? Where can we watch the games?'},
			{name:'Pingping',speak:'There is F1Circuit in Jiading.'},
			{name:'Yangyang',speak:'Great!'},
			{name:'Pingping',speak:'Shanghai owns the racing track with the shape of Chinese character”上”.'},
			{name:'Yangyang',speak:'So cool!'}
		],
		words:[
			{textStr:'F1 赛车场',enStr:'F1 Circuit'},{textStr:'国际赛事',enStr:'International games'},
			{textStr:'赛车跑道',enStr:'racing track'}
		],
		adoutAll:[
			{
				title:'上海的国际赛事',
				contentArr:[
					{name:'上海旗忠网球中心',desc:''},{name:'国际田联钻石联赛上海站',desc:''},
					{name:'世界斯诺克上海大师赛',desc:''},{name:'上海国际马拉松赛',desc:''}
				],
				aboutPic:[
					{picUrl:'../images/walking/JiaDing/SaiCheChang/1.png'},{picUrl:'../images/walking/JiaDing/SaiCheChang/2.png'},
					{picUrl:'../images/walking/JiaDing/SaiCheChang/3.png'},{picUrl:'../images/walking/JiaDing/SaiCheChang/4.png'}
				]
			},
			{
				title:'上海的体育明星',
				contentArr:[
					{name:'上海的“高度”',desc:'姚明'},{name:'上海的“速度”',desc:'刘翔'}
				],
				aboutPic:[
					{picUrl:'../images/walking/JiaDing/SaiCheChang/5.png'},{picUrl:'../images/walking/JiaDing/SaiCheChang/6.png'}
				]
			}
		],
		seeWorld:[
			{title:'放眼世界',
			contentArr:[
				{name:'巴塞罗那诺坎普球场'},{name:'菲利普夏特尔球场'},{name:'高球麦加'},
				{name:'马拉克纳体育场'},{name:'鸟巢'},{name:'水立方'}
			]}
		]
	},
	//--------------------------------------------END--------------------------------------------//
];
