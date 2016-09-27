<?php
	session_start();
	$adresse_bdd='localhost';
	$bdd='test';
	$utilisateur='awe';
	$mot_passe='mario';
	
	/*connexion a la BDD*/	
	try
    {
		$bdd = new PDO('mysql:host='.$adresse_bdd.';dbname='.$bdd, $utilisateur, $mot_passe);
    }
	catch (Exception $e)
	{
		die('Erreur : ' . $e->getMessage());
    }
	
	if($_POST['message']!='')
	{
		$delimiter=' ';
		$message=$_POST['message'];
		$mots=explode($delimiter,$message);
		$reponse=$bdd->query('SELECT categorie FROM interets');
		$data=$reponse->fetch();
		foreach($mots as $cle => $valeur)
		{
			foreach($data as $key => $value)
			{
				if($value==$valeur)
				{
					header('location:index.php?message='.$valeur);
				}
			}
		}
		header('location:index.php?page=accueil_not_found');
		//header('location:index.php');
	}
	else
	{
		header('location:index.php');
	}
?>
