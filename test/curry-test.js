let curry = require("../")
let a = require("assert")

describe('curry', function(){

  it('should curry in the haskell sense, taking the arity from the function', function(){
      const add = (a,b) => a + b
      const curryAdd = curry(add);
      a.equal(add(1, 2), curryAdd(1)(2));
  });

  it('can handle multiple parameters', function(){
    const add = (a,b,c,d,e) => a + b + c +d + e
    const curryAdd = curry(add);
    a.equal(add(1, 2,3,4,5), curryAdd(1)(2)(3)(4)(5));
});
})
