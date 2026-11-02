import ../FlxG/FlxG.js;

export class FlxAnimation {
  frames = [];
  #frameRate = 0.0;
  #curFrame = 0;
  #numFrames =;
  #finished = true
  #reversed = false
  frameDuration = 0;
  paused = true;
  looped = true;
  loopPoint = 0;
  flipX = false;
  flipY = false;
  #_frameTimer = 0;
  
  get frameRate() {
    return this.#frameRate;
  }
  set frameRate(value) {
    this.#frameRate = value;
  }
  get curFrame() {
    return this.#curFrame;
  }
  set curFrame(value) {
    this.#curFrame = value;
  }
  get numFrames() {
    return this.#numFrames.length;
  }
  // これはnever相当なんでスキップ
  get finished() {
    return this.#finished;
  }
  get reversed() {
    return this.#reversed;
  }
  constructor(parent, name, frames, frameRate = 0.0, looped = true, flipX = false, flipY = false) {
    super(parent, name);

    this.frameRate = frameRate;
    this.frames = frames;
    this.looped = looped;
    this.flipX = flipX;
    this.flipY = flipY;
  }
  destroy() {
    this.frames = null;
    this.name = null;
    super.destroy();
  }
  play(force = false, reversed = false, frame = 0) {
    if (!force && !this.finished && this.reversed === reversed) {
      this.paused = false;
      return;
    }

    this.reversed = reversed;
    this.paused = false;
    this._frameTimer = 0;
    this.finished = this.frameDuration == 0;

    #maxFrameIndex = numFrames - 1;
    if (Frame < 0) {
      this.#curFrame = 
    }
  }
}
