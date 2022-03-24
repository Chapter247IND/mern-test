import * as yup from "yup";

const requireMessage = "This field is required ";

export const checkoutSchema = yup.object().shape({
  firstName: yup.string().required(requireMessage),
  lastName: yup.string().required(requireMessage),
  email: yup
    .string()
    .email("Email must be a valid email")
    .required(requireMessage),
  address: yup.string().required(requireMessage),
  country: yup.string().required(requireMessage),
  state: yup.string().required(requireMessage),
  zip: yup
    .number()
    .typeError("This field is must be numerical")
    .required(requireMessage),
});
// .typeError('This field is must be numerical')
