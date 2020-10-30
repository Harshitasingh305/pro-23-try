class Box{

constructor(x,y,width,height){
this.object=Bodies.rectangle(x,y,width,height)
World.add(world,object)
this.width=width
this.height=height


}
display(){
rect(this.object.position.x,this.object.position.y,this.width,this.height)


}



}