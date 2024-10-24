import contactthreeimage from "../contact3.png";
export default function Contact() {
    return (
            <div className="contact-us-section p-14 mb-24 rounded-2xl flex justify-between items-center">
                <div className="description-contact-us w-[40%]">
                <img src={contactthreeimage} className='object-fill h-full w-full rounded-3xl overflow-hidden' />
                </div>
                <div className="form-contact-us w-[40%] flex flex-col justify-between p-6">
                <h3 className="header-our-brand text-5xl font-semibold leading-5 dark:text-white mb-16">Contact Us</h3>
                <form>
                    <div className="first-name mb-6">
                    <label className=''>First Name</label>
                    <input type='text' className='w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500' placeholder="type your name"/>
                    </div>
                    <div className="last-name mb-6">
                    <label className=''>Last Name</label>
                    <input type='text' className='w-full bg-gray-50 p-2.5 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500' placeholder="last name"/>
                    </div>
                    <div className="email mb-6">
                    <label className=''>Email</label>
                    <input type='email' className='w-full bg-gray-50 p-2.5 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500' placeholder="name@company.com"/>
                    <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">We’ll never share your details. Read our <a href="#" class="font-medium text-blue-600 hover:underline dark:text-blue-500">Privacy Policy</a>.</p>
                    </div>
                    <div className="message mb-6">
                    <label className=''>Message</label>
                    <textarea type='textarea' className='w-full bg-gray-50 p-2.5 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'></textarea>
                    </div>
                <button type="button" className='text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-xl px-4 lg:px-5 py-2 lg:py-2 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800'>Send</button>
                </form>
                </div>
            </div>
    )
}