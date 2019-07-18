import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Container, Row, Col, Button} from "react-bootstrap";
import { actions } from "./actions";
import './App.css';
import FormsList from "./components/FormsList";
import {Toggle} from "./containers/Toggle";
import {AppModal} from "./components/Modal";
import DynamicForm from "./containers/DynamicForm";

export const toggleId = 'SHOW_FORM_MODAL';

class App extends Component {
    render() {
        return (
            <Container>
                <Row style={{padding: 15}}>
                    <Col><h2 style={{fontWeight: 'bold'}}>Form manager</h2></Col>
                    <Col className="text-right"><Button type='button' onClick={() => this.props.onShow(toggleId)}>Create new form +</Button></Col>
                    <Toggle id={toggleId}>
                        <AppModal onClick={() => this.props.onHide(toggleId)} >
                            <DynamicForm
                                onSubmit={
                                    () => this.props.update
                                    ? this.props.onUpdateForm(this.props.form,this.props.index, toggleId) : this.props.onSubmitForm(this.props.form, toggleId)
                                }
                            />
                        </AppModal>
                    </Toggle>
                </Row>
                <FormsList app = {this.props} />
            </Container>
        );
    }
}

function mapStateToProps(state) {

    return {
        form: state.form,
        forms: state.appReducer.forms,
        initialFormValues: state.appReducer.form,
        update: state.appReducer.update,
        index: state.appReducer.index
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onShow(id) {
            dispatch(actions.show(id))
        },
        onHide(id) {
            dispatch(actions.hide(id))
        },
        onSubmitForm(form, id) {
            dispatch(actions.createForm(form));
            dispatch(actions.hide(id));
        },
        onUpdateForm(form, index, id) {
            dispatch(actions.updateForm(form, index));
            dispatch(actions.hide(id));
        },
        onViewForm(index, id) {
            dispatch(actions.viewForm(index));
            dispatch(actions.show(id));
        },
        onEditForm(index, id) {
            dispatch(actions.editForm(index));
            dispatch(actions.show(id));
        },
        onRemoveForm(index) {
            dispatch(actions.removeForm(index));
        },
        onFillForm(form, id) {
            dispatch(actions.fillForm(form));
            dispatch(actions.hide(id));
        }
    }


}

export default connect(mapStateToProps, mapDispatchToProps)(App);
