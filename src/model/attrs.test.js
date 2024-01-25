import { Attrs } from './attrs'

class DummyAttrs extends Attrs {}

describe('Model Attrs', () => {
    let attrs
    beforeEach(() => (attrs = new DummyAttrs()))

    test('add value', () => {
        attrs.value += 10
        expect(attrs.value).toBe(10)
    })

    test('minus value', () => {
        attrs.value -= 100
        expect(attrs.value).toBe(-100)
    })
    test('value set not number', () => {
        attrs.value = 'test'
        expect(attrs.value).toBe(0)
        attrs.value = null
        expect(attrs.value).toBe(0)
        attrs.value = undefined
        expect(attrs.value).toBe(0)
    })
})
