export const validate = values => {
  const errors = {};
  if(!values.get("formName")) {
    errors.formName = "Form name is required!";
  }
  return errors;
};