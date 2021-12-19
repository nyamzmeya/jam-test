import { Button, Input, Form, Checkbox } from "antd";

import email from "../auth/Email.svg";
import lock from "../auth/Lock.svg";
import man from "./Man.svg";

const RegForm = (props) => {
  const Finish = (values) => {
    let data = Object.fromEntries(
      Object.entries(values).filter(
        ([key]) => key !== "agreement" && key !== "confirm"
      )
    );

    props.handleSubmit(data);
  };

  return (
    <Form name="basic" onFinish={Finish}>
      <Form.Item
        label={<img src={man} />}
        style={{ height: "auto", marginBottom: "32px", width: '100%' }}
      >
        <Input.Group>
          <Form.Item
            name="last_name"
            noStyle
            style={{width: '100%'}}
            rules={[{ required: true, message: "Last name is required" }]}
          >
            <Input
              style={{ width: "100%", height: "56px", marginBottom: "8px" }}
              placeholder="Фамилия"
            />
          </Form.Item>
          <Form.Item
            name="first_name"
            noStyle
            rules={[{ required: true, message: "First name is required" }]}
          >
            <Input style={{ width: "38%", height: "56px" }} placeholder="Имя" />
          </Form.Item>
          <Form.Item
            name="patronymic"
            noStyle
            rules={[{ required: true, message: "Patronymic is required" }]}
          >
            <Input
              style={{ width: "60%", height: "56px", float: "right" }}
              placeholder="Отчество"
            />
          </Form.Item>
        </Input.Group>
      </Form.Item>

      <Form.Item
        style={{ marginBottom: "32px", height: "auto", width: '100%'}}
        label={<img src={email} />}
        name="email"
        validateStatus={props.errors.email ? "error" : "validating"}
        help={props.errors.email ? props.errors.email : ""}
        rules={[
          {
            type: "email",
            required: true,
            message: "Email is required",
          },
        ]}
      >
        <Input placeholder="example@mail.com" style={{ height: "56px" }} />
      </Form.Item>

      <Form.Item
        label={<img src={lock} />}
        style={{ height: "auto", marginBottom: "8px" , width: '100%'}}
      >
        <Input.Group style={{ height: "auto" }}>
          <Form.Item
            hasFeedback
            style={{ height: "auto", marginBottom: "8px" , width: '100%'}}
            name="password"
            validateStatus={props.errors.password ? "error" : "validating"}
            help={props.errors.password ? props.errors.password : ""}
          >
            <Input.Password style={{ height: "56px" }} />
          </Form.Item>
          <Form.Item
            hasFeedback
            style={{ height: "auto", marginBottom: "0px", width: '100%' }}
            dependencies={["password"]}
            name="confirm"
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    "The two passwords that you entered do not match!"
                  );
                },
              }),
            ]}
          >
            <Input.Password style={{ height: "56px" }} />
          </Form.Item>
        </Input.Group>
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        style={{ marginLeft: "62px", width: '100%' }}
        rules={[
          {
            required: true,
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(new Error("Should accept agreement")),
          },
        ]}
      >
        <Checkbox>
          Принимаю{" "}
          <a href="">
            Пользовательское соглашение и Политику конфиденциальности
          </a>
        </Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="btn-cus">
          Создать
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegForm;
