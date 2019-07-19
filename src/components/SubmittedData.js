import React from 'react';
import {Modal} from "react-bootstrap";

export const SubmittedData  = props => {
    return (
        <React.Fragment>
            <Modal.Header closeButton >
                <Modal.Title>{`Form ${props.formName} - submitted results`}</Modal.Title>
            </Modal.Header>
                <Modal.Body>
                    <div>{props.data}</div>
                </Modal.Body>
        </React.Fragment>
    );
};