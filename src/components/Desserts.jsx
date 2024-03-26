import { useState } from "react"
import { Link } from "react-router-dom"

function Desserts() {

    const desserts = [
                        {name: 'Apple Pie', price: '1.99', image: 'ApplePie.jpeg'},
                        {name: 'Chocolate Brownie', price: '1.99', image: 'ChocolateBrownie.jpeg'},
                        {name: 'Ice Cream Sundae', price: '2.99', image: 'IceCreamSundae.jpeg'},
                        {name: 'Cheesecake', price: '2.99', image: 'Cheesecake.jpeg'},
                        {name: 'Banana Split', price: '2.99', image: 'BananaSplit.jpeg'},
                        {name: 'Lemon Meringue Pie', price: '2.99', image: 'LemonMeringuePie.jpeg'},
                        {name: 'Fruit Crumble', price: '2.99', image: 'FruitCrumble.jpeg'},
                        {name: 'Cherry Pie', price: '3.29', image: 'CherryPie.jpeg'}
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
        productSelected = desserts.find(elem => elem.name === imagePreview)
    }

    return (

        <div className="lousMenu lousMenu--Desserts">
            <div className="dessertsContainer">

                <div className="dessertsTitle">Desserts</div>

                <div className="dessertsList">

                    {desserts.map((dessert, index) =>
                    
                        <Link className="dessertProduct" key={`dessert-${index}`} onMouseOver={() => handleMouseOver(dessert.name)} onMouseOut={handleMouseOut}>
                            <div className="productName">{dessert.name}</div>
                            <div className="productPrice">{dessert.price} $</div>
                        </Link>

                    )}
                </div>
            </div>

            <div className={`productContainer ${!isContainerVisible && 'productContainer--hidden'} productContainer--Desserts`}>
                {productSelected &&
                    <div className="productImg">
                        <img id="imagePreview" src={`/src/assets/${productSelected.image}`} />
                    </div>
                }
            </div>
            
        </div>

    )
}

export default Desserts