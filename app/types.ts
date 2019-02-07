// Redux store.
export interface StoreType {
    [key: string]: any,
}

// Response data state.
export interface ResponseDataType<T> {
    data: T | null,
    error: string | null,
    isLoading: boolean,
}

export type ResponseIterativeDataType<T> = ResponseDataType<{
    count: number,
    next: string,
    previous: string,
    results: Array<T>,
}>;

// Pokemon.
export interface PokemonType {
    abilities: Array<{
        ability: {
            name: string,
        },
        is_hidden: boolean,
    }>,
    height: number,
    name: string,
    sprites: {
        [key: string]: string,
    },
    weight: number,
}

// Pokemon's species.
export interface SpeciesType {
    color: {
        name: string,
    },
    name: string,
}
