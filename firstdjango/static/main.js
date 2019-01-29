window.onload = function () {
	var on_mouse_over = function() {
		this.className = this.className + "hovered";
	}
	var on_mouse_out = function() {
		this.className = this.className.replace("hovered", "");
	}
	var items = document.getElementsByTagName('li');
	for (var i = 0; i < items.length; i++){
		items[i].addEventListener('mouseover', on_mouse_over);
		items[i].addEventListener('mouseout', on_mouse_out);
	}
    if (document.getElementById("medlink")){
        document.getElementById("medlink").style.backgroundColor = 'grey';
        document.getElementById("medlink").childNodes[0].innerHTML = 'Load liberal press';
    }


    var loadTimer;
    var imgObject = new Image();
    imgObject.src = 'static/sampleimg.jpg';
    imgObject.onLoad = onImgLoaded();
    function onImgLoaded() {
      if (loadTimer != null) clearTimeout(loadTimer);
      if (!imgObject.complete) {
        loadTimer = setTimeout(function() {
          onImgLoaded();
        }, 3);
      } else {
        onPreloadComplete();
      }
    }

    function onPreloadComplete(){
      //call the methods that will create a 64-bit version of thumbnail here.
      var newImg = getImagePortion(imgObject, 120, 150, 150, 80, 2);
      newImg.crossOrigin = "Anonymous";
      //place image in appropriate div
      document.getElementById("croppedimg").innerHTML = '<img src="'+newImg+'" />';
      document.getElementById("croppedimg").crossOrigin = 'anonymous';
    }

    function getImagePortion(imgObj, newWidth, newHeight, startX, startY, ratio){
     /* the parameters: - the image element - the new width - the new height - the x point we start taking pixels - the y point we start taking pixels - the ratio */
     //set up canvas for thumbnail
     var tnCanvas = document.createElement('canvas');
     var tnCanvasContext = tnCanvas.getContext('2d');
     tnCanvas.width = newWidth; tnCanvas.height = newHeight;

     /* use the sourceCanvas to duplicate the entire image. This step was crucial for iOS4 and under devices. Follow the link at the end of this post to see what happens when you don’t do this */
     var bufferCanvas = document.createElement('canvas');
     var bufferContext = bufferCanvas.getContext('2d');
     bufferCanvas.width = imgObj.width;
     bufferCanvas.height = imgObj.height;
     bufferContext.drawImage(imgObj, 0, 0);

     /* now we use the drawImage method to take the pixels from our bufferCanvas and draw them into our thumbnail canvas */
     tnCanvasContext.drawImage(bufferCanvas, startX,startY,newWidth * ratio, newHeight * ratio,0,0,newWidth,newHeight);
     tnCanvas.crossOrigin = 'anonymous';
     return tnCanvas.toDataURL();
    }

};