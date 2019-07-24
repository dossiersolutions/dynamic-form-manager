import React from "react";
import { Form, Field, reduxForm } from "redux-form/immutable";
import { Button, Modal } from "react-bootstrap";
import { Text, SubmittedData } from "../components";
import { connect } from "react-redux";
import { doFillFormAction } from "../actions";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { Map } from "immutable";

const DynamicFormView = props => {
    const { pristine, reset, submitting, im_form, doFillFormAction, submitted_values, redux_form } = props;

    const getSubmittedDataBody = () => {
        return (
            <SubmittedData formName={ im_form.getIn(["values", "formName"]) } data = { submitted_values } />
        )
    };

    const getFormBody = () => {
        let body = '';
        if ( im_form.getIn(["values", "fields"]) ) {
            body =
                <Form
                    onSubmit={
                        (event) => {
                            event.preventDefault();
                            doFillFormAction(redux_form)
                        }
                    }
                >
                    <Modal.Body>
                        { im_form.getIn(["values", "fields"]).map((field, index) => {
                            return (
                                <Field
                                    key={ index }
                                    name={`field_${ index }`}
                                    type="text"
                                    component={ Text }
                                    label={ field.get("title") }
                                    className="form-control"
                                />
                            );
                        })}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button as="input" type="submit" disabled={ submitting } variant="info" value="Save"/>
                        <Button type="button" disabled={ pristine || submitting } onClick={ reset } variant="info">
                            Reset
                        </Button>
                    </Modal.Footer>
                </Form>
        }
        return (
            <React.Fragment>
            <Modal.Header closeButton >
                <Modal.Title>{ im_form.getIn(["values", "formName"]) }</Modal.Title>
            </Modal.Header>
            { body }
            </React.Fragment>
        );
    };
    return (submitted_values ?  getSubmittedDataBody() : getFormBody());
};

DynamicFormView.propTypes = {
    pristine: PropTypes.bool,
    reset: PropTypes.func,
    submitting: PropTypes.bool,
    im_form: PropTypes.instanceOf(Map),
    doFillFormAction: PropTypes.func,
    submitted_values: PropTypes.string,
    redux_form: PropTypes.instanceOf(Map)
};

DynamicFormView.defaultProps = {
    pristine: false,
    submitting: false,
    im_form: Map({}),
    submitted_values: "",
    redux_form: Map({})
};

function mapStateToProps(state) {
    return {
        im_form: state.getIn(["dynamicFormsReducer", "im_form"]),
        submitted_values: state.getIn(["dynamicFormsReducer", "submitted_values"]),
        redux_form: state.getIn(["form", "dynamicFormView"]),
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        doFillFormAction
    }, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(reduxForm({
    form: "dynamicFormView",
    enableReinitialize: true
})(DynamicFormView));