/*
The way this works is you need to add this js file to the bottom of each HTML page. Each slideshow element should have an 'id'
that matches the main key in this variable. The value of each key in this object is an array that contains an array.
In that array is a string that points to the image you want to go to. Put them in the order you want them to rotate in.
On the HTML for the smaller arrows you should have an Onclick event that calls the togglePic(dir) function. View 3D.HTML for a complete example.
The array of images can be as long as you want. It will continously loop.

You will also need to attach Jquery CDN script link to bottom of each page.
*/
const GALLERYMAP =  {
    'ogen': ['3D/ogen.jpg','3D/ogen2.jpg'],
    'plant1': ['3D/plant1.jpg','3D/plant1.gif'],
    'plant2': ['3D/plant2.jpg','3D/plant2.gif'],
    'plant3': ['3D/plant3.jpg','3D/plant3.gif'],
    // more go here
  }

function togglePic(direction) {
  let nextUp = 0;
  let galleryItem = $('[data-gallery-item]:visible'); //get the actual Jquery DOM element
  let galleryKey = galleryItem.attr('id'); //get the id that will be match in GALLERYMAP
  let currentSlide = galleryItem.attr('src'); //get the item you are currently at in GALLERYMAP item
  let idx = GALLERYMAP[galleryKey].indexOf(currentSlide)
  let galleryLength = GALLERYMAP[galleryKey].length

  if(direction === 'next'){
    if( ++idx > (galleryLength-1) ){
      nextUp = 0
    }else{
      nextUp = idx++
    }
  }

  if(direction === 'prev'){
    if( (idx - 1) < 0 ){
      nextUp = (galleryLength-1)
    }else{
      nextUp = --idx
    }
  }

  return galleryItem.attr('src', GALLERYMAP[galleryKey][nextUp] )
}
