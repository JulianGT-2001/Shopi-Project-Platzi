import React from 'react';
import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid';

const ShopiContext = React.createContext();

function CustomShopiProvider({ children })
{
    // Products ~ Show all products
    const [productsValue, setProducts] = React.useState([]);

    // Products ~ Filter Products
    const [filteredProductsValue, setFilteredProductsValue] = React.useState([]);

    // Shopping Cart ~ Increment quantity
    const [productsCount, setProductsCount] = React.useState(0);

    // Product Detail ~ Show product detail
    const [showProductDetailValue, setShowProductDetail] = React.useState(false);

    // Product Detail ~ Show product information
    const [productInformationValue, setProductInformation] = React.useState({});

    // Shopping Cart ~ Add products
    const [ShoppingCartValue, setShoppingCart] = React.useState([]);

    // Checkout Side Menu ~ Show Checkout Side Menu
    const [showCheckoutSideMenuValue, setShowCheckoutSideMenuValue] = React.useState(false);

    // Shopping Cart ~ Order
    const [orderValue, setOrder] = React.useState([]);

    // Search products by title
    const [searchBarTitleValue, setSearchBarTitleValue] = React.useState(null);
    
    // Search products by category
    const [searchBarCategoryValue, setSearchBarCategoryValue] = React.useState(null);


    // Products ~ Get Products
    const url = "https://api.escuelajs.co/api/v1/products";

    const showProductDetail = () => setShowProductDetail(true);
    const hideProductDetail = () => setShowProductDetail(false);
    const showCheckoutSideMenu = () => setShowCheckoutSideMenuValue(true);
    const hideCheckoutSideMenu = () => setShowCheckoutSideMenuValue(false);
    
    const showProductInformation = (productInformation) => {
      setProductInformation(productInformation)
      showProductDetail();
    }

    const addProductsToCart = (event, id, title, description, price, image) => {
      event.stopPropagation();
      const updatedCart = [...ShoppingCartValue];
      updatedCart.push({ id, title, description, price, image });
      setProductsCount(productsCount + 1);
      setShoppingCart(updatedCart);
      showCheckoutSideMenu();
    };

    const renderCheckIcon = (id, title, description, price, image) => {
      const isInCart = ShoppingCartValue.filter(product => product.id === id).length > 0;
      if(!isInCart){
        return (
          <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
              onClick={(event) => {
                  addProductsToCart(event, id, title, description, price, image);
              }}>
              <PlusIcon className='size-5 text-dark' />
          </div>
        )
      }

      return (
        <div className='absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1'>
            <CheckIcon className='size-5 text-white' />
        </div>
      )
    }

    React.useEffect(() => {
      fetch(url)
        .then(response => {
          if(response.ok){
            return response.json();
          }
          console.log('Hubo un error en el sistema, contacte con el administrador.');
        })
        .then(productos => {
          setProducts(productos)
        })
    }, []);

    const filteredProductsByTitle = (productsValue, searchBarTitleValue) => {
        return productsValue?.filter(product => product.title.toLowerCase().includes(searchBarTitleValue.toLowerCase()));
    }

    const filteredProductsByCategory = (productsValue, searchBarCategoryValue) => {
      return productsValue?.filter(product => product.category.name.toLowerCase().includes(searchBarCategoryValue.toLowerCase()));
    }

    const filterBy = (searchType, productsValue, searchBarTitleValue, searchBarCategoryValue) => {
      if (searchType === 'BY_TITLE'){
         return filteredProductsByTitle(productsValue, searchBarTitleValue);
      }

      if (searchType === 'BY_CATEGORY'){
        return filteredProductsByCategory(productsValue, searchBarCategoryValue);
      }

      if (searchType === 'BY_TITLE_AND_CATEGORY'){
        return filteredProductsByCategory(productsValue, searchBarCategoryValue).filter(product => product.title.toLowerCase().includes(searchBarTitleValue.toLowerCase()));
      }

      return productsValue;
    }

    React.useEffect(() => {
      if (searchBarTitleValue && !searchBarCategoryValue) setFilteredProductsValue(filterBy('BY_TITLE', productsValue, searchBarTitleValue, searchBarCategoryValue));
      if (searchBarTitleValue && searchBarCategoryValue) setFilteredProductsValue(filterBy('BY_TITLE_AND_CATEGORY', productsValue, searchBarTitleValue, searchBarCategoryValue));
      if (!searchBarTitleValue && searchBarCategoryValue) setFilteredProductsValue(filterBy('BY_CATEGORY', productsValue, searchBarTitleValue, searchBarCategoryValue));
      if (!searchBarTitleValue && !searchBarCategoryValue) setFilteredProductsValue(filterBy(null, productsValue, searchBarTitleValue, searchBarCategoryValue));
      
    }, [productsValue, searchBarTitleValue, searchBarCategoryValue]);
    return (
        <ShopiContext.Provider value={{
            productsValue,
            setProducts,
            productsCount,
            setProductsCount,
            showProductDetailValue,
            showProductDetail,
            hideProductDetail,
            productInformationValue,
            showProductInformation,
            ShoppingCartValue,
            setShoppingCart,
            addProductsToCart,
            showCheckoutSideMenuValue,
            showCheckoutSideMenu,
            hideCheckoutSideMenu,
            renderCheckIcon,
            orderValue,
            setOrder,
            searchBarTitleValue,
            setSearchBarTitleValue,
            filteredProductsValue,
            searchBarCategoryValue,
            setSearchBarCategoryValue
        }}>
            { children }
        </ShopiContext.Provider>
    )
}

export { ShopiContext, CustomShopiProvider }