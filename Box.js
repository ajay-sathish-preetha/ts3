class Block
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:false,
			restitution: 0.8,
			friction: 0
			}
		this.x=x;
		this.y=y;
		this.w=w;
		this.h=h;
		this.Visiblity = 255;
		this.body=Bodies.rectangle(x, y, w, h , options);
		 World.add(world, this.body);

	}
	display()
	{
		 // console.log(this.body.speed);
		  if(this.body.speed < 3){
			var RoofPos=this.body.position;		
			var angle = this.body.angle
			push()
			translate(RoofPos.x, RoofPos.y);
			rotate(angle);
			rectMode(CENTER)
			strokeWeight(4);
			//fill(128,128,128)
			rect(0,0,this.w, this.h);
			pop()
		  }
		  else{
			  World.remove(world,this.body);
			  push();
			  this.Visiblity = this.Visiblity - 1;
			  tint(255,this.Visiblity);
			  pop();
		  }
			
	}

	Score(){
		if(this.Visiblity<0 && this.Visiblity>-105){
           score++;
		}
	}

}