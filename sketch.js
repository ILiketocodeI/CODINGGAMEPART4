var character
var person
var enemy
var exitDoor
var celebrate
var getKeyAnimation
var deathAnimation
var personWalk
var personAnimation

function preload() {

   person = loadAnimation("PlayerCharacterTest.png")

  // personWalk = loadImage("PlayerCharacterWalkTest.png")

  personAnimation = loadAnimation("PlayerCharacterWalkTest.png", "PlayerCharacterWalkTest.png",
  "PlayerCharacterWalkTest.png", "PlayerCharacterTest.png", "PlayerCharacterTest.png", 
  "PlayerCharacterTest.png", "PlayerCharacterWalkTwoTest.png","PlayerCharacterWalkTwoTest.png",
  "PlayerCharacterWalkTwoTest.png", "PlayerCharacterTest.png", "PlayerCharacterTest.png",
  "PlayerCharacterTest.png")

  enemy = loadImage("Enemy.png")
  exitDoor = loadImage("ExitDoor.png")
  celebrate = loadImage("PlayerCharacterCelebrate.png")
  getKeyAnimation = loadImage("PlayerCharacterGetKey.png")
  deathAnimation = loadImage("PlayerCharacterDeath.png")

  //person = loadImage("PlayerCharacter.png", "PlayerCharacter.png")
  //Make sure to change the second PlayerCharacter.png to PlayerCharacterWalk.png
}


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  character = createSprite(100, 100, 10, 10)
  character.scale = 0.17
  character.addAnimation("Up", personAnimation)
  character.addAnimation("person", person)
  //character.addAnimation("PlayerCharacterWalk", person)
  character.changeAnimation("person", person)
  // character.debug = true;
  character.setCollider("rectangle", 0, 0, 200, 400)

  exitDoor = createSprite(100, 100, 30, 60)

  wall1 = createSprite(140, 150, 20, 500)
  wall1.shapeColor = ("green")
  wall2 = createSprite(50, 150, 20, 1300)
  wall2.shapeColor = ("green")
  wall3 = createSprite(380, 390, 500, 20)
  wall3.shapeColor = ("green")
  wall4 = createSprite(380, 490, 500, 20)
  wall4.shapeColor = ("green")
  wall5 = createSprite(140, 590, 20, 200)
  wall5.shapeColor = ("green")
  wall6 = createSprite(380, 690, 500, 20)
  wall6.shapeColor = ("green")
  wall7 = createSprite(340, 790, 580, 20)
  wall7.shapeColor = ("green")
  wall8 = createSprite(620, 300, 20, 160)
  wall8.shapeColor = ("green")
  wall9 = createSprite(450, 230, 350, 20)
  wall9.shapeColor = ("green")
  wall10 = createSprite(285, 160, 20, 140)
  wall10.shapeColor = ("green")
  wall11 = createSprite(450, 100, 350, 20)
  wall11.shapeColor = ("green")
  wall12 = createSprite(620, 600, 20, 200)
  wall12.shapeColor = ("green")
  wall13 = createSprite(615, 52, 20, 105)
  wall13.shapeColor = ("green")
  wall14 = createSprite(750, 52, 20, 105)
  wall14.shapeColor = ("green")
  wall15 = createSprite(915, 100, 350, 20)
  wall15.shapeColor = ("green")
  wall16 = createSprite(683, 100, 155, 20)
  wall16.shapeColor = ("black")
  wall17 = createSprite(1300, 100, 700, 20)
  wall17.shapeColor = ("green")
  wall18 = createSprite(1640, 300, 20, 400)
  wall18.shapeColor = ("green")
  wall19 = createSprite(1300, 230, 400, 20)
  wall19.shapeColor = ("green")
  wall20 = createSprite(1640, 600, 20, 400)
  wall20.shapeColor = ("green")
  wall21 = createSprite(1500, 420, 20, 400)
  wall21.shapeColor = ("green")
  wall22 = createSprite(1100,420,20,400)
  wall22.shapeColor = ("green")
  wall23 = createSprite(1300,610,400,20)
  wall23.shapeColor = ("green")
  wall24 = createSprite(1130,790,1020,20)
  wall24.shapeColor = ("green")

  generator = createSprite(850,450,50,50)
}





function draw() {
  background("white")
  character.changeAnimation("person", person)
  if (keyDown("up")) {
    character.position.y -= 4
    character.changeAnimation("Up",personAnimation)
  } else if (keyDown("down")) {
    character.position.y += 4
    character.changeAnimation("Up",personAnimation)
  } 
   
  if (keyDown("left")) {
    character.position.x -= 4
    character.changeAnimation("Up",personAnimation)
  } else if (keyDown("right")) {
    character.position.x += 4
    character.changeAnimation("Up",personAnimation)
  }




  character.collide(wall1)
  character.collide(wall2)
  character.collide(wall3)
  character.collide(wall4)
  character.collide(wall5)
  character.collide(wall6)
  character.collide(wall7)
  character.collide(wall8)
  character.collide(wall9)
  character.collide(wall10)
  character.collide(wall11)
  character.collide(wall12)
  character.collide(wall13)
  character.collide(wall14)
  character.collide(wall15)
  character.collide(wall16)
  character.collide(wall17)
  character.collide(wall18)
  character.collide(wall19)
  character.collide(wall20)
  character.collide(wall21)
  character.collide(wall22)
  character.collide(wall23)
  character.collide(wall24)

  if (character.collide(wall16)){
    
  }

  drawSprites()
}


