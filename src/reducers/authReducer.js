const initalState = {
  isRegistering: false,
  isLogginIn: false,
  message: '',
  error: null
};

export const authReducer = (state = initalState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
