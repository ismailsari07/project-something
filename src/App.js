import './index.css';
import myMainImage from "./main-photo.png";
import contactthreeimage from "./contact3.png";
import myAboutOurBrand from "./imgg-od3-wfm00bc6.png";
import myOurBrandImageOne from "./our-services-image1.png";
import myOurBrandImageTwo from "./our-services-image2.png";
import myOurBrandImageThree from "./our-services-image3.png";
import myFeaturedProductOne from "./featured-products-one.png";
import myFeaturedProductTwo from "./featured-products-two.png";
import myFeaturedProductThree from "./featured-products-three.png";
import { Routes, Route, NavLink, Link } from "react-router-dom";

function NavbarComponent() {
  return (
    <>
    <div className='navbar-section flex justify-between pb-14 text-[#0B0D63]'>
      <div className='logo-section'>
        <a href='.' className='text-2xl leading-5 font-bold'>procer</a>
      </div>
      <div className='navigation-section'>
        <ul className='font-[bitter]'>
         <li className='display list-none inline mr-6'><a href='.'>Shop</a></li>
         <li className='display list-none inline mr-6'><a href='.'>About</a></li>
         <li className='display list-none inline mr-6'><a href='.'>Contact</a></li>
         <li className='display list-none inline mr-6'><a href='.'>Cart</a></li>
         <li className='display list-none inline mr-6'>
          <a href='.'><button type='button' className='inline-block rounded-full bg-[#F08E80] px-6 pb-2 pt-2.5 text-xl font-medium leading-normal text-white shadow-black transition duration-150 ease-in-out hover:bg-primary-accent-300'>Book Now</button></a>
         </li>
        </ul>
      </div>
    </div>
    </>
  )
}

function MainComponent() {
  return (
    <>
    <div className='main-section relative flex h-full items-center justify-center mb-48'>
      <img src={myMainImage} className='object-fill h-full w-full brightness-50 rounded-3xl overflow-hidden' />
      <div className='absolute top-0 left-0 right-0 bottom-0 self-center w-full text-center text-7xl font-bold leading-5 text-white'><h1>Lorem, ipsum dolor.</h1></div>
    </div> 
    </>
  )
}

function FeaturedProductsComponent() {
  return (
    <>
    <div className='featured-products-section flex flex-col mb-48'>
      <div className="header-featured-products text-center text-5xl font-semibold leading-5 text-[#0B0D63] mb-24">
        <h2>Featured Products</h2>
      </div>
      <div className='main-featured-products flex flex-row justify-evenly mb-24'>
        <div className="product-one w-fit h-fit flex flex-col items-center">
          <div className="image-product w-80 h-80 mb-3">
            <img src={myFeaturedProductOne} className='object-cover w-full h-full rounded-full overflow-hidden'/>
          </div>
          <div className="name-product underline text-[#F08E80] font-semibold text-2xl mb-2">Product Name</div>
          <div className="price-product underline-offset-1">$25</div>
        </div>
        <div className="product-two w-fit h-fit flex flex-col items-center">
          <div className="image-product w-80 h-80 mb-3">
            <img src={myFeaturedProductTwo} className='object-cover w-full h-full rounded-full overflow-hidden'/>
          </div>
          <div className="name-product underline text-[#F08E80] font-semibold text-2xl mb-2">Product Name</div>
          <div className="price-product underline-offset-1">$25</div>
        </div>
        <div className="product-three w-fit h-fit flex flex-col items-center">
          <div className="image-product w-80 h-80 mb-3">
            <img src={myFeaturedProductThree} className='object-cover w-full h-full rounded-full overflow-hidden'/>
          </div>
          <div className="name-product underline text-[#F08E80] font-semibold text-2xl mb-2">Product Name</div>
          <div className="price-product underline-offset-1">$25</div>
        </div>
      </div>
      <div className='footer-featured-products text-center'>
        <button type='button' className='inline-block rounded-full bg-[#F08E80] px-10 pb-2 pt-2.5 text-xl font-medium leading-normal text-white shadow-black transition duration-150 ease-in-out hover:bg-primary-accent-300'>Shop All</button>
      </div>
    </div> 
    </>
  )
}

function OurServicesComponent() {
  return (
    <>
    <div className="our-services-section p-14 mb-48">
      <div className="header-our-services text-5xl font-semibold leading-5 text-[#0B0D63] mb-24">
        <h2>Our Services</h2>
      </div>
      <div className="main-our-services flex justify-between">
        <div className="our-service-one w-[450px] h-fit flex flex-col rounded-xl overflow-hidden p-3">
          <div className="image-our-service max-w-full h-[441px] mb-12 rounded-xl">
            <img src={myOurBrandImageOne} className='object-cover w-full h-full rounded-2xl overflow-hidden'/>
          </div>
          <div className="header-our-service underline text-[#F08E80] mb-2">Lorem, ipsum.</div>
          <div className="price-our-service mb-4">25$</div>
          <div className="description-our-service">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, voluptates ullam. Nulla ratione debitis temporibus.</div>
        </div>
        <div className="our-service-two w-[450px] h-fit flex flex-col rounded-xl overflow-hidden p-3">
          <div className="image-our-service max-w-full h-[441px] mb-12 rounded-xl">
            <img src={myOurBrandImageTwo} className='object-cover w-full h-full rounded-2xl overflow-hidden'/>
          </div>
          <div className="header-our-service underline text-[#F08E80] mb-2">Lorem, ipsum.</div>
          <div className="price-our-service mb-4">25$</div>
          <div className="description-our-service">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, voluptates ullam. Nulla ratione debitis temporibus.</div>
        </div>
        <div className="our-service-three w-[450px] h-fit flex flex-col rounded-xl overflow-hidden p-3">
          <div className="image-our-service max-w-full h-[441px] mb-12 rounded-xl">
            <img src={myOurBrandImageThree} className='object-cover w-full h-full rounded-2xl overflow-hidden'/>
          </div>
          <div className="header-our-service underline text-[#F08E80] mb-2">Lorem, ipsum.</div>
          <div className="price-our-service mb-4">25$</div>
          <div className="description-our-service">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, voluptates ullam. Nulla ratione debitis temporibus.</div>
        </div>
      </div>
    </div>
    </>
  )
}

