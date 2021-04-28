class Mango
{
    constructor(x, y, diameter)
    {
        var options = {
            isStatic:true,
            restitution:0.5
        }
        this.x=x;
		this.y=y;
		this.diameter = diameter;
        this.body = Bodies.circle(this.x, this.y, this.diameter, options);
        
        this.image = loadImage("images/mango.png");
        World.add(world, this.body);
    }

    display()
    {
        var mangoPos=this.body.position;	
		push()
		translate(mangoPos.x, mangoPos.y);
		// rectMode(CENTER);
		rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,0,this.diameter, this.diameter)
		pop()
    }
}