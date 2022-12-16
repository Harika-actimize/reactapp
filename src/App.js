import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarcomp from "./componets/navbarComp";
import ProductSlider from "./componets/slider";
import StarRating from "./componets/submit";
// import Test from "./componets/sample"
// import Feedback from "./componets/feedback";
import Footer from "./componets/footer";

export default function App() {
  return (
    <div className="App">
        <Navbarcomp/>
        <ProductSlider/>
        <StarRating/>
        {/* <Feedback/> */}
        {/* <Test/> */}
        <Footer/>
    </div>
  );
}