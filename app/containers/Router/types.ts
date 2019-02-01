export interface RouteType {
    pathname: string|undefined,
    query: object,
}

export interface RouterType {
    location: RouteType,
}
