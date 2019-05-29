const main = document.querySelector("section.main")
const intro = document.querySelector("section.intro")

document.addEventListener("DOMContentLoaded", function () {
  setInterval(function (){
//     main.style.display = "block"

    // main.style.opacity = 1
    // main.style.zIndex = 1

		// const audio = document.createElement("audio")
		// audio.setAttribute("src", "sound/plop.mp3")
		// audio.play()

    intro.style.opacity = 0
  }, 5500)


	setInterval(function (){
   		main.style.opacity = 1
    	main.style.zIndex = 1

    }, 7900)



})




const circle1 = document.querySelector(".interactive1")
const circle2 = document.querySelector(".interactive2")
const circle3 = document.querySelector(".interactive3")


circle1.addEventListener("mouseover", function(){
	const audio = document.createElement("audio")
	audio.setAttribute("src", "sound/Square.mp3")
	audio.play()
})

circle2.addEventListener("mouseover", function(){
	const audio = document.createElement("audio")
	audio.setAttribute("src", "sound/Square.mp3")
	audio.play()
})

circle3.addEventListener("mouseover", function(){
	const audio = document.createElement("audio")
	audio.setAttribute("src", "sound/Square.mp3")
	audio.play()	
})