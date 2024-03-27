import useProducts from "../hooks/useProducts"

function MilkShakes() {

    const milkshakes = [
                        {name: 'Vanilla Shake', price: '3.99', image: 'Vanilla Milkshake.jpeg'},
                        {name: 'Chocolate Shake', price: '3.99', image: 'Chocolate Milkshake.jpeg'},
                        {name: 'Strawberry Shake', price: '3.99', image: 'Strawberry Milkshake.jpeg'},
                        {name: 'Banana Shake', price: '4.29', image: 'Banana Milkshake.jpeg'},
                        {name: 'Cookie & Cream Shake', price: '4.99', image: 'Cookie And Cream.jpeg'},
                        {name: 'Peanut Butter Shake', price: '4.99', image: 'Peanut Butter Milkshake.jpeg'},
                        {name: 'Mint Chocolate Shake', price: '4.99', image: 'Mint Chocolate Milkshake.jpeg'},
                        {name: 'Blueberry Shake', price: '4.99', image: 'Blueberry Milkshake.jpeg'}
                    ]

    const { imagePreview, isContainerVisible, productOrder, orderQuantity, milkshakesSelected, 
            setProductOrder, setOrderQuantity, setMilkshakesSelected, setTotalBill,
            handleMouseOver, handleMouseOut, handleOrder,  handleCloseOrder, handleQuantity, handleQuantityMore, handleQuantityLess } = useProducts()

    const handleMilkshakesSelection = (productName, productQuantity, productSubTotal) => {
        if(milkshakesSelected.find(elem => elem.name === productName)) {
            setTotalBill(prev => Number(prev) - Number(milkshakesSelected.find(elem => elem.name === productName).productSubTotal))
            const updatedMilkshakeSelection = milkshakesSelected.filter(elem => elem.name !== productName)
            setMilkshakesSelected(updatedMilkshakeSelection)
        } 
        if(productQuantity > 0) {
            setMilkshakesSelected(prev => [...prev, {name: productName, quantity: productQuantity, subTotal: productSubTotal}])
            setProductOrder(null)
            setOrderQuantity(1)
            setTotalBill(prev => Number(prev) + Number(productSubTotal))
        }
    }

    let productSelected = null
    let productOrdered = null

    if(isContainerVisible) {
        productSelected = milkshakes.find(elem => elem.name === imagePreview)
    }

    if(productOrder !== null) {
        productOrdered = milkshakes.find(elem => elem.name === productOrder)
    }

    return (

        <>
        <div className="lousMenu">
            <div className={`productContainer ${!isContainerVisible && 'productContainer--hidden'}`}>
                {productSelected &&
                    <div className="productImg">
                        <img id="imagePreview" src={`/src/assets/${productSelected.image}`} />
                    </div>
                }
            </div>
            
            <div className="milkshakesContainer">

                <div className="milkshakesTitle">Milk-shakes</div>

                <div className="milkshakesList">

                    {milkshakes.map((milkshake, index) =>
                    
                        <div className="selectProduct" key={`milkshake-${index}`} onClick={() => handleOrder('milkshakesSelected', milkshake.name)} onMouseOver={() => handleMouseOver(milkshake.name)} onMouseOut={handleMouseOut}>
                            <div className="productName">
                                {milkshake.name}
                                {milkshakesSelected.find(elem => elem.name === milkshake.name) && 
                                    <span title="This meal has already been added !" className="alreadySelected">
                                        x {milkshakesSelected.find(elem => elem.name === milkshake.name).quantity}
                                    </span>
                                }
                            </div>
                            <div className="productPrice">{milkshake.price} $</div>
                        </div>

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
                        <button className={`less ${orderQuantity === 0 && 'forbiddenAction'}`} onClick={orderQuantity > 0 ? handleQuantityLess : ''}>-</button>
                        <button className="quantity">{orderQuantity}</button>
                        <button className="more" onClick={handleQuantityMore}>+</button>
                    </div>
                    {orderQuantity > 0 && <div onClick={handleQuantity}>Clear</div> }
                    <div className="orderPrice">Sub-Total : {orderQuantity === 0 ? '0.00' : (Number(orderQuantity) * Number(productOrdered.price)).toFixed(2)} $</div>
                    <div className="add">
                        <button onClick={() => handleMilkshakesSelection(productOrdered.name, orderQuantity, (Number(orderQuantity) * Number(productOrdered.price)).toFixed(2))}>Add</button>
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

export default MilkShakes