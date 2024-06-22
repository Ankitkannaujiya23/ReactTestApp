import * as yup from 'yup';

export const LoginOrSignupSchema=(isUserSignup)=>yup.object({
name: isUserSignup ? yup.string().required("*Please enter your name.").min(3): yup.string(),
password:yup.string().required("*Please enter password."),
email:yup.string().email().required("*Please enter your email."),
confirmPassword: isUserSignup ?yup.string().required('*Please enter confirm password.') : yup.string()
});

export const productValidationSchema = yup.object().shape({
    title: yup.string().required('Title is required'),
    description: yup.string().required('Description is required'),
    productPriceDateArr: yup.array().of(
        yup.object().shape({
            price: yup.string().required('Price is required'),
            date: yup.string().required('Date is required')
        })
    )
});