import React, { useState, useEffect } from 'react';

const Quotes = () => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        const result = await fetch('https://api.api-ninjas.com/v1/quotes?category=inspirational', {
          method: 'GET',
          headers: {
            'X-Api-Key': 'I4NHOgvUp8LfsVS0Ptn7fA==ZynukpTX4xBvf7gG',
            'Content-Type': 'application/json',
          },
        });
        const json = await result.json();
        setData(json);
      } catch (error) {
        setError(true);
      }
      setIsPending(false);
    };
    fetchData();
  }, [setData]);

  if (error) return <div>Unable to fetch quotes!</div>;
  if (isPending) return <div>Loading...</div>;
  return (
    <>
      {data.map((item) => (
        <div key={item.author} className="quotes">
          <p>{item.quote}</p>
          <span>
            &quot;
            {item.author}
            &quot;
          </span>
        </div>
      ))}
    </>
  );
};

export default Quotes;
