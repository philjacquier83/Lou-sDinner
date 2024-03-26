import useProducts from "../hooks/useProducts"

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

    const { imagePreview, isContainerVisible, productOrder, orderQuantity, drinksSelected, 
                        setProductOrder, setOrderQuantity, setDrinksSelected, setTotalBill,
                        handleMouseOver, handleMouseOut, handleOrder,  handleCloseOrder, handleQuantity, handleQuantityMore, handleQuantityLess } = useProducts()
            
    const handleDrinksSelection = (productName, productQuantity, productSubTotal) => {
        if(drinksSelected.find(elem => elem.name === productName)) {
            setTotalBill(prev => Number(prev) - Number(drinksSelected.find(elem => elem.name === productName).productSubTotal))
            const updatedDrinkSelection = drinksSelected.filter(elem => elem.name !== productName)
            setDrinksSelected(updatedDrinkSelection)
        } 
        if(productQuantity > 0) {
            setDrinksSelected(prev => [...prev, {name: productName, quantity: productQuantity, subTotal: productSubTotal}])
            setProductOrder(null)
            setOrderQuantity(1)
            setTotalBill(prev => Number(prev) + Number(productSubTotal))
        }
    }
            
    let productSelected = null
    let productOrdered = null
            
    if(isContainerVisible) {
        productSelected = drinks[0].drinkList.find(elem => elem.name === imagePreview) || drinks[1].drinkList.find(elem => elem.name === imagePreview)
    }
            
    if(productOrder !== null) {
        productOrdered = drinks[0].drinkList.find(elem => elem.name === productOrder) || drinks[1].drinkList.find(elem => elem.name === productOrder)
    }
            
    return (

        <>
        <div className="lousMenu">
            <div className="drinksContainer">

                <div className="drinksTitle">Drinks</div>

                <div className="drinksList">
                    
                    <div className="drinksSubList">
                        {drinks.map((sortOfDrink, index) =>
                            <div key={`Drink-${sortOfDrink}-${index}`} className="drinksCategory">
                                <div className="subCategory" key={`Category-${index}`}>{sortOfDrink.drinkCategory}</div>
                                
                                {sortOfDrink.drinkList.map((drink, id) =>
                                    <div className="selectProduct" key={`${sortOfDrink.drinkCategory}-${id}`} onClick={() => handleOrder(drink.name)}>
                                        <div className="productName" onMouseOver={() => handleMouseOver(drink.name)} onMouseOut={handleMouseOut}>
                                            {drink.name}
                                            {drinksSelected.find(elem => elem.name === drink.name) && 
                                                <span title="This meal has already been added !" className="alreadySelected">
                                                    {drinksSelected.find(elem => elem.name === drink.name).quantity}
                                                </span>
                                            }
                                        </div>
                                        <div className="productPrice">{drink.price} $</div>
                                    </div>
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
                        <button className={`less ${orderQuantity === 0 && 'forbiddenAction'}`} onClick={orderQuantity > 0 ? handleQuantityLess : ''}>-</button>
                        <button className="quantity">{orderQuantity}</button>
                        <button className="more" onClick={handleQuantityMore}>+</button>
                    </div>
                    {orderQuantity > 0 && <div onClick={handleQuantity}>Clear</div> }
                    <div className="orderPrice">Sub-Total : {orderQuantity === 0 ? '0.00' : (Number(orderQuantity) * Number(productOrdered.price)).toFixed(2)} $</div>
                    <div className="add">
                        <button onClick={() => handleDrinksSelection(productOrdered.name, orderQuantity, (Number(orderQuantity) * Number(productOrdered.price)).toFixed(2))}>Add</button>
                    </div>                        
                </div>
            </div>
            </>
            }
        </div>
        }
        </>

    )
}

export default Drinks