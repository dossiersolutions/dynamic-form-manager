import React from "react";
import { connect } from "react-redux";
import { doCreateFormAction, doUpdateFormAction } from "../actions";
import { bindActionCreators } from "redux";
import { DynamicFormBuilder } from "./index";
import PropTypes from "prop-types";
import { Map } from "immutable";

const DynamicForm = props => {
  const {
    update,
    im_form,
    im_index,
    doUpdateFormAction,
    doCreateFormAction
  } = props;
  const title = update ? "Edit Form" : "Create Form";
  return (
      <DynamicFormBuilder
          onSubmit={
              () => {
                update ? doUpdateFormAction(im_form,im_index): doCreateFormAction(im_form)
              }
          }
          title={ title }
      />
  );
};

DynamicForm.propTypes = {
  update: PropTypes.bool,
  im_form: PropTypes.instanceOf(Map),
  im_index: PropTypes.string,
  doUpdateFormAction: PropTypes.func,
  doCreateFormAction: PropTypes.func,

};

DynamicForm.defaultProps = {
  update: false,
  im_form: Map({}),
  im_index: "",
};

function mapStateToProps(state) {
  return {
    im_form: state.getIn(["form","dynamicForm"]),
    im_index: state.getIn(["dynamicFormsReducer", "im_form_index"]),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    doCreateFormAction,
    doUpdateFormAction
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)((DynamicForm));







