import { Skeleton } from './skeleton.ts'
import { IAttrsCollection } from './attrs.ts'

export interface IEnemy {
    skeleton: Skeleton
    getAttrs: () => IAttrsCollection | any
}

export abstract class Enemy implements IEnemy {
    skeleton: Skeleton = new Skeleton()

    getAttrs() {
        const setAttr = (allAttrs: IAttrsCollection, attr: IAttrsCollection): IAttrsCollection => {
            //TODO: при разделении на левый и правые части тела, возможно, тут нужно будет поменять на entries
            Object.values(attr).forEach((value) => {
                let oldValue = allAttrs[value.type]
                if (oldValue) oldValue.value += value.value
                else oldValue = value
                allAttrs[oldValue.type] = oldValue
            })
            return allAttrs
        }
        return Object.values(this.skeleton.getAttrs()).reduce(setAttr, {} as IAttrsCollection)
    }
}
