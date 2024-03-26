import useMeals from "../hooks/useProducts"

function MainHeader() {

    const { mealsBill } = useMeals()
console.log(`Hello = ${mealsBill}`)
    return(

        <>
            <div className="headerContainer">
                <div className="companyInfos">
                    <div className="companyName">Lou&apos;s diner</div>
                    
                    <div className="companyContact">
                        Lou&apos;s Diner<br />
                        456 Desert Avenue<br />
                        Henderson, NV<br />
                        © 1982 - All rights reserved
                    </div>
                    
                    
                    {/*  ****  à modifier pour récupérer infos via localstorage ***

                    <div className="customerBill">
                        <div className="billTitle"><FontAwesomeIcon icon={faUtensils} className="iconBill" /> Your Bill : <span className="totalBill"></span> $</div>
                            <section className="products">

                            </section>
                    </div>
                    */}
                </div>

                <div className="colors80"></div>
            </div>
        </>

    )
}

export default MainHeader