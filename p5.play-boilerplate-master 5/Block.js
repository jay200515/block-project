class Block{
  constructor(x, y, width, height) {
      var options = {
         
          restitution :0.4,
          friction :0.0,
          //isStatic:true
         
      }
      this.Visibility = 255
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed < 3){
        super.display();
      }
      else{
      var angle = this.body.angle;
      var pos= this.body.position;
      push();
      this.Visiblity = this.Visiblity - 5;
      tint(255, this.Visibility)
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0,0,this.width, this.height);
      pop();
      }
      
    }
}
