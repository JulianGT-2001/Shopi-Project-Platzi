import React from 'react';
import { ShopiContext } from '../../Context';
import { NavLink } from 'react-router-dom'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'


function NavBar(){
    const { setSearchBarCategoryValue, ShoppingCartValue } = React.useContext(ShopiContext)
    const activeStyle = 'underline underline-offset-4'
    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full h-14 text-sm font-light p-5">
            <ul className='flex justify-center items-center space-x-5'>
                <li className='font-semibold text-lg'>
                    <NavLink 
                        to='/'>
                            Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/'
                        onClick={() => setSearchBarCategoryValue(null)}
                        className={({ isActive }) =>(
                            isActive ? activeStyle : undefined
                        )}>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/clothes'
                        onClick={() => setSearchBarCategoryValue('clothes')}
                        className={({ isActive }) =>(
                            isActive ? activeStyle : undefined
                        )}>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/electronics'
                        onClick={() => setSearchBarCategoryValue('electronics')}
                        className={({ isActive }) =>(
                            isActive ? activeStyle : undefined
                        )}>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/furniture'
                        onClick={() => setSearchBarCategoryValue('furniture')}
                        className={({ isActive }) =>(
                            isActive ? activeStyle : undefined
                        )}>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/toys'
                        onClick={() => setSearchBarCategoryValue('toys')}
                        className={({ isActive }) =>(
                            isActive ? activeStyle : undefined
                        )}>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/others'
                        onClick={() => (
                            setSearchBarCategoryValue('others'),
                            setSearchBarTitleValue(null)
                        )}
                        className={({ isActive }) =>(
                            isActive ? activeStyle : undefined
                        )}>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className='flex justify-center items-center space-x-5'>
                <li className="text-black/60">
                    julian@hotmail.com
                </li>
                <li>
                    <NavLink
                        to='/my-orders'
                        className={({ isActive }) =>(
                            isActive ? activeStyle : undefined
                        )}>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/my-account'
                        className={({ isActive }) =>(
                            isActive ? activeStyle : undefined
                        )}>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/sign-in'
                        className={({ isActive }) =>(
                            isActive ? activeStyle : undefined
                        )}>
                        Sign In
                    </NavLink>
                </li>
                <li className='flex justify-between w-8'>
                    <ShoppingCartIcon className='size-5 text-dark'/> {ShoppingCartValue.length}
                </li>
                
            </ul>
        </nav>
    )
}

export { NavBar }