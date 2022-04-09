import React from "react";
import VisaIcon from "../../assets/visa.svg";
import MasterIcon from "../../assets/master.svg";
import AEIcon from "../../assets/americanexpress.svg";

function PaymentMethods() {
	return (
		<div className="payment-mothods-container">
			<h2>お支払い方法</h2>
			<h5>各種クレジットカードがご利用になれます。</h5>
			<div>
				<img src={VisaIcon} alt="payment-visa" width={"100px"}></img>
				<img src={MasterIcon} alt="payment-visa" width={"100px"} height="72px"></img>
				<img src={AEIcon} alt="payment-visa" width={"100px"}></img>
			</div>
		</div>
	);
}

export default PaymentMethods;
