import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Field } from "redux-form/lib/immutable";
import { Select, Text } from "./index";
import { Map } from "immutable";
import PropTypes from "prop-types";

const AddFieldsComponent = ({ fields, meta: { touched, error, submitFailed } }) => {
  return (
      <React.Fragment>
        <Row>
          {fields.map((field, index) => (
              <div className="form-group" key={ index }>
                <Field
                    name={`${ field }.title`}
                    type="text"
                    placeholder="Field name"
                    component={ Text }
                />
                <Field
                    name={ `${ field }.type` }
                    type="select"
                    placeholder="Select field type"
                    component={ Select }
                />

                <Button
                    className="remove-field-button"
                    type="button"
                    onClick={ () => fields.remove(index) }
                    variant="danger"
                    size="sm"
                > x
                </Button>
              </div>
          ))}
        </Row>
        <Row>
          <Col className="add-new-field-wrapper">
            <Button type="button" onClick={ () => fields.push(Map({})) } variant="info">Add form field +</Button>
            { (touched || submitFailed) && error && <span>{ error }</span> }
          </Col>
        </Row>
      </React.Fragment>
  )
};

AddFieldsComponent.propTypes = {
  fields: PropTypes.object,
  meta: PropTypes.object
};

AddFieldsComponent.defaultProps = {
  fields: {},
  meta: {}
};

export default AddFieldsComponent;