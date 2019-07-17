

const SHOW = 'SHOW';
const HIDE = 'HIDE';
export const CREATE_FORM = 'CREATE_FORM';
export const VIEW_FORM = 'VIEW_FORM';
export const EDIT_FORM = 'EDIT_FORM';
export const REMOVE_FORM = 'REMOVE_FORM';
export const UPDATE_FORM = 'UPDATE_FORM';


const initialState = {
    forms: [],
    form: {},
    update: false,
    index:''
};

export const actions = {
    show(id) {
        return {
            type : SHOW,
            payload: id
        }
    },
    hide(id) {
        return {
            type: HIDE,
            payload: id
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
    }
};


export function reducer(state = initialState, action) {
    switch (action.type) {
        case SHOW:
            return {...state, [action.payload]: true};
        case HIDE:
            return {...state, [action.payload]: false};
        case CREATE_FORM:
            return {
                ...state,
                forms: [...state.forms, action.form.dynamicForm],
                update: false
            };
        case UPDATE_FORM:
            const formsConfig = [...state.forms];
            formsConfig[action.index] = action.form.dynamicForm;
            console.log(formsConfig);
            return {
                ...state,
                forms: formsConfig,
                update: true,
                form:{}
            };
        case VIEW_FORM:
        case EDIT_FORM:
            const formsArr = [...state.forms];
            const form = formsArr[action.index];
            return {
                ...state, form , update: true, index:action.index
            };
        case REMOVE_FORM:
            const forms = [...state.forms];
            forms.splice(action.index, 1);
            return {
                ...state,
                forms,
                update: false
            };
        default:
            return state;

    }
}