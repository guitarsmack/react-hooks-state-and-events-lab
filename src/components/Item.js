import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart,setInCart] = useState(false)
  
  function toggleInCart(){
    setInCart((inCart) => !inCart)
  }

  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={toggleInCart} className={inCart?"in-cart":"add"}>{inCart?"Remove From Cart":"Add to Cart"}</button>
    </li>
  );
}

export default Item;
