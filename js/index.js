/*head 和 bird 摆动 */
var jsHeadTitle = document.getElementById('headTitle');
var jsHeadBird = document.getElementById('headBird');
var jsWrapBg = document.getElementById('wrapBg');

var Y = 3; //标题摆动幅度

var index = 0;
var imgArr = ["img/bird0.png", "img/bird1.png"]
var headWaveTimer = setInterval(headWave, 200);

function headWave() {
    Y *= -1;
    jsHeadTitle.style.top = jsHeadTitle.offsetTop + Y + "px";
    jsHeadBird.src = imgArr[index++];
    if (index == 2) {
        index = 0;
    }
}

/*移动banner条 */

var jsGrassLand1 = document.getElementById('grassLand1');
var jsGrassLand2 = document.getElementById('grassLand2');
var landTimer = setInterval(landRun, 30);

function landRun() {
    if (jsGrassLand1.offsetLeft <= -343) {
        jsGrassLand1.style.left = "343px";
    }
    if (jsGrassLand2.offsetLeft <= -343) {
        jsGrassLand2.style.left = "343px";
    }
    jsGrassLand1.style.left = jsGrassLand1.offsetLeft - 3 + "px";
    jsGrassLand2.style.left = jsGrassLand2.offsetLeft - 3 + "px";
}



/*按star键 消失 head*/
var jsStartBtn = document.getElementById("startBtn");
jsStartBtn.onclick = function() {
    jsHeadTitle.style.display = "none";
    clearInterval(headWaveTimer);
    jsStartBtn.style.display = "none";
    jsStartBtn.style.display = "none";
    bird.showBrid(jsWrapBg);
    bird.flyBird();
    bird.wingWave();
    jsWrapBg.onclick = function () {
        bird.fallSpeed = -8;
    };

}