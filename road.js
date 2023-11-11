class Road{
    constructor(x, width, laneCount=5){
        this.x = x; 
        this.width = width;
        this.laneCount = laneCount;
    
        this.left=x-width/2 ;
        this.right=x+width/2;

        const infinity=1000000;
        this.top=-infinity; //  Road screen limit to top 
        this.bottom=infinity;  //  Road screen limit to bottom 


        /*  these for puting borders to leftside road and rightside road
            therefore we should to idintify four location on the board */
        const topLeft={x:this.left,y:this.top}; 
        const topRight={x:this.right,y:this.top};
        const bottomLeft={x:this.left,y:this.bottom};
        const bottomRight={x:this.right,y:this.bottom};

        this.borders=[
            [topLeft,bottomLeft],
            [topRight,bottomRight]
        ];
    }

    getLaneCenter(laneIndex){
        const laneWidth=this.width/this.laneCount;
        return this.left+laneWidth/2+
            Math.min(laneIndex,this.laneCount-1)*laneWidth;
    }

    draw(ctx){
        ctx.lineWidth = 5 ;
        ctx.strokeStyle = "yellow";
        
        for (let i = 0; i <= this.laneCount; i++) {
            const x = lerp(
                this.left,
                this.right,
                i/this.laneCount
            );
            if(i>0 && i<this.laneCount){
                ctx.setLineDash([20,20])
                ctx.strokeStyle = "white";
            }else{
                ctx.setLineDash([])
                ctx.strokeStyle = "yellow";
            }
            ctx.beginPath();
            ctx.moveTo(x, this.top);
            ctx.lineTo(x, this.bottom);
            ctx.stroke();
            
        }

    }

}
