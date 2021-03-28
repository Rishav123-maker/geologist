class Stone{
	constructor(x,y)
	{
		
	// assign options to the rubber ball
	var options ={
		'restitution': 0.8,
		'friction' : 0.9,
		'density' : 12
	}
                 this.width = 100;
                 this.height =100;
		this.body = Bodies.rectangle(x, y, this.width, this.height, options);
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			fill("black");
			//draw the ellipse here to display the rubber ball
                        rect(0, 0, this.width, this.height);
			pop()
    }
}
