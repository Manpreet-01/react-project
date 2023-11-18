export default function Product(product){
  return (
    <div className="bg-slate-700 rounded-xl grid grid-cols-3 gap-4">
      
      <img className="p-4 rounded-3xl h-[250px]" src={product.image}/>
      
      <div className="col-span-2 flex flex-col gap-1 justify-evenly">
        <div>
          <h1 className="text-2xl">{product.title}</h1>
          <p className="text-xl">Category: {product.category}</p>
        </div>
        
        <p className="">{product.description}</p>
        
        <div className="flex justify-start gap-8">
          <p>Rs. {product.price}</p>
          <p>Rating: {product.rating.rate}</p>
          <p>Count: {product.rating.count}</p>
        </div>
      </div>
    </div>
  )
}