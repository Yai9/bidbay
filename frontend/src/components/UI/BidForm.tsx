import React, { FC, useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { defaultFormValues, validationSchema } from "../../defaultFormValues";
import Form from "./Form";

interface Props {
  defaultValues: typeof defaultFormValues;
  onSubmit: (data: unknown) => void;
  isLoading: boolean;
  title: string;
  resetData?: boolean;
}

const BidForm: FC<Props> = ({
  defaultValues,
  onSubmit,
  isLoading,
  title,
  resetData,
}) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(validationSchema),
  });
  const submitForm = handleSubmit(onSubmit);
  const { _reset } = control;

  useEffect(() => {
    if (resetData) _reset();
  }, [resetData, _reset]);

  return (
    <Form
      submit={submitForm}
      isLoading={isLoading}
      formHelpers={{ errors, control }}
      title={title}
    />
  );
};

export default BidForm;
