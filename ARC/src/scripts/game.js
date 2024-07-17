
import Arc from "./arc.js";
import arcimag from './assets/images/arc.png';
import Oiseaudroit from "./oiseaudroit.js";
import Oiseaugauche from "./oiseaugauche.js";
import oiseaudroitimag from './assets/images/oiseau-voleur-droite-gauche.png';
import oiseaugaucheimag from './assets/images/oiseau-voleur-gauche-droite.png';
import flecheimag from './assets/images/fleches.png';
import Carquois from "./carquois.js";
import flechesimag from './assets/images/fleche.png';
import Fleche from "./fleche.js";
import Cible from "./cible.js";
import cibleimag from './assets/images/cible.png';






export default class Game {
    #canvas;
    #context;
    #element;
    #cible; 
    #oiseaudroit;
    #oiseaugauche; 
    #ismoving;
    #fleches = [];
    #fleches2 = [];
    #nbfleches=5; 
     
    
    constructor(canvas) {
      this.#canvas = canvas;
      this.#context = canvas.getContext("2d");
      this.#element=new Arc(this.#canvas);
      let x= Math.floor(Math.random()*(canvas.width-30))-18;
      this.#cible= new Cible(x);
      this.#oiseaudroit=new Oiseaudroit(0,0, oiseaudroitimag);
      this.#oiseaugauche=new Oiseaugauche(0,0, oiseaugaucheimag);
      this.action=false;
      this.animationId=null;
      this.isanimate=true;
      this.points=0;
      this.cmp=1;
      this.lifes=3;
      
  
      
      this.#ismoving=false; 
      window.addEventListener("keydown", this.keydown.bind(this));
      window.addEventListener("keyup", this.keyup.bind(this));
      window.addEventListener("keypress", this.keypress.bind(this));
  
    }
  
    animate() {

      
        this.#context.clearRect(0, 0, this.#canvas.width, this.#canvas.height);
        
         
        this.#oiseaugauche.update(this.#canvas);
        this.#oiseaugauche.draw(this.#context);
        this.#oiseaudroit.update(this.#canvas);
        this.#oiseaudroit.draw(this.#context);

          
         

        document.getElementById("nbArrows").innerHTML=this.#nbfleches;
        
        
        if(this.cmp%250===0){
          this.createArrow();
          
        } 
        this.#fleches.forEach((fleche, index) => {

          
          fleche.update();
          fleche.draw(this.#context);
      
         if (fleche.x < 0 || fleche.x > this.#canvas.width || fleche.y < 0 || fleche.y > this.#canvas.height) {
              this.#fleches.splice(index, 1);
          } 
          if(this.lifes>0){
            if(fleche.collisionWith(this.#oiseaudroit)===true || fleche.collisionWith(this.#oiseaugauche)===true){
              this.#nbfleches=5;
      
            } 

          } 
          
 
      });

  
      
  
      this.#fleches2.forEach((fleche2, index) => {
        let points_to_add =  fleche2.update( this.#cible );
        this.points += points_to_add; 

        fleche2.draw(this.#context);
        
        document.getElementById("score").innerHTML = this.points;

        if (points_to_add == 1000) {
  
          let x = Math.floor(Math.random()*(this.#canvas.width-30))-18;
          this.#cible.setX(x);
        }
        if (fleche2.x < 0 || fleche2.x > this.#canvas.width || fleche2.y < 0 || fleche2.y > this.#canvas.height) {
            this.#fleches2.splice(index, 1);
        }

        if(fleche2.collisionWith(this.#oiseaudroit)===true){
          this.points-=100;
          
           
        } 
        

       
     
    });
    this.cmp++;

        if(this.#ismoving){
            this.#element.move(this.#canvas);
  
        }   
        this.#element.draw(this.#context);
        this.#cible.draw(this.#context);       
        this.animationId=requestAnimationFrame(this.animate.bind(this));
        
        console.log(this.lifes);
    } 
    
    stop() {
      this.removeLife();
      if (!this.action) {
        this.isanimate=false;
        this.animate();
        this.action = true; 
      } 
      else if(!this.isanimate && this.action){
        window.cancelAnimationFrame(this.animationId);
        this.action = false;
      }


      this.isanimate=false;
    }


  shoot() {

      let x1 = this.#element.getX();
      let y1=this.#element.getY();  
            
      let fleche2 = new Fleche(x1,y1, 0, 8, flechesimag);
      this.#fleches2.push(fleche2);

      let displayTime = Math.floor(Math.random() * 1500) + 1500;



      setTimeout(() => {
        this.#fleches2 = this.#fleches2.filter(f => f !== fleche2);
    }, displayTime);
    this.isanimate=true;
  }
  createArrow() {
    let x = Math.floor(Math.random() * (400-100)+100); 
    let y = Math.floor(Math.random() * (400-100)+100); 
    let fleche = new Carquois(x,y, 0, 0, flecheimag);
    this.#fleches.push(fleche);

    let displayTime = Math.floor(Math.random() * 1500) + 1500;



    setTimeout(() => {
      this.#fleches = this.#fleches.filter(f => f !== fleche);
  }, displayTime);

  this.isanimate=true;

  }


  removeLife(){
    if(this.#nbfleches===0 && this.lifes>=0 && this.lifes<=3){
      
      if(this.lifes===3){
        const life1=document.getElementById("life-1");
        life1.remove();
        

      } 
      if(this.lifes===2){
        const life2=document.getElementById("life-2");
        life2.remove();
        

      } 
      if(this.lifes===1){
        const life3=document.getElementById("life-3");
        life3.remove();
    
      }
      if(this.lifes===0 && this.points<0){
        alert('vous avez perdu');
        this.action=true;
        this.isanimate=false;
        
      }
      this.lifes-=1;  
      

       
    }
    
 

  } 



 


  
    keydown(event){
     if(event.key==="ArrowLeft"){
        this.#ismoving=true; 
        this.#element.deltaX=-10;
         
  
     }
     else if(event.key==="ArrowRight"){
        this.#ismoving=true; 
        this.#element.deltaX=10; 
  
     } 
     else if(event.key==="ArrowUp"){
      this.#ismoving=true;
      this.#element.deltaY=-10;
     } 
     else if(event.key==="ArrowDown"){
      this.#ismoving=true;
      this.#element.deltaY=10;
     }
     if (event.code === "Space") {
      this.isanimate = true;
    }


     
  
    } 
    keyup(event){
     if(event.key==="ArrowLeft"||event.key ===  "ArrowRight"){
        this.#ismoving=false; 
        this.#element.deltaX=0; 
  
     }
     if(event.key==="ArrowUp"||event.key ===  "ArrowDown"){
      this.#ismoving=false; 
      this.#element.deltaY=0; 

     }


     

   }

   keypress(event) {
      if (event.code === "Space") {
        event.preventDefault();
        if(this.#nbfleches>0 && this.isanimate){
          this.shoot();
          //this.createArrow();
        
          document.getElementById("nbArrows").innerHTML=this.#nbfleches--;
          this.isanimate=true;
        } 
      
      }
      
  }
   
   



}


