import React from 'react';
import { Container } from 'react-bootstrap';
import threemenImg from '../../assets/mv.png';
import bottomImg from '../../assets/グループ 326.svg';
import './FirstPageBackground.css';

function FirstPageBackground() {
  return (
    <div style={{ height: '100vh' }}>
      {/* <img src={threemenImg} alt="" /> */}
      <Container
        fluid={true}
        style={{
          backgroundImage: `url("${threemenImg}")`,
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: '100%',
        }}
      >
        <img src={bottomImg} alt="" className="firstPageBackground" />
      </Container>
    </div>
  );
}

export default FirstPageBackground;
