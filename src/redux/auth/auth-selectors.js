export const getIsLoggedIn = (state) => state.auth.isLoggedIn;
export const getUsername = (state) => state.auth.user.name;
export const getFetchCurrentUser = (state) => state.auth.isFetchCurrentUser;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getFetchCurrentUser,
};

export default authSelectors;
