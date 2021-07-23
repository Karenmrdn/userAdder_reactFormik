import React from "react";

const ValidatedInput = ({
  id,
  title,
  type,
  name,
  value,
  onChange,
  onBlur,
  isTouched,
  error,
  ...props
}) => {
  return (
    <div>
      <label htmlFor={id}>{title}</label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        min={props.min}
        max={props.max}
        step={props.step}
      />
      {isTouched && Boolean(error) ? (
        <div style={{ color: "red", marginBottom: "1rem" }}>{error}</div>
      ) : null}
    </div>
  );
};

export default ValidatedInput;
