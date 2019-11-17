// voici la page php liée a la page d'accueil , on va s'en servir pour le redirect

function redirect(a) {
    window.location.replace("page" + a + "x" + a + ".php"); // la page du jeu moprion 3x3 par exemple. 
    // on ne fera la création de la grille aXa qu'une fois cette page lancée 
}