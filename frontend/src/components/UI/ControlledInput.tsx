import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import React, { FC } from "react";
import { Control, Controller, FieldError } from "react-hook-form";
import { defaultFormValues } from "../../defaultFormValues";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { Fields } from "../../types";

export const InputStyled = styled(TextField)(() => ({
  "& label.MuiInputLabel-root": {
    fontSize: "14px",
  },
  "& .MuiInputBase-input": {
    fontSize: "16px",
    color: "#000000",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#89cff0",
    },
    "&:hover fieldset": {
      borderColor: "#89cff0",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#89cff0",
    },
  },
  width: "236px",
  margin: "12px 8px",
}));

const styles = {
  inputLabel: {
    fontSize: "14px",
  },
  input: {
    position: "relative",
    paddingY: "5px",
    color: "#000000",
  },
  errorMsg: {
    position: "absolute",
    bottom: -10,
    left: 10,
    fontSize: "11px",
    color: "#F14136",
  },
};

interface Props {
  name: keyof typeof defaultFormValues;
  label: string;
  control: Control<Fields>;
  isError: FieldError | undefined;
  errorMsg?: string;
}

const ControlledInput: FC<Props> = ({
  label,
  control,
  name,
  isError,
  errorMsg,
}) => {
  return (
    <Box component="span" sx={styles.input}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <InputStyled
            error={isError ? true : false}
            value={field.value}
            onChange={(newValue) => field.onChange(newValue)}
            size="small"
            InputLabelProps={{
              style: styles.inputLabel,
            }}
            label={label}
          />
        )}
      />
      {isError && <Typography sx={styles.errorMsg}>{errorMsg}</Typography>}
    </Box>
  );
};

export default ControlledInput;
