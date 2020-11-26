# frameByFrame.js
Frame by frame is javascript library for image moving effect while scrolling, inspired by lax.js

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
            [0, 8000],
            [1, 100]
          ],
          {
            canvasWidth: imageBaseWidth,
            canvasHeight: imageBaseHeight,
            canvasImagesPath: "pathToImages",
            canvasImagesFormat: ".jpg" or ".png",
            frameCount: imagesCount
          }
        );
      };
</script>
```

## Example:
- [Image moving effect](https://codesandbox.io/s/musing-banzai-unhed)

