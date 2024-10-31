import { useDispatch } from "react-redux";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { login } from "../app/authSlice";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import axios from "axios";

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const countries = [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", 
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", 
        "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", 
        "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", 
        "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", 
        "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", 
        "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", 
        "Cyprus", "Czechia (Czech Republic)", "Denmark", "Djibouti", "Dominica", 
        "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", 
        "Eritrea", "Estonia", "Eswatini (fmr. Swaziland)", "Ethiopia", "Fiji", "Finland", 
        "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", 
        "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", 
        "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", 
        "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", 
        "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", 
        "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", 
        "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", 
        "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", 
        "Morocco", "Mozambique", "Myanmar (formerly Burma)", "Namibia", "Nauru", "Nepal", 
        "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", 
        "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine State", 
        "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", 
        "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", 
        "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", 
        "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", 
        "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", 
        "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", 
        "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", 
        "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", 
        "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", 
        "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", 
        "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
    ];

    const loginValidationSchema = Yup.object().shape({
        name: Yup.string()
        .min(2, 'Too Short!')
        .max(25, 'Too Long!')
        .required('Required'),

        phoneNumber: Yup.string()
        .required("Phone number is required")
        .matches(/^\d{3} \d{3} \d{4}$/g, "Invalid phone number"),

        email: Yup.string()
        .email()
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i)
        .required("Email is required"),

        password: Yup.string()
        .required("Password is required")
        .min(6, "Password is too short - should be 6 chars minimum"),
    })

    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="login p-12 text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white w-[500px] h-fit">

                <h3 className="header-our-brand text-3xl font-semibold leading-5 dark:text-white mb-8">Create Your Free Account</h3>
                <Formik 
                    initialValues={{
                        name: '',
                        country: 'Turkey',
                        phoneNumber: '',
                        email: '',
                        password: ''
                    }}
                    validationSchema={loginValidationSchema}
                    onSubmit={values => {
                        let userData = {
                            userName: values.name,
                            country: values.country,
                            phoneNumber: values.phoneNumber,
                            email: values.email,
                            password: values.password
                        };


                        axios.post("http://localhost:3000/SetUser", userData)
                        .then(response => {
                            if (response.data.Status) {
                                dispatch(login(userData));
                                navigate('/');
                            } else {
                                console.log("There was an error while saving!")
                            }
                        })
                        .catch(error => {
                            console.error("There was an errorX while saving!");
                        });
                    }}
                >
                    {({values, errors, touched}) => (
                        <Form>
                            <div className="mb-6">
                                <label className='text-base block mb-2 font-medium text-gray-900 dark:text-white'>Name</label>
                                <Field name="name" type='text' className={`${errors.email && touched.email ? "input-error" : null} w-full p-2.5 text-base bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`} placeholder="type your name"/>
                                <ErrorMessage name="name" component="span" className="error text-red-600 text-sm" />
                            </div>
                            <div className="mb-6">
                                <label className='text-base block mb-2 font-medium text-gray-900 dark:text-white'>Country</label>
                                <Field name="country" as="select" className={`${errors.email && touched.email ? "input-error" : null} w-full p-2.5 text-base bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}>
                                    {countries.map((country, index) => (
                                        <option key={index} value={country}>{country}</option>
                                    ))}
                                </Field>                    
                                <ErrorMessage name="country" component="span" className="error text-red-600 text-sm" />
                            </div>
                            <div className="mb-6">
                                <label className='text-base block mb-2 font-medium text-gray-900 dark:text-white'>Phone Number</label>
                                <Field name="phoneNumber" type='tel' className={`${errors.email && touched.email ? "input-error" : null} w-full p-2.5 text-base bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`} placeholder="444 444 4444"/>
                                <ErrorMessage name="phoneNumber" component="span" className="error text-red-600 text-sm" />
                            </div>
                            <div className="mb-6">
                                <label className='text-base block mb-2 font-medium text-gray-900 dark:text-white'>Your Email</label>
                                <Field name="email" type='email' className={`${errors.email && touched.email ? "input-error" : null} w-full p-2.5 text-base bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`} placeholder="type your email"/>
                                <ErrorMessage name="email" component="span" className="error text-red-600 text-sm" />
                            </div>
                            <div className="mb-6">
                                <label className='text-base block mb-2 font-medium text-gray-900 dark:text-white'>Password</label>
                                <Field name="password" type='password' className={`${errors.email && touched.email ? "input-error" : null} w-full p-2.5 text-base bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`} placeholder="type your password"/>
                                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">We’ll never share your details. Read our <a href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Privacy Policy</a>.</p>
                                <ErrorMessage name="password" component="span" className="error text-red-600 text-sm" />
                            </div>
                            <button type="submit" className='text-white w-[100%] bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-xl px-4 lg:px-5 py-2 lg:py-2 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800'>Send</button>
                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Already have an account? <NavLink to="/singup" state={{return_url: "signup"}} className="font-medium text-blue-600 hover:underline dark:text-blue-500">Sign in here</NavLink></p>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}