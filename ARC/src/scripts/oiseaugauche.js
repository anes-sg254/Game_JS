import GameElement from "./GameElement.js";
import oiseaugaucheimag from './assets/images/oiseau-voleur-gauche-droite.png';
import Oiseaudroit from "./oiseaudroit.js";


export default class Oiseaugauche extends GameElement {

    constructor(x,y) {
        super(x,y,4,0,oiseaugaucheimag);
        this.image=new Image();
        this.image.src=oiseaugaucheimag;

        
    }
    draw(context) {
        context.drawImage(this.image,this.x,this.y);
    }
    getWidth(){
      return this.image.width;
    } 
    getHeight(){
      return this.image.height;
    }

    update(canvas) {
      // Déplacer l'oiseau vers la droite
      this.x += this.deltaX;
    
      // Vérifier si l'oiseau sort du canvas
      if (this.x > canvas.width) {
        // Définir une position de départ aléatoire pour l'oiseau
        this.x =  Math.floor(Math.random() * (canvas.width + this.image.width));
        this.y = Math.floor(Math.random() * (400 - 100 + 1)) + 100;
    

      }
    }









  
      

    
 
  
 




}