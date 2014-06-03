/**
 * @created 2014-06-02
 * @author  gideonparanoid
 */


function Game(size) {
   this.size = size;
   this.grid = [];

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


Block.prototype.getState = function() {

}
