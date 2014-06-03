/**
 * @created 2014-06-02
 * @author  gideonparanoid
 */

'use strict';

/**
 * a game
 */
function Game(size, speed) {
   this.size = size;
   this.grid = [];
   this.speed = speed;

   for (var x = 0; x < size; x++) {
      this.grid[x] = [];

      for (var y = 0; y < size; y++) {
         this.grid[x][y] = new Block();
      }
   }
}


Game.prototype.getBlockState = function(x, y) {
   return this.grid[x][y].getState();
}


/**
 * a grid square
 */
function Block(type) {
   this.type = 0;
   this.revealed = false;
   this.used = false;
   this.rotation = 0;
}

// block types
Block.STRAIGHT = 'straight';
Block.BEND = 'bend';
Block.SLOW = 'slow';
Block.FAST = 'fast';
Block.BREAK = 'break';
Block.ALARM = 'alarm';



Block.prototype.getState = function() {
   return '';
}
