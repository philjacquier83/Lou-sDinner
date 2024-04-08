import useProducts from "../hooks/useProducts"

function Meals() {

    const meals = [
                        {name: 'Hot Dog', price: '5.99', image: 'Hot Dog.jpeg'},
                        {name: 'Club Sandwich', price: '5.99', image: 'Club Sandwich.jpeg'},
                        {name: 'Pancakes', price: '5.99', image: 'Pancakes.webp'},
                        {name: 'Spaghetti Bolognese', price: '9.99', image: 'Spaghetti Bolognese.jpeg'},
                        {name: 'Macaroni & Cheese', price: '9.99', image: 'Macaroni And Cheese.jpeg'},
                        {name: 'Cheeseburger with Fries', price: '9.99', image: 'Cheeseburger And Fries.jpeg'},
                        {name: 'Tuna Melt', price: '9.99', image: 'Tuna Melt.webp'},
                        {name: 'Fried Chicken', price: '10.99', image: 'Fried Chicken.webp'},
                        {name: 'Meatloaf', price: '11.99', image: 'Meatloaf.jpeg'},
                        {name: 'Fish & Chips', price: '11.99', image: 'Fish And Chips.jpeg'}
                    ]

    const { imagePreview, isContainerVisible, productOrder, orderQuantity, mealsSelected, 
            setProductOrder, setOrderQuantity, setMealsSelected, setTotalBill,
            handleMouseOver, handleMouseOut, handleOrder,  handleCloseOrder, handleQuantity, handleQuantityMore, handleQuantityLess } = useProducts()

    const handleMealsSelection = (productName, productQuantity, productSubTotal) => {
        if(mealsSelected.find(elem => elem.name === productName)) {
            setTotalBill(prev => Number(prev) - Number(mealsSelected.find(elem => elem.name === productName).productSubTotal))
            const updatedMealSelection = mealsSelected.filter(elem => elem.name !== productName)
            setMealsSelected(updatedMealSelection)
        } 
        if(productQuantity > 0) {
            setMealsSelected(prev => [...prev, {name: productName, quantity: productQuantity, subTotal: productSubTotal}])
            setProductOrder(null)
            setOrderQuantity(1)
            setTotalBill(prev => Number(prev) + Number(productSubTotal))
        }
    }

    let productSelected = null
    let productOrdered = null

    if(isContainerVisible) {
        productSelected = meals.find(elem => elem.name === imagePreview)
    }

    if(productOrder !== null) {
        productOrdered = meals.find(elem => elem.name === productOrder)
    }
    
    return (

        <>
        <div className="lousMenu lousMenu--Meals">
            
            <div className="mealsContainer">

                <div className="mealsTitle">Meals</div>

                <div className="mealsList">

                    {meals.map((meal, index) =>
                    
                        <div className="selectProduct" key={`meal-${index}`} onClick={() => handleOrder('mealsSelected', meal.name)} onMouseOver={() => handleMouseOver(meal.name)} onMouseOut={handleMouseOut}>
                            <div className="productName">
                                <div>{meal.name}</div>
                                {mealsSelected.find(elem => elem.name === meal.name) && 
                                    <div title="This meal has already been added !" className="alreadySelected">
                                        {mealsSelected.find(elem => elem.name === meal.name).quantity}
                                    </div>
                                }
                            </div>
                            <div className="productPrice">{meal.price} $</div>
                        </div>

                    )}
                </div>
            </div>
            
            <div className={`productContainer ${!isContainerVisible && 'productContainer--hidden'} productContainer--Meals`}>
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
                        <button onClick={() => handleMealsSelection(productOrdered.name, orderQuantity, (Number(orderQuantity) * Number(productOrdered.price)).toFixed(2))}>Add</button>
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

export default Meals