<?php
	echo 'balançoire';
	session_start();
	echo 'balançoire';
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

	if(isset($_POST['message']))
	{
		echo 'ta mère';
		$delimiter=' ';
		$message=$_POST['message'];
		echo 'coucou';
		$mots=explode($delimiter,$message);
		$reponse=$bdd->query('SELECT categorie FROM interets');
		$data=$reponse->fetch();
		//$reponse->closeCursor();
		foreach($mots as $cle => $valeur)
		{
			foreach($data as $key => $value)
			{
				if($value==$valeur)
				{
					echo 'j\'ai trouvé !'
					$reponse=$bdd->query('SELECT categorie FROM interets WHERE categorie='.$valeur)
					$answer=$reponse->fetch();
					//$reponse->closeCursor();
					print_r($answer);
				}
			}
		}
		
	}
	else
	{
		header('location:index.php');
	}
?>