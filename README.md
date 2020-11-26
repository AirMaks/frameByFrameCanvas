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

