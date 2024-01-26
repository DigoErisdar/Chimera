import { Attrs, AttrsType } from '../model/attrs.ts'

export class HP extends Attrs {
    readonly type = AttrsType.hp
    readonly name = 'Здоровье'
    maximum: number

    validate(value: number): number {
        if (value < 0) value = 0
        if (value > this.maximum) value = this.maximum
        return super.validate(value)
    }
}

export class Armor extends Attrs {
    readonly type = AttrsType.armor
    readonly name = 'Броня'

    validate(value: number): number {
        if (value < 0) value = 0
        return super.validate(value)
    }
}

export class Weight extends Attrs {
    readonly type = AttrsType.weight
    readonly name = 'Вес'

    validate(value: number): number {
        if (value < 0) value = 0
        return super.validate(value)
    }
}

export class Damage extends Attrs {
    readonly type = AttrsType.damage
    readonly name = 'Урон'

    validate(value: number): number {
        if (value < 0) value = 0
        return super.validate(value)
    }
}
