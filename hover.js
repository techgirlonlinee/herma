const circleA = document.querySelector(".a")
const circleB = document.querySelector(".b")
const circleC = document.querySelector(".c")
const circleD = document.querySelector(".d")
const circleE = document.querySelector(".e")
const circleF = document.querySelector(".f")
const circleG = document.querySelector(".g")


circleA.addEventListener("mouseenter", function(){
	const audio = document.createElement("audio")
	audio.setAttribute("src", "sound/Sound01.mp3")
	audio.play()
})

circleB.addEventListener("mouseover", function(){
	const audio = document.createElement("audio")
	audio.setAttribute("src", "sound/Sound02.mp3")
	audio.play()
})

circleC.addEventListener("mouseover", function(){
	const audio = document.createElement("audio")
	audio.setAttribute("src", "sound/Sound03.mp3")
	audio.play()	
})

circleD.addEventListener("mouseover", function(){
	const audio = document.createElement("audio")
	audio.setAttribute("src", "sound/Sound04.mp3")
	audio.play()	
})

circleE.addEventListener("mouseover", function(){
	const audio = document.createElement("audio")
	audio.setAttribute("src", "sound/Sound05.mp3")
	audio.play()	
})

circleF.addEventListener("mouseover", function(){
	const audio = document.createElement("audio")
	audio.setAttribute("src", "sound/Sound06.mp3")
	audio.play()	
})

circleG.addEventListener("mouseover", function(){
	const audio = document.createElement("audio")
	audio.setAttribute("src", "sound/Sound07.mp3")
	audio.play()	
})