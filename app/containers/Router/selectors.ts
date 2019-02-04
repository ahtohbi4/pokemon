import { StoreType as GlobalStoreType } from '@Types';

import { CONTAINER_ALIAS } from './constants';
import { StoreType } from './reducer';

export default (state: GlobalStoreType): StoreType => state[CONTAINER_ALIAS];
