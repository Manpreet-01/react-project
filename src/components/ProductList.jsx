import { useSelector } from 'react-redux';
import Product from './Product';


export default function ProductList(){
  const { products, filteredProducts, searchQuery } = useSelector((state) => state.productListReducer);
  
  return  (
    <>
      {filteredProducts && filteredProducts.map(obj => (
        <Product key={obj.id} {...obj} />
      ))}
      
      {searchQuery && filteredProducts.length == 0 &&
        <NotFound />
      }
    </>
  );
}


function NotFound(){
  return (
    <div className="bg-slate-800 flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <div className="text-center">
          <svg className="w-16 h-16 mx-auto mb-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
          <p className="text-xl font-semibold text-gray-800">No search result found.</p>
        </div>
      </div>
    </div>
  );
}