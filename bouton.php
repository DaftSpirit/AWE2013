
  <?php 
session_start();
?>
    <h3>Index</h3>
<?php
        /* si le membre est connecte*/
        if(isset ($_SESSION['id']))
        {
			if( $_SESSION['id']!="" || $_SESSION['pseudo']!="")
			{

				echo '<a href="deconnexion.php">Deconnexion</a><br />';
            }
	}
	else
	{

	    echo '<a href="index.php?page=connexion">Connexion</a><br />
				<a href="index.php?page=inscription">Inscription</a><br />';
	}
?>