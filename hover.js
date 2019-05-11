const circleA = document.querySelector("section.a")
const circleB = document.querySelector("section.b")
const circleC = document.querySelector("section.c")
const circleD = document.querySelector("section.d")
const circleE = document.querySelector("section.e")


circleA.addEventListener("mouseenter", function(){
	const audio = document.createElement("audio")
	audio.setAttribute("src", "sound/sample1.mp3")
	audio.play()
})

circleB.addEventListener("mouseover", function(){
	const audio = document.createElement("audio")
	audio.setAttribute("src", "sound/sample2.mp3")
	audio.play()
})

circleC.addEventListener("mouseover", function(){
	const audio = document.createElement("audio")
	audio.setAttribute("src", "sound/sample3.mp3")
	audio.play()	
})

circleD.addEventListener("mouseover", function(){
	const audio = document.createElement("audio")
	audio.setAttribute("src", "sample4.mp3")
	audio.play()	
})

circleE.addEventListener("mouseover", function(){
	const audio = document.createElement("audio")
	audio.setAttribute("src", "sample5.mp3")
	audio.play()	
})