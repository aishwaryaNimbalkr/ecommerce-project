import { Nav, Navbar, NavbarBrand, NavLink } from "react-bootstrap";
import Logo2 from './logo2.png'
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Name } from "../Context";
import { useContext } from "react";


const NavbarMain=()=>{
    const {cart}=useContext(Name)
    const {search,setSearch}=useContext(Name)
   


    return(
        <>
        <Navbar expand="lg" className="bg-dark text-white mx-auto ">
            <NavbarBrand className="w-25 mx-auto" ><Link to="/"><img src={Logo2} alt="" height="100px" width="150px"/></Link></NavbarBrand>
         
                <Nav className="w-50 mr-auto d-flex flex-row">
                    <NavLink className="me-auto w-75 d-none d-lg-block d-xs-none d-sm-block ">
                        <div className="d-flex flex-row justify-content-center">
                            <input className="px-5 py-2 border border-2 border-primary w-100 rounded-5 " type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search for More..."/>
                            <FaSearch  style={{transform:"translateX(-200%)translateY(40%)",color:"black",fontSize:"25px"}}/>
                        </div>
                    </NavLink>
                    <NavLink className="mx-auto"><Link to="cart" style={{textDecoration:"none",fontSize:"20px",color:"white"}}>{(cart.length===0)?<FaShoppingCart style={{fontSize:"40px",color:"white"}}/>:<><FaShoppingCart style={{fontSize:"40px",color:"white"}}/><sup><div className="em" style={{backgroundColor:"red",borderRadius:"100px",height:"20px",width:"20px",textAlign:"center",display:"table-cell",verticalAlign:"middle"}}>{cart.length}</div></sup></>}</Link></NavLink>
                </Nav>
          
        </Navbar>
        </>
    )
}
export default NavbarMain;