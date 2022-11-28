import next from "../images/icon-next.svg"
import previous from "../images/icon-previous.svg"
import close from "../images/icon-close.svg"

//image grabbing based on index
var k = 0;

function LightBox({mainImageLightBox, products, setMainImageLightBox, chooseMainImage_modal}) {
    return (
      <>
        <div className="lightbox hidden w-full h-full bg-black-700 z-30 top-20 absolute justify-center ">
          <div className="overlay top-0 right-0 z-20 dark-bg w-full h-full fixed bg-black opacity-60">
            
          </div>
          <div className="w-[32rem] flex flex-col z-40 h-full justify-center top-0 left-0">
            <div className="flex justify-end mb-5">
              <img onClick={() => {  document.querySelector(".overlay").classList.add("hidden"); document.querySelector(".lightbox").classList.add("hidden"); document.querySelector(".lightbox").classList.remove("flex"); }} className="remove mr-0 w-6 h-6 white-svg cursor-pointer" src={close} alt=""/>
            </div>
            <div className="relative">
              <div className="previous-btn absolute top-56 left-[-2rem] bg-white w-14 h-14 rounded-full cursor-pointer"  
              onClick={() => { if(k > 0) { setMainImageLightBox(products[k-=1].mainImage); var thumbnails = [...document.querySelectorAll(".thumbnail_modal")]; thumbnails[k].click() } else if(k <= 0) { k = 3; setMainImageLightBox(products[k].mainImage); var thumbnails = [...document.querySelectorAll(".thumbnail_modal")]; thumbnails[k].click() }}}><img className="absolute left-5 top-4" src={previous} alt="image"/>
              </div>
              <div className="next-btn absolute top-56 right-[-2rem] bg-white w-14 h-14 rounded-full cursor-pointer" 
              onClick={() => { if(k < 3) { setMainImageLightBox(products[k+=1].mainImage); var thumbnails = [...document.querySelectorAll(".thumbnail_modal")]; thumbnails[k].click() } else if(k >= 3) { k = 0; setMainImageLightBox(products[k].mainImage); var thumbnails = [...document.querySelectorAll(".thumbnail_modal")]; thumbnails[k].click() }}}><img className="absolute right-5 top-4" src={next} alt="image"/>
              </div>
              <img className="w-full h-full max-h-[33rem] rounded-xl" src={mainImageLightBox} alt="product-image"/>
            </div>
            <div className="flex w-full justify-center gap-7 mt-7">
              <div className="thumbnail_modal thumbnail2 rounded-xl cursor-pointer" onClick={() => { setMainImageLightBox(products[0].mainImage); chooseMainImage_modal()}}><img className="img1 max-w-[6rem] w-full md:rounded-xl hover:opacity-50 transition-all ease-in delay-75" src={products[0].thumbnail} alt="thumbnail-image"/></div>
              <div className="thumbnail_modal rounded-xl cursor-pointer" onClick={() => { setMainImageLightBox(products[1].mainImage); chooseMainImage_modal(); }}><img className="img2 max-w-[6rem] w-full md:rounded-xl hover:opacity-50 transition-all ease-in delay-75" src={products[1].thumbnail} alt="thumbnail-image"/></div>
              <div className="thumbnail_modal rounded-xl cursor-pointer" onClick={() => { setMainImageLightBox(products[2].mainImage); chooseMainImage_modal() }}><img className="img3 max-w-[6rem] w-full md:rounded-xl hover:opacity-50 transition-all ease-in delay-75" src={products[2].thumbnail} alt="thumbnail-image"/></div>
              <div className="thumbnail_modal rounded-xl cursor-pointer" onClick={() => { setMainImageLightBox(products[3].mainImage); chooseMainImage_modal() }}><img className="img4 max-w-[6rem] w-full md:rounded-xl hover:opacity-50 transition-all ease-in delay-75" src={products[3].thumbnail} alt="thumbnail-image"/></div>
            </div>
          </div>
        </div>
      </>
    )
  }

  export default LightBox;