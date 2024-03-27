import { useState } from "react"

const useProducts = () => {
    const [ imagePreview, setImagePreview ] = useState('')
    const [ isContainerVisible, setContainerVisible ] = useState(false)
    const [ productOrder, setProductOrder ] = useState(null)
    const [ orderQuantity, setOrderQuantity ] = useState(1)
    const [ milkshakesSelected, setMilkshakesSelected ] = useState([])
    const [ drinksSelected, setDrinksSelected ] = useState([])
    const [ beersSelected, setBeersSelected ] = useState([])
    const [ mealsSelected, setMealsSelected ] = useState([])
    const [ dessertsSelected, setDessertsSelected ] = useState([])
    const [ totalBill, setTotalBill ] = useState(0)

    
console.log(totalBill)
    const handleMouseOver = (imageName) => {
        setContainerVisible(true)
        setImagePreview(imageName)
    }

    const handleMouseOut = () => {
        setContainerVisible(false)
        setImagePreview('')
    }

    const handleOrder = (category, product) => {
        setProductOrder(product)
        setOrderQuantity(eval(category).find(elem => elem.name === product) ? eval(category).find(elem => elem.name === product).quantity : 1)
    }

    const handleCloseOrder = () => {
        setProductOrder(null)
        setOrderQuantity(1)
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
                
    return { imagePreview, isContainerVisible, productOrder, orderQuantity, milkshakesSelected, drinksSelected, beersSelected, mealsSelected, dessertsSelected, totalBill, 
            setImagePreview, setContainerVisible, setProductOrder, setOrderQuantity, setMilkshakesSelected, setDrinksSelected, setBeersSelected, setMealsSelected, setDessertsSelected, setTotalBill,
            handleMouseOver, handleMouseOut, handleOrder, handleCloseOrder, handleQuantity, handleQuantityMore, handleQuantityLess }
}

export default useProducts