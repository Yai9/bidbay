import { BidData } from "./store/bidSlice";
import { Bid, Fields, FormField } from "./types";
import * as yup from "yup";

export const defaultFormValues = {
  title: "",
  description: "",
  longDescription: "",
  image: "",
};

export const formFields: FormField[] = [
  {
    name: "title",
    label: "Title",
  },
  {
    name: "description",
    label: "Description",
  },
  {
    name: "longDescription",
    label: "Long Description",
  },
  {
    name: "image",
    label: "Bid Image",
  },
];

export const validationSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  longDescription: yup.string(),
  image: yup.string().required("Image is required"),
});
