import React from 'react';
import { Link } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShopiContext } from '../../Context';
import { OrderCard } from '../OrderCard';
import { totalPrice } from '../../Utils';
import './style.css';

function CheckoutSideMenu() {
    var { showCheckoutSideMenuValue, hideCheckoutSideMenu, ShoppingCartValue, setShoppingCart, orderValue, setOrder, setSearchBarTitleValue} = React.useContext(ShopiContext);

    const checkoutProducts = () => {
        const newOrder = {
            date: '01.02.2024',
            products: ShoppingCartValue,
            totalProducts: ShoppingCartValue.length,
            totalPrice: totalPrice(ShoppingCartValue)
        }

        setOrder([...orderValue, newOrder]);
        setShoppingCart([]);
        setSearchBarTitleValue(null);
    };

    const deleteProductSideMenu = (id) => {
        const filteredProducts = ShoppingCartValue.filter(product => product.id != id);
        setShoppingCart(filteredProducts);
      };
    return (
        <aside className={`${showCheckoutSideMenuValue ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className="flex justify-between items-center p-6">
                <h2 className='font-medium text-xl'>My Order</h2>
                <div>
                    <XMarkIcon className='size-5 text-dark cursor-pointer' onClick={() => {
                        hideCheckoutSideMenu();
                    }} />
                </div>
            </div>
            <div className='px-6 overflow-y-auto flex-1'>
                { ShoppingCartValue.map(product => (
                    <OrderCard key={product.id} 
                    title={product.title} 
                    image={product.image} 
                    price={product.price}
                    productId={product.id} 
                    deleteProduct={deleteProductSideMenu}/>
                )) }
            </div>
            <div className='px-6 mb-4'>
                <p className='flex justify-between items-center mb-2'>
                    <span className='font-light'>Total:</span>
                    <span className='font-medium text-2xl'>${totalPrice(ShoppingCartValue)}</span>
                </p>
            </div>
            <div className='px-6 h-14 mb-6'>
                <Link to='/my-orders/latest'>
                    <button className='w-full bg-black py-5 px-8 text-white font-medium rounded-lg' onClick={() => checkoutProducts()}>Checkout</button>
                </Link>
            </div>
        </aside>
    );
}

export { CheckoutSideMenu }