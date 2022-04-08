import React from "react";
import FeatureCard from "./FeatureCard";
import "./features-styles.css";
import FToFIcon from "../../assets/ftf-icon.svg";
import YenCoinIcon from "../../assets/yen-coin-icon.svg";
import LaptopDownIcon from "../../assets/laptop-download-icon.svg";
import JapanIcon from "../../assets/japan-icon.svg";

function FeaturesSection() {
	return (
		<div className="features-container">
			<h2>●Divorce Registration Site●</h2>
			<h3 className="feature-topic-text">
				Our <span>4 </span>Features
			</h3>
			<div className="featurecards-container">
				<FeatureCard
					number={"01"}
					title={"No Face-to-Face"}
					body={
						"Since the procedure is completed only by e-mail and written mail, there is no need for face-to-face communication. therefore, those who are busy and those who are concerned about privacy can use it with confidence."
					}
					imagePath={FToFIcon}
				></FeatureCard>
				<FeatureCard
					number={"02"}
					title={"Nationwide Support"}
					body={
						"Since the procedure is completed only by e-mail and written mail, there is no need for face-to-face communication. therefore, those who are busy and those who are concerned about privacy can use it with confidence."
					}
					imagePath={JapanIcon}
				></FeatureCard>
			</div>
			<div className="featurecards-container">
				<FeatureCard
					number={"03"}
					title={"Easy Procedure"}
					body={
						"Since the procedure is completed only by e-mail and written mail, there is no need for face-to-face communication. therefore, those who are busy and those who are concerned about privacy can use it with confidence."
					}
					imagePath={LaptopDownIcon}
				></FeatureCard>
				<FeatureCard
					number={"04"}
					title={"Simple Pricing"}
					body={
						"Since the procedure is completed only by e-mail and written mail, there is no need for face-to-face communication. therefore, those who are busy and those who are concerned about privacy can use it with confidence."
					}
					imagePath={YenCoinIcon}
				></FeatureCard>
			</div>
		</div>
	);
}

export default FeaturesSection;
