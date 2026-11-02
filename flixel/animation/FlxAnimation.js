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
  #frameTimer = 0;
  
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
    this.frameTimer = 0;
    this.finished = this.frameDuration == 0;

    #maxFrameIndex = numFrames - 1;
    if (Frame < 0) {
      this.#curFrame = Math.floor(Math.random() * (this.maxFrameIndex - 0 + 1)) + 0;
    } else {
      if (this.frame > this.#maxFrameIndex) {
        this.frame = this.#maxFrameIndex;
      }
      if (this.reversed) {
        this.frame = (this.#maxFrameIndex - this.frame);
      }
      curFrame = this.frame;
      if (this.#finished) {
        this.parent.fireFinishCallback(name);
      }
      restart() {
        play(true, this.reversed);
      }
      stop() {
        this.#finished = true;
        this.paused = true;
      }
      reset() {
        stop();
        this.#curFrame = this.#reversed ? (this.#numFrames - 1) : 0;
      }
      pause() {
        this.paused = true;
      }
      resume() {
        this.paused = false;
      }
      reverse() {
        this.#reversed = !this.#reversed;
        if (#finished) {
          play(false, this.reversed);
        }
      }
      update(elapsed) {
        const curFrameDuration = this.getCurrentFrameDuration();
        if (curFrameDuration == 0 || this.#finished || this.paused) {
          return;
        }
        this.#frameTimer += elapsed * this.timeScale;
        while (this.#frameTimer > curFrameDuration && !this.#finished) {
          this.#frameTimer -= curFrameDuration;
          if (this.#reversed) {
            if (this.looped && this.#curFrame == this.loopPoint) {
              this.#curFrame = this.#numFrames - 1;
            } else {
              this.curFrame--;
            }
          } else {
            if (this.#looped && this.#curFrame == this.#numFrames - 1) {
              this.#curFrame = this.loopPoint;
              this.parent.fireLoopCallback(this.name);
            } else {
              this.curFrame++
            }
          }
          if (this.#finished) {
            break;
          }
          curFrameDuration = this.getCurrentFrameDuration();
        }
      }
      getCurrentDuration() {
        const cureframeDuration = this.parent.getFrameDuration(frames[curFrame]);
        return curframeDuration > 0 ? curframeDuration : this.frameDuration;
      }
      clone(newParent) {
        const anim = new FlxAnimation(
          newParent,
          this.name,
          this.frames,
          this.frameRate,
          this.looped,
          this.flipX,
          this.flipY
        );
      }
      set frameRate(value) {
        this.#frameRate = value;
        this.frameDuratio = (value > 0 ? 1.0 / value : 0);
        return value;
      }
      set curFrame(frame) {
        this.#maxFrameIndex = this.#numFrames - 1;
        #tempFrame = (this.#reversed) ? (this.#maxFrameIndex - frame) : frame;
        if (this.#tempFrame >= 0) {
          if (!this.looped && this.#tempFrame > this.#maxFrameIndex - frame) : frame;
        } else {
          this.#curFrame = frame;
        }
      } else {
        this.#curFrame = 
      if (this.#finished && this.parent != null) {
          this.parent.fireFinishCallback(this.name);
      }
      return frame;
    }
    get numFrames() {
      return frame.length;
    }
  }
}
