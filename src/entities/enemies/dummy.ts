import { Body, Head, IBody, IHead } from 'src/model/part.ts'
import { AttrsType, IAttrsCollection } from 'src/model/attrs.ts'
import { Armor, HP } from 'src/entities/attrs.ts'
import { Enemy, IEnemy } from 'src/model/enemies.ts'

export class HeadDummy extends Head implements IHead {
    attrs: IAttrsCollection = {
        [AttrsType.hp]: new HP(10),
        [AttrsType.armor]: new Armor(10)
    }
}

export class BodyDummy extends Body implements IBody {
    attrs: IAttrsCollection = {
        [AttrsType.hp]: new HP(20),
        [AttrsType.armor]: new Armor(5)
    }
}

export class Dummy extends Enemy implements IEnemy {
    name = 'Пустышка'
    description = 'Используется для тестирования'

    constructor() {
        super()
        this.skeleton.head = new HeadDummy()
        this.skeleton.body = new BodyDummy()
    }
}
