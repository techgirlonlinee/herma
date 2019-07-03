const main = document.querySelector("section.main")
const intro = document.querySelector("section.intro")

const shouldShowIntro = document.location.search !== "?noIntro"

if (shouldShowIntro) {
document.addEventListener("DOMContentLoaded", function () {
  setInterval(function (){

    intro.style.opacity = 0
	main.style.display = "block"
	
  }, 5500)


	setInterval(function (){
   		main.style.opacity = 1
    	main.style.zIndex = 1

    }, 7900)

})
}

else {
	main.classList.remove("main_transition")
	intro.classList.remove("intro_transition")

	main.style.display = "block"

	intro.style.opacity = 0
	main.style.opacity = 1
   	main.style.zIndex = 1
}


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