import React from 'react';
import {Field} from "redux-form/immutable";


const TextComponent = ({ input, placeholder, label, type, meta: {touched, error} }) => (

    <div className="field-wrapper">
        <label>{label}</label>
        <Field className="form-control" component='input' {...input} type={type}  placeholder={placeholder} />
        {touched && error && <span className='error'>{error}</span>}
    </div>
);

export default TextComponent;