import { Enemy } from './enemies'
import { Body, ComponentType, Head } from './part'
import { AttrsType } from './attrs'
import { HP } from 'src/entities/attrs'

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
        expect(enemy.getAttrs()?.hp).toBe(30)
        expect(enemy.getAttrs()?.hp).toBe(30)
        expect(enemy.getAttrs([ComponentType.Body])?.hp).toBe(20)
        expect(enemy.getAttrs([ComponentType.Body])?.hp).toBe(20)
    })
})
