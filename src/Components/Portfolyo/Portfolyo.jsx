import React from "react";
import Card from "../../data/cardData";
import proje1 from "../../assets/proje1.png";
import proje2 from "../../assets/proje2.png";
import proje3 from "../../assets/proje3.png";
import proje4 from "../../assets/proje4.png";
const Portfolyo = () => {
  return (
    <div className="portfolyo" id="portfolyo">
      <h1 className="portfolyoTitle">portfolyo</h1>
      <div>
        <section className="cards-wrapper">
          <Card
            href="https://github.com/puply/foods"
            backgroundImage={proje1}
            title="Foodie's"
            description="Welcome to the website that offers rich food menus for medium-sized restaurant businesses."
            tags={["GITHUB"]}
          />
          <Card
            href="https://github.com/puply/reactBasicWeb"
            backgroundImage={proje2}
            title="ARCHIV"
            description="It is an informative website about history."
            tags={["GITHUB"]}
          />
          <Card
            href="https://github.com/puply/restaurant-website"
            backgroundImage={proje3}
            title="KMK"
            description="It is a website designed for small restaurant businesses."
            tags={["GITHUB"]}
          />
          <Card
            href="https://github.com/puply/FirstFullPage"
            backgroundImage={proje4}
            title="SONOX"
            description="It is a modern website designed for contemporary companies."
            tags={["GITHUB"]}
          />
        </section>
      </div>
    </div>
  );
};


export default Portfolyo;
