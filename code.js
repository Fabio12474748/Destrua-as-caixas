var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["6c572fb2-94eb-4fdc-ac59-25b931a06d52"],"propsByKey":{"6c572fb2-94eb-4fdc-ac59-25b931a06d52":{"name":"bola","sourceUrl":"assets/api/v1/animation-library/gamelab/dFAFQM_6uMulnjS4nj8mgwfHc0bQz2ii/category_sports/bowlingball.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"dFAFQM_6uMulnjS4nj8mgwfHc0bQz2ii","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dFAFQM_6uMulnjS4nj8mgwfHc0bQz2ii/category_sports/bowlingball.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

/*aqui estão minhas variaveis*/

var caixa1 = createSprite(25,75,50,50);
caixa1.shapeColor="green";
var caixa2 = createSprite(75,75,50,50);
caixa2.shapeColor="yellow";

var caixa3 = createSprite(125,75,50,50);
caixa3.shapeColor="green";
var caixa4 = createSprite(175,75,50,50);
caixa4.shapeColor="yellow";

var caixa5 = createSprite(225,75,50,50);
caixa5.shapeColor="green";
var caixa6 = createSprite(275,75,50,50);
caixa6.shapeColor="yellow";

var caixa7 = createSprite(325,75,50,50);
caixa7.shapeColor="green";
var caixa8 = createSprite(375,75,50,50);
caixa8.shapeColor="yellow";
//linha 2
var caixa9 = createSprite(25,125,50,50);
caixa9.shapeColor="yellow";


var caixa10 = createSprite(75,125,50,50);
caixa10.shapeColor="green";

var caixa11 = createSprite(125,125,50,50);
caixa11.shapeColor="yellow";
var caixa12 = createSprite(175,125,50,50);
caixa12.shapeColor="green";
var caixa13 = createSprite(225,125,50,50);
caixa13.shapeColor="yellow";
var caixa14 = createSprite(275,125,50,50);
caixa14.shapeColor="green";
var caixa15 = createSprite(325,125,50,50);
caixa15.shapeColor="yellow";
var caixa16 = createSprite(375,125,50,50);
caixa16.shapeColor="green";
var raquete = createSprite(200,375,100,15);
raquete.shapeColor="blue";
var bola = createSprite(150,250,20,20);
bola.shapeColor="green";
bola.setAnimation("bola");
bola.scale=0.1;
var score =0;
var gameState = "serve";
function draw(){
  background("white");
  
  //Exibir Pontuação
  textSize(20);
  stroke("black");
  text("Pontuação:" + score,270,20);
  
  if(gameState == "serve"){
    textSize(20);
    stroke("cyan");
    text("Bem Vindo ! Pressione Enter Para Iniciar", 15 ,200);
    
    if(keyDown("ENTER")){
       bola.velocityX=2;
       bola.velocityY=3;
       gameState= "play";
} 
    
  }
  
  if (gameState == "play"){
    
    raquete.x=World.mouseX;
    
    if(bola.isTouching(bottomEdge) ||  score == 16){
      gameState="end";
    }
    
  }
  
  if(gameState == "end"){
    bola.velocityX=0;
    bola.velocityY=0;
    
    textSize(20);
    stroke("red");
    text("FIM DE JOGO! sua pontuação é " + score,40,200);
    
  }
  
  
  
  drawSprites();
  
 



createEdgeSprites();

bola.bounceOff(raquete);
bola.bounceOff(topEdge);
bola.bounceOff(rightEdge);
bola.bounceOff(leftEdge);

//Destruir caixar

if (bola.isTouching(caixa1)){
  score= score+1;
  caixa1.destroy();
  bola.bounceOff(caixa1);
}

if (bola.isTouching(caixa2)){
  score = score+1;
  caixa2.destroy();
  bola.bounceOff(caixa2);
}
if(bola.isTouching(caixa3)){
  
    score=score+1;
    caixa3.destroy();
  }
    if(bola.isTouching(caixa4))
  {
    score=score+1;
    caixa4.destroy();
  }
    if(bola.isTouching(caixa5))
  {
    score=score+1;
    caixa5.destroy();
  }
    if(bola.isTouching(caixa6))
  {
    score=score+1;
    caixa6.destroy();
  }
    if(bola.isTouching(caixa7))
  {
    score=score+1;
    caixa7.destroy();
  }
    if(bola.isTouching(caixa8))
  {
    score=score+1;
    caixa8.destroy();
  }
    if(bola.isTouching(caixa9))
  {
    score=score+1;
    caixa9.destroy();
  }
    if(bola.isTouching(caixa10))
  {
    score=score+1;
    caixa10.destroy();
  }
    if(bola.isTouching(caixa11))
  {
    score=score+1;
    caixa11.destroy();
  }
    if(bola.isTouching(caixa12))
  {
    score=score+1;
    caixa12.destroy();
  }
    if(bola.isTouching(caixa13))
  {
    score=score+1;
    caixa13.destroy();
  }
    if(bola.isTouching(caixa14))
  {
    score=score+1;
    caixa14.destroy();
  }
    if(bola.isTouching(caixa15))
  {
    score=score+1;
    caixa15.destroy();
  }
    if(bola.isTouching(caixa16))
  {
    score=score+1;
    caixa16.destroy();
  }
  
}




 

  


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
