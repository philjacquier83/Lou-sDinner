function Meals() {

    const meals = [
                        {name: 'Cheeseburger with fries', price: '9.99'},
                        {name: 'Hot dog', price: '5.99'},
                        {name: 'Club Sandwich', price: '5.99'},
                        {name: 'Pancakes', price: '5.99'},
                        {name: 'Spaghetti Bolognese', price: '9.99'},
                        {name: 'Macaroni & Cheese', price: '9.99'},
                        {name: 'Tuna Melt', price: '9.99'},
                        {name: 'Fried Chicken', price: '10.99'},
                        {name: 'Meatloaf', price: '11.99'},
                        {name: 'Fish & Chips', price: '11.99'}
                    ]

    return (

        <div className="lousMenu lousMenu--Meals">
            <div className="mealsContainer">

                <div className="mealsTitle">Meals</div>

                <div className="mealsList">

                    {meals.map((meal, index) =>
                    
                        <div className="mealProduct" key={`meal-${index}`}>
                            <div className="productName">{meal.name}</div>
                            <div className="productPrice">{meal.price}</div>
                        </div>

                    )}
                </div>
            </div>
        </div>

    )
}

export default Meals