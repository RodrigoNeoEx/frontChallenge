type CacheState = Record<string, any>;

type CacheAction =
    | { type: 'ADD_SUCCESS'; cep: string; data: any }
    | { type: 'ADD_ERROR'; cep: string; error: string }
    | { type: 'CLEAR' };

export function cacheReducer(state: CacheState, action: CacheAction): CacheState {
    switch (action.type) {
        case 'ADD_SUCCESS':
            return { ...state, [action.cep]: action.data };
        case 'ADD_ERROR':
            return { ...state, [action.cep]: { erro: action.error } };
        case 'CLEAR':
            return {};
        default:
            return state;
    }
}
