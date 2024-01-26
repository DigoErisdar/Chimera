import { HeadWolf } from './part'

describe('Entities part', () => {
    test('check attrs on part', () => {
        const head = new HeadWolf()
        expect(head.attrs.hp.value).toBe(10)
    })
})
