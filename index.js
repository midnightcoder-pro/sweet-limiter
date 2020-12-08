
module.exports = class Limiter {
  prev = Promise.resolve()

  constructor(limit = Infinity) {
    this.limit = limit
  }

  next(fn, count = 1) {
    let prev = this.prev.then(fn)
    this.prev = prev.then(() => new Promise(resolve => setTimeout(resolve, 1000 / this.limit * count)))
    return prev
  }

  wrap(limiter) {
    let prevNext = limiter.next
    limiter.next = (fn, count) => this.next(prevNext.bind(limiter, fn, count))

    return limiter
  }
}
