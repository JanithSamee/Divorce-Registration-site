import SubTitle from "../SubTitle/SubTitle";
import "./how-to-use-style.css";
import StepBox from "./StepBox";

function HowtoUse() {
	return (
		<div className="how-to-use" id="howtouse-section">
			<center>
				<div className="title-container">
					<SubTitle title="ご利用方法" />
				</div>
				<div className="box-container">
					<StepBox
						content="お申し込みフォームに必要情報を記入しお申し込みください。 フォームでのお申し込みの際に、クレジットカード決済※1を行っていただきます。 お申し込み後すぐに、ご入力いただいたお客様のメールアドレス宛に自動返信メールが届きます※2ので、メール内に記載されている案内に従って手続きを行ってください。 "
						title="お申し込み・お支払い"
						footer="※1　支払い方法はクレジットカード払いのみになります。"
						number="01"
						type="1"
						footer2=" ※2　自動返信メールが届かない場合は設定や迷惑メールフォルダーをご確認ください。"
					></StepBox>
				</div>
				<div className="box-container">
					<StepBox
						content="支払い完了後、自動返信メールに記載されているリンクから、離婚届の証人代行に必要な書類をダウンロード・印刷し、情報を記入してください。 情報を記入後、記載内容に不備がないか確認し下記住所へ必要書類を郵送ください。 住所：〒000-0000　●●●●●●●●●●●●●●●●●●●●●●●●●●●●"
						title="必要書類の記入・郵送"
						footer="※2　自動返信メールが届かない場合は設定や迷惑メールフォルダーをご確認ください。"
						number="02"
						type="2"
					></StepBox>
				</div>
				<div className="box-container">
					<StepBox
						content="ご記入いただいた内容を確認し、証人の署名捺印を行います。証人後、日本郵便のスマートレターでお客様の元へ離婚届を返送致します。 離婚届がお客様のお手元に届いた時点で離婚届証人代行サービス業務の完了となります。"
						title="証人代行後、離婚届の受取"
						number="03"
						type="2"
						isLast={true}
					></StepBox>
				</div>
			</center>
		</div>
	);
}

export default HowtoUse;
