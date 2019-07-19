import React from 'react';
import {Form, Field, reduxForm } from 'redux-form/immutable';
import {Button, Modal} from "react-bootstrap";
import {Text} from "../components";
import {connect} from "react-redux";
import {SubmittedData} from "../components/SubmittedData";


const DynamicFormView = props => {
    const {handleSubmit, pristine, reset, submitting, initialValues, submittedData} = props;
    const initialValuesJS = initialValues.toJS();
    return (
        submittedData ? <SubmittedData formName={initialValuesJS.formName} data = {submittedData} /> :
        <React.Fragment>
            <Modal.Header closeButton >
                <Modal.Title>{initialValuesJS.formName}</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit}>
                <Modal.Body>
                    {initialValuesJS.fields.map((field, index) => {
                        return (
                            <Field
                                key={index}
                                name={`field_${index}`}
                                type='text'
                                component={Text}
                                label={field.title}
                                className="form-control"
                            />
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
    const initValues = state.getIn(['appReducer', 'form', 'values'])
        ? state.getIn(['appReducer', 'form', 'values']).toJS() : {formName:'', fields:[]};
    return {
        initialValues: initValues,
        submittedData: state.getIn(['appReducer', 'submittedData'])
    };
}

export default connect(mapStateToProps)(reduxForm({
    form: 'dynamicFormView',
    enableReinitialize: true
})(DynamicFormView));