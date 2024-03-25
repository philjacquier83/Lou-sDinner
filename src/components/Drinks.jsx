import { useState } from "react"
import { Link } from "react-router-dom"

function Drinks() {

    const drinks = [
                    {
                        drinkCategory: "Softs",
                        drinkList: [
                            {name: 'Coca-Cola', price: '2.99', image: 'Coca.jpeg'},
                            {name: 'Pepsi-Cola', price: '2.99', image: 'Pepsi.webp'},
                            {name: 'Sprite', price: '2.99', image: 'Sprite.jpeg'},
                            {name: '7UP', price: '2.99', image: '7UP.webp'},
                            {name: 'Dr Pepper', price: '2.99', image: 'DrPepper.jpeg'},
                            {name: 'Mountain Dew', price: '2.99', image: 'MountainDew.jpeg'},
                            {name: 'Orange Crush', price: '2.99', image: 'OrangeCrush.jpeg'},
                            {name: 'Fanta', price: '2.99', image: 'Fanta.jpeg'},
                            {name: 'A&W Cream Soda', price: '2.99', image: 'A&W.jpeg'},
                            {name: 'Squirt', price: '2.99', image: 'Squirt.avif'}
                        ]
                    },
                    {
                        drinkCategory: "Beers",
                        drinkList: [
                            {name: 'Budweiser', price: '2.49', image: 'Budweiser.jpeg'},
                            {name: 'Coors', price: '2.49', image: 'Coors.webp'},
                            {name: 'Schlitz', price: '2.49', image: 'Schlitz.jpeg'},
                            {name: 'Pabst Blue Ribbon', price: '2.49', image: 'PabstBlueRibbon.jpeg'},
                            {name: 'Old Milwaukee', price: '2.79', image: 'OldMilwaukee.jpeg'},
                            {name: 'Stroh\'s', price: '2.79', image: 'Stroh\'s.jpeg'},
                            {name: 'Labatt Blue', price: '2.79', image: 'LabattBlue.jpeg'},
                            {name: 'Rolling Rock', price: '2.79', image: 'RollingRock.png'},
                            {name: 'Hamm\'s', price: '2.79', image: 'Hamm\'s.jpeg'},
                            {name: 'Busch', price: '2.79', image: 'Busch.jpeg'}
                        ]
                    }
                    ]

    const [ imagePreview, setImagePreview ] = useState('')
    const [ isContainerVisible, setContainerVisible ] = useState(false)

    const handleMouseOver = (imageName) => {
        setContainerVisible(true)
        setImagePreview(imageName)
    }

    const handleMouseOut = () => {
        setContainerVisible(false)
    }

    let productSelected = null

    if(isContainerVisible) {
        productSelected = drinks[0].drinkList.find(elem => elem.name === imagePreview)
        if(!productSelected) {
            productSelected = drinks[1].drinkList.find(elem => elem.name === imagePreview)
        }
    }

    return (

        <div className="lousMenu">
            <div className="drinksContainer">

                <div className="drinksTitle">Drinks</div>

                <div className="drinksList">
                    
                    <div className="drinksSubList">
                        {drinks.map((sortOfDrink, index) =>
                            <div key={`Drink-${sortOfDrink}-${index}`} className="drinksCategory">
                                <div className="subCategory" key={`Category-${index}`}>{sortOfDrink.drinkCategory}</div>
                                
                                {sortOfDrink.drinkList.map((drink, id) =>
                                    <Link to="/" className="drinkProduct" key={`${sortOfDrink.drinkCategory}-${id}`} onMouseOver={() => handleMouseOver(drink.name)} onMouseOut={handleMouseOut}>
                                        <div className="productName">{drink.name}</div>
                                        <div className="productPrice">{drink.price} $</div>
                                    </Link>
                                )}
                            </div>
                        )}

                    </div>
                    
                </div>
            </div>

            <div className={`productContainer ${!isContainerVisible && 'productContainer--hidden'} productContainer--Drinks`}>
                {productSelected &&
                    <div className="productImg">
                        <img id="imagePreview" src={`/src/assets/${productSelected.image}`} />
                    </div>
                }
            </div>
            
        </div>

    )
}

export default Drinks