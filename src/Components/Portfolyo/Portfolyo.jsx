import React from "react";
import Card from "../../data/cardData";

const Portfolyo = () => {
  return (
    <div className="portfolyo" id="portfolyo">
      <h1 className="portfolyoTitle">portfolyo</h1>
      <div>
        <section className="cards-wrapper">
          <Card
            href="https://github.com/puply/reactBasicWeb"
            bgImg="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU"
            title="ARCHIV"
            description="It is an informative website about history."
            tags={["GITHUB"]}
          />
          <Card
            href="https://github.com/puply/FirstFullPage"
            bgImg="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU"
            title="SONOX"
            description="It is a modern website designed for contemporary companies."
            tags={["GITHUB"]}
          />
          <Card
            href="https://github.com/puply/restaurant-website"
            bgImg="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU"
            title="KMK"
            description="
            It is a website designed for small restaurant businesses."
            tags={["GITHUB"]}
          />
        </section>
      </div>
    </div>
  );
};

export default Portfolyo;
