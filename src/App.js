import React from "react";
import FeaturesSection from "./Components/FeaturesSection/FeaturesSection";
import FeesSection from "./Components/FeesSection/FeesSection";
import Banner from "./Components/Banner/Banner";
import Form from "./Components/Form/Form";
import DivorceWitnessSection from "./Components/DivorceWitnessSection/DivorceWitnessSection";
import HowtoUse from "./Components/HowtoUse/HowtoUse";
import FirstPage from "./Components/FirstSection/FirstPage";
import SecondPage from "./Components/SecondSection/SecondPage";
import Footer from "./Components/Footer/Footer";

import "./fonts/Hiragino Mincho ProN W6.otf";
import "./fonts/Hiragino Kaku Gothic ProN W3.otf";
import "../src/App.css";
// import MyCardSection from "./Components/MyCard/MyCardSection";
// import icon from "../src/assets/icon1.svg";

function App() {
	return (
		<div>
			<FirstPage />
			<SecondPage />
			<Banner></Banner>
			<FeaturesSection></FeaturesSection>
			{/* <MyCardSection /> */}
			<FeesSection />
			<Banner></Banner>
			<DivorceWitnessSection></DivorceWitnessSection>
			<Banner></Banner>
			<HowtoUse></HowtoUse>
			<Banner></Banner>
			<Form></Form>
			<Footer />
		</div>
	);
}

export default App;
