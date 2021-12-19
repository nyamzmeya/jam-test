import React from "react";
import { connect } from "react-redux";
import { getTests } from "../../redux/test-reducer";
import Wrapper from "./Layout";

class Home extends React.Component {
  componentDidMount() {
    console.log("mounted");
    if (this.props.tests.length == 0) {
      console.log('empty')
      this.props.getTests(this.props.token || localStorage.getItem("token"));
    }
  }

  render() {
    return <Wrapper email={this.props.email} tests={this.props.tests} />;
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.authPage.token,
    errors: state.home.errors,
    email: state.authPage.email,
    tests: state.home.tests,
    sets: state.home.sets,
  };
};

export default connect(mapStateToProps, { getTests })(Home);
