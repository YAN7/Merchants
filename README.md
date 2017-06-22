# 医美莱商家端App

## 基础设置

####  仓库:
1. origin: 	ssh://git@git.yml360.com:10023/heyuhang/yml-merchants.git  自己开发仓库,存放开发环境代码  
2. product: ssh://git@git.yml360.com:10023/yml-front-end/yml-merchants.git  前端组仓库,存放生产环境代码


#### 有修改源码的地方

1. 是标题栏文字在安卓下改为居中显示(默认是在左边)

	> 在node_modules=> react-navigation=> src=> views=> Header.js 第327行

	```JavaScript
	left: TITLE_OFFSET,
	right: TITLE_OFFSET,
	alignItems:' Platform.OS === 'ios' ? 'center' : 'flex-start''
	// 改为
	left: 0,
	right: 0,
	alignItems: 'center'
	```

2. 将标题栏返回图标统一为UI图的上的箭头

	> 在node_modules=> react-navigation=> src=> views=> assets文件夹下加入return_icon.png
	> 在在node_modules=> react-navigation=> src=> views=> HeaderBackButton.js 第75行

	```JavaScript
	const asset = require('./assets/back-icon.png');
	// 改为
	const asset = require('./assets/return_icon.png');
	``


