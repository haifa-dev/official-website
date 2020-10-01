import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import styles from './FormStyles.module.scss';
import { submitForm } from '../../services/requestForm.service';

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsBusy(true);
    try {
      await submitForm(form.businessType === "forProfit");
      loadNextForm(null);
    } catch (err) {
      console.log(`Error submitting form: ${err.error}`);
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
        <tr>
          <th>Name:</th>
          <td>{name}</td>
        </tr>

        <tr>
          <th>Email:</th>
          <td>{email}</td>
        </tr>

        <tr>
          <th>Phone number:</th>
          <td>{phone}</td>
        </tr>

        <tr>
          <th>About project:</th>
          <td>{about}</td>
        </tr>
      </>
    );
  };

  const NonProfitDetails = () => {
    return (
      <>
        <tr>
          <th>Organization description:</th>
          <td>{description}</td>
        </tr>
        
        <tr>
          <th>Organization website address:</th>
          <td>{!isWebSite ? webAddress : "No website"}</td>
        </tr>

        <tr>
          <th>What needs to be done:</th>
          <td>{tasks}</td>
        </tr>
      </>
    );
  };

  const ForProfitDetails = () => {
    return (
      <>
        <tr>
          <th>Link to business plan:</th>
          <td>{!isBusinessPlan ? businessPlan : "No business plan"}</td>
        </tr>
        
        <tr>
          <th>Link to system definition:</th>
          <td>{!isSystemDefined ? systemDefinition : "No system definition"}</td>
        </tr>

        <tr>
          <th>Community or profit oriented:</th>
          <td>{communityOrProfit === "community" ? "Community oriented" : "Profit oriented"}</td>
        </tr>

        <tr>
          <th>Is your business funded:</th>
          <td>{isFunded ? "Yes" : "No"}</td>
        </tr>
      </>
    );
  };

  const LoadingDots = () => {
    const dots = [];
    for (let i=0; i<10; i++) {
      dots.push(<div>•</div>);
    }
    return <div className={styles.submitAnim}>{dots}</div>;
  }

  return (
    <>
      <table>
        <tbody>
        <UserDetails />
        {businessType === "nonProfit" ? (
          <NonProfitDetails />
        ) : (
          <ForProfitDetails />
        )}
        </tbody>
      </table>
      { 
        isBusy
        ? <LoadingDots/> 
        : [
          <Button onClick={loadPreviousForm}
                  variant="outline-primary"
                  className="mr-2" >
            Edit fields
          </Button>,
          <Button onClick={handleSubmit}>Submit</Button>
        ]
      }
    </>
  );
}
