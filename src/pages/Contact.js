import contactthreeimage from "../contact3.png";
export default function Contact() {
    return (
            <div className="contact-us-section p-14 mb-24 rounded-2xl flex justify-between items-center">
                <div className="description-contact-us w-[40%]">
                <img src={contactthreeimage} className='object-fill h-full w-full rounded-3xl overflow-hidden' />
                </div>
                <div className="form-contact-us w-[40%] flex flex-col justify-between p-6">
                <h3 className="header-our-brand text-5xl font-semibold leading-5 text-[#0B0D63] mb-16">Contact Us</h3>
                <form>
                    <div className="first-name mb-6">
                    <label className=''>First Name</label>
                    <input type='text' className='w-full bg-white p-2.5 rounded-lg text-sm border border-gray-200 shadow-sm'/>
                    </div>
                    <div className="last-name mb-6">
                    <label className=''>Last Name</label>
                    <input type='text' className='w-full bg-white p-2.5 rounded-lg text-sm border border-gray-200 shadow-sm'/>
                    </div>
                    <div className="email mb-6">
                    <label className=''>Email</label>
                    <input type='email' className='w-full bg-white p-2.5 rounded-lg text-sm border border-gray-200 shadow-sm'/>
                    <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">We’ll never share your details. Read our <a href="#" class="font-medium text-blue-600 hover:underline dark:text-blue-500">Privacy Policy</a>.</p>
                    </div>
                    <div className="message mb-6">
                    <label className=''>Message</label>
                    <textarea type='textarea' className='w-full bg-white p-2.5 rounded-lg text-sm border border-gray-200 shadow-sm'></textarea>
                    </div>
                <button type="button" className='inline-block rounded-full bg-[#F08E80] px-10 pb-2 pt-2.5 text-xl font-medium leading-normal text-white shadow-black transition duration-150 ease-in-out hover:bg-primary-accent-300'>Send</button>
                </form>
                </div>
            </div>
    )
}