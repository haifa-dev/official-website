import React from "react";
import { Formik } from "formik";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import * as yup from "yup";
import FieldDescription from './FieldDescription';

export default function FormNonProfit({
  formState,
  setFormState,
  loadPreviousForm,
  loadNextForm,
}) {
  return (
    <Formik
      initialValues={formState}
      validationSchema={yup.object().shape({
        description: yup.string().required("Required field"),
        isWebSite: yup.boolean(),
        webAddress: yup
          .string()
          .when("isWebSite", (isWebSite, schema) => {
            return isWebSite 
              ? schema.notRequired()
              : schema.required("Required field").url("Invalid url (e.g: http://example.com)");
          }),
          tasks: yup
          .string()
          .required("Required field")
          .min(30, "minimum 30 characters"),
      })}
      onSubmit={(values) => {
        setFormState((prev) => {
          return { ...prev, ...values };
        });
        loadNextForm("confirmForm");
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} sm="10" md="8" controlId="field_1">
              <Form.Label>Briefly describe what your organization stands for:</Form.Label>
              <Form.Control
                type="text"
                name="description"
                value={values.description}
                onChange={handleChange}
                isValid={touched.description && !errors.description}
                isInvalid={touched.description && errors.description}
              />
              <Form.Control.Feedback type="invalid">{errors.description}</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} sm="10" md="8" controlId="field_2">
              <Form.Label>Link to your organization's website:</Form.Label>
              <Form.Control
                type="text"
                name="webAddress"
                value={values.isWebSite ? "" : values.webAddress}
                onChange={handleChange}
                disabled={values.isWebSite ? true : false}
                isValid={touched.webAddress && !errors.webAddress}
                isInvalid={touched.webAddress && errors.webAddress}
              />
              <Form.Control.Feedback type="invalid">{errors.webAddress}</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          
          <Form.Row>  
            <Form.Group as={Col} sm="5" md="4" controlId="field_3">
              <Form.Check
                className="ml-3"
                custom
                label="I don't have a website"
                type="checkbox"
                id="isWebSite"
                name="isWebSite"
                value={values.isWebSite}
                onChange={handleChange}
                defaultChecked={values.isWebSite ? true : false}
                />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} sm="10" md="8" controlId="field_4">
              <Form.Label>
                <span>Tell us about what needs to be done:</span>
                <FieldDescription>
                  Describe in as many details as possible how you want your project to look and work
                </FieldDescription>
              </Form.Label>
              <Form.Control
                as="textarea"
                name="tasks"
                value={values.tasks}
                rows="5"
                onChange={handleChange}
                isValid={touched.tasks && !errors.tasks}
                isInvalid={touched.tasks && errors.tasks}
              />
              <Form.Control.Feedback type="invalid">{errors.tasks}</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Button onClick={loadPreviousForm} variant="outline-primary" className="mr-2">Previous</Button>
          <Button type="submit">Confirm submission</Button>
        </Form>
      )}
    </Formik>
  );
}
