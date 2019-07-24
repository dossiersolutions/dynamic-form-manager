import React from "react";
import { Form, Field, FieldArray, reduxForm } from "redux-form/immutable";
import { Text, AddFields } from "../components";
import { Button, Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { validate } from "../validators";
import PropTypes from "prop-types";

const DynamicFormBuilder = props => {
    const { title, handleSubmit, pristine, reset, submitting } = props;
    return (
        <React.Fragment>
            <Modal.Header closeButton >
                <Modal.Title>{ title }</Modal.Title>
            </Modal.Header>
            <Form onSubmit={ handleSubmit }>
                <Modal.Body>
                    <Field
                        name="formName"
                        type="text"
                        component={ Text }
                        placeholder="Form Name"
                        label="Form name"
                        className="form-control"
                    />
                    <FieldArray name="fields" component={ AddFields }/>
                </Modal.Body>
                <Modal.Footer>
                    <Button as="input" type="submit" disabled={ submitting } variant="info" value="Save"/>
                    <Button type="button" disabled={ pristine || submitting } onClick={ reset } variant="info">
                        Reset
                    </Button>
                </Modal.Footer>
            </Form>
        </React.Fragment>
    );
};

DynamicFormBuilder.propTypes = {
    title: PropTypes.string,
    handleSubmit: PropTypes.func,
    pristine: PropTypes.bool,
    reset: PropTypes.func,
    submitting: PropTypes.bool
};

DynamicFormBuilder.defaultProps = {
    title: "",
    pristine: false,
    submitting: false
};

function mapStateToProps(state) {
    return {
        initialValues: state.getIn(["dynamicFormsReducer", "im_form", "values"])
    };
}

export default connect(mapStateToProps)(reduxForm({
    form: "dynamicForm",
    enableReinitialize: true,
    validate
})(DynamicFormBuilder));







