import "./Products.css"

// eslint-disable-next-line react/prop-types
function Products({result}){
    return <>
    <section className="card-container">
    {result}
    </section>
    </>
}

export default Products