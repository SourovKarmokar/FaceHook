import React from "react";
import AuthLabel from "../Layout/AuthLabel";
import FormControl from "../Layout/FormControl";

const getChildId = (children) => {
  const child = React.Children.only(children);
  if ('id' in child?.props) {
    return child.props.id;
  }
}

const Field = ({ label, children, htmlFor, error }) => {
  const id = htmlFor || getChildId(children)
  return (
    <FormControl>
      {label && <AuthLabel htmlFor={id}>{label}</AuthLabel>}
      {children}
      {error && (
        <p role="alert" className="text-sm text-red-500">
          {error.message}
        </p>
      )}
    </FormControl>
  );
};

export default Field;