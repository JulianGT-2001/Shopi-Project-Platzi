import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ShopiContext } from '../../Context';

function OrdersCard({ totalPrice, totalProducts }){
    let renderXMarkIcon;
    return (
        <div className='flex justify-between items-center mb-3 border border-black w-80 p-4 rounded-lg'>
            <div className='flex justify-between w-full'>
                <p className='flex flex-col'>
                    <span className='font-light'>01.02.2023</span>
                    <span className='font-light'>{totalProducts} articles</span>
                </p>
                <p className='flex items-center gap-2'> 
                    <span className='font-medium text-2xl'>${totalPrice}</span>
                    <ChevronRightIcon className='size-5 text-dark cursor-pointer' />
                </p>
            </div>
        </div>
    );
}

export { OrdersCard }