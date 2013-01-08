Quencer v0.1 - Image Sequencer for Javascript  
https://github.com/dansl/Quencer  
  
By: Dansl.net  
  
Example:
Div in DOM with ID "exampleDiv", this is the div the animation will be placed, use this div to position the animation.
```javascript
var exampleDiv = document.getElementById("exampleDiv");
```
  
Reference: Quencer(_imagePrefix, _format, _frameWidth, _frameHeight, _totalFrames, _speed, _stylingClass)
```javascript
var exampleSequence = new Quencer("images/introSequence/introSequenceStart", ".png", 281, 168, 79, 50, "");
```

Add event listener for oncomplete, calls "exampleFuntion" when animation completes
```javascript
exampleSequence.addEventListener("complete", exampleFunction);
```

Adds animation to the div
```javascript
exampleSequence.AddTo(exampleDiv);
```
  
Plays animation
```javascript
//Without looping
exampleSequence.RunAni(); 
  
//With Looping 
exampleSequence.RunAni(true); 
  
//loop frames 10 through 60  
exampleSequence.RunAni(true, 10, 60);

//Call to stop Animation
exampleSequence.Stop();
```