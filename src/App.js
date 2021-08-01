import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Productlist from "./Component/Productlist";
import Footer from "./Component/Footer";

function App() {
  const products = [
    {
      imgSrc:
        "https://www.mercedes-benz.ch/fr/passengercars/mercedes-benz-cars/models/a-class/hatchback-w177/_jcr_content/image.MQ6.2.2x.20210505083324.png",
      name: "A-Class",
      price: "129000 DT",
    },
    {
      imgSrc:
        "https://www.sayarti.tn/wp-content/uploads/2021/04/mercedes-benz-glc-prix-amg-prix-tunisie.jpg",
      name: "GLC",
      price: "210000 DT",
    },
    {
      imgSrc:
        "https://www.mercedes-benz.fr/passengercars/mercedes-benz-cars/models/s-class/saloon-wv223/_jcr_content/image.MQ6.2.2x.20201023143932.png",
      name: "S-Class",
      price: "450000 DT",
    },
  ];
  return (
    <div className="App">
      <Productlist produits={products} />
      <Footer>
        <br></br>
        <br></br>
        <center>
        <h5>Thank you for your attention</h5>
        <p>CopyRight F1</p>
        </center>
      </Footer>
    </div>
  );
}

export default App;
