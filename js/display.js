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

   // initialising grid
   for (var x = 0; x < game.size; x++) {
      for (var y = 0; y < game.size; y++) {
         this.grid.append($('<div />').attr({
            'id'     : x + '-' + y,
            'class'  : 'block' + game.getBlockState(x, y)
         }));
      }
   }
}


DOM.prototype.render = function() {


}
