export const Types = {
  CLICK_MODAL: 'modal/CLICK_MODAL',
  CLOSE_MODAL: 'modal/CLOSE_MODAL',
};

const INITIAL_STATE = {
  openModal: false,
  inputRepo: '',
  cordinations: null,
};

export default function modal(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.CLICK_MODAL:
      return {
        ...state,
        openModal: true,
        cordinations: action.payload.data,
      };
    case Types.CLOSE_MODAL:
      return { ...state, openModal: false };
    default:
      return state;
  }
}

export const Creators = {
  clickModal: data => ({
    type: Types.CLICK_MODAL,
    payload: { data },
  }),

  closeModal: () => ({ type: Types.CLOSE_MODAL }),
};
