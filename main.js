const Canvas = document.getElementById("myCanvas");
Canvas.width = 200;

const ctx = Canvas.getContext('2d');

const car = new Car(100,100,30,50); // to difine car properties and get control on it 
// car.draw(ctx);

animate();

function animate(){
    car.update();
    
    Canvas.height=window.innerHeight; // every update car will to updat the innerheight to get good simulate 
    car.draw(ctx);
    requestAnimationFrame(animate);
}
