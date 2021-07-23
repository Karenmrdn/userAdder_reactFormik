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
  ref,
  ...props
}) => {
  return (
    <>
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
        ref={ref}
      />
      {isTouched && Boolean(error) ? (
        <div style={{ color: "red", marginBottom: "1rem" }}>{error}</div>
      ) : null}
    </>
  );
};

export default ValidatedInput;
