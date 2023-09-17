import {FiHeart} from 'react-icons/fi'
import {AiOutlineShoppingCart, AiOutlineUserAdd} from "react-icons/ai"
import"./Nav.css"

// eslint-disable-next-line react/prop-types
function Nav({query, handleInputChange}){
    return <nav>
        <div className="nav-conteiner">
            <input 
            className="search-input"
            type="text" 
            onChange={handleInputChange}
            value={query}
            placeholder="Pesquise aqui..." />
        </div>

        <div className="profile-conteiner">
            <a href="#">
                <FiHeart className="nav-icons"/>            
            </a>

            <a href="#">
                <AiOutlineShoppingCart className="nav-icons"/>            
            </a>

            <a href="#">
                <AiOutlineUserAdd className="nav-icons"/>            
            </a>
        </div>

    </nav>
}

export default Nav