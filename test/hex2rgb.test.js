var
  expect = require('chai').expect,
  hex2rgb = require('../lib/hex2rgb');

describe.only("HEX2RGB Lib", function () {

  describe("#hex2rgb", function () {

    it('should throw an error if the value is not a hex code', function (done) {
        hex2rgb('blue', function (err, result) {
          expect(err).to.exist;
          done();
        });
    });

    it("should return a correctly converted rgb value", function (done) {
      hex2rgb("#fff", function (err, result) {
        expect(err).to.not.exist;
        expect(result).to.deep.equal([255, 255, 255]);
        done();
      });
    });

  });
});
