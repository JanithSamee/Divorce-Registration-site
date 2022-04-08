import React from "react";
import FeaturesSection from "./Components/FeaturesSection/FeaturesSection";
import FeesSection from "./Components/FeesSection/FeesSection";
import Banner from "./Components/Banner/Banner";
import Form from "./Components/Form/Form";
import DivorceWitnessSection from "./Components/DivorceWitnessSection/DivorceWitnessSection";
import HowtoUse from "./Components/HowtoUse/HowtoUse";
// import MyCardSection from "./Components/MyCard/MyCardSection";
// import icon from "../src/assets/icon1.svg";

function App() {
	return (
		<div>
			<FeaturesSection></FeaturesSection>
			{/* <MyCardSection /> */}
			<FeesSection />
			<Banner></Banner>
			<DivorceWitnessSection></DivorceWitnessSection>
			<Banner></Banner>
			<HowtoUse></HowtoUse>
			<Banner></Banner>
			<Form></Form>
		</div>
	);
}

export default App;
