import Buttons from "../Components/buttons"
import "./Recommended.css"

// eslint-disable-next-line react/prop-types
function Recommended({handleClick}){
    return <>
     <div>
        <h2 className="recommended-title">Recomendados</h2>
        <div className="recommended-flex">
            
            <Buttons onClickHandler={handleClick} value="" title="Todos"/>
            <Buttons onClickHandler={handleClick} value="Nike" title="Nike"/>
            <Buttons onClickHandler={handleClick} value="Adidas" title="Adidas"/>
            <Buttons onClickHandler={handleClick} value="Puma" title="Puma"/>
            <Buttons onClickHandler={handleClick} value="Vans" title="Vans"/>
            
        </div>
     </div>
    </>
}

export default Recommended