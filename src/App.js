import './index.css'
import myMainImage from "./main-photo.png";


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
    <div className='main-section opacity- relative bg-slate-500 flex h-full items-center justify-center mb-48'>
      <img src={myMainImage} className='object-fill h-full w-full brightness-50' />
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
          <div className="image-product w-80 h-80 rounded-full bg-amber-200 mb-3"></div>
          <div className="name-product underline text-[#F08E80] font-semibold text-2xl mb-2">Product Name</div>
          <div className="price-product underline-offset-1">$25</div>
        </div>
        <div className="product-two w-fit h-fit flex flex-col items-center">
          <div className="image-product w-80 h-80 rounded-full bg-amber-200 mb-3"></div>
          <div className="name-product underline text-[#F08E80] font-semibold text-2xl mb-2">Product Name</div>
          <div className="price-product underline-offset-1">$25</div>
        </div>
        <div className="product-three w-fit h-fit flex flex-col items-center">
          <div className="image-product w-80 h-80 rounded-full bg-amber-200 mb-3"></div>
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
    <div className="our-services-section mb-48">
      <div className="header-our-services text-5xl font-semibold leading-5 text-[#0B0D63] pl-40 mb-24">
        <h2>Our Services</h2>
      </div>
      <div className="main-our-services flex justify-around">
        <div className="our-service-one h-64 w-64 bg-slate-300"></div>
        <div className="our-service-two h-64 w-64 bg-slate-400"></div>
        <div className="our-service-three h-64 w-64 bg-slate-500"></div>
      </div>
    </div>
    </>
  )
}

function App() {
  return (
    <div className='parent-section bg-[#FDF0E6] w-full h-full p-14 font-[bitter] font-normal'>
    <NavbarComponent/>
    <MainComponent/>
    <FeaturedProductsComponent/>
    <OurServicesComponent/>
    </div>
  );
}

export default App;
