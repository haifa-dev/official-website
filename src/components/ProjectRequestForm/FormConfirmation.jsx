import React from "react";
import styles from "./requestForm.module.scss";

export default function FormConfirmation({
  formState,
  loadPreviousForm,
  loadNextForm,
}) {
  const postForProfit = async (form) => {
    console.table(form);
  };

  const postNonProfit = async (form) => {
    console.table(form);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.businessType === "nonProfit") {
      postNonProfit(form);
    } else if (form.businessType === "forProfit") {
      postForProfit(form);
    } else {
      throw new console.error("business type doesn't match");
    }
    loadNextForm(null);
  };

  const form = {
    fullName: formState.fullName,
    email: formState.email,
    phoneNumber: formState.phoneNumber,
    aboutProject: formState.aboutProject,
    businessType: formState.businessType,
  };

  if (form.businessType === "nonProfit") {
    form.nonProfitDesc = formState.nonProfitDesc;
    form.nonProfitWebSite = formState.nonProfitWebSite;
    form.nonProfitWebAddress = formState.nonProfitWebAddress;
    form.nonProfitTasks = formState.nonProfitTasks;
  } else {
    form.businessPlan = formState.businessPlan;
    form.linkToDocs = formState.linkToDocs;
    form.systemDefinition = formState.systemDefinition;
    form.systemDefinitionFile = formState.systemDefinitionFile;
    form.CommunityOrProfit = formState.CommunityOrProfit;
    form.isFunded = formState.isFunded;
  }

  return (
    <form className={styles.requestForm} onSubmit={handleSubmit}>
      <h2>please confirm form details:</h2>

      <div className={styles.confirmationField}>
        <span className={styles.confirmationKey}>Name:</span>
        <span className={styles.confirmationValue}>{form.fullName}</span>
      </div>

      <div className={styles.confirmationField}>
        <span className={styles.confirmationKey}>Email:</span>
        <span className={styles.confirmationValue}>{form.email}</span>
      </div>

      <div className={styles.confirmationField}>
        <span className={styles.confirmationKey}>Phone number:</span>
        <span className={styles.confirmationValue}>{form.phoneNumber}</span>
      </div>

      <div className={styles.confirmationField}>
        <span className={styles.confirmationKey}>Business Type:</span>
        <span className={styles.confirmationValue}>{form.businessType}</span>
      </div>

      <div className={styles.confirmationField}>
        <span className={styles.confirmationKey}>About your project:</span>
        <span className={styles.confirmationValue}>{form.aboutProject}</span>
      </div>

      {form.businessType === "nonProfit" ? (
        <>
          <div className={styles.confirmationField}>
            <span className={styles.confirmationKey}>
              Organization description:
            </span>
            <span className={styles.confirmationValue}>
              {form.nonProfitDesc}
            </span>
          </div>

          <div className={styles.confirmationField}>
            <span className={styles.confirmationKey}>
              Does your organization have a website:
            </span>
            <span className={styles.confirmationValue}>
              {form.nonProfitWebSite}
            </span>
          </div>

          <div className={styles.confirmationField}>
            <span className={styles.confirmationKey}>
              Organization website address:
            </span>
            <span className={styles.confirmationValue}>
              {form.nonProfitWebAddress}
            </span>
          </div>

          <div className={styles.confirmationField}>
            <span className={styles.confirmationKey}>
              What needs to be done:
            </span>
            <span className={styles.confirmationValue}>
              {form.nonProfitTasks}
            </span>
          </div>
        </>
      ) : (
        <>
          <div className={styles.confirmationField}>
            <span className={styles.confirmationKey}>Your business plan:</span>
            <span className={styles.confirmationValue}>
              {form.businessPlan}
            </span>
          </div>

          <div className={styles.confirmationField}>
            <span className={styles.confirmationKey}>Link to docs:</span>
            <span className={styles.confirmationValue}>{form.linkToDocs}</span>
          </div>

          <div className={styles.confirmationField}>
            <span className={styles.confirmationKey}>
              Do you have a system definition:
            </span>
            <span className={styles.confirmationValue}>
              {form.systemDefinition}
            </span>
          </div>

          <div className={styles.confirmationField}>
            <span className={styles.confirmationKey}>
              Link to system definition file:
            </span>
            <span className={styles.confirmationValue}>
              {form.systemDefinitionFile}
            </span>
          </div>

          <div className={styles.confirmationField}>
            <span className={styles.confirmationKey}>
              Is your business community or profit orianted:
            </span>
            <span className={styles.confirmationValue}>
              {form.CommunityOrProfit}
            </span>
          </div>

          <div className={styles.confirmationField}>
            <span className={styles.confirmationKey}>
              Is your business funded:
            </span>
            <span className={styles.confirmationValue}>{form.isFunded}</span>
          </div>
        </>
      )}
      <button onClick={loadPreviousForm}>Edit fields</button>
      <button type="submit">Submit</button>
    </form>
  );
}
