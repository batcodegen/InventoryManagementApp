const checkAuth = async () => {
  try {
    //code for refresh token
    // const response = await Auth.currentAuthenticatedUser();
    // const {attributes, signInUserSession} = response;
    // return {attributes, jwtToken: signInUserSession.accessToken.jwtToken};
    return {jwtToken: 'sfksjfkjs'};
    //   } catch (error) {
    //     console.log(error);
  } finally {
    console.log('inside finally');
  }
};

export {checkAuth};
