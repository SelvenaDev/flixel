import FlxG from "../../FlxG.js";

export class FlxAnimationController {
  #curAnim;
  #frameIndex;
  #frameName;
  #name;
  #finished;
  #numFrames;
  #timeScale = 1.0
  static callback = null
  static finishCallback = null;
  get curAnim() {
    return this.#curAnim;
  }
  set curAnim(value) {
    this.#curAnim = value;
  }
  get frameIndex() {
    return this.#frameIndex;
  }
  set frameIndex(value) {
    this.#frameIndex = value;
  }
  get frameName() {
    return this.#frameName;
  }
  set frameName(value) {
    this.#frameName = value;
  }
  get name() {
    return this.#name;
  }
  set name(value) {
    this.#name = value;
  }
  get finished() {
    return this.#finished;
  }
  // neverと同じ
  get numFrames() {
    return this.numFrames;
  }
  ClassName.callback = (animName, frameNumber, frameIndex) => {
    print(animName, frameNumber, frameIndex);
  }
  ClassName.finishCallback = (animName) => {
    print(animName);
  }
  onFrameChange = new FlxTypedSignal();
  onFinish = new FlxTypedSignal();
  onLoop = new FlxTypeSignal();
  _sprite;
  _curAnim;
  _animations = new Map();
  _prerotated;
  new(sprite) {
    this._sprite = sprite;
  }
  update(elapsed) {
    if (this._curAnim != null) {
      _curAnim.update(elapsed * (timeScale * FlxG.animationTimeScale));
    } else if (this._protated != null) {
      this._protated.angle = this._sprite.angle;
    }
  }
  copyFrom(controller) {
    this.destroyAnimations();
    for (anim in controller._animations) {
      add(anim.name, anim.frames, anim.frameRate, anim.looped, anim.flipX, anim.flipY);
    }
    if (controller._prerotated != null) {
      this.createPreroated();
    }
    if (controller.name != null) {
      this.#name = controller.name;
    }
    this.#frameIndex = controller.frameIndex;
    return this;
  }
  createPreroated(Controller = null) {
    this.destroyAnimations();
    Controller = 
  }
}
