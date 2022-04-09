import { useState } from "react";
import SubTitle from "../SubTitle/SubTitle";
import "../Form/form-style.css";

function Form() {
	const [file1, setfile1] = useState("選択されていません");
	const [file2, setfile2] = useState("選択されていません");
	const handleFile1 = (e) => {
		setfile1(e.target.value);
	};
	const handleFile2 = (e) => {
		setfile2(e.target.value);
	};
	return (
		<div className="container-green" id="application-section">
			<center>
				{/* <h1 className="main-heading">Application</h1>
				<div className="line"></div> */}
				<SubTitle title={"お申し込み"}></SubTitle>
				<h2 className="subheading-1">必要事項をご記入の上、お申し込みください。</h2>
				<div className="prec-box">
					<h3 className="subheading-2">【注意事項】</h3>
					<p className="prec-para">
						お申し込み後すぐにご入力いただいたメールアドレス宛に自動返信メールが送られます。届かない場合は、ご記入のメールアドレスに間違いがあるか、迷惑メール設定が原因の場合がございますので、下記ご確認ください。
					</p>
					<ul>
						<li>迷惑メールフォルダの確認</li>
						<li>「●●@●●」からのメールを受信できるよう「ドメイン指定受信」の設定の変更</li>
						<li>「お問合せ」よりメールが届かない旨と電話番号を記載してご連絡ください</li>
					</ul>
				</div>
				<div className="form-container">
					<form className="customform">
						<div className="form-sec-1">
							<label>
								<p className="label-heading">
									お名前
									<span className="req-badge">必須</span>
								</p>
							</label>

							<input type="text" id="name" style={{ width: "250px" }}></input>
						</div>
						<div className="form-sec-2">
							<label>
								<p className="label-heading">
									ご住所
									<span className="req-badge">必須</span>
								</p>
							</label>

							<p
								style={{
									marginBottom: "2.5em",
									fontSize: "13px",
								}}
							>
								※別の返送先や郵便局留めのご希望がございましたら備考欄にご記入ください。.
							</p>
							<label>
								<p className="text-box-heading">郵便番号</p>
							</label>

							<input type="text" id="post_code" placeholder="住所自動入力"></input>
							<br></br>
							<label>
								<p className="text-box-heading">都道府県</p>
							</label>

							<input type="text" id="country"></input>

							<label>
								<p className="text-box-heading">市区町村番地</p>
							</label>

							<input type="text" id="City"></input>

							<label>
								<p className="text-box-heading">マンション名/ビル名</p>
							</label>

							<input type="text" id="Condominium name"></input>
						</div>
						<div className="form-sec-3">
							<label>
								<p className="label-heading">
									マンション名/ビル名
									<span className="req-badge">必須</span>
								</p>
							</label>

							<input type="email" id="email" style={{ width: "250px" }}></input>
						</div>
						<div className="form-sec-4">
							<label>
								<p className="label-heading">
									お申し込みタイプ
									<span className="req-badge">必須</span>
								</p>
							</label>

							<input type="radio" id="Acting_person " style={{ boxShadow: "none" }}></input>
							<label className="check-box-heading">離婚届・婚姻届 証人代行1名：●,●●●円（税込）</label>
							<br></br>
							<input type="radio" id="Acting_people" style={{ boxShadow: "none" }}></input>
							<label className="check-box-heading">離婚届・婚姻届 証人代行2名：●,●●●円（税込）</label>
						</div>
						<div className="form-sec-5">
							<label>
								<p className="label-heading">
									離婚・婚姻の合意について
									<span className="req-badge">必須</span>
								</p>
							</label>

							<input type="checkbox" id="type_1" style={{ boxShadow: "none" }}></input>
							<label className="check-box-heading">
								夫婦ともに離婚または婚姻することに合意しています。
							</label>
							<br></br>

							<input type="checkbox" id="type_2" style={{ boxShadow: "none" }}></input>
							<label className="check-box-heading">
								離婚届・婚姻届に無断代筆その他の違法行為はありません。
							</label>
							<br></br>
							<input type="checkbox" id="type_3" style={{ boxShadow: "none" }}></input>
							<label className="check-box-heading">トラブルの原因となる行為はいたしません。</label>
							<br></br>
							<p>※全てにチェックを入れなければ送信することはできません</p>
							<p style={{ color: "red" }}>
								{" "}
								※ご本人確認書類は、ご依頼人様（夫・妻のどちらか１名）のみで構いません。
							</p>
						</div>
						<div className="form-sec-5">
							<label>
								<p className="label-heading">
									ご本人確認書類について
									<span className="req-badge">必須</span>
								</p>
							</label>

							<input type="checkbox" id="doc_1" style={{ boxShadow: "none" }}></input>
							<label className="check-box-heading">
								ご本人確認書類をコピーして離婚届(婚姻届)と一緒に直接郵送で送る
							</label>
							<br></br>
							<input type="checkbox" id="doc_2" style={{ boxShadow: "none" }}></input>
							<label className="check-box-heading">ご本人確認書類を画像ファイルで送る</label>

							<br></br>
							<p>
								以下、【ご本人確認書類を画像ファイルで送る】にチェックをされた方はファイルを選択してください。
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
									ファイルを選択
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
									ファイルを選択
								</label>
								<p style={{ textAlign: "center", marginTop: "8px" }}>{file2}</p>
							</div>
						</div>
						<div>
							<p style={{ color: "red" }}>
								※ご本人確認書類は、ご依頼人様（夫・妻のどちらか１名）のみで構いません。
							</p>{" "}
							<p>
								※ご本人確認書類は、運転免許証、健康保険証、国民年金手帳、パスポート、住民票など氏名・住所等が確認できるもの１点をご準備ください。運転免許証の方で住所変更などで裏面記載の場合は、表面・裏面の２枚をお送りください。
								<br></br>
								※画像はスマートフォン等で撮影したもので大丈夫です。後から画像を送りたい方は「●●@●●」に画像を添付して送信していただいても結構です。
							</p>
						</div>
						<div className="form-sec-8">
							<label>
								<p className="label-heading">
									<span className="any-badge">任意</span>
									備考
								</p>
							</label>

							<textarea rows={10} cols={42} style={{ border: "none" }} className="text-area"></textarea>
							<br></br>
							<div className="privacy">
								<input type="checkbox" style={{ boxShadow: "none" }}></input>
								<label>
									<span style={{ marginLeft: "8px" }}>の内容を確認し、同意する</span>
									<a
										href="/"
										style={{
											marginLeft: "8px",
											color: "#3594AA",
										}}
									>
										「プライバシーポリシー」
									</a>
								</label>
							</div>
						</div>
						<button>送　信</button>
					</form>
				</div>
			</center>
		</div>
	);
}

export default Form;
