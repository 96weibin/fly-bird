var baseObj = {
    redomNum: function(min, max) {
        return parseInt(Math.random() * (max - min + 1) + min);
    },
    rectangleCrashExamine: function(obj1, obj2) {
        var obj1Left = obj1.offsetLeft;
        var obj1Width = obj1.offsetLeft + obj1.offsetWidth;
        var obj1Top = obj1.offsetTop;
        var obj1Height = obj1.offsetTop + obj1.offsetHeight;

        var obj2Left = obj2.offsetLeft;
        var obj2Width = obj2.offsetLeft + obj2.obj1Width;
        var obj2Top = obj2.offsetTop;
        var obj2Height = obj2.offsetTop + obj2.offsetHeight;

        if (!(obj1Left > obj2Width || obj1Width < obj2Left || obj1Top > obj2Height || obj1Height < obj2Top)) {
            return true;
        }
        return false;
    },
}

var blocksArr = [];
var blockDistance = baseObj.randomNum(130, 250);

var landTimer = setInterval(landRun, 30);

function landRun() {
    if (jsGressLand1.offsetLeft <= -343) {
        jsGressLand1.style.left = "343px";
    }
    if (jsGressLand2.offsetLeft <= -343) {
        jsGressLand2.style.left = "343px";
    }
    jsGressLand1.style.left = jsGressLand1.offsetLeft - 3 + "px";
    jsGressLand2.style.left = jsGressLand2.offsetLeft - 3 + "px";


    if (blocksArr.length) {
        for (var i = 0; i < blocksArr.length; i++) {
            blocksArr[i].moveBlock();
            var x = baseObj.rectangleCrashExamine(blocksArr[i].downDivWrap, bird.div);
            var y = baseObj.rectangleCrashExamine(blocksArr[i].upDivWrap, bird.div);
            var z = bird.div.offsetTop >= 390;
            //rectangleCrashExamine    啥意思？？

            if (x || y || z) {
                window.clearInterval(landTimer);
                bird.fallSpeed = 0;
                jsWrapBg.onclick = null;
            }
        }
    }
    if (blocksArr[blocksArr.length - 1].downDivWrap.offsetLeft < (450 - blockDistance)) {
        blockDistance = baseObj.redomNum(130, 250);
        var newBlock = new Block();
        newBlock.createBlock();
        blocksArr.push(newBlock);
    }
}