import React, { useState } from "react";
import "./banner-styles.css";
import LaptopIcon from "../../assets/laptop-icon.svg";
import ChatBubbleWhiteIcon from "../../assets/chat-bubble-white.svg";
import ChatBubbleYellowIcon from "../../assets/chat-bubble-yellow.svg";

function Banner() {
	const [icon, seticon] = useState(ChatBubbleWhiteIcon);
	return (
		<div className="banner-container">
			<div className="banner-whitebox">
				For those who want to find a witness of divorce report with peace of mind.
			</div>
			<h2>Divorce Notification Witness Agency Service</h2>
			<div className="banner-transBox">
				<div>No Face-to-Face Required</div>
				<div>Only By Email And Written Mail</div>
				<div>Nationwide Support in Japan</div>
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
				Click here to Apply
				<div className="banner-button-sufix"></div>
			</div>
		</div>
	);
}

export default Banner;
