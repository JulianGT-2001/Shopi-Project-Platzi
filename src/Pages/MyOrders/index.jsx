import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../../Components/Layout';
import { OrdersCard } from '../../Components/OrdersCard';
import { ShopiContext } from '../../Context';

function MyOrders() {
    const { orderValue } = React.useContext(ShopiContext);

    return (
        <Layout>
            <div className='flex items-center justify-center relative w-80 mb-4'>
                <h1 className='font-medium text-xl'>My Orders</h1>
            </div>
            {
                orderValue.map((order, index) => (
                    <Link key={index} to={`/my-orders/${index}`}>
                        <OrdersCard totalPrice={order.totalPrice} totalProducts={order.totalProducts}/>
                    </Link>
                ))
            }
        </Layout>
    )
  }
  
  export { MyOrders }