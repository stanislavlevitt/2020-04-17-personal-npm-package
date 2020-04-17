let curry = require("../")
let a = require("assert")

describe('curry', function(){

  it('should curry in the haskell sense, taking the arity from the function', function(){
      const add = function(a,b) => {a+b};
      const curryAdd = curry(add);
      a.equal(add(1, 2), curryAdd((1)(2));
  });
