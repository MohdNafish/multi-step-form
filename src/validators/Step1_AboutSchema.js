import * as yup from 'yup';
 
 export const AboutSchema = yup.object().shape({
  firstName: yup
  .string('Enter your First Name')
  .min(3, "First Name must be minimum 3 character")
  .required('First Name is required'),
//   lastName: yup
//   .string('Enter your Last Name')
//   .min(3, "Last Name must be minimum 3 character")
//   .required('Last Name is required'),

  dob: yup
  .date()
  .required("Required")
  .nullable(),

//   gender: yup
//   .string()
//   .required(),

//   email: yup
//   .string('Enter your email')
//   .email('Please Enter valid email address')
//   .required('Email is required'),
//   password: yup
//   .string('Enter your Password')
//   .min(8, "Password must be minimum 8 character")
//   .required('Password is required'),
 });