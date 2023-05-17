import * as me from 'https://esm.run/melonjs@13';
import game from './../game.js';

class PlayerEntity extends me.Entity {
    constructor(x, y, settings) {
            // call the constructor
            super(x, y , settings);
    
            // set a "player object" type
            this.body.collisionType = me.collision.types.PLAYER_OBJECT;
    
            // player can exit the viewport (jumping, falling into a hole, etc.)
            this.alwaysUpdate = true;
    
            // walking & jumping speed
            this.body.setMaxVelocity(3, 15);
            this.body.setFriction(0.4, 0);
    
            this.dying = false;
    
            this.multipleJump = 1;
    
            // set the viewport to follow this renderable on both axis, and enable damping
            me.game.viewport.follow(this, me.game.viewport.AXIS.BOTH, 0.1);
    
            // enable keyboard
            me.input.bindKey(me.input.KEY.LEFT,  "left");
            me.input.bindKey(me.input.KEY.RIGHT, "right");
            me.input.bindKey(me.input.KEY.X,     "jump", true);
            me.input.bindKey(me.input.KEY.UP,    "jump", true);
            me.input.bindKey(me.input.KEY.SPACE, "jump", true);
            me.input.bindKey(me.input.KEY.DOWN,  "down");
    
            me.input.bindKey(me.input.KEY.A,     "left");
            me.input.bindKey(me.input.KEY.D,     "right");
            me.input.bindKey(me.input.KEY.W,     "jump", true);
            me.input.bindKey(me.input.KEY.S,     "down");
            me.input.bindKey(me.input.KEY.O,     "attack");
    
            //me.input.registerPointerEvent("pointerdown", this, this.onCollision.bind(this));
            //me.input.bindPointer(me.input.pointer.RIGHT, me.input.KEY.LEFT);
    
            me.input.bindGamepad(0, {type: "buttons", code: me.input.GAMEPAD.BUTTONS.FACE_1}, me.input.KEY.UP);
            me.input.bindGamepad(0, {type: "buttons", code: me.input.GAMEPAD.BUTTONS.FACE_2}, me.input.KEY.UP);
            me.input.bindGamepad(0, {type: "buttons", code: me.input.GAMEPAD.BUTTONS.DOWN}, me.input.KEY.DOWN);
            me.input.bindGamepad(0, {type: "buttons", code: me.input.GAMEPAD.BUTTONS.FACE_4}, me.input.KEY.DOWN);
            me.input.bindGamepad(0, {type: "buttons", code: me.input.GAMEPAD.BUTTONS.LEFT}, me.input.KEY.LEFT);
            me.input.bindGamepad(0, {type: "buttons", code: me.input.GAMEPAD.BUTTONS.RIGHT}, me.input.KEY.RIGHT);
            me.input.bindGamepad(0, {type: "buttons", code: me.input.GAMEPAD.BUTTONS.FACE_3}, me.input.KEY.O);
         
    
            // map axes
            me.input.bindGamepad(0, {type:"axes", code: me.input.GAMEPAD.AXES.LX, threshold: -0.5}, me.input.KEY.LEFT);
            me.input.bindGamepad(0, {type:"axes", code: me.input.GAMEPAD.AXES.LX, threshold: 0.5}, me.input.KEY.RIGHT);
            me.input.bindGamepad(0, {type:"axes", code: me.input.GAMEPAD.AXES.LY, threshold: -0.5}, me.input.KEY.UP);
    }
}