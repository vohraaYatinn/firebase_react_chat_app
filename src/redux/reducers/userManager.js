const initialState = {};
const changeTheUser = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_USER":
      return { ...state, initialState: action.payload };
      state = action.payload;
      break;
    case "LOGOUT_USER":
      return { ...state, initialState: action.payload };
      state = {};
      break;
    default:
      return state;
  }
};
export default changeTheUser;
