 function setActiveStyleSheet(title) {
    var links = document.querySelectorAll('link[rel*="stylesheet"]');
    var i = links.length;
    while (links[--i]) {
        links[i].disabled = links[i].getAttribute('title') !== title;
    }
}


    var myVar = setInterval(function () {myTimer()}, 1000);

      function myTimer() {
        var d = new Date();
    var t = d.toLocaleTimeString();
    document.getElementById("demo").innerHTML = t;
  }

