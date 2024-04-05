import React from "react";
import quotesData from "../JsonData/PortfolioData.json";

const Insight = () => {
  // Data from data.json
  const data = quotesData.portfolioData;
  return (
    <div className="grid md:grid-cols-2 md:grid-rows-2 gap-5">
      {data.map((item, index) => (
        <div key={index} className="card">
          <h3>{item.title}</h3>
          <ul>
            {item.items.map((text, idx) => (
              <li key={idx} className=" list-disc ml-5">
                {text}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Insight;
