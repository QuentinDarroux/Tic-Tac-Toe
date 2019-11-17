<!DOCTYPE html>
<html>
    <head>
        <title>Morpion</title>

        <meta charset="utf-8" />
        <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Open+Sans" />
        <link type="text/css" rel="stylesheet" href="morpion.css" />
        <script type="text/javascript" src="page_accueil.js"></script>
    </head>
    <header>
        <div class="title"><h1>Le Jeu du Morpion </h1> <h3 class="by">by Quentin & Jessica </h3></div>
    </header>
    <hr>
    <div id="presentation">
        <h2> Règles du jeu </h2>
        <p>Lors d'une partie de morpion, chaque joueur possède son propre symbole. Dans ce jeu, vous possédez les croix et l'ordinateur possède les cercles. Tour à tour, cliquez sur une des cases de la grille pour y placer votre symbole. Le but du jeu est de remplir une ligne complète avec des symboles identiques. Cette ligne peut être  horizontale, verticale ou diagonale. Dans ce cas, la partie se termine. Il est également possible que la grille soit complétée sans vainqueur. Il y a alors égalité. Vous avez le choix concernant la taille de la grille: <u>3x3</u> (trois symboles devront être alignés), <u>4x4</u> (quatre symboles devront être alignés) ou bien <u>5x5</u> (cinq symboles devront être alignés).
        </p>
    </div>
    <div id="choix">
        <h3>Taille de la grille</h3>
        <?php
        ?>
        <input id="bouton" type="button" value="Grille 3x3" onclick="redirect(3);" /> 
        <input id="bouton" type="button" value="Grille 4x4" onclick="redirect(4);" /> 
        <input id="bouton" type="button" value="Grille 5x5" onclick="redirect(5);" />
        <p class="image">
            <img src="Images/accueil.png" alt="Photo jeu" width=300 height=300/>
        </p>
    </div>
</body>
</html>