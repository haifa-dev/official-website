import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import styles from './FormStyles.module.scss';
import { submitForm } from '../../services/requestForm.service';
import { Alert } from "react-bootstrap";

export default function FormConfirmation({
  formState: {
    name,
    email,
    phone,
    about,
    businessType,
    description,
    isWebSite,
    webAddress,
    tasks,
    isBusinessPlan,
    businessPlan,
    isSystemDefined,
    systemDefinition,
    communityOrProfit,
    isFunded,
  },
  loadPreviousForm,
  loadNextForm,
}) {

  const [isBusy, setIsBusy] = useState(false);
  const [response, setResponse] = useState({result: true});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsBusy(true);
    var response = await submitForm(form, businessType !== "nonProfit");
    if (response.result) {
      loadNextForm(null);
    }
    else{
      setResponse(response);
      console.log(response.error)
    }
    setIsBusy(false);
  };

  let form = {
    name,
    email,
    phone,
    about,
  }
  if (businessType === "nonProfit") {
    form = {
      ...form,
      description,
      webAddress,
      tasks,
    };
  } else {
    form = {
      ...form,
      businessPlan,
      systemDefinition,
      communityOrProfit,
      isFunded,
    };
  }

  const UserDetails = () => {
    return (
      <>
        <tr className={response.error?.fieldName === "name"? "alert-danger" : null}>
          <th>Name:</th>
          <td>{name}</td>
        </tr>

        <tr className={response.error?.fieldName === "email"? "alert-danger" : null}>
          <th>Email:</th>
          <td>{email}</td>
        </tr>

        <tr className={response.error?.fieldName === "phone"? "alert-danger" : null}>
          <th>Phone number:</th>
          <td>{phone}</td>
        </tr>

        <tr className={response.error?.fieldName === "about"? "alert-danger" : null}>
          <th>About project:</th>
          <td>{about}</td>
        </tr>
      </>
    );
  };

  const NonProfitDetails = () => {
    return (
      <>
        <tr className={response.error?.fieldName === "description"? "alert-danger" : null}>
          <th>Organization description:</th>
          <td>{description}</td>
        </tr>
        
        <tr className={response.error?.fieldName === "webAddress"? "alert-danger" : null}>
          <th>Organization website address:</th>
          <td>{!isWebSite ? webAddress : "No website"}</td>
        </tr>

        <tr className={response.error?.fieldName === "tasks"? "alert-danger" : null}>
          <th>What needs to be done:</th>
          <td>{tasks}</td>
        </tr>
      </>
    );
  };

  const ForProfitDetails = () => {     
    return (
      <>
        <tr className={response.error?.fieldName === "businessPlan"? "alert-danger" : null}>
          <th>Link to business plan:</th>
          <td>{!isBusinessPlan ? businessPlan : "No business plan"}</td>
        </tr>
        
        <tr className={response.error?.fieldName === "systemDefinition"? "alert-danger" : null}>
          <th>Link to system definition:</th>
          <td>{!isSystemDefined ? systemDefinition : "No system definition"}</td>
        </tr>

        <tr className={response.error?.fieldName === "communityOrProfit"? "alert-danger" : null}>
          <th>Community or profit oriented:</th>
          <td>{communityOrProfit === "community" ? "Community oriented" : "Profit oriented"}</td>
        </tr>

        <tr className={response.error?.fieldName === "isFunded"? "alert-danger" : null}>
          <th>Is your business funded:</th>
          <td>{isFunded ? "Yes" : "No"}</td>
        </tr>
      </>
    );
  };

  const LoadingDots = () => {
    const dots = [];
    for (let i=0; i<10; i++) {
      dots.push(<div key={`dots-${i}`}>•</div>);
    }
    return <div className={styles.loadingDots}>{dots}</div>;
  }

  return (
    <>
      <table>
        <tbody>
        <UserDetails />
        {
          businessType === "nonProfit" 
          ? <NonProfitDetails /> 
          : <ForProfitDetails />
        }
        </tbody>
      </table>
      <div className={styles.bottomContainer}>
        {
          !response.result // The result is false
          ? <Alert className={styles.errorMessage} variant="danger">
              {response.error.text?.split("<br>").map(str => <span>{str}</span>)}
            </Alert> 
          : null
        }
        { 
          isBusy
          ? <LoadingDots/> 
          : <div className={styles.bottomButtons}>
              <Button onClick={loadPreviousForm}
                      variant="outline-primary"
                      className="mr-2" >
                Edit fields
              </Button>
              <Button onClick={handleSubmit} disabled={!response.result}>Submit</Button>
            </div>
        }
      </div>
    </>
  );
}
