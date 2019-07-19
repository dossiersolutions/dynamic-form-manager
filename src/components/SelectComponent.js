import React from 'react';
import { Field } from "redux-form/immutable";

const SelectComponent = ({ input, meta: {touched, error} }) => (
    <div className="field-wrapper">
        <Field className="form-control" component='select' {...input}  >
            <option value='1'>Text</option>
        </Field>
        {touched && error && <span>{error}</span>}
    </div>
);

export default SelectComponent;