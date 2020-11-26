# frameByFrame.js
Frame by frame is jQuery plugin for image moving effect while scrolling.

![frameByFrame.js](http://iself-inox.ru/img/gif.gif)

## Using:
```html
<div id="anchor" class="canvas-container">
    <div class="bg-container">
        <div class="sticky-pos">
            <canvas id="canvas"></canvas>
        </div>
    </div>
</div>

<!-- Javascript -->
<script>
      window.onload = function () {
        $("#canvas").frameByFrame(
          [
            [animationStarts, animationEnds],
            [1, lastFrame]
          ],
          {
            canvasWidth: imageBaseWidth,
            canvasHeight: imageBaseHeight,
            canvasImagesPath: "pathToImages",
            canvasImagesFormat: ".jpg" or ".png",
            frameCount: imagesCount,
            anchor: "id of the element you want to bind animation start" // not obligatory
          }
        );
      };
</script>
```

## Example:
- [Image moving effect](https://codesandbox.io/s/musing-banzai-unhed)

Show some of the frames longer, in the example below 20th frame will be shown from 2000px to 5000px
```html
<!-- Javascript -->
<script>
      window.onload = function () {
        $("#canvas").frameByFrame(
          [
            [0, 2000, 5000, 10000],
            [1, 20, 20, 100]
          ],
          {
            // canvasWidth: imageBaseWidth,
            // canvasHeight: imageBaseHeight,
            // canvasImagesPath: "pathToImages",
            // canvasImagesFormat: ".jpg" or ".png",
            // frameCount: imagesCount,
            // anchor: "id of the element you want to bind animation start" // not obligatory
          }
        );
      };
</script>
```

