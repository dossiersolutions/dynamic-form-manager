import React from "react";
import * as ReactDom from "react-dom";
import { Modal } from "react-bootstrap";
import { connect, useSelector } from "react-redux";
import { doHideFormModalAction } from "../actions";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";

const FormModal =  (props) => {
  const { children, modalId, doHideFormModalAction } = props;
  const show = useSelector(state => state.getIn(["dynamicFormsReducer", modalId]));
  return (ReactDom.createPortal(
        <React.Fragment>
            <Modal show={ show } onHide={ () => doHideFormModalAction(modalId) }>
              { children }
            </Modal>
        </React.Fragment>,
        document.getElementById("modal-root")
        )
    )
};

FormModal.propTypes = {
  children: PropTypes.object,
  modalId: PropTypes.string,
  doHideFormModalAction: PropTypes.func
};

FormModal.defaultProps = {
  children: {},
  modalId: ""
};

function mapStateToProps(state) {
  return {
    modalId: state.getIn(["dynamicFormsReducer", "im_modal_id"])
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    doHideFormModalAction
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FormModal);