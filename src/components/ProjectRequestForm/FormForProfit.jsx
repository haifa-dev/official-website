import React from "react";
import styles from "./requestForm.module.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function FormForProfit({ formState, setFormState, loadPreviousForm, loadNextForm }) {
  return (
    <Formik
      initialValues={formState}
      validationSchema={Yup.object().shape({
        businessPlan: Yup.string().required("Required field"),
        linkToDocs: Yup.string()
          .url("Invalid url (e.g: http://example.com)")
          .required("Required field"),
        systemDefinition: Yup.string().required("Required field"),
        CommunityOrProfit: Yup.string().required("Required field"),
        isFunded: Yup.string().required("Required field"),
      })}
      onSubmit={(values) => {
        setFormState((prev) => {
          return { ...prev, ...values };
        });
        loadNextForm("confirmForm")
      }}
    >
      <Form className={styles.requestForm}>
        <div className={styles.inputField}>
          <label>Is there a long-term business plan?</label>
          <Field
            id="haveBusinessPlan"
            type="radio"
            name="businessPlan"
            value="yes"
          />
          <label className={styles.labelRadio} htmlFor="haveBusinessPlan">
            Yes
          </label>

          <Field
            id="noBusinessPlan"
            type="radio"
            name="businessPlan"
            value="no"
          />
          <label className={styles.labelRadio} htmlFor="noBusinessPlan">
            No
          </label>
          <ErrorMessage
            name="businessPlan"
            render={(msg) => <span className={styles.formError}>{msg}</span>}
          />
        </div>

        <div className={styles.inputField}>
          <label>
            Is the system defined properly? (provide link to slides)
          </label>
          <Field
            id="systemDefined"
            type="radio"
            name="systemDefinition"
            value="yes"
          />
          <label className={styles.labelRadio} htmlFor="systemDefined">
            Yes
          </label>

          <Field
            id="systemNotDefined"
            type="radio"
            name="systemDefinition"
            value="no"
          />
          <label className={styles.labelRadio} htmlFor="systemNotDefined">
            No
          </label>
          <ErrorMessage
            name="systemDefinition"
            render={(msg) => <span className={styles.formError}>{msg}</span>}
          />

          <label className={styles.addFileLabel} htmlFor="systemDefinitionFile">
            Select a file:
          </label>
          <input
            type="file"
            id="systemDefinitionFile"
            name="systemDefinitionFile"
          ></input>
        </div>

        <div className={styles.inputField}>
          <label>Community or profit oriented?</label>
          <Field
            id="forCommunity"
            type="radio"
            name="CommunityOrProfit"
            value="community"
          />
          <label className={styles.labelRadio} htmlFor="forCommunity">
            Community oriented
          </label>

          <Field
            id="forProfit"
            type="radio"
            name="CommunityOrProfit"
            value="profit"
          />
          <label className={styles.labelRadio} htmlFor="forProfit">
            For profit
          </label>
          <ErrorMessage
            name="CommunityOrProfit"
            render={(msg) => <span className={styles.formError}>{msg}</span>}
          />
        </div>

        <div className={styles.inputField}>
          <label>Do you have funding?</label>
          <Field id="funded" type="radio" name="isFunded" value="yes" />
          <label className={styles.labelRadio} htmlFor="funded">
            Yes
          </label>

          <Field id="notFunded" type="radio" name="isFunded" value="no" />
          <label className={styles.labelRadio} htmlFor="notFunded">
            No
          </label>
          <ErrorMessage
            name="isFunded"
            render={(msg) => <span className={styles.formError}>{msg}</span>}
          />
        </div>

        <div className={styles.inputField}>
          <label htmlFor="linkToDoc">
            Link to doc that pitches the project:
          </label>
          <Field id="linkToDoc" type="text" name="linkToDocs" />
          <ErrorMessage
            name="linkToDocs"
            render={(msg) => <span className={styles.formError}>{msg}</span>}
          />
        </div>
        <button onClick={loadPreviousForm}>Previous</button>
        <button type="submit">Confirm submission</button>
      </Form>
    </Formik>
  );
}
