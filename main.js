const Canvas = document.getElementById("myCanvas");
Canvas.width = 300;

const ctx = Canvas.getContext('2d');

const road = new Road(Canvas.width/2, Canvas.width*0.9); 
const car = new Car(road.getLaneCenter(2),Canvas.width/2,30,50,"KEYS"); // to difine car properties and get control on it 
const traffic=[
    new Car(road.getLaneCenter(1),-100,30,50,"DUMMY",3)
];

animate();

function animate(){
    for(let i=0;i<traffic.length;i++){
        traffic[i].update(road.borders, []);
    }
    car.update(road.borders, traffic);
    
    Canvas.height=window.innerHeight; // every update car place will to updat the innerheight to get good simulate 

    ctx.save(); 
    ctx.translate(0,-car.y+Canvas.height*0.8);
    
    road.draw(ctx);

    for(let i=0;i<traffic.length;i++){
        traffic[i].draw(ctx, "red");
    }
    car.draw(ctx);

    ctx.restore();
    requestAnimationFrame(animate); // tells browser there is animate happen. repeat and repeat
}
