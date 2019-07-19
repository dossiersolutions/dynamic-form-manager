import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Container, Row, Col, Button} from "react-bootstrap";
import {actions, CREATE_FORM, FILL_FORM, UPDATE_FORM, formModal, formViewModal} from "./actions";
import './App.css';
import FormsList from "./components/FormsList";
import {FormModal} from "./components/Modal";
import DynamicForm from "./containers/DynamicForm";
import DynamicFormView from "./containers/DynamicFormView";

class App extends Component {
    render() {
        return (
            <Container>
                <Row style={{padding: 15}}>
                    <Col><h2 style={{fontWeight: 'bold'}}>Form manager</h2></Col>
                    <Col className="text-right">
                        <Button
                            type='button'
                            variant='success'
                            onClick={() => this.props.onShow(formModal, CREATE_FORM)}
                        >
                            Create new form +
                        </Button>
                    </Col>
                </Row>
                <FormsList actions={this.props} />
                <FormModal onClick={() => this.props.onHide(formModal)} id={formModal} >
                    <DynamicForm
                        onSubmit={() => this.props.onSubmitForm(this.props.form, this.props.formAction, formModal, this.props.index)}
                    />
                </FormModal>
                <FormModal onClick={() => this.props.onHide(formViewModal)} id={formViewModal} >
                    <DynamicFormView
                        onSubmit={() => this.props.onSubmitForm(this.props.form, this.props.formAction, formViewModal)}
                    />
                </FormModal>

            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        form: state.get('form').toJS(),
        forms: state.getIn(['appReducer', 'forms']).toJS(),
        initialFormValues: state.getIn(['appReducer','form']).toJS(),
        index: state.getIn(['appReducer','index']),
        formAction: state.getIn(['appReducer','formAction'])
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onShow(id, formAction) {
            dispatch(actions.show(id, formAction))
        },
        onHide(id) {
            dispatch(actions.hide(id))
        },
        onSubmitForm(form, action, id, index) {
            switch(action) {
                case CREATE_FORM:
                    dispatch(actions.createForm(form));
                    dispatch(actions.hide(id));
                    break;
                case UPDATE_FORM:
                    dispatch(actions.updateForm(form, index));
                    dispatch(actions.hide(id));
                    break;
                case FILL_FORM:
                    dispatch(actions.fillForm(form));
                    break;
                default:
                    dispatch(actions.hide(id));
            }

        },
        onViewForm(index, id, formAction) {
            dispatch(actions.viewForm(index));
            dispatch(actions.show(id, formAction));
        },
        onEditForm(index, id, formAction) {
            dispatch(actions.editForm(index));
            dispatch(actions.show(id, formAction));
        },
        onRemoveForm(index) {
            dispatch(actions.removeForm(index));
        }
    }


}

export default connect(mapStateToProps, mapDispatchToProps)(App);
