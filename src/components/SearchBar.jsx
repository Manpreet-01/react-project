import {useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery, setFilteredProductList} from '../features/products/productListSlice';

export default function SearchBar(){
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  
  const handleSearch = (newValue) => {
    setInputValue(old => newValue);
    dispatch(setSearchQuery(newValue));
    dispatch(setFilteredProductList(newValue));
  };
  
  return (
    <>
      <div className="flex justify-end gap-2">
        <input
          value={inputValue}
          onChange={(e)=> handleSearch(e.target.value)}
          className="text-black  text-xl rounded-lg py-2 px-12" placeholder="Search Products here..."
        />
        <button
          onClick={() => handleSearch('')}
          className="bg-blue-700 hover:bg-blue-600 rounded-lg px-4"
        >Clear Search</button>
      </div>
    </>
  )
}