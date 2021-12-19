import { Button, Steps } from "antd";
import React, { useState } from "react";
import { connect } from "react-redux";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import logo from "../../home/Rectangle 1.svg";

import { useParams } from "react-router-dom";
import Intro from "./Intro";
import Ques from "./Ques";
import "../hol/Hol.css";
import questions from "./questions";
import { setGatbAnswers, setSetDone } from "../../../redux/test-reducer";

const { Step } = Steps;

const Gatb = (props) => {
  let [count, setCount] = useState(false);
  let params = useParams();

  let test = parseInt(params.test);

  let ques = parseInt(params.ques);
  let StepEl = questions.map((q) => {
    return <Step key={`${q.index}`} />;
  });

  let current_number = props.sets[test - 1].findIndex(
    (s) => s.quiz == "gatb-5"
  );
  let next_test = props.sets[test - 1][current_number + 1];

  return (
    <>
      <div className="logo">
        <img src={logo} />
        <Steps current={ques}>
          <Step />
          {StepEl}
        </Steps>

        <CountdownCircleTimer
          isPlaying={count}
          onComplete={() => {
            setCount(false)
          }}
          duration={120}
          colors={[
            ["#1890FF", 0.33],
            ["#faad14", 0.33],
            ["#ff4d4f", 0.33],
          ]}
        >
          {({ remainingTime }) => <div className="time">{remainingTime}</div>}
        </CountdownCircleTimer>

        
      </div>
      {ques == 0 ? (
        <Intro test={test} setCount={setCount} />
      ) : (
        <Ques
          numer_of_questions={questions.length}
          numer_of_question={ques}
          ques={questions[ques - 1]}
          setGatb={props.setGatbAnswers}
          id={test}
          token={props.token || localStorage.getItem("token")}
          next_test={next_test}
          setSetDone={props.setSetDone}
          isActive={count}
        />
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return { token: state.authPage.token, sets: state.home.sets };
};

export default connect(mapStateToProps, { setGatbAnswers, setSetDone })(Gatb);
