const circleA = document.querySelector("section.a")
const circleB = document.querySelector("section.b")
const circleC = document.querySelector("section.c")
const circleD = document.querySelector("section.d")
const circleE = document.querySelector("section.e")


circleA.addEventListener("mouseenter", function(){
	const audio = document.createElement("audio")
	audio.setAttribute("src", "sound/track1.wav")
	audio.play()
})

circleB.addEventListener("mouseover", function(){
	const audio = document.createElement("audio")
	audio.setAttribute("src", "sound/track2.wav")
	audio.play()
})

circleC.addEventListener("mouseover", function(){
	const audio = document.createElement("audio")
	audio.setAttribute("src", "sound/track33.wav")
	audio.play()	
})

circleD.addEventListener("mouseover", function(){
	const audio = document.createElement("audio")
	audio.setAttribute("src", "sound/track4.wav")
	audio.play()	
})

circleE.addEventListener("mouseover", function(){
	const audio = document.createElement("audio")
	audio.setAttribute("src", "sound/track5.wav")
	audio.play()	
})