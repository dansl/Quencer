Quencer v0.1 - Image Sequencer for Javascript   
  
By: Dansl.net  
  
Example:
```javascript
//Div in DOM with ID "exampleDiv", this is the div the animation will be placed, use this div to position the animation.
var exampleDiv = document.getElementById("exampleDiv");

//Reference: Quencer(_imagePrefix, _format, _frameWidth, _frameHeight, _totalFrames, _speed, _stylingClass)
var exampleSequence = new Quencer("images/introSequence/introSequenceStart", ".png", 281, 168, 79, 50, "");
  
//Add event listener for oncomplete, calls "exampleFunction" when animation completes
exampleSequence.addEventListener("complete", exampleFunction);
  
//Adds animation to the div
exampleSequence.AddTo(exampleDiv);
```
  
Run animation
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