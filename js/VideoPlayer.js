// 思路：
/*
* 1、点击按钮 实现播放暂停并且切换图标
* 2、算出视频的总时显示出出来
* 3、当视频播放的时候，进度条同步，当前时间同步
* 4、点击实现全屏
*/

//        获取需要的标签
var video = document.querySelector('video');
//          播放按钮
var playBtn = document.querySelector('.switch');
//          当前进度条
var currProgress = document.querySelector('.curr-progress');
//          当前时间
var currTime = document.querySelector('.curr-time');
//          总时间
var totalTime = document.querySelector('.total-time');
//          全屏
var extend = document.querySelector('.extend');

var tTime = 0;

//         1、点击按钮 实现播放暂停并且切换图标

playBtn.onclick = function () {
    //               如果视频播放 就暂停，如果暂停 就播放
    if (video.paused) {
        //                   播放
        video.play();
        //切换图标
        this.classList.remove('icon-play');
        this.classList.add('icon-pause');
    } else {
        //                   暂停
        video.pause();
        //                   切换图标
        this.classList.remove('icon-pause');
        this.classList.add('icon-play');
    }
}

//        2、算出视频的总时显示出出来
//        当时加载完成后的事件，视频能播放的时候
video.oncanplay = function () {
    //             获取视频总时长
    tTime = video.duration;
    // console.log(tTime);

    //          将总秒数 转换成 时分秒的格式：00：00:00
    //            小时
    var h = Math.floor(tTime / 3600);
    //            分钟
    var m = Math.floor(tTime % 3600 / 60);
    //            秒
    var s = Math.floor(tTime % 60);

    //            console.log(h);
    //            console.log(m);
    //            console.log(s);

    //            把数据格式转成 00:00：00
    h = h >= 10 ? h : "0" + h;
    m = m >= 10 ? m : "0" + m;
    s = s >= 10 ? s : "0" + s;


    // console.log(h);
    // console.log(m);
    // console.log(s);
    //            显示出来
    totalTime.innerHTML = h + ":" + m + ":" + s;
}
//   * 3、当视频播放的时候，进度条同步，当前时间同步
//         当时当前时间更新的时候触发
video.ontimeupdate = function () {
    //            获取视频当前播放的时间
    //           console.log(video.currentTime);
    //            当前播放时间
    var cTime = video.currentTime;
    //           把格式转成00:00:00

    var h = Math.floor(cTime / 3600);
    //            分钟
    var m = Math.floor(cTime % 3600 / 60);
    //            秒
    var s = Math.floor(cTime % 60);

    //            把数据格式转成 00:00：00
    h = h >= 10 ? h : "0" + h;
    m = m >= 10 ? m : "0" + m;
    s = s >= 10 ? s : "0" + s;

    //            显示出当前时间
    currTime.innerHTML = h + ":" + m + ":" + s;

    //            改变进度条的宽度： 当前时间/总时间
    var value = cTime / tTime;

    currProgress.style.width = value * 100 + "%";

}

//        全屏
extend.onclick = function () {
    //            全屏的h5代码
    video.webkitRequestFullScreen();
}