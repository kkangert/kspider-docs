# 项目介绍

用于豆瓣热映电影数据爬取，爬取电影影视人员信息、剧情简介、电影影评等数据。

# 技术选型
使用selenium节点、循环节点、自定义js函数

# 流程源码
***注意：selenium节点中需要配置远程驱动地址***
```
{
	"nodeList": [
		{
			"nodeId": "rra9tddz81nf3fz2qvpg",
			"left": "73px",
			"top": "83px",
			"class": "workflow-center-clone",
			"name": "start",
			"label": "开始",
			"form": [
				{
					"labelName": "最大线程数",
					"componentType": "EL_NUMBER_INPUT",
					"dataType": "INT",
					"propName": "threadCount",
					"placeholder": "请输入爬虫最大线程数",
					"value": 4,
					"attributes": {
						"min": 4,
						"max": 12
					},
					"childrenItem": null,
					"required": false
				}
			],
			"icon": "ele-Flag",
			"type": "node"
		},
		{
			"nodeId": "6j08gpwqrwh8z0spuama",
			"left": "248px",
			"top": "23px",
			"class": "workflow-center-clone",
			"name": "selenium",
			"label": "Selenium",
			"form": [
				{
					"labelName": "节点变量",
					"componentType": "EL_INPUT",
					"dataType": "STRING",
					"propName": "nodeVariableName",
					"placeholder": "请输入节点变量",
					"value": "resp",
					"attributes": null,
					"childrenItem": null,
					"required": false
				},
				{
					"labelName": "Cookie自动管理",
					"componentType": "EL_SWITCH",
					"dataType": "BOOLEAN",
					"propName": "cookie-auto-set",
					"placeholder": null,
					"value": true,
					"attributes": null,
					"childrenItem": null,
					"required": false
				},
				{
					"labelName": "启动参数",
					"componentType": "CUSTOM_MULT_KEY_VALUE",
					"dataType": "LIST_MAP",
					"propName": "extConfig",
					"placeholder": "请选择启动参数",
					"value": [],
					"attributes": null,
					"childrenItem": [
						{
							"labelName": "最大窗口",
							"value": "--start-maximized",
							"dataType": "STRING"
						},
						{
							"labelName": "无头模式",
							"value": "headless",
							"dataType": "STRING"
						}
					],
					"required": false
				},
				{
					"labelName": "循环变量",
					"componentType": "EL_INPUT",
					"dataType": "STRING",
					"propName": "loopVariableName",
					"placeholder": "请输入循环变量",
					"value": "",
					"attributes": null,
					"childrenItem": null,
					"required": false
				},
				{
					"labelName": "循环次数",
					"componentType": "EL_NUMBER_INPUT",
					"dataType": "INT",
					"propName": "loopCount",
					"placeholder": "请输入循环次数",
					"value": 1,
					"attributes": {
						"min": 1
					},
					"childrenItem": null,
					"required": false
				},
				{
					"labelName": "页面加载超时时间(ms)",
					"componentType": "EL_INPUT",
					"dataType": "INT",
					"propName": "pageLoadTimeout",
					"placeholder": "请输入页面加载超时时间",
					"value": "100000",
					"attributes": null,
					"childrenItem": null,
					"required": false
				},
				{
					"labelName": "元素获取超时时间",
					"componentType": "EL_INPUT",
					"dataType": "INT",
					"propName": "implicitlyWaitTimeout",
					"placeholder": "请输入元素获取超时时间",
					"value": 5000,
					"attributes": null,
					"childrenItem": null,
					"required": false
				},
				{
					"labelName": "驱动类型",
					"componentType": "EL_SELECT",
					"dataType": "STRING",
					"propName": "driverType",
					"placeholder": "请选择驱动类型",
					"value": "chrome",
					"attributes": null,
					"childrenItem": [
						{
							"labelName": "chrome",
							"value": "chrome",
							"dataType": "STRING"
						},
						{
							"labelName": "firefox",
							"value": "firefox",
							"dataType": "STRING"
						}
					],
					"required": false
				},
				{
					"labelName": "请求地址",
					"componentType": "EL_INPUT",
					"dataType": "STRING",
					"propName": "url",
					"placeholder": "请输入请求地址(url)",
					"value": "https://movie.douban.com/",
					"attributes": null,
					"childrenItem": null,
					"required": false
				},
				{
					"labelName": "携带session请求网址",
					"componentType": "CUSTOM_MULT_KEY_VALUE",
					"dataType": "LIST_MAP",
					"propName": "header-session",
					"placeholder": "请输入携带的session",
					"value": [],
					"attributes": null,
					"childrenItem": null,
					"required": false
				},
				{
					"labelName": "远程驱动地址",
					"componentType": "EL_INPUT",
					"dataType": "STRING",
					"propName": "remote-webdriver-url",
					"placeholder": "请输入远程驱动地址",
					"value": "http://127.0.0.1:9515",
					"attributes": null,
					"childrenItem": null,
					"required": false
				}
			],
			"icon": "ele-ChromeFilled",
			"type": "node"
		},
		{
			"nodeId": "c9fjlmbl6p3anebwk2ut",
			"left": "469px",
			"top": "25px",
			"class": "workflow-center-clone",
			"name": "function",
			"label": "函数",
			"form": [
				{
					"labelName": "函数",
					"componentType": "CUSTOM_MULT_VALUE",
					"dataType": "LIST_MAP",
					"propName": "function",
					"placeholder": null,
					"value": [
						{
							"remark": "点击实战",
							"value": "${resp.elementToBeClickable('/html/body/div[3]/div[1]/div/div[2]/div[1]/div[1]/h2/span[1]/a').click()}",
							"key": ""
						},
						{
							"remark": "获取正在上映电影节点",
							"value": "${resp.xpaths('/html/body/div[3]/div[1]/div/div[1]/div[3]/div[2]/ul/li')}"
						}
					],
					"attributes": null,
					"childrenItem": null,
					"required": false
				}
			],
			"icon": "iconfont icon-terminal",
			"type": "node"
		},
		{
			"nodeId": "q7ctqdorw3tsaktr1gqb",
			"left": "649px",
			"top": "75px",
			"class": "workflow-center-clone",
			"name": "variable",
			"label": "变量",
			"form": [
				{
					"labelName": "变量列表",
					"componentType": "CUSTOM_MULT_KEY_VALUE",
					"dataType": "LIST_MAP",
					"propName": "variable",
					"placeholder": null,
					"value": [
						{
							"remark": "电影详情页",
							"value": "https://movie.douban.com/subject/",
							"key": "movieUrl"
						},
						{
							"remark": "获取element元素",
							"value": "${resp.xpaths('/html/body/div[3]/div[1]/div/div[1]/div[3]/div[2]/ul/li')}",
							"key": "elementLi"
						}
					],
					"attributes": null,
					"childrenItem": null,
					"required": false
				}
			],
			"icon": "ele-Share",
			"type": "node"
		},
		{
			"nodeId": "awaatp13q6a03oiblvfz",
			"left": "565px",
			"top": "269px",
			"class": "workflow-center-clone",
			"name": "loop",
			"label": "循环",
			"form": [
				{
					"labelName": "开始下标",
					"componentType": "EL_INPUT",
					"dataType": "INT",
					"propName": "loopStartIndex",
					"placeholder": "请输入开始下标",
					"value": 0,
					"attributes": null,
					"childrenItem": null,
					"required": false
				},
				{
					"labelName": "结束下标",
					"componentType": "EL_INPUT",
					"dataType": "INT",
					"propName": "loopEndIndex",
					"placeholder": "请输入结束下标",
					"value": 61,
					"attributes": null,
					"childrenItem": null,
					"required": false
				},
				{
					"labelName": "循环次数",
					"componentType": "EL_INPUT",
					"dataType": "STRING",
					"propName": "loopCount",
					"placeholder": "请输入循环次数（数字或表达式）",
					"value": "${elementLi.size()}",
					"attributes": null,
					"childrenItem": null,
					"required": false
				},
				{
					"labelName": "循环下标",
					"componentType": "EL_INPUT",
					"dataType": "STRING",
					"propName": "loopIndex",
					"placeholder": "请输入循环下标名称",
					"value": "loopIndex",
					"attributes": null,
					"childrenItem": null,
					"required": false
				}
			],
			"icon": "ele-Refresh",
			"type": "node"
		},
		{
			"nodeId": "i2kxpmoyyhaohjmrryci",
			"left": "359px",
			"top": "282px",
			"class": "workflow-center-clone",
			"name": "variable",
			"label": "变量",
			"form": [
				{
					"labelName": "变量列表",
					"componentType": "CUSTOM_MULT_KEY_VALUE",
					"dataType": "LIST_MAP",
					"propName": "variable",
					"placeholder": null,
					"value": [
						{
							"remark": "获取当前li标签Id",
							"value": "${elementLi[loopIndex].getAttribute('id')}",
							"key": "getLi"
						},
						{
							"remark": "拼接详情页网址",
							"value": "https://movie.douban.com/subject/${getLi}",
							"key": "movieUrl"
						},
						{
							"remark": "跳转电影详情",
							"value": "${resp.toUrl(movieUrl)}",
							"key": "goMovieUrl"
						},
						{
							"remark": "获取电影详情",
							"value": "${resp.xpaths('/html/body/div[3]/div[1]/div/div[1]/div[1]/div[1]/div[1]/div[2]/span').text()}",
							"key": "movieInfo"
						},
						{
							"remark": "电影简介",
							"value": "${resp.xpath('//*[@id=\"link-report-intra\"]/span').text()}",
							"key": "briefIntroduction"
						},
						{
							"remark": "电影影评",
							"value": "${resp.xpaths('/html/body/div[3]/div[1]/div/div[1]/section/div[2]/div')}",
							"key": "comments"
						},
						{
							"remark": "后退",
							"value": "${douban(comments,resp)}",
							"key": "comments"
						},
						{
							"value": "${resp.getDriver().navigate().back()}",
							"key": "back"
						}
					],
					"attributes": null,
					"childrenItem": null,
					"required": false
				}
			],
			"icon": "ele-Share",
			"type": "node"
		}
	],
	"lineList": [
		{
			"sourceId": "c9fjlmbl6p3anebwk2ut",
			"targetId": "q7ctqdorw3tsaktr1gqb",
			"label": "",
			"exceptionFlow": 2,
			"condition": "",
			"transmitVariable": true
		},
		{
			"sourceId": "awaatp13q6a03oiblvfz",
			"targetId": "i2kxpmoyyhaohjmrryci",
			"label": "",
			"exceptionFlow": 2,
			"condition": "",
			"transmitVariable": true,
			"type": "line"
		},
		{
			"sourceId": "rra9tddz81nf3fz2qvpg",
			"targetId": "6j08gpwqrwh8z0spuama",
			"label": "",
			"exceptionFlow": 2,
			"condition": "",
			"transmitVariable": true
		},
		{
			"sourceId": "6j08gpwqrwh8z0spuama",
			"targetId": "c9fjlmbl6p3anebwk2ut",
			"label": "",
			"exceptionFlow": 2,
			"condition": "",
			"transmitVariable": true
		},
		{
			"sourceId": "q7ctqdorw3tsaktr1gqb",
			"targetId": "awaatp13q6a03oiblvfz",
			"label": "",
			"exceptionFlow": 2,
			"condition": "",
			"transmitVariable": true
		}
	]
}
```
## 自定义函数 
**注意：上述流程源码中，定义自定义函数名称：douban，函数参数：elements,resp**

```
var ArrayList = Java.type('java.util.ArrayList'); 
var By = Java.type('org.openqa.selenium.By');
var arrayList = new ArrayList();
for(i = 0; i <= elements.size() -1; i++) {
    var headElement = resp.getDriver().findElements(By.className("main-hd"));
    var contextElement = resp.getDriver().findElements(By.className("main-bd"));
    for (j = 0; j <= contextElement.size() -1; j++) {
        var head = headElement.get(j).getText();
        var context = contextElement.get(j).getText();
        var innerHTML = head + "//" + context;
        print("innerHTML: " + innerHTML);
        arrayList.add(innerHTML);
    }
}
return arrayList;
```