import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { setSelectedProduct } from '../redux/slices/productSlice';
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

function ProductDetails() {
  const { id } = useParams();
  const { products, selectedProduct } = useSelector((store) => store.product)

  const { price, image, title, description } = selectedProduct;

  const dispatch = useDispatch();

  useEffect(() => {
    getProductById();

  })

  const getProductById = () => {
    products && products.map((product) => {
      if (product.id == id) {

        dispatch(setSelectedProduct(product));
      }
    })
  }
  return (
    <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
      <div style={{ marginRight: '10px' }}>
        <img src={image} width={300} height={450} alt="" />
      </div>
      <div>
        <h1 style={{ fontFamily: 'arial' }}> {title} </h1>
        <p style={{ fontFamily: 'arial', fontSize: '20px' }} > {description} </p>
        <h1 style={{
          fontSize: '50px', fontFamily: 'arial', fontWeight: 'bold', color:
            'black'
        }}> {price}</h1>

        <div style={{ display: 'flex', alignItems: 'center' }}>

          <CiCirclePlus style={{ fontSize: '40px', marginRight: '5px' }} />  <span style={{ fonSize: '35px' }}  > 0</span>
          <CiCircleMinus style={{ fontSize: '40px' }} /> < CiCircleMinus />
        </div>

      </div>

    </div>


  )
}

export default ProductDetails