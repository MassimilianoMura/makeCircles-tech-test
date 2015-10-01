'use strict';

MassiTechTest.controller('firstCtrl', function() {

  $('#target').click(function(e) {

    var x = e.pageX - this.offsetLeft;
    var y = e.pageY - this.offsetTop + 20;

    var ctx = this.getContext('2d');

    drawCircle(ctx, x, y);
  });

});
