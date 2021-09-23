"use strict";
async function* limiter(rps) {
    while (true) {
        let count = yield;
        await new Promise(resolve => setTimeout(resolve, 1000 / rps * (count || 1)));
    }
}
const Limiter = function Limiter(rps) {
    return limiter(rps);
};
Limiter.limiter = limiter;
Limiter.default = Limiter;
module.exports = Limiter;
//# sourceMappingURL=index.js.map