
var start = new Date().getTime();
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function move() {
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;
    var left;
    var top;
    var wh;
    var right;
    var sp;
    sp = Math.floor(Math.random() * 3);;
    right = Math.random() * 1000;
    left = Math.random() * 1000;
    top = 250;
    wh = ((Math.random() * 300) + 100);
    document.getElementById("shape").style.right = right + "px";
    document.getElementById("shape").style.left = left + "px";
    document.getElementById("shape").style.top = top + "px";
    document.getElementById("shape").style.height = wh + "px";
    document.getElementById("shape").style.width = wh + "px";
    document.getElementById("shape").style.display = "block";
    document.getElementById("shape").style.backgroundColor = getRandomColor();
    if (sp == 1) {
        document.getElementById("shape").style.borderRadius = "30%";
    }
    else if (sp == 2) {
        document.getElementById("shape").style.borderRadius = "60%";
    }
    start = new Date().getTime();
}
move();

document.getElementById("shape").onclick = function () {
    document.getElementById("shape").style.display = "none";
    var end = new Date().getTime();
    var result = (end - start) / 1000;
    document.getElementById("pe").innerText = "your reaction time is" + result;
    move();
};
