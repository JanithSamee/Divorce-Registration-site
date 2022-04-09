import { useState } from "react";
import SubTitle from "../SubTitle/SubTitle";
import "../Form/form-style.css";

function Form() {
	const [file1, setfile1] = useState("no file selected");
	const [file2, setfile2] = useState("no file selected");
	const handleFile1 = (e) => {
		setfile1(e.target.value);
	};
	const handleFile2 = (e) => {
		setfile2(e.target.value);
	};
	return (
		<div className="container-green">
			<center>
				{/* <h1 className="main-heading">Application</h1>
				<div className="line"></div> */}
				<SubTitle title={"Application"}></SubTitle>
				<h2 className="subheading-1">Please fill in the required items and apply.</h2>
				<div className="prec-box">
					<h3 className="subheading-2">Precautions</h3>
					<p className="prec-para">
						An automatic reply email will be sent to the email address you entered immediately after
						applying. If you do not receive it, the email address you entered may be incorrect, or it may be
						due to the junk email settings, so please check the following.
					</p>
					<ul>
						<li>Check your junk mail folder</li>
						<li>Change the setting of "Receive by domain" so that you can receive emails from "●● @ ●●"</li>
						<li>
							Please contact us by stating your phone number and not receiving the email from "Inquiry".
						</li>
					</ul>
				</div>
				<div className="form-container">
					<form className="customform">
						<div className="form-sec-1">
							<label>
								<p className="label-heading">
									Name
									<span className="req-badge">Required</span>
								</p>
							</label>

							<input type="text" id="name" style={{ width: "250px" }}></input>
						</div>
						<div className="form-sec-2">
							<label>
								<p className="label-heading">
									Address
									<span className="req-badge">Required</span>
								</p>
							</label>

							<p
								style={{
									marginBottom: "2.5em",
									fontSize: "13px",
								}}
							>
								* If you have a request for a different return address or general delivery, please enter
								it in the remarks column.
							</p>
							<label>
								<p className="text-box-heading">Post code</p>
							</label>

							<input type="text" id="post_code" placeholder="Post code"></input>
							<br></br>
							<label>
								<p className="text-box-heading">County</p>
							</label>

							<input type="text" id="country"></input>

							<label>
								<p className="text-box-heading">City</p>
							</label>

							<input type="text" id="City"></input>

							<label>
								<p className="text-box-heading">Condominium name</p>
							</label>

							<input type="text" id="Condominium name"></input>
						</div>
						<div className="form-sec-3">
							<label>
								<p className="label-heading">
									E-mail address
									<span className="req-badge">Required</span>
								</p>
							</label>

							<input type="email" id="email" style={{ width: "250px" }}></input>
						</div>
						<div className="form-sec-4">
							<label>
								<p className="label-heading">
									Application type
									<span className="req-badge">Required</span>
								</p>
							</label>

							<input type="radio" id="Acting_person " style={{ boxShadow: "none" }}></input>
							<label className="check-box-heading">Acting Person</label>
							<br></br>
							<input type="radio" id="Acting_people" style={{ boxShadow: "none" }}></input>
							<label className="check-box-heading">Acting 2 people </label>
						</div>
						<div className="form-sec-5">
							<label>
								<p className="label-heading">
									About divorce
									<span className="req-badge">Required</span>
								</p>
							</label>

							<input type="checkbox" id="type_1" style={{ boxShadow: "none" }}></input>
							<label className="check-box-heading">Both couples have agreed to divorce or marry.</label>
							<br></br>

							<input type="checkbox" id="type_2" style={{ boxShadow: "none" }}></input>
							<label className="check-box-heading">
								There is no unauthorized writing or other illegal activity in the divorce notification{" "}
							</label>
							<br></br>
							<input type="checkbox" id="type_3" style={{ boxShadow: "none" }}></input>
							<label className="check-box-heading">We will not do anything that causes trouble.</label>
							<br></br>
							<p>* If you do not check all, you will not be able to send.</p>
							<p style={{ color: "red" }}>
								{" "}
								* When mailing a divorce report (marriage report), it cannot be accepted unless the
								husband and wife have their own signatures and seals.
							</p>
						</div>
						<div className="form-sec-5">
							<label>
								<p className="label-heading">
									About identity verification documents
									<span className="req-badge">Required</span>
								</p>
							</label>

							<input type="checkbox" id="doc_1" style={{ boxShadow: "none" }}></input>
							<label className="check-box-heading">
								Copy the identity verification document and send it directly by mail together with the
								divorce notification (marriage registration)
							</label>
							<br></br>
							<input type="checkbox" id="doc_2" style={{ boxShadow: "none" }}></input>
							<label className="check-box-heading">
								Send identity verification documents as an image file
							</label>

							<br></br>
							<p>
								Below, if you have checked [Send identity verification documents as an image file],
								please select a file.
							</p>
						</div>
						<div className="form-sec-6">
							<div>
								<input
									className="inline-input"
									type="file"
									id="file1"
									onChange={handleFile1}
									hidden
								></input>
								<label htmlFor="file1" className="file-select">
									Select a file
								</label>
								<p style={{ textAlign: "center", marginTop: "8px" }}>{file1}</p>
							</div>

							<div>
								<input
									className="inline-input"
									type="file"
									id="file2"
									onChange={handleFile2}
									hidden
								></input>
								<label htmlFor="file2" className="file-select">
									Select a file
								</label>
								<p style={{ textAlign: "center", marginTop: "8px" }}>{file2}</p>
							</div>
						</div>
						<div>
							<p style={{ color: "red" }}>
								* Identity verification documents need only be the requester (either husband or wife).
							</p>{" "}
							<p>
								* Please prepare one identity verification document such as a driver's license, health
								insurance card, national pension certificate, passport, resident's card, etc. that can
								confirm your name and address. If you have a driver's license and the address is changed
								and the information is written on the back side, please send two sheets, the front side
								and the back side. <br></br>* The image can be taken with a smartphone, etc. If you
								would like to send the image later, you can attach the image to "●● @ ●●" and send it.
							</p>
						</div>
						<div className="form-sec-8">
							<label>
								<p className="label-heading">
									<span className="any-badge">Any</span>
									Comments
								</p>
							</label>

							<textarea rows={10} cols={42} style={{ border: "none" }} className="text-area"></textarea>
							<br></br>
							<div className="privacy">
								<input type="checkbox" style={{ boxShadow: "none" }}></input>
								<label>
									<span style={{ marginLeft: "8px" }}>Confirm and agree to the contents of</span>
									<a
										href="/"
										style={{
											marginLeft: "8px",
											color: "#3594AA",
										}}
									>
										Privacy Policy
									</a>
								</label>
							</div>
						</div>
						<button>Send</button>
					</form>
				</div>
			</center>
		</div>
	);
}

export default Form;
