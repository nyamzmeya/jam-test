import { Button} from "antd";
import { Link } from "react-router-dom";
import "../hol/Hol.css";

const Intro = (props) => {
  return (
    <div>
      <div className="test_1">{`Тест №${props.test}`}</div>
      <div className="test_2">
        Вам предстоит оценить ряд утверждений, касающихся различных сторон
        жизни. Просим вас отвечать правдиво и быстро.
      </div>

      <div className="test_3">
        Помните, что нет ответов хороших и плохих, правильных и неправильных.
        Просто мы все разные.
      </div>

      <div className="test_4">
        Выбрать вариант можно при помощи мыши. Подтвердить выбор можно через
        двойной щелчок или кнопки “Продолжить”.
      </div>
      <Button type="primary">
        <Link to={`/${props.test}/usk/1`}>Все понятно!</Link>
      </Button>
    </div>
  );
};

export default Intro;
