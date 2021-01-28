var canvas;
var music;
var o1, o2, o3, o4;
var ball;
createEdgeSprites();

function preload()
{
    music = loadSound("music.mp3");
}


function setup()
{
    canvas = createCanvas(800,600);

    o1 = createSprite(720, 590, 190, 30);
    o1.shapeColor = "green";

    o2 = createSprite(515, 590, 190, 30);
    o2.shapeColor = "maroon";

    o3 = createSprite(310, 590, 190, 30);
    o3.shapeColor = "orange";

    o4 = createSprite(100, 590, 190, 30);
    o4.shapeColor = "blue";

    ball = createSprite(random(20,750), 300, 20, 20);
    ball.velocityY = 3;
    ball.velocityX = 3;
    
}

function draw() 
{
    background(rgb(169,169,169));

    music.play();

    ball.bounceOff(o1);
    ball.bounceOff(o2);
    ball.bounceOff(o3);
    ball.bounceOff(o4);

    if(o1.isTouching(ball) && ball.bounceOff(o1))
    {
        o1.shapeColor = "green";
    }

    if(o2.isTouching(ball) && ball.bounceOff(o2))
    {
        o2.shapeColor = "maroon";
    }

    if(o3.isTouching(ball) && ball.bounceOff(o3))
    {
        o3.shapeColor = "orange";
    }

    if(o4.isTouching(ball) && ball.bounceOff(o4))
    {
        o4.shapeColor = "blue";
    }

    drawSprites();


}