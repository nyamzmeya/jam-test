import { testApi } from "../common/api";

let initialState = {
  tests: [],
  errors: null,
  sets: [],
  hol_answ: [],
  usk_answ: [],
  gatb_answ: []
};

const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case "get-tests":
      return {
        ...state,
        tests: action.data,
      };
    case "set-sets":
      return {
        ...state,
        sets: [...state.sets, action.data],
      };
    case "set-hol":
      return {
        ...state,
        hol_answ: [...state.hol_answ, action.answ],
      };
    case "set-usk":
      return {
        ...state,
        usk_answ: [...state.usk_answ, action.answ],
      };
      case "set-gatb":
        return {
          ...state,
          gatb_answ: [...state.gatb_answ, action.answ],
        };
    case "errors":
      return {
        ...state,
        errors: action.errors,
      };
    case "set-progress":
      return {
        ...state,
        tests: state.tests.map((t) => {
          if (t.id === action.id) {
            console.log(t.id)
            return { ...t, progress: action.progress };
          }
          return t;
        }),
      };
    case "set-time":
      return {
        ...state,
        tests: state.tests.map((t) => {
          if (t.id === action.id) {
            return { ...t, ended_at: action.time };
          }
          return t;
        }),
      };

      case "set-status":
      return {
        ...state,
        tests: state.tests.map((t) => {
          if (t.id === action.id) {
            return { ...t, status: action.status };
          }
          return t;
        }),
      };

    default:
      return state;
  }
};

const setTests = (data) => {
  return {
    type: "get-tests",
    data: data,
  };
};

const setErrors = (errors) => {
  return {
    type: "errors",
    errors: errors,
  };
};

const setSets = (data) => {
  return {
    type: "set-sets",
    data: data,
  };
};

const setHol = (answ) => {
  return {
    type: "set-hol",
    answ: answ,
  };
};

const setUsk = (answ) => {
  return {
    type: "set-usk",
    answ: answ,
  };
};

const setGatb = (answ) => {
  return {
    type: "set-gatb",
    answ: answ,
  };
};

const setProgress = (id, progress) => {
  return {
    type: "set-progress",
    id: id,
    progress: progress,
  };
};

const setTime = (id, time) => {
  return {
    type: "set-time",
    id: id,
    time: time,
  };
};

const setStatus = (id, status) => {
  return {
    type: "set-status",
    id: id,
    status: status,
  };
};

export const getTests = (token) => async (dispatch) => {
  try {
    let responce = await testApi.getTests(token);
    responce.data.forEach(async (i) => {
      i.set = [];
      i.progress = 0;
      i.ended_at = null;
      let newRes = await testApi.getTest(i.id, token);
      for (let e of newRes.data) {
        i.set.push(e.quiz);
      }
      dispatch(setSets(newRes.data));
    });
    dispatch(setTests(responce.data));
    dispatch(setErrors([]));
  } catch (error) {
    console.log(error);
    const { response } = error;
    const { request, ...errorObject } = response;
    if (errorObject.status !== 200) {
      dispatch(setErrors(errorObject.data));
    }
  }
};

export const setHolAnswers = (id, token, body) => async (dispatch) => {
  try {
    let responce = await testApi.setHol(id, token, body);
    dispatch(setHol(body));
  } catch (error) {
    console.log(error);
  }
};

export const setUskAnswers = (id, token, body) => async (dispatch) => {
  try {
    let responce = await testApi.setUsk(id, token, body);
    dispatch(setUsk(body));
  } catch (error) {
    console.log(error);
  }
};

export const setGatbAnswers = (id, token, body) => async (dispatch) => {
  try {
    let responce = await testApi.setGatb(id, token, body);
    dispatch(setGatb(body));
  } catch (error) {
    console.log(error);
  }
};

export const setSetDone = (id, progress, time, status) => (dispatch) => {
  console.log(id, progress, time)
  dispatch(setProgress(id, progress));
  dispatch(setTime(id, time));
  dispatch(setStatus(id, status))
};

export default testReducer;
