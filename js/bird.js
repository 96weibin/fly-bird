var bird = {
    flyTimer: null, //小鸟飞行定时器
    wingTimer: null, //小鸟吃般摆动定时器

    div: document.createElement("div"),
    showBrid: function(parentObj) {
        this.div.style.width = "40px";
        this.div.style.height = "28px";
        this.div.style.backgroundImage = "url(img/bird0.png)";
        this.div.style.backgroundRepeat = "no-repeat";
        this.div.style.position = "absolute";
        this.div.style.left = "50px";
        this.div.style.top = "200px";
        this.div.style.zIndex = "1";
        parentObj.appendChild(this.div);
    },
    fallSpeed: 0,

    /*控制小鸟得向下落的函数 */
    flyBird: function() {
        bird.flyTimer = setInterval(fly,40);
        function fly () {
            bird.div.style.top = bird.div.offsetTop + bird.fallSpeed++ + 'px';
            if (bird.div.offsetTop < 0) {
                bird.fallSpeed = 2; //这里控制小鸟不要飞出页面
            }
            if (bird.div.offsetTop >= 395) {
                bird.fallSpeed = 0;
                clearInterval(bird.flyTimer); //接触地面清除定时器
                clearInterval(bird.wingTimer);//清除翅膀振动定时器
            }
            if (bird.fallSpeed > 12 ) {
                bird.fallSpeed = 12;    //鸟儿的最大下落速度控制在12
            }
        }
    },
    wingWave : function () {   //控制小鸟煽动翅膀函数
        var up = ["url(img/up_bird0.png)","url(img/up_bird1.png)"];
        var down = ["url(img/down_bird0.png)","url(img/down_bird1.png)"];
        var i = 0, j = 0;
        bird.wingTimer = setInterval(wing,120);
        function wing () {
            if(bird.fallSpeed > 0) {
                bird.div.style.backgroundImage = down[i++];
                if(i == 2) {i = 0}
            }
            if(bird.fallSpeed < 0) {
                bird.div.style.backgroundImage = up[j++];
                if(j == 2) {j = 0}
            }
        }

    },

};