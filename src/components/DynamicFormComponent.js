import React from "react";
import { CREATE_FORM, EDIT_FORM, VIEW_FORM } from "../actions/actionTypes";
import { DynamicFormView, DynamicForm } from "../containers";
import PropTypes from "prop-types";

const DynamicFormComponent = (props) => {
  const { modalId } = props;
  const getFormContent = (modalId) => {
    switch (modalId) {
      case CREATE_FORM:
        return <DynamicForm update={false} />;
      case EDIT_FORM:
        return <DynamicForm update={true} />;
      case VIEW_FORM:
      default:
        return <DynamicFormView />;
    }
  };
  return (getFormContent(modalId));
};

DynamicFormComponent.propTypes = {
  modalId: PropTypes.string
};

DynamicFormComponent.defaultProps = {
  modalId: ''
};

export default DynamicFormComponent;