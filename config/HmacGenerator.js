const crypto= require('crypto');

class HmacGenerator {
    constructor() {
        this.key = this.GenerateKey();
    }
    
    GenerateKey() {
        this.key = crypto.randomBytes(32).toString('hex');
        return this.key;
    }

    GenerateHmac(message) {
        if (!this.key) {
            console.error('Game: HMAC key has not been generated!');
        }
        
        return crypto.createHmac('sha3-256', this.key).update(message).digest('hex');
    }

    GetKey() {
        return this.key.toString();
    }
}


module.exports = HmacGenerator;