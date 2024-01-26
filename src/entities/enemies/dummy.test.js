import { BodyDummy, Dummy, HeadDummy } from './dummy.ts'
import { Body, ComponentType, Head } from 'src/model/part.ts'

describe('Entities enemy Dummy', () => {
    let enemy
    beforeEach(() => (enemy = new Dummy()))

    test('set components', () => {
        expect(enemy.skeleton.head instanceof Head).toBeTruthy()
        expect(enemy.skeleton.head instanceof HeadDummy).toBeTruthy()
        expect(enemy.skeleton.body instanceof Body).toBeTruthy()
        expect(enemy.skeleton.body instanceof BodyDummy).toBeTruthy()
    })

    test('Take damage', () => {
        const target = ComponentType.Body
        const part = enemy.skeleton[target]

        expect(part.attrs.armor.value).toBe(5)
        expect(part.attrs.hp.value).toBe(20)

        enemy.wound(10, target)

        expect(enemy.skeleton.body.attrs.armor.value).toBe(0)
        expect(enemy.skeleton.body.attrs.hp.value).toBe(15)
    })

    test('take negative damage', () => {
        const getValue = () => {
            const attrs = enemy.getAttrs([ComponentType.Body])
            return attrs.armor + attrs.hp
        }
        const oldValue = getValue()
        enemy.wound(-1000, ComponentType.Body)
        expect(getValue()).toBe(oldValue)
    })
})
