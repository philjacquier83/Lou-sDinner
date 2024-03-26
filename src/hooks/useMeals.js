import { useState } from "react"

const useMeals = () => {
    const [ imagePreview, setImagePreview ] = useState('')
    const [ isContainerVisible, setContainerVisible ] = useState(false)
    const [ productOrder, setProductOrder ] = useState(null)
    const [ orderQuantity, setOrderQuantity ] = useState(0)
    const [ mealsSelected, setMealsSelected ] = useState([])
    const [ mealsBill, setMealsBill ] = useState(0.00)

    
console.log(mealsBill)
    const handleMouseOver = (imageName) => {
        setContainerVisible(true)
        setImagePreview(imageName)
    }

    const handleMouseOut = () => {
        setContainerVisible(false)
        setImagePreview('')
    }

    const handleOrder = (product) => {
        setProductOrder(product)
        setOrderQuantity(mealsSelected.find(elem => elem.name === product) ? mealsSelected.find(elem => elem.name === product).quantity : 0)
    }

    const handleCloseOrder = () => {
        setProductOrder(null)
        setOrderQuantity(0)
    }

    const handleQuantity = () => {
        setOrderQuantity(0)
    }

    const handleQuantityMore = () => {
        setOrderQuantity(prev => prev + 1)
    }

    const handleQuantityLess = () => {
        setOrderQuantity(prev => prev - 1)
    }

    const handleMealsSelection = (productName, productQuantity, productSubTotal) => {
        if(mealsSelected.find(elem => elem.name === productName)) {
            const updatedMealSelection = mealsSelected.filter(elem => elem.name !== productName)
            setMealsSelected(updatedMealSelection)
        } 
        if(productQuantity > 0) {
            setMealsSelected(prev => [...prev, {name: productName, quantity: productQuantity, subTotal: productSubTotal}])
            setProductOrder(null)
            setOrderQuantity(1)
            setMealsBill(prev => Number(prev) + Number(productSubTotal))
        }
    }

    return { imagePreview, isContainerVisible, productOrder, orderQuantity, mealsSelected, mealsBill, 
            handleMouseOver, handleMouseOut, handleOrder, handleCloseOrder, handleQuantity, handleQuantityMore, handleQuantityLess, handleMealsSelection }
}

export default useMeals