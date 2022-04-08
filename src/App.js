import React from "react";
import MyCard from "./Components/MyCard/MyCard";
import icon from "../src/assets/icon1.svg";



function App() {
  return (
    <div>
      <MyCard
        number="01"
        title="対面不要"
        body="メールと書面の郵送のみで手続きが完結するため、対面でのやり取りは不要です。そのためお忙しい方やプライバシーを気にする方も安心してご利用できます。"
        imagePath={icon}
      ></MyCard>
    </div>
  );
}

export default App;
