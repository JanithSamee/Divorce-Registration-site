import React from "react";
import FeesSection from "./Components/FeesSection/FeesSection";
import Banner from "./Components/Banner/Banner";
import Form from "./Components/Form/Form";
import DivorceWitnessSection from "./Components/DivorceWitnessSection/DivorceWitnessSection";

function App() {
	return (
		<div>
			<FeesSection />
			<Banner></Banner>
			<DivorceWitnessSection></DivorceWitnessSection>
			<Form></Form>
		</div>
	);
}

export default App;
