 
 /*CHANGEMENT THEME
 function setActiveStyleSheet(title) {
    var links = document.querySelectorAll('link[rel*="stylesheet"]');
    var i = links.length;
    while (links[--i]) {
        links[i].disabled = links[i].getAttribute('title') !== title;
    }
}
*/

/*CHANGEMENT COULEUR HEURE
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
}*/

//HORLOGE 
var myVar = setInterval(function () {myTimer()}, 1000);
      function myTimer() {
        var d = new Date();
    var t = d.toLocaleTimeString();
    document.getElementById("horloge").innerHTML = t;
  }

  //SCROLL REVEAL
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
  distance: '200px',
  origin: 'left',
  //scale: 1,
  reset: true
});

ScrollReveal().reveal('.star', {
  duration: 2000,
  distance: '200px',
  origin: 'right',
  //scale: 1,
  reset: true
});

ScrollReveal().reveal('.diplomes', {
  duration: 3000,
  origin: 'left',
  distance: '200px',
  reset: true,
  viewFactor: 0.2
});

ScrollReveal().reveal('.jobs', {
  duration: 4000,
  origin: 'right',
  distance: '300px',
  reset: true,
  viewFactor: 0.2
});

ScrollReveal().reveal('.realisations h4', {
  duration: 4000,
  origin: 'bottom',
  distance: '30px',
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

//JS QUI ENVOIE LES INFOS DES FORM EN AJAX

var listForm = document.querySelectorAll("form.ajax");

listForm.forEach(function(element){
  element.addEventListener('submit', function(event){
    event.preventDefault();
    var formData = new FormData(this);
    fetch("url-traitement.php",{
      method: "POST",
      body: formData
    })
    .then((response)=>{
      console.log(response);
      return response.text();
    })
    .then((texteServeur)=>{
      console.log(texteServeur);
      var baliseConfirmation = document.querySelector("form .confirmation");
      baliseConfirmation.innerHTML = texteServeur;
    });
  });
});
