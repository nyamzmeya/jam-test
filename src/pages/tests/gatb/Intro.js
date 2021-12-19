import { Button, Form, Radio } from "antd";
import { Link } from "react-router-dom";
import "../hol/Hol.css";

const Intro = (props) => {
  return (
    <div>
      <div className="test_1">{`Тест №${props.test}`}</div>
      <div className="test_2">
      Вам будут представлены два множества,
в которых представлены геометрические фигуры.
      </div>

      <div className="test_time">Этот тест на время!</div>
      <div className="test_3">
      Найдите кажной фигуре первого множества соответствующую фигуру из второго.
      </div>

      <div className="test_4">
      Выбрать вариант можно при помощи мыши. Подтвердить выбор можно через двойной щелчок или кнопки “Продолжить”.
      </div>
      <Button type="primary"onClick={() => props.setCount(true)} >
        <Link to={`/${props.test}/gatb-5/1`}>Все понятно!</Link>
      </Button>
    </div>
  );
};

export default Intro;
