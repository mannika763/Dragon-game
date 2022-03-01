var dino = document.getElementById("dino");
var obstacle = document.querySelector('.obstacle');
var score=0;

audio = new Audio('music.mp3');

audiogo  = new Audio('gameover.mp3');
setTimeout(() => {
   audio.play();
}, 1000);
cross= true;
function jump(){
  dino.classList.add("jump");
  dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
  dino.style.left = dx + 90 +"px";
  setTimeout(function() {
   dino.classList.remove("jump");
  },1000);
 }
 
 document.addEventListener('keydown',function(e){
   jump();
 });



    /*dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    

    
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));
    */
    setInterval(() => {
      dino = document.getElementById("dino");
      gameOver = document.querySelector('.gameOver');
      obstacle = document.querySelector('.obstacle');
  
      dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
      dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));
  
      ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
      oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));
  
      offsetX = Math.abs(dx - ox);
      offsetY = Math.abs(dy - oy);
      // console.log(offsetX, offsetY)
      if (offsetX < 73 && offsetY < 52) {
          gameOver.innerHTML = "Game Over - Reload to Play Again"
          obstacle.classList.remove('obstacleAni')
          audiogo.play();
          setTimeout(() => {
              audiogo.pause();
              audio.pause();
          }, 1000);
      }
      else if (offsetX < 100 && cross) {
          score += 1;
          updateScore(score);
          cross = false;
          setTimeout(() => {
              cross = true;
          }, 1000);
          setTimeout(() => {
              aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
              newDur = aniDur - 0.1;
              obstacle.style.animationDuration = newDur + 's';
              console.log('New animation duration: ', newDur)
          }, 500);
  
      }
  
  }, 10);
  
  function updateScore(score) {
      scoreCount.innerHTML = "Your Score: " + score
  }

 
