import { useState } from 'react';
import FormField from './FormField';
const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
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
  );
};

export default FormComponent;
