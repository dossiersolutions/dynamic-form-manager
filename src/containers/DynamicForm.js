import React from 'react';
import {Form, Field, FieldArray, reduxForm} from 'redux-form/immutable';
import {Text, Select} from '../components';
import {Button, Col, Modal, Row} from "react-bootstrap";
import {connect} from "react-redux";
import {Map} from 'immutable';

const validate = values => {
    const errors = {}
    if(!values.get('formName')) {
        errors.formName = 'Form name is required!';
    }
    return errors;
}

const addFields = ({fields, meta: {touched, error, submitFailed}}) => (
    <React.Fragment>
        <Row>
            {fields.map((field, index) => (
                <div className="form-group" key={index}>
                    <Field
                        name={`${field}.title`}
                        type='text'
                        placeholder='Field name'
                        component={Text}
                    />
                    <Field
                        name={`${field}.type`}
                        type='select'
                        placeholder='Select field type'
                        component={Select}
                    />

                    <Button
                        className="remove-field-button"
                        type='button'
                        onClick={() => fields.remove(index)}
                        variant='danger'
                        size='sm'
                    > x
                    </Button>
                </div>
            ))}
        </Row>
        <Row>
            <Col className="add-new-field-wrapper">
                <Button type='button' onClick={() => fields.push(Map({}))} variant="info">Add form field +</Button>
                {(touched || submitFailed) && error && <span>{error}</span>}
            </Col>
        </Row>
    </React.Fragment>
);

const DynamicForm = props => {
    const {handleSubmit, pristine, reset, submitting, initialValues} = props;
    const modalTitle = initialValues ? `Edit Form - ` + initialValues.formName : 'Create Form';
    return (
        <React.Fragment>
            <Modal.Header closeButton >
                <Modal.Title>{modalTitle}</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit}>
                <Modal.Body>
                    <Field
                        name="formName"
                        type="text"
                        component={Text}
                        placeholder="Form Name"
                        label="Form name"
                        className="form-control"
                    />
                    <FieldArray name="fields" component={addFields}/>
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
    const initValues = state.getIn(['appReducer', 'form', 'values']) ? state.getIn(['appReducer', 'form', 'values']).toJS() : {};
    return {
        initialValues: initValues
    };
}

export default connect(mapStateToProps)(reduxForm({
    form: 'dynamicForm',
    enableReinitialize: true,
    validate
})(DynamicForm));







