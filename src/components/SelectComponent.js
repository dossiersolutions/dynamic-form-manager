import React from "react";
import { Field } from "redux-form/immutable";
import PropTypes from "prop-types";

const SelectComponent = ({ input, meta: {touched, error} }) => (
    <div className="field-wrapper">
        <Field className="form-control" component="select" { ...input }  >
            <option value="1">Text</option>
        </Field>
        { touched && error && <span>{ error }</span> }
    </div>
);

SelectComponent.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object
};

SelectComponent.defaultProps = {
  input: {},
  meta: {}
};

export default SelectComponent;

