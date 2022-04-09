import React from "react";
import DownArrowIcon from "../../assets/down-arrow.svg";

function ConditionsBox() {
	return (
		<div>
			<div className="condition-container">
				<h2>証人の条件</h2>
				<div>
					離婚届の証人については、<span>20歳以上の離婚当事者以外であれば誰でも</span>
					なれることができます。また日本国籍を有する成人だけでなく外国籍の方であっても証人になることができます。そのため両親・兄弟などの家族や友人に証人を頼む方が一般的です。
				</div>
			</div>
			<img src={DownArrowIcon} alt="down-arrow" width={"64px"} style={{ marginTop: "16px" }}></img>
		</div>
	);
}
export default ConditionsBox;
