Quencer v0.1 - Image Sequencer for Javascript  
https://github.com/dansl/Quencer  
  
By: Dansl.net  
  
Example:  
var exampleDiv = document.getElementById("exampleDiv"); -> Div in DOM with ID "exampleDiv", this is the div the animation will be placed, use this div to position the animation.  
  
Reference: Quencer(_imagePrefix, _format, _frameWidth, _frameHeight, _totalFrames, _speed, _stylingClass)  
var exampleSequence = new Quencer("images/introSequence/introSequenceStart", ".png", 281, 168, 79, 50, "");  
  
exampleSequence.RunAni(); -> Plays animation, without looping  
OR  
exampleSequence.RunAni(true); -> Sets Loop to true and plays entire animations, loops at the end  
OR  
exampleSequence.RunAni(true, 10, 60); -> Sets (looping true, startFrame 10, endFrame 60) to loop frames 10 through 60  
  
exampleSequence.addEventListener("complete", exampleFunction); -> Add event listener for oncomplete, calls "exampleFuntion" when animation completes
  
exampleSequence.AddTo(exampleDiv); -> Adds animation to the div
  
exampleSequence.Stop(); -> Call to stop Animation  