//object constructor
var User = function(name,age,address){
    this.name = name
    this.age = age
    this.address = address
    this.getfullAddress = function(){
        return this.name + '-' + this.age
    }
}

var user1 = new User("nguyen van a",10,"197");

var user3 = new User("nguyen van a",10,"197");
User.prototype.isMale = true; //add them mot thuoc tinh vao obj, add cho tat ca cac bien
user1.houseNum = 11
var user2 = {
    name : "nguyen van a",
    age: 10,
    address: "197 tran phu"
}

