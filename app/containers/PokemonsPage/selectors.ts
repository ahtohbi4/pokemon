import { CONTAINER_ALIAS } from './constants';
import { Store } from './reducer';

export default (state): Store => state[CONTAINER_ALIAS];
