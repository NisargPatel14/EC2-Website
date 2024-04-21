"use client";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState,useCallback } from "react";

const Image = dynamic(() => import("next/image"));

export default function ImageOfTheDay() {
  const [media, setMedia] = useState(null);
  const [youtubeEmbedUrl, setYoutubeEmbedUrl] = useState("");
  const isLoadingRef = useRef(true);

  const fetchData = useCallback(() => {
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=CHLvVT4qa71xUgNFnsOaLTJNswi4aOsJozHLdTes"
    )
      .then((response) => response.json())
      .then((data) => {
        setMedia(data);
        setYoutubeEmbedUrl(
          data.media_type === "video"
            ? `https://www.youtube.com/embed/${data.url.split("/").pop()}`
            : ""
        );
        isLoadingRef.current = false;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        isLoadingRef.current = false;
      });
  }, []);

  useEffect(() => {
    if (isLoadingRef.current) {
      fetchData();
    }
  }, [fetchData]);

  if (isLoadingRef.current) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative w-1/2 h-1/2">
      {media.media_type === "video" && (
        <iframe
          className="mx-auto w-full h-full"
          src={youtubeEmbedUrl}
          title="NASA Video of the Day"
          allowFullScreen
        ></iframe>
      )}
      {media.media_type === "image" && (
        <Image
          className="mx-auto"
          layout="fill"
          src={media.hdurl || media.url}
          alt="Image of the day"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          unoptimized
        />
      )}
    </div>
  );
}