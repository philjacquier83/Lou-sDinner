import { useState } from "react"
import { Link } from "react-router-dom"

function MilkShakes() {

    const milkshakes = [
                        {name: 'Vanilla Shake', price: '3.99', image: 'Vanilla Milkshake.jpeg'},
                        {name: 'Chocolate Shake', price: '3.99', image: 'Chocolate Milkshake.jpeg'},
                        {name: 'Strawberry Shake', price: '3.99', image: 'Strawberry Milkshake.jpeg'},
                        {name: 'Banana Shake', price: '4.29', image: 'Banana Milkshake.jpeg'},
                        {name: 'Cookie & Cream Shake', price: '4.99', image: 'Cookie And Cream.jpeg'},
                        {name: 'Peanut Butter Shake', price: '4.99', image: 'Peanut Butter Milkshake.jpeg'},
                        {name: 'Mint Chocolate Shake', price: '4.99', image: 'Mint Chocolate Milkshake.jpeg'},
                        {name: 'Blueberry Shake', price: '4.99', image: 'Blueberry Milkshake.jpeg'}
                    ]

    const [imagePreview, setImagePreview ] = useState('')
    const [ isContainerVisible, setContainerVisible ] = useState(false)

    const handleMouseOver = (imageName) => {
        setContainerVisible(true)
        setImagePreview(imageName)
    }

    const handleMouseOut = () => {
        setContainerVisible(false)
        setImagePreview('')
    }

    let productSelected = null

    if(isContainerVisible) {
        productSelected = milkshakes.find(elem => elem.name === imagePreview)
    }

    return (

        <div className="lousMenu">
            <div className={`productContainer ${!isContainerVisible && 'productContainer--hidden'}`}>
                {productSelected &&
                    <div className="productImg">
                        <img id="imagePreview" src={`/src/assets/${productSelected.image}`} />
                    </div>
                }
            </div>
            
            <div className="milkshakesContainer">

                <div className="milkshakesTitle">Milk-shakes</div>

                <div className="milkshakesList">

                    {milkshakes.map((milkshake, index) =>
                    
                        <Link className="milkshakeProduct" key={`milkshake-${index}`} onMouseOver={() => handleMouseOver(milkshake.name)} onMouseOut={handleMouseOut}>
                            <div className="productName">{milkshake.name}</div>
                            <div className="productPrice">{milkshake.price} $</div>
                        </Link>

                    )}
                </div>
            </div>
        </div>

    )
}

export default MilkShakes