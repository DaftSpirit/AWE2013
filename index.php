<?php
	include('header.php');
	
	if(isset($_GET['page']))
	{
		$page=$_GET['page'];

		switch ($page)
		{
			case 'connexion':
			include('connexion.php');
			break;
			
			case 'inscription':
			include('inscription.php');
			break;
			
			case 'accueil':
			include('accueil.php');
			break;
			
			case 'accueil_connected':
			include('accueil_connected.php');
			break;
			
			case 'premiereco':
			include('premiereco.php');
			break;
			
			case 'erreur':
			include('connexion.php?page=erreur');
			break;
		}
	}
	else
	{
		if(isset($_SESSION['id']))
		{
			include('accueil_connected.php');
		}
		else
		{
			include('accueil.php');
		}
	}
           
	include('footer.php');
?>
