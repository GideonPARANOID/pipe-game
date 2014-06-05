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

   // where the liquid enters & exists the game, clockwise from origin (this.size * 4)
   this.start = 0;
   this.end = 0;

   // current block
   this.current = 0;

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
   this.type = randomType();
   this.revealed = false;
   this.used = false;
   this.rotation = Math.floor(Math.random() * 4);
}

// block modifiers

Block.STRAIGHT = 'straight';
Block.BEND = 'bend';
Block.SLOW = 'slow';
Block.FAST = 'fast';
Block.BREAK = 'break';
Block.ALARM = 'alarm';

Block.REVEALED = 'revealed'
Block.USED = 'used';
Block.ROTATION = [
   'rotation000',
   'rotation090',
   'rotation180',
   'rotation270'
]


/**
 * @return  array    string constants describing the the state
 */
Block.prototype.getState = function() {
   var state = [this.type, Block.ROTATION[this.rotation]];
   
   switch (true) {
      case this.revealed : 
         state.push(Block.REVEALED);
      case this.used :
         state.push(Block.USED);
   }

   return state;
}



/**
 * @param   weight   object with keys of block constants & values of each type's weight
 * @return  string   constant describing a type
 */
function randomType() {  
   var weights = [];
   weights[Block.STRAIGHT] = 2;
   weights[Block.BEND] = 3;
   weights[Block.SLOW] = 1;
   weights[Block.FAST] = 0;
   weights[Block.BREAK] = 1;
   weights[Block.ALARM] = 0;

   var weightedTypes = [];
   for (var key in weights) {
      for (var i = 0; i < weights[key]; i++) {
         weightedTypes.push(key);
      }
   }

   return weightedTypes[Math.floor(Math.random() * weightedTypes.length)];
}

