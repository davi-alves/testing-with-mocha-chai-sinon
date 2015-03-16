var
  expect = require('chai').expect,
  getPalette = require('../lib/getPalette');

describe("Palette Lib", function () {

  describe("#getPalette", function () {

    it('should throw an error if the result is not an array', function (done) {
      var notArray = function () {
        getPalette(process.cwd() + '/test/fixtures/config-dummy.json');
      };
      expect(notArray).to.throw(/is not an array/);
      done();
    });

    it("should return an array with 3 items", function () {
      var palette = getPalette();
      expect(palette).to.be.an('array').with.length(3);
    });

  });
});
