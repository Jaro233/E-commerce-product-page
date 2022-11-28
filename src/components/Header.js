import logo from "../images/logo.svg"
import avatar from "../images/image-avatar.png"
import remove from "../images/icon-delete.svg"
import hamburgerIcon from "../images/icon-menu.svg"
import close from "../images/icon-close.svg"
import cart from "../images/icon-cart.svg"

function Header({numberOfProducts, products, setIsCartEmpty, setNumberOfProducts, setProductsToCard, isCartEmpty}) {
    return (
      <>
        <header className="flex relative h-12 justify-between pt-6 p-4 mb-4 md:mb-0 md:border-b-2 md:border-black-200 md:mt-0 md:p-0 md:h-28 md:items-center md:mx-4 xl:mx-0">
          <div className="icon-and-logo flex gap-4 items-center">
            <img onClick={() => { document.querySelector(".sidenav").classList.remove("hidden");  document.querySelector(".overlay").classList.remove("hidden")}} src={hamburgerIcon} className="w-100 h-100 md:hidden" alt="hamburgerIcon" srcset=""/>
            <img src={logo} alt="logo" srcset=""/>
          </div>
          <div className="flex w-100 h-100 relative">
            <div className="sidenav hidden left-0 top-0 w-60 z-30 h-full shadow-md bg-white fixed">
              <ul className="relative">
                <img onClick={() => { document.querySelector(".sidenav").classList.add("hidden"); document.querySelector(".overlay").classList.add("hidden")}} className="flex items-center py-4 px-6 h-12 mb-4" src={close} alt=""/>
                <li v="relative">
                  <a className="flex items-center font-bold py-4 px-6 h-12 overflow-hidden  text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-75 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">Collections</a>
                </li>
                <li className="relative">
                  <a className="flex items-center font-bold py-4 px-6 h-12 overflow-hidden  text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-75 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">Men</a>
                </li>
                <li className="relative">
                  <a className="flex items-center font-bold py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-75 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">Women</a>
                </li>
                <li className="relative">
                  <a className="flex items-center font-bold py-4 px-6 h-12 overflow-hidden  text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-75 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">About</a>
                </li>
                <li className="relative">
                  <a className="flex items-center font-bold py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-75 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">Contact</a>
                </li>
              </ul>
            </div>
            <div className="overlay hidden top-0 right-0 z-20 dark-bg w-full h-full fixed bg-black opacity-60"></div>
          </div>
          <div className="desktop-nav hidden items-center md:flex mr-auto ml-10 h-full ">
            <ul className="relative flex h-full items-center">
              <li className="relative flex items-center h-full px-3">
                <a className="flex items-center h-full hover:border-b-4 hover:border-new-orange text-ellipsis whitespace-nowrap rounded text-gray-600 hover:text-gray-900  transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">Collections</a>
              </li>
              <li className="relative flex items-center h-full px-3">
                <a className="flex items-center overflow-hidden h-full hover:border-b-4 hover:border-new-orange text-ellipsis whitespace-nowrap rounded text-gray-600 hover:text-gray-900  transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">Men</a>
              </li>
              <li className="relative flex items-center h-full px-3">
                <a className="flex items-center overflow-hidden h-full hover:border-b-4 hover:border-new-orange text-ellipsis whitespace-nowrap rounded text-gray-600 hover:text-gray-900  transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">Women</a>
              </li>
              <li className="relative flex items-center h-full px-3">
                <a className="flex items-center overflow-hidden h-full hover:border-b-4 hover:border-new-orange text-ellipsis whitespace-nowrap rounded text-gray-600 hover:text-gray-900  transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">About</a>
              </li>
              <li className="relative flex items-center h-full px-3">
                <a className="flex items-center overflow-hidden h-full hover:border-b-4 hover:border-new-orange text-ellipsis whitespace-nowrap rounded text-gray-600 hover:text-gray-900  transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">Contact</a>
              </li>
            </ul>
          </div>
         
          <div className="cart-and-avatar flex gap-4 items-center">
            <div className="flex flex-col relative">
              {numberOfProducts > 0 && (
                 <div className="bg-new-orange rounded-xl w-5 text-xs text-white absolute bottom-4 left-4 z-10">{numberOfProducts}</div>
              )}
              <img onClick={() => { document.querySelector(".cart-dropdown-wrapper").classList.toggle("hidden"); 
              document.querySelector(".cart").classList.toggle("black-svg") }} src={cart} alt="cart" className="p-1 cart cursor-pointer cart transition-all ease-in delay-75"/>
            </div>
           
            <img src={avatar} alt="avatar" className="avatar w-8 h-min md:w-12 md:ml-4 cursor-pointer rounded-3xl hover:border-2 hover:border-new-orange transition-all ease-in delay-75"/>
          </div>
          <div className="cart-dropdown-wrapper hidden w-full md:w-96 h-60 absolute z-10 top-20 right-0 md:top-28 md:right-[-4rem] px-2">
            <div className="cart-dropdown w-full h-60 z-50 bg-white rounded-xl top-5 shadow-2xl">
              <div className="border-b border-solid border-black-600 text-left px-4 py-5 font-bold">Cart</div>
              {isCartEmpty == false && (
              <>
                <div className="flex px-4 py-6 gap-3 justify-between items-center">
                  <div className="flex gap-4">
                    <img className="w-12 rounded-md" src={products[0].mainImage} alt="picture" />
                    <div className="flex flex-col text-left">
                      <div className="text-gray-500 truncate w-48">Autumn Limited Edition Sneakers</div>
                      <div className="text-gray-500">$125.00 x {numberOfProducts}<span className="font-bold text-black"> ${125.00 * numberOfProducts}.00</span></div>
                    </div>
                  </div>
                    <img onClick={() => { setIsCartEmpty(true);  setNumberOfProducts(0); setProductsToCard(0)}} className="w-4 h-4 cursor-pointer remove" src={remove} alt="remove" />
                </div>
                <div className="px-4 hover:opacity-60">
                  <button className="bg-new-orange rounded-xl w-full gap-3 text-white font-bold py-4">Checkout</button>
                </div>
              </>
              )}
              {isCartEmpty == true && (
                <div className="text-gray-500 font-bold h-full items-center">
                  <p className="mt-14">Your cart is empty.</p> 
                </div>
              )}
            </div>
          </div>
        </header>
      </>
    )
  }

  export default Header;