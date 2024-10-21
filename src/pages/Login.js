export default function Login() {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="login p-12 text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white w-[500px] h-fit">

                <h3 className="header-our-brand text-3xl font-semibold leading-5 dark:text-white mb-8">Create Your Free Account</h3>
                <form>
                    <div className="mb-6">
                    <label className='text-base block mb-2 font-medium text-gray-900 dark:text-white'>Name</label>
                    <input type='text' className='w-full p-2.5 text-base bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500' placeholder="type your name"/>
                    </div>
                    <div className="mb-6">
                    <label className='text-base block mb-2 font-medium text-gray-900 dark:text-white'>Your Email</label>
                    <input type='email' className='w-full p-2.5 text-base bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500' placeholder="type your name"/>
                    </div>
                    <div className="mb-6">
                    <label className='text-base block mb-2 font-medium text-gray-900 dark:text-white'>Country</label>
                    <input type='text' className='w-full p-2.5 text-base bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500' placeholder="type your name"/>
                    </div>
                    <div className="mb-6">
                    <label className='text-base block mb-2 font-medium text-gray-900 dark:text-white'>Password</label>
                    <input type='password' className='w-full p-2.5 text-base bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500' placeholder="type your name"/>
                    <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">We’ll never share your details. Read our <a href="#" class="font-medium text-blue-600 hover:underline dark:text-blue-500">Privacy Policy</a>.</p>
                    </div>
                <button type="button" className='text-white w-[100%] bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-xl px-4 lg:px-5 py-2 lg:py-2 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800'>Send</button>
                
                    <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Already have an account? <a href="#" class="font-medium text-blue-600 hover:underline dark:text-blue-500">Sign in here</a></p>
                </form>
            </div>
        </div>
    )
}