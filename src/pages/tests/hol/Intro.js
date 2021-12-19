import { Button, Form, Radio } from "antd";
import { Link } from "react-router-dom";
import "./Hol.css";

const Intro = (props) => {
  return (
    <div>
      <div className="test_1">{`Тест №${props.test}`}</div>
      <div className="test_2">
        Вам попарно будут представлены различные профессии, например:
      </div>

      <div>
        <Form.Item >
          <Radio.Group>
            <Radio.Button >ЗООТЕХНИК</Radio.Button>
            <Radio.Button >ГЛАВНЫЙ ВРАЧ</Radio.Button>
          </Radio.Group>
        </Form.Item>
      </div>
      <div className="test_3">
        В каждой паре Вам следует отдать предпочтение какой-то одной.
      </div>

      <div className="test_4">
        Выбрать вариант можно при помощи мыши. Подтвердить выбор можно через
        двойной щелчок или кнопки “Продолжить”.
      </div>
      <Button type="primary">
        <Link to={`/${props.test}/hol/1`}>Все понятно!</Link>
      </Button>
    </div>
  );
};

export default Intro;
