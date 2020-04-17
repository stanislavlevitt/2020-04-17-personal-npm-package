const curry = fn => {
  return function (...arg){
    if (arg.length>= fn.length) return fn(...arg)
    else{
      const partialFn = fn.bind(null,...arg)
      return curry(partialFn)
    }
  }
}

module.exports = curry
