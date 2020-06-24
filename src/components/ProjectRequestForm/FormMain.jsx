import React, { useState } from "react";
import FormUser from "./FormUser";
import FormNonProfit from "./FormNonProfit";
import FormForProfit from "./FormForProfit";
import FormConfirmation from "./FormConfirmation";
import FormSubmitted from "./FormSubmitted";

export default function RequestForm() {
  const [formState, setFormState] = useState({});
  const [formtype, setFormType] = useState("formUser");

  console.log(formState);

  const loadNextForm = (formType) => setFormType(formType);
  const loadPreviousForm = (e) => {
    e.preventDefault();
    setFormType("formUser")
  };

  switch (formtype) {
    case "formUser":
      return (
        <FormUser setFormState={setFormState} loadNextForm={loadNextForm} />
      );

    case "nonProfit":
      return (
        <FormNonProfit
          setFormState={setFormState}
          loadPreviousForm={loadPreviousForm}
          loadNextForm={loadNextForm}
        />
      );

    case "forProfit":
      return (
        <FormForProfit
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
     )

    default:
      return <FormSubmitted />;
  }
}
