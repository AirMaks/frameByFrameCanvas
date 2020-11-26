(function() {

	$.fn.frameByFrame = function(canvasValues, canvasOptions) {

		var canvasValues = $.extend([], canvasValues)
		var canvasOptions = $.extend({}, canvasOptions)

		return this.each(function() {

			var self = $(this)

  			var canvasValues1 = canvasValues[0],
                canvasValues2 = canvasValues[1];

            var ctx = self.get(0).getContext('2d'),
	            canvasWidth = canvasOptions['canvasWidth'],
	            canvasHeight = canvasOptions['canvasHeight'];

			var currentFrame = function(index) {
				return canvasOptions['canvasImagesPath'] + '' + index + '' + canvasOptions['canvasImagesFormat']
			}
			var preloadImages = function() {
			  for (var i = 1; i <= canvasOptions['frameCount']; i++) {
			    var img = new Image();
			    img.src = currentFrame(i);
			  }
			};
			var newImg = new Image()
			newImg.src = currentFrame(1);

			ctx.canvas.width = canvasWidth;
			ctx.canvas.height = canvasHeight;

			newImg.onload = function() {
			  ctx.drawImage(newImg, 0, 0, canvasWidth, canvasHeight);
			}
			
			var updateImage = function(index) {
				newImg.src = currentFrame(index);
            	ctx.drawImage(newImg, 0, 0, canvasWidth, canvasHeight);
			}

			if (canvasOptions['anchor']) {
				var elTop = window.pageYOffset + $(canvasOptions['anchor']).get(0).getBoundingClientRect().top
			}
            $(window).on('scroll load resize', function() {

 				var i = 0;
 				var frameNum = 0;

				canvasValues1.forEach(function(value) {

					if (canvasOptions['anchor']) {
						value += elTop
					}
					
					if (value < window.pageYOffset) {
						i++;
						var y = i - 1;
						if (canvasOptions['anchor']) {
							frameNum = canvasValues2[y] * (1 - ((window.pageYOffset - elTop) - canvasValues1[y]) / (canvasValues1[i] - canvasValues1[y])) + canvasValues2[i] * ((window.pageYOffset - elTop) - canvasValues1[y]) / (canvasValues1[i] - canvasValues1[y]);
						} else {
							frameNum = canvasValues2[y] * (1 - (window.pageYOffset - canvasValues1[y]) / (canvasValues1[i] - canvasValues1[y])) + canvasValues2[i] * (window.pageYOffset - canvasValues1[y]) / (canvasValues1[i] - canvasValues1[y]);
						}
					}

					if (i <= 0) {
						frameNum = canvasValues2[0];
					}

					if (i >= canvasValues1.length) {
						frameNum = canvasValues2[canvasValues1.length - 1];
					}
				});

				frameNum = Math.round(frameNum)

				preloadImages()
				requestAnimationFrame(function() {updateImage(frameNum)})
			})
		})
	}

})();