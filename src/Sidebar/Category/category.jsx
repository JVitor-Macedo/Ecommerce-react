import Input from "../../Components/input"
import "./Category.css"

// eslint-disable-next-line react/prop-types
function Category({handleChange}){
    return <div>
        <h2 className="sidebar-title">Category</h2>

        <div>
          <label className="sidebar-label-container">
            <input onChange={handleChange} type="radio" value="" name="test1"/>
            <span className="checkmark"></span>All
          </label>

          <Input
          handleChange={handleChange}
          value="sneakers"
          title="Sneakers"
          name="test"
          color= ""
        />
        <Input
          handleChange={handleChange}
          value="flats"
          title="Flats"
          name="test"
          color= ""
        />
        <Input
          handleChange={handleChange}
          value="sandals"
          title="Sandals"
          name="test"
          color= ""
        />
        <Input
          handleChange={handleChange}
          value="heels"
          title="Heels"
          name="test"
          color= ""
        />

        </div>
    </div>
}

export default Category