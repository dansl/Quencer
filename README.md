Quencer v0.1 - Image Sequencer for Javascript  
  
By: Dansl.net  
  
Example:  
var exampleDiv = document.getElementById("exampleDiv"); -> Div in DOM with ID "exampleDiv", this is where the div the animation will be placed, use this div to position the animation.  
  
Reference: Quencer(_imagePrefix, _format, _frameWidth, _frameHeight, _totalFrames, _speed, _stylingClass)  
var exampleSequence = new Quencer("images/introSequence/introSequenceStart", ".png", 281, 168, 79, 50, "");  
  
exampleSequence.RunAni(); -> Plays animation, without looping  
OR  
exampleSequence.RunAni(true); -> Sets Loop to false and plays entire animations, loops at the end  
OR  
exampleSequence.RunAni(true, 10, 60); -> Sets (looping true, startFrame 10, endFrame 60) to loop frames 10 through 60  
  
exampleSequence.addEventListener("complete", loopIntroAni); -> Add event listener for oncomplete  
  
exampleSequence.AddTo(exampleDiv); -> Add animation to a div  
  
exampleSequence.Stop(); -> Stops Animation  