import { Attrs, AttrsType } from '../model/attrs.ts'

export class HP extends Attrs {
    readonly type = AttrsType.hp
    readonly name = 'Здоровье'

    constructor(defaultValue: number = 0) {
        super()
        this.value = defaultValue
    }

    validate(value: number): number {
        if (value < 0) value = 0
        return super.validate(value)
    }
}
