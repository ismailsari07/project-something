import './index.css'


function NavbarComponent() {
  return (
    <>
    <div className='navbar-section flex justify-around'>
      <div className='logo-section bg-green-300'>procer</div>
      <div className='navigation-section bg-blue-400'>
        <ul>
          <a href='.'><li className='display list-none inline'>Shop</li></a>
          <a href='.'><li className='display list-none inline'>About</li></a>
          <a href='.'><li className='display list-none inline'>Contact</li></a>
          <a href='.'><li className='display list-none inline'>Cart</li></a>
          <a href='.'><li className='display list-none inline'>Shop</li></a>
        </ul>
      </div>
    </div>
    </>
  )
}

function MainComponent() {
  return (
    <>
    <div className='main-section'>
    
    </div> 
    </>
  )
}

// app
function App() {
  return (
    <div className='parent-section bg-slate-300 w-screen h-screen'>
    <NavbarComponent/>
      Başlangıç
    </div>
  );
}

export default App;
