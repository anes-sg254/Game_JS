import GameElement from "./GameElement.js";
import arcimag from './assets/images/arc.png';


export default class Arc extends GameElement {

    constructor(canvas) {
        super(canvas.width/2,canvas.height-72,10,10,arcimag);
        this.image=new Image();
        this.image.src=arcimag;

        
    }

    draw(context) {
        context.drawImage(this.image,this.x,this.y);
    }

    getX(){
        return this.x;
    } 

    getY(){
        return this.y;
    }
    
    getwidth(){
        return this.image.width;
    } 



    







  
      

    
 
  
 




}