import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import React from "react";
import { useController } from "react-hook-form";
import { FormHelperText } from "@mui/material";
DateTimeField.propTypes = {};

function DateTimeField(props) {
  const { name, label, control, style } = props;
  const {
    field: { value, onChange, onBlur },
    fieldState: { invalid, error },
  } = useController({ control, name });
  return (
    <LocalizationProvider error={invalid} dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
        <DesktopDatePicker
          label={label}
          inputFormat="MM/dd/yyyy"
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          minDate={new Date()}
          renderInput={(params) => <TextField style={style} {...params} />}
        />
      </Stack>
      <FormHelperText style={{ color: "red" }}>{error?.message}</FormHelperText>
    </LocalizationProvider>
  );
}

export default DateTimeField;
