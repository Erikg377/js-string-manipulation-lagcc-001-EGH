'use strict';

var decoder = function(encoded) {
  var result = '';

  for (var i = 0; i < encoded.length; i++) {
    var char = encoded[i];

    if (char === '1') {
      result += 'a';
    } else if (char === '2') {
      result += 'e';
    } else if (char === '3') {
      result += 'i';
    } else if (char === '4') {
      result += 'o';
    } else if (char === '5') {
      result += 'u';
    } else {
      result += char;
    }
  }

  return result;
};

module.exports = decoder;