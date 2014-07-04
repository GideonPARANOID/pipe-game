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
   this.speed = speed;

   // where the liquid enters & exists the game, clockwise from origin (this.size * 4) 
   this.start = Math.floor(Math.random() * this.size * 4);
   this.end = this.start + this.size * 2;

   // current block
   this.current = new Block(Block.CURRENT);

   this.generateValidGrid();

   console.log(this.grid);
}


/**
 * @return  boolean  whether it is possible to solve the grid or not
 */
Game.prototype.generateValidGrid = function() {
   this.grid = [];

/*   while (!function validGrid() {
    if (this.grid.length != this.size) {
      return false;
   }
   return true;
     
   }){*/ 
      for (var x = 0; x < this.size; x++) {
         this.grid[x] = [];
   
         for (var y = 0; y < this.size; y++) {
            this.grid[x][y] = new Block();
         }
      }
  
}


/**
 * @param   x        coordinate of the block in the grid
 * @param   y        coordinate of the block in the grid
 * @return  array    string constants describing the the state
 */
Game.prototype.getBlockState = function(x, y) {
   return this.grid[x][y].getState();
}


/**
 * @return  array    string constants describing the state  of the current swapped block
 */
Game.prototype.getCurrentBlockState = function() {
   return this.current.getState();
}


/**
 * @param   x        coordinate of the block in the grid
 * @param   y        coordinate of the block in the grid
 */
Game.prototype.activateBlock = function(x, y) {
   if (this.grid[x][y].hidden) {
      this.grid[x][y].hidden = false;
   
   } else if (this.grid[x][y].used) {
   
   } else {
      this.swapBlock(x, y);
   }
}

/**
 * @param   x        coordinate of the block in the grid
 * @param   y        coordinate of the block in the grid
 * swaps the block at the passed coordinates with the current block
 */
Game.prototype.swapBlock = function(x, y) {
   var block = this.grid[x][y];
   this.grid[x][y] = this.current;
   this.current = block;
}


///////////////////////////////////////////////////////////////////////////////////////////////////
// block

/**
 * a grid square
 */
function Block(type) {
   this.type = typeof type == 'undefined' ? randomType() : type;
   this.hidden = true;
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

Block.CURRENT  = 'current';

Block.HIDDEN = 'hidden';
Block.USED = 'used';
Block.ROTATION = [
   'rotation000',
   'rotation090',
   'rotation180',
   'rotation270'
];


/**
 * @return  array    string constants describing the the state
 */
Block.prototype.getState = function() {
   var state = [this.type, Block.ROTATION[this.rotation]];
   
   switch (true) {
      case this.hidden : 
         state.push(Block.HIDDEN);
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


