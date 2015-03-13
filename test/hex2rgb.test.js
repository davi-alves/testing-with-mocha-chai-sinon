var
  assert = require('assert'),
  hex2rgb = require('../lib/hex2rgb');

describe("HEX2RGB Lib", function () {

  describe("#hex2rgb", function () {

    it('should throw an error if the value is not a hex code', function (done) {
        hex2rgb('blue', function (err, result) {
          assert(err);
          done();
        });
    });

    it("should return a correctly converted rgb value", function (done) {
      hex2rgb("#fff", function (err, result) {
        assert.strictEqual(err, null);
        assert.deepEqual(result, [255, 255, 255]);
        done();
      });
    });

  });
});
