//lấy text đã nhập trong input
// chèn vào elm result
var arr = [];
// var addArr = localStorage.getItem('todoList')
// if(addArr != undefined){
//     arr = JSON.parse(addArr)
//     // console.log(arr)
//     setTimeout(() => {
//         var arrString = '<ul>';
//             for(var i = 0; i <= arr.length-1; i ++){
//                 arrString = arrString + '<li>'+arr[i]+'</li>'
//             }
//             var addString = arrString + '</ul>';
//             // console.log(addString)
//             var tagResult = document.getElementById('result')
//             if(tagResult != undefined){
//                 tagResult.innerHTML = addString
//             }       
//     }, 1000);
// }



function add(){
    var text = document.getElementById('input-text').value;
    if(text != ''){
        arr.push(text)
        var arrString = '<ul>';
        for(var i = 0; i <= arr.length-1; i ++){
            arrString = arrString + '<li>'+arr[i]+'</li>'
        }
        addString = arrString + '</ul>';
        // console.log(addString)
        var tagResult = document.getElementById('result')
        if(tagResult != undefined){
            tagResult.innerHTML = addString
        }
        // localStorage.setItem('todoList', JSON.stringify(arr))
    }
    // document.getElementById('input-text').value = '';
    // luu vao local storage
    // console.log(text)
    // console.log(arr)
};


function deleteItem(){
    localStorage.removeItem('todoList')
    document.getElementById('result').innerHTML = ''
}
