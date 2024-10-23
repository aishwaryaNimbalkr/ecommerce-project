import { Container } from "react-bootstrap";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer=()=>{
    return(
        <>
        <Container fluid className="bg-dark text-white text-center p-4">
        <div className="bg-dark d-flex flex-row justify-content-center p-5 mx-auto">
            <FaFacebookSquare style={{fontSize:"40px",margin:"15px"}}/>
            <FaInstagramSquare style={{fontSize:"40px",margin:"15px"}}/>
            <FaXTwitter style={{fontSize:"40px",margin:"15px"}}/>
        </div>
        <p>@ AK Super Market</p>
        </Container>
        
        </>
    )
}
export default Footer;