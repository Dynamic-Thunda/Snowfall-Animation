class Snow{
constructor(x,y){
    var options = {

        'resituition':0.1,
        'friction':0.1

    }

    this.x=x
    this.y=y
    this.snow=Bodies.circle(this.x,this.y,5,options)
    var img
    var rand = Math.round(random(1,2))
    if(rand === 1){
        img = "snow4.webp"
    }

    else{
        img = "snow5.webp"

    }
    this.image= loadImage(img)

    World.add(world, this.snow)


}

snowDrop(){

    imageMode(CENTER);
    image(this.image, this.snow.position.x, this.snow.position.y, 15, 15)

}

updateY(){

    if(this.snow.position.y > height){

        Matter.Body.setPosition(this.snow,{x: random(0,800), y: random(0,800)} )

    }

}



}