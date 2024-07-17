import GameElement from "./GameElement.js";
import flecheimag from './assets/images/fleche.png';





export default class Fleche extends GameElement {

    constructor(x,y,deltaX,deltaY) {
        super(x,y,deltaX,deltaY,flecheimag);
        this.image=new Image();
        this.image.src=flecheimag;

        
    }

    getX(){
        return this.x;
    } 
    getY(){
        return this.y;
    }
    getWidth(){
        return this.image.width;
    } 
    getHeight(){
        return this.image.height;
    }   

    update(obstacle) {
        this.x += this.deltaX;
        this.y -= this.deltaY;

        if (this.collisionWith(obstacle)) {

            return 1000;
            
          }
          else{
              return 0;
          } 
    }
    draw(context) {
        context.save();
        context.translate(this.x, this.y);
        context.drawImage(this.image, (this.image.width *3.5), this.image.height / 2);
        context.restore();
    }

    collisionWith(obstacle){

        let flech_x = this.x;
        let flech_y = this.y;

        let obs_x = obstacle.x;
        let obs_y = obstacle.y;

        if ( flech_x >= (obs_x - obstacle.getWidth()) && flech_x <= (obs_x + obstacle.getWidth()) &&  (obs_y + obstacle.getHeight() - (flech_y + this.getHeight())) >= 0){

            return true;
        }



      }




  
      

    
 
  
 




}