import React from "react";
import FormMain from "../../ProjectRequestForm/FormMain";
import Container from "react-bootstrap/Container";

const RequestsFormPage = () => {
  return (
    <Container>
      <h3>Project Request</h3>
      <p>Tell us about your project.</p>
      <FormMain />
    </Container>
  );
};

export default RequestsFormPage;
