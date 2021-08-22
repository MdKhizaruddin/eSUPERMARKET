import React, { useEffect } from "react";
// import { Productitem } from "./Productitem";
import { Productlist } from "./Productlist";
import { TopNav } from "./TopNav";
import { useDispatch } from "react-redux";
import { getProducts } from "./service/products";
import "./Home.css";

export const Home = () => {
  const dispatch = useDispatch();

  const allProduct = async () => {
    const products = await getProducts();
    dispatch({
      type: "ADD_PRODUCT",
      data: products,
    });
  };
  useEffect(() => {
    allProduct();
  }, []);
  return (
    <div>
      <h1>eSUPERMARKET</h1>
      <h2>PRODUCTS</h2>
      <TopNav />
      <Productlist />
    </div>
  );
};
