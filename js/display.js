/**
 * @created 2014-06-03
 * @author gideonparanoid
 */

'use strict';

/**
 * displays the game using the document object model
 */
function DOM(game, id) {
   this.game = game;

   this.grid = $('#' + id);   
   this.grid.css({
      'width' : ((game.size * 60) + 10) + 'px'
   });

console.log(game.getBlockState(0, 0).unshift('block'));

   // initialising grid
   for (var x = 0; x < game.size; x++) {
      for (var y = 0; y < game.size; y++) {

         var classes = game.getBlockState(x, y);
         classes.unshift('block');

         this.grid.append($('<div />').attr({
            'id'     : x + '-' + y,
            'class'  : classes.join(' ')
         }));
      }
   }
}


DOM.prototype.render = function() {


}
