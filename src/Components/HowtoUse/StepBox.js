import DownArrowIcon from "../../assets/down-arrow.svg";

function StepBox({ title, content, footer, number, type, footer2, isLast }) {
	return type === "1" ? (
		<div className="step-box">
			<div className="step-circle">
				<h4>STEP</h4>
				<h3>{number}</h3>
			</div>
			<h1 className="step-heading">{title}</h1>
			<p className="step-content">
				<span>
					<a href="/" style={{ marginRight: "5px", color: "#3594AA" }}>
						お申し込みフォーム
					</a>
				</span>
				{content}
			</p>
			<p className="step-footer">{footer}</p>
			<p className="step-footer">{footer2}</p>
			<div className="arrow">
				<img src={DownArrowIcon} alt="down-arrow" width={"64px"} style={{ marginTop: "16px" }}></img>
			</div>
		</div>
	) : isLast ? (
		<div className="step-box">
			<div className="step-circle">
				<h4>STEP</h4>
				<h3>{number}</h3>
			</div>
			<h1 className="step-heading">{title}</h1>
			<p className="step-content">{content}</p>
			<p className="step-footer">{footer}</p>
		</div>
	) : (
		<div className="step-box">
			<div className="step-circle">
				<h4>STEP</h4>
				<h3>{number}</h3>
			</div>
			<h1 className="step-heading">{title}</h1>
			<p className="step-content">{content}</p>
			<p className="step-footer">{footer}</p>
			<div className="arrow">
				<img src={DownArrowIcon} alt="down-arrow" width={"64px"} style={{ marginTop: "16px" }}></img>
			</div>
		</div>
	);
}

export default StepBox;
