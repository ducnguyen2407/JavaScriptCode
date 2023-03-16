
var todoList = [];

function loadTodoList() {
  loading(true);
  var xhttp = new XMLHttpRequest();
  xhttp.addEventListener("load", displayData);
  xhttp.open("GET", "https://63ee18d3d466e0c18ba93b38.mockapi.io/api/work");
  xhttp.send();
}
// loadTodoList();
setTimeout(() => {
  loadTodoList()
  
},500);
function displayData(e) {
  // console.log(e)
  var respone = e.target.response;
  var jsonData = JSON.parse(respone);
  todoList = jsonData;
  // console.log(jsonData)
  setupData(jsonData);
}
function setupData(jsonData) {
  if (jsonData.length > 0) {
    var ul = "<ul>";
    for (var i = 0; i <= jsonData.length - 1; i++) {
      var isDoneClass = "";
      var isCheck = "";
      var disable = "";
      if (jsonData[i].IsDone == true) {
        isDoneClass = "done";
        isCheck = "checked";
        disable = "disabled";
      }
      var checkbox =
        '<input type = "checkbox" class = "checkbox" id = "checkbox-' +
        jsonData[i].id +
        '" ' +
        disable +
        " " +
        isCheck +
        ">";
      var name = "<p>" + jsonData[i].name + "</p>";
      var button =
        '<button class="btn-delete" id = "btn-delete-' +
        jsonData[i].id +
        '">x</button>';

      ul +=
        '<li class = "item ' +
        isDoneClass +
        '"> <div>' +
        checkbox +
        name +
        "</div>" +
        button +
        "</li>";
    }
    ul += "</ul>";
    renderData(ul);
  } else {
    var todoelm = document.getElementById("todolist");
    todoelm.innerHTML = "";
  }
  setTimeout(() => {
    loading(false);
    
  }, 1000);
}

function renderData(data) {
  
  var todoelm = document.getElementById("todolist");
  if (todoelm != undefined) {
    todoelm.innerHTML = data;
    document.addEventListener(
      "click",
      function (e) {
        e = e || window.event;
        var target = e.target;

        if (target.type == "checkbox" && target.nodeName == "INPUT") {
          var id = target.id;
          var idtodo = id.slice(9, id.length);
          console.log(idtodo);
          // console.log(id.length)
          // console.log(target)
          // console.log(id)
          updateStatus(idtodo);
        }

        // console.log(target)
        if (target.nodeName == "BUTTON" && target.className == "btn-delete") {
          loading(true);
          var id = target.id;
          var idtodo = id.slice(11, id.length);
          deleteTodo(idtodo);
        }
      },
      false
    );
  }
}

function deleteTodo(id) {
  
  var xhttp = new XMLHttpRequest();
  xhttp.addEventListener("load", loadTodoList);
  xhttp.open(
    "DELETE",
    "https://63ee18d3d466e0c18ba93b38.mockapi.io/api/work/" + id
  );
  // xhttp.setRequestHeader('Content-type','application/json; charset=utf-8');
  xhttp.send();
  // loadTodoList();
}
function updateStatus(e) {
  loading(true);
  var dataput = {
    IsDone: true,
  };
  var json = JSON.stringify(dataput);
  var xhttp = new XMLHttpRequest();

  xhttp.addEventListener("load", loadTodoList);
  xhttp.open(
    "PUT",
    "https://63ee18d3d466e0c18ba93b38.mockapi.io/api/work/" + e
  );
  xhttp.setRequestHeader("Content-type", "application/json; charset=utf-8");
  xhttp.send(json);
  // loadTodoList();
}
function filter() {
  var inputelm = document.getElementById("global-search");
  if (inputelm != undefined) {
    var text = inputelm.value;
    var todoFilter = todoList.filter((e) => {
      var lowerText = e.name.toLowerCase();
      if (lowerText.includes(text)) {
        return e;
      }
    });
    setupData(todoFilter);
    // console.log(todoFilter)
  }
}

function showModalPost() {
  var modalElm = document.getElementById("modal");
  if (modalElm) {
    modalElm.style.display = "flex";
  }
}

function hideModalPost() {
  var modalElm = document.getElementById("modal");
  if (modalElm) {
    modalElm.style.display = "none";
  }
}

function createTodo() {
  //lay text duoc nhap vao the input
  var inputelm = document.getElementById("inputADD");
  if (inputelm != undefined) {
    var text = inputelm.value;
  }
  //goi api post
  var json = JSON.stringify({name:text});
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://63ee18d3d466e0c18ba93b38.mockapi.io/api/work", true);

  //Send the proper header information along with the request
  xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");

  xhr.onreadystatechange = () => {
    // Call a function when the state changes.
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 201) {
      // Request finished. Do processing here.
      //clear the input va dong modal
      document.getElementById('inputADD').value = ''
      hideModalPost();
    }
  };
  xhr.send(json);
  // loadTodoList();
  //goi lai data moi
}
function loading(isloading){
  let elm = document.getElementById('loading')
  if(elm){
    if(isloading == true){
      elm.style.display = 'flex'
    }
    else{
      elm.style.display = 'none'
    }
  }

}
