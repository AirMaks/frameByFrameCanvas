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
            [0, 4000, 5500, 5501, 6000],
            [1, 29, 1, 30, 100]
          ],
          {
            canvasWidth: 1795,
            canvasHeight: 1583,
            canvasImagesPath: "http://iself-inox.ru/img/omega/",
            canvasImagesFormat: ".jpg",
            frameCount: 100,
            anchor: "#anchor"
          }
        );
      };
</script>
```

## Example:
- [Image moving effect](https://codesandbox.io/s/musing-banzai-unhed)

