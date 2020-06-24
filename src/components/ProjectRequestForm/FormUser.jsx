import React from "react";
import styles from "./requestForm.module.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function FormMain({ formState, setFormState, loadNextForm }) {
  return (
    <Formik
      initialValues={formState}
      validationSchema={Yup.object().shape({
        fullName: Yup.string()
          .min(2, "minimum 2 letters")
          .required("Required field"),
        email: Yup.string().email("Invalid email").required("Required field"),
        phoneNumber: Yup.number().required("Required field"),
        businessType: Yup.string().required("Required field"),
        aboutProject: Yup.string()
          .required("Required field")
          .min(30, "minimum 50 characters"),
      })}
      onSubmit={(values) => {
        setFormState((prev) => {
          return { ...prev, ...values };
        });
        loadNextForm(values.businessType);
      }}
    >
      <>
        <p>Please fill the form so we can learn more about your project.</p>
        <Form className={styles.requestForm}>
          <div className={styles.inputField}>
            <label htmlFor="fullName">Full name:</label>
            <Field name="fullName" type="text" />
            <ErrorMessage
              name="fullName"
              render={(msg) => <span className={styles.formError}>{msg}</span>}
            />
          </div>

          <div className={styles.inputField}>
            <label htmlFor="email">Email:</label>
            <Field name="email" type="text" />
            <ErrorMessage
              name="email"
              render={(msg) => <span className={styles.formError}>{msg}</span>}
            />
          </div>

          <div className={styles.inputField}>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <Field name="phoneNumber" type="text" />
            <ErrorMessage
              name="phoneNumber"
              render={(msg) => <span className={styles.formError}>{msg}</span>}
            />
          </div>

          <div className={styles.inputField}>
            <label htmlFor="aboutProject">Tell about your project:</label>
            <Field
              as="textarea"
              maxLength="300"
              cols="30"
              rows="5"
              id="aboutProject"
              name="aboutProject"
            />
            <ErrorMessage
              name="aboutProject"
              render={(msg) => <span className={styles.formError}>{msg}</span>}
            />
          </div>

          <div className={styles.inputField}>
            <label>Select your business type:</label>

            <Field
              id="typeNonProfit"
              name="businessType"
              type="radio"
              value="nonProfit"
            />
            <label className={styles.labelRadio} htmlFor="typeNonProfit">
              Non Profit
            </label>

            <Field
              id="typeProfit"
              name="businessType"
              type="radio"
              value="forProfit"
            />
            <label className={styles.labelRadio} htmlFor="typeProfit">
              Profit
            </label>
          </div>
          <button type="submit">Next</button>
        </Form>
      </>
    </Formik>
  );
}
