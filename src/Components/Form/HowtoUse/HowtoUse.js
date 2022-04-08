import SubTitle from "../../SubTitle/SubTitle";
import "./how-to-use-style.css";
import StepBox from "./StepBox";

function HowtoUse() {
	return (
		<div className="how-to-use">
			<center>
				<div className="title-container">
					<SubTitle title="How to use" />
				</div>
				<div className="box-container">
					<StepBox
						content="after payment is completed, please download and print out the necessary documents for the witness service of the divorce notification from the link provided in the automatic reply email and fill in the information. after filling in the information, please check whether there are any deficiencies in the contents and mail the necessary documents to the following address. "
						title="Application and payment"
						footer="address: 1"
						number="01"
						type="1"
						footer2="adddress:2"
					></StepBox>
				</div>
				<div className="box-container">
					<StepBox
						content="after payment is completed, please download and print out the necessary documents for the witness service of the divorce notification from the link provided in the automatic reply email and fill in the information. after filling in the information, please check whether there are any deficiencies in the contents and mail the necessary documents to the following address. "
						title="Filling in and mailing required documents"
						footer="address: 1"
						number="02"
						type="2"
					></StepBox>
				</div>
				<div className="box-container">
					<StepBox
						content="after payment is completed, please download and print out the necessary documents for the witness service of the divorce notification from the link provided in the automatic reply email and fill in the information. after filling in the information, please check whether there are any deficiencies in the contents and mail the necessary documents to the following address. "
						title="Receipt of divorce notification after acting witness"
						number="03"
						type="2"
						isLast={true}
					></StepBox>
				</div>
			</center>
		</div>
	);
}

export default HowtoUse;
