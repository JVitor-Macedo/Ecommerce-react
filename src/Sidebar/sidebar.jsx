import { AiOutlineShoppingCart } from "react-icons/ai"
import Category from "./Category/Category"
import "./Sidebar.css"
import Colors from "./Colors/Colors"
import Price from "./Price/Price"


// eslint-disable-next-line react/prop-types
function Sidebar({handleChange}){
    
    return <>
    <section className="sidebar">
        <div className="logo-container">
            <h1><AiOutlineShoppingCart/></h1>
        </div>
        
        <Category handleChange={handleChange}/>
        <Price handleChange={handleChange}/>
        <Colors handleChange={handleChange}/>
    </section>
    </>
}

export default Sidebar