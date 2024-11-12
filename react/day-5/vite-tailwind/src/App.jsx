
import './App.css'
import Header from './comman/Header'
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Footer from './comman/Footer';

function App() {
 
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrow:true,
    autoplay:true,
    autoplaySpeed:1000,
  };
  return (
    <>
     <Header/>

     <div className='w-[60%] mx-auto '>
     <Slider {...settings}>
      <div>
         <img src='https://preprodtsbstorage.blob.core.windows.net/cms/uploads/Dashboards_Banner_Bg_Web_d273add871.png'/> 11111
      </div>
      <div>
        <img src='https://preprodtsbstorage.blob.core.windows.net/cms/uploads/Banner_Background_2256x488_1_0c34e62d77.webp'/>2222
      </div>
      <div>
         <img src='https://preprodtsbstorage.blob.core.windows.net/cms/uploads/Dashboards_Banner_Bg_Web_d273add871.png'/> 333
      </div>
      <div>
        <img src='https://preprodtsbstorage.blob.core.windows.net/cms/uploads/Banner_Background_2256x488_1_0c34e62d77.webp'/>444
      </div>
      <div>
         <img src='https://preprodtsbstorage.blob.core.windows.net/cms/uploads/Dashboards_Banner_Bg_Web_d273add871.png'/> 555
      </div>
      <div>
        <img src='https://preprodtsbstorage.blob.core.windows.net/cms/uploads/Banner_Background_2256x488_1_0c34e62d77.webp'/>666
      </div>
    </Slider>
     </div>


     <Footer/>
    </>
  )
}

export default App
