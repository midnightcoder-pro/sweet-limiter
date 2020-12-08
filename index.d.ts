
export default class Limiter {
	prev: Promise<any>
	limit: number
	constructor(limit: number)
	wrap(limiter: Limiter): Limiter
}
