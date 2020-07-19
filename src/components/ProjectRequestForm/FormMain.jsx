import React, { useState } from "react";
import FormUser from "./FormUser";
import FormNonProfit from "./FormNonProfit";
import FormForProfit from "./FormForProfit";
import FormConfirmation from "./FormConfirmation";
import FormSubmitted from "./FormSubmitted";

export default function RequestForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    about: "",
    businessType: "",
    description: "",
    isWebSite: "",
    webAddress: "",
    tasks: "",
    isBusinessPlan: "",
    businessPlan: "",
    isSystemDefined: "",
    systemDefinition: "",
    communityOrProfit: "",
    isFunded: "",
  });
  const [formtype, setFormType] = useState("formUser");

  const loadNextForm = (formType) => setFormType(formType);
  const loadPreviousForm = (e) => {
    e.preventDefault();
    setFormType("formUser");
  };

  switch ("confirmForm") {
    case "formUser":
      return (
        <FormUser
          formState={formState}
          setFormState={setFormState}
          loadNextForm={loadNextForm}
        />
      );

    case "nonProfit":
      return (
        <FormNonProfit
          formState={formState}
          setFormState={setFormState}
          loadPreviousForm={loadPreviousForm}
          loadNextForm={loadNextForm}
        />
      );

    case "forProfit":
      return (
        <FormForProfit
          formState={formState}
          setFormState={setFormState}
          loadPreviousForm={loadPreviousForm}
          loadNextForm={loadNextForm}
        />
      );

    case "confirmForm":
      return (
        <FormConfirmation
          formState={formState}
          loadPreviousForm={loadPreviousForm}
          loadNextForm={loadNextForm}
        />
      );

    default:
      return <FormSubmitted />;
  }
}
