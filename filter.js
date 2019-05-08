const sections = document.querySelectorAll("section")

sections.forEach(section => {
  const originalImage = section.querySelector("img") //get the image for each section
  const originalImageSource = originalImage.getAttribute("src")//want the source of the image tag
  
  section.innerHTML = "" //get rid of the content in all of the sections
  
  //set up a pixi application
    const app = new PIXI.Application({
       //with customised width, height, transparent, resolution
    width: 3840, //want it to be larger than the image itself to make the effects spill outside - give 100 each side
    height: 2160, //original image height is 600 so we want to add 100 on both sides
    transparent: true //want it to be transparent bc it is "false" as a default
  })
  
  //add the pixi application to the section tag to turn the tags into canvases according to above set dimensions
  section.appendChild(app.view)
  
  // make a new image
  let image = null //let the image be equal to nothing bc the image hasn't loaded yet but can load it in later
                  //allows us to use image in all the yellow line
  let displacementImage = null
  
//make a new loader which loads things into the canvas
  const loader = new PIXI.loaders.Loader()
  
 //load in our images - add the images that we have taken away into our code
  loader.add("image", originalImageSource) //get ready to load "image" - this is an assigned name that could actually be anything- and the src of the image-similar to create element
  loader.add("displacement", "displacement1.jpg") 
  loader.load((loader, resources) => { //do the loading to pull it onto the page
    //once the image has loaded, now do things - in this case, place the image as a sprite(what PIXI calls an image)
    image = new PIXI.Sprite(resources.image.texture) //make a new image within PIXI, 
                          //from the resources above, get the "image" (in the loader.add) then add it in as a texture
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
    
    // add the image to the app
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
  //  displacementImage.x = event.pageX //want the aim to be where the mouse is
  //  displacementImage.y = event.pageY
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









