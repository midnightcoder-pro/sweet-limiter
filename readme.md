
# sweet-limiter
Promise-based limiter

### Usage example
```js
import Limiter from 'sweet-limiter'
let limiter = new Limiter(30) // 30 rps

async function chat1() {
	for(let i = 1; i <= 100; i++) {
		await limiter.next()
		await fakeRPC(100, `chat 1: ${i}`)
	}
}

async function chat2() {
	for(let i = 1; i <= 100; i++) {
		await limiter.next(10) // in example sendMediaGroup with 10 media
		await fakeRPC(1000, `chat 2: ${i}`)
	}
}

chat1()
chat2()

function fakeRPC(timeout, message) {
	console.log(message)
	return new Promise(resolve => setTimeout(resolve, timeout))
}
```
