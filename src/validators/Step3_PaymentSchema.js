import * as yup from 'yup';
 
 export const PaymentSchema = yup.object().shape({
  card_holder_name: yup
  .string('Enter Card Holder Name')
  .min(3, "Name must be minimum 3 character")
  .required('Card Holder Name is required'),
  
  card_number: yup
  .string('Enter your Card Number')
  .min(16, "Card Number must be 16 character")
  .max(16, "Card Number must be 16 character")
  .required('Card Number is required')
  .matches(
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
    "Card Number is not valid"
  ),
  cvv: yup
  .string('Enter your CVV/CVC')
  .min(3, "CVV number minimum 3 character required")
  .max(4, "CVV number maximum 4 character required")
  .required('Card Number is required'),
  expiry: yup
  .string('Please Enter your Card expiry')
  .required('Please Enter your Card expiry')
  .typeError('Not a valid expiration date. Example: MM/YY')
  .max(5, 'Not a valid expiration date. Example: MM/YY')
  .matches(
    /([0-9]{2})\/([0-9]{2})/,
    'Not a valid expiration date. Example: MM/YY'
  ),
 });