import { Layout } from "antd";
import logo from "./Rectangle 1.svg";
import avatar from "./default.svg";
import vector from "./Vector (4).svg";
import home from "./home.svg";
import img1 from "./img1.svg";
import img2 from "./img2.svg";
import "./Home.css";
import Status from "./Status";
import Tests from "./Tests";


const { Header, Sider, Content } = Layout;

const Wrapper = (props) => {
  return (
    <Layout>
      <Header
        style={{
          background: "#FAFAFA",
          boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.08)",
        }}
        className="header"
      >
        <div className="logo">
          <img src={logo} style={{ marginRight: "16px" }} />
          <div>Jamskills</div>
        </div>

        <div className="avatar">
          <div>{props.email || localStorage.getItem("email")}</div>
          <img src={avatar} style={{ marginLeft: "8px" }} />
        </div>
      </Header>
      <Layout>
        <Sider
          width={304}
          style={{
            minHeight: "100vh",
            background: "#FAFAFA",
            boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.15",
          }}
          className="sider"
        >
          <div className="sider_f">
            <img src={home} style={{ marginRight: "16px" }} />
            <div>Домашняя страница</div>
          </div>

          <div className="sider_s">
            <div className="set">Настройки</div>
            <div>
              <img
                src={img1}
                style={{ marginRight: "16px", marginBottom: "16px" }}
              />
              <span>Профиль</span>
            </div>

            <div>
              <img src={img2} style={{ marginRight: "16px" }} />
              <span>Выход</span>
            </div>
          </div>
        </Sider>
        <Content>
          <div className="header_s">
            <div>Домашняя страница</div>
            <div>Домашняя страница</div>
            <img src={vector} />
          </div>

          <Content style={{padding: '47px 65px'}}>
            <Status tests={props.tests} />
            <Tests/>
            
          </Content>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Wrapper;
