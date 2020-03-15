# AutoWatch
基于Auto.js的自动刷看短视频脚本
# 介绍
脚本能够实现抖音极速版、快手极速版，刷宝短视频、火山极速版、趣看看App的自动刷看。脚本布置在手机上后会自动刷看，为防止被封，我设置几个app循环刷看，其中趣看看能实现文章自动检测广告，跳过广告阅读（趣看看测试不多，因为一开始趣看看被系统检测出来封号了），仅供娱乐。
# 使用
## 电脑端
1. 安装 **vscode**， 在左边插件栏搜索安装`Auto.js-VSCodeExt`插件。
2. 克隆项目
``` git clone https://github.com/wpc2333/AutoWatch.git```
3. 使用vscode打开项目。windows下使用快捷键<kbd>ctrl</kbd><kbd>shift</kbd>+<kbd>P</kbd>，选择运行`Auto.js:Start Server`打开服务，手机端打开`Auto.js` 选择连接电脑，输入电脑的ip地址（手机电脑需要在同一局域网下）。
4. 待手机连接上后右下角会出现提示，使用快捷键<kbd>ctrl</kbd><kbd>shift</kbd>+<kbd>P</kbd>，选择运行`Auto.js:Save Project`即可将项目布置导手机上。
5. 运行程序。
- 电脑端使用快捷键<kbd>ctrl</kbd><kbd>shift</kbd>+<kbd>P</kbd>，选择运行`Auto.js:Run On Device`,选择自己的手机IP即可运行。
- 在手机端运行：打开`Auto.js`，选择AutoWatch，点击开始运行。
## 手机端
使用手机新建一个项目文件，将main.js的代码全部拷贝即可运行。
# 参数修改
```
var i = 1;//程序在各个app之间循环的次数
while (i > 0) {
        kuaishou.run(2)//参数为每次循环刷动的次数
        shuabao.run(2)//参数为每次循环刷动的次数
        huoshan.run(2)//参数为每次循环刷动的次数
        douyin.run(200)//参数为每次循环刷动的次数
        caidan.run(100)//参数为每次循环刷动的次数
        i--;
    }
     qkk.open()//打开趣看看短视频
     .article(50, 10)//阅读文章数，每篇文章滑动次数
     .video(1000)//看的短视频数量
```