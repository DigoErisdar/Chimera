import { IAttrsCollection } from '@/model/attrs.ts'

export enum ComponentType {
    Head = 'head',
    Body = 'body'
}

export interface IPart {
    type: ComponentType
    attrs: IAttrsCollection
}

export type IHead = IPart

export abstract class Part implements IPart {
    readonly type: ComponentType
    readonly attrs: IAttrsCollection
}

export abstract class Head extends Part implements IHead {
    public static get type(): ComponentType {
        return ComponentType.Head
    }
}

export type IBody = IPart

export abstract class Body extends Part implements IBody {
    public static get type(): ComponentType {
        return ComponentType.Body
    }
}

export type IStructure = Record<ComponentType, IPart>
