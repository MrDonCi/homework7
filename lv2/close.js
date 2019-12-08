function _throttle(fn, delay) {
    var canRun = true;
    return function() {
      if (!canRun) {
        return false;
      }
      canRun = false;
      fn.apply(this, Array.from(arguments));
      setTimeout(() => {
        canRun = true;
      }, delay);
    };
  }
  function _deBounce(fn, delay) {
    var timer = null;
    return function() {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.call(this, ...arguments);
      }, delay);
    };
  }
  var object = {
    a: 666,
  };
  var fn = function(num) {
    console.log(this.a);
    console.log(num);
  };
   
  var process_fun = _deBounce(fn, 200);
  var timer = setInterval(() => process_fun.call(object, 1), 10);
  setTimeout(() => {
    clearTimeout(timer);
  }, 2000);
  process_fun();