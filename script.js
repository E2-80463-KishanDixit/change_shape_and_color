"use strict"
var outerDiv  = document.getElementById('outerDiv');
var innerDiv  = document.getElementById('innerDiv');

var colorBtn = document.getElementById('changeColor');
var shapeBtn = document.getElementById('changeShape');

var colors = ['red', 'purple','green', 'yellow'];

var shapes = ['circle','square','triangle'];

function changeColor(){
    let index = Math.floor(Math.random() * colors.length);
    outerDiv.style.backgroundColor = colors[index];
}
colorBtn.addEventListener('click',changeColor);


function changeShape(){
    let index = Math.floor(Math.random() * shapes.length);
    let preShape = innerDiv.classList;
    console.log("hii " + preShape);
    innerDiv.classList.remove(preShape);
    innerDiv.classList.add(shapes[index]);
}
shapeBtn.addEventListener('click',changeShape);
