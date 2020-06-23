import React from "react";

export default function FormConifrmation({ formState, loadPreviousForm }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formState, null, 2));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        please confirm form details:
        {
            Object.entries(formState).map(([key, value]) => {
                return <div>{key}: {value}</div>
            })
        }
        <button onClick={loadPreviousForm}>Previous</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
