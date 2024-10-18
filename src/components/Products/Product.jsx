function Product({ item }) {
  return (
    <div className="flex flex-col justify-center items-center space-y-2">
      <p>{item.title}</p>
      <div className="h-64 w-64 overflow-hidden">
        <img className="transition-all duration-1000 hover:scale-150" src={item.imageUrl} />
      </div>
      <p>{item.price}</p>
    </div>
  );
}

export default Product;
