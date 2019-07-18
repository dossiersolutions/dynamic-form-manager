import React from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import {toggleId} from "../App";
import {AppModal} from "./Modal";
import DynamicForm from "../containers/DynamicForm";
import {Toggle} from "../containers/Toggle";
import DynamicFormView from "../containers/DynamicFormView";


const viewFormToggleId = 'SHOW_FORM_VIEW_MODAL';
const FormsList = (props) => {

    return (
        <React.Fragment>
          <table className='table table-striped text-center table-sm table-bordered'>
              <thead className="thead-light">
                <tr>
                    <th>Form Name</th>
                    <th>Actions</th>
                </tr>
              </thead>
              <tbody>
              {props.app.forms.map((form, index) => {
                  return (
                      <tr key={index}>
                          <td>{form.values.formName}</td>
                          <td >
                              <Button type='button' onClick={() => props.app.onViewForm(index, viewFormToggleId)} >View</Button>
                              <Button type='button' onClick={() => props.app.onEditForm(index, toggleId)}>Edit</Button>
                              <Button type='button' onClick={() => props.app.onRemoveForm(index)} variant='danger'>Delete</Button>
                          </td>
                      </tr>
                  );
              })}
              </tbody>
          </table>
            <Toggle id={viewFormToggleId}>
                <AppModal onClick={() => props.app.onHide(viewFormToggleId)} >
                    <DynamicFormView
                        onSubmit={() => props.app.onFillForm(props.app.form, viewFormToggleId)}
                    />
                </AppModal>
            </Toggle>
        </React.Fragment>
    );
};

export default FormsList;