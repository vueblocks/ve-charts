## [0.9.14](https://github.com/vueblocks/ve-charts/compare/v0.9.13...v0.9.14) (2023-12-14)


### Bug Fixes

* 优化悬浮图的默认位置信息，确保其内容不会被遮挡或超出图表容器 ([3a05b9f](https://github.com/vueblocks/ve-charts/commit/3a05b9f2932a2684720122632e925e552542d370))


## [0.9.13](https://github.com/vueblocks/ve-charts/compare/v0.9.12...v0.9.13) (2023-12-14)


### Features

* 新增扩展组件：柱图悬浮饼图 ([361f656](https://github.com/vueblocks/ve-charts/pull/193/commits))



## [0.9.11](https://github.com/vueblocks/ve-charts/compare/v0.9.10...v0.9.11) (2021-07-12)


### Features

* 柱状图新增yAxisPointerType（纵坐标指示器类型）配置项 ([6d2d0bc](https://github.com/vueblocks/ve-charts/commit/6d2d0bc13950aa35e6f8c21a02f44187d8bca7b2))



## [0.9.10](https://github.com/vueblocks/ve-charts/compare/v0.9.9...v0.9.10) (2021-06-24)


### Features

* 柱状图增加刻度标签旋转角度配置 ([246395c](https://github.com/vueblocks/ve-charts/commit/246395ca75915181d1e472b3ff9ef1f58ebc3cf5))



## [0.9.9](https://github.com/vueblocks/ve-charts/compare/v0.9.4...v0.9.9) (2021-06-16)


### Bug Fixes

* 修复使用 dataset API 引起的图表渲染错误问题 ([676a05c](https://github.com/vueblocks/ve-charts/commit/676a05cf076a6722874fac75448d3377dc19eeb8))
* 修复文件名称大写 ([fc9fb33](https://github.com/vueblocks/ve-charts/commit/fc9fb334be70437603321136cd5284de158bdc2b))
* 修复百分比堆叠图计算值问题 ([be1c7dc](https://github.com/vueblocks/ve-charts/commit/be1c7dcce454dcb23cdcfb97060ab37327498616))
* 修复饼图度量名称是数字引起的显示问题 ([3726988](https://github.com/vueblocks/ve-charts/commit/3726988af914e3889dd9aad3150d9545d1bc465e))
* 兼容 series 为对象场景 ([1b02ada](https://github.com/vueblocks/ve-charts/commit/1b02adaeca3941e248dccda4b2e58f8ad7f4b781))
* 判断数据是否为空影响到传入数组的问题 ([f118ae5](https://github.com/vueblocks/ve-charts/commit/f118ae526c1824ca56eb66d18b01aa4f6f0f76d9))
* 地图模式为map时，不做城市校验 ([da0c178](https://github.com/vueblocks/ve-charts/commit/da0c1786e7fa4713ecf27d9b7dc781d9da70f0f3))
* 折线图文档 ([722ff49](https://github.com/vueblocks/ve-charts/commit/722ff496c89161a91951146d79f6e4906e300fd1))
* 更换校验数字函数，修复维度值为数值引起的渲染失效问题 ([29ba2a2](https://github.com/vueblocks/ve-charts/commit/29ba2a254d0d5bd9cccc7b6bd28b54e5ae0222f0))
* 漏斗图显示问题 ([e424446](https://github.com/vueblocks/ve-charts/commit/e4244463745dc232ae19c10a85725dabce767b01))
* 获取不到维度名称导致的渲染bug ([754a34d](https://github.com/vueblocks/ve-charts/commit/754a34d250d9c3a42bfd0ea1a66dd672240d189c))
* 调整地图组件视觉映射最小值 ([c04c4f9](https://github.com/vueblocks/ve-charts/commit/c04c4f906b535481065b199447f81b9672ce0530))
* 雷达图刻度轴不可取消的问题 ([4d087ee](https://github.com/vueblocks/ve-charts/commit/4d087ee7540565c8596cc60bf427305d1075b8f9))
* 默认geo.itemStyle属性被覆盖bug ([38dc810](https://github.com/vueblocks/ve-charts/commit/38dc810f96ed8e2fdc5b6b40427d7bfbfc953d4a))
* 默认不传入配置项显示问题 ([38c9d56](https://github.com/vueblocks/ve-charts/commit/38c9d56afc87df655874a3ee2729943f296f99c4))


### Features

* barchart新增Y轴属性设置 ([90ae3f8](https://github.com/vueblocks/ve-charts/commit/90ae3f88703bcf2700489be8b4db14adf55e2760))
* ECharts底层新增监听点击空白处事件 ([e8ba1d1](https://github.com/vueblocks/ve-charts/commit/e8ba1d141cfd95bb0468fd66f04791da0a431201))
* linechart新增Y轴属性设置 ([6294146](https://github.com/vueblocks/ve-charts/commit/6294146d4e1c4b74c4c70091e0a7561436014cd1))
* xAxis与yAxis支持传入数组；暂无数据模版渲染逻辑修改 ([8a69ae0](https://github.com/vueblocks/ve-charts/commit/8a69ae010b2711fa475c852988d988b603debea0))
* 优化 polar plot 传参 ([582e5bb](https://github.com/vueblocks/ve-charts/commit/582e5bb1ac3c3cf815f1bdf2253499e09c05f035))
* 优化 polar polt ([34b6436](https://github.com/vueblocks/ve-charts/commit/34b6436a0c7ab3203c422cf8f298033983c80278))
* 修改geo地图注册地图为外部链接方式 ([6f7448c](https://github.com/vueblocks/ve-charts/commit/6f7448cc0858ddf89c6371455d9635e725075bc9))
* 修改桑基图数据格式 ([904f7c6](https://github.com/vueblocks/ve-charts/commit/904f7c6b63582af289dfc0c62ed50aa6c79e58ef))
* 地图变形组件可设置标记颜色 ([b7d3316](https://github.com/vueblocks/ve-charts/commit/b7d33165f3fc58f8ce50c6383a66aa996036268e))
* 地图组件适配飞线地图 ([bd5d294](https://github.com/vueblocks/ve-charts/commit/bd5d294751860d5b4e80155f6288d028707e1e6a))
* 增加飞线地图说明文档 ([0377515](https://github.com/vueblocks/ve-charts/commit/037751599bb1d9e73fa514ab8fd73a8ff9512d56))
* 增强图表功能 ([5b3cbe9](https://github.com/vueblocks/ve-charts/commit/5b3cbe9eab62929a9f274705fd24452c13ef8953))
* 完善地图API设计 ([46c8b79](https://github.com/vueblocks/ve-charts/commit/46c8b799b39e3509158349ecf0390f72fe0c06ca))
* 折线图、柱状图新增全局'markLine'、'markArea'配置 ([1297394](https://github.com/vueblocks/ve-charts/commit/1297394e6a8f8f020484bfdc2c6ba807b54ad64d))
* 折线图新增坐标轴刻度标签和轴线设置显隐 ([13f190f](https://github.com/vueblocks/ve-charts/commit/13f190fd1e66e920a034a8c2565c1f767ba5ad39))
* 折线图新增坐标轴刻度标签颜色设置 ([0567938](https://github.com/vueblocks/ve-charts/commit/05679384e109f7f5e92ea4a57f546079ced43bfe))
* 折线图新增坐标轴翻转 ([2d87fd6](https://github.com/vueblocks/ve-charts/commit/2d87fd622f70157a417e760a529b45e11bf575dc))
* 散点图增加坐标轴名称设置 ([8111b21](https://github.com/vueblocks/ve-charts/commit/8111b21d60b8e2eb53b1804daad5501d511441b5))
* 新增X轴和Y轴反向属性 ([c9fef0c](https://github.com/vueblocks/ve-charts/commit/c9fef0c9d6ba945b1787a47aa46ea57acf790db1))
* 新增中国地图初版 ([02620fd](https://github.com/vueblocks/ve-charts/commit/02620fd715969ac22513b3c10f4dd1a783c74f39))
* 新增公共系列配置项'seriesOption' ([f2b9bea](https://github.com/vueblocks/ve-charts/commit/f2b9beaeb93435aea7ebd49a4dc5b042b3e8db63))
* 新增图表实例属性 ([4254fbd](https://github.com/vueblocks/ve-charts/commit/4254fbd00457341172a1a34e8d7c595e99342baf))
* 新增支持三个 events ([08d113a](https://github.com/vueblocks/ve-charts/commit/08d113af6007f4d417af36741270fba7859612cf))
* 新增极区图 ([0ac930f](https://github.com/vueblocks/ve-charts/commit/0ac930f8d44a76ac932501b35d693dc3a482415c))
* 新增柱图和散点图示例 ([ef8ef11](https://github.com/vueblocks/ve-charts/commit/ef8ef11932de7c1010f0f702bb3d54be63fa0099))
* 新增水球图 ([538f9cc](https://github.com/vueblocks/ve-charts/commit/538f9ccd073c317f493db64216daffce54be1b12))
* 新增组件支持所有 options 传入 ([bfef425](https://github.com/vueblocks/ve-charts/commit/bfef425d8fe26b56c8aac111be6fd69e47261675))
* 新增词云图 ([ddbd5bf](https://github.com/vueblocks/ve-charts/commit/ddbd5bfd43c33b5fc4828b6b22efc3e5ecb2d3fd))
* 新增词云图文档说明 ([22fb6fa](https://github.com/vueblocks/ve-charts/commit/22fb6fa1334e5ea2afce7ded28509cb9efae1ceb))
* 更改调试例子 ([7d4040a](https://github.com/vueblocks/ve-charts/commit/7d4040a120c32ee8c9856bb70c0df2c72c971480))
* 极区图新增圆角配置项roundCap ([2f7410b](https://github.com/vueblocks/ve-charts/commit/2f7410bb2992e13c408fc5202b377faf8f0ccffd))
* 极区图新增角度轴相关配置 ([65238c0](https://github.com/vueblocks/ve-charts/commit/65238c0237c1679a0766e750d654d56b838fc98d))
* 柱状图、折线图新增 tooltip、legend 配置传参 ([fe523d0](https://github.com/vueblocks/ve-charts/commit/fe523d0124e835817eb6e41f3ae29ff0826b7f3b))
* 柱状图/折线图新增维度轴分隔线设置 ([f103cf5](https://github.com/vueblocks/ve-charts/commit/f103cf56f10f24dfb98e7c2149b159df4debc31d))
* 柱状图和折线图新增维度坐标名称设置 ([3e48792](https://github.com/vueblocks/ve-charts/commit/3e48792038cf0d7690f34f38ee084971ba82babf))
* 柱状图支持双纵坐标分别翻转 ([aae5dad](https://github.com/vueblocks/ve-charts/commit/aae5dad710d339666c0a210147294a5f596415cd))
* 柱状图支持多个第二个轴线 ([1e75e11](https://github.com/vueblocks/ve-charts/commit/1e75e1143e57f87b8ca281c11b6f6f120539fa1d))
* 柱状图新增坐标轴刻度标签和轴线可设置显隐 ([8e9e850](https://github.com/vueblocks/ve-charts/commit/8e9e850b8937cad1c323e7b5c440f3d7b7dcd606))
* 柱状图新增坐标轴刻度标签颜色设置 ([f822ca6](https://github.com/vueblocks/ve-charts/commit/f822ca613fdaa7b331611732f62455fd450877ee))
* 添加桑基图基础功能 ([96557ee](https://github.com/vueblocks/ve-charts/commit/96557eeb2410d84b7061292c0bac7fe83d5c756f))
* 调整中国地图组件接口 ([c9c154e](https://github.com/vueblocks/ve-charts/commit/c9c154e11d53c174527a488c881d21073b3a08e8))
* 雷达图新增坐标轴/指示器/标签设置 ([9d5418c](https://github.com/vueblocks/ve-charts/commit/9d5418cf09d8aee812450cf5063f3aa5717dcef1))
* **funnel:** 漏斗图功能增强 ([17cd159](https://github.com/vueblocks/ve-charts/commit/17cd159f6447c7721cabc3db0de056aa3fa9404a))



