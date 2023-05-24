import * as me from 'https://esm.run/melonjs@13';
import game from './../game.js';

class HoleEntity extends me.Entity{
    constructor(x, y, settings) {
        // call the constructor
        super(x, y , settings);

        // set a "player object" type
        this.body.collisionType = me.collision.types.ACTION_OBJECT;
}
}