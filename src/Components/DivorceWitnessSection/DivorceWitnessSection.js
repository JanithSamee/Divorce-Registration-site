import React from "react";
import SubTitle from "../SubTitle/SubTitle";
import ConditionsBox from "./ConditionsBox";
import "./divorcesection-styles.css";
import LawDescriptionBox from "./LawDescriptionBox";
function DivorceWitnessSection() {
	return (
		<div className="divorcesection-container" id="divorcewitness-section">
			<SubTitle title={"What is a Witness for Divorce?"}></SubTitle>
			<h3>
				The civil code (article 739,2, article 764, and 765) states that when a divorce is made by a couple, it
				is necessary to sign and seal two witnesses in the divorce report.
			</h3>
			<LawDescriptionBox
				lawNo={"739"}
				lawDescription="marriage shall become effective by filing a notification pursuant to the provisions of the family registration act (act no. 224 of 1947). the notification set forth in the preceding paragraph shall be filed in writing signed by both parties and two or more adult witnesses, or verbally from these persons."
			></LawDescriptionBox>
			<LawDescriptionBox
				lawNo={"764"}
				lawDescription="The provisions of articles 738, 739 and 747 shall apply mut muta to divorce by consultation."
			></LawDescriptionBox>
			<LawDescriptionBox
				lawNo={"765"}
				lawDescription="a notification of divorce may only be accepted after the divorce has been recognized to not violate the provisions of article 739, paragraph 2, which is used mutily in the preceding article, and the provisions of article 819, paragraph 1, and other laws and regulations."
			></LawDescriptionBox>
			<h3 style={{ marginTop: "0px" }}>
				In the case of conciliated divorce, trial divorce, or court divorce in which divorce is not settled by
				consultation between the parties, a witness for divorce notification is not required.
			</h3>
			<ConditionsBox></ConditionsBox>
			<h3>
				However, <span>some people do not want to know</span> that they have divorced from their families or
				acquaintances, or who cannot find witnesses.
			</h3>
			<h3>
				it is also possible to ask someone else in red who does not know at all, but problems such as the
				handling of personal information occur.
			</h3>
			<div className="divorcesection-finaltext">
				<div style={{ transform: "rotate(-45deg)" }}></div>
				<h2>Therefore</h2>
				<div style={{ transform: "rotate(45deg)" }}></div>
			</div>
		</div>
	);
}

export default DivorceWitnessSection;
