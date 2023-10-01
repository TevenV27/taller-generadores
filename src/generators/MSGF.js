export class MSGF {
    constructor(a, x0, m) {
        this.m = m;
        this.a = a;
        this.x0 = x0;
        this.q = Math.floor(m / a)
        this.r = m % a
    }

    generateRandoms() {
        let periodicy = 0
        const listOfRandoms = []
        const seeds = []
        let xn = this.x0
        while (true) {
            xn = this.a * (xn % this.q) - this.r * Math.floor(xn / this.q)
            xn = xn >= 0 ? xn : xn + this.m
            if (xn < 0 )
            break
            if (seeds.includes(xn))
            break
            seeds.push(xn)
            listOfRandoms.push(xn / this.m)
            periodicy++
        }
        return { listOfRandoms, periodicy };
    }
}

const app = new MSGF(3, 45, 1025)
const { listOfRandoms, periodicy } = app.generateRandoms()
