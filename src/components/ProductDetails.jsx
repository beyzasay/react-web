import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { setSelectedProduct } from '../redux/slices/productSlice';

function ProductDetails() {
  const { id } = useParams();
  const { products, selectedProduct } = useSelector((store) => store.prodcut)

  const dispatch = useDispatch();

  useEffect(() => {
    getProductById();


  }, [])

  const getProductById = () => {
    products && products.map((product) => {
      if (product.id == id) {

        dispatch(setSelectedProduct(product));
      }
    })
  }
  return (
    <div>{selectedProduct.title} </div>
  )
}

export default ProductDetails