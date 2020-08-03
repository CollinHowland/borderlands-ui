export class RouteName {
    public readonly base = 'builderlands'
    public readonly homePart = 'home'

    public get home(): string {
        return this.base + '.' + this.homePart
    }
}

export const routeNames: RouteName = new RouteName()