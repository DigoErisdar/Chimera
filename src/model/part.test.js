import { ComponentType, Head } from './part'

class DummyHead extends Head {}

class NewDummyHead extends DummyHead {}

describe('Model Attrs', () => {
    test('check type', () => {
        expect(DummyHead.type).toBe(Head.type)
        expect(DummyHead.type).toBe(ComponentType.Head)
        expect(DummyHead.type === undefined).toBeFalsy()
    })
    test('check type with inherit', () => {
        expect(NewDummyHead.type).toBe(Head.type)
        expect(NewDummyHead.type).toBe(ComponentType.Head)
    })
    test('check type on instance', () => {
        expect(new NewDummyHead().constructor.type).toBe(ComponentType.Head)
    })
})
