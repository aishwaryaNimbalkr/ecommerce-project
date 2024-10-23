import { useContext, useState } from "react";
import { Name } from "../Context";
import { Button, Container } from "react-bootstrap";

const A=()=>{
    const {state,cart,setCart,search}=useContext(Name);
    
    const addItem = (item, quantity = 1) => {
      // Check if the item is already in the cart
      const itemInCart = cart.find(cartItem => cartItem.item.id === item.id);
      
      if (!itemInCart) {
        setCart([...cart, { item, quantity }]);
      }
    };
    
    
    function Remove(id) {
      const discarded = cart.filter((items) => items.item.id !== id)
      setCart(discarded)
    }
    const[filButton,setFilButton]= useState("all")
    
  const filteredList = state
    .filter((it) => filButton === "all" || it.category === filButton) //filter buttons
    .filter((it) => it.title.toLowerCase().includes(search.toLowerCase())); //search bar

  
    console.log(state)
    return(
        <>
<Container >
    <h3 className="text-center fw-bold my-3">BEST OF AK EXCLUSIVE BRANDS</h3>
    <nav className="text-center ">
      <Button className="m-1 border border-2 border-dark rounded-0" variant="outline-dark" onClick={()=>setFilButton("all")}>All</Button>
      <Button className="m-1 border border-2 border-dark rounded-0" variant="outline-dark" onClick={()=>setFilButton("men's clothing")}>Men</Button>
      <Button className="m-1 border border-2 border-dark rounded-0" variant="outline-dark" onClick={()=>setFilButton("women's clothing")}>Women</Button>
      <Button className="m-1 border border-2 border-dark rounded-0" variant="outline-dark" onClick={()=>setFilButton("electronics")}>Electronics</Button>
      <Button className="m-1 border border-2 border-dark rounded-0" variant="outline-dark" onClick={()=>setFilButton("jewelery")}>Jwellery</Button>
    </nav>
 <div className="m-5"style={{display:"flex",flexDirection:"row", justifyContent:"space-around",flexWrap:"wrap"}}>
   {filteredList.map((items)=>{
    const itemInCart = cart.find(cartItem => cartItem.item.id === items.id);
    return(
        
      
        <div className="box bg-white d-flex flex-column align-items-center p-2 border border-2 my-2 text-center" style={{height:"max-content",width:"250px"}}>
          <h5>{items.title.substring(0,20)+"..."}</h5>
          <small>{items.description.substring(0,30)+"..."}</small>
          <img className="my-3" src={items.image} alt="" height="150px" width="100px" style={{objectFit:"contain"}}/>
          <div className="my-3"style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
            <p className="mx-2 text-success fw-bold">{"$"+items.price}</p>
            {itemInCart ? (
                  <Button variant="outline-dark" onClick={() => Remove(items.id)}>Remove</Button>
                ) : (
                  <Button variant="outline-dark" onClick={() => addItem(items, 1)}>Add Cart</Button>
                )}
          </div>
        </div>
     
    )
   })}
  
</div>
</Container>
        </>
    )
}
export default A;