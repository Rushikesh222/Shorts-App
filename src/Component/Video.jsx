import { useData } from "../Context/ShortContext";

export const Video = () => {
  const { shortVideo } = useData();
  console.log(shortVideo);
  return (
    <div>
      <h1>Welcome to shorts</h1>
    </div>
  );
};
