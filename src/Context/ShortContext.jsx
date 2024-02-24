import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const ShortContext = createContext();
const shortKey = "42513526-b7f83626ef13ac9ffaa6f7398";
export const ShortProvider = ({ children }) => {
  const [shortVideo, setShortVideo] = useState([]);
  const getVideoData = async () => {
    try {
      const { data, status } = await axios({
        method: "GET",
        url: `https://pixabay.com/api/videos/`,
        params: {
          key: shortKey,
        },
      });

      if (status === 200 || status === 201) {
        setShortVideo(data?.hits);
      }
    } catch (error) {}
  };
  useEffect(() => {
    getVideoData();
  }, []);
  return (
    <ShortContext.Provider value={{ shortVideo }}>
      {children}
    </ShortContext.Provider>
  );
};

export const useData = () => useContext(ShortContext);
