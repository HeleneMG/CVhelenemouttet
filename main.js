 
 //changement thème
 function setActiveStyleSheet(title) {
    var links = document.querySelectorAll('link[rel*="stylesheet"]');
    var i = links.length;
    while (links[--i]) {
        links[i].disabled = links[i].getAttribute('title') !== title;
    }
}

//changement couleur heure 
var myDate = new Date();
var hours = myDate.getHours();

if (5 <= hours && hours < 9) // 5-9 jour
{
  document.body.className = 'vert';
}
else if (9 <= hours && hours < 16) // 9-17 jour
{
  document.body.className = 'jaune';
}
else if (16 <= hours && hours < 22) // 16-22 soir
{
  document.body.className = 'rose';
}
else if (22 <= hours || hours < 5) // 22-5 nuit
{
  document.body.className = 'bleu';
}

//horloge 
var myVar = setInterval(function () {myTimer()}, 1000);
      function myTimer() {
        var d = new Date();
    var t = d.toLocaleTimeString();
    document.getElementById("horloge").innerHTML = t;
  }

  //scroll reveal
ScrollReveal().reveal('h1', {
  duration: 3000,  
  scale: 0.8, 
  reset: true 
});

ScrollReveal().reveal('h2', {
  duration: 4000,
  scale: 0.6,
  reset: true
});

ScrollReveal().reveal('.comp', {
  duration: 1500,
  distance: '100px',
  origin: 'left',
  scale: 1,
  reset: true
});

ScrollReveal().reveal('.star', {
  duration: 2000,
  distance: '100px',
  origin: 'right',
  scale: 1,
  reset: true
});

ScrollReveal().reveal('.diplomes', {
  duration: 2500,
  origin: 'left',
  distance: '200px',
  reset: true,
  viewFactor: 0.2
});
ScrollReveal().reveal('.jobs', {
  duration: 3500,
  origin: 'right',
  distance: '300px',
  reset: true,
  viewFactor: 0.2
});
ScrollReveal().reveal('.reveallangues', {
  duration: 3000,
  origin: 'top',
  distance: '30px',
  reset: true,
  viewFactor: 0.2
});
ScrollReveal().reveal('.coordonnees1', {
  duration: 2000,
  origin: 'left',
  distance: '400px',
  reset: true,
  viewFactor: 0.7
});
ScrollReveal().reveal('.coordonnees2', {
  duration: 2000,
  origin: 'right',
  distance: '400px',
  reset: true,
  viewFactor: 0.7
});