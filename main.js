const Canvas = document.getElementById("myCanvas");
Canvas.width = 300;

const ctx = Canvas.getContext('2d');

const road = new Road(Canvas.width/2, Canvas.width*0.9); 
const car = new Car(road.getLaneCenter(2),Canvas.width/2,30,50); // to difine car properties and get control on it 


animate();

function animate(){
    car.update();
    
    Canvas.height=window.innerHeight; // every update car place will to updat the innerheight to get good simulate 

    ctx.save(); 
    ctx.translate(0,-car.y+Canvas.height*0.8);
    road.draw(ctx);
    car.draw(ctx);

    ctx.restore();
    requestAnimationFrame(animate); // tells browser there is animate happen. repeat and repeat
}
