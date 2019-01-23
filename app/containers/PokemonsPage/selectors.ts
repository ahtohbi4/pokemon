import { CONTAINER_ALIAS } from './constants';
import { Store } from './reducer';

export default (state: Store): Store => {
    const { [CONTAINER_ALIAS]: subState } = state;

    return subState;
};
