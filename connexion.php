<?php 
if (empty($_SESSION['id'])) //les membres connectes ne peuvent pas s'inscrire
{
	if(isset($_GET['page']))
	{
		if($_GET['page']=='erreur')
		{
			echo 'erreur de connexion veuillez recommencer :)';
		}
	}
?>
<form method="post" action="login.php" enctype="multipart/form-data">
    <fieldset>
	<legend>Connexion</legend>
	<label>Pseudo</label>
	<input type="text" size="16" name="pseudo"/> <br />
	<label>Mot de passe</label>
	<input type="password" size="16" name="pass"/><br />
	<input type="submit" value="connexion"/><br /><br />
    </fieldset>
</form>
<?php
}
else
{
    echo "Vous n'avez pas le droit d'acceder a cette page";
}
?>