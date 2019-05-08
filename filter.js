const sections = document.querySelectorAll("section")

sections.forEach(section => {
  const originalImage = section.querySelector("img") 
  const originalImageSource = originalImage.getAttribute("src")
  
  section.innerHTML = "" 
  
    const app = new PIXI.Application({

    width: 3840, //want it to be larger than the image itself to make the effects spill outside - give 100 each side
    height: 2160, //original image height is 600 so we want to add 100 on both sides
    transparent: true //want it to be transparent bc it is "false" as a default
  })
  
  
  section.appendChild(app.view)
  

  let image = null 
  let displacementImage = null
  

  const loader = new PIXI.loaders.Loader()
  

  loader.add("image", originalImageSource) 
  loader.add("displacement", "images/displacement1.jpg") 
  loader.load((loader, resources) => { //do the loading to pull it onto the page
    
    image = new PIXI.Sprite(resources.image.texture) 
    displacementImage = new PIXI.Sprite(resources.displacement.texture)
    

    image.interactive = true 
    
   image.anchor.x = 0.5
   image.anchor.y = 0.2

    
    displacementImage.width = 512
    displacementImage.height = 512
    displacementImage.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT
    
    
    image.filters = [

      new PIXI.filters.DisplacementFilter(displacementImage, 100), //this is (sprite, scale)
    ]
    

    app.stage.addChild(image)
    app.stage.addChild(displacementImage)
    

  })
  
  let currentX = 0
  let aimX = 0
  let currentY = 0
  let aimY = 0
  
  section.addEventListener("mousemove", function (event) {
    aimX = event.pageX 
    aimY = event.pageY
  })
  

  const animate = function () {
    const diffX = aimX - currentX  
    const diffY = aimY - currentY
    
    currentX = currentX + (diffX * 0.04) 
    currentY = currentY + (diffY * 0.05)
    
   
    if (displacementImage) {
      displacementImage.x = currentX
      displacementImage.y = displacementImage.y + 1 + (diffY * 0.03)
      
    }
    

    requestAnimationFrame(animate)
  }
  

  animate()  
})
