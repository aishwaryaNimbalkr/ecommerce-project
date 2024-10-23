import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Name } from "../Context";
import { useContext, useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";

const Cart =()=>{
    const {cart,setCart}=useContext(Name);
    const [totalAmount, setTotalAmount] = useState(0);
  const [deliveryCharge, setDeliveryCharge] = useState(0);

    console.log(cart)
    function Remove(id) {
      const discarded = cart.filter((items) => items.item.id !== id)
      setCart(discarded)
    }

    useEffect(()=>{
        const newTotalAmount=cart.reduce((acc,{item,quantity})=> acc + item.price * quantity,0);
        setTotalAmount(newTotalAmount.toFixed(2)); 

        const charge = newTotalAmount < 500 ? 100 : 0;
        setDeliveryCharge(charge.toFixed(2)); 
    },[cart])

    const increseQuantity=(id)=>{
      const updatedCart=cart.map((item)=>{
        if(item.item.id===id){
          item.quantity++;
        }
        return item;
      })
      setCart([...updatedCart])
    }

    const decreaseQuantity=(id)=>{
      const updatedCart=cart.map((item)=>{
        if(item.item.id===id && item.quantity>1){
          item.quantity--;
        }
        return item;
      })
      setCart([...updatedCart])
    }


    if(cart.length===0){
        return(
    
      <div className=" border border-2 bg-danger rounded-4 mx-auto p-5 text-center m-5" style={{height:"max-content",width:"max-content"}}>
        <h1 className="m-5 fw-bold text-white">Bag is Empty</h1>
         <p className="display-4 hi" >😥</p>
         <Link to="/"><Button className="m-5" variant="dark">Shop Now</Button></Link>
      </div>
        )
    }


    return(
      <>
      <div className="row align-items-center justify-content-center"style={{display:"flex",flexDirection:"row",margin:"10px"}}>
      <div className="d-flex flex-column  border border-2 rounded border-dark col col-lg-5 col-sm-12 col-xs-12 col-12 ">
        <h3>My Cart</h3>
      {

        cart.map(({ item, quantity })=>{
          return(
            <div  key={item.id} className="d-flex flex-row justify-content-center border  row " style={{width:"auto"}}>
              <img className="col col-lg-4 col-sm-4 col-xs-4 col-4"src={item.image} alt="imagw" height="100px" width="100px" style={{objectFit:"cover"}}/>
              <div className="d-flex flex-column  col-lg-5 col-sm-5 col-xs-5 col-5" >
              <h5 >{item.title}</h5>
              
                <div className="d-flex flex-row ">
                <p className="m-2 fw-bold fs-4 border px-1 " onClick={()=>{increseQuantity(item.id)}}>+</p>
                <p className="mt-3">{quantity}  </p> 
                <p className="m-2 fw-bold fs-4 border px-1" onClick={()=>{decreaseQuantity(item.id)}}>-</p> 
                <p className="mx-3 mt-3">{"$"+item.price}</p>

                 
                  </div> 
                  
                  
                  
              </div>
             
             <RxCross2 className="fs-4 col col-lg-3 " style={{cursor:"pointer"}} onClick={()=>{Remove(item.id)}}/>  
              </div>
          )
        })}
        </div>
        <div className="p-5 col col-lg-5 col-sm-12 border border-2 border-dark m-2 rounded">
          <h2 className="fw-bold">Summary</h2>
        <p><b>Items: </b>{cart.length}</p>
        <p><b>Total Amount:</b> {totalAmount}</p>
        <p><b>Delivery Charge:</b> {deliveryCharge}</p>
        <h4><b>Grand Total: </b>{(parseFloat(totalAmount) + parseFloat(deliveryCharge)).toFixed(2)}</h4> 
        <Button className="w-100"variant="success">CheckOut</Button>
      </div>
      </div>
      </>
      )
    
  
}
export default Cart;