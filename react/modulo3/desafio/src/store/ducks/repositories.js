import { toast } from 'react-toastify';

export const Types = {
  GET_REQUEST: 'repositories/GET_REQUEST',
  GET_SUCCESS: 'repositories/GET_SUCCESS',
  REMOVE: 'repositories/REMOVE',
};

const INITIAL_STATE = {
  data: [],
  input: '',
};

export default function repositories(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return {
        ...state,
      };
    case Types.GET_SUCCESS:
      return {
        ...state,
        loading: false,
        data: [...state.data, action.payload.data],
        // user: [...state.users, action.payload.users],
      };
    case Types.REMOVE:
      toast.error('Usuário removido !', {
        position: toast.POSITION.TOP_RIGHT,
      });
      return { ...state, data: state.data.filter(user => user.id !== action.payload.id) };
    default:
      return state;
  }
}

export const Creators = {
  getRepositoriesRequest: (data, cordinations) => ({
    type: Types.GET_REQUEST,
    payload: { data, cordinations },
  }),

  getRepositoriesSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),
  removeRepositories: id => ({
    type: Types.REMOVE,
    payload: { id },
  }),
};
