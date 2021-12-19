const Axios = require("axios");

const instance = Axios.create({
  baseURL: "https://api.jamskills.ml/api/",
});

export const authApi = {
  login(email, password) {
    return instance.post("/testingusers/login", { email, password });
  },
};

export const regApi = {
  reg(data) {
    return instance.post("/testingusers/registration", { ...data });
  },
};

export const testApi = {
  getTests(token) {
    return instance.get("/testingusers/setquizzes", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  getTest(id, token) {
    return instance.get(`/testingusers/setquizzes/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  setHol(id, token, body) {
    return instance.post(`/testingusers/setquizzes/${id}/hol/answers`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  setUsk(id, token, body) {
    return instance.post(`/testingusers/setquizzes/${id}/usk/answers`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  setGatb(id, token, body) {
    return instance.post(
      `/testingusers/setquizzes/${id}/gatb_5/answers`,
      body,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  },
};
