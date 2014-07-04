/**
 * @created 2014-06-02
 * @author  gideonparanoid
 */

'use strict';

// model, view
var game, display;

$(function() {
   game = new Game(7);
   display = new DOM('grid', game.size);
});

