if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    createModule : function(str1, str2) {
      var myModule = (function(){
        return {
          name : str2,
          greeting : str1,
          sayIt : function(){
            return this.greeting + ', ' + this.name;
          }
        };
      })();
      return myModule;
    }
  };
});

