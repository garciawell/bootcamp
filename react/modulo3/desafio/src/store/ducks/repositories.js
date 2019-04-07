export const Types = {
  GET_REQUEST: 'repositories/GET_REQUEST',
  GET_SUCCESS: 'repositories/GET_SUCCESS',
};

const INITIAL_STATE = {
  data: [],
  input: '',
};

export default function repositories(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, input: action.payload.data };
    case Types.GET_SUCCESS:
      return { ...state, loading: false, data: [...state.data, action.payload.data] };
    default:
      return state;
  }
}

export const Creators = {
  getRepositoriesRequest: data => ({
    type: Types.GET_REQUEST,
    payload: { data },
  }),

  getRepositoriesSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),
};
