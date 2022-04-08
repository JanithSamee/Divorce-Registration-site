import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./myCard-styles.css";
import icon1 from "../../assets/icon1.svg";
import icon2 from "../../assets/icon2.svg";
import icon3 from "../../assets/icon3.svg";
import icon4 from "../../assets/icon4.svg";

import MyCard from "./MyCard";

function MyCardSection() {
  return (
    <>
      <div className="cardBackground1">
        <div className="title">●サイト名●の</div>
        <div className="title">
          <span className="titleNum">4</span>
          <span className="titleBlack">つの特徴</span>
        </div>
        <div className="cardBackground2">
          <div class="container">
            <div class="row align-items-start">
              <div class="col">
                <MyCard
                  number="01"
                  title="対面不要"
                  body="メールと書面の郵送のみで手続きが完結するため、対面でのやり取りは不要です。そのためお忙しい方やプライバシーを気にする方も安心してご利用できます。"
                  imagePath={icon1}
                ></MyCard>
              </div>
              <div class="col">
                <MyCard
                  number="02"
                  title="日本全国対応"
                  body="対面でのやり取りが不要なため日本全国の方々のご依頼に対応することが可能です。証人の署名捺印がされた離婚届は日本郵便のスマートレターでお客様へ返送致します"
                  imagePath={icon2}
                ></MyCard>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row  align-items-center">
              <div class="col">
                <MyCard
                  number="03"
                  title="簡単手続き"
                  body="離婚届証人代行キットのダウンロードやお支払い方法の多様化など、徹底的に無駄を排除した手続きフローによりお客様が負担を感じずに手続きを完了することが可能です"
                  imagePath={icon3}
                ></MyCard>
              </div>
              <div class="col">
                <MyCard
                  number="04"
                  title="シンプルな料金設定"
                  body="費用は料金表に記載された金額のみになります。弊社からお客様へ離婚届を返送する際のスマートレター代：180円も金額に含まれています。"
                  imagePath={icon4}
                ></MyCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyCardSection;
