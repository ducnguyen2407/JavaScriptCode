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

var elment = document.querySelector('#name')
console.log(elment)

var attr = h1.getAttribute('id')
console.log(attr)

function remove(){
    var box = document.getElementsByClassName('box')[0]
    box.removeChild(h1)
}

function append(){
    var box = document.getElementsByClassName('box')[0]
    var idappnend = document.getElementById('des')
    // var box = document.getElementById('des')
    box.appendChild(idappnend)
}