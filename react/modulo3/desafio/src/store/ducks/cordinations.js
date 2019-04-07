export const Types = {
  HANDLE_CORDINATIONS: 'modal/HANDLE_CORDINATIONS',
};

const INITIAL_STATE = {
  cordinations: [],
};

export default function cordinations(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.HANDLE_CORDINATIONS:
      return { ...state, cordinations: [...state.cordinations, action.payload.data] };
    default:
      return state;
  }
}

export const Creators = {
  handleCordinations: data => ({
    type: Types.HANDLE_CORDINATIONS,
    payload: { data },
  }),
};
