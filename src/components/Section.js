import next from "../images/icon-next.svg"
import previous from "../images/icon-previous.svg"
import cart from "../images/icon-cart.svg"
import plus from "../images/icon-plus.svg"
import minus from "../images/icon-minus.svg"

//image grabbing based on index
var i = 0;


function Section({numberOfProducts, products, setIsCartEmpty, setNumberOfProducts, setProductsToCard, isCartEmpty, mainImage, setMainImage, chooseMainImage, productsToCard}) {
    return (
      <>
       <section className="mb-10 md:flex md:mt-20 md:px-10">
        <div className="relative">
          <div className="flex-col w-full h-full hidden md:flex">
            <img onClick={() => {  document.querySelector(".overlay").classList.remove("hidden"); document.querySelector(".lightbox").classList.remove("hidden"); document.querySelector(".lightbox").classList.add("flex"); }} className="w-full h-full max-h-[28rem] rounded-xl cursor-pointer" src={process.env.PUBLIC_URL + mainImage} alt="product-image"/>
            <div className="flex w-full gap-5 mt-7">
              <div className="thumbnail thumbnail1 rounded-xl cursor-pointer" onClick={() => { setMainImage(products[0].mainImage); chooseMainImage()}}><img className="img1 max-w-[6rem] w-full md:rounded-xl hover:opacity-50 transition-all ease-in delay-75" src={process.env.PUBLIC_URL + products[0].thumbnail} alt="thumbnail-image"/></div>
              <div className="thumbnail rounded-xl cursor-pointer" onClick={() => { setMainImage(products[1].mainImage); chooseMainImage(); }}><img className="img2 max-w-[6rem] w-full md:rounded-xl hover:opacity-50 transition-all ease-in delay-75" src={process.env.PUBLIC_URL + products[1].thumbnail} alt="thumbnail-image"/></div>
              <div className="thumbnail rounded-xl cursor-pointer" onClick={() => { setMainImage(products[2].mainImage); chooseMainImage() }}><img className="img3 max-w-[6rem] w-full md:rounded-xl hover:opacity-50 transition-all ease-in delay-75" src={process.env.PUBLIC_URL + products[2].thumbnail} alt="thumbnail-image"/></div>
              <div className="thumbnail rounded-xl cursor-pointer" onClick={() => { setMainImage(products[3].mainImage); chooseMainImage() }}><img className="img4 max-w-[6rem] w-full md:rounded-xl hover:opacity-50 transition-all ease-in delay-75" src={process.env.PUBLIC_URL + products[3].thumbnail} alt="thumbnail-image"/></div>
            </div>
          </div>
          <img className="w-full h-full object-cover md:rounded-xl md:hidden" src={process.env.PUBLIC_URL + mainImage} alt="product-image"/>
          <div className="absolute bottom-1/2 left-4 bg-white w-12 h-12 rounded-full md:hidden"  
          onClick={() => { if(i > 0) { setMainImage(products[i-=1].mainImage) } else if(i <= 0) { i = 3; setMainImage(products[i].mainImage) }}}><img className="absolute left-4 top-3" src={previous} alt="image"/>
          </div>
          <div className="absolute bottom-1/2 right-4 bg-white w-12 h-12 rounded-full md:hidden" 
          onClick={() => { if(i < 3) { setMainImage(products[i+=1].mainImage) } else if(i >= 3) { i = 0; setMainImage(products[i].mainImage) }}}><img className="absolute right-4 top-3" src={next} alt="image"/>
          </div>
        </div>
        <div className="flex flex-col p-4 md:w-[32rem] md:ml-10 xl:ml-24 md:justify-center">
          <div className="text-new-orange font-bold text-xs uppercase tracking-wide text-left mb-2 md:text-sm md:tracking-wider">sneaker company</div>
          <div className="font-bold text-2xl text-left mb-3 md:text-5xl md:mt-3 md:mb-7">Fall Limited Edition Sneakers</div>
          <div className="text-gray-500 text-left text-sm mb-6">These low-profile sneakers are your perfect casual wear companion. Featuring a 
  durable rubber outer sole, they’ll withstand everything the weather can offer.</div>
          <div className="flex justify-between mb-6 md:flex-col md:gap-2">
            <div className="flex gap-4">
              <div className="font-bold text-2xl">$125.00</div>
              <div className="text-new-orange font-bold flex items-center px-1 rounded bg-pale-orange">50%</div>
            </div>
            <div className="line-through text-gray-300 font-bold md:text-left">$250.00</div>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between gap-3">
            <div className="flex py-3 px-6 rounded-md bg-gray-50 mb-4 md:mb-0 lg:max-w-[11rem] md:max-w-[8rem] md:w-full">
              <div className="flex items-center">
                <img onClick={() => { if(productsToCard>0) { setProductsToCard(productsToCard-=1); console.log('productsToCard', productsToCard) }}} className="flex items-center cursor-pointer hover:opacity-50 transition-all ease-in delay-75" src={minus} alt="minus"/>
              </div>
              <div className="m-auto font-bold">{productsToCard}</div>
              <div className="flex items-center">
                <img onClick={() => {  setProductsToCard(productsToCard+=1); console.log('productsToCard', productsToCard) }} className="cursor-pointer hover:opacity-50 transition-all ease-in delay-75" src={plus} alt="plus"/>
              </div>
            </div>
            <button onClick={() => { if(productsToCard > 0) { setIsCartEmpty(false); setNumberOfProducts(numberOfProducts+=productsToCard); console.log('isCartEmpty', isCartEmpty) }}} className="bg-new-orange rounded-xl flex justify-center items-center gap-3 text-white font-bold py-4 md:max-w-[18rem] md:w-full transition-all ease-in delay-75 hover:opacity-70">
              <img className="white-svg w-4 h-4" src={cart} alt="cart"/>
              Add to card
            </button>
          </div>
        </div>
      </section>
      </>
    )
  }

  export default Section;