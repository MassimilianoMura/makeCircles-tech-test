'use strict';

var drawCircle = function(ctx, x, y, text) {
  ctx.beginPath();
  ctx.arc(x, y, 20,0, 2*Math.PI);
  ctx.stroke();
  ctx.fillStyle = 'red';
  ctx.fill();
  ctx.fillStyle = 'yellow';

  if (!!text) {
    ctx.font='20px Georgia';
    ctx.textAlign='center';
    ctx.fillText(text,x,y+7);
  }
};


$(document).ready(function () {
  $('.nav li').click(function() {
    $('.nav li').removeClass('active');
    var $this = $(this);
    if (!$this.hasClass('active')) {
        $this.addClass('active');
    }
  });
});
