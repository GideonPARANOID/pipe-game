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

         var classes = game.getBlockState(x, y);
         classes.unshift('block');


         this.grid.append($('<div />').attr({
            'id'     : x + '-' + y,
            'class'  : classes.join(' ')
         }).on('click', this.click));
      }
   }
}


DOM.prototype.click = function(event) {
   var indexes = $(this).attr('id').split('-');
   game.activateBlock(indexes[0], indexes[1]);   
   this.renderBlock(indexes[0], indexes[1]);
}


DOM.prototype.renderBlock = function(x, y) {
   var classes = game.getBlockState(x, y);
   classes.unshift('block');
   $('#' + x + '-' + y).attr('class', classes.join(' '));
}

