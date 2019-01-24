export interface Route {
    pathname: string|undefined,
    query: object,
}

export interface Router {
    location: Route,
}
