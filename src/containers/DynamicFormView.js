import React from 'react';
import {Form, Field, FieldArray, reduxForm } from 'redux-form';
import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import {Text} from "../components";


const DynamicFormView = props => {
    console.log(props.form);
    const {handleSubmit, pristine, reset, submitting } = props;
    return (
        <React.Fragment>
            <Form onSubmit={handleSubmit}>
                <Modal.Body>
                    <Field
                        name="formName"
                        type="text"
                        component={Text}
                        placeholder="Form Name"
                    />
                    {/*<FieldArray name="fields" component={addFields} />*/}
                </Modal.Body>
                <Modal.Footer>
                    <Button as="input" type="submit" disabled={submitting} variant="info" value='Save' />
                    <Button type="button" disabled={pristine || submitting} onClick={reset} variant="info" value='Reset' />
                </Modal.Footer>
            </Form>
        </React.Fragment>
    )
};


export default reduxForm({
    form: 'view',
})(DynamicFormView);