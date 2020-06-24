import React from "react";

export default function FormConfirmation({
  formState,
  loadPreviousForm,
  loadNextForm,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // POST form to server
    loadNextForm(null);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        please confirm form details:
        {Object.entries(formState).map(([key, value], i) => {
          if (value.length !== 0)
            return (
              <div key={i}>
                {key}: {value}
              </div>
            );
        })}
        <button onClick={loadPreviousForm}>Previous</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
