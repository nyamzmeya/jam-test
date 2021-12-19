import { Steps } from "antd";
import React from "react";
import { connect } from "react-redux";
import { setUskAnswers , getTests, setSetDone} from "../../../redux/test-reducer";


import logo from "../../home/Rectangle 1.svg";

import { useParams } from "react-router-dom";
import Intro from "./Intro";
import Ques from "./Ques";
import questions from "./questions";
import '../hol/Hol.css';

const { Step } = Steps;

function U(props) {
  let params = useParams();

  let test = parseInt(params.test);

  let ques = parseInt(params.ques);
  let StepEl = questions.map((q) => {
    return <Step key={`${q.index}`} />;
  });

  let current_number = props.sets[test - 1].findIndex(s => s.quiz == "usk");
  let next_test = props.sets[test - 1][current_number + 1];

  
 

  return (
    <>
    <div className="logo">
    <img src={logo}/>
      <Steps current={ques}>
        <Step />
        {StepEl}
      </Steps>

      
    </div>
      {ques == 0 ? (
        <Intro test={test} 
        
        />
      ) : (
        <Ques
          numer_of_questions={questions.length}
          numer_of_question={ques}
          ques={questions[ques - 1]}
          setUsk={props.setUskAnswers}
          id={test}
          token={props.token || localStorage.getItem("token")}
          next_test={next_test}
          setSetDone={props.setSetDone}
         
        />
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return { token: state.authPage.token, sets: state.home.sets };
};


class Usk extends React.Component {

  

  render() {
    return (
      <U {...this.props}/>
    )
  }
}

export default connect(mapStateToProps, {setUskAnswers, getTests, setSetDone})(Usk);