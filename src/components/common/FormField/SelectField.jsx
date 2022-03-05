import { FormHelperText } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import PropTypes from "prop-types";
import React from "react";
import { useController } from "react-hook-form";
SelectField.propTypes = {
  name: PropTypes.string,
};

function SelectField(props) {
  const { name, control, options, style } = props;
  const {
    field: { value, onChange, onBlur },
    fieldState: { invalid, error },
  } = useController({ name, control });
  return (
    <FormControl
      fullWidth
      error={invalid}
      style={{ display: "block", marginTop: "15px" }}
    >
      <Select
        style={style}
        size="small"
        labelId={`${name}-label`}
        id="demo-simple-select"
        value={value}
        label="Age"
        onChange={onChange}
        defaultValue={1}
        onBlur={onBlur}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{error?.message}</FormHelperText>
    </FormControl>
  );
}

export default SelectField;
