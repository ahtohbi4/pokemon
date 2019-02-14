import { createContext } from 'react';

import { RouterType } from '../../types';

interface RouterContextType {
    router: RouterType;
}

const initialValue: RouterContextType = {
    router: {
        location: {
            pathname: undefined,
            query: {},
        },
    },
};

const RouterContext = createContext<RouterContextType>(initialValue);

export default RouterContext;
