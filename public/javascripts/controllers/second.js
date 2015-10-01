'use strict';

MassiTechTest.controller('secondCtrl', function() {

  $('#target2').click(function(e) {

    var x = e.pageX - this.offsetLeft;
    var y = e.pageY - this.offsetTop + 20;

    var ctx = this.getContext('2d');

    var textVal = $('#word').val();
    if(!!textVal){
      var newWord = textVal.substr(1);
      var firstCharacter = textVal.charAt(0);
      $('#word').val(newWord);

      drawCircle(ctx, x, y, firstCharacter);
    }
  });

});