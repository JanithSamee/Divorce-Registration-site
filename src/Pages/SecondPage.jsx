import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './SecondPage.css';
import secondPageBottomImg from '../assets/グループ 12.svg';

function SecondPage() {
  return (
    <Container fluid={true} className="secondPageContainer">
      <Row
        className="secondPageContainer-title font-ultra"
        style={{ fontWeight: 600, letterSpacing: '0.5vw' }}
      >
        家族や知人に離婚したことを
        <br /> 知られたくない
      </Row>
      <Row
        className="secondPageContainer-middlecontent"
        style={{ fontWeight: 100 }}
      >
        こんな想いはありませんか？
        <br />
        <br />
        <br />
        離婚届の証人については家族や知人に頼むのが一般的です。 <br />
        <div>
          しかし、中には
          <span>証人が見つからない方や家族や知人に離婚したことを知ら</span>
        </div>
        <div>
          <span>れたくない</span>という方もいらっしゃると思います。
        </div>
        <br />
        <br />
        <br />
        全く知らない赤の他人に依頼することも可能ですが、個人情報の取り扱い
        <br />
        などの問題が発生します。
      </Row>
      <Row>
        <img src={secondPageBottomImg} alt="" />
      </Row>
    </Container>
  );
}

export default SecondPage;
