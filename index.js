module.exports.curry = fn => {
  return function (...arguments){
    if (arguments.length>= fn.length) return fn(...arguments)
    else{
      const partialFn = fb.bind(null,...arguments)
      return this.curry(partialFn)
    }
  }
}
