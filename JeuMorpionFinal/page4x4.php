<!DOCTYPE html>
<html>
    <head>
        <title>Morpion</title>

        <meta charset="utf-8" />
        <link type="text/css" rel="stylesheet" href="morpion.css" />
        <script type="text/javascript" src="Jeu.js"></script>
    </head>

    <body>
        <div class="box"><h3>Jeu 4x4 <a href="index.php"> (Retour)</a></h3></div>
        <input type=hidden id=a value=4 />
        <input type=hidden id=Tjoue value=0 />
        <div id="window"><h1> <span id="outputText"></h1><p>Belle partie ! Nous vous proposons de continuer ou de vous en tenir là :</p><a class="" href="">Rejouer</a><a href="index.php">Quitter</a></div>
        <div id="main">
            <table>
                <tr>
                <div class="line">
                    <td>  <img class="miniature" src="Images\croix_morpion.jpg" title="croix" alt="case occupée" width=112 height=112 />  </td>
                    <td> <img class="miniature" src="Images\croix_morpion.jpg" title="croix" alt="case occupée" width=112 height=112 /></td>
                    <td> <img class="miniature" src="Images\croix_morpion.jpg" title="croix" alt="case occupée" width=112 height=112 /></td>
                    <td> <img class="miniature" src="Images\croix_morpion.jpg" title="croix" alt="case occupée" width=112 height=112 /></td>
                </div>
                </tr>
                <tr>
                <div class="line">
                    <td>  <img class="miniature" src="Images\croix_morpion.jpg" title="croix" alt="case occupée" width=112 height=112 />  </td>
                    <td> <img class="miniature" src="Images\croix_morpion.jpg" title="croix" alt="case occupée" width=112 height=112 /></td>
                    <td> <img class="miniature" src="Images\croix_morpion.jpg" title="croix" alt="case occupée" width=112 height=112 /></td>
                    <td> <img class="miniature" src="Images\croix_morpion.jpg" title="croix" alt="case occupée" width=112 height=112 /></td>
                </div>
                </tr>
                <tr>
                <div class="line">
                    <td> <img class="miniature" src="Images\croix_morpion.jpg" title="croix" alt="case occupée" width=112 height=112 /> </td>
                    <td> <img class="miniature" src="Images\Rond_morpion.png" title="rond" alt="case occupée" width=112 height=112 /> </td>
                    <td> <img class="miniature" src="Images\croix_morpion.jpg" title="croix" alt="case occupée" width=112 height=112 /> </td>
                    <td> <img class="miniature" src="Images\croix_morpion.jpg" title="croix" alt="case occupée" width=112 height=112 /></td>
                </div>
                </tr>
                <tr>
                <div class="line">
                    <td> <img class="miniature" src="Images\croix_morpion.jpg" title="croix" alt="case occupée" width=112 height=112 /> </td>
                    <td> <img class="miniature" src="Images\croix_morpion.jpg" title="croix" alt="case occupée" width=112 height=112 /> </td>
                    <td> <img class="miniature" src="Images\croix_morpion.jpg" title="croix" alt="case occupée" width=112 height=112 /> </td>
                    <td> <img class="miniature" src="Images\croix_morpion.jpg" title="croix" alt="case occupée" width=112 height=112 /></td>
                </div>
                </tr>
            </table>
        </p>
    </div>
</body>
</html>