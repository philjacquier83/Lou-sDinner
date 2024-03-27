import useProducts from "../hooks/useProducts"

function Desserts() {

    const desserts = [
                        {name: 'Apple Pie', price: '1.99', image: 'ApplePie.jpeg'},
                        {name: 'Chocolate Brownie', price: '1.99', image: 'ChocolateBrownie.jpeg'},
                        {name: 'Ice Cream Sundae', price: '2.99', image: 'IceCreamSundae.jpeg'},
                        {name: 'Cheesecake', price: '2.99', image: 'Cheesecake.jpeg'},
                        {name: 'Banana Split', price: '2.99', image: 'BananaSplit.jpeg'},
                        {name: 'Lemon Meringue Pie', price: '2.99', image: 'LemonMeringuePie.jpeg'},
                        {name: 'Fruit Crumble', price: '2.99', image: 'FruitCrumble.jpeg'},
                        {name: 'Cherry Pie', price: '3.29', image: 'CherryPie.jpeg'}
                    ]

    const { imagePreview, isContainerVisible, productOrder, orderQuantity, dessertsSelected, 
            setProductOrder, setOrderQuantity, setDessertsSelected, setTotalBill,
            handleMouseOver, handleMouseOut, handleOrder,  handleCloseOrder, handleQuantity, handleQuantityMore, handleQuantityLess } = useProducts()
            
    const handleDessertsSelection = (productName, productQuantity, productSubTotal) => {
        if(dessertsSelected.find(elem => elem.name === productName)) {
            setTotalBill(prev => Number(prev) - Number(dessertsSelected.find(elem => elem.name === productName).productSubTotal))
            const updatedDessertSelection = dessertsSelected.filter(elem => elem.name !== productName)
            setDessertsSelected(updatedDessertSelection)
        } 
        if(productQuantity > 0) {
            setDessertsSelected(prev => [...prev, {name: productName, quantity: productQuantity, subTotal: productSubTotal}])
            setProductOrder(null)
            setOrderQuantity(1)
            setTotalBill(prev => Number(prev) + Number(productSubTotal))
        }
    }
            
    let productSelected = null
    let productOrdered = null
            
    if(isContainerVisible) {
        productSelected = desserts.find(elem => elem.name === imagePreview)
    }
            
    if(productOrder !== null) {
        productOrdered = desserts.find(elem => elem.name === productOrder)
    }
            
    return (

        <>
        <div className="lousMenu lousMenu--Desserts">

            <div className={`productContainer ${!isContainerVisible && 'productContainer--hidden'} productContainer--Desserts`}>
                {productSelected &&
                    <div className="productImg">
                        <img id="imagePreview" src={`/src/assets/${productSelected.image}`} />
                    </div>
                }
            </div>
            
            <div className="dessertsContainer">

                <div className="dessertsTitle">Desserts</div>

                <div className="dessertsList">

                    {desserts.map((dessert, index) =>
                    
                        <div className="selectProduct" key={`dessert-${index}`} onClick={() => handleOrder(dessert.name)}>
                            <div className="productName" onMouseOver={() => handleMouseOver(dessert.name)} onMouseOut={handleMouseOut}>
                                {dessert.name}
                                {dessertsSelected.find(elem => elem.name === dessert.name) && 
                                    <span title="This meal has already been added !" className="alreadySelected">
                                        {dessertsSelected.find(elem => elem.name === dessert.name).quantity}
                                    </span>
                                }
                            </div>
                            <div className="productPrice">{dessert.price} $</div>
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
                        <button onClick={() => handleDessertsSelection(productOrdered.name, orderQuantity, (Number(orderQuantity) * Number(productOrdered.price)).toFixed(2))}>Add</button>
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

export default Desserts