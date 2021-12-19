import { authApi } from "../common/api";

let initialState = {
  isAuth: false,
  email: null,
  errors: [],
  token: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "auth":
      return {
        ...state,
        ...action.data,
        isAuth: action.isAuth,
      };
    case "errors":
      return {
        ...state,
        errors: action.errors,
        isAuth: action.isAuth
      };

    default:
      return state;
  }
};

const setAuth = (email, token, status) => {
  return {
    type: "auth",
    data: { email, token },
    isAuth: status,
  };
};

const setErrors = (errors, status) => {
  return {
    type: "errors",
    errors: errors,
    isAuth: status
  };
};

export const Login = (form) => async (dispatch) => {
  try {
    let responce = await authApi.login(form.email, form.password);
    dispatch(setAuth(form.email, responce.data.token));
    localStorage.setItem('token', responce.data.token)
    localStorage.setItem('email', form.email)
    dispatch(setErrors([], true));
  } catch (error) {
    const { response } = error;
    const { request, ...errorObject } = response;
    if (errorObject.status !== 200) {
      dispatch(setErrors(errorObject.data, false));
    }
    console.log(error)
  }
};

export default authReducer;
