import { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormField from './FormField';

const validationSchema = Yup.object({
  email: Yup.string().email('Некорректный email').required('Email обязателен'),
  password: Yup.string()
    .min(6, 'Пароль должен быть не менее 6 символов')
    .required('Пароль обязателен'),
});

const FormComponent = () => {
  const [submittedData, setSubmittedData] = useState(null);

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setSubmittedData(values);
        setSubmitting(false);
      }}
    >
      {({ errors, touched, isSubmitting }) => (
        <>
          <Form>
            <FormField
              label="Email"
              name="email"
              type="email"
              error={errors.email}
              touched={touched.email}
            />
            <FormField
              label="Password"
              name="password"
              type="password"
              error={errors.password}
              touched={touched.password}
            />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
          {submittedData && (
            <div>
              <h3>Отправленные данные</h3>
              <p>Email: {submittedData.email}</p>
              <p>Password: {submittedData.password}</p>
            </div>
          )}
        </>
      )}
    </Formik>
  );
};

export default FormComponent;
