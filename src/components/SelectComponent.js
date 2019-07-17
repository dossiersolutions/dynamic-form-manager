import React from 'react';
import { Field } from "redux-form";

const SelectComponent = ({ input, meta: {touched, error} }) => (
    <div className="field-wrapper">
        <Field className="form-control" component='select' {...input}  >
            <option />
            <option value='1'>Text</option>
            <option value='2'>Select</option>
            <option value='3'>Radio</option>
            <option value='4'>Checkbox</option>
        </Field>
        {touched && error && <span>{error}</span>}
    </div>
);

export default SelectComponent;