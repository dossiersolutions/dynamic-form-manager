import React from 'react';
import * as ReactDom from "react-dom";
import {Modal} from "react-bootstrap";
import {useSelector} from "react-redux";


export const FormModal =  ({children, onClick, id}) => {
    const show = useSelector(state => state.getIn(['appReducer', id]));
    return (ReactDom.createPortal(
        <React.Fragment>
            <Modal show={show} onHide={onClick}>
                {children}
            </Modal>
        </React.Fragment>,
        document.getElementById('modal-root')
        )
    )
};
