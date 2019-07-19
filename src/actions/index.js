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
    forms: [],
    form:{},
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
    switch (action.type) {
        case SHOW:
            return {...state,
                [action.payload.id]: true,
                formAction: action.payload.formAction
            };
        case HIDE:
            return {...state,
                [action.payload.id]: false,
                form: {},
                submittedData:''
            };
        case CREATE_FORM:
            return {
                ...state,
                forms: [...state.forms, action.form.dynamicForm]
            };
        case UPDATE_FORM:
            const formsConfig = [...state.forms];
            formsConfig[action.index] = action.form.dynamicForm;
            return {
                ...state,
                forms: formsConfig
            };
        case VIEW_FORM:
        case EDIT_FORM:
            const formsArr = [...state.forms];
            const form = formsArr[action.index];
            return {
                ...state, form , index:action.index
            };
        case REMOVE_FORM:
            const forms = [...state.forms];
            forms.splice(action.index, 1);
            return {
                ...state,
                forms
            };
        case FILL_FORM:
            return {
                ...state,
                submittedData: JSON.stringify(action.form.dynamicFormView.values, null, 2)
            };
        default:
            return state;

    }
}