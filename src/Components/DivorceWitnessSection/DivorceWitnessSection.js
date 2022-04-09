import React from "react";
import SubTitle from "../SubTitle/SubTitle";
import ConditionsBox from "./ConditionsBox";
import "./divorcesection-styles.css";
import LawDescriptionBox from "./LawDescriptionBox";
import secondPageBottomImg from "../../assets/グループ 12.svg";

function DivorceWitnessSection() {
	return (
		<div className="divorcesection-container" id="divorcewitness-section">
			<SubTitle title={"離婚届の証人とは？"}></SubTitle>
			<h3>
				協議離婚（夫婦で話し合い離婚を決めること）をする場合には、離婚届に証人2人署名捺印が必要であると民法（第739条2項、第764条、第765条）に記されています。
			</h3>
			<LawDescriptionBox
				lawNo={"739"}
				lawDescription="婚姻は、戸籍法（昭和22年法律第224号）の定めるところにより届け出ることによって、その効力を生ずる。 ２　前項の届出は、当事者双方及び成年の証人二人以上が署名した書面で、又はこれらの者から口頭で、しなければならない。"
			></LawDescriptionBox>
			<LawDescriptionBox
				lawNo={"764"}
				lawDescription="第738条、第739条及び第747条の規定は、協議上の離婚について準用する。"
			></LawDescriptionBox>
			<LawDescriptionBox
				lawNo={"765"}
				lawDescription="離婚の届出は、その離婚が前条において準用する第739条第2項の規定及び第819条第1項の規定その他の法令の規定に違反しないことを認めた後でなければ、受理することができない。"
			></LawDescriptionBox>
			<h3 style={{ marginTop: "0px" }}>
				※当事者同士の協議で離婚がまとまらず裁判所が間に入る調停離婚、審判離婚、裁判離婚の場合は、離婚届の証人は必要ありません。
			</h3>
			<ConditionsBox></ConditionsBox>
			<h3>
				しかし、中には<span>証人が見つからない方や家族や知人に離婚したことを知ら</span>
				れたくないという方もいらっしゃると思います。
			</h3>
			<h3>全く知らない赤の他人に依頼することも可能ですが、個人情報の取り扱いなどの問題が発生します。</h3>
			{/* <div className="divorcesection-finaltext">
				<div style={{ transform: "rotate(-45deg)" }}></div>
				<h2>Therefore</h2>
				<div style={{ transform: "rotate(45deg)" }}></div>
			</div> */}
			<img src={secondPageBottomImg} alt="sendpage-"></img>
		</div>
	);
}

export default DivorceWitnessSection;
