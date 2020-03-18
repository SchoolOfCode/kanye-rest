import React, { useState, useEffect } from "react";

import { customFetch } from "../../libs/customFetch";

function Quote() {
  const [quote, setQuote] = useState();

  useEffect(() => {
    getQuote();
  }, []);

  async function getQuote() {
    const { quote } = await customFetch("http://api.kanye.rest");
    setQuote(quote);
  }
  return (
    <div>
      <h1>{quote}</h1>
      <button onClick={getQuote}>new quote</button>
    </div>
  );
}

export default Quote;
