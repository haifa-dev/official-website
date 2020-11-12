import React from 'react';
import { Formik } from 'formik';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import * as yup from 'yup';
import FieldDescription from './FieldDescription';

export default function FormMain({ formState, setFormState, loadNextForm }) {
  return (
    <Formik
      initialValues={formState}
      validationSchema={yup.object().shape({
        name: yup.string().min(2, 'minimum 2 letters').required('Required field'),
        email: yup.string().email('Invalid email').required('Required field'),
        phone: yup.number().typeError('Numbers only').required('Required field'),
        about: yup.string().required('Required field').min(30, 'minimum 30 characters'),
        businessType: yup.string().required('Required field')
      })}
      onSubmit={values => {
        setFormState(prev => {
          return { ...prev, ...values };
        });
        loadNextForm(values.businessType);
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} sm="5" md="4" controlId="field_1">
              <Form.Label>Full name:</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                isValid={touched.name && !errors.name}
                isInvalid={touched.name && errors.name}
              />
              <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} sm="5" md="4" controlId="field_2">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                isValid={touched.email && !errors.email}
                isInvalid={touched.email && errors.email}
              />
              <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} sm="5" md="4" controlId="field_3">
              <Form.Label>Phone Number:</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                isValid={touched.phone && !errors.phone}
                isInvalid={touched.phone && errors.phone}
              />
              <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} sm="5" md="4" controlId="field_4">
              <Form.Label className="ml-1">Select your business type:</Form.Label>
              <div className="mt-2">
                <Form.Check type="radio" custom inline>
                  <Form.Check.Input
                    type="radio"
                    id="nonProfit"
                    name="businessType"
                    value="nonProfit"
                    onChange={handleChange}
                    defaultChecked={values.businessType === 'nonProfit' ? true : false}
                    isValid={touched.businessType && !errors.businessType}
                    isInvalid={touched.businessType && errors.businessType}
                  />
                  <Form.Check.Label htmlFor="nonProfit">Non-Profit</Form.Check.Label>
                </Form.Check>

                <Form.Check type="radio" custom inline>
                  <Form.Check.Input
                    type="radio"
                    id="forProfit"
                    name="businessType"
                    value="forProfit"
                    onChange={handleChange}
                    defaultChecked={values.businessType === 'forProfit' ? true : false}
                    isValid={touched.businessType && !errors.businessType}
                    isInvalid={touched.businessType && errors.businessType}
                  />
                  <Form.Check.Label htmlFor="forProfit">For-Profit</Form.Check.Label>
                </Form.Check>
              </div>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} sm="10" md="8" controlId="field_5">
              <Form.Label>
                <span>Tell us about your project </span>
                <FieldDescription>Please write a minimum of 30 characters</FieldDescription>
              </Form.Label>
              <Form.Control
                as="textarea"
                name="about"
                value={values.about}
                rows="5"
                onChange={handleChange}
                isValid={touched.about && !errors.about}
                isInvalid={touched.about && errors.about}
                min-length={30}
              />
              <Form.Control.Feedback type="invalid">{errors.about}</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Button type="submit">Next</Button>
        </Form>
      )}
    </Formik>
  );
}
