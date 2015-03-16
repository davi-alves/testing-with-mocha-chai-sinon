module.exports = {
  convert: function (hex, callback) {
    setTimeout(function () {

      if (/^#/.test(hex)) {
        hex = hex.slice(1);
      }

      if (this.isInvalid(hex)) {
        callback(new Error('Invalid hexadecimal string'));
        return;
      }

      var values = this.arrayify(hex);

      callback(null, this.parse(values));
    }.bind(this), 50);
  },

  arrayify: function (hex) {
    var values = hex.split('');
    if (values.length === 3) {
      values = [values[0], values[0], values[1], values[1], values[2], values[2]];
    }

    return values;
  },

  parse: function (values) {
    var
      r = parseInt([values[0], values[1]].join(''), 16),
      g = parseInt([values[4], values[5]].join(''), 16),
      b = parseInt([values[2], values[3]].join(''), 16);

    return [r, g, b];
  },

  isInvalid: function (hex) {
    return (hex.length !== 3 && hex.length !== 6);
  }
};
