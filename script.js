var rows = prompt("Enter a number for rows");
var body = document.querySelector("body");
var star = "";
for (var j = 0; j <= rows; j++) {
    star += "&nbsp;";
}

star += "&nbsp;*";
var p = document.createElement("p");
p.classList.add("yellow");
p.innerHTML = star;
p.style.margin = "0";
body.appendChild(p);

for (var i = 0; i < rows; i++) {
    var str = "";

    for (var j = rows; j > i; j--) {
        str += "&nbsp;";
    }
    str += "<span>*&nbsp;</span>";
    for (var k = 0; k <= i; k++) {
        str += "|";
    }
    for (var l = 1; l <= i; l++) {
        str += "|";
    }
    str += " <span>*</span>";
    var p = document.createElement("p");
    p.classList.add("green");
    p.style.margin = "0";
    p.innerHTML = str;
    body.appendChild(p);
}
