import { Button, Progress } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../hol/Hol.css";
import cat from "./icons/cat_icon.svg";
import dog from "./icons/dogs_icon.svg";

const Ques = (props) => {
  let navigate = useNavigate();

  let progress = Math.round(
    (props.numer_of_question / props.numer_of_questions) * 100
  );

  let [active, setActive] = useState(null);
  let [done, setDone] = useState([]);

  const onFinish = () => {
    props.setGatb(props.id, props.token, { result: done.length || 0 });

    if (props.numer_of_question !== props.numer_of_questions) {
      navigate(`/${props.id}/gatb-5/${props.numer_of_question + 1}`);
    } else if (
      props.numer_of_question === props.numer_of_questions &&
      props.next_test
    ) {
      navigate(`/${props.id}/${props.next_test.quiz}/0`);
    } else {
      props.setSetDone(props.id, 100, new Date(), "completed");
      navigate("/home");
    }
  };

  if (!props.isActive) {
    onFinish();
  }

  window.active = active;
  window.done = done;

  let onImgClick = (e) => {
    if (!active) {
      return setActive([
        e.currentTarget.dataset.icon,
        e.currentTarget.dataset.wrapper,
      ]);
    } else if (e.currentTarget.dataset.icon == active[0]) {
      setDone([...done, active[0]]);
      setActive(null);
    }
    console.log(e.currentTarget.dataset.icon);
    console.log(active);
    console.log(done);
  };

  let checkActive = (icon, wrapper) => {
    if (active && active[1] == wrapper) {
      return false;
    } else if (done && done.includes(icon)) {
      return false;
    }

    return true;
  };

  return (
    <>
      <div className="ques_name">
        Найдите соответствующие фигуры в обоих множествах
      </div>

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

      <div className="icons_wrapper">
        <div className={props.isActive ? "icons" : "not_active icons"}>
          <img
            src={cat}
            data-icon="cat"
            data-wrapper="1"
            onClick={onImgClick}
            className={
              checkActive("cat", "1") ? "active icon" : "not_active icon"
            }
          />
          <img
            src={dog}
            data-icon="dog"
            data-wrapper="1"
            onClick={onImgClick}
            className={
              checkActive("dog", "1") ? "active icon" : "not_active icon"
            }
          />
        </div>
        <div className="icons">
          <img
            src={cat}
            data-icon="cat"
            data-wrapper="2"
            onClick={onImgClick}
            className={
              checkActive("cat", "2") ? "active icon" : "not_active icon"
            }
          />
          <img
            src={dog}
            data-icon="dog"
            data-wrapper="2"
            onClick={onImgClick}
            className={
              checkActive("dog", "2") ? "active icon" : "not_active icon"
            }
          />
        </div>
      </div>

      <Button type="primary" onClick={onFinish} style={{ marginTop: "56px" }}>
        Продолжить
      </Button>
    </>
  );
};

export default Ques;
