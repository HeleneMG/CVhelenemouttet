//SCROLL REVEAL
ScrollReveal().reveal('h1', {
  duration: 1000,
  scale: 0.8,
  reset: false
});

ScrollReveal().reveal('h2', {
  duration: 2000,
  scale: 0.6,
  reset: false
});

ScrollReveal().reveal('.comp', {
  duration: 1500,
  distance: '200px',
  origin: 'left',
  //scale: 1,
  reset: true
});

ScrollReveal().reveal('.diplomes', {
  duration: 2000,
  reset: true,
  viewFactor: 0.2
});

ScrollReveal().reveal('.jobs', {
  duration: 3000,
  reset: true,
  viewFactor: 0.2
});

ScrollReveal().reveal('.titreReal', {
  duration: 2000,
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
ScrollReveal().reveal('.contacts', {
  duration: 3000,
  origin: 'top',
  distance: '30px',
  reset: true,
  viewFactor: 0.2
});

//fixed NAVBAR
window.onscroll = function () {fixedNavbar(), scrollFunction()};
var navbar = document.querySelector("nav");
var mybutton = document.querySelector("#toTop");
var sticky = navbar.offsetTop;

function fixedNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
//TO TOP BUTTON
function scrollFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    $(mybutton).fadeIn(900);
  } else {
    $(mybutton).fadeOut(900)
  }
}
mybutton.addEventListener('click', function topFunction() {
  $("html, body").animate({ scrollTop: 0 }, 900);
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

/*
var listeFormAjax = document.querySelectorAll("form.ajax");
listeFormAjax.forEach(function (formulaire) {
  // on ajoute un event listener sur 'submit'
  formulaire.addEventListener('submit', function (event) {
    event.preventDefault(); // bloque l'envoi classique du formulaire

    // JE PEUX ENVOYE
  });
})
*/



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

/*HORLOGE
var myVar = setInterval(function () {myTimer()}, 1000);
      function myTimer() {
        var d = new Date();
    var t = d.toLocaleTimeString();
    document.getElementById("horloge").innerHTML = t;
  }*/
