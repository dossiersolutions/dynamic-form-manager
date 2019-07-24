import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {doShowFormModalAction} from "./actions";
import {CREATE_FORM} from "./actions/actionTypes";
import { FormModal, FormsList } from "./containers";
import { DynamicForm } from "./components";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./App.css";
import PropTypes from "prop-types";

class App extends Component {
  render() {
    const { im_modal_id, doShowFormModalAction } = this.props;
    return (
        <Container>
          <Row style={{padding: 15}}>
            <Col><h2 style={{fontWeight: "bold"}}>Form manager</h2></Col>
            <Col className="text-right">
              <Button
                  type="button"
                  variant="success"
                  onClick={() => doShowFormModalAction(CREATE_FORM)}
              >
                Create new form +
              </Button>
            </Col>
          </Row>
          <FormsList/>
          <FormModal>
            <DynamicForm modalId={im_modal_id} />
          </FormModal>
        </Container>
    );
  }
}

App.propTypes = {
  im_modal_id: PropTypes.string,
  doShowFormModalAction: PropTypes.func
};

App.defaultProps = {
  im_modal_id: ""
};

function mapStateToProps(state) {
  return {
    im_modal_id: state.getIn(["dynamicFormsReducer", "im_modal_id"])
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    doShowFormModalAction
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
