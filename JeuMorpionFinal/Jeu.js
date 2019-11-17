
function remplirMatrice(a,Image) {
    document.getElementById("Tjoue").value = 0
    /*    Je vais créer  une matrice Grille[Y][X], avec Y représentant les indices de lignes et X de colonnes
                Y1|X1,X2,X3|
                Y2|X1,X2,X3|
                Y3|X1,X2,X3|                            */
    
        var Grille= new Array(Number((a*a)-1)) ;
        for ( var i =0; i<a;i++){
            Grille[i]= [];  
        }
        for(var p=0;p<a;p++){
            for(var q=0;q<a;q++){
                Grille[p][q] = null; 
                Image[(p*a+q)].src="Images/carré-blanc-300x300.png";
                Image[(p*a+q)].title=Grille[p][q];
            }
        }
        return Grille;
}

function verifierCaseValide(b,grille,a,Image){     // fonction de base qui s'effectuera a chaque fois qu'on clique sur une image. 

    let Y= Number(Math.floor(Number(b)/Number(a))); // ici je prends le numéro de ligne "Y" en récupérant le quotient de la division euclidienne de b par a
    let X= Number(Number(b)%(Number(a)));           // ici je prends le numéro de colonne "X" en récupérant le reste de la division euclidienne de b par a
    if (grille[Y][X] !== null){
        alert("Cette cellule est déjà prise recommence!! ");  }
    else{
        click_vide(b,Y,X,grille,Image); //on va donc remplir cette case
    }
}

