import React from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import {toggleId} from "../App";

const FormsList = (props) => {
    return (
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
                          <Button type='button' onClick={() => props.app.onViewForm(index, toggleId)} >View</Button>
                          <Button type='button' onClick={() => props.app.onEditForm(index, toggleId)}>Edit</Button>
                          <Button type='button' onClick={() => props.app.onRemoveForm(index)} variant='danger'>Delete</Button>
                      </td>
                  </tr>
              );
          })}
          </tbody>
      </table>
    );
};

export default FormsList;