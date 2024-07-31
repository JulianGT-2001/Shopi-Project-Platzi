import React from 'react';
import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid';
import { ShopiContext } from '../../Context';

function Card({ title, description, price, category, image, productid }){
    var { showProductInformation,
        renderCheckIcon
    } = React.useContext(ShopiContext);

    return (
        <div className='bg-white cursor-pointer w-56 h-60 rounded-lg' onClick={() => showProductInformation({ title, description, price, category, image })}>
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{category}</span>
                <img className='w-full h-full object-cover rounded-lg' src={image} alt={title} />
                {renderCheckIcon(productid, title, description, price, category, image)}
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light'>{title}</span>
                <span className='text-lg font-medium'>${price}</span>
            </p>
        </div>
    )
}

export { Card }