//dom (document object model): gồm 3 thành phần chính : element; attribute; text
// DOM có thể thay đổi element, attribute, css, events
// vẽ mindmap của DOM
// vẽ mindmap của JS

//mouseevent
function clickme(){
    console.log('click me')
}

// id
var h1 = document.getElementById('name')
console.log(h1)

var elm = document.getElementsByClassName('title')
console.log(elm)

var elment = document.querySelector('h1')
// elment.style.color = "red";
// elment.style.fontSize = "50px"
console.log(elment.style)

var attr = h1.getAttribute('id')
console.log(attr)

function remove(){
    var box = document.getElementsByClassName('box')[0]
    box.removeChild(h1)
}

// function append(){
//     var box = document.getElementsByClassName('box')[0]
//     var idappnend = document.getElementById('des')
//     // var box = document.getElementById('des')
//     box.appendChild(idappnend)
// }


// setTimeout(() => {
//     elment.style.color = "red";
//     elment.style.fontSize = "50px"
// }, 2000);

//class
console.log(elment.classList)
//check class co ton tai khong?
elment.classList.contains("my-class")
console.log(elment.classList.contains("my-class"))
// add class
elment.classList.add("my-class-2")
//remove class 
elment.classList.remove("title")
//toggle: có thì remove, không có thì add
elment.classList.toggle("title")


// setInterval(() => {
//     if(elment.classList.contains("red-color")){
//         elment.classList.remove("red-color") 
//     }
//     else{
//         elment.classList.add("red-color")
//     }
// }, 1000);


