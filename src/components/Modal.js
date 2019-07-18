import React from 'react';
import * as ReactDom from "react-dom";
import {Button, Modal} from "react-bootstrap";


export const AppModal =  ({children, onClick}) => {

    return (ReactDom.createPortal(
        <>
        <Modal show={true} onHide={onClick}>
            {children}
        </Modal></>,
        document.getElementById('modal-root')
        )
    )
};

// export const AppModal = () => {
//     const [show, setShow] = React.useState(false);
//
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
//
//     return (
//         <>
//             <Button variant="primary" onClick={handleShow}>
//                 Launch demo modal
//             </Button>
//
//             <Modal show={show} onHide={handleClose}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Modal heading</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={handleClose}>
//                         Close
//                     </Button>
//                     <Button variant="primary" onClick={handleClose}>
//                         Save Changes
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//         </>
//     );
// }
