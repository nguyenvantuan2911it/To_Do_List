import { TextareaAutosize } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { useController } from "react-hook-form";

TextAreaField.propTypes = {
  name: PropTypes.string,
};

function TextAreaField(props) {
  const { control, name, label, style } = props;
  const {
    field: { value, onChange, onBlur, ref }, // ref khi validate sai no se tu chi den
  } = useController({
    control,
    name,
  });
  return (
    <>
      <TextareaAutosize
        maxRows={4}
        id={`${name} standard-basic`}
        aria-label="maximum height"
        style={style}
        label={label}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        ref={ref}
      />
    </>
  );
}

export default TextAreaField;
