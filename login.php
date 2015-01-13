<?php
$adresse_bdd='localhost';
$bdd='test';
$utilisateur='awe';
$mot_passe='mario';
session_start();
if (empty($_SESSION['id'])) //les membres connectes ne peuvent pas s'inscrire
{
    /* il faut que toutes les variables du formulaire existent*/
    if(isset($_POST['pseudo']) && isset($_POST['pass']))
    {
            /*connexion a la BDD*/	
			try
            {
				$bdd = new PDO('mysql:host='.$adresse_bdd.';dbname='.$bdd, $utilisateur, $mot_passe);
            }
            catch (Exception $e)
            {
	        die('Erreur : ' . $e->getMessage());
            }
 
            /*cryptage mot de passe*/
            $passhache = sha1($_POST['pass']);
 
            /* on verifie qu'un membre a bien ce pseudo et ce mot de passe*/
            $req = $bdd->prepare('SELECT * FROM user WHERE pseudo = \''.$_POST['pseudo'].'\' AND password= \''.$_POST['pass'].'\' ');
			$req->execute(array('pseudo'=> $_POST['pseudo'], 'password'=> $_POST['pass']));
			$resultat=$req->fetch();
 
            /*s'il n'y a pas de resultat, on renvoie a la page de connexion*/
            if(!$resultat)
			{
				header('Location:index.php?page=erreur');
			}
			else
			{
 
               /* on cree les variables de session du membre qui lui serviront pendant sa session*/
				$_SESSION['id']= $resultat['id'];
				$_SESSION['pseudo']= $pseudo;
				$_SESSION['mail']= $resultat['email'];
 
                /*on renvoie sur la page d'accueil*/
                header('Location:index.php?page=accueil_connected');              
            }
    }
    else
    {
        echo "Il faut remplir tous les champs";
    }
}
else
{
     echo "Vous n'avez pas le droit d'acceder a cette page";
}
?>
