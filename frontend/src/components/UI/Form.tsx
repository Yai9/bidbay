import React, { FC } from "react";
import { Control, FieldError, FieldErrors } from "react-hook-form";
import { formFields } from "../../defaultFormValues";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { Fields } from "../../types";
import ControlledInput from "./ControlledInput";

const styles = {
  submit: {
    textAlign: "right",
    paddingRight: "7px",
    marginTop: "18px",
  },
  submitBtn: {
    padding: "12px",
    fontSize: "14px",
  },
};

interface Props {
  title: string;
  isLoading: boolean;
  submit: () => void;
  formHelpers: {
    control: Control<Fields>;
    errors: FieldErrors;
  };
}

const Form: FC<Props> = ({ submit, isLoading, formHelpers }) => {
  const { control, errors } = formHelpers;

  return (
    <Box>
      <form
        onSubmit={submit}
        style={{ padding: "0 24px", display: "flex", flexDirection: "column" }}
      >
        {formFields.map((field) => {
          return (
            <ControlledInput
              key={field.name}
              name={field.name}
              label={field.label}
              control={control}
              isError={errors[field.name] as FieldError}
              errorMsg={errors[field.name]?.message as string}
            />
          );
        })}

        <Box sx={styles.submit}>
          <Button
            variant="contained"
            disabled={isLoading}
            type="submit"
            sx={styles.submitBtn}
          >
            {isLoading ? <CircularProgress size="20px" /> : "SUBMIT"}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Form;
