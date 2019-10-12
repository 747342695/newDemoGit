// function playVideo(containerID,videoUrl){
//     		var videoObject = {
// 				//container: '#mainVideo', //容器的ID或className
// 				container: containerID, //容器的ID或className
// 				variable: 'player', //播放函数名称
// 				//loop: true, //播放结束是否循环播放
// 				autoplay: false,//是否自动播放
// 				 flashplayer: true,
//                    live: true, // 是否直播视频
// 				poster: 'material/poster.jpg', //封面图片
// 				preview: { //预览图片
// 					file: ['material/mydream_en1800_1010_01.png', 'material/mydream_en1800_1010_02.png'],
// 					scale: 2
// 				},
//
// 				//debug:true,
// 			//video:'http://img.ksbbs.com/asset/Mon_1703/05cacb4e02f9d9e.mp4'
// 				  video: { // 视频地址列表形式 http://61.184.202.35:6713/mag/hls/db60fa15efc14095a4b36d9269027cb7/1/live.m3u8
//             file: videoUrl,
//          //type: 'video/m3u8'
//         }
// 			};
// 			var player = new ckplayer(videoObject);
//     	}
function playVideo (containerID,idCard) {
    const videoObject = {
        container: "#"+containerID, // 容器的ID或className
        autoplay: true,
        loaded: 'loadedHandler', // 当播放器加载后执行的函数
        variable: 'player', // 播放函数名称
        flashplayer: true,
        live: true, // 是否直播视频
        changeControlBarShow: false,
        // poster: 'material/poster.jpg', // 封面图片
        video: { // 视频地址列表形式 http://61.184.202.35:6713/mag/hls/db60fa15efc14095a4b36d9269027cb7/1/live.m3u8
            file: "http://61.184.202.35:6713/mag/hls/"+idCard+"/1/live.m3u8",
            type: 'video/m3u8'
        }
    };
    // eslint-disable-next-line
    new ckplayer(videoObject);
}
