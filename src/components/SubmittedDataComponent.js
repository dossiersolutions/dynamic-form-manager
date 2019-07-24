import React from "react";
import { Modal } from "react-bootstrap";
import PropTypes from "prop-types";

const SubmittedDataComponent  = props => {
  const {formName, data } = props;
  return (
      <React.Fragment>
          <Modal.Header closeButton >
              <Modal.Title>{ `Form ${ formName } - submitted results` }</Modal.Title>
          </Modal.Header>
              <Modal.Body>
                  <div>{ data }</div>
              </Modal.Body>
      </React.Fragment>
  );
};

SubmittedDataComponent.propTypes = {
  formName: PropTypes.string,
  data: PropTypes.string
};

SubmittedDataComponent.defaultProps = {
  fields: "",
  data: ""
};

export default SubmittedDataComponent;