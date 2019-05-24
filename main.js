 
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

//to top
jQuery(document).ready(function () {
  var duration = 500;
  jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 100) {
      // Si un défillement de 100 pixels ou plus.
      // Ajoute le bouton
      jQuery('.cRetour').fadeIn(duration);
    } else {
      // Sinon enlève le bouton
      jQuery('.cRetour').fadeOut(duration);
    }
  });

  jQuery('.cRetour').click(function (event) {
    // Un clic provoque le retour en haut animé.
    event.preventDefault();
    jQuery('html, body').animate({ scrollTop: 0 }, duration);
    return false;
  })
});