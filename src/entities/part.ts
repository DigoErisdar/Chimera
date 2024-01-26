import { Body, Head, IBody, IHead } from '../model/part.ts'
import { AttrsType, IAttrsCollection } from '../model/attrs.ts'
import { HP } from './attrs.ts'

export class HeadWolf extends Head implements IHead {
    attrs: IAttrsCollection = {
        [AttrsType.hp]: new HP(10)
    }
}

export class HeadBody extends Body implements IBody {
    attrs: IAttrsCollection = {
        [AttrsType.hp]: new HP(20)
    }
}
