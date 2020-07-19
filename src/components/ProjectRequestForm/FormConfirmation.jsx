import React from "react";
import Button from "react-bootstrap/Button";

export default function FormConfirmation({ formState, loadPreviousForm, loadNextForm }) {
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
    name: formState.name,
    email: formState.email,
    phone: formState.phone,
    about: formState.about,
    businessType: formState.businessType,
  };

  if (form.businessType === "nonProfit") {
    form.description = formState.description;
    form.isWebSite = formState.isWebSite;
    form.webAddress = formState.webAddress;
    form.tasks = formState.tasks;
  } else {
    form.isBusinessPlan = formState.isBusinessPlan;
    form.businessPlan = formState.businessPlan;
    form.isSystemDefined = formState.isSystemDefined;
    form.systemDefinition = formState.systemDefinition;
    form.communityOrProfit = formState.communityOrProfit;
    form.isFunded = formState.isFunded;
  }

  const UserDetails = () => {
    return (
      <>
        <tr>
          <th>Name:</th>
          <td>{form.fullName} Tomer Matmon</td>
        </tr>

        <tr>
          <th>Email:</th>
          <td>{form.email} Tomer@gmail.com</td>
        </tr>

        <tr>
          <th>Phone number:</th>
          <td>{form.phoneNumber} 84587345897</td>
        </tr>

        <tr>
          <th>About project:</th>
          <td>{form.aboutProject} m,nsdfljsnflwnf.mf lsdlfnslfgnsjfnsfnsljfn nfljsfnslfn sjfnlsjdnfsdfljsdnfsdlf</td>
        </tr>
      </>
    )
  }

  const NonProfitDetails = () => {
    return (
      <>
        <tr>
          <th>Organization description:</th>
          <td>{form.description} lnsdflnsf asflnsflnflknswf weflnsflsdnflksdfsdf lweflwenfwjgnlwjfn sfnsljdfsdf</td>
        </tr>

        <tr>
          <th>Organization website address:</th>
          <td>{form.webAddress} https://www.google.com/search?sxsrf=ALeKk03FqXziNXKG5604b8HuDISlyF3y</td>
        </tr>

        <tr>
          <th>What needs to be done:</th>
          <td>{form.tasks} admads;kfmsadf akdfksmf;ksmfsd sdmfl;sfs mlsdflsdfks d;fms</td>
        </tr>
      </>
    )
  }

  const ForProfitDetails = () => {
    return (
      <>
        <tr>
          <th>Your business plan:</th>
          <td>{form.businessPlan} ladflnadfkl laflafnalfadljfnsdjfnsd kksjdfnsfn skfksnfksdnfkjsnfksdf s</td>
        </tr>

        <tr>
          <th>Link to docs:</th>
          <td>{form.linkToDocs} https://www.google.com/search?sxsrf=ALeKk03FqXziNXKG5604b8HuDISlyF3y</td>
        </tr>

        <tr>
          <th>Link to system definition file:</th>
          <td>{form.systemDefinitionFile} https://www.google.com/search?sxsrf=ALeKk03FqXziNXKG5604b8HuDISlyF3y</td>
        </tr>

        <tr>
          <th>Is your business funded:</th>
          <td>{form.isFunded ? "Yes" : "No"} Yes</td>
        </tr>
      </>
    )
  }

  return (
    <table>
      <UserDetails />
      {form.businessType === "nonProfit" ? (
        <NonProfitDetails />
      ) : (
        <ForProfitDetails />
      )}
      <Button onClick={loadPreviousForm} variant="outline-primary" className="mr-2">Edit fields</Button>
      <Button onClick={handleSubmit}>Submit</Button>
    </table>
  );
}
