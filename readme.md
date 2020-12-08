
# sweet-limiter
Promise-based limiter

### Basic usage example
```js
import Limiter from 'sweet-limiter'
let limiter = new Limiter(5) // 5 rps

for(let i = 0; i < 100; i++) {
	await limiter.next()
	console.log(i) // fake api requests
}
```

### Advanced example (avoid telegram limits)
```js
let mainLimiter = new Limiter(30) // 30 rps
let chatLimiter = mainLimiter.wrap(new Limiter(1)) // 1 rps

for(let i = 0; i < 100; i++) {
	await chatLimiter.next(() => {/*5 requests in row, useful for tg sendMediaGroup*/}, 5)
	console.log(i) // fake api requests
}
```


