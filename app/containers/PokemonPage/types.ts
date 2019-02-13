import {
    PokemonType,
    SpeciesType,
    StoredResponseDataType,
} from '@Types';

export type StoredPokemonDataType = StoredResponseDataType<PokemonType>;

export type StoredSpeciesDataType = StoredResponseDataType<SpeciesType>;
