import React from 'react';
import { Layout } from '../../Components/Layout';
import { Card } from '../../Components/Card';
import { ProductDetail } from '../../Components/ProductDetail';
import { ShopiContext } from '../../Context';

function Home() {
    const { productsValue, searchBarTitleValue, setSearchBarTitleValue, filteredProductsValue } = React.useContext(ShopiContext);

    const showFilteredProducts = () => {
      
      if (filteredProductsValue?.length > 0) {
        return (
          filteredProductsValue?.map(product => (
            <Card key={product.id} title={product.title} description={product.description} price={product.price} category={product.category.name} image={product.images[0]} productid={product.id}/>
    
          ))
        ) 
      }

      return (
        <div>Products not founded</div>
      )
    }
    return (
      <Layout>
        <div className='flex items-center justify-center relative w-80 mb-4'>
            <h1 className='font-medium text-xl'>Exclusive Products</h1>
        </div>
        <input 
              type="text" 
              name="" id="" 
              placeholder='Search a product'
              className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none'
              onChange={(event) => event.target.value.length > 3 ? setSearchBarTitleValue(event.target.value) : setSearchBarTitleValue(null)}/>
        <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        { showFilteredProducts() }
        </div>
        <ProductDetail />
      </Layout>
    )
  }
  
  export { Home }