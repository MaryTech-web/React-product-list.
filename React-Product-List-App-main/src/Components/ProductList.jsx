import React, { useEffect, useState } from 'react'
import ProductListItems from './ProductListItems'
import './ProductLists.css'

// ProductList component - Fetches products from API and displays them
const ProductList = () => {

  // States to store fetched products and to track the loading status
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");


  // Function to fetch products from the API
  async function fetchProduct() {
    try {
      setLoading(true);
      const apiResponse = await fetch('https://dummyjson.com/products');
      const dataFetched = await apiResponse.json();

      // Check if products exist in the fetched data
      if (dataFetched?.products) {
        setProducts(dataFetched?.products);
        setLoading(false);
      } else {
        setProducts([]);
        setErrorMsg("Oops! We couldn't load the products. Please try again later.");
        setLoading(false);
      }

    } catch (error) {
      // Handle fetch error
      setErrorMsg("Oops! We couldn't load the products. Please try again later.");
      setLoading(false);
    }
  }

  // useEffect to fetch products once when the component mounts
  useEffect(() => {
    fetchProduct()
  }, []);

  // Display a loading message while fetching products
  if (loading) {
    return (
      <h4 style={{ textAlign: 'center', color: 'gray' }}>Loading products, please wait..."</h4>
    )
  }

  // Display a error message while fetching products fails
  if (errorMsg) {
    return (
      <h4 style={{ textAlign: 'center', color: 'red' }}>{errorMsg}</h4>
    )
  }

  return (
    <div className='container'>
      <h1>Explore Our Latest Collections</h1>
      <ProductListItems products={products} />
    </div>

  )
}

export default ProductList