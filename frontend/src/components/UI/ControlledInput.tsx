import React, { FC } from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import { Control, Controller, FieldError } from "react-hook-form";
import { defaultFormValues } from "../../defaultFormValues";
import Box from "@mui/material/Box";
import { TextareaAutosize, Typography, useTheme } from "@mui/material";
import { Fields } from "../../types";

interface StyledProps {
  borderColor?: string;
}

export const InputStyled = styled(TextField)(
  ({ borderColor }: StyledProps) => ({
    "& label.MuiInputLabel-root": {
      fontSize: "14px",
    },
    "& .MuiInputBase-input": {
      fontSize: "16px",
      color: "#000000",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: borderColor,
      },
      "&:hover fieldset": {
        borderColor: borderColor,
      },
      "&.Mui-focused fieldset": {
        borderColor: borderColor,
      },
    },
    width: "236px",
    margin: "12px 8px",
  })
);

export const TextAreaStyled = styled(TextareaAutosize)(
  ({ borderColor }: StyledProps) => ({
    fontSize: "16px",
    color: "#000000",
    padding: "8px",
    border: `1px solid ${borderColor}`,
    borderRadius: "4px",
    boxSizing: "border-box",
    width: "236px",
    margin: "12px 8px",
  })
);

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
  const theme = useTheme();

  return (
    <Box component="span" sx={styles.input}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          if (field.name === "longDescription") {
            return (
              <TextAreaStyled
                borderColor={theme.palette.primary.main}
                value={field.value}
                onChange={(newValue) => field.onChange(newValue)}
              />
            );
          }
          return (
            <InputStyled
              borderColor={theme.palette.primary.main}
              error={isError ? true : false}
              value={field.value}
              onChange={(newValue) => field.onChange(newValue)}
              size="small"
              InputLabelProps={{
                style: styles.inputLabel,
              }}
              label={label}
            />
          );
        }}
      />
      {isError && <Typography sx={styles.errorMsg}>{errorMsg}</Typography>}
    </Box>
  );
};

export default ControlledInput;
