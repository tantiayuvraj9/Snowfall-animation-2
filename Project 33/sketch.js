var snowflake, snowflakeImg;
var backgroundImage;

function preload() {
  snowflakeImg = loadImage("snow4.webp");
  backgroundImage = loadImage("snow1.jpg");
}

function setup() {
  createCanvas(800,400);
}

function draw() {
  background(backgroundImage);
  drawSprites();
  createSnowflake();
}

function createSnowflake() {
  if (frameCount % 10 == 0) {
    snowflake = createSprite(random(0, 800), 0, 50, 50);
    snowflake.velocityX = -2;
    snowflake.velocityY = 4;
    snowflake.addImage(snowflakeImg);
    snowflake.scale = 0.1;
  }
}