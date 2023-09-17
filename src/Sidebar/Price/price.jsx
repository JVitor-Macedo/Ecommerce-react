import Input from "../../Components/input"
import "./Price.css"


// eslint-disable-next-line react/prop-types
function Price({handleChange}){
    return <div className="ml">
        <h2 className="sidebar-title price-title">Preço</h2>
   
          <label className="sidebar-label-container">
            <input onChange={handleChange} type="radio" value="" name="test2"/>
            <span className="checkmark"></span>All
          </label>

          <Input
           handleChange={handleChange}
           value={50}
           title="R$0 - 50"
           name="test2"
           color=""
           />
             <Input
           handleChange={handleChange}
           value={100}
           title="R$50 - 100"
           name="test2"
           color=""
           />
             <Input
           handleChange={handleChange}
           value={150}
           title="R$100 - 150"
           name="test2"
           color=""
           />
             <Input
           handleChange={handleChange}
           value={200}
           title="R$150 - 200"
           name="test2"
           color=""
           />
    
    </div>
}

export default Price