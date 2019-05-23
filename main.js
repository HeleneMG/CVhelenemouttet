 function setActiveStyleSheet(title) {
    var links = document.querySelectorAll('link[rel*="stylesheet"]');
    var i = links.length;
    while (links[--i]) {
        links[i].disabled = links[i].getAttribute('title') !== title;
    }
}

function dateFr() {
    // les noms de jours / mois
    var jours = new Array("dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi");
    var mois = new Array("janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre");
    // on recupere la date
    var date = new Date();
    // on construit le message
    var message = jours[date.getDay()] + " ";   // nom du jour
    message += date.getDate() + " ";   // numero du jour
    message += mois[date.getMonth()] + " ";   // mois
    message += date.getFullYear();
    return message;
}

function heure() {
    var date = new Date();
    var heure = date.getHours();
    var minutes = date.getMinutes();
    if (minutes < 10)
        minutes = "0" + minutes;
    return heure + "h" + minutes;
}