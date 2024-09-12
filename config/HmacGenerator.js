class HmacGenerator {
    constructor() {
        this.key = crypto.randomBytes(32).toString('hex');
    }

    Generate(message) {
        return crypto.createHmac('sha3-256', this.key).update(message).digest('hex');
    }

    GetHmac() {
        return this.key;
    }
}

module.exports = HmacGenerator;