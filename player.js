// ไฟล์นี้คือไฟล์ player.js (หรือ history.js) ที่ต้องอยู่บน GitHub Pages

// 🚨 URL ต้องเป็นโดเมนของคุณเอง และไม่มีพอร์ต :80 ต่อท้าย
var videoUrl = 'http://mydomain.space/hls/streamkey.m3u8'; 

var video = document.getElementById('videoPlayer');

if (Hls.isSupported()) {
    var hls = new Hls();
    hls.loadSource(videoUrl);
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, function() {
        video.play();
    });
} else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = videoUrl;
    video.addEventListener('loadedmetadata', function() {
        video.play();
    });
} else {
    console.error("Browser does not support HLS playback.");
}
