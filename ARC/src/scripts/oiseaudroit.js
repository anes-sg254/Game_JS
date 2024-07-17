import GameElement from "./GameElement.js";
import oiseaudroitimag from './assets/images/oiseau-voleur-droite-gauche.png';
import Oiseaugauche from "./oiseaugauche.js";

export default class Oiseaudroit extends GameElement {

  constructor(x,y) {
    super(x, y, 4, 0, oiseaudroitimag);
    this.image = new Image();
    this.image.src = oiseaudroitimag;
    
  }

  draw(context) {
    context.drawImage(this.image, this.x, this.y);
  }

  getWidth(){
    return this.image.width;
  } 
  getHeight(){
    return this.image.height;
  } 
  update(canvas) {
    // Déplacer l'oiseau vers la gauche
    this.x -= this.deltaX;
  
    // Vérifier si l'oiseau sort du canvas
    if (this.x + this.image.width < 0) {
      // Définir une position de départ aléatoire pour l'oiseau
      this.x =  Math.floor(Math.random() * (canvas.width + this.image.width));
      this.y = Math.floor(Math.random() * (canvas.height - this.image.height));
  

    }
    
  }

  remove(){
    delete this.image.src;
    
  } 

}
