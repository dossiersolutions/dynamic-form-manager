import React from 'react';
import {Button} from "react-bootstrap";
import {FILL_FORM, UPDATE_FORM, formModal, formViewModal} from "../actions";


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
              {props.actions.forms.map((form, index) => {
                  return (
                      <tr key={index}>
                          <td>{form.values.formName}</td>
                          <td >
                              <Button type='button' onClick={() => props.actions.onViewForm(index, formViewModal, FILL_FORM)} >View</Button>
                              <Button type='button' onClick={() => props.actions.onEditForm(index,formModal, UPDATE_FORM)} >Edit</Button>
                              <Button type='button' onClick={() => props.actions.onRemoveForm(index)} variant='danger'>Delete</Button>
                          </td>
                      </tr>
                  );
              })}
              </tbody>
          </table>
        </React.Fragment>
    );
};

export default FormsList;