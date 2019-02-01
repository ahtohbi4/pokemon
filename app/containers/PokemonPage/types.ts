import {
    PokemonType,
    RequestedDataType,
    SpeciesType,
} from '@Types';

export interface PokemonRequestType extends RequestedDataType {
    data: PokemonType|null,
}

export interface SpeciesRequestType extends RequestedDataType {
    data: SpeciesType|null,
}
