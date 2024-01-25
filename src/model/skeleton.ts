import { Body, ComponentType, Head, IBody, IHead, IPart, IStructure } from '../model/part.ts'

interface ISkeleton {
    components: IStructure
}

export class Skeleton implements ISkeleton {
    components: IStructure = {
        [ComponentType.Head]: undefined,
        [ComponentType.Body]: undefined
    }

    private setComponent(component: IPart): void {
        this.components[component.type] = component
    }

    //TODO: Попробовать использовать defineProperty
    get head() {
        return this.components[ComponentType.Head]
    }

    set head(component: IHead) {
        if (component instanceof Head) this.setComponent(component)
    }

    get body() {
        return this.components[ComponentType.Body]
    }

    set body(component: IBody) {
        if (component instanceof Body) this.setComponent(component)
    }
}
