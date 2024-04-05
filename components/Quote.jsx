"use client";
import React, { useState, useEffect } from "react";
import quotesData from "../JsonData/Data.json";

const Quote = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment quoteIndex to display the next quote
      setQuoteIndex((prevIndex) => (prevIndex + 1) % quotesData.quotes.length);
    }, 5000); // Change quote every 1 second

    return () => clearInterval(intervalId); // Cleanup function to clear interval
  }, []); // Empty dependency array to run effect only once on component mount

  // Get the current quote based on quoteIndex
  const currentQuote = quotesData.quotes[quoteIndex].englishQuote;

  return (
    <div className="card flex items-center justify-center ">
      <p>{currentQuote}</p>
    </div>
  );
};

export default Quote;
