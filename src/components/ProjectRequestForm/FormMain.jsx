import React, { useState } from "react";
import FormUser from "./FormUser";
import FormNonProfit from "./FormNonProfit";
import FormForProfit from "./FormForProfit";
import FormConifrmation from "./FormConifrmation";

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
       <FormConifrmation 
         formState={formState}
         loadPreviousForm={loadPreviousForm}
       />
     )

    default:
      return <div>Form submitted</div>;
  }
}
