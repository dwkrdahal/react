import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {

  const getCurrentDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const todayDate = getCurrentDate();

  const [data, setData] = useState({});

  useEffect(() => {
    // console.log(currency);
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${todayDate}/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
  }, [currency]);

  
  return data;
}

export default useCurrencyInfo;
