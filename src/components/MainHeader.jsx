import { faUtensils } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function MainHeader() {

    return(

        <>
            <div className="headerContainer">
                <div className="companyInfos">
                    <div className="companyName">Lou&apos;s diner</div>
                    {/*
                    <div className="companyContact">
                        Lou&apos;s Diner<br />
                        456 Desert Avenue<br />
                        Henderson, NV<br />
                        © 1982 - All rights reserved
                    </div>
                    */}
                    <div className="customerBill">
                        <div className="billTitle"><FontAwesomeIcon icon={faUtensils} className="iconBill" /> Your Bill : 0.00 $</div>
                    </div>
                </div>

                <div className="colors80"></div>
            </div>
        </>

    )
}

export default MainHeader