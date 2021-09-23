declare function limiter(rps: number): AsyncGenerator<undefined, void, number>;
interface LimiterFactory {
    new (rps: number): AsyncGenerator<any, void, number>;
    (rps: number): AsyncGenerator<any, void, number>;
}
interface Exports extends LimiterFactory {
    limiter: typeof limiter;
    default: LimiterFactory;
}
declare const Limiter: Exports;
export = Limiter;
