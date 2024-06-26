import './App.css';
import Prenavbar from './components/Prenavbar';
import Navbar from "./components/Navbar.jsx"
import {  BrowserRouter as Router,Route,Routes } from "react-router-dom"
import Slider from "./components/Slider.jsx"
import data from "./data/data.json"
import Offers from "./components/Offers.jsx"
import Heading  from "./components/Heading.jsx"
import StarProduct from "./components/StarProduct.jsx"
import HotAccessoriesMenu  from "./components/HotAccessoriesMenu.jsx"
import HotAccessories from "./components/HotAccessories.jsx"
import ProductReviews from "./components/ProductReviews.jsx"
import Videos from "./components/Videos.jsx"
import Banner from "./components/Banner.jsx"
import Footer from "./components/Footer.jsx"
import NavOptios from "./components/NavOptios.jsx"


function App() {
  return (
    <Router>
        <Prenavbar />
        <Navbar />
        {/* <NavOptios miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} 
        fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  
        accessories={data.accessories}/> */}
        <Slider start={data.banner.start} />
        <Offers offer={data.offer} />
        <Heading text="Star Products" />
        <StarProduct starProduct={data.starProduct} />
        <Heading text="Hot Accessories" />
        <HotAccessoriesMenu />
        <Routes>
        <Route exact path="/music" element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />} />
        <Route exact path="/smartDevice" element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />} />
        <Route exact path="/home" element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />} />
        <Route exact path="/lifeStyle" element={<HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle} />} />
        <Route exact path="/mobileAccessories" element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />} />
        </Routes>
        <Heading text="PRODUCT REVIEWS" />
        <ProductReviews productReviews={data.productReviews} />
        <Heading text="VIDEOS" />
        <Videos videos={data.videos} />
        <Heading text="In The Press" />
        <Banner banner={data.banner}/>
        <Footer footer={data.footer} />
     </Router>
  );
}

export default App;
