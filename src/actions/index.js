import {
    SHOW_FORM_MODAL,
    HIDE_FORM_MODAL,
    CREATE_FORM,
    REMOVE_FORM,
    UPDATE_FORM,
    FILL_FORM
} from "./actionTypes";

export const doShowFormModalAction = (id, index=null) => {
    return {
        type: SHOW_FORM_MODAL,
        payload: { id, index }
    }
};

export const doHideFormModalAction = (id) => {
    return {
        type: HIDE_FORM_MODAL,
        payload: { id }
    }
};

export const doCreateFormAction = (form) => {
    return {
        type: CREATE_FORM,
        payload: { form }
    }
};

export const doUpdateFormAction = (form, index) => {
    return {
        type: UPDATE_FORM,
        payload: { form, index }
    }
};

export const doRemoveFormAction = (index) => {
    return {
        type: REMOVE_FORM,
        payload: { index }
    }
};

export const doFillFormAction = (form) => {
    return {
        type: FILL_FORM,
        payload: { form }
    }
};