// w-[635px] h-[810px]
// 1x2[3x1]
function AboutOurBrandComponent() {
  return (
    <>
    <div className="about-our-brand-section p-14 mb-48 rounded-2xl flex justify-between items-center">
      <div className="image-about-our-brand w-[635px] h-[810px]">
        <img src={myAboutOurBrand} className='object-cover w-full h-full rounded-2xl overflow-hidden' alt="" />
      </div>
      <div className="content-our-branc-section w-[50%] flex flex-col">
        <div className="header-our-brand text-5xl font-semibold leading-5 text-[#0B0D63] mb-16"><h3>About Our Brand</h3></div>
        <div className="explanation-our-brand mb-8 text-[#0B0D63]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo in totam libero cupiditate eum autem? Deserunt ipsam iure qui ipsa quis aspernatur quae, alias hic impedit libero, maxime quos eos ut quas aliquid itaque, sapiente perferendis explicabo natus provident officia quia iusto? Laborum dolor incidunt animi ipsa. Quaerat, ab perspiciatis.</div>
        <div className="button-our-brand"><button type="button" className='inline-block rounded-full bg-[#F08E80] px-10 pb-2 pt-2.5 text-xl font-medium leading-normal text-white shadow-black transition duration-150 ease-in-out hover:bg-primary-accent-300'>Learn More</button></div>
      </div>
    </div>
    </>
  )
}

function ContactUsComponent() {
  return (
    <>
    <div className="contact-us-section p-14 mb-24 rounded-2xl flex justify-between items-center">
      <div className="description-contact-us w-[40%]">
        <img src={contactthreeimage} className='object-fill h-full w-full rounded-3xl overflow-hidden' />
      </div>
      <div className="form-contact-us w-[40%] flex flex-col justify-between p-6">
        <h3 className="header-our-brand text-5xl font-semibold leading-5 text-[#0B0D63] mb-16">Contact Us</h3>
        <form>
          <div className="first-name mb-6">
            <label className=''>First Name</label>
            <input type='text' className='w-full bg-slate-50 p-2.5 rounded-lg text-sm'/>
          </div>
          <div className="last-name mb-6">
            <label className=''>Last Name</label>
            <input type='text' className='w-full bg-slate-50 p-2.5 rounded-lg text-sm'/>
          </div>
          <div className="email mb-6">
            <label className=''>Email</label>
            <input type='email' className='w-full bg-slate-50 p-2.5 rounded-lg text-sm'/>
            <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">We’ll never share your details. Read our <a href="#" class="font-medium text-blue-600 hover:underline dark:text-blue-500">Privacy Policy</a>.</p>
          </div>
          <div className="message mb-6">
            <label className=''>Message</label>
            <textarea type='textarea' className='w-full bg-slate-50 p-2.5 rounded-lg text-sm'></textarea>
          </div>
        <button type="button" className='inline-block rounded-full bg-[#F08E80] px-10 pb-2 pt-2.5 text-xl font-medium leading-normal text-white shadow-black transition duration-150 ease-in-out hover:bg-primary-accent-300'>Send</button>
        </form>
      </div>
    </div>
    </>
  )
}

function FooterComponent() {
  return (
    <>
    <div className="footer-section flex justify-between p-14 items-start">
      <div className="site-title">
        <h2 className='text-3xl font-semibold text-[#0B0D63] mb-3'>Your Site Title</h2>
        <div className="made-with">Made with ...</div>
      </div>
      <div className="footer-location-contact flex">
        <div className="footer-location mr-12">
          <h2 className='text-2xl font-semibold leading-5 text-[#0B0D63] mb-3'>Location</h2>
          <div>123 Demo Street</div>
          <div>New York, NY 12345</div>
        </div>
        <div className="footer-contact">
          <h2 className='text-2xl font-semibold leading-5 text-[#0B0D63] mb-3'>Contact</h2>
          <div className="footer-email">xxx@example.com</div>
          <div className="footer-phone-number">555-555-55-55</div>
        </div>
      </div>
    </div>
    </>
  )
}

function App() {
  return (
    <div className='parent-section bg-[#efeaeae2] w-full h-full p-14 font-[bitter] font-normal'>
    <NavbarComponent/>
    <MainComponent/>
    <FeaturedProductsComponent/>
    <OurServicesComponent/>
    <AboutOurBrandComponent/>
    <ContactUsComponent/>
    <FooterComponent/>
    </div>
  );
}

export default App;
