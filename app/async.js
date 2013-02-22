if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
      var promise = $.Deferred();

      setTimeout(function() {
        promise.resolve(value);
      }, 1000);

      return promise;
    },

    manipulateRemoteData : function(url) {

      var request = $.ajax({url: url, dataType: 'json' });

      request = request.pipe(function (data) {
        var array = data.people;
        var result = [];
        for(var i = array.length-1; i >= 0; i--){
          var person = array[i];
          result.push(person.name);
        }
        result.sort(function(a, b){
          var nameA=a.toLowerCase(), nameB=b.toLowerCase();
          if (nameA < nameB) //sort string ascending
            return -1;
          if (nameA > nameB)
            return 1;
          return 0; //default return value (no sorting)
        });
        return result;
      });
      return request;
    }
  };
});
