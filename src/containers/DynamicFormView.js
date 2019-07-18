import React from 'react';
import {Form, Field, FieldArray, reduxForm } from 'redux-form';
import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import {Text} from "../components";
import {connect} from "react-redux";
import {toggleId} from "../App";


const DynamicFormView = props => {
    const {handleSubmit, pristine, reset, submitting, initialValues} = props;
    console.log(initialValues);
    return (
        <React.Fragment>
            <div>{initialValues.formName}</div>
            <Form onSubmit={handleSubmit}>
                <Modal.Body>
                    {initialValues.fields.map((field, index) => {
                        return (
                            <Field name={`field_`+index} type='text' component={Text} label={field.title} className="form-control" />
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
    const initValues = state.appReducer.form ? state.appReducer.form.values : {};
    return {
        initialValues: initValues
    };
}

export default connect(mapStateToProps)(reduxForm({
    form: 'dynamicFormView',
    enableReinitialize: true
})(DynamicFormView));