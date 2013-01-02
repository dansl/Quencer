/*
 Quencer v0.1 - Image Sequencer for Javascript
 By: Dansl.net
 https://github.com/dansl/Quencer
*/

function Quencer(_imagePrefix, _format, _frameWidth, _frameHeight, _totalFrames, _speed, _stylingClass){
	this.container;
	this.interval;
	this.frameWidth = _frameWidth;
	this.frameHeight = _frameHeight;
	this.totalFrames = _totalFrames;
	this.currentFrame = 0;
	this.speed = _speed; //50
	this._listeners = {};
	this.imagePrefix = _imagePrefix;
	this.cached = false;
	this.stopped = false;
	this.format = _format;
	 
	this.container = document.createElement("div");
	this.container.style.width = this.frameWidth+"px";
	this.container.style.height = this.frameHeight+"px";
	this.container.className = _stylingClass;
}

Quencer.prototype.CacheEm = function(){
	this.cached = true;
	
	var tempImg = [];
	
	for(var x=1; x< this.totalFrames; x++) {
	    tempImg[x] = new Image()
	    if(x < 10){
	    	tempImg[x].src = this.imagePrefix +"0"+ x +this.format;
	    }else{
	    	tempImg[x].src = this.imagePrefix + x + this.format;
	    }
	}
}


Quencer.prototype.RunAni = function(_loop, _FrameStart, _FrameEnd){
	var loop = typeof(_loop) != 'undefined' ? _loop : false;
	var FrameStart = typeof(_FrameStart) != 'undefined' ? _FrameStart : 0;
  	var FrameEnd = typeof(_FrameEnd) != 'undefined' ? _FrameEnd : this.totalFrames;
	var superThis = this;
	
	this.currentFrame = FrameStart;
	if(this.cached == false){
		this.CacheEm();
	}
	this.interval = setTimeout(doLoop, this.speed);
	
	this.stopped = false;
	
	function doLoop(){
		if(superThis.stopped == false){
			var imgNum = superThis.currentFrame;
			
			if(imgNum < 10){
				superThis.container.style.backgroundImage = "url('" + superThis.imagePrefix +"0"+ imgNum +superThis.format+"')";
			}else{
				superThis.container.style.backgroundImage = "url('" + superThis.imagePrefix + imgNum +superThis.format+"')";
			}
			
			superThis.container.style.width = superThis.frameWidth+"px";
			superThis.container.style.height = superThis.frameHeight+"px";
			
			if (superThis.currentFrame == FrameEnd){
				if(!loop){
					superThis.fireEvent("complete");
					return;
				}else{
					superThis.currentFrame = FrameStart;
				}
			}
			
			superThis.currentFrame++;
			
			this.interval = setTimeout(doLoop, superThis.speed);
		}
	}
}
	
Quencer.prototype.Stop = function(){
	this.stopped = true;
	clearInterval(this.interval);
}

Quencer.prototype.AddTo = function(parentContainer){
	parentContainer.appendChild(this.container);
}

Quencer.prototype.addEventListener = function(type, listener){
	if (typeof this._listeners[type] == "undefined"){
	    this._listeners[type] = [];
	}
	
	this._listeners[type].push(listener);
}

Quencer.prototype.fireEvent = function(event){
    if (typeof event == "string"){
        event = { type: event };
    }
    if (!event.target){
        event.target = this;
    }

    if (!event.type){ 
        throw new Error("Event object missing 'type' property.");
    }

    if (this._listeners[event.type] instanceof Array){
        var listeners = this._listeners[event.type];
        for (var i=0, len=listeners.length; i < len; i++){
            listeners[i].call(this, event);
        }
    }
}

Quencer.prototype.removeEventListener = function(type, listener){
	if (this._listeners[type] instanceof Array){
	    var listeners = this._listeners[type];
	    for (var i=0, len=listeners.length; i < len; i++){
	        if (listeners[i] === listener){
	            listeners.splice(i, 1);
	            break;
	        }
	    }
	}
}