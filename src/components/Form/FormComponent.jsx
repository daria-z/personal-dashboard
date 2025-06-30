import FormField from './FormField';
const FormComponent = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('form submit!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormField
        label="Name"
        name="name"
        value="name"
        onChange={() => console.log('field onChange')}
        error={false}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
