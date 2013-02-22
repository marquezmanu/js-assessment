if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn.apply(this, arr);
    },

    speak : function(fn, obj) {
        return fn.call(obj);
    },

    functionFunction : function(str) {
        function concat (str2) {
            return str + ', ' + str2;
        }
        return concat;
    },

    makeClosures : function(arr, fn) {
        function closure (value) {
            var tedy = value;
            return {
                evaluate : function () {
                    return fn(tedy);
                }
            };
        }
        var myarr = [];
        for (var i = 0; i < arr.length; i++){
            var func = closure(arr[i]);
            myarr[i] = func.evaluate;
        }
        return myarr;
    },

    partial : function(fn, str1, str2) {
        return  function (add) {
                    return fn.apply(this, [str1, str2, add]);
                };
    },

    useArguments : function() {
        var result = 0;
        for (var i = 0; i < arguments.length; i++) {
            result += arguments[i];
        }
        return result;
    },

    callIt : function(fn) {
        var someargs = Array.prototype.slice.call(arguments, 1);
        fn.apply(this, someargs);
    },

    partialUsingArguments : function(fn) {
        var parentargs = Array.prototype.slice.call(arguments, 1);
        return function () {
                    var childargs = parentargs.concat(Array.prototype.slice.call(arguments));
                    return fn.apply(this, childargs);
                };
    },

    curryIt : function(fn) {
        var curry = function(a){
            var argsInt =  Array.prototype.slice.call(arguments,0);
            var innercurry = function(b){
                argsInt = argsInt.concat(Array.prototype.slice.call(arguments,0));
                if(argsInt.length < fn.length){
                    return innercurry;
                }
                else{
                    return fn.apply(null, argsInt);
                }
            };
            return innercurry;
        };
        return curry;
    }
  };
});
