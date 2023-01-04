var array = [
    {
        id: 1,
        name: "nguyen van a",
        age: 20
    },
    {
        id: 2,
        name: "nguyen van b",
        age: 20
    },
    {
        id: 3,
        name: "nguyen van c",
        age: 20
    },
    {
        id: 4,
        name: "nguyen van d",
        age: 20
    },
    {
        id: 5,
        name: "nguyen van e",
        age: 10
    },
    {
        id: 6,
        name: "nguyen van f",
        age: 20
    },
    {
        id: 7,
        name: "nguyen van g",
        age: 65
    },
    {
        id: 8,
        name: "nguyen van h",
        age: 20
    },
    {
        id: 9,
        name: "nguyen van j",
        age: 20
    }

]

//tính tổng số tuổi của mọi người
// var total = 0;
// for(var i = 0; i <= array.length - 1;i++ ){
//     total = total + array[i].age
// }
// console.log(total)

// ttìm vị trí của người có age = 65
// var index = 0;
// for(var i = 0; i <= array.length - 1;i++ ){
//     if (array[i].age == 65){
//         index = i
//     } 
// }
// console.log(index)

// timf vị trí của người có tuổi nhỏ nhất 
// var min = array[0].age;
// var indexmin = 0
// for(var i = 0 ; i <= array.length - 1;i++ ){
//     if(min > array[i].age){
//         min =  array[i].age
//         indexmin = i
//     } 
// }
// console.log(min)
// console.log(indexmin)


//chèn id trước trước tất cả tên trong field name

// var nameid = []
// for(var i = 0 ; i <= array.length - 1;i++ ){
//         array[i].name =  array[i].id + " " + array[i].name
//         nameid.push(array[i].name) 
//     }
// console.log(nameid)

//array method
// array.pop(): remove item cuối cùng trong array
// var newarray = array.pop();
// console.log(newarray);
// console.log("mang cu: ", array)

// array.push(): thêm 1 hoặc nhiều phần tử vào cuối mảng

// array.push("abc");
// console.log(array);
// console.log("mang cu: ", array)

// var total = 0;
// array.map(x => {
//     total = total + x.age
// })

// array.shift(): remove phần tử đầu tiên của mảng
// array.unshift(): add 1 hoặc nhiều phần tử vào vị trí đầu tiên của mảng
// console.log(array.unshift(12))
// console.log(array)

// array.slice(start index, end index)
// var arr = [1,2,3,4,5]
// var newarr = arr.slice(1)
// console.log(newarr)    

// array.splice(statindex, totaldelete, item1, item2,...)
//tạo ra mảng mới từ vị trí thứ 2 và lấy 3 kí tự
// var arr = [1,2,3,4,5]
// var arr2 =  arr.splice(1,3)
// console.log(arr2)

// var index = array.splice(6,1,'abc')
// console.log(index)
// console.log(array)




