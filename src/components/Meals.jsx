import { useState } from "react"
import { Link } from "react-router-dom"

function Meals() {

    const meals = [
                        {name: 'Hot Dog', price: '5.99', image: 'Hot Dog.jpeg'},
                        {name: 'Club Sandwich', price: '5.99', image: 'Club Sandwich.jpeg'},
                        {name: 'Pancakes', price: '5.99', image: 'Pancakes.webp'},
                        {name: 'Spaghetti Bolognese', price: '9.99', image: 'Spaghetti Bolognese.jpeg'},
                        {name: 'Macaroni & Cheese', price: '9.99', image: 'Macaroni And Cheese.jpeg'},
                        {name: 'Cheeseburger with Fries', price: '9.99', image: 'Cheeseburger And Fries.jpeg'},
                        {name: 'Tuna Melt', price: '9.99', image: 'Tuna Melt.webp'},
                        {name: 'Fried Chicken', price: '10.99', image: 'Fried Chicken.webp'},
                        {name: 'Meatloaf', price: '11.99', image: 'Meatloaf.jpeg'},
                        {name: 'Fish & Chips', price: '11.99', image: 'Fish And Chips.jpeg'}
                    ]

    const [ imagePreview, setImagePreview ] = useState('')
    const [ isContainerVisible, setContainerVisible ] = useState(false)
    const [ productOrder, setProductOrder ] = useState(null)
    const [ orderQuantity, setOrderQuantity ] = useState(1)

    const handleMouseOver = (imageName) => {
        setContainerVisible(true)
        setImagePreview(imageName)
    }

    const handleMouseOut = () => {
        setContainerVisible(false)
        setImagePreview('')
    }

    const handleOrder = (product) => {
        setProductOrder(product)
    }

    const handleCloseOrder = () => {
        setProductOrder(null)
    }

    const handleQuantity = () => {
        setOrderQuantity(1)
    }

    const handleQuantityMore = () => {
        setOrderQuantity(prev => prev + 1)
    }

    const handleQuantityLess = () => {
        setOrderQuantity(prev => prev - 1)
    }

    let productSelected = null
    let productOrdered = null

    if(isContainerVisible) {
        productSelected = meals.find(elem => elem.name === imagePreview)
    }

    if(productOrder !== null) {
        productOrdered = meals.find(elem => elem.name === productOrder)
    }

    return (

        <>
        <div className="lousMenu lousMenu--Meals">
            
            <div className={`productContainer ${!isContainerVisible && 'productContainer--hidden'} productContainer--Meals`}>
                {productSelected &&
                    <div className="productImg">
                        <img id="imagePreview" src={`/src/assets/${productSelected.image}`} />
                    </div>
                }
            </div>
            
            <div className="mealsContainer">

                <div className="mealsTitle">Meals</div>

                <div className="mealsList">

                    {meals.map((meal, index) =>
                    
                        <Link to='/' className="mealProduct" key={`meal-${index}`} onClick={() => handleOrder(meal.name)} onMouseOver={() => handleMouseOver(meal.name)} onMouseOut={handleMouseOut}>
                            <div className="productName">{meal.name}</div>
                            <div className="productPrice">{meal.price} $</div>
                        </Link>

                    )}
                </div>
            </div>
        </div>

        {productOrdered &&
        <div className="orderContainer">
            {productOrdered &&
            <>
            <div className="order">
            <div className="close" onClick={handleCloseOrder}>x</div>
                    
                <div className="imgOrder">
                    <img src={`/src/assets/${productOrdered.image}`} />
                </div>

                <div className="orderDetails">
                    <div className="orderName">{productOrdered.name}</div>
                    <div className="orderQuantity">
                        <button className={`less ${orderQuantity === 1 && 'forbiddenAction'}`} onClick={orderQuantity > 1 ? handleQuantityLess : ''}>-</button>
                        <button className="quantity">{orderQuantity}</button>
                        <button className="more" onClick={handleQuantityMore}>+</button>
                    </div>
                    <div onClick={handleQuantity}>Clear</div>
                    <div className="orderPrice">{orderQuantity === 0 ? '0.00' : (Number(orderQuantity) * Number(productOrdered.price)).toFixed(2)} $</div>
                </div>
            </div>
            </>
            }
        </div>
        }
        </>

    )
}

export default Meals