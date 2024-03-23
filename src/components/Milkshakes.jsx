function MilkShakes() {

    const milkshakes = [
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
            <div className="milkshakesContainer">

                <div className="milkshakesTitle">Milk-shakes</div>

                <div className="milkshakesList">

                    {milkshakes.map((milkshake, index) =>
                    
                        <div className="milkshakeProduct" key={`milkshake-${index}`}>
                            <div className="productName">{milkshake.name}</div>
                            <div className="productPrice">{milkshake.price}</div>
                        </div>

                    )}
                </div>
            </div>
        </>

    )
}

export default MilkShakes