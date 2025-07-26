import { useState } from 'react';
import FormField from './FormField';
const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const [isSubmitted, submitData] = useState(false);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    submitData(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={false}
        />
        <FormField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={false}
        />
        <button type="submit">Submit</button>
      </form>
      {isSubmitted && (
        <div>
          <h3>Отправленные данные</h3>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
        </div>
      )}
    </>
  );
};

export default FormComponent;
