export class MSG {
    constructor(a, x0, m) {
        this.m = m;
        this.a = a;
        this.x0 = x0;
    }

    generateRandoms() {
        let periodicy = 0
        const listOfRandoms = []
        const seeds = []
        let xn = this.x0
        while (true) {
            xn = (this.a * xn) % this.m
            if (seeds.includes(xn)) {
                break
            }
            seeds.push(xn)
            listOfRandoms.push(xn / this.m)
            periodicy++
        }
        return { listOfRandoms, periodicy };
    }
}