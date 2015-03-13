var
  assert = require('chai').assert,
  expect = require('chai').expect,
  getPalette = require('../lib/getPalette');

describe("Palette Lib", function () {

  describe("#getPalette", function () {

    it('should throw an error if the result is not an array', function (done) {
      var notArray = function () {
        getPalette(process.cwd() + '/test/fixtures/config-dummy.json');
      };
      assert.throws(notArray, /is not an array/);
      done();
    });

    it("should return an array with 3 items", function () {
      var palette = getPalette();
      assert.isArray(palette, "did not return an array");
      assert.lengthOf(palette, 3, "did not return 3 items");
    });

  });
});