function click_vide(b,y,x,Grille,Image){
    let a = document.getElementById("a").value;
    var Tjoue = document.getElementById("Tjoue").value;  //Tjoue détermine quel jour doit jouer, si il est égal à 0 c'est le joueur qui joue, si il est égal à 1 c'est à l'ordinateur de jouer
    if(Tjoue==0){
        Grille[y][x]= "croix";
        Image[b].src="Images/Croix_morpion.jpg";
        Image[b].title =Grille[y][x];
        // on lance la verification de l'état du jeu pour savoir si un joueur a gagné ou si l'ordinateur doit lancer sa stratégie de défense
        verification(y,x,Tjoue,Grille,b);
    }   
   else{
        Grille[y][x]= "rond";
       let B = Number(Number(a*y)+Number(x));
       Image[B].src="Images/Rond_morpion.png";
       Image[B].title =Grille[y][x];
        verification(y,x,Tjoue,Grille,b);

    }
}
function verification(y,x,Tjoue,Grille,b){
    let a = document.getElementById("a").value;
    let croix;
    let rond;
    let end = false; // end nous servira d'indication pour savoir si l'un des joueurs a gagné ou pas
    let ligne =null; //ligne nous permettra de savoir si l'ordinateur doit appliquer sa stratégie gagnante et laquelle il doit appliquer
    if (a ==3){
        //Première catégorie de points (correspondants aux points roses sur le brouillon)
        if((x==1 && y==0)||(x==0 && y==1)||(x==2 && y==1)||(x==1 && y==2)){
            croix=0;
            rond=0;
            for(let i=0;i<a;i++){ //On compte les croix et cercles sur la ligne horizontale correspondant au point en question
                if (Grille[y][i]=="croix"){
                    croix++;
                }
                if (Grille[y][i]=="rond"){
                    rond++;
                }

                if (croix == a){
                    end =true;
                    // Le joueur a gagné 
                   
                }
                if(rond == a){
                    end =true;
                    //L'ordinateur a gagné 
                    
                }
                if(croix==a-1 && rond ==0){
                    ligne ="h"; //L'ordinateur lancera sa stratégie défensive concernant la ligne verticale
                }

            }
            if(end !== true){
            	croix=0;
            	rond=0;
                for(let k=0;k<a;k++){ //On compte les croix et cercles sur la ligne verticale correspondant au point en question
                    if (Grille[k][x]=="croix"){
                        croix++;
                    }
                    if (Grille[k][x]=="rond"){
                        rond++;
                    }

                    if (croix == a){
                        end =true;
                        // Le joueur a gagné 
                       
                    }
                    if(rond == a){
                        end =true;
                        //L'ordinateur a gagné 
                        
                    }
                    if(croix==a-1 && rond ==0){
                        ligne ="v"; //L'ordinateur lancera sa stratégie défensive concernant la ligne verticale
                    }
                }
            }
        }
        //Autre catégorie de points (correspondants aux points gris sur le brouillon)
        if((x==0 && y==0)||(x==2 && y==2)){
            croix=0;
            rond=0;
            for(let i=0;i<a;i++){ //On compte les croix et cercles sur la ligne horizontale correspondant au point en question
                if (Grille[y][i]=="croix"){
                    croix++;
                }
                if (Grille[y][i]=="rond"){
                    rond++;
                }
                if (croix == a){
                    end =true;
                    // Le joueur a gagné   
                }
                if(rond == a){
                    end =true;
                    //L'ordinateur a gagné  
                }
                if(croix==a-1 && rond ==0){
                    ligne ="h"; //L'ordinateur lancera sa stratégie défensive concernant la ligne horizontale
                }
            }

            if(end !== true){
                croix=0;
                rond=0;//On compte les croix et cercles sur la ligne verticale correspondant au point en question
                for(let k=0;k<a;k++){
                    if (Grille[k][x]=="croix"){
                        croix++;
                    }
                    if (Grille[k][x]=="rond"){
                        rond++;
                    }
                    if (croix == a){
                        end =true;
                        // Le joueur a gagné 
                        
                    }
                    if(rond == a){
                        end =true;
                        //L'ordinateur a gagné 
                            
                    }
                    if(croix==a-1 && rond ==0){
                        ligne ="v";  //L'ordinateur lancera sa stratégie défensive concernant la ligne verticale
                    }
                }
            }
            if(end !== true){
                croix=0;
                rond=0;
            for(let z=0;z<a;z++){  //On compte les croix et cercles sur la diagonale descendante correspondant au point en question
                if (Grille[z][z]=="croix"){
                    croix++;
                }
                if (Grille[z][z]=="rond"){
                    rond++;
                }
                if (croix == a){
                    end =true;
                    // Le joueur  gagné 
                   
                       
                }
                if(rond == a){
                    end =true;
                    //L'ordinateur a gagné 
                    
                        
                }
                if(croix==a-1 && rond ==0){
                    ligne ="dd";   //L'ordinateur lancera sa stratégie défensive concernant la diagonale descendante
                }
            }
        }
    }
        //Autre catégorie de points (correspondants aux points bleus sur le brouillon)
        if((x==2 && y==0)||(x==0 && y==2)){
            croix=0;
            rond=0;
            for(let i=0;i<a;i++){ //On compte les croix et cercles sur la ligne horizontale correspondant au point en question
                if (Grille[y][i]=="croix"){
                    croix++;
                }
                if (Grille[y][i]=="rond"){
                    rond++;
                }
                if (croix == a){
                    end =true;
                    //Le joueur a gagné                
                }
                if(rond == a){
                    end =true;
                    //L'ordinateur a gagné
                }
                if(croix==a-1 && rond ==0){
                    ligne ="h";  //L'ordinateur lancera sa stratégie défensive concernant la ligne horizontale
                }
            }
            
            if(end !== true){
                croix=0;
                rond=0;
                for(let k=0;k<a;k++){ //On compte les croix et cercles sur la ligne verticale correspondant au point en question
                    if (Grille[k][x]=="croix"){
                        croix++;
                    }
                    if (Grille[k][x]=="rond"){
                        rond++;
                    }
                    if (croix == a){
                        end =true;
                        //Le joueur a gagné
                    }
                    if(rond == a){
                        end =true;   
                        //L'ordinateur a gagné                     
                    }
                    if(croix==a-1 && rond ==0){
                        ligne ="v"; //L'ordinateur lancera sa stratégie défensive concernant la ligne verticale
                    }
                }
            }
            if(end !== true){
                croix=0;
                rond=0;
                for(let z=a;z>0;z--){  //On compte les croix et cercles sur la diagonale ascendante correspondant au point en question
                    if (Grille[z-1][a-z]=="croix"){
                        croix++;
                    }
                    if (Grille[z-1][a-z]=="rond"){
                        rond++;
                    }
                    if (croix == a){
                        end =true;
                        // Le joueur a gagné        
                    }
                    if(rond == a){
                        end =true;
                        //L'ordinateur a gagné       
                    }
                    if(croix==a-1 && rond ==0){
                        ligne ="da";    //L'ordinateur lancera sa stratégie défensive concernant la diagonale ascendante
                    }
                }
        }
    }
        //Autre catégorie de points (correspondants aux points bleus sur le brouillon
        if(x==1 && y==1){
            croix=0;
            rond=0;
            for(let i=0;i<a;i++){ //On compte les croix et cercles sur la ligne horizontale correspondant au point en question
                if (Grille[y][i]=="croix"){
                    croix++;
                }
                if (Grille[y][i]=="rond"){
                    rond++;
                }
                if (croix == a){
                    end =true;
                    // Le joueur a gagné      
                }
                if(rond == a){
                    end =true;
                    //L'ordinateur a gagné      
                }
                if(croix==a-1 && rond ==0){
                    ligne ="h";    //L'ordinateur lancera sa stratégie défensive concernant la ligne horizontale
                }
            }

            if(end !== true){
                croix=0;
                rond=0;
                for(let k=0;k<a;k++){ ///On compte les croix et cercles sur la ligne verticale correspondant au point en question
                    if (Grille[k][x]=="croix"){
                        croix++;
                    }
                    if (Grille[k][x]=="rond"){
                        rond++;
                    }
                    if (croix == a){
                        end =true;
                        // Le joueur a gagné 
                        
                        
                    }
                    if(rond == a){
                        end =true;
                        //L'ordinateur a gagné 
                            
                    }
                    if(croix==a-1 && rond ==0){
                        ligne ="v";  //L'ordinateur lancera sa stratégie défensive concernant la ligne horizontale
                    }
                }
            }
            if(end !== true){
                croix=0;
                rond=0;
                for(let z=2;z>=0;z--){//On compte les croix et cercles sur la diagonale ascendante correspondant au point en question
                    if (Grille[z][a-z-1]=="croix"){
                        croix++;
                    }
                    if (Grille[z][a-z-1]=="rond"){
                        rond++;
                    }
                    if (croix == a){
                        end =true;
                        // Le joueur a gagné 
                            
                    }
                    if(rond == a){
                        end =true;
                        //L'ordinateur a gagné 
                                
                    }
                    if(croix==a-1 && rond ==0){
                        ligne ="da";    //L'ordinateur lancera sa stratégie défensive concernant la diagonale ascendante

                    }
                }
            }
            if(end !== true){
                croix=0;
                rond=0;//On compte les croix et cercles sur la diagonale descendante correspondant au point en question
                for(let z=0;z<a;z++){
                    if (Grille[z][z]=="croix"){
                        croix++;
                    }
                    if (Grille[z][z]=="rond"){
                        rond++;
                    }
                    if (croix == a){
                        end =true;
                        // Le joueur a gagné    
                    }
                    if(rond == a){
                        end =true;
                        //L'ordinateur a gagné      
                    }
                    if(croix==a-1 && rond ==0){
                        ligne ="dd";     //L'ordinateur lancera sa stratégie défensive concernant la diagonale descendante
                    }
                }    
            }
        }
    }
    if ( a==4){
        if (x==1 && y==0 || x==2 && y==0 ||x==0 && y==1 || x==3 &&y==1 || x==0 && y==2 || x==3 && y==2 || x==1 &&y==3 || x==2 && y==3 ) {
            croix=0;
            rond=0;
            for(let i=0; i<a;i++){ 
                if (Grille[y][i]=="croix"){
                    croix++;}
                if (Grille[y][i]=="rond"){
                    rond++;
                }
                if (croix == a){
                    end =true;
                    
                }
                if(rond == a){
                    end =true;
                        
                }
                if(croix==a-1 && rond ==0){
                    ligne ="h";
                }
            }
            if(end !== true){
                croix=0;
                rond=0;
            for(let k =0; k<a;k++){ 
                if (Grille[k][x]=="croix"){
                    croix++;
                }
                if(Grille[k][x]=="rond"){
                    rond++;
                }
                if (croix == a){
                    end =true;
                    
                       
                }
                if(rond == a){
                    end =true;
                        
                }
                if(croix==a-1 && rond ==0){
                    ligne ="v";
                }
            }
            }
        }
        if( y==0 && x==0 || y==1 &&x==1 || y==2 && x==2 || y==3 && x==3){
            croix=0;
            rond=0;
            for(let i=0; i<a;i++){ 
                if (Grille[y][i]=="croix"){
                    croix++;}
                if (Grille[y][i]=="rond"){
                    rond++;
                }
                if (croix == a){
                    end =true;
                   
                       
                }
                if(rond == a){
                    end =true;
                    
                }
                if(croix==a-1 && rond ==0){
                    ligne ="h";
                }
            }
            if(end !== true){
                croix=0;
                rond=0;
            for(let k =0; k<a;k++){ 
                if (Grille[k][x]=="croix"){
                    croix++;
                }
                if(Grille[k][x]=="rond"){
                    rond++;
                }
                if (croix == a){
                    end =true;
                    
                       
                }
                if(rond == a){
                    end =true;
                    
                }
                if(croix==a-1 && rond ==0){
                    ligne ="v";
                }
            }
            }
            if(end !== true){  
                croix=0;
                rond=0;
            for(let z=0;z<a;z++){ 
                if(Grille[z][z]=="croix"){
                    croix++;
                }
                if(Grille[z][z]=="rond"){
                    rond++;
                }
                if (croix == a){
                    end =true;
       
                }
                if(rond == a){
                    end =true;
     
                }
                if(croix==a-1 && rond ==0){
                    ligne ="dd";
                }
            }
        }
    }   
        if(x==0 && y==3 || x==1 && y==2 || x==2 && y==1 || x==3 && y==0){
            croix=0;
            rond=0;
            for(let i=0; i<a;i++){ 
                if (Grille[y][i]=="croix"){
                    croix++;}
                if (Grille[y][i]=="rond"){
                    rond++;
                }
                if (croix == a){
                    end =true;
                       
                }
                if(rond == a){
                    end =true;
    
                        
                }
                if(croix==a-1 && rond ==0){
                    ligne ="h";
                }
            }
            if(end !== true){
                croix=0;
                rond=0;
                for(let k =0; k<a;k++){ 
                    if (Grille[k][x]=="croix"){
                        croix++;
                    }
                    if(Grille[k][x]=="rond"){
                        rond++;
                    }
                    if (croix == a){
                        end =true;
                        
                    }
                    if(rond == a){
                        end =true;
                            
                    }
                    if(croix==a-1 && rond ==0){
                        ligne ="v";
                    }
                }
            }
            if(end !== true){
                croix=0;
                rond=0;
                for( let z=a; z>0;z--){ 
                    if (Grille[z-1][a-z]== "croix"){
                        croix++;
                    }
                    if (Grille[z-1][a-z]== "rond"){
                        rond++;
                    }
                    if (croix == a){
                        end =true;  
                    }
                    if(rond == a){
                        end =true;
                    }
                    if(croix==a-1 && rond ==0){
                        ligne ="da";
                    }
                }
            }
        }
    }
    if (a ==5){
        croix=0;
        rond=0;
        if((x==0 && y==0)||(x==1 && y==1)||(x==3 && y==3)||(x==4 && y==4)){
            croix=0;
            rond=0;
            for(let i=0;i<a;i++){ 
                if (Grille[y][i]=="croix"){
                    croix++;
                }
                if (Grille[y][i]=="rond"){
                    rond++;
                }
                if (croix == a){
                    end =true;
                    
                       
                }
                if(rond == a){
                    end =true;
        
                        
                }
                if(croix==a-1 && rond ==0){
                    ligne ="h";
                }
            }
            if(end !== true){
                croix=0;
                rond=0;
            for(let k=0;k<a;k++){ 
                if (Grille[k][x]=="croix"){
                    croix++;
                }
                if (Grille[k][x]=="rond"){
                    rond++;
                }
                if (croix == a){
                    end =true;
                    
                       
                }
                if(rond == a){
                    end =true;
                    
                        
                }
                if(croix==a-1 && rond ==0){
                    ligne ="v";
                }
            }
            }
            if(end !== true){
                croix=0;
                rond=0;
            for(let z=0;z<a;z++){
                if (Grille[z][z]=="croix"){
                    croix++;
                }
                if (Grille[z][z]=="rond"){
                    rond++;
                }
                if (croix == a){
                    end =true;
                       
                }
                if(rond == a){
                    end =true;
                    
                }
                if(croix==a-1 && rond ==0){
                    ligne ="dd";
                }
            }
            }
        }
        if((x==0 && y==4)||(x==1 && y==3)||(x==3 && y==1)||(x==4 && y==0)){
            croix=0;
            rond=0;
            for(let i=0;i<a;i++){ 
                if (Grille[y][i]=="croix"){
                    croix++;
                }
                if (Grille[y][i]=="rond"){
                    rond++;
                }
                if (croix == a){
                    end =true;
                   
                       
                }
                if(rond == a){
                    end =true;
                
                        
                }
                if(croix==a-1 && rond ==0){
                    ligne ="h";
                }
            }
            if(end !== true){
                croix=0;
                rond=0;
            for(let k=0;k<a;k++){ 
                if (Grille[k][x]=="croix"){
                    croix++;
                }
                if (Grille[k][x]=="rond"){
                    rond++;
                }
                if (croix == a){
                    end =true;
                       
                }
                if(rond == a){
                    end =true;
                
                }
                if(croix==a-1 && rond ==0){
                    ligne ="v";
                }
            }
            }
            if(end !== true){
                croix=0;
                rond=0;
                for(let z=a;z>0;z--){
                    if (Grille[z-1][a-z]=="croix"){
                        croix++;
                    }
                    if (Grille[z-1][a-z]=="rond"){
                        rond++;
                    }
                    if (croix == a){
                        end =true;
                        
                    }
                    if(rond == a){
                        end =true;
                        
                    }
                    if(croix==a-1 && rond ==0){
                        ligne ="da";
                    }
                }
            }
        }
     
        if(x==2 && y==2){
            croix=0;
            rond=0;
            for(let i=0;i<a;i++){ 
                if (Grille[y][i]=="croix"){
                    croix++;
                }
                if (Grille[y][i]=="rond"){
                    rond++;
                }
                if (croix == a){
                    end =true;
                    
                }
                if(rond == a){
                    end =true;
                   
                }
                if(croix==a-1 && rond ==0){
                    ligne ="h";
                }
            }
            if(end !== true){
                croix=0;
                rond=0;
            for(let k=0;k<a;k++){ 
                if (Grille[k][x]=="croix"){
                    croix++;
                }
                if (Grille[k][x]=="rond"){
                    rond++;
                }
                if (croix == a){
                    end =true;
                    
                       
                }
                if(rond == a){
                    end =true;
                        
                }
                if(croix==a-1 && rond ==0){
                    ligne ="v";
                }
            }
            }
            if(end !== true){
                croix=0;
                rond=0;
            for(let z=2;z>=0;z--){
                if (Grille[z][a-z-1]=="croix"){
                    croix++;
                }
                if (Grille[z][a-z-1]=="rond"){
                    rond++;
                }
                if (croix == a){
                    end =true;
                       
                }
                if(rond == a){
                    end =true;
                    
                        
                }
                if(croix==a-1 && rond ==0){
                    ligne ="da";
                }
            }
            }
            if(end !== true){
                croix=0;
                rond=0;
            for(let z=0;z<a;z++){
                if (Grille[z][z]=="croix"){
                    croix++;
                }
                if (Grille[z][z]=="rond"){
                    rond++;
                }
                if (croix == a){
                    end =true;
                       
                }
                if(rond == a){
                    end =true;
                }
                if(croix==a-1 && rond ==0){
                    ligne ="dd";
                }
            }
            }
        }
        if( y==0 && x==1 || y==0 && x==2|| y==0 && x==3  || y==1 && x==0 || y==1 && x==2 || y==1 && x==4 || y==2 && x==0 || y==2 && x==1 || y==2 && x==3 || y==2 && x==4 || y==3 && x==0 ||y==3 && x==2 ||y==3 && x==4 || y==4 && x==1 || y==4 && x==2 || y==4 && x==3){
            for(let i=0; i<a;i++){ 
                if (Grille[y][i]=="croix"){
                    croix++;}
                if (Grille[y][i]=="rond"){
                    rond++;
                }
                if (croix == a){
                    end =true;
                    
                       
                }
                if(rond == a){
                    end =true;
                    
                        
                }
                if(croix==a-1 && rond ==0){
                    ligne ="h";
                }
            }
            if(end !== true){
                croix=0;
                rond=0;
            for(let k =0; k<a;k++){ 
                if (Grille[k][x]=="croix"){
                    croix++;
                }
                if(Grille[k][x]=="rond"){
                    rond++;
                }
                if (croix == a){
                    end =true;
                    
                       
                }
                if(rond == a){
                    end =true;
                        
                }
                if(croix==a-1 && rond ==0){
                    ligne ="v";
                }
            }
            }
        }
    } 
   
    if (end==true && croix == a){
        // le joueur a gagné 
        document.getElementById("main").style.pointerEvents = "none";
        document.getElementById("outputText").innerHTML = "Vous avez gagné !";
        var elmt = document.getElementById("window");
        elmt.style.visibility ="visible";
    }
    if(end==true && rond == a){ 
        //l'ordinateur a gagné 
        document.getElementById("main").style.pointerEvents = "none";
        document.getElementById("outputText").innerHTML = "Vous avez perdu !";
        var elmt = document.getElementById("window");
        elmt.style.visibility ="visible";
    }
    testGrilleremplie(Grille,a);
    if(Tjoue== 0 && end !== true){ 
    document.getElementById("Tjoue").value = 1;
    // l'ordinateur doit jouer
    ordiJoue(y,x,ligne,b,a,Grille);
    }
    else{
        document.getElementById("Tjoue").value = 0;
        //l'ordinateur a fini son tour, c'est au joueur de jouer
    }
}
function testGrilleremplie(Grille,a){
    let compte =0;
    for(let i=0;i<a;i++){
        for(let j=0;j<a;j++){
            if(Grille[j][i] !== null){
                compte = compte+1; 
            }
        }    
    }
    if(compte == a*a){
        document.getElementById("main").style.pointerEvents = "none";
        document.getElementById("outputText").innerHTML = "La grille est remplie !";
        var elmt = document.getElementById("window");
        elmt.style.visibility ="visible";
    }
}
function ordiJoue(Y,X,LINE,b,a,Grille){
    let Tjoue; 
    let Image = document.querySelectorAll(".miniature");
    
    if(LINE !== null){
        switch(LINE){    // Pour mettre en place la stratégie défensive de l'ordinateur, selon la valeur de la variable LINE, on parcourt la ligne correspondante (horizontale, verticale, diagonale descendante ou ascendante) et on remplit la case manquante pour empêcher le joueur de gagner
            case "h" : 
                for(let i=0;i<a;i++){ //horizontale
                	Tjoue = document.getElementById("Tjoue").value;
                    if(Tjoue ==1){
                    	if (Grille[Y][i]==null){
                            click_vide(b,Y,i,Grille,Image);
                            document.getElementById("Tjoue").value = 0;
                            Tjoue = document.getElementById("Tjoue").value;
                            
                    	}
                	}
                }
            break;
            case "v":
                for(let k=0;k<a;k++){ //verticale
                    Tjoue = document.getElementById("Tjoue").value;
                    if(Tjoue ==1){
                    	if (Grille[k][X]==null){
                        	click_vide(b,k,X,Grille,Image);
                        	document.getElementById("Tjoue").value = 0;
                        	Tjoue = document.getElementById("Tjoue").value;
                    	}
                    }
                }
            break;
            case "dd":
                for(let z=0;z<a;z++){//diagonale descendante
                	Tjoue = document.getElementById("Tjoue").value;
                    if(Tjoue ==1){
                   		if (Grille[z][z]==null){
                        	click_vide(b,z,z,Grille,Image);
                        	document.getElementById("Tjoue").value = 0;
                        	Tjoue = document.getElementById("Tjoue").value;
                	    }
               		}
                }
       		break;
            case "da":  
                for(let z=a;z>0;z--){//diagonale ascendante
                    Tjoue = document.getElementById("Tjoue").value;
                    if(Tjoue ==1){
                    	if (Grille[z-1][a-z]==null){
                       		click_vide(b,z-1,a-z,Grille,Image);
                        	document.getElementById("Tjoue").value = 0;
                        	Tjoue = document.getElementById("Tjoue").value;
                    	}
                	}
            	}
            break;
    }
}
    else {
        for(let i=0;i<a ;i++ ){    //si la variable LINE n'est pas définie, l'ordinateur n'a pas besoin de défendre une ligne en particulier
            for(let j =0;j<a ;j++){
                Tjoue = document.getElementById("Tjoue").value;
                if(Tjoue ==1){
                    if(Grille[i][j]==null){   
                        click_vide(b,i,j,Grille,Image);
                        document.getElementById("Tjoue").value = 0;
                    }
                }
            }
        }
    }
} 
window.onload = function() {

    // _________________________________ definition de variable ______________________________________________
        
    let Image = document.querySelectorAll(".miniature"); // on recupère les images afin de pouvoir cliquer dessus
    let a = document.getElementById("a").value;          
    let A = Number(a*a);
    //________________________________________________________________________________________________________

        let Grille =remplirMatrice(a,Image);
        for(let i=0;i< A;i++){
            Image[i].addEventListener("click",function() {verifierCaseValide(i,Grille,a,Image);})}
}