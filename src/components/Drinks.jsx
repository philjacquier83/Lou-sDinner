import { Link } from "react-router-dom"

function Drinks() {

    const drinks = [
                    {
                        drinkCategory: "Softs",
                        drinkList: [
                            {name: 'Coca-Cola', price: '2.99'},
                            {name: 'Pepsi-Cola', price: '2.99'},
                            {name: 'Sprite', price: '2.99'},
                            {name: '7UP', price: '2.99'},
                            {name: 'Dr Pepper', price: '2.99'},
                            {name: 'Mountain Dew', price: '2.99'},
                            {name: 'Orange Crush', price: '2.99'},
                            {name: 'Fanta', price: '2.99'},
                            {name: 'A&W Cream Soda', price: '2.99'},
                            {name: 'Squirt', price: '2.99'}
                        ]
                    },
                    {
                        drinkCategory: "Beers",
                        drinkList: [
                            {name: 'Budweiser', price: '2.49'},
                            {name: 'Coors', price: '2.49'},
                            {name: 'Schlitz', price: '2.49'},
                            {name: 'Pabst Blue Ribbon', price: '2.49'},
                            {name: 'Old Milwaukee', price: '2.79'},
                            {name: 'Stroh\'s', price: '2.79'},
                            {name: 'Labatt Blue', price: '2.79'},
                            {name: 'Rolling Rock', price: '2.79'},
                            {name: 'Hamm\'s', price: '2.79'},
                            {name: 'Busch', price: '2.79'}
                        ]
                    }
                    ]

    return (

        <div className="lousMenu">
            <div className="drinksContainer">

                <div className="drinksTitle">Drinks</div>

                <div className="drinksList">
                    
                    <div className="drinksSubList">
                        {drinks.map((sortOfDrink, index) =>
                            <div className="drinksCategory">
                                <div className="subCategory" key={`Category-${index}`}>{sortOfDrink.drinkCategory}</div>
                                
                                {sortOfDrink.drinkList.map((drink, id) =>
                                    <Link to="/" className="drinkProduct" key={`${sortOfDrink.drinkCategory}-${id}`}>
                                        <div className="productName">{drink.name}</div>
                                        <div className="productPrice">{drink.price} $</div>
                                    </Link>
                                )}
                            </div>
                        )}

                    </div>
                    
                </div>
            </div>
        </div>

    )
}

export default Drinks