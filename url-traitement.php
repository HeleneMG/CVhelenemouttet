<?php

//FORMULAIRE NEWSLETTER 

$nom = $_REQUEST["nom"] ?? "";        
$email = $_REQUEST["email"] ?? "";    

$ligne = "Nom : $nom, \nMail : $email\n\n"; 
file_put_contents("newsletter.csv", $ligne, FILE_APPEND);

@mail("webmaster@monsite.fr", "nouvelle inscription newsletter", $ligne);

//echo "Merci de votre inscription $nom !";

//FORMULAIRE DE CONTACT

$contactNom = $_REQUEST ["contact-nom"] ?? "";
$contactEmail = $_REQUEST ["contact-email"] ?? "";
$contactMessage = $_REQUEST ["contact-message"] ?? "";

$block = "Nom : $contactNom, \nMail : $contactEmail, \n\nMessage : $contactMessage\n------------------\n\n";
file_put_contents("contact.txt", $block, FILE_APPEND);

echo "Merci $contactNom, votre message a bien été envoyé il sera traité dans les meilleurs délais.";

?>
