import { connect } from "react-redux";
import { Link, Navigate} from "react-router-dom";
import "../auth/auth.css";
import img from "../auth/Rectangle 1.svg";
import RegForm from "./RegForm";
import { Reg } from "../../redux/reg-reducer";
import React from "react";

const RegPage = (props) => {
  if (props.isReg) {
    return <Navigate to="/auth" />;
  }
  return (
    <div className="wrapper">
      <div className="sider">
        <div className="sider-content">
          <img src={img} />
          <div className="first">Добро Пожаловать!</div>
          <div className="second">
            Jamskills - это сервис для автоматизации оценки сотрудников и
            кандидатов!{" "}
          </div>
          <div className="third">
            Если Вы уже зарегистрированны, войдите в свой кабинет
          </div>
          <button className="btn">
            <Link to="/auth">Войти</Link>
          </button>
        </div>
      </div>
      <div className="main">
        <div className="form">
          <div className="text">Регистрация</div>
          <RegForm handleSubmit={props.Reg} errors={props.errors} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { isReg: state.regPage.isReg, errors: state.regPage.errors };
};

export default connect(mapStateToProps, { Reg})(RegPage);
