import React from "react";
import card from "./card.module.css";
import image from "../../assets/image/abc.jpeg";
const Index = () => {
  return (
    <div>
      <div className={card.contain}>
        <div className={card.photo}>
          <img src={image} alt="暂无" />
        </div>
        <div className={card.rightsection}>
          <div>
            <h2 className={card.title}>汉堡</h2>
            <p className={card.content}> 百分百纯牛肉</p>
          </div>
          <div className={card.pricewrap}>
            <div className={card.price}>12</div>
            <div className={card.num}>数量</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
