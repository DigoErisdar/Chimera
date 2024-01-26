export enum AttrsType {
    hp = 'hp'
}

export type IAttrsCollection = {
    [A in AttrsType]: Attrs
}

interface IAttrs {
    readonly type: AttrsType
    readonly name: string
    readonly description?: string
    value: number
    validate: (value: number) => number
}

export abstract class Attrs implements IAttrs {
    abstract readonly type: AttrsType
    abstract readonly name: string
    #value = 0
    set value(newValue: number) {
        try {
            this.#value = this.validate(newValue)
        } catch (e) {}
    }

    get value() {
        return this.#value
    }

    validate(value: number) {
        if (typeof value !== 'number') throw Error('Значение должно быть числовым')
        return value
    }
}
