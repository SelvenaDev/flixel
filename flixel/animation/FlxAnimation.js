import ../FlxG/FlxG.js;

export class FlxAnimation {
  #frameRate = 0.0;
  #curFrame = 0;
  #numFrames =;
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
}
