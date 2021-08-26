
let kuaishou = {//快手快捷版
    run: function (runTimes) {
        toast('这是一个快手刷视频脚本,1s之后打开APP');
        sleep(1000);
        var launchResult = app.launchApp("快手极速版");//app.launchApp("com.kuaishou.nebula");
        if (!launchResult) {
            toast('你还没有安装快手极速版！');
            sleep(1000)
            return;
        }
        toast('等待软件打开，3s之后进入下个动作！');
        sleep(3000);
        var sleepTime = 10;
        // 统计运行次数
        var flagTime = 0;
        while (true) {
            flagTime++;
            // 超过次数终止程序
            if (flagTime > runTimes) {
                break;
            }
            sleepTime = randNum(5, 15);
            toast(sleepTime.toString() + 's之后跳到下个视频！已经执行 ' + flagTime.toString() + "次");
            sleep(sleepTime * 1000);
            nextVideo();
        }
        home();
        sleep(1000);

        function nextVideo() {
            //获得手机分辨率
            var width = device.width;
            var height = device.height;
            swipe(width / 2, height / 2, width / 2, height / 3, 10);
        };
        //获取范围内的随机数
        function randNum(minnum, maxnum) {
            return Math.floor(minnum + Math.random() * (maxnum - minnum));
        };
    }
};

let douyin = {//抖音快捷版
    run: function (runTimes) {
        toast('这是一个抖音刷视频脚本,1s之后打开APP');
        sleep(1000);
        var launchResult = app.launchApp("抖音极速版");//app.launch("com.ss.android.ugc.aweme.lite");
        if (!launchResult) {
            toast('你还没有安装抖音极速版！');
            sleep(1000)
            return;
        }
        toast('等待软件打开，3s之后进入下个动作！');
        sleep(3000);
        var sleepTime = 10;
        // 统计运行次数
        var flagTime = 0;
        while (true) {
            flagTime++;
            // 超过次数终止程序
            if (flagTime > runTimes) {
                break;
            }
            sleepTime = randNum(5, 15);
            toast(sleepTime.toString() + 's之后跳到下个视频！已经执行 ' + flagTime.toString() + "次");
            sleep(sleepTime * 1000);
            nextVideo();
        }

        home();
        sleep(1000);
        function nextVideo() {
            var width = device.width;
            var height = device.height;
            //swipe(x1,y1,x2,y2,t) 滑动函数 从x1,y1,到x2,y2用时t ms
            //屏幕的像素是从左上角开始的，向下，向右增加
            swipe(width / 2, height / 2, width / 2, height / 3, 10);
        };
        //获取范围内的随机数
        function randNum(minnum, maxnum) {
            return Math.floor(minnum + Math.random() * (maxnum - minnum));
        };
    }
};


let shuabao = {//刷宝短视频
    // 封装一下
    run: function (runTimes) {
        toast('这是一个刷宝的demo,1s之后打开APP');
        sleep(1000);
        var launchResult = app.launch("com.jm.video");
        if (!launchResult) {
            toast('你还没有刷宝短视频！');
            sleep(1000)
            return;
        }
        toast('等待软件打开，3s之后进入下个动作！');
        sleep(3000);
        var sleepTime = 10;
        // 统计运行次数
        var flagTime = 0;
        while (true) {
            flagTime++;
            // 超过次数终止程序
            if (flagTime > runTimes) {
                break;
            }
            // 随机时间之后下个视频，避免软件认为是机器人,因为有广告
            // 广告结束之后会有弹窗，因此时间设置短一点 可以防止广告结束
            sleepTime = randNum(5, 15);
            toast(sleepTime.toString() + 's之后跳到下个视频！已经执行 ' + flagTime.toString() + "次");
            sleep(sleepTime * 1000);
            nextVideo();
        }
        home();
        sleep(1000);

        function nextVideo() {
            //获得手机分辨率
            var width = device.width;
            var height = device.height;
            //swipe(x1,y1,x2,y2,t) 滑动函数 从x1,y1,到x2,y2用时t ms
            //屏幕的像素是从左上角开始的，向下，向右增加
            swipe(width / 2, height / 2, width / 2, height / 3, 10);
        };
        //获取范围内的随机数
        function randNum(minnum, maxnum) {
            return Math.floor(minnum + Math.random() * (maxnum - minnum));
        };
    }
};
let huoshan = {//火山快捷版
    // 封装一下
    run: function (runTimes) {
        toast('这是一个火山快捷版的demo,1s之后打开APP');
        sleep(1000);
        var launchResult = app.launch("com.ss.android.ugc.livelite");
        if (!launchResult) {
            toast('你还没有火山快捷版！');
            sleep(1000)
            return;
        }
        toast('等待软件打开，3s之后进入下个动作！');
        sleep(3000);
        var sleepTime = 10;
        // 统计运行次数
        var flagTime = 0;
        while (true) {
            flagTime++;
            // 超过次数终止程序
            if (flagTime > runTimes) {
                break;
            }
            // 随机时间之后下个视频，避免软件认为是机器人,因为有广告
            // 广告结束之后会有弹窗，因此时间设置短一点 可以防止广告结束
            sleepTime = randNum(5, 15);
            toast(sleepTime.toString() + 's之后跳到下个视频！已经执行 ' + flagTime.toString() + "次");
            sleep(sleepTime * 1000);
            nextVideo();
        }
        home();
        sleep(1000);

        function nextVideo() {
            //获得手机分辨率
            var width = device.width;
            var height = device.height;
            //swipe(x1,y1,x2,y2,t) 滑动函数 从x1,y1,到x2,y2用时t ms
            //屏幕的像素是从左上角开始的，向下，向右增加
            swipe(width / 2, height / 2, width / 2, height / 3, 10);
        };
        //获取范围内的随机数
        function randNum(minnum, maxnum) {
            return Math.floor(minnum + Math.random() * (maxnum - minnum));
        };
    }
};

