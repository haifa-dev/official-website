import React from "react";
import Button from "react-bootstrap/Button";

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
      <Button
        onClick={loadPreviousForm}
        variant="outline-primary"
        className="mr-2"
      >
        Edit fields
      </Button>
      <Button onClick={handleSubmit}>Submit</Button>
    </>
  );
}
