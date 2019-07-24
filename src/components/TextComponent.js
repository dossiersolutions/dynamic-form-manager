import React from "react";
import { Field } from "redux-form/immutable";
import PropTypes from "prop-types";

const TextComponent = ({ input, placeholder, label, type, meta: {touched, error} }) => (
    <div className="field-wrapper">
        { label ? <label>{ label }</label>:null }
        <Field className="form-control" component="input" { ...input } type={ type }  placeholder={ placeholder } />
        { touched && error && <span className="error">{ error }</span> }
    </div>
);

TextComponent.propTypes = {
  input: PropTypes.object,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object
};

TextComponent.defaultProps = {
  input: {},
  placeholder: "",
  label: "",
  type: "text",
  meta: {}
};

export default TextComponent;