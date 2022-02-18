//(C) 2022 OliveWeb Software
//Do not distribute
function convert() {
var g = document.getElementById('choice').innerHTML;
var j = document.getElementById('boxone').value;
if (g === "...") {
    alert("Please choose Italic or Bold font.");
}
if (j === "") {
    alert("Please paste or enter text into the main box.");
}
if (g === 'Italic') {
    var h = document.getElementById('ital').innerHTML = 
    j;
}
if (g === 'Bold') {
    var h = document.getElementById('bld').innerHTML = 
    j;
}
}
function makeITAL() {
var g = document.getElementById("choice").innerHTML =
'Italic';
}
function makeBOLD() {
var g = document.getElementById("choice").innerHTML =
'Bold';
}
