import { Link } from "react-router-dom"

const Navbar =()=>
{
   return(
       <>
       <Link to="/">Home</Link>
       <Link to="/product-list">Product List</Link>
       <Link to="/login">Login</Link>
       <Link to="/add_card">Add card</Link>
       </>
   )
}
export default Navbar