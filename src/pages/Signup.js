import { Field, Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../app/authSlice";
import {motion} from "framer-motion";
import { useState } from "react";

export default function Singup() {
    console.log("singup rendered")
    const [status, setStatus] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <motion.div
            initial={{opacity: 0, translateY: 30}}
            animate={{opacity: 1, translateY: 0}}
            className="w-full h-full flex justify-center items-center my-48"
        >
            <div className="p-12 text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white w-[500px] h-fit">

                <h3 className="header-our-brand text-3xl font-semibold leading-5 dark:text-white mb-8">Sign Up</h3>
                <Formik 
                    initialValues={{
                        email: '',
                        password: ''
                    }}
                    onSubmit={values => {
                        let userData = {
                            email: values.email,
                            password: values.password
                        }

                        axios.post("http://localhost:3000/Register", userData)
                        .then(response => {
                            if (response.data.Status) {
                                dispatch(login(userData));
                                navigate('/');
                            } else {
                                setStatus("Email Or Password were wrong.")
                            }
                        })
                        .catch(error => {
                                setStatus("Email Or Password were wrong...")
                        });
                    }}
                >
                    {({values, errors, touched}) => (
                        <Form>
                            <div className="mb-6">
                                <label className='text-base block mb-2 font-medium text-gray-900 dark:text-white'>Your Email</label>
                                <Field name="email" type='email' className={`${errors.email && touched.email ? "input-error" : null} w-full p-2.5 text-base bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`} placeholder="type your email"/>
                            </div>
                            <div className="mb-6">
                                <label className='text-base block mb-2 font-medium text-gray-900 dark:text-white'>Password</label>
                                <Field name="password" type='password' className={`${errors.email && touched.email ? "input-error" : null} w-full p-2.5 text-base bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`} placeholder="type your password"/>
                                <p className="text-red-600 text-sm mt-4">{status}</p>
                            </div>
                            <button type="submit" className='text-white w-[100%] bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-xl px-4 lg:px-5 py-2 lg:py-2 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800'>Sign In</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </motion.div>
    )
}