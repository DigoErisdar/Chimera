import { HP } from './attrs'

describe('Entities Attrs', () => {
    describe('HP', () => {
        test('value less 0', () => {
            const hp = new HP(0)
            hp.value -= 10
            expect(hp.value).toBe(0)
        })
        test('value with defaultValue', () => {
            const hp = new HP(100)
            hp.value -= 10
            expect(hp.value).toBe(90)
        })
    })
})
