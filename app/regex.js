if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
        var regex = /\d/;
        return regex.test(str);
    },

    containsRepeatingLetter : function(str) {
        return str.match(/([a-z])\1/i) ? true:false;
    },

    endsWithVowel : function(str) {
        var re = /[aeiou]$/i;
        return re.test(str);
    },

    captureThreeNumbers : function(str) {
        var re = /\d{3}/;
        return str.match(re) ? str.match(re)[0] : false;
    },

    matchesPattern : function(str) {
        var re = /^\d\d\d-\d\d\d-\d\d\d\d$/;
        return re.test(str);
    },
    isUSD : function(str) {
        var re = /^\${1}\d+(,\d{3})*(\.\d{2})?$/;
        return re.test(str);
    }
  };
});