let caidan = {//彩蛋视频
    // 封装一下
    run: function (runTimes) {
        toast('这是一个彩蛋的demo,1s之后打开APP');
        sleep(1000);
        var launchResult = app.launch("com.jifen.dandan");
        if (!launchResult) {
            toast('你还没有彩蛋短视频！');
            sleep(1000)
            return;
        }
        toast('等待软件打开，3s之后进入下个动作！');
        sleep(3000);
        var sleepTime = 10;
        // 统计运行次数
        var flagTime = 0;
        while (true) {
            flagTime++;
            // 超过次数终止程序
            if (flagTime > runTimes) {
                break;
            }
            // 随机时间之后下个视频，避免软件认为是机器人,因为有广告
            // 广告结束之后会有弹窗，因此时间设置短一点 可以防止广告结束
            sleepTime = randNum(5, 15);
            toast(sleepTime.toString() + 's之后跳到下个视频！已经执行 ' + flagTime.toString() + "次");
            sleep(sleepTime * 1000);
            // if (id("btn_layout").exists()) {

            //     toast("进入翻倍中");

            //     sleep(1000);
            //     console.log(id("btn_layout").untilFind().longClick())
            //     sleep(1000);
            //     while (true) {
            //         toast("检测中");
            //         sleep(1000);
            //         if ( className("android.widget.ImageView").depth(5).exists()) {
            //             console.log("退出:"+className("android.widget.ImageView").depth(5).untilFind().longClick());
            //             // className("android.widget.ImageView").depth(5).findOne().click()
            //             sleep(1000)
            //             break;
            //         }
            //     }
            // }
            // else   
            if (className("android.widget.TextView").text("立即领取").exists()) {
                toast("播放广告中");
                while (className("android.widget.TextView").text("立即领取").exists()) {
                    toast("等待中……");
                    click(1000, 1000);
                    sleep(1000)
                }
            }
            nextVideo();
        }

        function nextVideo() {
            //获得手机分辨率
            var width = device.width;
            var height = device.height;
            //swipe(x1,y1,x2,y2,t) 滑动函数 从x1,y1,到x2,y2用时t ms
            //屏幕的像素是从左上角开始的，向下，向右增加
            swipe(width / 2, height / 2, width / 2, height / 3, 10);
        };
        //获取范围内的随机数
        function randNum(minnum, maxnum) {
            return Math.floor(minnum + Math.random() * (maxnum - minnum));
        };
    }
};


