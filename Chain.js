class Chain{
    constructor(body1,body2,offsetX,offsetY){  //bob is passed for body1 and roof is passed for body2 from sketch.js

        this.offsetX=offsetX;
        this.offsetY=offsetY
        var options = {
            bodyA: body1,        
            bodyB: body2,
           // stiffness: 0.04,
           // length: 10,
            pointB:{x:this.offsetX,y:this.offsetY}
    
        }
        
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }
    
    display(){

        var pointX=this.chain.bodyA.position;  //bob's position
        var pointY=this.chain.bodyB.position;  //roof's position
        
        
        strokeWeight(5);
        fill("black");
      //  var attactPointX= pointX.x+ this.offsetX;
      //  var attachPointY=pointX.y+ this.offsetY;

      //  line(attactPointX,attachPointY,pointY.x,pointY.y)
        var attactPointX= pointY.x+ this.offsetX; //add displacements to the roof position
        var attachPointY=pointY.y+ this.offsetY;

        line(pointX.x,pointX.y,attactPointX,attachPointY)  //line(bob's position, roof's position)


        

        
        

    }
    
}
