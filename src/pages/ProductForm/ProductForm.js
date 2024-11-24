import { Formik, Form, Field, ErrorMessage } from "formik";
import { NavLink } from "react-router-dom";
import * as Yup from 'yup';
export default function ProductForm() {
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
        city: Yup.string()
        .required("Phone number is required"),
        //.matches(/^\d{3} \d{3} \d{4}$/g, "Invalid phone number"),

        adressLine1: Yup.string()
        .required("Adress is required"),

        postalCode: Yup.string()
        .required("Postal Code is required")
    })

    return (
        <div className="w-full h-fit flex justify-center items-start gap-8 mt-16 ">
            <div className="login p-12 rounded-lg border shadow border-gray-600 bg-gray-800 text-white w-[50%] h-fit">
                <h3 className="header-our-brand text-3xl font-semibold leading-5 text-white mb-8">Adress</h3>
                <Formik 
                    initialValues={{
                        country: '',
                        city: 'Turkey',
                        adressLine1: '',
                        postalCode: '',
                    }}
                    validationSchema={loginValidationSchema}
                    onSubmit={values => {
                        let adressData = {
                            country: values.country,
                            city: values.city,
                            adressLine1: values.adressLine1,
                            postalCode: values.postalCode,
                        };
                    }}
                >
                    {({values, errors, touched}) => (
                        <Form>
                            <div className="flex">
                                <div className="mb-6 mr-3 w-[50%]">
                                    <label className='text-base block mb-2 font-medium text-white'>Country</label>
                                    <Field name="country" as="select" className={`${errors.email && touched.email ? "input-error" : null} w-full p-2.5 text-base  border  rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500`}>
                                        {countries.map((country, index) => (
                                            <option key={index} value={country}>{country}</option>
                                        ))}
                                    </Field>                    
                                    <ErrorMessage name="country" component="span" className="error text-red-600 text-sm" />
                                </div>
                                <div className="mb-6 w-[50%]">
                                    <label className='text-base block mb-2 font-medium text-white'>City</label>
                                    <Field name="city" type='text' className={`${errors.city && touched.city ? "input-error" : null} w-full p-2.5 text-base border rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500`} placeholder="type your city"/>
                                    <ErrorMessage name="city" component="span" className="error text-red-600 text-sm" />
                                </div>
                            </div>
                            <div className="flex">
                                <div className="mb-6 mr-3 w-[50%]">
                                    <label className='text-base block mb-2 font-medium text-white'>Adress Line</label>
                                    <Field name="adressLine1" type='text' className={`${errors.adressLine1 && touched.adressLine1 ? "input-error" : null} w-full p-2.5 text-base border rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500`} placeholder="type your adress"/>
                                    <ErrorMessage name="adressLine1" component="span" className="error text-red-600 text-sm" />
                                </div>
                                <div className="mb-6 w-[50%]">
                                    <label className='text-base block mb-2 font-medium text-white'>Postal Code</label>
                                    <Field name="postalCode" type='text' className={`${errors.postalCode && touched.postalCode ? "input-error" : null} w-full p-2.5 text-base border rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500`} placeholder="type your postal code"/>
                                    <ErrorMessage name="postalCode" component="span" className="error text-red-600 text-sm" />
                                </div>
                            </div>
                            <NavLink to="/product-forms/payment">
                                <button type="submit" className='text-white w-[100%] bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-xl px-4 lg:px-5 py-2 lg:py-2 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800'>Continue...</button>
                            </NavLink>
                        </Form>
                    )}
                </Formik>
            </div>

            {true ? (
                <div className="order-summary flex flex-col w-[20%] justify-between p-6 rounded-lg border shadow border-gray-600 bg-gray-800 text-white">
                    <div className="order">
                        <div className="space-y-4">
                            <div className="space-y-2 ">
                                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                                <div className="flex justify-between">
                                    <div className="font-normal text-gray-300">Original Price: </div>
                                    <div className="font-medium text-white">$8395.38</div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="font-normal text-gray-300">Savings: </div>
                                    <div className="font-medium text-white">$299.99</div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="font-normal text-gray-300">Store Pickup: </div>
                                    <div className="font-medium text-white">$99</div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="font-normal text-gray-300">Tax: </div>
                                    <div className="font-medium text-white">$799</div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between gap-4 border-t pt-2 border-gray-700">
                                <div className="text-base font-bold text-gray-300">Total</div>
                                <div className="text-base font-bold text-white">$8,191.00</div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div>

                </div>
            )}
        </div>
    )
}