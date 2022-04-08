import React from "react";
import FeaturesSection from "./Components/FeaturesSection/FeaturesSection";
import FeesSection from "./Components/FeesSection/FeesSection";
import Banner from "./Components/Banner/Banner";
import Form from "./Components/Form/Form";
import DivorceWitnessSection from "./Components/DivorceWitnessSection/DivorceWitnessSection";
import HowtoUse from "./Components/HowtoUse/HowtoUse";
// import MyCard from "./Components/MyCard/MyCard";
// import icon from "../src/assets/icon1.svg";

function App() {
	return (
		<div>
			<FeaturesSection></FeaturesSection>
			<FeesSection />
			<Banner></Banner>
			<DivorceWitnessSection></DivorceWitnessSection>
			<Banner></Banner>
			<HowtoUse></HowtoUse>
			<Banner></Banner>
			<Form></Form>
			{/* <MyCard
        number="01"
        title="対面不要"
        body="メールと書面の郵送のみで手続きが完結するため、対面でのやり取りは不要です。そのためお忙しい方やプライバシーを気にする方も安心してご利用できます。"
        imagePath={icon}
      ></MyCard> */}
		</div>
	);
}

export default App;
