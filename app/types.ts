export interface StoreType {
    [key: string]: any,
}

export interface RequestedDataType {
    data: any,
    error: string|null,
    isLoading: boolean,
}

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

export type PokemonsListType = Array<PokemonType>;

export interface SpeciesType {
    color: {
        name: string,
    },
    name: string,
}
