import { useEffect } from "react";
import { ImSpinner } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/slices/productSlice";
import SingleProduct from "../singleProduct/SingleProduct";
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from "antd";


function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.products);
  const status = useSelector((state) => state.productReducer.products)
  const error = useSelector((state) => state.productReducer.error);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  if (status === 'loading') {
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />
    return <Spin indicator={antIcon} style={{ position: 'absolute', top: "40%", left: "50%" }} />
  } else if (status === 'failed') {
    return <>
      <h3>oh ! Something went wrong</h3>
      <p>{error}</p>
    </>


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
