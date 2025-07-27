import { Field } from 'formik';
import './FormField.css';

const FormField = ({ label, name, type, error, touched }) => {
  return (
    <div className="form-field-container">
      <label htmlFor={name} className="form-field-label">
        {label}
      </label>
      <Field
        id={name}
        name={name}
        type={type}
        className={`form-field-input ${error && touched ? 'error' : ''}`}
      />
      {error && touched && <span className="form-field-error">{error}</span>}
    </div>
  );
};

export default FormField;
