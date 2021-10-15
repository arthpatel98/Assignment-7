/*eslint-env browser*/
var msg = "I Clicked";
var clickEvent = 'click';

//STEP 1
function displayMessage() {
    "use strict";
    alert(msg);
}

//STEP 2
var button2 = document.getElementById("button2");
button2.onclick= function () {
    "use strict";
    alert("I Clicked");
};

//STEP 3
var button3 = document.getElementById("button3");
button3.addEventListener("click", display, false);
function display() {
    "use strict";
    alert("I Clicked");
}

//STEP 4
var button4 = document.getElementById("button4");
button4.addEventListener("click", function () {
    "use strict";
    alert("I Clicked");
}, false);

//STEP 5
function init() {
    "use strict";
    var button5 = document.getElementById("button5");
    button5.addEventListener("click", function () {
        alert("I Clicked");
    });
}

window.addEventListener("load", init);