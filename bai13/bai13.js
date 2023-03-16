
function getGPS() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(e => disPlayLocation(e));
    } else {
      myElement.innerHTML = "Geolocation is not supported by this browser.";
    }
  }

function disPlayLocation(e){
    var lat = e.coords.latitude
    var lng = e.coords.longitude
    console.log(lat,lng)
    
    if(lat != undefined && lng != undefined){
        var addStr = document.getElementsByTagName("BODY")[0];
        var ele =  document.createElement("p")
        addStr.appendChild(ele)
        ele.innerHTML = lat + ', ' + lng
    
    }

}
function loadData(){
    var xhttp = new XMLHttpRequest();
    xhttp.addEventListener("load", reqListener)  
    xhttp.open('GET', 'https://api.zippopotam.us/us/33162')
    xhttp.send()
}
function reqListener(e){
    var result = e.target.response
    var res =  JSON.parse(result)
    var elem =  document.createElement('p')
    elem.innerHTML = res.country
    document.body.appendChild(elem)

    var location = res.places
    var ul = '<ul>'
    for(var i = 0; i <= location.length-1; i++){
        ul = ul + '<li>' + location[i].latitude + '</li>'
    }
    ul =  ul + '</ul>'
    var element =  document.createElement('div')
    element.innerHTML = ul
    document.body.appendChild(element)

    console.log(res)
}