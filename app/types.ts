export interface StoreType {
    [key: string]: any,
}

export interface RequestedDataType {
    data: any,
    error: string|null,
    isLoading: boolean,
}

export interface PokemonType {
    name: string,
}

export type PokemonsListType = Array<PokemonType>;

export interface SpeciesType {}

export type SpeciesListType = Array<SpeciesType>;
