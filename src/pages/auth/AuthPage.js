import { connect } from "react-redux";
import "./auth.css";
import AuthForm from "./Form";
import { Login } from "../../redux/auth-reducer";
import img from "./Rectangle 1.svg";
import { Link, Navigate } from "react-router-dom";


const AuthPage = (props) => {

  if (props.isAuth) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="wrapper">
      <div className="sider">
        <div className='sider-content'>
          <img src={img} />
          <div className="first">Добро Пожаловать!</div>
          <div className="second">
            Jamskills - это сервис для автоматизации оценки сотрудников и
            кандидатов!{" "}
          </div>
          <div className="third">
            Если Вы еще не зарегистрированны, создайте свой кабинет
          </div>
          <button className='btn'>
            <Link to="/">Создать</Link>
          </button>
        </div>
      </div>
      <div className="main">
        <div className="form">
          <div className="text">Авторизация</div>
          <AuthForm handleSubmit={props.Login} errors={props.errors} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { isAuth: state.authPage.isAuth, errors: state.authPage.errors };
};

export default connect(mapStateToProps, { Login })(AuthPage);
