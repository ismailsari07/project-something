import axios from "axios";
import { getImageURL } from "../utils/image-util";
import {motion} from "framer-motion";
import { ErrorMessage, Form, Field, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
export default function Contact() {
    const [status, setStatus] = useState({isError: false, message: ""});

    const contactValidationSchema = Yup.object().shape({
        fullName: Yup.string()
        .min(2, 'Too Short!')
        .max(25, 'Too Long!')
        .required('Required!'),

        email: Yup.string()
        .email()
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i)
        .required("Email is required"),

        message: Yup.string()
        .required('Required!')
    })

    return (
            <motion.div
                initial={{opacity: 0, translateY: 30}}
                animate={{opacity: 1, translateY: 0}}
                className="contact-us-section p-14 mb-24 rounded-2xl flex justify-between items-center"
            >
                <div className="description-contact-us w-[40%]">
                    <img src={getImageURL("/contact-image.png")} className='object-fill h-full w-full rounded-3xl overflow-hidden' />
                </div>
                <div className="form-contact-us w-[40%] flex flex-col justify-between p-6">
                    <h3 className="header-our-brand text-5xl font-semibold leading-5 dark:text-white mb-16">Contact Us</h3>
                    <Formik
                        initialValues={{
                            fullName: '',
                            email: '',
                            message: ''
                        }}
                        validationSchema={contactValidationSchema}
                        onSubmit={(values, {resetForm}) => {
                            axios.post("http://localhost:3000/Contact", values)
                            .then(response => {
                                if (response.data.Status) {
                                    setStatus({isError: false, message: "Thank you for contacting us! Your message has been sent."})
                                    resetForm();
                                } 
                                else {
                                    setStatus({isError: true, message: "Oops! Something went wrong. Please try again."});
                                }
                            })

                        }}
                    >
                        {() => (
                            <Form>
                                <div className="first-name mb-6">
                                    <label className=''>Full Name</label>
                                    <Field name="fullName" type='text' className='w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500' placeholder="type your full name"/>
                                    <ErrorMessage name="fullName" component="span" className="error text-red-600 text-sm" />
                                </div>
                                <div className="email mb-6">
                                    <label className=''>Email</label>
                                    <Field name="email" type='email' className='w-full bg-gray-50 p-2.5 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500' placeholder="name@company.com"/>
                                    <ErrorMessage name="email" component="span" className="error text-red-600 text-sm" />
                                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">We’ll never share your details. Read our <a href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Privacy Policy</a>.</p>
                                </div>
                                <div className="message mb-3">
                                    <label className=''>Message</label>
                                    <Field name="message" as="textarea" type='textarea' className='w-full bg-gray-50 p-2.5 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'/>
                                    <ErrorMessage name="message" component="span" className="error text-red-600 text-sm" />
                                </div>
                                <p className={status.isError ? "text-red-500 mb-5" : "text-green-500 mb-5"}>{status.message}</p>
                                <button type="submit" className='text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-xl px-4 lg:px-5 py-2 lg:py-2 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800'>Send</button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </motion.div>
    )
}