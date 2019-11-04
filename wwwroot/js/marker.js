let marker1 = document.getElementById("marker1");
marker1.onclick = function () {
    let color = getColor(marker1.className);
    marker1.className = color;
}

let marker2 = document.getElementById("marker2");
marker2.onclick = function () {
    let color = getColor(marker2.className);
    marker2.className = color;
}

let marker3 = document.getElementById("marker3");
marker3.onclick = function () {
    let color = getColor(marker3.className);
    marker3.className = color;
}

function getColor(className) {
    if (className == "marker-green") {
        return "marker-blue";
    } else if (className == "marker-red") {
        return "marker-green";
    } else if (className == "marker-blue") {
        return "marker-red";
    }
}

let blueBtn = document.getElementById("blueBtn");
blueBtn.onclick = function () {
    marker1.className = setColor("blue");
    marker2.className = setColor("blue");
    marker3.className = setColor("blue");
}

let redBtn = document.getElementById("redBtn");
redBtn.onclick = function () {
    marker1.className = setColor("red");
    marker2.className = setColor("red");
    marker3.className = setColor("red");
}

let greenBtn = document.getElementById("greenBtn");
greenBtn.onclick = function () {
    marker1.className = setColor("green");
    marker2.className = setColor("green");
    marker3.className = setColor("green");
}

function setColor(color) {
    return "marker-" + color;
}