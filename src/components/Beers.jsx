import useProducts from "../hooks/useProducts"

function Beers() {

    const beers = [
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

    const { imagePreview, isContainerVisible, productOrder, orderQuantity, beersSelected, 
                        setProductOrder, setOrderQuantity, setBeersSelected, setTotalBill,
                        handleMouseOver, handleMouseOut, handleOrder,  handleCloseOrder, handleQuantity, handleQuantityMore, handleQuantityLess } = useProducts()
            
    const handleBeersSelection = (productName, productQuantity, productSubTotal) => {
        if(beersSelected.find(elem => elem.name === productName)) {
            setTotalBill(prev => Number(prev) - Number(beersSelected.find(elem => elem.name === productName).productSubTotal))
            const updatedBeerSelection = beersSelected.filter(elem => elem.name !== productName)
            setBeersSelected(updatedBeerSelection)
        } 
        if(productQuantity > 0) {
            setBeersSelected(prev => [...prev, {name: productName, quantity: productQuantity, subTotal: productSubTotal}])
            setProductOrder(null)
            setOrderQuantity(1)
            setTotalBill(prev => Number(prev) + Number(productSubTotal))
        }
    }
            
    let productSelected = null
    let productOrdered = null
            
    if(isContainerVisible) {
        productSelected = beers.find(elem => elem.name === imagePreview)
    }
            
    if(productOrder !== null) {
        productOrdered = beers.find(elem => elem.name === productOrder)
    }
            
    return (

        <>
        <div className="lousMenu">

            <div className={`productContainer ${!isContainerVisible && 'productContainer--hidden'} productContainer--Beers`}>
                {productSelected &&
                    <div className="productImg">
                        <img id="imagePreview" src={`/src/assets/${productSelected.image}`} />
                    </div>
                }
            </div>

            <div className="beersContainer">

                <div className="beersTitle">Beers</div>

                <div className="beersList">

                    {beers.map((beer, index) =>

                        <div className="selectProduct" key={`beer-${index}`} onClick={() => handleOrder('beersSelected', beer.name)} onMouseOver={() => handleMouseOver(beer.name)} onMouseOut={handleMouseOut}>
                            <div className="productName">
                                <div>{beer.name}</div>
                                {beersSelected.find(elem => elem.name === beer.name) && 
                                    <div title="This meal has already been added !" className="alreadySelected">
                                        {beersSelected.find(elem => elem.name === beer.name).quantity}
                                    </div>
                                }
                            </div>
                            <div className="productPrice">{beer.price} $</div>
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
                        <button onClick={() => handleBeersSelection(productOrdered.name, orderQuantity, (Number(orderQuantity) * Number(productOrdered.price)).toFixed(2))}>Add</button>
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

export default Beers