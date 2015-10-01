
describe('when drawing canvas', function(){

  var ctxMock;
  beforeEach(function(){
    ctxMock = {
      beginPath: sinon.spy(),
      arc: function(){},
      stroke: function(){},
      fill: function(){},
      fillText: sinon.spy()
    };
  });

  describe('when drawing without text', function(){

    beforeEach(function(){
      drawCircle(ctxMock, 1, 2);
    });

    it('context should be initialised', function(){
      expect(ctxMock.beginPath.called).toBe(true);
    });

    it('should use red as color', function(){
      expect(ctxMock.fillStyle).toBe('yellow');
    });

    it('shouldn\'t place any text', function(){
      expect(ctxMock.fillText.called).toBe(false);
    });
  });

  describe('when drawing with text', function(){

    beforeEach(function(){
      drawCircle(ctxMock, 3, 4, 'A');
    });

    it('should draw circle with given text', function(){
      expect(ctxMock.fillText.called).toBe(true);
      expect(ctxMock.fillText.args[0][0]).toBe('A');
    });
  });
});