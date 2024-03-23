function Drinks() {

    const drinks = [
                    {
                        softs: [
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
                        beers: [
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

    const softDrinks = drinks.softs.map((softDrink, index) => (
        <div className="drinksProduct" key={`SoftDrink-${index}`} >
            <div className="productName">{(softDrink.name).padEnd(25, '.')}</div>
            <div key={`SoftDrink-${index}`} className="productPrice">{softDrink.price}</div>
        </div>
    ))

    const beerDrinks= drinks.beers.map((beer, index) => (
        <div className="drinksProduct" key={`Beer-${index}`}>
            <div className="productName">{(beer.name).padEnd(25, '.')}</div>
            <div className="productPrice">{beer.price}</div>
        </div>
    ))

    return (

        <>
            <div className="drinksContainer">

                <div className="drinksTitle">Drinks</div>

                <div className="drinksList">
                    
                    <div className="drinksSubList">
                        Softs
                        <div className="softDrinks">
                            {softDrinks}
                        </div>

                    </div>
                    
                    <div className="drinksSubList">
                        Beers
                        <div className="beerDrinks">
                            {beerDrinks}
                        </div>

                    </div>
                    
                </div>
            </div>
        </>

    )
}

export default Drinks