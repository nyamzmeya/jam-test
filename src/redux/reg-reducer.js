import { regApi } from "../common/api";


let initialState = {
  isReg: false,
  errors: [],
};

const regReducer = (state = initialState, action) => {
  switch (action.type) {
    case "reg":
      return {
        ...state,
        ...action.data,
        isReg: action.isReg,
      };
    case "errors":
      return {
        ...state,
        errors: action.errors,
        isReg: action.isReg,
      };

    default:
      return state;
  }
};

const setReg = (data) => {
  return {
    type: "reg",
    data: data,
    isReg: true,
  };
};

const setErrors = (errors, status) => {
  return {
    type: "errors",
    errors: errors,
    isReg: status,
  };
};

export const Reg = (form) => async (dispatch) => {
  try {
    
    let responce = await regApi.reg(form);
    dispatch(setReg(form));
    dispatch(setErrors([], true));
  } catch (error) {
    const { response } = error;
    const { request, ...errorObject } = response;
    if (errorObject.status !== 201) {
      dispatch(setErrors(errorObject.data, false));
    }
  }
};

export default regReducer;
