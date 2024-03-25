import { useState } from "react"
import { Link } from "react-router-dom"

function Meals() {

    const meals = [
                        {name: 'Hot dog', price: '5.99', image: 'Tuna Melt'},
                        {name: 'Club Sandwich', price: '5.99', image: 'Tuna Melt'},
                        {name: 'Pancakes', price: '5.99', image: 'Tuna Melt'},
                        {name: 'Spaghetti Bolognese', price: '9.99', image: 'Tuna Melt'},
                        {name: 'Macaroni & Cheese', price: '9.99', image: 'Tuna Melt'},
                        {name: 'Cheeseburger with fries', price: '9.99', image: 'Tuna Melt'},
                        {name: 'Tuna Melt', price: '9.99', image: 'Tuna Melt'},
                        {name: 'Fried Chicken', price: '10.99', image: 'Tuna Melt'},
                        {name: 'Meatloaf', price: '11.99', image: 'Tuna Melt'},
                        {name: 'Fish & Chips', price: '11.99', image: 'Tuna Melt'}
                    ]

    const [ imagePreview, setImagePreview ] = useState('')
    const [ isContainerVisible, setContainerVisible ] = useState(false)

    const handleMouseOver = (imageName) => {
        setContainerVisible(true)
        setImagePreview(imageName)
    }

    const handleMouseOut = () => {
        setContainerVisible(false)
        setImagePreview('')
    }

    return (

        <div className="lousMenu lousMenu--Meals">
            
            <div className={`productContainer ${!isContainerVisible && 'productContainer--hidden'}`}>
                    <div className="productImg">
                        <img id="imagePreview" src={`/src/assets/${imagePreview}.webp`} />
                    </div>

                    <div className="productDescName">{imagePreview} by Lou.</div>
                
            </div>
            
            <div className="mealsContainer">

                <div className="mealsTitle">Meals</div>

                <div className="mealsList">

                    {meals.map((meal, index) =>
                    
                        <Link to='/' className="mealProduct" key={`meal-${index}`} onMouseOver={() => handleMouseOver(meal.image)} onMouseOut={handleMouseOut}>
                            <div className="productName">{meal.name}</div>
                            <div className="productPrice">{meal.price} $</div>
                        </Link>

                    )}
                </div>
            </div>
        </div>

    )
}

export default Meals