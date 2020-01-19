import { api_url } from './api.js';
function getData() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(data) {
    if (this.readyState == 4 && this.status == 200) {
      let userData = JSON.parse(this.responseText)
      console.log(userData["name"]);
      document.getElementById("imgurl").src = userData.imgurl;
      document.getElementById("name").innerHTML = userData.name;
      document.getElementById("title").innerHTML = userData.title;
      document.getElementById("desc").innerHTML = userData.desc;
      document.getElementById("phone").innerHTML = userData.phone;
    } else {
      console.log(this.readyState, this.status)
    }
  }
  xhttp.open("get",api_url, true)
  xhttp.send()
}

window.onload = getData();
