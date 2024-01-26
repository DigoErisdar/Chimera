import { Enemy } from './enemies'
import { Body, Head } from './part'
import { AttrsType } from './attrs'
import { HP } from '../entities/attrs'

class Dummy extends Enemy {}

class DummyHead extends Head {
    attrs = {
        [AttrsType.hp]: new HP(10)
    }
}

class DummyBody extends Body {
    attrs = {
        [AttrsType.hp]: new HP(20)
    }
}

describe('Model Enemies', () => {
    test('get attrs', () => {
        const enemy = new Dummy()
        enemy.skeleton.head = new DummyHead()
        enemy.skeleton.body = new DummyBody()
        expect(enemy.getAttrs()?.hp.value).toBe(30)
    })
})
