const circleA = document.querySelector(".a")
const circleB = document.querySelector(".b")
const circleC = document.querySelector(".c")
const circleD = document.querySelector(".d")
const circleE = document.querySelector(".e")


circleA.addEventListener("mouseenter", function(){
	const audio = document.createElement("audio")
	audio.setAttribute("src", "sound/bell.mp3")
	audio.play()
})

circleB.addEventListener("mouseover", function(){
	const audio = document.createElement("audio")
	audio.setAttribute("src", "sound/office.mp3")
	audio.play()
})

circleC.addEventListener("mouseover", function(){
	const audio = document.createElement("audio")
	audio.setAttribute("src", "sound/plane.mp3")
	audio.play()	
})

circleD.addEventListener("mouseover", function(){
	const audio = document.createElement("audio")
	audio.setAttribute("src", "sound/thunder.mp3")
	audio.play()	
})

circleE.addEventListener("mouseover", function(){
	const audio = document.createElement("audio")
	audio.setAttribute("src", "sound/waves.mp3")
	audio.play()	
})