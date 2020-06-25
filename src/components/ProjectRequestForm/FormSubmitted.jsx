import React from "react";
import styles from "./requestForm.module.scss";

export default function FormSubmitted() {
  return (
    <div className={styles.requestForm}>
      <h2>Form Submitted</h2>
      <p>Your request was proccesed. Our team will get back to you ASAP.</p>
    </div>
  );
}
