
module.exports = function Limiter(limit = Infinity) {
  function limiter(fn, count = 1) {
    let prev = limiter.prev.then(fn)
    limiter.prev = prev.then(() => new Promise(resolve => setTimeout(resolve, 1000 / limiter.limit * count)))
    return prev
  }

  limiter.wrap = lim => (fn, count) => limiter(() => lim(fn, count))

  limiter.prev = Promise.resolve()
  limiter.limit = limit
  return limiter
}
