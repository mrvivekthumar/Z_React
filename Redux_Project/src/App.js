import "./App.css";
import NavBar from "./components/e-commarce/navbar/NavBar";
import ProductList from "./components/e-commarce/productlist/ProductList";
import SingleProduct from "./components/e-commarce/singleProduct/SingleProduct";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ProductList />
      <SingleProduct />
    </div>
  );
}

export default App;
