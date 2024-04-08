import useProducts from "../hooks/useProducts"

function Drinks() {

    const drinks = [
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
        productSelected = drinks.find(elem => elem.name === imagePreview)
    }
            
    if(productOrder !== null) {
        productOrdered = drinks.find(elem => elem.name === productOrder)
    }
            
    return (

        <>
        <div className="lousMenu">
            <div className="drinksContainer">

                <div className="drinksTitle">Softs</div>

                <div className="drinksList">
                    
                    {drinks.map((drink, id) =>
                        <div className="selectProduct" key={`Drinks-${id}`} onClick={() => handleOrder('drinksSelected', drink.name)} onMouseOver={() => handleMouseOver(drink.name)} onMouseOut={handleMouseOut}>
                            <div className="productName">
                                <div>{drink.name}</div>
                                {drinksSelected.find(elem => elem.name === drink.name) && 
                                    <div title="This soft has already been added !" className="alreadySelected alreadySelected--Blue">
                                        {drinksSelected.find(elem => elem.name === drink.name).quantity}
                                    </div>
                                }
                            </div>
                            <div className="productPrice">{drink.price} $</div>
                        </div>
                    )}                    
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