import {
    PokemonType,
    ResponseDataType,
    SpeciesType,
} from '@Types';

export type PokemonResponseType = ResponseDataType<PokemonType>;

export type SpeciesResponseType = ResponseDataType<SpeciesType>;
