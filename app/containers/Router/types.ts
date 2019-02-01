export interface RouteType {
    pathname: string|undefined,
    query: {
        [key: string]: string,
    },
}

export interface RouterType {
    location: RouteType,
}
