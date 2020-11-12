import React from "react";
import { Formik } from "formik";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import * as yup from "yup";
import FieldDescription from './FieldDescription';

export default function FormForProfit({
  formState,
  setFormState,
  loadPreviousForm,
  loadNextForm,
}) {
  return (
    <Formik
      initialValues={formState}
      validationSchema={yup.object().shape({
        isBusinessPlan: yup.boolean(),
        businessPlan: yup
          .string()
          .when("isBusinessPlan", (isBusinessPlan, schema) => {
            return isBusinessPlan
              ? schema.notRequired()
              : schema.required("Required field").url("Invalid url (e.g: http://example.com)");
          }),
          isSystemDefined: yup.boolean(),
        systemDefinition: yup
          .string()
          .when("isSystemDefined", (isSystemDefined, schema) => {
            return isSystemDefined
              ? schema.notRequired()
              : schema.required("Required field").url("Invalid url (e.g: http://example.com)");
          }),
        communityOrProfit: yup.string().required("Required field"),
        isFunded: yup.boolean(),
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
            <Form.Group as={Col} sm="8" md="7" controlId="field_1">
              <Form.Label>
                <span>Link to a business plan:</span> 
                <FieldDescription placement="bottom">
                  Please provide a link to a presentation or document describing your project's business plan. 
                  (You can host it on Google Drive or any other online storage)
                </FieldDescription>
              </Form.Label>
              <Form.Control
                type="text"
                name="businessPlan"
                value={values.isBusinessPlan ? "" : values.businessPlan}
                onChange={handleChange}
                disabled={values.isBusinessPlan ? true : false}
                isValid={touched.businessPlan && !errors.businessPlan}
                isInvalid={touched.businessPlan && errors.businessPlan}
              />
              <Form.Control.Feedback type="invalid">{errors.businessPlan}</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          
          <Form.Row>  
            <Form.Group as={Col} sm="8" md="7" controlId="field_2">
              <Form.Check
                className="ml-3"
                custom
                label="I don't have a business plan"
                type="checkbox"
                id="isBusinessPlan"
                name="isBusinessPlan"
                value={values.isBusinessPlan}
                onChange={handleChange}
                defaultChecked={values.isBusinessPlan ? true : false}
                />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} sm="8" md="7" controlId="field_3">
              <Form.Label>
                <span>Link to system specifications:</span>
                <FieldDescription>
                  Please provide a link to a presentation or document describing your system's specifications.
                  (Spec Sheet, Brief, ORS/FRS)
                </FieldDescription>
              </Form.Label>
              <Form.Control
                type="text"
                name="systemDefinition"
                value={values.isSystemDefined ? "" : values.systemDefinition}
                onChange={handleChange}
                disabled={values.isSystemDefined ? true : false}
                isValid={touched.systemDefinition && !errors.systemDefinition}
                isInvalid={touched.systemDefinition && errors.systemDefinition}
              />
              <Form.Control.Feedback type="invalid">{errors.systemDefinition}</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          
          <Form.Row>  
            <Form.Group as={Col} sm="8" md="7" controlId="field_4">
              <Form.Check
                className="ml-3"
                custom
                label="I don't have system definition"
                type="checkbox"
                id="isSystemDefined"
                name="isSystemDefined"
                value={values.isSystemDefined}
                onChange={handleChange}
                defaultChecked={values.isSystemDefined ? true : false}
                />
            </Form.Group>
          </Form.Row> 

          <Form.Row>
            <Form.Group as={Col} sm="8" md="7"  controlId="field_5" className="mt-3">
              <Form.Label>Is your business community or profit oriented?</Form.Label>
              <div className="ml-3 mt-2">
                <Form.Check type="radio" custom inline>
                  <Form.Check.Input
                    type="radio"
                    id="community"
                    name="communityOrProfit"
                    value="community"
                    onChange={handleChange}
                    defaultChecked={values.communityOrProfit === "community" ? true : false}
                    isValid={touched.communityOrProfit && !errors.communityOrProfit}
                    isInvalid={touched.communityOrProfit && errors.communityOrProfit}
                   />
                   <Form.Check.Label htmlFor="community">Community</Form.Check.Label>
                </Form.Check>

                <Form.Check type="radio" custom inline>
                  <Form.Check.Input
                    type="radio"
                    id="profit"
                    name="communityOrProfit"
                    value="profit"
                    onChange={handleChange}
                    defaultChecked={values.communityOrProfit === "profit" ? true : false}
                    isValid={touched.communityOrProfit && !errors.communityOrProfit}
                    isInvalid={touched.communityOrProfit && errors.communityOrProfit}
                  />
                  <Form.Check.Label htmlFor="profit">Profit</Form.Check.Label>
                </Form.Check>
              </div>
            </Form.Group>
          </Form.Row>

          <Form.Row>  
            <Form.Group as={Col} sm="8" md="7" controlId="field_6">
              <Form.Check
                className="mt-3"
                custom
                label="The project has funding"
                type="checkbox"
                id="isFunded"
                name="isFunded"
                value={values.isFunded}
                onChange={handleChange}
                defaultChecked={values.isFunded ? true : false}
                />
            </Form.Group>
          </Form.Row>

          <Button onClick={loadPreviousForm} variant="outline-primary" className="mr-2">Previous</Button>
          <Button type="submit">Confirm submission</Button>
        </Form>
      )}
    </Formik>
  );
}
