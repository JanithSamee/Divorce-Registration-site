import React from "react";
import FeatureCard from "./FeatureCard";
import "./features-styles.css";
import FToFIcon from "../../assets/ftf-icon.svg";
import YenCoinIcon from "../../assets/yen-coin-icon.svg";
import LaptopDownIcon from "../../assets/laptop-download-icon.svg";
import JapanIcon from "../../assets/japan-icon.svg";

function FeaturesSection() {
	return (
		<div className="features-container" id="feature-section">
			<h2>●サイト名●の</h2>
			<h3 className="feature-topic-text">
				<span>4 </span>つの特徴
			</h3>
			<div className="featurecards-container">
				<FeatureCard
					number={"01"}
					title={"対面不要"}
					body={
						"メールと書面の郵送のみで手続きが完結するため、対面でのやり取りは不要です。そのためお忙しい方やプライバシーを気にする方も安心してご利用できます。"
					}
					imagePath={FToFIcon}
				></FeatureCard>
				<FeatureCard
					number={"02"}
					title={"日本全国対応"}
					body={
						"対面でのやり取りが不要なため日本全国の方々のご依頼に対応することが可能です。証人の署名捺印がされた離婚届は日本郵便のスマートレターでお客様へ返送致します。"
					}
					imagePath={JapanIcon}
				></FeatureCard>
			</div>
			<div className="featurecards-container">
				<FeatureCard
					number={"03"}
					title={"簡単手続き"}
					body={
						"離婚届証人代行キットのダウンロードやお支払い方法の多様化など、徹底的に無駄を排除した手続きフローによりお客様が負担を感じずに手続きを完了することが可能です。"
					}
					imagePath={LaptopDownIcon}
				></FeatureCard>
				<FeatureCard
					number={"04"}
					title={"シンプルな料金設定"}
					body={
						"費用は料金表に記載された金額のみになります。弊社お客す。弊社お客様へ離様へ離婚届を返送する際のスマートレター代：180円も金額に含まれています。"
					}
					imagePath={YenCoinIcon}
				></FeatureCard>
			</div>
		</div>
	);
}

export default FeaturesSection;
