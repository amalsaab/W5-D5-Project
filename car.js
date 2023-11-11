class Car{
    // this class to all car properties that driving game need
    // the position, Controls, width, height, and its canvas code on its board
    constructor(x,y,width,height){
        this.x = x ;
        this.y = y; 
        this.width = width;
        this.height = height;

        this.speed=0;
        this.acceleration=0.2;
        this.maxSpeed=3;
        this.friction=0.05;
        this.angle=0;

        this.controls = new Controls();
    }
    update(){
        this.move()
    }
    move(){
        if(this.controls.forward){
            this.speed+=this.acceleration;
        }
        if(this.controls.reverse){
            this.speed-=this.acceleration;
        }

        if(this.speed>this.maxSpeed){ //max speed equal 3 when forward
            this.speed=this.maxSpeed;
        }
        if(this.speed<-this.maxSpeed/2){ //max speed equal 1.5 when reverse
            this.speed=-this.maxSpeed/2;
        }

        if(this.speed>0){ //to reduce the car smoothly if the key up when the car is forward  
            this.speed-=this.friction;
        }
        if(this.speed<0){//to reduce the car smoothly if the key up when the car is reverse  
            this.speed+=this.friction;
        }
        if(Math.abs(this.speed)<this.friction){ //stoping the car 
            this.speed=0;
        }

        if(this.speed!=0){ // became the car move right and lift and foeward and backward synq
            const flip=this.speed>0?1:-1;
            if(this.controls.left){
                this.angle+=0.03*flip;
            }
            if(this.controls.right){
                this.angle-=0.03*flip;
            }
        }

        this.x-=Math.sin(this.angle)*this.speed;
        this.y-=Math.cos(this.angle)*this.speed;
    }
    draw(ctx){
        ctx.save(); // save currnt state 
        ctx.translate(this.x,this.y); //position of car from pint (0,0) -> (x,y) in cancas window
        ctx.rotate(-this.angle); //rotate the rect. based on movement car from keyboard

        ctx.beginPath();
        ctx.rect(
            -this.width/2, //to put the car in the middle 
            -this.height/2,
            this.width,
            this.height
        );
        ctx.fill();

    }
}