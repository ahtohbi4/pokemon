import {
    PokemonsListType,
    RequestedDataType,
} from '@Types';

export interface PokemonsListRequestType extends RequestedDataType {
    data: PokemonsListType|null,
}
