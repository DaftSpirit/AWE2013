<?php

	
	$adresse_bdd='localhost';
	$bdd='test';
	$utilisateur='awe';
	$mot_passe='mario';

try
{
        $connexion = new PDO('mysql:host='.$adresse_bdd.';dbname='.$bdd, $utilisateur, $mot_passe);
		$connexion->exec("SET NAMES 'utf8'");
}
  
catch(Exception $e)
{
		echo "Une erreur s'est produite !<br />";
        echo 'Erreur : '.$e->getMessage().'<br />';
        echo 'Num Erreur : '.$e->getCode();
}

$req= $connexion->prepare('INSERT INTO user(pseudo,password,mail,name,adress) VALUES(:pseudo,:mdp,:email,:name,:adress)');
$passhache = sha1($_POST['mdp']);
$req->execute(array('pseudo'=>$_POST['pseudo'],'mdp'=>$passhache,'email'=>$_POST['email'],'name'=>$_POST['name'],'adress'=>$_POST['adress']));

	header('Location:index.php?page=premiereco');
?>
