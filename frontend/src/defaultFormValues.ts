import { Fields, FormField } from "./types";
import * as yup from "yup";

export const defaultFormValues: Fields = {
  title: "",
  description: "",
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
    name: "image",
    label: "Bid Image",
  },
];

export const validationSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  image: yup.string().required("Image is required"),
});
