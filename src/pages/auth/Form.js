import { Button, Input, Form } from "antd";
import lock from "./Lock.svg";
import email from "./Email.svg";

const AuthForm = (props) => {
  const onFinish = (values) => {
    props.handleSubmit(values);
  };

  return (
    <Form name="basic" onFinish={onFinish}>
      <Form.Item
      style={{width: '100%', marginBottom: '16px'}}
        label={<img src={email} />}
        name="email"
        validateStatus={props.errors.email ? "error" : "validating"}
        help={props.errors.email ? props.errors.email : ""}
        rules={[
          {
            type: "email",
          },
        ]}
      >
        <Input placeholder='example@mail.com' style={{paddingTop: '17px', paddingBottom: '17px'}}/>
      </Form.Item>

      <Form.Item
      style={{width: '100%', marginBottom: '48px'}}
        label={<img src={lock} />}
        name="password"
        validateStatus={props.errors.password ? "error" : "validating"}
        help={props.errors.password ? props.errors.password : ""}
      >
        <Input.Password placeholder='••••••••' style={{paddingTop: '17px', paddingBottom: '17px'}}/>
      </Form.Item>

      <Form.Item>
        <Button type='primary' htmlType="submit" className='btn-cus'>
          Войти
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AuthForm;
