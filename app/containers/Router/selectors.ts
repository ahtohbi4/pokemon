import { CONTAINER_ALIAS } from './constants';
import { StoreType } from './reducer';

export default (state): StoreType => state[CONTAINER_ALIAS];
