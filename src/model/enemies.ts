import { Skeleton } from './skeleton.ts'
import { AttrsType } from './attrs.ts'
import { ComponentType } from 'src/model/part.ts'

export interface IEnemy {
    skeleton: Skeleton
    readonly name: string
    readonly description?: string

    getAttrs(componentTypes: ComponentType[]): Record<AttrsType, number>

    wound(damage: number, target: ComponentType): void
}

export abstract class Enemy implements IEnemy {
    skeleton: Skeleton = new Skeleton()
    abstract readonly name: string

    getAttrs(
        componentTypes: ComponentType[] = Object.values(ComponentType)
    ): Record<AttrsType, number> {
        return componentTypes.reduce((acc: any, type) => {
            Object.values(this.skeleton[type].attrs).forEach((attr) => {
                let oldValue = acc[attr.type]
                if (oldValue) oldValue += attr.value
                else oldValue = attr.value
                acc[attr.type] = oldValue
            })
            return acc
        }, {} as Record<AttrsType, number>)
    }

    /* Получение урона */
    wound(damage: number, target: ComponentType): void {
        if (damage <= 0) return

        const part = this.skeleton[target]
        const remainingDamage = (part.attrs.armor?.value || 0) - damage

        part.attrs.armor.value -= damage
        part.attrs.hp.value += remainingDamage
    }
}
