import React, { useState, useEffect } from "react";
// import { GET_LEAD_BY_ID_END_POINT } from './consts';
// import { useSnackbar } from '../../contexts/snackbar/SnackbarContext';
// import useFormModal from '../crm/user-form/hooks/useFormModal';
import Button from "@mui/material/Button";
// import usePostData from '../../hooks/usePostData';
// import { handleEmptyStringProperties } from '../crm/user-form/form/helpers';
// import { API_CRM } from '../../utils/apiBases';
//import { useSnackbarErrorMessage } from '../../hooks/useSnackbarErrorMessage';
import { defaultFormValues } from "../defaultFormValues";
import BidForm from "./UI/BidForm";
import { postData } from "../api";
import { Bid } from "../types";

const AddBid = () => {
  //   const { openSnackbar } = useSnackbar();
  //const { handleErrorMessage } = useSnackbarErrorMessage();
  //   const { openModal, toggleModals } = useFormModal();
  const [resetData, setResetData] = useState<boolean>(false);

  //   const { mutate, isLoading } = usePostData(`${API_CRM}${GET_LEAD_BY_ID_END_POINT}`, {
  //     onSuccess: () => {
  //       openSnackbar('Lead has been created successfuly', 'success');
  //       toggleModals(false, false);
  //       setResetData(true);
  //     },
  //     // onError: (error) => {
  //     //   //handleErrorMessage(error);
  //     // },
  //   });

  const submitForm = async (data: any) => {
    await fetch(`/api/bids`, {
      method: "POST",
      body: JSON.stringify({ ...data }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(data, "data");
  };

  useEffect(() => {
    (async () => {
      const res = await fetch(`/api/bids`);
      await res.json();
    })();
  });

  const handleAddNewLead = () => {
    // toggleModals(true, false);
  };

  return (
    <>
      <BidForm
        defaultValues={defaultFormValues}
        isLoading={false}
        onSubmit={submitForm}
        title="Add New Bid"
        resetData={resetData}
      />
    </>
  );
};

export default AddBid;
