import React from "react";

export default function Alert(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    props.message && (
      <div className={`alert mt-2 mb-0 py-2 alert-${props.message.type}`}>
        <strong>{capitalize(props.message.type)} :</strong> {props.message.msg}
      </div>
    )
  );
}
