export enum ComponentType {
    Head = 'head',
    Body = 'body'
}

export interface IPart {
    type: ComponentType
}

export type IHead = IPart

export abstract class Part implements IPart {
    abstract readonly type: ComponentType
}

export abstract class Head extends Part implements IHead {
    static get type(): ComponentType {
        return ComponentType.Head
    }
}

export type IBody = IPart

export abstract class Body extends Part implements IBody {
    static get type(): ComponentType {
        return ComponentType.Body
    }
}

export type IStructure = Record<ComponentType, IPart>
