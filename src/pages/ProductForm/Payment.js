import { Formik, Form, Field, ErrorMessage } from "formik";
import { NavLink } from "react-router-dom";
export default function Payment() {
    return (
        <div className="w-full h-fit flex justify-center items-start gap-8 mt-16">
            <div className="p-12 rounded-lg border shadow border-gray-600 bg-gray-800 text-white w-[50%] ">
                <h3 className="header-our-brand text-3xl font-semibold leading-5 text-white mb-8">Payment</h3>
                <Formik 
                    initialValues={{
                        fullName: '',
                        cardNumber: '',
                        cardExpiration: '',
                        cvv: '',
                    }}
                >
                    {({values, errors, touched}) => (
                        <Form>
                            <div className="flex">
                                <div className="mb-6 mr-3 w-[50%]">
                                    <label className='text-base block mb-2 font-medium text-white'>Full name (as displayed on card)*</label>
                                    <Field name="fullName" type='text' className={`${errors.fullName && touched.fullName ? "input-error" : null} w-full p-2.5 text-base border rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500`} placeholder="type your city"/>
                                    <ErrorMessage name="fullName" component="span" className="error text-red-600 text-sm" />
                                </div>
                                <div className="mb-6 w-[50%]">
                                    <label className='text-base block mb-2 font-medium text-white'>Card number*</label>
                                    <Field name="cardNumber" type='text' className={`${errors.cardNumber && touched.cardNumber ? "input-error" : null} w-full p-2.5 text-base border rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500`} placeholder="type your city"/>
                                    <ErrorMessage name="cardNumber" component="span" className="error text-red-600 text-sm" />
                                </div>
                            </div>
                            <div className="flex">
                                <div className="mb-6 mr-3 w-[50%]">
                                    <label className='text-base block mb-2 font-medium text-white'>Card expiration*</label>
                                    <Field name="cardExpiration" type='text' className={`${errors.cardExpiration && touched.cardExpiration ? "input-error" : null} w-full p-2.5 text-base border rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500`} placeholder="type your adress"/>
                                    <ErrorMessage name="cardExpiration" component="span" className="error text-red-600 text-sm" />
                                </div>
                                <div className="mb-6 w-[50%]">
                                    <label className='text-base block mb-2 font-medium text-white'>CVV*</label>
                                    <Field name="cvv" type='text' className={`${errors.cvv && touched.cvv ? "input-error" : null} w-full p-2.5 text-base border rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500`} placeholder="type your postal code"/>
                                    <ErrorMessage name="cvv" component="span" className="error text-red-600 text-sm" />
                                </div>
                            </div>
                            <NavLink to="/product-forms/summary">
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