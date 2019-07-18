import React from 'react';
import {Field} from "redux-form";


const TextComponent = ({ input, placeholder, label, type, meta: {touched, error} }) => (

    <div className="field-wrapper">
        <label>{label}</label>
        <Field className="form-control" component='input' {...input} type={type}  placeholder={placeholder} />
        {touched && error && <span>{error}</span>}
    </div>
);

export default TextComponent;