const Canvas = document.getElementById("myCanvas");
const showTime = document.getElementById("myTimer");
Canvas.width = 300;

const ctx = Canvas.getContext('2d');

const road = new Road(Canvas.width/2, Canvas.width*0.9); 
const car = new Car(road.getLaneCenter(2),Canvas.width/2,30,50,"KEYS"); // to difine car properties and get control on it 
const traffic=[
    new Car(road.getLaneCenter(1),-350,30,50,"DUMMY",3),
    new Car(road.getLaneCenter(0),-300,30,50,"DUMMY",3),
    new Car(road.getLaneCenter(3),-320,30,50,"DUMMY",3.2),
    new Car(road.getLaneCenter(0),-500,30,50,"DUMMY",3),
    new Car(road.getLaneCenter(2),-500,30,50,"DUMMY",3),
    new Car(road.getLaneCenter(4),-550,30,50,"DUMMY",3),
    new Car(road.getLaneCenter(0),-700,30,50,"DUMMY",3.1),
    new Car(road.getLaneCenter(1),-700,30,50,"DUMMY",3),
    // new Car(road.getLaneCenter(1),-900,30,50,"DUMMY",3),
    new Car(road.getLaneCenter(2),-900,30,50,"DUMMY",3.1),
    new Car(road.getLaneCenter(4),-900,30,50,"DUMMY",3.05),
    // new Car(road.getLaneCenter(0),-1000,30,50,"DUMMY",3.1),
    // new Car(road.getLaneCenter(2),-1100,30,50,"DUMMY",3),
    new Car(road.getLaneCenter(4),-1150,30,50,"DUMMY",3),
    new Car(road.getLaneCenter(0),-1100,30,50,"DUMMY",3),
    new Car(road.getLaneCenter(3),-1120,30,50,"DUMMY",3.4),
    new Car(road.getLaneCenter(0),-1300,30,50,"DUMMY",3),
    new Car(road.getLaneCenter(2),-1300,30,50,"DUMMY",3,6),
    new Car(road.getLaneCenter(4),-1350,30,50,"DUMMY",3),
    new Car(road.getLaneCenter(0),-1500,30,50,"DUMMY",3.1),
    new Car(road.getLaneCenter(1),-1500,30,50,"DUMMY",3),
    new Car(road.getLaneCenter(2),-1550,30,50,"DUMMY",3),
    // new Car(road.getLaneCenter(1),-1700,30,50,"DUMMY",3.2),
    new Car(road.getLaneCenter(2),-1700,30,50,"DUMMY",3.3),
    new Car(road.getLaneCenter(4),-1700,30,50,"DUMMY",3.05),
    new Car(road.getLaneCenter(0),-1800,30,50,"DUMMY",3.6),
    new Car(road.getLaneCenter(3),-1900,30,50,"DUMMY",3),
    new Car(road.getLaneCenter(1),-1950,30,50,"DUMMY",3),
    new Car(road.getLaneCenter(4),-2000,30,50,"DUMMY",3),
    new Car(road.getLaneCenter(0),-2100,30,50,"DUMMY",3.2),
    new Car(road.getLaneCenter(4),-2150,30,50,"DUMMY",3.3),
    new Car(road.getLaneCenter(3),-2250,30,50,"DUMMY",3.05),
    new Car(road.getLaneCenter(1),-2300,30,50,"DUMMY",3.4),
    new Car(road.getLaneCenter(3),-2400,30,50,"DUMMY",3),
    new Car(road.getLaneCenter(3),3290,30,50,"DUMMY",10),
    new Car(road.getLaneCenter(1),6590,30,50,"DUMMY",10),
];
const inteval = 30;
let timer = inteval;
const myInterval = setInterval(myTimer, 1000);
function myTimer(){
    showTime.innerHTML = `${timer}S`;
    timer--;
}
function myStopFunction() {
    clearInterval(myInterval);
    if (document.body.style.backgroundColor !== "red") {
        document.body.style.backgroundColor = "green"
    }
    
}

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
    if (timer < 0) {
        myStopFunction();
    }
}
