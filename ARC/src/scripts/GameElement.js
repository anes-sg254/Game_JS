


export default class GameElement {


    constructor(x,y,deltaX,deltaY,arcimag) {
        this.x=x;
        this.y=y;
        this.deltaX=deltaX;
        this.deltaY=deltaY;
        this.image=new Image();
        this.image.src=arcimag;
        
    }
    draw(context) {
        context.drawImage(this.image,this.x,this.y);
    }

    move(canvas) {
      if (this.x + this.deltaX > canvas.width - this.image.width) {
        this.x = canvas.width - this.image.width;
      } else if (this.x + this.deltaX < 0) {
        this.x = 0;
      } else {
        this.x += this.deltaX;
      }

      if (this.y + this.deltaY > canvas.height - this.image.height) {
        this.y = canvas.height - this.image.height;
      } else if (this.y + this.deltaY < 0) {
        this.y = 0;
      } else {
        this.y += this.deltaY;
      }
    
    }




    


 
    
    
}



