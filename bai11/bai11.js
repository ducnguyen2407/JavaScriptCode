function clickMe(){
    //to do: lay the can kiem tra class
    var elm = document.getElementById('dialog')
    //kiem tra elm co ton tai hay khong ?
    if(elm != undefined){
        //kiem tra co showw trong class chua, neu co remove, khong thi add
        //cach 1: lay danh sach list class
        var classlist = elm.classList
        // console.log(classlist)
        // if(classlist.contains('show') == true){
        //     classlist.remove('show')
        // }
        // else{
        //     classlist.add('show')
        // }
        //cach 2: toggle class
        classlist.toggle('show')
    }

}
function clickExit(){
    var elment = document.getElementById('dialog')
    //kiem tra elm co ton tai hay khong ?
    if(elment != undefined){
        //kiem tra co showw trong class chua, neu co remove, khong thi add
        //cach 1: lay danh sach list class
        var classList = elment.classList
        // console.log(classlist)
        // if(classList.contains('show') == true){
        //    classList.remove('show');
        // }
        // else{
        //     classList.add('show');
        // }
        classList.toggle('show')
}
}

