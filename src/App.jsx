
import React, { useEffect } from 'react'

import './App.css'
import PageContainer from './container/PageContainer'
import Header from './components/Header'

import RouterConfig from './config/RouterConfig'
import Loading from './components/Loading'
import Drawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from 'react-redux'
import { setDrawer } from './redux/slices/basketSlice'


function App() {
  const { products, drawer, totalAmount } = useSelector((store) => store.basket);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateBasket());

  })
  return (
    <div > <PageContainer>

      <Header />
      <RouterConfig />

      <Loading />
      <Drawer className='drawer' sx={{ padding: '20px' }} onClose={() => dispatch(setDrawer)} anchor='right' open={drawer} >
        bels
        {products && products.map((product) => {
          return (
            <div key={product.id}>

              <div className='flex-row' style={{ padding: '15px' }}>
                <img style={{ marginRight: '5px' }} src={product.image} width={50} height={50} />
                <p style={{ width: '250px', marginRight: '5px' }}> {product.title} ({product.count})</p>
                <p style={{ fontWeight: 'bold', marginRight: '10px', width: '60px' }}> {product.price} $ </p>

                <button style={{ padding: '5px', borderRadius: '5px', backgroundColor: 'black', border: 'none', color: '#fff' }}>
                  sil
                </button>

              </div>

            </div>
          )

        })}
        <div>
          <p style={{ textAlign: 'center' }}> toplam tutar: {totalAmount}</p>

        </div>
      </Drawer>
    </PageContainer>
    </div>
  )
}

export default App
