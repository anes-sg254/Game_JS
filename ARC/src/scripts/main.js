
// importation de la classe Game.js
import Game from './game.js';
import Fleche from './fleche.js';
import flecheimag from './assets/images/fleches.png';
import Oiseaudroit from "./oiseaudroit.js";
import oiseaudroitimag from './assets/images/oiseau-voleur-droite-gauche.png';
import oiseaugaucheimag from './assets/images/oiseau-voleur-gauche-droite.png';
import Oiseaugauche from "./oiseaugauche.js";

import cibleimag from'./assets/images/cible.png';
import Cible from './cible.js';




// mise en place de l'action des clics sur les boutons + les gestionnaires du clavier pour contrôler le panier
const init = () => {
   const canvas = document.getElementById("playfield");
   const context = canvas.getContext("2d");
   

   
   

   const game=new Game(canvas);

   

   document.getElementById("stopAndStartGame").addEventListener("click", () => {
     
      game.stop();

   });
   

   
}


window.addEventListener("load",init);

//
console.log('le bundle a été généré');
