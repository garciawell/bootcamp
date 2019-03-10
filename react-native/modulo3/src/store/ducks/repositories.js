/**
 * Actions TYPES
 */

export const Types = {
  LOAD_REQUEST: 'LOAD_REPOSITORIES_REQUEST',
  LOAD_SUCCESS: 'LOAD_REPOSITORIES_SUCCESS',
  LOAD_FAILURE: 'LOAD_REPOSITORIES_FAILURE',
};

/*
  REDUCERS
*/
const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
};

export default function repositories(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LOAD_REPOSITORIES_REQUEST':
      return { ...state, loading: true };
    case 'LOAD_REPOSITORIES_SUCCESS':
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        error: false,
      };
    case 'LOAD_REPOSITORIES_FAILURE':
      return { ...state, error: true, loading: false };
    default:
      return state;
  }
}

/**
 * Actions
 */
export const Creators = {
  loadRepositoriesRequest: () => ({
    type: Types.LOAD_REQUEST,
  }),

  loadRepositoriesSuccess: data => ({
    type: Types.LOAD_SUCCESS,
    payload: { data },
  }),

  loadRepositoriesFailure: () => ({
    type: Types.LOAD_FAILURE,
  }),
};
