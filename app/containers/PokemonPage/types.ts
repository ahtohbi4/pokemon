import {
    PokemonType,
    RequestedDataType,
    SpeciesListType,
} from '@Types';

export interface PokemonRequestType extends RequestedDataType {
    data: PokemonType|null,
}

export interface SpeciesListRequestType extends RequestedDataType {
    data: SpeciesListType|null,
}
