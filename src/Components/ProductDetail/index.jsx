import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShopiContext } from '../../Context';
import './style.css'

function ProductDetail(){
    var { showProductDetailValue, hideProductDetail, productInformationValue} = React.useContext(ShopiContext);
    return (
        <aside className={`${showProductDetailValue ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className="flex justify-between items-center p-6">
                <h2 className='font-medium text-xl'>Detail</h2>
                <div>
                    <XMarkIcon className='size-5 text-dark cursor-pointer' onClick={() => {
                        hideProductDetail();
                    }} />
                </div>
            </div>
            <figure className='px-6'>
                    <img className='w-full h-full rounded-lg' src={productInformationValue.image} alt={productInformationValue.title} />
                </figure>
                <p className='flex flex-col p-6'>
                    <span className='font-medium text-2xl mb-2'>${ productInformationValue.price }</span>
                    <span className='font-medium text-lg'>{ productInformationValue.title }</span>
                    <span className='font-light text-sm'>{ productInformationValue.description }</span>
                </p>
        </aside>
    )
}

export { ProductDetail }