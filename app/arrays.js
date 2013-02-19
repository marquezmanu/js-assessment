if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
      for (var i = 0; i < arr.length ; i++){
        if (arr[i] === item){
          return i;
        }
      }
      return -1;
    },

    sum : function(arr) {
      var sum = 0;
      for (var i=0; i < arr.length ; i++){
        sum += arr[i];
      }
      return sum;
    },

    remove : function(arr, item) {
      var newarr = [];
      for (var i = 0; i < arr.length; i++ ) {
        if (arr[i] !== item) {
          newarr.push(arr[i]);
        }
      }
      return newarr;
    },

    removeWithoutCopy : function(arr, item) {
      for (var i = arr.length - 1; i >= 0 ; i--){
        if (arr[i] === item) {
          arr.splice(i,1);
        }
      }
      return arr;
    },

    append : function(arr, item) {
      arr.push(item);
      return arr;
    },

    truncate : function(arr) {
      arr.pop();
      return arr;
    },

    concat : function(arr1, arr2) {
      var result = arr1.concat(arr2);
      return result;
    },

    insert : function(arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
    },

    count : function(arr, item) {
      var counter = 0;
      for (var i = 0; i < arr.length ; i++){
        if (arr[i] === item){
            counter++;
        }
      }
      return counter;
    },

    duplicates : function(arr) {
      var result = [];
      for (var i = 0; i < arr.length; i++){
        for(var j = i+1 ; j < arr.length; j++){
          if (arr[i] === arr[j]){
            result.push(arr[i]);
          }
        }
      }
      return result;
    },

    square : function(arr) {
      var result = [];
      for (var i = 0; i < arr.length; i++){
        var square = 0;
        square = arr[i] * arr[i];
        result.push(square);
      }
      return result;
    },

    findAllOccurrences : function(arr, target) {
      var result = [];
      for (var i = 0; i < arr.length; i++){
        if (arr[i] === target) {
            result.push(i);
        }
      }
      return result;
    }
  };
});