let qkk = {//趣看看短视频
    // 封装一下
    open: function () {
        toast('这是一个趣看看的demo,1s之后打开APP');
        sleep(1000);
        var launchResult = app.launch(app.getPackageName("趣看看"));
        if (!launchResult) {
            toast('你还没有趣看看！');
            sleep(1000)
            return;
        }
        toast('等待软件打开，3s之后进入下个动作！');
        sleep(8000);
        return this;
    },
    video: function (runTimes) {
        click(device.width / 2, device.height * 9 / 10)
        sleep(1000)
        click(device.width * 2.7 / 10, device.height * 2.2 / 10)
        sleep(1000)
        var sleepTime = 10;
        // 统计运行次数
        var flagTime = 0;
        while (true) {

            flagTime++;
            // 超过次数终止程序
            if (flagTime > runTimes) {
                break;
            }
            // 随机时间之后下个视频，避免软件认为是机器人,因为有广告
            // 广告结束之后会有弹窗，因此时间设置短一点 可以防止广告结束
            sleepTime = randNum(5, 10);
            toast(sleepTime.toString() + 's之后跳到下个视频！已经执行 ' + flagTime.toString() + "次");
            sleep(sleepTime * 1000);
            nextVideo();
        }
        back();
        sleep(1000);
        return this;
        function nextVideo() {
            //获得手机分辨率
            var width = device.width;
            var height = device.height;
            //swipe(x1,y1,x2,y2,t) 滑动函数 从x1,y1,到x2,y2用时t ms
            //屏幕的像素是从左上角开始的，向下，向右增加
            swipe(width / 2, height * 3 / 4, width / 2, height / 4, 500);
        };
        //获取范围内的随机数
        function randNum(minnum, maxnum) {
            return Math.floor(minnum + Math.random() * (maxnum - minnum));
        };
    },


    article: function (runTimes, readtime) {
        click(device.width / 10, device.height * 9 / 10)
        sleep(1000)
        var flagTime = 1
        var safe = false;
        while (true) {
            if (flagTime > runTimes)
                break;
            while (true) {
                var add = disAdd();
                // sleep(5000);

                safe = true;
                for (let i in add) {
                    console.log(add[i]);
                    if (add[i] > 800 && add[i] < 2000)
                        safe = false;
                }

                console.log(add.length + " " + safe);
                // sleep(5000);

                if (add.length > 0 && safe)
                    break;
                else {
                    swipe(device.width / 2, device.height / 2, device.width / 2, device.height / 2 - 400, 500);
                    sleep(500);
                }
            }
            press(device.width / 2, device.height / 2, 100)
            //    sleep(2000)
            smoothSwipe(readtime)
            back();
            sleep(500);
            swipe(device.width / 2, device.height / 2, device.width / 2, device.height / 2 - 400, 500);
            sleep(500);
            flagTime++;
        }

        back();
        sleep(1000);
        return this;

        function readArticle() {
            //获得手机分辨率
            var width = device.width;
            var height = device.height;
            //swipe(x1,y1,x2,y2,t) 滑动函数 从x1,y1,到x2,y2用时t ms
            //屏幕的像素是从左上角开始的，向下，向右增加
            swipe(width / 2, height * 2 / 3, width / 2, height / 3, 500);
        };

        function disAdd() {
            var add = [];
            var hh = className("android.support.v7.widget.RecyclerView").scrollable(true).findOne().children();
            for (let i = 0; i < hh.length; i++) {
                var target = hh[i].findOne(className("android.widget.TextView").text("广告"));
                if (target != null) {
                    // add = target.bounds().centerY();
                    add.push(target.bounds().centerY())
                }
            }
            return add;
        };
        function smoothSwipe(time) {
            flagTime = 0;
            toast('这是一个阅读的demo');
            while (true) {
                flagTime++;
                // 超过次数终止程序
                if (flagTime > time) {
                    break;
                }
                sleepTime = randNum(5, 10);// 
                sleep(sleepTime * 1000);
                readArticle();
            };
        }
        //获取范围内的随机数
        function randNum(minnum, maxnum) {
            return Math.floor(minnum + Math.random() * (maxnum - minnum));
        };
    }
};



function fastClick() {
    var i = 1200
    toast(device.width + ' ' + device.height);
    while (i > 0) {
        press(540, 960, 1);
        sleep(2)
        i--;
    }
}

function main() {
    home();
    sleep(3000);
    var i=1000;
    while (i > 0) {
        kuaishou.run(100)//参数为每次循环刷动的次数
        shuabao.run(100)//参数为每次循环刷动的次数
        huoshan.run(100)//参数为每次循环刷动的次数
        //caidan.run(100)//参数为每次循环刷动的次数
        i--;
    }
        douyin.run(10000)//参数为每次循环刷动的次数
    qkk.open()//打开趣看看短视频
        .article(50, 10)//阅读文章数，每篇文章滑动次数
        .video(1000)//看的短视频数量
};

main();