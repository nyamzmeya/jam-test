import { Form, Button, Radio, Progress } from "antd";
import { useNavigate } from "react-router-dom";
import "./Usk.css";

const Ques = (props) => {
  let navigate = useNavigate();

  let progress = Math.round(
    (props.numer_of_question / props.numer_of_questions) * 100
  );
  const onFinish = (value) => {
    value.index = props.numer_of_question;
    props.setUsk(props.id, props.token, [value]);

    if (props.numer_of_question !== props.numer_of_questions) {
      navigate(`/${props.id}/usk/${props.numer_of_question + 1}`);
    } else if (
      props.numer_of_question === props.numer_of_questions &&
      props.next_test
    ) {
      navigate(`/${props.id}/${props.next_test.quiz}/0`);
    } else {
      props.setSetDone(props.id, 100, new Date(), 'completed');
      navigate("/home");
    }
  };

  return (
    <>
      <div className="ques_name">Выберите один из вариантов</div>

      <Progress
        style={{
          width: "630px",
          marginLeft: "auto",
          marginRight: "auto",
          display: "block",
          marginBottom: "65px",
        }}
        percent={progress}
      />

      <Form onFinish={onFinish}>
        <div className="flex">
          <div className="ques">{props.ques.question}</div>
          <Form.Item name="code" rules={[{ required: true, message: 'Пожалуйста выберите значение' }]}>
            <Radio.Group className="usk">
              <Radio.Button value="-3">Полностью согласен</Radio.Button>
              <Radio.Button value="-2">Пожалуй, согласен</Radio.Button>
              <Radio.Button value="-1">
                Скорее согласен, чем несогласен
              </Radio.Button>

              <Radio.Button value="1" style={{ marginBottom: "32px" }}>
                Скорее несогласен, чем несогласен
              </Radio.Button>

              <Radio.Button value="2">Пожалуй, несогласен</Radio.Button>

              <Radio.Button value="3">Полностью несогласен</Radio.Button>
            </Radio.Group>
          </Form.Item>
        </div>
        <Button type="primary" htmlType="submit" className="usk_button">
          Продолжить
        </Button>
      </Form>
    </>
  );
};

export default Ques;
