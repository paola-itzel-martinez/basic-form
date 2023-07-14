import { EMAIL_REGEX, PASSWORD_REGEX } from "../../system-constants";
import { Field } from "./SignUp.types";

export const INITIAL_FORM = {
  username: "",
  email: "",
  password: "",
};

export const FIELDS = [
  {
    id: Field.USERNAME,
    name: Field.USERNAME,
    type: "text",
    placeholder: "paola",
    label: "User name",
    required: true,
    pattern: EMAIL_REGEX,
    errorMessage:
      "Username should be 3-16 characters and should not include any special character",
  },
  {
    id: Field.EMAIL,
    name: Field.EMAIL,
    type: "email",
    placeholder: "welcome@gmail.com",
    label: "Email",
    required: true,
    errorMessage: "It should be a valid email address",
  },
  {
    id: Field.PASSWORD,
    name: Field.PASSWORD,
    type: "password",
    label: "Password",
    required: true,
    pattern: PASSWORD_REGEX,
    errorMessage:
      "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character",
    isLast: true,
  },
];
