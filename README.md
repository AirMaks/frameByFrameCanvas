# frameByFrame.js
Frame by frame is jQuery plugin for image moving effect while scrolling.

![frameByFrame.js](http://iself-inox.ru/img/gif.gif)

## Using:
```html
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
            canvasImagesPath: "pathToImages", // images names must be in order from 1 (1.png) to last number (100.png)
            canvasImagesFormat: ".jpg" or ".png",
            frameCount: imagesCount,
            anchor: "id of the element you want to bind animation start" // not obligatory
          }
        );
      };
</script>
```

## Example:
- [Image moving effect](- [Image moving effect](https://codesandbox.io/s/frosty-ramanujan-bhdur)
)

Show some of the frames longer, in the example below 29th frame will be shown from 2000px to 5000px
```html
<!-- Javascript -->
<script>
      window.onload = function () {
        $("#canvas").frameByFrame(
          [
            [0, 2000, 5000, 10000],
            [1, 29, 29, 100]
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
## Example:
- [Image pause](https://codesandbox.io/s/dreamy-turing-cbsz8)


Use anchor to bind your start position to the element
```html
<!-- Javascript -->
<script>
        <div id="anchor" class="canvas-container">
            <div class="bg-container">
                <div class="sticky-pos">
                    <canvas id="canvas"></canvas>
                </div>
            </div>
        </div>
        window.onload = function () {
            $("#canvas").frameByFrame(
              [
                // [0, 10000],
                // 1, 100]
              ],
              {
                // canvasWidth: imageBaseWidth,
                // canvasHeight: imageBaseHeight,
                // canvasImagesPath: "pathToImages",
                //canvasImagesFormat: ".jpg" or ".png",
                //frameCount: imagesCount,
                anchor: "#anchor" 
              }
            );
        };
</script>
```
## Example:
- [Anchor to an element](https://codesandbox.io/s/xenodochial-hellman-9hwom)
