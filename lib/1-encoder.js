'use strict';

var encoder = function(phrase){
  var result = '';
  for(var i = 0; i < phrase.length; i++){
    var char = phrase[i];
    if (char === 'a') {
  result += '1';
} else if (char === 'e') {
  result += '2';
} else if (char === 'i') {
  result += '3';
} else if (char === 'o') {
  result += '4';
} else if (char === 'u') {
  result += '5';
} else {
  result += char;
}
    
  
  }
  return result;
};

module.exports = encoder;
