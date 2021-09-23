
async function* limiter(rps: number) {
	while(true) {
		let count: number = yield
		await new Promise(resolve => setTimeout(resolve, 1000 / rps * (count || 1)))
	}
}

interface LimiterFactory {
	new(rps: number): AsyncGenerator<any, void, number>
	(rps: number): AsyncGenerator<any, void, number>
}

interface Exports extends LimiterFactory {
	limiter: typeof limiter
	default: LimiterFactory
}

const Limiter = function Limiter(rps: number) {
	return limiter(rps)
} as Exports

Limiter.limiter = limiter
Limiter.default = Limiter

export = Limiter
