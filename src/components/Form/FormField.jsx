const FormField = ({ label, name, type, value, error, onChange }) => {
  return (
    <div>
      <label htmlFor="">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
      />
      {error && <span>{error}</span>}
    </div>
  );
};

export default FormField;
