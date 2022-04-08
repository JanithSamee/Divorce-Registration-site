import React from "react";
import FeesSection from "./Components/FeesSection/FeesSection";
import Banner from "./Components/Banner/Banner";
import Form from "./Components/Form/Form";
import DivorceWitnessSection from "./Components/DivorceWitnessSection/DivorceWitnessSection";
import HowtoUse from "./Components/Form/HowtoUse/HowtoUse";

function App() {
	return (
		<div>
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
