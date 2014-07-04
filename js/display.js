/**
 * @created 2014-06-03
 * @author gideonparanoid
 */

'use strict';

/**
 * displays the game using the document object model
 */
function DOM(id, size) {
   this.grid = $('#' + id);   
   this.grid.css({
      'width' : ((size * 60) + 10) + 'px'
   });

   // initialising grid
   for (var x = 0; x < size; x++) {
      for (var y = 0; y < size; y++) {

         var _this = this, classes = game.getBlockState(x, y);
         classes.unshift('block');

         this.grid.append($('<div />').attr({
               'id'     : x + '-' + y,
               'class'  : classes.join(' ')
            }).on('click', function(event) {
               _this.click(event);
         }));
      }
   }
}


/**
 * @param   event    click event object
 * activates a block & rerenders it based on its state
 */
DOM.prototype.click = function(event) {
   var indexes = $(event.target).attr('id').split('-');
   game.activateBlock(indexes[0], indexes[1]);   
   this.renderBlock(indexes[0], indexes[1]);
}


/**
 * @param   x        coordinate of the block in the grid 
 * @param   y        coordinate of the block in the grid 
 * renders a block based on its state
 */
DOM.prototype.renderBlock = function(x, y) {
   var classes = game.getBlockState(x, y);
   classes.unshift('block');
   $('#' + x + '-' + y).attr('class', classes.join(' '));
}

