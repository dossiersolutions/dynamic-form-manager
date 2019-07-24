import { List, Map } from "immutable";
import {
  SHOW_FORM_MODAL,
  HIDE_FORM_MODAL,
  CREATE_FORM,
  EDIT_FORM,
  FILL_FORM,
  REMOVE_FORM,
  UPDATE_FORM
} from "../actions/actionTypes";

const initialState = {
  im_forms: List([]),
  im_form: Map({}),
  im_form_index:"",
  submitted_values: "",
  im_modal_id: "",
};

export function reducer(state = initialState, action) {
  let im_state = Map(state);
  const { type } = action;
  switch (type) {
    case SHOW_FORM_MODAL: {
      const { id, index } = action.payload;
      const form = index !== null ? im_state.getIn(["im_forms", index]) : Map({});
      return  im_state.set("im_modal_id", id)
          .set(id, true)
          .set("im_form", form)
          .set("im_form_index", index);

    }
    case HIDE_FORM_MODAL: {
      const { id } = action.payload;
      return im_state.set(id, false)
          .set("im_form", Map({}))
          .set("submitted_values", "")
          .set("im_form_index", "")
          .set("im_modal_id", "");
    }
    case CREATE_FORM: {
      const { form } = action.payload;
      return im_state.updateIn(
          ["im_forms"], dynamicForms => List(dynamicForms).push(form)
          )
          .set(CREATE_FORM, false);
    }
    case UPDATE_FORM: {
      const { index, form } = action.payload;
      return im_state.setIn(["im_forms", index],form)
          .set(EDIT_FORM, false)
          .set("im_form", im_state.get('im_form'))
          .set("submitted_values", "");
    }
    case REMOVE_FORM: {
      const { index } = action.payload;
      return im_state.deleteIn(["im_forms", index]);
    }
    case FILL_FORM:
      const { form } = action.payload;
      return im_state.set("submitted_values", JSON.stringify(form.get("values").toJS(), null, 2));
    default:
      return im_state;
  }
}