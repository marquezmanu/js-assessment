if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    or : function(a, b) {
      if (a === true)
        return a;
      else
        return b;
    },

    and : function(a, b) {
      if (a === false)
        return a;
      else
        return b;


    }
  };
});
