//lenh re nhanh
// let user = {
//     age: 18,
//     name: "nguyen van a",
//     male: false   
// }
// if(user.age > 18){
//     console.log("ban duoc phep truy cap")
// }
// else if(user.age <= 18 && user.male == true){
//     console.log("duoc phep truy cap")
// }
// else{
//     console.log("tu choi truy cap")
// }

var array = [2,9,-3,6,80,-2,-10,51,41]
//in ra cac so chan
//in ra cac so nguyen duong,chan

// for(var i=0; i <= array.length - 1; i++){
//     if (array[i]%2 ==0){
//         console.log(array[i])
//     }   
// }

// for(var i=0; i <= array.length - 1; i++){
//     if (array[i]%2 ==0 && array[i] > 0){
//         console.log(array[i])
//     }   
// }
for(var item of array){
    // console.log(item)
    switch(item % 2){
        case 0:
            console.log("so chan",item)
            break;
        default:
            console.log("khong phai so chan")
            break;
    }

}

