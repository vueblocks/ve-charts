# [1.0.0-alpha.9](https://github.com/xiaoluoboding/ve-charts/compare/v1.0.0-alpha.8...v1.0.0-alpha.9) (2021-09-17)


### Features

* change the render way ([a7fb8c0](https://github.com/xiaoluoboding/ve-charts/commit/a7fb8c0a9b12b45be4baf6f05baa8341d254f556))



# [1.0.0-alpha.8](https://github.com/xiaoluoboding/ve-charts/compare/v1.0.0-alpha.7...v1.0.0-alpha.8) (2021-09-16)


### Bug Fixes

* custom element must be a block element ([b4bb363](https://github.com/xiaoluoboding/ve-charts/commit/b4bb3633c8450c6d8d189416a05b4cbda7318492))



# [1.0.0-alpha.7](https://github.com/xiaoluoboding/ve-charts/compare/v1.0.0-alpha.5...v1.0.0-alpha.7) (2021-09-16)


### Bug Fixes

* fix the regex of props filter bug ([311360b](https://github.com/xiaoluoboding/ve-charts/commit/311360b5776518ec1dba0ed655165a42c61ad299))


### Features

* **bar:** rewrite ve-bar-chart component ([179ce0f](https://github.com/xiaoluoboding/ve-charts/commit/179ce0f6af9c86caa7510dcbb25cbff3db92cbd5))
* add VeBarChart component ([3672d4e](https://github.com/xiaoluoboding/ve-charts/commit/3672d4ea386516c32f52e565e0ba76ed522202e7))
* merge options safely ([d4a5aa1](https://github.com/xiaoluoboding/ve-charts/commit/d4a5aa10eac7d64381cb00f1af1aa339c4bafcbc))
* recreate echarts instance when theme changed ([4052c48](https://github.com/xiaoluoboding/ve-charts/commit/4052c48f0564ee74ddb665952c645e4dffaeb002))
* use vnode as tag named ve-chart ([4d17b09](https://github.com/xiaoluoboding/ve-charts/commit/4d17b09e69e3c3df9e084ce7a2e8707c8203975c))



# [1.0.0-alpha.5](https://github.com/xiaoluoboding/ve-charts/compare/v1.0.0-alpha.4...v1.0.0-alpha.5) (2021-04-29)


### Features

* render in setup ([f9f3f34](https://github.com/xiaoluoboding/ve-charts/commit/f9f3f34f0fc21e451ffd4f0046e789e2fedebec1))



# [1.0.0-alpha.4](https://github.com/xiaoluoboding/ve-charts/compare/v1.0.0-alpha.3...v1.0.0-alpha.4) (2021-04-24)


### Features

* remove support vue 2.x ([1ec143a](https://github.com/xiaoluoboding/ve-charts/commit/1ec143a83555ac1ab0f45e6d8ebc28cde39c182d))



# [1.0.0-alpha.3](https://github.com/xiaoluoboding/ve-charts/compare/v1.0.0-alpha.2...v1.0.0-alpha.3) (2021-04-21)


### Features

* add funnel & gauge chart ([1bb3630](https://github.com/xiaoluoboding/ve-charts/commit/1bb3630b331851e82a0a9fa7d3dfa755d9346b16))
* add scatter & tree & treemap ([d449f7b](https://github.com/xiaoluoboding/ve-charts/commit/d449f7be754e48f72b72d54f809984a9de265eb6))
* add withInstall utils ([1543b6e](https://github.com/xiaoluoboding/ve-charts/commit/1543b6ec9973eb735b13122db739324a52f64042))



# [1.0.0-alpha.2](https://github.com/xiaoluoboding/ve-charts/compare/v1.0.0-alpha.1...v1.0.0-alpha.2) (2021-03-18)


### Bug Fixes

* fix typo ([4600ab5](https://github.com/xiaoluoboding/ve-charts/commit/4600ab5e23b1ea62781212e9482900ccc5aa98d5))


### Features

* support Vue 2 ([6de5111](https://github.com/xiaoluoboding/ve-charts/commit/6de5111f5e3b13219b90cf3a5b2f17cae3598d0d))



# [1.0.0-alpha.1](https://github.com/xiaoluoboding/ve-charts/compare/v0.8.2...v1.0.0-alpha.1) (2021-03-17)


### Bug Fixes

* 修复使用 dataset API 引起的图表渲染错误问题 ([676a05c](https://github.com/xiaoluoboding/ve-charts/commit/676a05cf076a6722874fac75448d3377dc19eeb8))
* 修复文件名称大写 ([fc9fb33](https://github.com/xiaoluoboding/ve-charts/commit/fc9fb334be70437603321136cd5284de158bdc2b))
* 修复百分比堆叠图计算值问题 ([be1c7dc](https://github.com/xiaoluoboding/ve-charts/commit/be1c7dcce454dcb23cdcfb97060ab37327498616))
* 修复饼图度量名称是数字引起的显示问题 ([3726988](https://github.com/xiaoluoboding/ve-charts/commit/3726988af914e3889dd9aad3150d9545d1bc465e))
* 判断数据是否为空影响到传入数组的问题 ([f118ae5](https://github.com/xiaoluoboding/ve-charts/commit/f118ae526c1824ca56eb66d18b01aa4f6f0f76d9))
* 地图模式为map时，不做城市校验 ([da0c178](https://github.com/xiaoluoboding/ve-charts/commit/da0c1786e7fa4713ecf27d9b7dc781d9da70f0f3))
* 更换校验数字函数，修复维度值为数值引起的渲染失效问题 ([29ba2a2](https://github.com/xiaoluoboding/ve-charts/commit/29ba2a254d0d5bd9cccc7b6bd28b54e5ae0222f0))
* 漏斗图显示问题 ([e424446](https://github.com/xiaoluoboding/ve-charts/commit/e4244463745dc232ae19c10a85725dabce767b01))
* 获取不到维度名称导致的渲染bug ([754a34d](https://github.com/xiaoluoboding/ve-charts/commit/754a34d250d9c3a42bfd0ea1a66dd672240d189c))
* 调整地图组件视觉映射最小值 ([c04c4f9](https://github.com/xiaoluoboding/ve-charts/commit/c04c4f906b535481065b199447f81b9672ce0530))
* 默认geo.itemStyle属性被覆盖bug ([38dc810](https://github.com/xiaoluoboding/ve-charts/commit/38dc810f96ed8e2fdc5b6b40427d7bfbfc953d4a))
* 默认不传入配置项显示问题 ([38c9d56](https://github.com/xiaoluoboding/ve-charts/commit/38c9d56afc87df655874a3ee2729943f296f99c4))


### Features

* add build scripts ([30ba37b](https://github.com/xiaoluoboding/ve-charts/commit/30ba37b5ca9388949f13bf01fe6129235622cdac))
* add examples for vite ([45a2263](https://github.com/xiaoluoboding/ve-charts/commit/45a226388348707fd24d046def7496ef6c55bdc0))
* add vetur support ([014634d](https://github.com/xiaoluoboding/ve-charts/commit/014634d036e215e6787d1f2db4536f400c899272))
* barchart新增Y轴属性设置 ([90ae3f8](https://github.com/xiaoluoboding/ve-charts/commit/90ae3f88703bcf2700489be8b4db14adf55e2760))
* build packages ([e56695b](https://github.com/xiaoluoboding/ve-charts/commit/e56695b95e3cf55bf1368d46dba7c5b5d8956e61))
* declare component props types ([5c44e9c](https://github.com/xiaoluoboding/ve-charts/commit/5c44e9c8c588c472854a225b125f168c3f4ceda3))
* delegate all echarts events on component ([79a2ac6](https://github.com/xiaoluoboding/ve-charts/commit/79a2ac6f06c1e98d637357e4b0c390f29fba3b2f))
* ECharts底层新增监听点击空白处事件 ([e8ba1d1](https://github.com/xiaoluoboding/ve-charts/commit/e8ba1d141cfd95bb0468fd66f04791da0a431201))
* linechart新增Y轴属性设置 ([6294146](https://github.com/xiaoluoboding/ve-charts/commit/6294146d4e1c4b74c4c70091e0a7561436014cd1))
* made option reactive ([485a732](https://github.com/xiaoluoboding/ve-charts/commit/485a73221545aedd06e5fc4c4e20244adf039172))
* refactor merge option function ([2df392c](https://github.com/xiaoluoboding/ve-charts/commit/2df392cdfc434393af99127aa9e2963dbfaf46c8))
* rename export modules ([d952da2](https://github.com/xiaoluoboding/ve-charts/commit/d952da208dffc5d3414e422ab981598824200b2a))
* xAxis与yAxis支持传入数组；暂无数据模版渲染逻辑修改 ([8a69ae0](https://github.com/xiaoluoboding/ve-charts/commit/8a69ae010b2711fa475c852988d988b603debea0))
* 优化 polar plot 传参 ([582e5bb](https://github.com/xiaoluoboding/ve-charts/commit/582e5bb1ac3c3cf815f1bdf2253499e09c05f035))
* 优化 polar polt ([34b6436](https://github.com/xiaoluoboding/ve-charts/commit/34b6436a0c7ab3203c422cf8f298033983c80278))
* 修改geo地图注册地图为外部链接方式 ([6f7448c](https://github.com/xiaoluoboding/ve-charts/commit/6f7448cc0858ddf89c6371455d9635e725075bc9))
* 修改桑基图数据格式 ([904f7c6](https://github.com/xiaoluoboding/ve-charts/commit/904f7c6b63582af289dfc0c62ed50aa6c79e58ef))
* 地图变形组件可设置标记颜色 ([b7d3316](https://github.com/xiaoluoboding/ve-charts/commit/b7d33165f3fc58f8ce50c6383a66aa996036268e))
* 地图组件适配飞线地图 ([bd5d294](https://github.com/xiaoluoboding/ve-charts/commit/bd5d294751860d5b4e80155f6288d028707e1e6a))
* 增加飞线地图说明文档 ([0377515](https://github.com/xiaoluoboding/ve-charts/commit/037751599bb1d9e73fa514ab8fd73a8ff9512d56))
* 增强图表功能 ([5b3cbe9](https://github.com/xiaoluoboding/ve-charts/commit/5b3cbe9eab62929a9f274705fd24452c13ef8953))
* 完善地图API设计 ([46c8b79](https://github.com/xiaoluoboding/ve-charts/commit/46c8b799b39e3509158349ecf0390f72fe0c06ca))
* 散点图增加坐标轴名称设置 ([8111b21](https://github.com/xiaoluoboding/ve-charts/commit/8111b21d60b8e2eb53b1804daad5501d511441b5))
* 新增X轴和Y轴反向属性 ([c9fef0c](https://github.com/xiaoluoboding/ve-charts/commit/c9fef0c9d6ba945b1787a47aa46ea57acf790db1))
* 新增中国地图初版 ([02620fd](https://github.com/xiaoluoboding/ve-charts/commit/02620fd715969ac22513b3c10f4dd1a783c74f39))
* 新增图表实例属性 ([4254fbd](https://github.com/xiaoluoboding/ve-charts/commit/4254fbd00457341172a1a34e8d7c595e99342baf))
* 新增支持三个 events ([08d113a](https://github.com/xiaoluoboding/ve-charts/commit/08d113af6007f4d417af36741270fba7859612cf))
* 新增极区图 ([0ac930f](https://github.com/xiaoluoboding/ve-charts/commit/0ac930f8d44a76ac932501b35d693dc3a482415c))
* 新增柱图和散点图示例 ([ef8ef11](https://github.com/xiaoluoboding/ve-charts/commit/ef8ef11932de7c1010f0f702bb3d54be63fa0099))
* 新增水球图 ([538f9cc](https://github.com/xiaoluoboding/ve-charts/commit/538f9ccd073c317f493db64216daffce54be1b12))
* 新增组件支持所有 options 传入 ([bfef425](https://github.com/xiaoluoboding/ve-charts/commit/bfef425d8fe26b56c8aac111be6fd69e47261675))
* 新增词云图 ([ddbd5bf](https://github.com/xiaoluoboding/ve-charts/commit/ddbd5bfd43c33b5fc4828b6b22efc3e5ecb2d3fd))
* 新增词云图文档说明 ([22fb6fa](https://github.com/xiaoluoboding/ve-charts/commit/22fb6fa1334e5ea2afce7ded28509cb9efae1ceb))
* 更改调试例子 ([7d4040a](https://github.com/xiaoluoboding/ve-charts/commit/7d4040a120c32ee8c9856bb70c0df2c72c971480))
* 极区图新增圆角配置项roundCap ([2f7410b](https://github.com/xiaoluoboding/ve-charts/commit/2f7410bb2992e13c408fc5202b377faf8f0ccffd))
* 极区图新增角度轴相关配置 ([65238c0](https://github.com/xiaoluoboding/ve-charts/commit/65238c0237c1679a0766e750d654d56b838fc98d))
* 柱状图、折线图新增 tooltip、legend 配置传参 ([fe523d0](https://github.com/xiaoluoboding/ve-charts/commit/fe523d0124e835817eb6e41f3ae29ff0826b7f3b))
* 添加桑基图基础功能 ([96557ee](https://github.com/xiaoluoboding/ve-charts/commit/96557eeb2410d84b7061292c0bac7fe83d5c756f))
* **funnel:** 漏斗图功能增强 ([17cd159](https://github.com/xiaoluoboding/ve-charts/commit/17cd159f6447c7721cabc3db0de056aa3fa9404a))
* 柱状图支持多个第二个轴线 ([1e75e11](https://github.com/xiaoluoboding/ve-charts/commit/1e75e1143e57f87b8ca281c11b6f6f120539fa1d))
* 调整中国地图组件接口 ([c9c154e](https://github.com/xiaoluoboding/ve-charts/commit/c9c154e11d53c174527a488c881d21073b3a08e8))



