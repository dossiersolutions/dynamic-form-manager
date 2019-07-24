import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button } from "react-bootstrap";
import {
  doRemoveFormAction,
  doShowFormModalAction
} from "../actions";
import { EDIT_FORM, VIEW_FORM } from "../actions/actionTypes";
import PropTypes from "prop-types";
import { List } from "immutable";

const FormsList = (props) => {
  const { im_forms, doShowFormModalAction, doRemoveFormAction } = props;
  return (
    <React.Fragment>
      <table className="table table-striped text-center table-sm table-bordered">
        <thead className="thead-light">
          <tr>
            <th>Form Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        { im_forms.map((form, index) => {
          return (
            <tr key={ index }>
              <td>{ form.getIn(["values", "formName"]) }</td>
              <td>
                <Button type="button" onClick={ () => doShowFormModalAction(VIEW_FORM, index) } >View</Button>
                <Button type="button" onClick={ () => doShowFormModalAction(EDIT_FORM, index) } >Edit</Button>
                <Button type="button" onClick={ () => doRemoveFormAction(index) } variant="danger">Delete</Button>
              </td>
            </tr>
          );
        }) }
        </tbody>
      </table>
    </React.Fragment>
  );
};

FormsList.propTypes = {
  im_forms: PropTypes.instanceOf(List),
  doShowFormModalAction: PropTypes.func,
  doRemoveFormAction: PropTypes.func
};

FormsList.defaultProps = {
  im_forms: List([])
};

function mapStateToProps(state) {
  return {
    im_forms: state.getIn(["dynamicFormsReducer", "im_forms"])
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    doShowFormModalAction,
    doRemoveFormAction
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FormsList);