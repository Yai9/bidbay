import { defaultFormValues } from "./defaultFormValues";

export interface Bid {
  title: string;
  description: string;
  longDescription?: string;
  image: string;
}

export interface Fields {
  title: string;
  description: string;
  longDescription?: string;
  image: string;
}

export interface FormField {
  name: keyof typeof defaultFormValues;
  label: string;
}
