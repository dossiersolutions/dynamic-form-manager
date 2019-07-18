import React from 'react';
import {Form, Field, reduxForm } from 'redux-form';
import {Button, Modal} from "react-bootstrap";
import {Text} from "../components";
import {connect} from "react-redux";


const DynamicFormView = props => {
    const {handleSubmit, pristine, reset, submitting, initialValues, result} = props;
    console.log(initialValues);
    return (
        <React.Fragment>
            <Modal.Header closeButton >
                <Modal.Title>{initialValues.formName}</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit}>
                <Modal.Body>

                    {result ?
                        `Form submit result: ${result}`
                        : initialValues.fields.map((field, index) => {
                        return (
                            <Field key={index} name={`field_`+index} type='text' component={Text} label={field.title} className="form-control" />
                        );
                    })}
                </Modal.Body>
                <Modal.Footer>
                    <Button as="input" type="submit" disabled={submitting} variant="info" value='Save'/>
                    <Button type="button" disabled={pristine || submitting} onClick={reset} variant="info">
                        Reset
                    </Button>
                </Modal.Footer>
            </Form>
        </React.Fragment>
    );
};

function mapStateToProps(state) {
    const initValues = state.appReducer.form.values ? state.appReducer.form.values : {formName:'', fields:[]};
    return {
        initialValues: initValues,
        result: state.appReducer.result
    };
}

export default connect(mapStateToProps)(reduxForm({
    form: 'dynamicFormView',
    enableReinitialize: true
})(DynamicFormView));