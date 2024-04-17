import React, { useState } from "react";
// import { GET_LEAD_BY_ID_END_POINT } from './consts';
// import { useSnackbar } from '../../contexts/snackbar/SnackbarContext';
// import useFormModal from '../crm/user-form/hooks/useFormModal';
// import usePostData from '../../hooks/usePostData';
// import { handleEmptyStringProperties } from '../crm/user-form/form/helpers';
// import { API_CRM } from '../../utils/apiBases';
//import { useSnackbarErrorMessage } from '../../hooks/useSnackbarErrorMessage';
import { defaultFormValues } from "../defaultFormValues";
import BidForm from "./UI/BidForm";
import { BidState, bidActions } from "../store/bidSlice";
import { useDispatch, useSelector } from "react-redux";
import { handleFieldData } from "./UI/helpers";

interface Props {
  isEditMode?: boolean;
  setIsEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddBid = ({ isEditMode = false, setIsEditMode }: Props) => {
  //   const { openSnackbar } = useSnackbar();
  //const { handleErrorMessage } = useSnackbarErrorMessage();
  //   const { openModal, toggleModals } = useFormModal();
  const [resetData, setResetData] = useState<boolean>(false);
  const selectedBidItem = useSelector((state: BidState) => state.selectedItem);

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

  const dispatch = useDispatch();

  const bids = useSelector((state: BidState) => state.items);
  const selectedBid = useSelector((state: BidState) => state.selectedItem);

  const defaultFormValues = handleFieldData(bids, selectedBid);

  const submitForm = async (data: any) => {
    const url = `/api/bids${isEditMode ? `/${selectedBidItem._id}` : ""}`;

    const result = await fetch(url, {
      method: isEditMode ? "PATCH" : "POST",
      body: JSON.stringify({ ...data }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (isEditMode) {
      dispatch(bidActions.updateBid({ _id: selectedBidItem._id, ...data }));
      setIsEditMode(false);
    }
    return result;
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
