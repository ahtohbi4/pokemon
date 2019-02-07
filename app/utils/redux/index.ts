interface Action<T extends string> {
    type: T,
}

interface ActionWithPayload<T extends string, P> extends Action<T> {
    payload: P,
}

interface ActionWithMeta<T extends string, P, M> extends ActionWithPayload<T, P> {
    meta: M,
}

export function createAction<T extends string>(type: T): Action<T>;
export function createAction<T extends string, P>(type: T, payload: P): ActionWithPayload<T, P>;
export function createAction<T extends string, P, M>(type: T, payload: P, meta: M): ActionWithMeta<T, P, M>;

export function createAction<T extends string, P, M>(type: T, payload?: P, meta?: M) {
    return {
        type,

        ...(meta ? { meta } : {}),
        ...(payload ? { payload } : {}),
    };
}