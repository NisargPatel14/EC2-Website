"use client"
import { useEffect, useState } from 'react';

export default function ImageOfTheDay({ height, width }) {
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=CHLvVT4qa71xUgNFnsOaLTJNswi4aOsJozHLdTes')
      .then(response => response.json())
      .then(data => {
        setImage(data.url);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, []);
  

  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  return (
    <div>
      {image && <img className="mx-auto" style={{height: `${height}px`, width: `${width}px`}} src={image} alt="Image of the day" />}
    </div>
  );
}