class Bob { 

    constructor(x,y,r){

        var options={

            density:1,
            restitution:0.4,
            isStatic:true,
            frictionAir:1

        }
        this.width=width;
        this.height=height;
        this.r=r;
        this.x=x;
        this.y=y;

        this.bob=Bodies.circle(this.x,this.y,this.r,options);
        World.add(world,this.bob);


    }

    display(){

        var pos=this.bob.position;

        
        push();
        translate(pos.x,pos.y)
        stroke("black");
        fill(rgb(255, 255, 204));
        ellipse(0,0,this.r,this.r)
        
        

        pop();



    }
}