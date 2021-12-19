import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthPage from "./pages/auth/AuthPage";
import store from "./redux/redux-store";
import "antd/dist/antd.css";
import "./App.css";
import RegPage from "./pages/registration/RegPage";
import Home from "./pages/home/Home";
import Hol from "./pages/tests/hol/Hol";
import Usk from "./pages/tests/usk/Usk";
import Gatb from "./pages/tests/gatb/Gatb";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<RegPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/home" element={<Home />} />
            <Route path=":test/hol/:ques" element={<Hol />} />
            <Route path=":test/usk/:ques" element={<Usk />} />
            <Route path=":test/gatb-5/:ques" element={<Gatb />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    );
  }
}

window.store = store;

export default App;
