import React, { useEffect, useState } from "react";

import { useSearchParams } from "react-router-dom";

import ProductList from './components/ProductList';
import SearchBar from './components/SearchBar';
import { useDispatch, useSelector } from 'react-redux';

import {fetchProducts} from './services/services.js';

import {
  setProductList,
  setCategories,
  setFiltersOnCategories,
  setFilteredProductList,
} from './features/products/productListSlice';

function App(){
  const dispatch = useDispatch();
  const { categories, filteredCategories } = useSelector((state) => state.productListReducer);
  
  let [searchParams, setSearchParams] = useSearchParams({});
  
  
  useEffect(() => {
    fetchProducts(dispatch);
    
    const urlFilters = [...searchParams.keys()];
    dispatch(setFiltersOnCategories(urlFilters))
  }, []);
  
  const handleSelectCategories = (newCategory, value) => {
    dispatch(setFiltersOnCategories(newCategory));
    dispatch(setFilteredProductList());

    setSearchParams(prev => {
      if(prev.has(newCategory)) prev.delete(newCategory);
      else prev.append(newCategory, '1');
      return prev;
    });
    
  };

  return (
    <>
      <div className="bg-black text-white w-screen m-0 flex flex-col gap-4 h-screen">
      
        <div className="flex justify-center text-[25px] align-center">Logo</div>
        <SearchBar />
        
        <div className="h-[78%] grid grid-cols-4 grid-rows-1 gap-3">
          <div className="h-full p-4 border border-gray-500">
            <p className="font-bold">Categories:</p>
            <ul className="p-4">
              {categories && categories.map(category => (
                <li className="flex flex-row-reverse capitalize gap-2 justify-end align-center hover:bg-slate-500 rounded p-1" key={category}
                >
                  <label
                    className="w-full cursor-pointer"
                    htmlFor={category}
                  >{category}</label>
                  <input
                    type="checkbox"
                    id={category}
                    className="cursor-pointer w-5 h-8"
                    checked={filteredCategories.includes(category)}
                    onChange={(e) => 
                      handleSelectCategories(category, e.target.checked)
                    }
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className="overflow-auto flex flex-col gap-4 col-span-3 p-4 border border-gray-500">
            <ProductList />
          </div>
        </div>
      </div>
    </>
  )
}

export default App;