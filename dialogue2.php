<?php
$adresse_bdd='localhost';
$bdd='test';
$utilisateur='awe';
$mot_passe='mario';
session_start();

/*connexion a la BDD*/	
try
{
	$bdd = new PDO('mysql:host='.$adresse_bdd.';dbname='.$bdd, $utilisateur, $mot_passe);
}
catch (Exception $e)
{
	die('Erreur : ' . $e->getMessage());
}

$reponse=$bdd->query('SELECT categorie FROM interets');
$data=$reponse->fetch();
		foreach($data as $cle => $valeur)
		{
			echo $cle.' : '.$valeur.', ';
		}
?>