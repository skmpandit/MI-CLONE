import './App.css';
import PreNavbar from './components/PreNavbar';
import { BrowserRouter as Router ,Route ,Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Slider from "./components/Slider.js";
import data from "./data/data.json";
import Offers from "./components/Offers.js";
import Heading from "./components/Heading.js"
import StarProduct from "./components/StarProduct.js"
import HotAccessoriesMenu from "./components/HotAccessoriesMenu.js"
import HotAccessories from "./components/HotAccessories.js"
import ProductReviews from "./components/ProductReviews.js"
import Videos from "./components/Videos.js"
import Banner from "./components/Banner.js"
import Footer from "./components/Footer.js"

function App() {
  return (
    <Router>
        <PreNavbar/>
        <Navbar/>
        <Slider start={data.banner.start} />
        <Offers offer={data.offer} />
        <Heading text="STAR PRODUCTS"/>
        <StarProduct product={data.starProduct}/>
        <Heading text="HOT ACCESSORIES"/>
        <HotAccessoriesMenu/>
        <Routes>
          <Route exact path="/music" element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}  />}/>
          <Route exact path="/smartdevice" element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice}/>} />
          <Route exact path="/home" element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />} />
          <Route exact path="/lifestyle" element={<HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle} />} />
          <Route exact path="/mobileaccessories" element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />}/>
        </Routes>
        <Heading text="PRODUCT REVIEWS"/> 
        <ProductReviews productReviews={data.productReviews}/>
        <Heading text="VIDEOS"/>
        <Videos videos={data.videos}/>
        <Heading text="IN THE PRESS"/>
        <Banner banner={data.banner}/>
        <Footer footer={data.footer}/>
    </Router>
  );
}

export default App;
