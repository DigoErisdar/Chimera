import { ComponentType, Head } from './part'

class DummyHead extends Head {}

describe('Model Attrs', () => {
    test('check type', () => {
        expect(DummyHead.type).toBe(Head.type)
        expect(DummyHead.type).toBe(ComponentType.Head)
        expect(DummyHead.type === undefined).toBeFalsy()
    })
})
