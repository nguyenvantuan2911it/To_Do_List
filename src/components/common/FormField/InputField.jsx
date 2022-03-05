import { TextField } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { useController } from "react-hook-form";

InputField.propTypes = {
  name: PropTypes.string,
};

function InputField(props) {
  const { control, name, label, style, ...inputProps } = props;
  const {
    field: { value, onChange, onBlur, ref }, // ref khi validate sai no se tu chi den
    fieldState: { invalid, error },
  } = useController({
    control,
    name,
  });
  return (
    <TextField
      id={`${name} standard-basic`}
      label={label}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      inputRef={ref}
      error={invalid}
      style={style}
      helperText={error?.message}
      inputProps={inputProps}
    />
  );
}

export default InputField;
