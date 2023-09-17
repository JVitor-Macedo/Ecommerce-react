import { BsFillBagHeartFill } from "react-icons/bs"


    // eslint-disable-next-line react/prop-types
    function Card({ img, title, reviews, prevPrice, newPrice }) {
    return <section className="card">
    <img className="card-img" src={img} alt={title} />
    <div className="card-details">
        <h3 className="card-title">{title}</h3>
        <section className="card-reviews">
            <span className="total-reviews">{reviews}</span>
        </section>
        <section className="card=price">
            <div className="price">
                <del>{prevPrice}</del> {newPrice}
            </div>
            <div className="bag">
                <BsFillBagHeartFill className="bag-icon"/>
            </div>
        </section>
    </div>
</section>
}

export default Card