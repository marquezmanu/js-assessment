if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
        for (var i = 1; i <= bit; i++) {
            if ( i === bit ) {
                return Math.floor(num % 2);
            }
            num = num / 2;
        }
    },

    base10: function(str) {
        var result = 0;
        var pow = 0;
        for (var i = str.length - 1; i >= 0 ; i--) {
            if ( str[i] === '1' ) {
                result += Math.pow(2,pow);
            }
            pow += 1;
        }
        return result;
    },

    convertToBinary: function(num) {
        var result = [];
        for (var i = 0; i < 8; i++) {
            result.unshift(Math.floor(num % 2));
            num = num / 2;
        }
        return result.toString().replace(/,/g,'');
    },

    multiply: function(a, b) {
        console.log(a*b);

    }
  };
});

