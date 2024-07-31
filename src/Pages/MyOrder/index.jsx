import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { Layout } from '../../Components/Layout';
import { ShopiContext } from '../../Context';
import { OrderCard } from '../../Components/OrderCard';

function MyOrder() {
  const { orderValue } = React.useContext(ShopiContext);
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1);
  if(index === 'latest') index = orderValue?.length - 1
    return (
      <Layout>
        <div className='flex justify-center items-center w-80 relative mb-6'>
            <Link to='/my-orders' className='absolute left-0'>
                <ChevronLeftIcon className='size-5 text-dark cursor-pointer'/>
            </Link>
            <h1>My Order</h1>
        </div>
        <div className='flex flex-col w-80'>
            { orderValue?.[index]?.products.map(product => (
                <OrderCard key={product.id} 
                title={product.title} 
                image={product.image} 
                price={product.price}
                productId={product.id} />
            )) }
        </div>
      </Layout>
    )
  }
  
  export { MyOrder }