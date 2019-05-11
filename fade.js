const main = document.querySelector("section.main")
const intro = document.querySelector("section.intro")

document.addEventListener("DOMContentLoaded", function () {
  setInterval(function (){
//     main.style.display = "block"

    // main.style.opacity = 1
    // main.style.zIndex = 1

    intro.style.opacity = 0
  }, 3000)


	setInterval(function (){
   		main.style.opacity = 1
    	main.style.zIndex = 1

		// const audio = document.createElement("audio")
		// audio.setAttribute("src", "sound/plop.mp3")
		// audio.play()


		// if (!soundHasPlayed){
		//          audio.Play();
		//          soundHasPlayed = true;
		//      }
  	// main.style.transform = "translateY(-0.1%)"

    }, 5900)



})


