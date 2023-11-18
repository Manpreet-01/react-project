import {
  setCategories,
  setProductList,
  setFiltersOnCategories,
  setFilteredProductList,
} from '../features/products/productListSlice';



export const fetchProducts = (dispatch) => {

  const extractCategories = (products) => {
    const availableCategories = [];
    products.map(product => {
      const currCategory = product.category;
      if(!availableCategories.includes(currCategory)){
        availableCategories.push(currCategory)
      }
    })
    
    availableCategories.sort()
    dispatch(setCategories(availableCategories));
  }
  
  const limit = 20; // limit no of products received in api;
  const url = `https://fakestoreapi.com/products/?limit=${limit}`
  
  fetch(url)
    .then(res => res.json())
    .then(products => {
      dispatch(setProductList(products));
      dispatch(setFilteredProductList());
      
      extractCategories(products);
      // console.log(`fetched ${products.length} products`)
    }
  );
  
  
};