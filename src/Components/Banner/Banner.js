import React, { useState, useEffect } from "react";
import "./banner-styles.css";
import LaptopIcon from "../../assets/laptop-icon.svg";
import ChatBubbleWhiteIcon from "../../assets/chat-bubble-white.svg";
import ChatBubbleYellowIcon from "../../assets/chat-bubble-yellow.svg";

import Aos from "aos";
import "aos/dist/aos.css";

function Banner() {
	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);

	const [icon, seticon] = useState(ChatBubbleWhiteIcon);
	return (
		<div data-aos="fade-up" className="banner-container">
			<div className="banner-whitebox">安心して離婚届の証人を見つけたい方に</div>
			<h2>離婚届 証人代行サービス</h2>
			<div className="banner-transBox">
				<div>対面不要</div>
				<div>メールと書面の郵送のみで完結</div>
				<div>日本全国対応</div>
			</div>
			<div
				className="banner-button"
				onMouseOver={() => {
					seticon(ChatBubbleYellowIcon);
				}}
				onMouseOut={() => {
					seticon(ChatBubbleWhiteIcon);
				}}
			>
				<div className="banner-button-icons">
					<img src={icon} alt="Chat buble Icon" style={{ marginTop: "-16px" }} />
					<img src={LaptopIcon} alt="Laptop Icon" />
				</div>
				お申し込みはこちら
				<div className="banner-button-sufix"></div>
			</div>
		</div>
	);
}

export default Banner;
