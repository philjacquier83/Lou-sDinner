function Meals() {

    const meals = [
                        {name: 'Vanilla Shake', price: '3.99'},
                        {name: 'Chocolate Shake', price: '3.99'},
                        {name: 'Strawberry Shake', price: '3.99'},
                        {name: 'Banana Shake', price: '4.29'},
                        {name: 'Cookie &  Cream Shake', price: '4.99'},
                        {name: 'Peanut Butter Shake', price: '4.99'},
                        {name: 'Mint Chocolate Shake', price: '4.99'},
                        {name: 'Blueberry Shake', price: '4.99'}
                    ]

    return (

        <>
            <div className="mealsContainer">

                <div className="mealsTitle">Meals</div>

                <div className="mealsList">

                    {meals.map((meal, index) =>
                    
                        <div className="mealsProduct" key={`meal-${index}`}>
                            <div className="productName">{meal.name}</div>
                            <div className="productPrice">{meal.price}</div>
                        </div>

                    )}
                </div>
            </div>
        </>

    )
}

export default Meals