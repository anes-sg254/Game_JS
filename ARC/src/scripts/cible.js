import GameElement from "./GameElement.js";
import cibleimag from './assets/images/cible.png';


export default class Cible extends GameElement {

    constructor(x) {
        
        super(x,10,10,10,cibleimag);
        this.image=new Image();
        this.image.src=cibleimag;

        
    }
    getX(){
        return this.x;
    } 
    getY(){
        return this.y;
    }
    setX(x){
        this.x=x;  
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




    
    
    
    
    
    
    
 




  
      

    
 
  
 




}