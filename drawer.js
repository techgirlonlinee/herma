const canvasTag = document.querySelector("canvas")


canvasTag.width = document.body.clientWidth * 2
canvasTag.height = document.body.clientHeight * 2

canvasTag.style.width = document.body.clientWidth + "px"
canvasTag.style.height = document.body.clientHeight + "px"

const context = canvasTag.getContext("2d")
context.scale(2,2)

let aimX = null
let aimY = null
let currentX = null
let currentY = null



let i = 0 
const images = ["images/Wave-01.png"].map(src => {
  const image = document.createElement("img")
  image.src = src
  return image
})


document.addEventListener("mousemove", function (event){
  
  
  aimX = event.pageX
  aimY = event.pageY
  if (currentX === null) {
    currentX = event.pageX
    currentY = event.pageY
  }
})

document.addEventListener("touch", function (event){
  
  
  aimX = event.pageX
  aimY = event.pageY
  if (currentX === null) {
    currentX = event.pageX
    currentY = event.pageY
  }
})


// document.addEventListener("scroll", function (event){
  
//  draw()
// })

const draw = function () {
  if (currentX) {
      if (images[i].complete) {

      context.drawImage(images[i], currentX - 10, currentY -150, 200, 300)
      }
   currentX = currentX + (aimX - currentX) * 0.4
   currentY = currentY + (aimY - currentY) * 0.4
  }
  
  requestAnimationFrame(draw)
}

draw()

// document.addEventListener("mousemove", (event) => {
//   document.style.backgroundPositionX = -event.offsetX + "px";
//   document.style.backgroundPositionY = -event.offsetY + "px";
// });

// document.addEventListener("mousemove", (event) => {
//   document.body.clientWidth = -event.pageX + "px";
//   document.body.clientHeight = -event.pageY + "px";
// });

