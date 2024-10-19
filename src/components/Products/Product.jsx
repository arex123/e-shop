import { useContext } from "react";
import StoreContext from "../../store/StoreContext";
import { useNavigate } from "react-router-dom";

function Product({ item }) {
  const ctx=useContext(StoreContext)
  const handleItemAdd = () => {
    ctx.onAddItem(item)
  };
  const navigate=useNavigate()
  const handleItemVie=()=>{
    console.log("item: ,,",item)
    navigate('/product/'+item.id)
  }
  return (
    <div className="flex flex-col justify-center items-center space-y-2">
      <p>{item.title}</p>
      <div className="h-64 w-64 overflow-hidden">
        <img
          className="transition-all duration-1000 hover:scale-150"
          src={item.imageUrl}
          onClick={handleItemVie}
        />
      </div>
      <div className="w-full flex justify-between">
        <p>{item.price}</p>
        <button onClick={handleItemAdd} className="bg-blue-400 p-1 text-white">
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Product;
