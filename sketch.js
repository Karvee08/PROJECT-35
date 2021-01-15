//Create variables here
var dog,happyDog,database,foodS,foodStock

function preload()
{
  //load images here
  dogImage = loadImage("images/dogImg.png")
  dogImage2 = loadImage("images/dog1.png")
}

function setup() {
	createCanvas(500, 500);
  dogSprite = createSprite(250,250,10,10)
  dogSprite.scale=0.3
 
  
  
  dogSprite.addImage(dogImage,dog)
  database = firebase.database();
  foodStock = database.ref('Food')
  foodStock.on("value",readStock)
}


function draw() {  
background(46, 139, 87) 
fill("red")
textSize(20)
text("Note:Press Up Arrow To Feed The Dog",50,100)

//feed 
if(keyWentDown(UP_ARROW)){
  
  dogSprite.addImage(dogImage2)
  writeStock(foodS)
}
  drawSprites();
  console.log(foodStock)
  //add styles here

}

function readStock(data){
  foodS = data.val()

}
function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}
