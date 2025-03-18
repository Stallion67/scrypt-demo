import { assert } from 'console'
import { method, prop, SmartContract } from 'scrypt-ts'

export class Demo extends SmartContract {
    @prop()
    x: bigint
    @prop()
    y: bigint

    //Constructor
    constructor(x: bigint, y: bigint) {
        super(...arguments)
        this.x = x
        this.y = y
    }

    @method()
    add(a: bigint, b: bigint): bigint {
        return a + b
    }

    @method()
    public sum(z: bigint) {
        assert(this.add(this.x, this.y) == z, 'sum is not equal to z') //prints sum is not equal to z
    }
}
