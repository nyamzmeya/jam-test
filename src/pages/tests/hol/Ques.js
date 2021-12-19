import { Form, Button, Radio, Progress } from "antd";
import { useNavigate } from "react-router-dom";
import "../hol/Hol.css";

const Ques = (props) => {
  let navigate = useNavigate();

  let progress = Math.round(
    (props.numer_of_question / props.numer_of_questions) * 100
  );
  const onFinish = (value) => {
    value.index = props.numer_of_question;
    props.setHol(props.id, props.token, [value]);


    if (props.numer_of_question !== props.numer_of_questions) {
      navigate(`/${props.id}/hol/${props.numer_of_question + 1}`);
    } else if (props.numer_of_question === props.numer_of_questions && props.next_test) {
      navigate(`/${props.id}/${props.next_test.quiz}/0`);
    } else  {
      props.setSetDone(props.id, 100, new Date(), 'completed')
      navigate('/home');
    }
  };

  return (
    <>
      <div className="ques_name">Выберите одну из предложенных профессий</div>

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
        <Form.Item name="name" rules={[{ required: true, message: 'Пожалуйста выберите значение' }]}>
          <Radio.Group>
            <Radio.Button value={props.ques.answers.left.name}>
              {props.ques.answers.left.text}
            </Radio.Button>
            <Radio.Button value={props.ques.answers.right.name}>
              {props.ques.answers.right.text}
            </Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Продолжить
        </Button>
      </Form>
    </>
  );
};

export default Ques;
