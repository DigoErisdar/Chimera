import { Skeleton } from './skeleton'
import { Body, Head } from './part'

class DummyHead extends Head {}

class DummyBody extends Body {}

describe('Model Skeleton', () => {
    let skeleton
    let head = new DummyHead()
    let head2 = new DummyHead()
    let body = new DummyBody()
    beforeEach(() => (skeleton = new Skeleton()))

    test('set component', () => {
        skeleton.head = head
        expect(skeleton.head === undefined).toBeFalsy()
    })
    test('add duplicate component', () => {
        skeleton.head = head
        skeleton.head = head2
        expect(skeleton.head === head2).toBeTruthy()
    })

    test('add other type', () => {
        skeleton.head = body
        expect(skeleton.head).toBeUndefined()
        expect(skeleton.body).toBeUndefined()
    })
})
