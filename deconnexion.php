<?php
/* il faut demarrer la session*/
session_start();
 
if (isset($_SESSION['id'])) //les membres non connectes ne peuvent pas se deconnecter
{ 
    /*on vire toutes la variables de session*/
    $_SESSION = array();
    session_destroy();
 
    /*on renvoie sur la page d'accueil*/
    header('Location: index.php');     
}
else
{
     echo "Vous n'avez pas le droit d'acceder a cette page";
}
?>