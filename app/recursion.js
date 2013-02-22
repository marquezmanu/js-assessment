if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
      var result = [];

      function recursionList(data) {
        if (typeof data === 'string') {
          result.push(data);
        } else { if (data instanceof Object) {
            for (var i = 0; i < data.files.length; i++) {
              recursionList(data.files[i]);
            }
        }}
      }

      function recursiondirname(data) {
        if (data instanceof Object) {
          if (data.dir === dirName) {
            recursionList(data);
          } else {
              for (var i = 0; i < data.files.length; i++) {
                recursiondirname(data.files[i]);
              }
          }
        }
      }
      if (dirName) {
        recursiondirname(data);
      } else {
        recursionList(data);
      }
      return result;
    },

    permute: function(arr) {

    }
  };
});
