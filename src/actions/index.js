import { fromJS, Map, List } from 'immutable';

const SHOW = 'SHOW';
const HIDE = 'HIDE';

export const CREATE_FORM = 'CREATE_FORM';
export const VIEW_FORM = 'VIEW_FORM';
export const EDIT_FORM = 'EDIT_FORM';
export const REMOVE_FORM = 'REMOVE_FORM';
export const UPDATE_FORM = 'UPDATE_FORM';
export const FILL_FORM = 'FILL_FORM';

export const formModal = 'SHOW_FORM_MODAL';
export const formViewModal = 'SHOW_FORM_VIEW_MODAL';


const initialState = {
    forms: List([]),
    form: Map({}),
    index:'',
    formAction:'',
    submittedData: ''
};

export const actions = {
    show(id, formAction) {
        return {
            type : SHOW,
            payload: {id, formAction}
        }
    },
    hide(id) {
        return {
            type: HIDE,
            payload: {id}
        }
    },
    createForm(form) {
        return {
            type: CREATE_FORM,
            form
        }
    },
    updateForm(form, index) {
      return {
          type: UPDATE_FORM,
          form,
          index
      }
    },
    viewForm(index) {
        return {
            type:VIEW_FORM,
            index
        }
    },
    editForm(index) {
        return {
            type:EDIT_FORM,
            index
        }
    },
    removeForm(index) {
        return {
            type: REMOVE_FORM,
            index
        }
    },
    fillForm(form) {
        return {
            type:FILL_FORM,
            form
        }
    }
};


export function reducer(state = initialState, action) {
    let im_state = Map(state);
    switch (action.type) {
        case SHOW:
            return im_state.set(action.payload.id, true)
                .set('formAction', action.payload.formAction);
        case HIDE:
            return im_state.set(action.payload.id, false)
                .set('form', Map({}))
                .set('submittedData', '');

        case CREATE_FORM:
            return im_state.updateIn(
                ['forms'], dynamicForms => List(dynamicForms).push(fromJS(action.form.dynamicForm))
            );

        case UPDATE_FORM:
            return im_state.setIn(['forms', action.index],fromJS(action.form.dynamicForm));

        case VIEW_FORM:
        case EDIT_FORM:
            return im_state
                .set('form', im_state.getIn(['forms', action.index]))
                .set('index', action.index);
        case REMOVE_FORM:
            return im_state.deleteIn(['forms', action.index]);
        case FILL_FORM:
            return im_state.set('submittedData', JSON.stringify(action.form.dynamicFormView.values, null, 2));
        default:
            return im_state;

    }
}