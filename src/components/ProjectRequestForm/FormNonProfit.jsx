import React from "react";
import styles from "./requestForm.module.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

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
        nonProfitDesc: yup.string().required("Required field"),
        nonProfitWebSite: yup.string().required("Required field"),
        nonProfitWebAddress: yup.string()
          .url("Invalid url (e.g: http://example.com)")
          .when("nonProfitWebSite", (nonProfitWebSite, schema) => {
            return nonProfitWebSite === "yes"
              ? schema.required("Required field")
              : schema.notRequired();
          }),
        nonProfitTasks: yup.string()
          .required("Required field")
          .min(50, "minimum 50 characters"),
      })}
      onSubmit={(values) => {
        setFormState((prev) => {
          return { ...prev, ...values };
        });
        loadNextForm("confirmForm");
      }}
    >
      <Form className={styles.requestForm}>
        <div className={styles.inputField}>
          <label htmlFor="nonProfitDesc">
            What does your organization stand for?
          </label>
          <Field id="nonProfitDesc" name="nonProfitDesc" type="text" />
          <ErrorMessage
            name="nonProfitDesc"
            render={(msg) => <span className={styles.formError}>{msg}</span>}
          />
        </div>

        <div className={styles.inputField}>
          <label>Do you already have website?</label>
          <Field
            id="nonProfitWebSite"
            type="radio"
            name="nonProfitWebSite"
            value="yes"
          />
          <label className={styles.labelRadio} htmlFor="nonProfitWebSite">
            Yes
          </label>

          <Field
            id="forProfitWebSite"
            type="radio"
            name="nonProfitWebSite"
            value="no"
          />
          <label className={styles.labelRadio} htmlFor="forProfitWebSite">
            No
          </label>

          <label className={styles.inlineLabel} htmlFor="nonProfitWebAddress">
            Link to website:
          </label>
          <Field type="text" name="nonProfitWebAddress" />
          <ErrorMessage
            name="nonProfitWebSite"
            render={(msg) => <span className={styles.formError}>{msg}</span>}
          />
          <ErrorMessage
            name="nonProfitWebAddress"
            render={(msg) => <span className={styles.formError}>{msg}</span>}
          />
        </div>

        <div className={styles.inputField}>
          <label htmlFor="nonProfitTasks">
            Describe what needs to be done:
          </label>
          <Field
            as="textarea"
            maxLength="300"
            cols="30"
            rows="5"
            id="nonProfitTasks"
            name="nonProfitTasks"
          />
          <ErrorMessage
            name="nonProfitTasks"
            render={(msg) => <span className={styles.formError}>{msg}</span>}
          />
        </div>
        <button onClick={loadPreviousForm}>Previous</button>
        <button type="submit">Confirm submission</button>
      </Form>
    </Formik>
  );
}
