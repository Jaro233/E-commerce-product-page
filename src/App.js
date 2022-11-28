import './App.css';
import {data} from "./data"
import { useEffect, useState } from 'react';
import Header from "./components/Header"
import LightBox from "./components/LightBox"
import Section from './components/Section';


//image grabbing based on index
var i = 0;
var k = 0;

function App() {
  const [products] = useState(data)
  const [mainImage, setMainImage] = useState(products[i].mainImage)
  const [mainImageLightBox, setMainImageLightBox] = useState(products[k].mainImage)
  let [numberOfProducts, setNumberOfProducts] = useState(0)
  let [productsToCard, setProductsToCard] = useState(0)
  let [isCartEmpty, setIsCartEmpty] = useState(true)
  console.log('mainImage', products)
  console.log('products', mainImage)
  console.log('isCartEmpty', isCartEmpty)
  
  

  function chooseMainImage() {
    var thumbnails = [...document.querySelectorAll(".thumbnail")]
    thumbnails.forEach((thumbnail) => {
      thumbnail.addEventListener("click", () => {
        thumbnail.classList.add("ring"); 
        thumbnail.classList.add("ring-new-orange");
        console.log('first loop')
        thumbnail.children[0].classList.add("opacity-50")
        var filtredThumbnails = thumbnails.filter(newThumbnail => newThumbnail != thumbnail)
        filtredThumbnails.forEach((thumbnail) => {
          console.log('second loop')
          thumbnail.classList.remove("ring"); 
          thumbnail.classList.remove("ring-new-orange");
          thumbnail.children[0].classList.remove("opacity-50")
        })
      })
    })
  }

  function chooseMainImage_modal() {
    var thumbnails = [...document.querySelectorAll(".thumbnail_modal")]
    thumbnails.forEach((thumbnail) => {
      thumbnail.addEventListener("click", () => {
        thumbnail.classList.add("ring"); 
        thumbnail.classList.add("ring-new-orange");
        console.log('first loop')
        thumbnail.children[0].classList.add("opacity-50")
        var filtredThumbnails = thumbnails.filter(newThumbnail => newThumbnail != thumbnail)
        filtredThumbnails.forEach((thumbnail) => {
          console.log('second loop')
          thumbnail.classList.remove("ring"); 
          thumbnail.classList.remove("ring-new-orange");
          thumbnail.children[0].classList.remove("opacity-50")
        })
      })
    })
  }

  useEffect(() => {
    var thumbnail = document.querySelector(".thumbnail1")
    var thumbnail_modal = document.querySelector(".thumbnail2")
    thumbnail.classList.add("ring"); 
    thumbnail.classList.add("ring-new-orange");
    console.log('clicked', thumbnail.children)
    thumbnail.children[0].classList.add("opacity-50")
    thumbnail_modal.classList.add("ring"); 
    thumbnail_modal.classList.add("ring-new-orange");
    console.log('clicked', thumbnail.children)
    thumbnail_modal.children[0].classList.add("opacity-50")
    chooseMainImage()
    chooseMainImage()
    chooseMainImage_modal()
    chooseMainImage_modal()
  }, [])

  return (
    <div className="App relative">
 
      <Header 
      numberOfProducts={numberOfProducts} 
      isCartEmpty={isCartEmpty} 
      products={products} 
      setIsCartEmpty={setIsCartEmpty} 
      setNumberOfProducts={setNumberOfProducts}
      setProductsToCard={setProductsToCard}
      />

      <LightBox 
      mainImageLightBox={mainImageLightBox} 
      products={products} 
      setMainImageLightBox={setMainImageLightBox} 
      chooseMainImage_modal={chooseMainImage_modal}/>

      <Section 
      numberOfProducts={numberOfProducts} 
      isCartEmpty={isCartEmpty} 
      products={products} 
      setIsCartEmpty={setIsCartEmpty} 
      setNumberOfProducts={setNumberOfProducts}
      setProductsToCard={setProductsToCard}
      mainImage={mainImage}
      setMainImage={setMainImage}
      chooseMainImage={chooseMainImage}
      productsToCard={productsToCard}/>
    </div>
  );
  
}

export default App;
