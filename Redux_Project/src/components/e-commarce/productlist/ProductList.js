import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProducts } from "../../redux/slices/productSlice";
import SingleProduct from "../singleProduct/SingleProduct";
function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.products);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await fetch("https://api.escuelajs.co/api/v1/products");
    const data = await response.json();
    dispatch(loadProducts(data));
  }

  return (
    <div className="ProductList">
      {products.map((item) => (
        <h3><SingleProduct key={item.id} product={item} /></h3>
      ))}
    </div>
  );
}

export default ProductList;
