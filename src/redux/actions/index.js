export const updateUser = (payload) => {
  return {
    type: "UPDATE_USER",
    payload: payload,
  };
};

export const logoutUser = () => {
  return {
    type: "LOGOUT_USER",
  };
};
