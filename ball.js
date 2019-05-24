//clean code for instant mosuemove according to the mouse 

document.addEventListener("mousemove", function (event) {
  
   const ball = document.querySelector("div.ball")
 
  let mouseX = event.pageX
  let mouseY = event.pageY
  
  ball.style.left = mouseX + "px"
  ball.style.top = mouseY + "px"
})



