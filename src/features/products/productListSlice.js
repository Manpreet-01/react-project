import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
  categories: [],
  filteredProducts: [],
  filteredCategories: [],
  searchQuery: '',
}

export const productListSlice = createSlice({
  name: 'productListReducer',
  initialState,
  reducers: {
    setProductList: (state, action) => {
      state.products = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setFiltersOnCategories: (state, action) => {
      const currFilters = state.filteredCategories;
      const newFilter = action.payload;
      

      if(currFilters.includes(newFilter)){
        const updatedFilters = currFilters.filter(filter => filter !== newFilter);
        state.filteredCategories = updatedFilters;
      }
      else {
        const filtersToAdd = Array.isArray(newFilter) ? newFilter : [newFilter];
        state.filteredCategories.push(...filtersToAdd);
      }
    },

    setFilteredProductList: (state, action) => {     
      if(state.filteredCategories.length !== 0){
        state.filteredProducts = state.products.filter((product) => {
          if(state.filteredCategories.includes(product.category)){
            return product;
          }
        });
      } else {
        state.filteredProducts = state.products;
      }
      
      if(state.searchQuery){
        state.filteredProducts = state.filteredProducts.filter((product) => {
          return product.title.toLowerCase().includes(state.searchQuery.toLowerCase());
        });
      }
    },
    
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  }
});

// Action creators are generated for each case reducer function
export const { setProductList, setFilteredProductList, setCategories, setFiltersOnCategories,setSearchQuery } = productListSlice.actions
export default productListSlice.reducer